// Statik site jeneratörü.
// Çıktı: ../dist-site  → Netlify'a sürükle-bırak ile yüklenebilir.
// Çalıştırma: node site/build.mjs

import { mkdir, writeFile, rm, copyFile, access, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "./data/site.mjs";
import { services, coreServices, groupsOrdered } from "./data/services.mjs";
import { districts } from "./data/districts.mjs";
import { localities, localitiesOf } from "./data/localities.mjs";
import { posts, categoryList, postsByCategory } from "./data/posts.mjs";
import { intents } from "./data/intents.mjs";
import { css } from "./lib/styles.mjs";
import { cover } from "./lib/covers.mjs";
import { themeOfService, themeOfCategory } from "./lib/theme.mjs";
import { setPhotos, setPhotoAliases } from "./lib/blocks.mjs";
import { setAssetVersion } from "./lib/layout.mjs";
import { createHash } from "node:crypto";

import { homePage, heroSlides } from "./pages/home.mjs";
import { servicesIndex, servicePage, serviceDistrictPage, serviceGroupPage } from "./pages/services.mjs";
import { regionsIndex, districtPage, localityPage } from "./pages/regions.mjs";
import { localTagPage } from "./pages/local-tag.mjs";
import { localTags } from "./data/local-tags.mjs";
import { blogIndex, blogCategoryPage, postPage } from "./pages/blog.mjs";
import {
  aboutPage, contactPage, quotePage, thanksPage,
  faqPage, privacyPage, notFoundPage,
} from "./pages/corporate.mjs";
import { intentPage, intentDistrictPage } from "./pages/intents.mjs";
import { pricingIndex, pricingServicePage } from "./pages/pricing.mjs";
import { projectsIndex, projectPage } from "./pages/projects.mjs";
import { pricedSlugs, missingPrices, priceUpdated } from "./data/pricing.mjs";
import { publishedProjects } from "./data/projects.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = join(ROOT, "dist-site");
const PUBLIC = join(ROOT, "public");

const ctx = { services, districts, localities, posts };

let written = 0;
const urls = [];

/* ------------------------------------------------------------- yardımcılar */
async function emit(routePath, html, { priority = 0.6, changefreq = "monthly", lastmod } = {}) {
  // "/hizmetler/x/" -> dist-site/hizmetler/x/index.html   |  "/404.html" -> dist-site/404.html
  const rel = routePath.endsWith(".html")
    ? routePath.replace(/^\//, "")
    : join(routePath.replace(/^\//, ""), "index.html");
  const file = join(OUT, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
  written++;
  if (!routePath.endsWith(".html") && !/tesekkurler/.test(routePath)) {
    urls.push({ loc: site.domain + routePath, priority, changefreq, lastmod });
  }
}

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function copyIfExists(from, to) {
  if (await exists(from)) {
    await mkdir(dirname(to), { recursive: true });
    await copyFile(from, to);
    return true;
  }
  console.warn(`  ! bulunamadı, atlandı: ${from}`);
  return false;
}

const today = new Date().toISOString().slice(0, 10);

// Sitemap lastmod yalnızca gerçek içerik tarihi bilinen sayfalara yazılır.
// Şablondan üretilen sayfalara her build'de "bugün" yazmak, Google'a
// 8000 sayfanın değiştiğini söyleyen yanlış bir sinyal oluyordu.
const newestIn = (list) =>
  list.reduce((max, p) => {
    const d = p.updated || p.published;
    return d > max ? d : max;
  }, "");
const newestPost = newestIn(posts);

/* ------------------------------------------------------------------- build */
console.log("\nCB İnşaat — statik site derleniyor\n");

// Windows'ta klasörün kendisi (gezgin/antivirüs nedeniyle) kilitli olabildiği için
// önce içeriği tek tek siliniyor; klasörün kendisi silinmiyor.
await mkdir(OUT, { recursive: true });
for (const entry of await readdir(OUT)) {
  await rm(join(OUT, entry), { recursive: true, force: true, maxRetries: 3, retryDelay: 120 });
}

// 1. Stil
await mkdir(join(OUT, "assets"), { recursive: true });
const cssText = css.trim();
await writeFile(join(OUT, "assets", "site.css"), cssText, "utf8");
// Sürüm damgası: CSS içeriği değişince tarayıcı yeni dosyayı çeker.
setAssetVersion(createHash("sha1").update(cssText).digest("hex").slice(0, 8));

// 2. Görseller — sharp varsa yeniden boyutlandırılıp sıkıştırılır (LCP için kritik),
//    yoksa kaynak dosyalar olduğu gibi kopyalanır.
let sharp = null;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.warn("  ! sharp bulunamadı — görseller sıkıştırılmadan kopyalanacak");
}

async function image(src, name, { width, height, fit = "cover", jpgQuality = 78, webpQuality = 72 }) {
  const from = join(PUBLIC, src);
  if (!(await exists(from))) {
    console.warn(`  ! bulunamadı, atlandı: ${src}`);
    return;
  }
  if (!sharp) {
    await copyIfExists(from, join(OUT, "assets", `${name}.jpg`));
    return;
  }
  const base = sharp(from).resize({ width, height, fit, withoutEnlargement: true });
  await base.clone().jpeg({ quality: jpgQuality, mozjpeg: true, progressive: true })
    .toFile(join(OUT, "assets", `${name}.jpg`));
  await base.clone().webp({ quality: webpQuality })
    .toFile(join(OUT, "assets", `${name}.webp`));
}

await image("photos/hero.jpg", "hero", { width: 1920, jpgQuality: 80 });

// Hero slaytları — ana sayfada sırayla geçen 6 hizmet fotoğrafı
for (const [i, h] of heroSlides.entries()) {
  await image(`photos/${h.source}.jpg`, `hero-${i + 1}`, { width: 1920, jpgQuality: 80 });
}
await image("og.png", "og", { width: 1200, height: 630, jpgQuality: 82 });
await image("malatya-panorama.jpg", "malatya", { width: 1600 });
await image("neden-biz.jpg", "neden-biz", { width: 1920, jpgQuality: 80 });

// 2a. Yazı tipleri — public/fonts/*.woff2 → /assets/fonts/
//     Dosyalar siteye özel alt kümelenmiş halde depoda duruyor; burada sadece
//     kopyalanıyorlar. /assets/* için bir yıllık immutable önbellek geçerli.
if (await exists(join(PUBLIC, "fonts"))) {
  await mkdir(join(OUT, "assets", "fonts"), { recursive: true });
  let fontCount = 0;
  for (const file of await readdir(join(PUBLIC, "fonts"))) {
    // OFL.txt de kopyalanıyor: lisans, dağıtılan font dosyalarına eşlik etmeli.
    if (!/\.(woff2|txt)$/.test(file)) continue;
    await copyFile(join(PUBLIC, "fonts", file), join(OUT, "assets", "fonts", file));
    fontCount++;
  }
  console.log(`  ✓ ${fontCount} yazı tipi dosyası kopyalandı`);
}

// 2b. Gerçek fotoğraflar — public/photos/<slug>.jpg varsa kapak yerine o kullanılır.
const photoSlugs = new Set();
if (await exists(join(PUBLIC, "photos"))) {
  await mkdir(join(OUT, "assets", "photos"), { recursive: true });
  for (const file of await readdir(join(PUBLIC, "photos"))) {
    const m = file.match(/^(.+)\.(jpe?g|png|webp)$/i);
    if (!m) continue;
    const slug = m[1];
    if (sharp) {
      // Aynı kaynaktan hem JPEG hem WebP: kapak görselleri sayfaların LCP
      // öğesi olduğu için WebP ile ~%40 daha az bayt iniyor.
      const base = sharp(join(PUBLIC, "photos", file))
        .resize({ width: 1200, height: 675, fit: "cover", withoutEnlargement: true });
      await base.clone().jpeg({ quality: 78, mozjpeg: true, progressive: true })
        .toFile(join(OUT, "assets", "photos", `${slug}.jpg`));
      await base.clone().webp({ quality: 72 })
        .toFile(join(OUT, "assets", "photos", `${slug}.webp`));
    } else {
      await copyFile(join(PUBLIC, "photos", file), join(OUT, "assets", "photos", `${slug}.jpg`));
    }
    photoSlugs.add(slug);
  }
  console.log(`  ✓ ${photoSlugs.size} gerçek fotoğraf kullanıldı`);
}
setPhotos(photoSlugs);

// Blog yazıları kendi fotoğrafları yoksa ilişkili hizmetin fotoğrafını kullanır.
const aliases = new Map();
for (const p of posts) {
  if (photoSlugs.has(p.slug)) continue;
  const hit = (p.services || []).find((sl) => photoSlugs.has(sl));
  if (hit) aliases.set(p.slug, hit);
}
setPhotoAliases(aliases);
console.log(`  ✓ ${aliases.size} blog yazısı ilgili hizmet fotoğrafını kullanıyor`);

// 2c. Kapak görselleri — fotoğrafı olmayan her hizmet ve yazı için SVG üretilir.
await mkdir(join(OUT, "assets", "covers"), { recursive: true });
let coverCount = 0;
for (const s of services) {
  if (photoSlugs.has(s.slug)) continue;
  const t = themeOfService(s);
  await writeFile(
    join(OUT, "assets", "covers", `${s.slug}.svg`),
    cover({ slug: s.slug, color: t.color, soft: t.soft, icon: s.icon || t.icon, label: t.label || s.group }),
    "utf8"
  );
  coverCount++;
}
for (const p of posts) {
  if (photoSlugs.has(p.slug) || aliases.has(p.slug)) continue;
  const t = themeOfCategory(p.category);
  await writeFile(
    join(OUT, "assets", "covers", `${p.slug}.svg`),
    cover({ slug: p.slug, color: t.color, soft: t.soft, icon: t.icon, label: p.category }),
    "utf8"
  );
  coverCount++;
}
console.log(`  ✓ ${coverCount} kapak görseli üretildi`);

// 2d. Kök dizine olduğu gibi kopyalanacak dosyalar.
//     public/root/ içine koyduğunuz her şey sitenin kökünde yayınlanır:
//     google<...>.html (Search Console doğrulama), BingSiteAuth.xml, ads.txt vb.
if (await exists(join(PUBLIC, "root"))) {
  const rootFiles = await readdir(join(PUBLIC, "root"));
  for (const file of rootFiles) {
    await copyFile(join(PUBLIC, "root", file), join(OUT, file));
  }
  if (rootFiles.length) console.log(`  ✓ ${rootFiles.length} kök dosyası kopyalandı (${rootFiles.join(", ")})`);
}

// 3. Favicon ve uygulama ikonları — marka monogramından üretilir.
//    Kaynak: public/root/cb-insaat-logo-mark.png (siyah zeminli CB monogramı)
const MARK = join(PUBLIC, "root", "cb-insaat-logo-mark.png");
if (sharp && (await exists(MARK))) {
  // Monogramı siyah kare zemine ortalayıp her boyutta üretiyoruz.
  const square = async (size, pad) => {
    const inner = size - pad * 2;
    const mark = await sharp(MARK)
      .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    return sharp({
      create: { width: size, height: size, channels: 4, background: { r: 10, g: 10, b: 10, alpha: 1 } },
    })
      .composite([{ input: mark, gravity: "center" }])
      .png({ compressionLevel: 9 });
  };
  await (await square(32, 2)).toFile(join(OUT, "favicon-32.png"));
  await (await square(180, 16)).toFile(join(OUT, "apple-touch-icon.png"));
  await (await square(192, 16)).toFile(join(OUT, "icon-192.png"));
  await (await square(512, 44)).toFile(join(OUT, "icon-512.png"));
  console.log("  ✓ favicon ve uygulama ikonları üretildi (monogram)");
} else {
  console.warn("  ! monogram bulunamadı, favicon üretilemedi");
}

// 4. Sayfalar --------------------------------------------------------------
console.log("Sayfalar üretiliyor…");

await emit("/", homePage(ctx), { priority: 1.0, changefreq: "weekly", lastmod: newestPost });

// Hizmetler
await emit("/hizmetler/", servicesIndex(ctx), { priority: 0.9, changefreq: "monthly" });
for (const g of groupsOrdered) {
  await emit(g.href, serviceGroupPage(g, ctx), { priority: 0.88, changefreq: "monthly" });
}
console.log(`  ✓ ${groupsOrdered.length} hizmet alanı sayfası`);
for (const s of services) {
  await emit(`/hizmetler/${s.slug}/`, servicePage(s, ctx), { priority: 0.85, changefreq: "monthly" });
}
console.log(`  ✓ ${services.length} hizmet sayfası`);

// Hizmet × ilçe
let sd = 0;
for (const s of coreServices) {
  for (const d of districts) {
    await emit(`/hizmetler/${s.slug}/${d.slug}/`, serviceDistrictPage(s, d, ctx), {
      priority: 0.7, changefreq: "monthly",
    });
    sd++;
  }
}
console.log(`  ✓ ${sd} hizmet × ilçe sayfası (${coreServices.length} hizmet × ${districts.length} ilçe)`);

// Bölgeler
await emit("/bolgeler/", regionsIndex(ctx), { priority: 0.9, changefreq: "monthly" });
for (const d of districts) {
  await emit(`/bolgeler/${d.slug}/`, districtPage(d, ctx), { priority: 0.8, changefreq: "monthly" });
}
console.log(`  ✓ ${districts.length} ilçe sayfası`);

let lc = 0;
let tc = 0;
for (const d of districts) {
  for (const l of localitiesOf(d.slug)) {
    await emit(`/bolgeler/${d.slug}/${l.slug}/`, localityPage(l, d, ctx), {
      priority: l.featured ? 0.6 : 0.5, changefreq: "monthly",
    });
    lc++;
    // Mahalle × hizmet etiketleri: elektrikçi, sucu, tesisatçı, doğalgazcı…
    for (const t of localTags) {
      await emit(`/bolgeler/${d.slug}/${l.slug}/${t.slug}/`, localTagPage(l, d, t, ctx), {
        priority: l.featured ? 0.55 : 0.45, changefreq: "monthly",
      });
      tc++;
    }
  }
}
console.log(`  ✓ ${lc} mahalle sayfası`);
console.log(`  ✓ ${tc} mahalle × hizmet etiketi (${localTags.length} etiket × ${lc} mahalle)`);

// Blog
await emit("/blog/", blogIndex(ctx), { priority: 0.9, changefreq: "weekly", lastmod: newestPost });
for (const c of categoryList) {
  await emit(`/blog/kategori/${c.slug}/`, blogCategoryPage(c, ctx), {
    priority: 0.75, changefreq: "weekly", lastmod: newestIn(postsByCategory(c.name)),
  });
}
for (const p of posts) {
  await emit(`/blog/${p.slug}/`, postPage(p, ctx), {
    priority: 0.7, changefreq: "yearly", lastmod: p.updated || p.published,
  });
}
console.log(`  ✓ ${posts.length} blog yazısı + ${categoryList.length} kategori sayfası`);

// Niyet sayfaları (acil / en yakın)
let ic = 0;
for (const i of intents) {
  await emit(`/${i.slug}/`, intentPage(i, ctx), { priority: 0.85, changefreq: "monthly" });
  ic++;
  for (const d of districts) {
    await emit(`/${i.slug}/${d.slug}/`, intentDistrictPage(i, d, ctx), {
      priority: 0.65, changefreq: "monthly",
    });
    ic++;
  }
}
console.log(`  ✓ ${ic} niyet sayfası (${intents.length} başlık × ${districts.length + 1})`);

// Fiyat sayfaları
await emit("/fiyatlar/", pricingIndex(ctx), { priority: 0.9, changefreq: "monthly" });
let fc = 1;
for (const slug of pricedSlugs) {
  const s = services.find((x) => x.slug === slug);
  if (!s) continue;
  await emit(`/fiyatlar/${s.slug}/`, pricingServicePage(s, ctx), {
    priority: 0.75, changefreq: "monthly",
  });
  fc++;
}
console.log(`  ✓ ${fc} fiyat sayfası${priceUpdated ? ` (güncelleme: ${priceUpdated})` : " (rakamlar henüz girilmedi)"}`);

// Projeler — liste her zaman yayınlanır, detay sayfaları published:true kayıtlar için
await emit("/projeler/", projectsIndex(ctx), { priority: 0.85, changefreq: "monthly" });
for (const p of publishedProjects) {
  await emit(`/projeler/${p.slug}/`, projectPage(p, ctx), {
    priority: 0.7, changefreq: "yearly",
  });
}
console.log(
  `  ✓ ${publishedProjects.length + 1} proje sayfası` +
    (publishedProjects.length ? "" : " (fotoğraflı proje kaydı yok — site/data/projects.mjs)")
);

// Kurumsal
await emit("/hakkimizda/", aboutPage(ctx), { priority: 0.7, changefreq: "yearly" });
await emit("/iletisim/", contactPage(ctx), { priority: 0.8, changefreq: "yearly" });
await emit("/teklif/", quotePage(ctx), { priority: 0.9, changefreq: "yearly" });
await emit("/sss/", faqPage(ctx), { priority: 0.7, changefreq: "yearly" });
await emit("/gizlilik/", privacyPage(ctx), { priority: 0.2, changefreq: "yearly" });
await emit("/tesekkurler/", thanksPage(ctx));
await emit("/404.html", notFoundPage(ctx));
console.log("  ✓ 7 kurumsal sayfa");

/* ------------------------------------------------------------- SEO dosyaları */
urls.sort((a, b) => b.priority - a.priority || a.loc.localeCompare(b.loc));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `
    <lastmod>${u.lastmod}</lastmod>` : ""}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
await writeFile(join(OUT, "sitemap.xml"), sitemap, "utf8");

await writeFile(
  join(OUT, "robots.txt"),
  // /tesekkurler/ sayfası noindex etiketi taşıyor ve sitemap'e girmiyor.
  // Burada Disallow yazmak, Google'ın sayfayı tarayıp o noindex'i görmesini
  // engellerdi; bu yüzden taramaya açık bırakılıyor.
  `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap.xml
`,
  "utf8"
);

await writeFile(
  join(OUT, "site.webmanifest"),
  JSON.stringify(
    {
      name: site.name,
      short_name: "CB İnşaat",
      description: site.shortDescription,
      start_url: "/",
      display: "standalone",
      background_color: "#f6f5f2",
      theme_color: "#0e1013",
      lang: "tr",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
        { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    null,
    2
  ),
  "utf8"
);

// Netlify: önbellek ve güvenlik başlıkları
await writeFile(
  join(OUT, "_headers"),
  `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/sitemap.xml
  Cache-Control: public, max-age=3600
`,
  "utf8"
);

// Eski (vinext) URL yapısından yeni yapıya kalıcı yönlendirme.
// Netlify sondaki eğik çizgiyi zaten kendisi normalleştirdiği için splat kuralı eklenmedi.
await writeFile(
  join(OUT, "_redirects"),
  `# Eski site yapısından yeni yapıya
/malatya              /bolgeler/              301
/malatya/:ilce        /bolgeler/:ilce/        301
/malatya/:ilce/:yer   /bolgeler/:ilce/:yer/   301
`,
  "utf8"
);

await writeFile(
  join(OUT, "netlify.toml"),
  `# CB İnşaat — statik site (sürükle-bırak veya Git dağıtımı için)
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
`,
  "utf8"
);

/* ------------------------------------------------------------------ özet */
console.log(`
Tamamlandı.

  Toplam sayfa : ${written}
  Sitemap URL  : ${urls.length}
  Çıktı klasörü: ${OUT}

Netlify'a yüklemek için: dist-site klasörünü app.netlify.com/drop adresine sürükleyin.
`);

/* ------------------------------------------- fiyat rakamı eksik uyarısı */
const eksik = missingPrices();
if (eksik.length) {
  console.log(`YAPILACAK — fiyat rakamı bekleyen ${eksik.length} kalem var.`);
  console.log(`  Dosya: site/data/pricing.mjs`);
  if (!priceUpdated) {
    console.log(`  priceUpdated boş → hiçbir sayfada tablo görünmüyor (kasıtlı).`);
    console.log(`  Rakamları girip priceUpdated'e tarih yazın, tablolar açılsın.\n`);
  } else {
    console.log(`  Aşağıdaki satırlarda min/max hâlâ null:\n`);
    for (const e of eksik.slice(0, 12)) console.log(`   · ${e}`);
    if (eksik.length > 12) console.log(`   · ... +${eksik.length - 12} kalem daha\n`);
  }
}

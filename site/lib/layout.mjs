// Sayfa kabuğu: <head>, üst şerit, navigasyon, kırıntı yolu, alt bilgi.
import { site, waLink, mainNav } from "../data/site.mjs";
import { publishedProjects } from "../data/projects.mjs";
import { categoryList, catSlug as blogCatSlug } from "../data/posts.mjs";
import { groupsOrdered } from "../data/services.mjs";
import { esc, meta, icon, join } from "./html.mjs";
import { jsonLd, breadcrumbs } from "./schema.mjs";

const abs = (p = "/") => (p.startsWith("http") ? p : site.domain + p);

/**
 * CSS sürüm damgası. _headers dosyası /assets/* yolunu "immutable" olarak
 * işaretlediği için, dosya adı değişmediğinde tarayıcı eski CSS'i tutuyordu.
 * build.mjs her derlemede içerikten türetilen kısa bir damga veriyor.
 */
let assetVersion = "1";
export const setAssetVersion = (v) => { assetVersion = v; };

/* ---------------------------------------------------------------- head */
function head({ title, description, path, ogImage, ogType = "website", noindex, schemas = [], published, modified, keywords = [] }) {
  const url = abs(path);
  const img = abs(ogImage || "/assets/og.jpg");
  return join([
    `<meta charset="utf-8">`,
    `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">`,
    `<title>${meta(title, 70)}</title>`,
    `<meta name="description" content="${meta(description)}">`,
    `<link rel="canonical" href="${esc(url)}">`,
    noindex ? `<meta name="robots" content="noindex,follow">` : `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">`,
    `<meta name="theme-color" content="#0e1013">`,
    `<meta name="author" content="${esc(site.name)}">`,
    keywords.length ? `<meta name="keywords" content="${esc([...new Set(keywords)].slice(0, 22).join(", "))}">` : "",
    `<meta name="geo.region" content="TR-44">`,
    `<meta name="geo.placename" content="Malatya">`,
    `<meta name="geo.position" content="${site.geo.lat};${site.geo.lng}">`,
    `<meta name="ICBM" content="${site.geo.lat}, ${site.geo.lng}">`,
    // Arama motoru doğrulama (site.mjs → verification). Boşsa yazılmaz.
    site.verification?.google ? `<meta name="google-site-verification" content="${esc(site.verification.google)}">` : "",
    site.verification?.bing ? `<meta name="msvalidate.01" content="${esc(site.verification.bing)}">` : "",
    site.verification?.yandex ? `<meta name="yandex-verification" content="${esc(site.verification.yandex)}">` : "",
    // Open Graph
    `<meta property="og:type" content="${esc(ogType)}">`,
    `<meta property="og:locale" content="${site.locale}">`,
    `<meta property="og:site_name" content="${esc(site.name)}">`,
    `<meta property="og:title" content="${meta(title, 70)}">`,
    `<meta property="og:description" content="${meta(description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(img)}">`,
    // Ölçüler verilince paylaşım kartı görsel yüklenmeden önce yer ayırır.
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(site.name)} — ${esc(site.tagline)}">`,
    published ? `<meta property="article:published_time" content="${esc(published)}">` : "",
    modified ? `<meta property="article:modified_time" content="${esc(modified)}">` : "",
    // Twitter
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${meta(title, 70)}">`,
    `<meta name="twitter:description" content="${meta(description)}">`,
    `<meta name="twitter:image" content="${esc(img)}">`,
    // İkonlar
    `<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">`,
    `<link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png">`,
    `<link rel="apple-touch-icon" href="/apple-touch-icon.png">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    // Yazı tipleri
    // Yazı tipleri kendi sunucumuzda (bkz. styles.mjs @font-face). Metnin ilk
    // boyanmasında kullanılan iki dosya önceden çekiliyor; gerisi CSS'ten gelir.
    `<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/inter.woff2" crossorigin>`,
    `<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/barlow-condensed-700.woff2" crossorigin>`,
    `<link rel="stylesheet" href="/assets/site.css?v=${assetVersion}">`,
    `<link rel="sitemap" type="application/xml" href="/sitemap.xml">`,
    ...schemas.map(jsonLd),
  ], "\n  ");
}

/* -------------------------------------------------------------- header */
// Açılır paneller ekranın tamamına yayılır; içerik .wrap içinde kalır.
const megaShell = (mod, inner, foot) =>
  `<div class="mega mega--${mod}"><div class="wrap">${inner}${foot ? `<div class="mega-foot">${foot}</div>` : ""}</div></div>`;

function megaServices() {
  const cols = groupsOrdered.map(
    (g) => `<div><p class="mega-title"><a href="${g.href}">${esc(g.name)}</a></p>${g.items
      .map((s) => `<a href="/hizmetler/${s.slug}/">${esc(s.title)}</a>`)
      .join("")}</div>`
  );
  return megaShell(
    "services",
    `<div class="mega-cols">${cols.join("")}</div>`,
    `<a class="arrow-link" href="/hizmetler/">Tüm hizmetler ${icon("arrow")}</a>`
  );
}

function megaRegions(districts, localities) {
  // İki seviyeli: ilçeye tıklayınca mahalleleri açılır (mobil menüyle aynı davranış).
  const tree = districts
    .map((d) => {
      const list = localities.filter((l) => l.district === d.slug);
      return `<details><summary>${esc(d.name)}</summary>
        <div class="reg-links">
          <a href="/bolgeler/${d.slug}/"><strong>Tümü: ${esc(d.name)}</strong></a>
          ${list.map((l) => `<a href="/bolgeler/${d.slug}/${l.slug}/">${esc(l.name)}</a>`).join("")}
        </div>
      </details>`;
    })
    .join("");
  return megaShell(
    "regions",
    `<p class="mega-title">Malatya ilçeleri — ilçeye tıklayın, mahalleler açılsın</p>
     <div class="reg-tree">${tree}</div>`,
    `<span class="text-muted">${localities.length} mahalle ve yerleşim için ayrı sayfa</span>
     <a class="arrow-link" href="/bolgeler/">Bölge rehberi ${icon("arrow")}</a>`
  );
}

function megaBlog(posts) {
  const cats = categoryList;
  return megaShell(
    "blog",
    `<div class="mega-split">
       <div>
         <p class="mega-title">Kategoriler</p>
         <div class="mega-flow">${cats
           .map((c) => `<a href="/blog/kategori/${c.slug}/">${esc(c.name)} <span class="text-muted">(${c.count})</span></a>`)
           .join("")}</div>
       </div>
       <div>
         <p class="mega-title">Son yazılar</p>
         ${posts.slice(0, 5).map((p) => `<a href="/blog/${p.slug}/">${esc(p.title)}</a>`).join("")}
       </div>
     </div>`,
    `<span class="text-muted">${posts.length} rehber içerik · ${cats.length} kategori</span>
     <a class="arrow-link" href="/blog/">Tüm yazılar ${icon("arrow")}</a>`
  );
}

function megaCorporate() {
  const links = [
    { label: "Hakkımızda", href: "/hakkimizda/", sub: "Ekip, çalışma şeklimiz ve garanti" },
    { label: "Fiyatlar", href: "/fiyatlar/", sub: "Fiyatı ne belirliyor, teklif nasıl çıkıyor" },
    { label: "Sık sorulan sorular", href: "/sss/", sub: "Keşif, süre, ödeme ve garanti" },
    { label: "İletişim", href: "/iletisim/", sub: "Telefon, WhatsApp ve çalışma saatleri" },
    { label: "Ücretsiz keşif ve teklif", href: "/teklif/", sub: "Formu doldurun, aynı gün dönelim" },
  ];
  return megaShell(
    "corporate",
    `<p class="mega-title">Kurumsal</p>
     <div class="mega-cols">${links
       .map((l) => `<div><a href="${l.href}"><strong>${esc(l.label)}</strong><br><span class="text-muted" style="font-size:.82rem;font-weight:400">${esc(l.sub)}</span></a></div>`)
       .join("")}</div>`,
    `<span class="text-muted">${esc(site.hoursText)}</span>
     <a class="arrow-link" href="tel:${site.phoneHref}">${esc(site.phoneDisplay)} ${icon("arrow")}</a>`
  );
}

function header(ctx, path) {
  const { services, districts, posts, localities } = ctx;
  const isCur = (href) => (href === "/" ? path === "/" : path.startsWith(href));

  const items = mainNav
    .map((n) => {
      const mega =
        n.mega === "services" ? megaServices() :
        n.mega === "regions" ? megaRegions(districts, localities) :
        n.mega === "blog" ? megaBlog(posts) :
        n.mega === "corporate" ? megaCorporate() : "";
      return `<div class="nav-item">
        <a class="nav-link" href="${n.href}"${isCur(n.href) ? ' aria-current="page"' : ""}>${esc(n.label)}${mega ? `<span class="chev">${icon("chevron")}</span>` : ""}</a>
        ${mega}
      </div>`;
    })
    .join("");

  // Mobil menü: Hizmetler iki seviyeli (grup → alt hizmetler), diğerleri tek seviye.
  const mobileGroups = [
    {
      label: "Hizmetler",
      href: "/hizmetler/",
      sub: groupsOrdered.map((g) => ({
        name: g.name,
        href: g.href,
        links: g.items.map((x) => ({ label: x.title, href: `/hizmetler/${x.slug}/` })),
      })),
    },
    {
      label: "Bölgeler",
      href: "/bolgeler/",
      sub: districts.map((d) => {
        const list = localities.filter((l) => l.district === d.slug);
        return {
          name: d.name,
          href: `/bolgeler/${d.slug}/`,
          links: list.map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` })),
        };
      }),
    },
    {
      label: "Blog",
      href: "/blog/",
      items: categoryList.map((c) => ({ label: c.name, href: `/blog/kategori/${c.slug}/` })),
    },
    {
      label: "Kurumsal",
      href: "/hakkimizda/",
      items: [
        { label: "Hakkımızda", href: "/hakkimizda/" },
        { label: "Sık sorulan sorular", href: "/sss/" },
        { label: "İletişim", href: "/iletisim/" },
        { label: "Gizlilik ve KVKK", href: "/gizlilik/" },
      ],
    },
  ];

  return `<header class="header">
  <div class="wrap header-in">
    <div class="brand">
      <a class="logo" href="/" aria-label="${esc(site.name)} — Malatya anahtar teslim tadilat ve yapı, ana sayfa">
        <img class="logo-wide" src="/cb-insaat-logo.png" alt="CB İnşaat — Elektrik, Mekanik, Yapı" width="644" height="164" decoding="async">
      </a>
      <span class="logo-slogan"><b>${new Date().getFullYear() - site.founded} yıllık tecrübeyle</b><i>hizmetinizdeyiz</i></span>
    </div>
    <nav class="nav" aria-label="Ana menü">${items}</nav>
    <div class="header-cta">
      <a class="header-phone" href="tel:${site.phoneHref}">
        <small>Hemen arayın</small><b>${esc(site.phoneDisplay)}</b>
      </a>
      <a class="btn btn--primary" href="/teklif/">${icon("doc")} Ücretsiz fiyat teklifi</a>
      <label class="burger" for="mnav" aria-label="Menüyü aç">${icon("menu")}</label>
    </div>
  </div>
  <input type="checkbox" id="mnav" aria-label="Menü">
  <nav class="mobile-nav" aria-label="Mobil menü">
    <div class="wrap">
      <a class="mobile-cta" href="/teklif/">${icon("doc")} Ücretsiz fiyat teklifi alın</a>
      ${mobileGroups
        .map((g) =>
          g.sub
            ? `<details><summary>${esc(g.label)}</summary>
            <a href="${g.href}"><strong>Tümü: ${esc(g.label)}</strong></a>
            <div class="m-sub">${g.sub
              .map(
                (sg) => `<details><summary>${esc(sg.name)}</summary>
                <a href="${sg.href}"><strong>Tümü: ${esc(sg.name)}</strong></a>
                <div class="m-links">${sg.links.map((l) => `<a href="${l.href}">${esc(l.label)}</a>`).join("")}</div>
              </details>`
              )
              .join("")}</div>
          </details>`
            : `<details><summary>${esc(g.label)}</summary>
            <a href="${g.href}"><strong>Tümü: ${esc(g.label)}</strong></a>
            ${g.items.map((i) => `<a href="${i.href}">${esc(i.label)}</a>`).join("")}
          </details>`
        )
        .join("")}
      <a href="/projeler/">Tamamlanan projeler</a>
      <a href="/fiyatlar/">Fiyatlar</a>
      <a href="tel:${site.phoneHref}"><strong>${esc(site.phoneDisplay)}</strong></a>
    </div>
  </nav>
</header>`;
}

/* -------------------------------------------------------------- crumbs */
function crumbsHtml(items = []) {
  if (!items.length) return "";
  const all = [{ label: "Ana sayfa", href: "/" }, ...items];
  return `<nav class="crumbs" aria-label="Konum">
  <div class="wrap"><ol>${all
    .map((c, i) =>
      i === all.length - 1
        ? `<li><span aria-current="page">${esc(c.label)}</span></li>`
        : `<li><a href="${c.href}">${esc(c.label)}</a></li>`
    )
    .join("")}</ol></div>
</nav>`;
}

/* -------------------------------------------------------------- footer */
function footer(ctx) {
  const { services, districts, localities } = ctx;
  const topServices = services.filter((s) => s.featured).slice(0, 8);
  const seoLocalities = localities.filter((l) => l.featured).slice(0, 60);

  return `<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-brand-top">
          <a class="logo logo--footer" href="/" aria-label="${esc(site.name)} ana sayfa">
            <img src="/cb-insaat-logo.png" alt="CB İnşaat — Elektrik, Mekanik, Yapı" width="644" height="164" loading="lazy" decoding="async">
          </a>
          <span class="logo-slogan logo-slogan--footer"><b>${new Date().getFullYear() - site.founded} yıllık tecrübeyle</b><i>hizmetinizdeyiz</i></span>
        </div>
        <p>${esc(site.shortDescription)} ${esc(site.founded)} yılından bu yana Malatya merkez ve ilçelerinde keşif, uygulama ve bakım hizmeti veriyoruz.</p>
        <div class="btn-row">
          <a class="btn btn--primary" href="/teklif/">Ücretsiz keşif</a>
          <a class="btn btn--ghost-light" href="${waLink()}" rel="noopener nofollow" target="_blank">WhatsApp</a>
        </div>
      </div>
      <div>
        <h4>Hizmetler</h4>
        <ul>${topServices.map((s) => `<li><a href="/hizmetler/${s.slug}/">${esc(s.title)}</a></li>`).join("")}
        <li><a href="/hizmetler/"><strong>Tüm hizmetler →</strong></a></li></ul>
      </div>
      <div>
        <h4>Bölgeler</h4>
        <ul>${districts.slice(0, 6).map((d) => `<li><a href="/bolgeler/${d.slug}/">${esc(d.name)}</a></li>`).join("")}
        <li><a href="/bolgeler/"><strong>Tüm ilçeler →</strong></a></li>
        <li style="margin-top:14px"><a href="/fiyatlar/">Fiyatlar</a></li>
        ${publishedProjects.length ? `<li><a href="/projeler/">Tamamlanan projeler</a></li>` : ""}
        <li><a href="/teklif/">Teklif alın</a></li></ul>
      </div>
      <div>
        <h4>İletişim</h4>
        <ul class="footer-contact">
          <li>${icon("phone")}<a href="tel:${site.phoneHref}">${esc(site.phoneDisplay)}</a></li>
          <li>${icon("wa")}<a href="${waLink()}" rel="noopener nofollow" target="_blank">WhatsApp ile yazın</a></li>
          <li>${icon("mail")}<a href="mailto:${site.email}">${esc(site.email)}</a></li>
          <li>${icon("pin")}<span>${esc(site.address.district)} / ${esc(site.address.city)}</span></li>
          <li>${icon("clock")}<span>${esc(site.hoursText)}</span></li>
          ${site.social.instagram ? `<li>${icon("instagram")}<a href="${site.social.instagram}" target="_blank" rel="noopener">Instagram</a></li>` : ""}
          ${site.social.facebook ? `<li>${icon("facebook")}<a href="${site.social.facebook}" target="_blank" rel="noopener">Facebook</a></li>` : ""}
          ${site.social.youtube ? `<li>${icon("youtube")}<a href="${site.social.youtube}" target="_blank" rel="noopener">YouTube</a></li>` : ""}
        </ul>
      </div>
    </div>

    <div class="footer-seo">
      <b>Malatya'da hizmet verdiğimiz mahalle ve bölgeler</b>
      ${seoLocalities
        .map((l) => `<a href="/bolgeler/${l.district}/${l.slug}/">${esc(l.name)}</a>`)
        .join(" · ")}
      · <a href="/bolgeler/"><strong>tümü</strong></a>
    </div>

    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${esc(site.name)}. Tüm hakları saklıdır.</span>
      <span><a href="/sitemap.xml">Site haritası</a> · <a href="/gizlilik/">Gizlilik &amp; KVKK</a> · <a href="/iletisim/">İletişim</a></span>
    </div>
  </div>
</footer>`;
}

/* ------------------------------------------------------- yüzen aksiyon */
// Hazır konu seçenekleri. Tıklanınca o metinle WhatsApp açılır.
const waKonular = [
  { k: "Acil elektrikçi lazım", m: "Merhaba, acil elektrikçi lazım. Adres: " },
  { k: "Su tesisatımda arıza var", m: "Merhaba, su tesisatımda arıza var. Bakabilir misiniz? Adres: " },
  { k: "Tadilat için fiyat istiyorum", m: "Merhaba, tadilat düşünüyorum. Keşfe gelip fiyat verebilir misiniz? Yapılacak iş: " },
];

function floatingCta() {
  return `<input type="checkbox" id="wa-chat" aria-hidden="true">
<aside class="wa-panel" role="complementary" aria-label="WhatsApp ile hızlı iletişim">
  <div class="wa-panel-head">
    <span class="ic">${icon("wa")}</span>
    <span class="wa-who"><b>${esc(site.name)}</b><small>Mesai içinde birkaç dakikada dönüyoruz</small></span>
    <label class="wa-close" for="wa-chat" aria-label="Kapat" title="Kapat">×</label>
  </div>
  <div class="wa-panel-body">
    <p class="wa-bubble">Merhaba, hangi konu için yazıyorsunuz?</p>
    ${waKonular
      .map(
        (o) =>
          `<a class="wa-opt" href="${waLink(o.m)}" target="_blank" rel="noopener nofollow">${esc(o.k)} ${icon("arrow")}</a>`
      )
      .join("")}
  </div>
  <div class="wa-panel-foot">
    <a class="wa-other" href="${waLink()}" target="_blank" rel="noopener nofollow">${icon("wa")} Başka bir konu</a>
    <a href="tel:${site.phoneHref}">${icon("phone")} ${esc(site.phoneDisplay)}</a>
  </div>
</aside>
<label class="wa-float" for="wa-chat" role="button" tabindex="0" aria-label="WhatsApp ile hızlı iletişim panelini aç">
  <span class="ic">${icon("wa")}</span>
  <i><small>WhatsApp</small><b>Usta ile görüş</b></i>
</label>
<div class="mobile-bar">
  <a class="call" href="tel:${site.phoneHref}">${icon("phone")} Hemen ara</a>
  <a class="wa" href="${waLink()}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp</a>
  <a class="contact" href="/iletisim/">${icon("mail")} İletişim</a>
</div>
<script>
/* Panel sayfa açılışında kapalı durur; okuyucu bir miktar aşağı indiğinde
   kendiliğinden açılır. Kullanıcı kapatırsa o oturum boyunca kapalı kalır. */
(function () {
  var cb = document.getElementById("wa-chat");
  if (!cb) return;
  var kapali = false;
  try { kapali = sessionStorage.getItem("waKapali") === "1"; } catch (e) {}
  cb.addEventListener("change", function () {
    try { sessionStorage.setItem("waKapali", cb.checked ? "0" : "1"); } catch (e) {}
  });
  if (kapali) return;
  var esik = Math.min(560, Math.round(window.innerHeight * 0.6));
  function bak() {
    if (window.scrollY < esik) return;
    window.removeEventListener("scroll", bak);
    cb.checked = true;
  }
  window.addEventListener("scroll", bak, { passive: true });
  bak();
})();
</script>
`;
}

/* ---------------------------------------------------------------- page */
export function page(opts) {
  const {
    title, description, path, body, ctx,
    crumbs = [], schemas = [], ogImage, ogType, noindex, published, modified,
    bodyClass = "", keywords = [],
  } = opts;

  const allSchemas = crumbs.length
    ? [...schemas, breadcrumbs([{ label: "Ana sayfa", href: "/" }, ...crumbs])]
    : schemas;

  return `<!doctype html>
<html lang="tr" prefix="og: https://ogp.me/ns#">
<head>
  ${head({ title, description, path, ogImage, ogType, noindex, schemas: allSchemas, published, modified, keywords })}
</head>
<body${bodyClass ? ` class="${esc(bodyClass)}"` : ""}>
<a class="sr-only" href="#icerik">İçeriğe geç</a>
${header(ctx, path)}
${crumbsHtml(crumbs)}
<main id="icerik">
${body}
</main>
${footer(ctx)}
${floatingCta()}
</body>
</html>`;
}

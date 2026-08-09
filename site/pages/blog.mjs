// Blog listesi ve yazı sayfaları.
import { site } from "../data/site.mjs";
import { posts, categories, categoryList, postsByCategory, relatedPosts, wordCount, catSlug } from "../data/posts.mjs";
import { getService } from "../data/services.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, dateTR, slugify } from "../lib/html.mjs";
import { articleSchema, faqSchema, itemList } from "../lib/schema.mjs";
import { themeOfCategory, themeVars } from "../lib/theme.mjs";
import {
  postCard, ctaBlock, secHead, faqBlock, pageHead,
  renderBlocks, tocFrom, contactAside, asideLinks, chips, coverImg,
} from "../lib/blocks.mjs";

/* ================================================================= /blog/ */
export function blogIndex(ctx) {
  const featured = posts[0];
  const rest = posts.slice(1);

  const body = `
${pageHead({
  eyebrow: "Blog",
  title: `Elektrik, su ve yapı üzerine <em class="hl">${posts.length} rehber</em>`,
  lead: "Usta çağırmadan önce evde kontrol edebilecekleriniz, karar verirken bakmanız gerekenler ve yaptığımız işlerin arkasındaki mantık. Sahada karşılaştığımız gerçek durumlardan yazıldı.",
  meta: [
    { icon: "doc", text: `${posts.length} yazı` },
    { icon: "layers", text: `${categories.length} kategori` },
    { icon: "calendar", text: `Son güncelleme: ${dateTR(posts[0].updated || posts[0].published)}` },
  ],
})}

<section class="section">
  <div class="wrap">
    <div class="chips mb-0">
      ${categoryList.map((c) => `<a href="/blog/kategori/${c.slug}/">${esc(c.name)} (${c.count})</a>`).join("")}
    </div>

    <div class="mt-l">
      ${secHead("Öne çıkan", featured.title, featured.excerpt)}
      <div class="btn-row" style="margin-top:-24px">
        <a class="btn btn--dark" href="/blog/${featured.slug}/">Yazıyı okuyun ${icon("arrow")}</a>
      </div>
    </div>

    <div class="grid g-3 mt-l">
      ${rest.slice(0, 9).map((p, i) => postCard(p, i)).join("")}
    </div>
  </div>
</section>

${categoryList
  .map(
    (c, ci) => `<section class="section${ci % 2 ? "" : " section--white"}" id="${c.slug}">
  <div class="wrap">
    ${secHead(`${c.count} yazı`, c.name, "")}
    <div class="grid g-3">
      ${postsByCategory(c.name).slice(0, 6).map((p, i) => postCard(p, i)).join("")}
    </div>
    ${
      c.count > 6
        ? `<div class="btn-row mt-m"><a class="btn btn--ghost" href="/blog/kategori/${c.slug}/">${esc(c.name)} kategorisindeki ${c.count} yazının tamamı ${icon("arrow")}</a></div>`
        : ""
    }
  </div>
</section>`
  )
  .join("")}

${ctaBlock({
  title: "Yazıda cevabını bulamadığınız bir durum mu var?",
  text: "Durumu anlatın; telefonda değerlendirip ne yapılması gerektiğini söyleyelim. Gerekmiyorsa \"gerek yok\" demekten de çekinmiyoruz.",
})}
`;

  return page({
    title: "Blog | Malatya Elektrik, Tesisat ve Yapı Rehberleri",
    description: `Elektrik arızası, su kaçağı, hidrofor, sulama ve tadilat üzerine ${posts.length} rehber yazı. Usta çağırmadan önce evde kontrol edebilecekleriniz.`,
    path: "/blog/",
    ctx,
    crumbs: [{ label: "Blog", href: "/blog/" }],
    schemas: [itemList(posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })), "Blog yazıları")],
    body,
  });
}

/* ============================================== /blog/kategori/<slug>/ */
export function blogCategoryPage(cat, ctx) {
  const list = postsByCategory(cat.name);
  const t = themeOfCategory(cat.name);
  const others = categoryList.filter((c) => c.slug !== cat.slug);
  const svc = [...new Set(list.flatMap((p) => p.services || []))].map(getService).filter(Boolean).slice(0, 6);

  const body = `
${pageHead({
  eyebrow: "Blog kategorisi",
  title: `<em class="hl">${esc(cat.name)}</em> yazıları`,
  lead: `${esc(cat.name)} başlığı altında yazdığımız ${cat.count} rehber. Hepsi Malatya'da sahada karşılaştığımız gerçek durumlardan çıktı.`,
  theme: t,
  meta: [
    { icon: "doc", text: `${cat.count} yazı` },
    { icon: "calendar", text: `Son güncelleme: ${dateTR(list[0].updated || list[0].published)}` },
    { icon: "pin", text: "Malatya" },
  ],
})}

<section class="section">
  <div class="wrap">
    <div class="chips mb-0">
      <a href="/blog/">Tüm yazılar</a>
      ${others.map((c) => `<a href="/blog/kategori/${c.slug}/">${esc(c.name)}</a>`).join("")}
    </div>
    <div class="grid g-3 mt-l">${list.map((p, i) => postCard(p, i)).join("")}</div>
  </div>
</section>

${
  svc.length
    ? `<section class="section section--paper2">
  <div class="wrap">
    ${secHead("İlgili hizmetler", `${cat.name} işlerinde ne yapıyoruz?`, "Yazılarda anlattığımız işleri sahada da biz yapıyoruz.")}
    <div class="chips">${svc.map((s) => `<a href="/hizmetler/${s.slug}/">${esc(s.title)}</a>`).join("")}</div>
  </div>
</section>`
    : ""
}

${ctaBlock({
  title: `${cat.name} konusunda bir sorunuz mu var?`,
  text: "Durumu anlatın; telefonda değerlendirip ne yapılması gerektiğini söyleyelim. Gerekmiyorsa \"gerek yok\" demekten de çekinmiyoruz.",
})}
`;

  return page({
    title: `${cat.name} Yazıları | CB İnşaat Malatya Blog`,
    description: `Malatya'da ${cat.name.toLocaleLowerCase("tr-TR")} üzerine ${cat.count} rehber yazı: belirtiler, kontrol adımları, maliyeti belirleyen kalemler ve ne zaman usta çağırmanız gerektiği.`,
    path: `/blog/kategori/${cat.slug}/`,
    ctx,
    crumbs: [
      { label: "Blog", href: "/blog/" },
      { label: cat.name, href: `/blog/kategori/${cat.slug}/` },
    ],
    schemas: [itemList(list.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })), `${cat.name} yazıları`)],
    body,
  });
}

/* ========================================================= /blog/<slug>/ */
export function postPage(p, ctx) {
  const t = themeOfCategory(p.category);
  const related = relatedPosts(p, 3);
  const relatedServices = (p.services || []).map(getService).filter(Boolean);
  const toc = tocFrom(p.body, "İçindekiler");

  const body = `
<section class="section">
  <div class="wrap with-aside">
    <article style="${themeVars(t)}">
      <header class="article-head">
        <div class="post-meta">
          <span class="badge" style="background:var(--c);color:#fff">${esc(p.category)}</span>
          <span>${esc(dateTR(p.published))}</span>
          <span>${p.reading} dk okuma</span>
        </div>
        <h1>${esc(p.title)}</h1>
        <p class="lead">${esc(p.excerpt)}</p>
        ${
          p.updated && p.updated !== p.published
            ? `<p style="font-size:.85rem;color:var(--muted-2)">Son güncelleme: ${esc(dateTR(p.updated))}</p>`
            : ""
        }
      </header>

      <figure class="lead-media">${coverImg(p.slug, p.title, { lazy: false })}</figure>

      ${toc}

      <div class="prose">
        <p><strong>${esc(p.intro)}</strong></p>
        ${renderBlocks(p.body)}
      </div>

      ${
        relatedServices.length
          ? `<div class="aside-box mt-l" style="border-top-color:var(--c)">
        <h3>Bu konuda yardım gerekiyorsa</h3>
        <p class="text-muted" style="font-size:.94rem">Yazıda anlatılan işler için Malatya genelinde hizmet veriyoruz.</p>
        <ul>${relatedServices.map((s) => `<li><a href="/hizmetler/${s.slug}/">${esc(s.title)} ${icon("arrow")}</a></li>`).join("")}</ul>
      </div>`
          : ""
      }
    </article>

    <aside>
      ${contactAside()}
      ${
        relatedServices.length
          ? asideLinks("İlgili hizmetler", relatedServices.map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })))
          : ""
      }
      ${asideLinks("Diğer yazılar", related.map((r) => ({ label: r.title, href: `/blog/${r.slug}/` })))}
    </aside>
  </div>
</section>

${p.faqs && p.faqs.length ? faqBlock(p.faqs, "Sık sorulanlar") : ""}

<section class="section section--paper2">
  <div class="wrap">
    ${secHead("Devamı", "İlgili yazılar", "Aynı konu başlığındaki diğer rehberler.")}
    <div class="grid g-3">${related.map((r, i) => postCard(r, i)).join("")}</div>
  </div>
</section>

${ctaBlock({
  title: "Kendiniz çözemediğiniz bir durum mu var?",
  text: "Belirtileri anlatın, telefonda değerlendirelim. Yerinde bakılması gerekiyorsa uygun gün ve saati birlikte belirleriz.",
})}
`;

  return page({
    title: p.metaTitle || `${p.title} | ${site.name}`,
    description: p.metaDesc || p.excerpt,
    path: `/blog/${p.slug}/`,
    ctx,
    ogType: "article",
    published: p.published,
    modified: p.updated || p.published,
    crumbs: [
      { label: "Blog", href: "/blog/" },
      { label: p.title, href: `/blog/${p.slug}/` },
    ],
    schemas: [
      articleSchema({
        title: p.title,
        description: p.metaDesc || p.excerpt,
        url: `/blog/${p.slug}/`,
        published: p.published,
        modified: p.updated || p.published,
        category: p.category,
        words: wordCount(p),
      }),
      ...(p.faqs && p.faqs.length ? [faqSchema(p.faqs)] : []),
    ],
    body,
  });
}

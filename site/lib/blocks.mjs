// Yeniden kullanılabilir bölüm ve bileşen üreticileri.
import { site, waLink, processSteps, trustPoints } from "../data/site.mjs";
import { esc, icon, slugify, dateTR } from "./html.mjs";
import { themeOfService, themeOfCategory, themeVars } from "./theme.mjs";

/* ------------------------------------------------- uzun metin blokları */
export function renderBlocks(blocks = []) {
  return blocks
    .map((b) => {
      if (b.h2) return `<h2 id="${slugify(b.h2)}">${esc(b.h2)}</h2>`;
      if (b.h3) return `<h3 id="${slugify(b.h3)}">${esc(b.h3)}</h3>`;
      if (b.p) return `<p>${b.p}</p>`;
      if (b.ul) return `<ul>${b.ul.map((i) => `<li>${i}</li>`).join("")}</ul>`;
      if (b.ol) return `<ol>${b.ol.map((i) => `<li>${i}</li>`).join("")}</ol>`;
      if (b.quote) return `<blockquote><p>${b.quote}</p></blockquote>`;
      if (b.table) {
        const { head, rows } = b.table;
        return `<div style="overflow-x:auto"><table>
          <thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>`;
      }
      return "";
    })
    .join("\n");
}

export function tocFrom(blocks = [], title = "Bu yazıda") {
  const heads = blocks.filter((b) => b.h2).map((b) => b.h2);
  if (heads.length < 3) return "";
  return `<nav class="toc" aria-label="İçindekiler">
    <b>${esc(title)}</b>
    <ol>${heads.map((h) => `<li><a href="#${slugify(h)}">${esc(h)}</a></li>`).join("")}</ol>
  </nav>`;
}

/* ------------------------------------------------------------- görseller */
// build.mjs, public/photos/ altında bulduğu gerçek fotoğrafların slug listesini
// buraya verir. Fotoğraf varsa üretilen SVG kapak yerine o kullanılır.
let photoSlugs = new Set();
export const setPhotos = (set) => { photoSlugs = set; };

// Kendi fotoğrafı olmayan içerikler (blog yazıları) için, ilgili hizmetin
// fotoğrafına yönlendirme tablosu. build.mjs dolduruyor.
let photoAlias = new Map();
export const setPhotoAliases = (map) => { photoAlias = map; };

export const coverSrc = (slug) => {
  if (photoSlugs.has(slug)) return `/assets/photos/${slug}.jpg`;
  const alias = photoAlias.get(slug);
  if (alias && photoSlugs.has(alias)) return `/assets/photos/${alias}.jpg`;
  return `/assets/covers/${slug}.svg`;
};

export const coverImg = (slug, alt, { lazy = true } = {}) =>
  `<img src="${coverSrc(slug)}" alt="${esc(alt)}" width="800" height="450"${
    lazy ? ' loading="lazy" decoding="async"' : ""
  }>`;

/* ------------------------------------------------------------- kartlar */
export const serviceCard = (s) => {
  const t = themeOfService(s);
  return `<a class="card svc-card" href="/hizmetler/${s.slug}/" style="${themeVars(t)}">
  <div class="cover">
    ${coverImg(s.slug, `${s.title} — Malatya`)}
    <span class="cover-tag">${icon(t.icon)} ${esc(t.label || s.group)}</span>
  </div>
  <div class="card-body">
    <div class="head">
      <span class="icon">${icon(s.icon)}</span>
      <h3>${esc(s.title)}</h3>
    </div>
    <p>${esc(s.short)}</p>
    <span class="card-foot arrow-link">Detay ${icon("arrow")}</span>
  </div>
</a>`;
};

export const postCard = (p) => {
  const t = themeOfCategory(p.category);
  return `<a class="card post-card" href="/blog/${p.slug}/" style="${themeVars(t)}">
  <div class="cover">
    ${coverImg(p.slug, p.title)}
    <span class="cover-tag">${icon(t.icon)} ${esc(p.category)}</span>
  </div>
  <div class="card-body">
    <div class="post-meta"><span>${esc(dateTR(p.updated || p.published))}</span><span>${p.reading} dk okuma</span></div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.excerpt)}</p>
  </div>
</a>`;
};

export const linkList = (items = []) =>
  `<div class="link-list">${items
    .map(
      (i) => `<a href="${i.href}">
        <span><b>${esc(i.label)}</b>${i.sub ? `<span class="ll-sub">${esc(i.sub)}</span>` : ""}</span>
        <span class="arr">${icon("arrow")}</span>
      </a>`
    )
    .join("")}</div>`;

export const chips = (items = []) =>
  `<div class="chips">${items
    .map((i) => (i.href ? `<a href="${i.href}">${esc(i.label)}</a>` : `<span>${esc(i.label || i)}</span>`))
    .join("")}</div>`;

/* --------------------------------------------------------------- SSS */
export const faqBlock = (faqs = [], heading = "Sık sorulan sorular") => {
  if (!faqs.length) return "";
  return `<section class="section section--white">
    <div class="wrap">
      <p class="eyebrow">Merak edilenler</p>
      <h2>${esc(heading)}</h2>
      <div class="faq mt-m">
        ${faqs
          .map(
            (f) => `<details>
            <summary>${esc(f.q)}</summary>
            <div class="faq-body"><p>${f.a}</p></div>
          </details>`
          )
          .join("")}
      </div>
    </div>
  </section>`;
};

/* ------------------------------------------------------------- süreç */
export const processBlock = (heading = "Nasıl çalışıyoruz?") => `<section class="section section--paper2">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <p class="eyebrow">Süreç</p>
        <h2>${esc(heading)}</h2>
      </div>
      <p class="lead">İlk telefondan teslime kadar beş adım. Her adımda ne olacağını önceden biliyorsunuz; onay vermeden hiçbir iş başlamıyor.</p>
    </div>
    <div class="steps">
      ${processSteps.map((s) => `<div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("")}
    </div>
  </div>
</section>`;

/* ----------------------------------------------------------- istatistik */
export const statsBlock = () => `<section class="stats">
  <div class="wrap">
    ${trustPoints.map((t) => `<div><strong>${esc(t.value)}</strong><span>${esc(t.label)}</span></div>`).join("")}
  </div>
</section>`;

/* ------------------------------------------------------------ hızlı bar */
export const quickbar = () => `<div class="wrap"><div class="quickbar">
  <div><small>Telefon</small><b>${esc(site.phoneDisplay)}</b><span>${esc(site.hoursText)}</span></div>
  <div><small>Hizmet bölgesi</small><b>Malatya geneli</b><span>13 ilçe, mahalle bazında</span></div>
  <div><small>Keşif</small><b>Ücretsiz ve yazılı</b><span>Merkez ilçelerde aynı gün</span></div>
  <a class="qb-cta" href="/teklif/"><small>Hemen başlayın</small><b>Teklif alın →</b></a>
</div></div>`;

/* ----------------------------------------------------------------- CTA */
export const ctaBlock = ({
  title = "Bir iş için görüşelim",
  text = "Yerinde keşif yapıp, malzeme ve işçiliği ayrı ayrı yazdığımız bir teklif hazırlıyoruz. Onay vermeden hiçbir iş başlamıyor.",
  dark = false,
} = {}) => `<section class="cta${dark ? " cta-dark" : ""}">
  <div class="wrap">
    <div>
      <h2>${esc(title)}</h2>
      <p>${esc(text)}</p>
    </div>
    <div class="btn-row">
      <a class="btn ${dark ? "btn--primary" : "btn--dark"}" href="/teklif/">Ücretsiz keşif iste</a>
      <a class="btn ${dark ? "btn--ghost-light" : "btn--ghost"}" href="${waLink()}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp'tan yazın</a>
    </div>
  </div>
</section>`;

/* ------------------------------------------------------ yan panel blokları */
export const contactAside = () => `<div class="aside-box aside-box--dark">
  <h3>Hemen ulaşın</h3>
  <p>Durumu anlatın, aynı gün gelinip gelinemeyeceğini net söyleyelim.</p>
  <div class="btn-row mt-s">
    <a class="btn btn--primary btn--block" href="tel:${site.phoneHref}">${icon("phone")} ${esc(site.phoneDisplay)}</a>
    <a class="btn btn--wa btn--block" href="${waLink()}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp</a>
  </div>
</div>`;

export const asideLinks = (title, items = []) => {
  if (!items.length) return "";
  return `<div class="aside-box">
    <h3>${esc(title)}</h3>
    <ul>${items.map((i) => `<li><a href="${i.href}">${esc(i.label)} ${icon("arrow")}</a></li>`).join("")}</ul>
  </div>`;
};

/* ------------------------------------------------------ bölüm başlığı */
export const secHead = (eyebrow, title, lead = "") => `<div class="sec-head">
  <div>
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
    <h2>${esc(title)}</h2>
  </div>
  ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
</div>`;

/* ----------------------------------------------------- sayfa başlığı */
export const pageHead = ({ eyebrow, title, lead, meta = [], theme }) => `<section class="phead"${
  theme ? ` style="${themeVars(theme)}"` : ""
}>
  <div class="wrap phead-in">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
    <h1>${title}</h1>
    ${lead ? `<p>${esc(lead)}</p>` : ""}
    ${meta.length ? `<div class="phead-meta">${meta.map((m) => `<span>${icon(m.icon)} ${esc(m.text)}</span>`).join("")}</div>` : ""}
  </div>
</section>`;

/* ------------------------------------------------------- bölge bandı */
export const regionBanner = (caption) => `<div class="region-banner">
  <img src="/assets/malatya.jpg" alt="Malatya genel görünüm" width="1600" height="467" loading="lazy" decoding="async">
  <b>${esc(caption)}</b>
</div>`;

/* --------------------------------------------------------- kapsam listesi */
export const scopeList = (items = []) => `<div class="grid g-2">
  ${items
    .map(
      (i) => `<div style="display:grid;grid-template-columns:24px 1fr;gap:12px;align-items:start;padding:14px 0;border-bottom:1px solid var(--line)">
      <span class="tick" style="width:22px;height:22px;background:var(--amber);color:var(--ink);display:grid;place-items:center;border-radius:50%;margin-top:2px">${icon("check")}</span>
      <span>${esc(i)}</span>
    </div>`
    )
    .join("")}
</div>`;

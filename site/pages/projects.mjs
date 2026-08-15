// Tamamlanan projeler: /projeler/ ve /projeler/<slug>/
import { site } from "../data/site.mjs";
import { getService } from "../data/services.mjs";
import { getDistrict } from "../data/districts.mjs";
import { publishedProjects, projectsForService } from "../data/projects.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, locIn, trLower } from "../lib/html.mjs";
import { itemList, breadcrumbs } from "../lib/schema.mjs";
import { themeOfService, themeVars } from "../lib/theme.mjs";
import {
  ctaBlock, secHead, pageHead, contactAside, asideLinks,
  scopeList, chips, coverImg,
} from "../lib/blocks.mjs";

const photoUrl = (p, key) => `/assets/projects/${p.slug}-${key}.jpg`;

const projectCard = (p) => {
  const s = getService(p.service);
  const d = getDistrict(p.district);
  const t = s ? themeOfService(s) : { color: "#c47100", soft: "#fdefd6", icon: "home", label: "Proje" };
  const cover = p.photos?.length ? photoUrl(p, p.photos[0]) : null;
  return `<a class="card" href="/projeler/${p.slug}/" style="${themeVars(t)}">
  <div class="cover">
    ${
      cover
        ? `<img src="${cover}" alt="${esc(p.title)}" width="800" height="450" loading="lazy" decoding="async">`
        : coverImg(p.service, p.title)
    }
    <span class="cover-tag">${icon(t.icon)} ${esc(p.type)}</span>
  </div>
  <div class="card-body">
    <div class="post-meta"><span>${esc(d ? d.name : "")}${p.locality ? " · " + esc(p.locality) : ""}</span><span>${p.year}</span></div>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.summary)}</p>
    <span class="card-foot arrow-link">Projeyi görün ${icon("arrow")}</span>
  </div>
</a>`;
};

/* =========================================================== /projeler/ */
// Yaptığımız iş tipleri. Fotoğraflı proje kayıtları eklendikçe üstte listelenir.
const projectTypes = [
  {
    service: "daire-tadilati",
    title: "Daire tadilatı",
    text: "Söküm, tesisat, mutfak, banyo, zemin ve boya. 2+1 ve 3+1 dairelerde tipik süre 25–35 iş günü.",
    scope: ["Söküm ve moloz tahliyesi", "Elektrik ve su tesisatı", "Mutfak ve banyo", "Zemin, boya, kapı", "Aydınlatma ve montajlar"],
  },
  {
    service: "bina-tesisat-yenileme",
    title: "Bina tesisat yenileme",
    text: "Kolon hattı, sayaç öncesi tesisat, ana pano ve ortak alan. Daireler oturulurken etap etap yürütülüyor.",
    scope: ["Kolon ve branşman hatları", "Ana pano ve ölçüm", "Ortak alan aydınlatma", "Su ve atık su kolonları"],
  },
  {
    service: "banyo-tadilati",
    title: "Banyo tadilatı",
    text: "Su yalıtımı ve 24 saat su testi dahil komple uygulama. Tek banyolu evlerde iş sırası buna göre kuruluyor.",
    scope: ["Söküm ve tesisat", "Su yalıtımı ve test", "Seramik ve derz", "Vitrifiye ve armatür", "Duşakabin, havlupan, aydınlatma"],
  },
  {
    service: "mutfak-tadilati",
    title: "Mutfak tadilatı",
    text: "Tezgâh, dolap, ankastre elektriği ve su tesisatı tek ekipte. Ölçü alındıktan sonra dolap üretimi 12–18 gün.",
    scope: ["Söküm", "Su ve elektrik altyapısı", "Dolap ve tezgâh", "Ankastre montaj", "Aydınlatma"],
  },
  {
    service: "dukkan-ofis-tadilati",
    title: "Dükkân, ofis ve mağaza",
    text: "Kepenk kapalıyken çalışıp açılışa yetiştiriyoruz. Elektrik projesi, aydınlatma ve zayıf akım dahil.",
    scope: ["Bölme ve tavan", "Elektrik ve aydınlatma", "Zayıf akım ve kamera", "Zemin ve vitrin", "Klima altyapısı"],
  },
  {
    service: "kayisi-bahcesi-sulama",
    title: "Bahçe ve kayısı sulaması",
    text: "Kuyu verimi ölçümü, pompa seçimi, filtre istasyonu ve zon planı. Damlama ve yağmurlama uygulanıyor.",
    scope: ["Kuyu ve pompa", "Arazi enerji hattı", "Filtre istasyonu", "Ana hat ve lateraller", "Zon otomasyonu"],
  },
];

const typeCard = (t) => {
  const s = getService(t.service);
  const th = s ? themeOfService(s) : { color: "#c47100", soft: "#fdefd6", icon: "home", label: "Proje" };
  return `<a class="card" href="/hizmetler/${t.service}/" style="${themeVars(th)}">
  <div class="cover">
    ${coverImg(t.service, t.title)}
    <span class="cover-tag">${icon(th.icon)} ${esc(th.label || "Proje")}</span>
  </div>
  <div class="card-body">
    <h3>${esc(t.title)}</h3>
    <p>${esc(t.text)}</p>
    <span class="card-foot arrow-link">Kapsamı görün ${icon("arrow")}</span>
  </div>
</a>`;
};

export function projectsIndex(ctx) {
  const types = [...new Set(publishedProjects.map((p) => p.type))];
  const has = publishedProjects.length > 0;

  const body = `
${pageHead({
  eyebrow: "Referanslar",
  title: `Tamamlanan <em class="hl">projeler</em>`,
  lead: has
    ? "Malatya'da tamamladığımız işlerden bir seçki. Her projede kapsamı, süreyi ve iş sırasında karşılaştığımız sorunu olduğu gibi yazdık."
    : "Malatya'da hangi tür işleri anahtar teslim yürüttüğümüzü, her birinin kapsamını ve tipik süresini aşağıda topladık. Fotoğraflı proje sayfalarını, mülk sahibinden izin aldıkça buraya ekliyoruz.",
  meta: has
    ? [
        { icon: "check", text: `${publishedProjects.length} proje` },
        { icon: "layers", text: `${types.length} kategori` },
        { icon: "pin", text: "Malatya geneli" },
      ]
    : [
        { icon: "layers", text: `${projectTypes.length} iş tipi` },
        { icon: "pin", text: "Malatya geneli" },
        { icon: "check", text: "Kalem kalem yazılı teklif" },
      ],
})}

${
  has
    ? `<section class="section">
  <div class="wrap">
    ${secHead("Referanslar", "Tamamlanan işler", "")}
    <div class="grid g-3">${publishedProjects.map(projectCard).join("")}</div>
  </div>
</section>`
    : ""
}

<section class="section${has ? " section--paper2" : ""}">
  <div class="wrap">
    ${secHead("Ne yapıyoruz", "Yürüttüğümüz proje tipleri")}
    <div class="grid g-3">${projectTypes.map(typeCard).join("")}</div>
  </div>
</section>

<section class="section section--white">
  <div class="wrap with-aside">
    <div class="prose" style="max-width:none">
      <h2>Neden her işin fotoğrafı burada yok?</h2>
      <p>Girdiğimiz yerlerin çoğu insanların evi. Salonun, banyosunun, mutfağının fotoğrafını internette görmek herkesin isteyeceği bir şey değil. O yüzden fotoğrafı ancak mülk sahibi açıkça izin verdiğinde yayınlıyoruz; adresi de mahalle düzeyinde bırakıp kapı numarası ve isim yazmıyoruz.</p>
      <h2>Referans görmek isterseniz</h2>
      <p>Yaptığımız işi yerinde görmek en sağlıklısı. Sizinkine benzer, yakın zamanda bitirdiğimiz bir iş varsa ve ev sahibi olur verirse sizi götürüyoruz. Devam eden bir şantiyemiz varsa da gezdirebiliyoruz; iş sırasında nasıl çalıştığımızı görmek bitmiş hâlini görmekten daha çok şey anlatıyor.</p>
      <p>Ayrıca her teklifte, o işte kullanacağımız malzemenin markasını ve sınıfını yazıyoruz. Kapanan hatların fotoğraflarını da teslimde size veriyoruz; duvarın arkasında ne olduğunu sonradan bilmek işe yarıyor.</p>
    </div>
    <aside>
      ${contactAside()}
      ${asideLinks("Sık istenen işler", projectTypes.slice(0, 6).map((t) => ({ label: t.title, href: `/hizmetler/${t.service}/` })))}
      ${asideLinks("Devamı", [
        { label: "Fiyatlar nasıl belirleniyor?", href: "/fiyatlar/" },
        { label: "Çalışma şeklimiz", href: "/hakkimizda/" },
        { label: "Sık sorulan sorular", href: "/sss/" },
      ])}
    </aside>
  </div>
</section>

${ctaBlock({
  title: "Benzer bir işiniz mi var?",
  text: "Yerinde bakıp kalem kalem yazılı teklif hazırlıyoruz. Merkez ilçelerde keşif ücretsiz.",
})}
`;

  return page({
    title: "Tamamlanan Projeler ve Referanslar | CB İnşaat Malatya",
    description:
      "Malatya'da yürüttüğümüz daire tadilatı, bina tesisat yenileme, banyo-mutfak ve sulama projeleri; kapsam, süre ve çalışma şeklimiz.",
    path: "/projeler/",
    ctx,
    crumbs: [{ label: "Projeler", href: "/projeler/" }],
    schemas: has
      ? [itemList(publishedProjects.map((p) => ({ label: p.title, href: `/projeler/${p.slug}/` })), "Tamamlanan projeler")]
      : [itemList(projectTypes.map((t) => ({ label: t.title, href: `/hizmetler/${t.service}/` })), "Proje tipleri")],
    body,
  });
}

/* ==================================================== /projeler/<slug>/ */
export function projectPage(p, ctx) {
  const s = getService(p.service);
  const d = getDistrict(p.district);
  const t = s ? themeOfService(s) : { color: "#c47100", soft: "#fdefd6", icon: "home", label: "Proje" };
  const others = publishedProjects.filter((x) => x.slug !== p.slug).slice(0, 3);

  const gallery = (p.photos || []).length
    ? `<section class="section section--white">
  <div class="wrap">
    ${secHead("Fotoğraflar", "Projeden kareler", "")}
    <div class="grid g-2">
      ${p.photos
        .map(
          (k) => `<figure style="margin:0;border:1px solid var(--line);border-radius:var(--r);overflow:hidden">
        <img src="${photoUrl(p, k)}" alt="${esc(p.title)} — ${esc(k)}" width="1200" height="800" loading="lazy" decoding="async">
        ${["once", "sonra"].includes(k) ? `<figcaption style="padding:10px 14px;font-size:.85rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-weight:700">${k === "once" ? "Önce" : "Sonra"}</figcaption>` : ""}
      </figure>`
        )
        .join("")}
    </div>
  </div>
</section>`
    : "";

  const body = `
${pageHead({
  eyebrow: `${p.type}${d ? " · " + d.name : ""}`,
  title: esc(p.title),
  lead: p.summary,
  theme: t,
  meta: [
    { icon: "calendar", text: String(p.year) },
    { icon: "clock", text: p.duration },
    { icon: "layers", text: p.area },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div style="${themeVars(t)}">
      <h2>Kapsam</h2>
      ${scopeList(p.scope)}

      <div class="prose mt-l" style="max-width:none">
        ${p.challenge ? `<h2>İş sırasında ne çıktı?</h2><p>${esc(p.challenge)}</p>` : ""}
        ${p.result ? `<h2>Sonuç</h2><p>${esc(p.result)}</p>` : ""}
      </div>
    </div>

    <aside>
      ${contactAside()}
      <div class="aside-box">
        <h3>Proje künyesi</h3>
        <ul class="fact-list">
          <li><span>Tür</span><b>${esc(p.type)}</b></li>
          ${d ? `<li><span>Bölge</span><b>${esc(d.name)}${p.locality ? " · " + esc(p.locality) : ""}</b></li>` : ""}
          <li><span>Alan</span><b>${esc(p.area)}</b></li>
          <li><span>Süre</span><b>${esc(p.duration)}</b></li>
          <li><span>Yıl</span><b>${p.year}</b></li>
        </ul>
      </div>
      ${
        s
          ? asideLinks("İlgili hizmet", [
              { label: s.title, href: `/hizmetler/${s.slug}/` },
              { label: `${s.title} fiyatları`, href: `/fiyatlar/${s.slug}/` },
            ])
          : ""
      }
      ${d ? asideLinks("Bölge", [{ label: `${d.name} sayfası`, href: `/bolgeler/${d.slug}/` }]) : ""}
    </aside>
  </div>
</section>

${gallery}

${
  others.length
    ? `<section class="section section--paper2">
  <div class="wrap">
    ${secHead("Devamı", "Diğer projeler", "")}
    <div class="grid g-3">${others.map(projectCard).join("")}</div>
  </div>
</section>`
    : ""
}

${ctaBlock({
  title: s ? `${s.title} için teklif alın` : "Benzer bir işiniz mi var?",
  text: "Adresi ve işin kapsamını söyleyin; yerinde bakıp kalem kalem yazılı teklif hazırlayalım.",
})}
`;

  return page({
    title: `${p.title} — ${d ? d.name + " " : ""}Malatya | ${site.name}`,
    description: `${p.title}: ${p.summary}`.slice(0, 158),
    path: `/projeler/${p.slug}/`,
    ctx,
    crumbs: [
      { label: "Projeler", href: "/projeler/" },
      { label: p.title, href: `/projeler/${p.slug}/` },
    ],
    body,
  });
}

export { projectCard, projectsForService };

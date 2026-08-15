// Niyet sayfaları: /<intent>/ ve /<intent>/<ilce>/
import { site, waLink } from "../data/site.mjs";
import { getService } from "../data/services.mjs";
import { districts } from "../data/districts.mjs";
import { localitiesOf, featuredOf, localities } from "../data/localities.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, trLower, locIn, locOf, locTo } from "../lib/html.mjs";
import { serviceSchema, faqSchema, itemList } from "../lib/schema.mjs";
import { themeOfGroup, themeVars } from "../lib/theme.mjs";
import {
  serviceCard, linkList, chips, ctaBlock, secHead, faqBlock,
  pageHead, contactAside, asideLinks, scopeList,
} from "../lib/blocks.mjs";

const merkez = districts.filter((d) => d.distanceKm === 0);
const uzak = districts.filter((d) => d.distanceKm > 0);

/* --------------------------------------------------- ortak içerik blokları */
const urgencyBlock = (i, t) => {
  if (i.kind !== "acil") return "";
  return `
<section class="section section--white">
  <div class="wrap" style="${themeVars(t)}">
    ${secHead("Aciliyet", "Hangi durum acil, hangisi değil?", "Her arıza acil değil. Bekleyebilecek bir işe acil ücreti yansıtmıyoruz; aciliyeti telefonda birlikte değerlendiriyoruz.")}
    <div class="grid g-2">
      <div class="aside-box" style="border-top-color:var(--c)">
        <h3>${icon("alert")} Acil — hemen arayın</h3>
        <ul>${i.urgent.map((u) => `<li><a href="tel:${site.phoneHref}">${esc(u)}</a></li>`).join("")}</ul>
      </div>
      <div class="aside-box">
        <h3>${icon("clock")} Planlı randevu yeterli</h3>
        <ul>${i.notUrgent.map((u) => `<li><a href="/teklif/">${esc(u)}</a></li>`).join("")}</ul>
      </div>
    </div>

    <h2 class="mt-l">${esc(i.firstAid.title)}</h2>
    <p class="text-muted">Müdahale ekibi yola çıkana kadar yapabilecekleriniz:</p>
    ${scopeList(i.firstAid.steps)}
  </div>
</section>`;
};

const coverageBlock = (i, t) => `
<section class="section section--paper2">
  <div class="wrap" style="${themeVars(t)}">
    ${secHead(
      "Hizmet bölgesi",
      "Hangi bölgeye ne kadar sürede geliyoruz?",
      `Malatya'nın ${districts.length} ilçesinin tamamına ve ${localities.length} mahalleye gidiyoruz. Süreler gün içi program durumuna göre değişebiliyor; net saat aralığını telefonda söylüyoruz.`
    )}
    <div class="grid g-2">
      ${linkList(
        merkez.map((d) => ({
          label: d.name,
          sub: "Merkez ilçe · genelde aynı gün",
          href: `/${i.slug}/${d.slug}/`,
        }))
      )}
      ${linkList(
        uzak.slice(0, 6).map((d) => ({
          label: d.name,
          sub: `~${d.distanceKm} km · aynı gün veya ertesi sabah`,
          href: `/${i.slug}/${d.slug}/`,
        }))
      )}
    </div>
    <div class="mt-m">
      ${chips(districts.map((d) => ({ label: d.name, href: `/${i.slug}/${d.slug}/` })))}
    </div>
  </div>
</section>`;

/* ============================================================ /<intent>/ */
export function intentPage(i, ctx) {
  const t = themeOfGroup(i.group);
  const svc = (i.services || []).map(getService).filter(Boolean);

  const faqs =
    i.kind === "acil"
      ? [
          { q: "Gece ve hafta sonu geliyor musunuz?", a: `Gerçek acil durumlarda mesai dışında da müdahale ediyoruz. ${esc(site.hoursText)} normal çalışma saatlerimiz; bunun dışındaki müdahalelerde bir fark uygulanıyor ve bu farkı telefonda söylüyoruz.` },
          { q: "Ne kadar sürede gelirsiniz?", a: "Battalgazi ve Yeşilyurt'ta acil işlerde genelde aynı gün, çoğu zaman birkaç saat içinde. Uzak ilçelerde gün içi programa bakıp net saat aralığı veriyoruz; sallamıyor, veremeyeceğimiz sözü vermiyoruz." },
          { q: "Acil ücreti ne kadar?", a: "Mesai dışı acil müdahalelerde bir fark uygulanıyor. Bu farkı yola çıkmadan önce söylüyoruz. Bekleyebilecek bir işi acil olarak işaretlemiyoruz; gereksiz ücret çıkarmıyoruz." },
          { q: "Arıza bulunamazsa ödeme yapacak mıyım?", a: "Keşif ve ölçüm yapıldıysa yol ve iş gücü karşılığı bir tespit bedeli oluşuyor; bunu aramadan önce söylüyoruz. Onarım tarafımızca yapılırsa bu bedel toplam tutardan düşülüyor." },
        ]
      : [
          { q: "Mahalleme geliyor musunuz?", a: `Malatya'nın ${districts.length} ilçesinin tamamına ve ${localities.length} mahalleye gidiyoruz. Kırsal mahalleler de dahil; başka firmaya havale etmiyoruz.` },
          { q: "Uzak ilçelerde ek ücret var mı?", a: "Merkez ilçelerde keşif ücretsiz. Uzak ilçelerde yol mesafesine göre bir keşif bedeli oluşabiliyor; işi biz yaparsak bu bedeli toplam tutardan düşüyoruz. Tutarı yola çıkmadan önce söylüyoruz." },
          { q: "Randevu ne kadar sürede çıkıyor?", a: "Merkez ilçelerde genelde aynı gün veya ertesi gün. Uzak ilçelerde işleri toplu planladığımız için, aynı bölgeden birden fazla iş çıktığında gün çok daha çabuk ayarlanıyor; komşularınızla birlikte aramanızı öneririz." },
          { q: "Tek kalemlik küçük iş için de geliyor musunuz?", a: "Geliyoruz, ancak yol ve iş gücü nedeniyle minimum servis bedeli uygulanıyor. Evdeki tüm küçük işleri aynı ziyarette yaptırmak kalem başına maliyeti epeyce düşürüyor." },
        ];

  const body = `
${pageHead({
  eyebrow: i.kind === "acil" ? "Acil servis" : "Hizmet bölgesi",
  title: i.h1,
  lead: i.lead,
  theme: t,
  meta: [
    { icon: "phone", text: site.phoneDisplay },
    { icon: "clock", text: i.kind === "acil" ? "Acil işlerde mesai dışı da" : site.hoursText },
    { icon: "pin", text: `${districts.length} ilçe · ${localities.length} mahalle` },
  ],
})}

<section class="section--tight section--dark">
  <div class="wrap btn-row">
    <a class="btn btn--primary" href="tel:${site.phoneHref}">${icon("phone")} ${esc(site.phoneDisplay)} — hemen ara</a>
    <a class="btn btn--wa" href="${waLink(`Merhaba, ${trLower(i.title)} için arıyorum.`)}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp'tan yaz</a>
  </div>
</section>

${urgencyBlock(i, t)}

<section class="section">
  <div class="wrap" style="${themeVars(t)}">
    ${secHead("Ne yapıyoruz?", `${i.title} kapsamında`, "Bu başlık altında en sık gelen işler. Hepsinin ayrıntısı kendi hizmet sayfasında.")}
    <div class="grid g-3">${svc.map(serviceCard).join("")}</div>
  </div>
</section>

${coverageBlock(i, t)}

${faqBlock(faqs, `${i.title} hakkında sık sorulanlar`)}

${ctaBlock({
  title: i.kind === "acil" ? "Durumu anlatın, hemen yola çıkalım" : "Bölgenize geliyoruz",
  text: i.kind === "acil"
    ? "Telefonda ne olduğunu anlattığınızda acil olup olmadığını birlikte değerlendirip net bir saat aralığı veriyoruz."
    : "Adresi ve işin türünü söyleyin; en uygun günü birlikte belirleyelim. Merkez ilçelerde keşif ücretsiz.",
})}
`;

  return page({
    title: i.metaTitle,
    description: i.metaDesc.replace("{phone}", site.phoneDisplay),
    path: `/${i.slug}/`,
    ctx,
    crumbs: [{ label: i.title, href: `/${i.slug}/` }],
    schemas: [
      serviceSchema({
        name: `${i.title} — Malatya`,
        description: i.lead,
        url: `/${i.slug}/`,
        areaNames: districts.map((d) => `${d.name}, Malatya`),
        offers: svc.map((s) => s.title),
      }),
      itemList(districts.map((d) => ({ label: `${d.name} ${trLower(i.title)}`, href: `/${i.slug}/${d.slug}/` })), `${i.title} — ilçeler`),
      faqSchema(faqs),
    ],
    body,
  });
}

/* ==================================================== /<intent>/<ilce>/ */
export function intentDistrictPage(i, d, ctx) {
  const t = themeOfGroup(i.group);
  const svc = (i.services || []).map(getService).filter(Boolean);
  const locs = (featuredOf(d.slug).length ? featuredOf(d.slug) : localitiesOf(d.slug)).slice(0, 24);
  const inD = locIn(d.name);
  const ofD = locOf(d.name);
  const toD = locTo(d.name);
  const merkezMi = d.distanceKm === 0;

  const sure = merkezMi
    ? "Merkez ilçe olduğu için acil işlerde genelde aynı gün, çoğu zaman birkaç saat içinde ulaşıyoruz."
    : `Malatya merkeze yaklaşık ${d.distanceKm} km mesafede. Acil işlerde gün içi program durumuna göre aynı gün, aksi hâlde ertesi sabah geliyoruz.`;

  const faqs = [
    {
      q: `${inD} ne kadar sürede gelirsiniz?`,
      a: merkezMi
        ? `${esc(d.name)} merkez ilçe olduğu için acil işlerde genelde aynı gün müdahale ediyoruz. Telefonda durumu anlattığınızda net bir saat aralığı söylüyoruz.`
        : `${esc(d.name)} merkeze yaklaşık ${d.distanceKm} km mesafede. Acil durumlarda gün içi programa göre aynı gün gelmeye çalışıyoruz; net saat aralığını arama sırasında söylüyoruz.`,
    },
    {
      q: `${inD} ek ücret alıyor musunuz?`,
      a: merkezMi
        ? "Merkez ilçelerde keşif ücretsiz. Mesai dışı acil müdahalelerde bir fark uygulanıyor ve bu farkı yola çıkmadan önce söylüyoruz."
        : `${esc(d.name)} için yol mesafesine göre bir keşif bedeli oluşabiliyor. İşi biz yaparsak bu bedeli toplam tutardan düşüyoruz. Tutarı aramadan önce söylüyoruz.`,
    },
    {
      q: `${ofD} kırsal mahallelerine de geliyor musunuz?`,
      a: `Evet. ${esc(d.name)} sınırlarındaki ${locs.length} yerleşimin tamamına gidiyoruz; kırsal mahalleler dahil. Aynı bölgeden birden fazla iş çıktığında randevu daha hızlı çıkıyor.`,
    },
  ];

  const body = `
${pageHead({
  eyebrow: `${d.name} · Malatya`,
  title: `${inD} <em class="hl">${esc(trLower(i.title))}</em>`,
  lead: `${esc(d.name)} ve bağlı mahallelerde ${trLower(i.title)} hizmeti. ${sure}`,
  theme: t,
  meta: [
    { icon: "phone", text: site.phoneDisplay },
    { icon: "pin", text: `${d.name}, Malatya` },
    { icon: "layers", text: `${locs.length} mahalle` },
  ],
})}

<section class="section--tight section--dark">
  <div class="wrap btn-row">
    <a class="btn btn--primary" href="tel:${site.phoneHref}">${icon("phone")} ${esc(site.phoneDisplay)}</a>
    <a class="btn btn--wa" href="${waLink(`Merhaba, ${esc(d.name)} ${trLower(i.title)} için arıyorum.`)}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp</a>
  </div>
</section>

<section class="section">
  <div class="wrap with-aside">
    <div class="prose" style="max-width:none">
      <h2>${inD} ${trLower(i.title)}</h2>
      <p>${esc(d.intro)}</p>
      <p>${esc(i.lead)}</p>
      ${
        i.kind === "acil"
          ? `<h3>${esc(d.name)} için acil sayılan durumlar</h3>
             <ul>${i.urgent.map((u) => `<li>${esc(u)}</li>`).join("")}</ul>
             <h3>${esc(i.firstAid.title)}</h3>
             <ol>${i.firstAid.steps.map((u) => `<li>${esc(u)}</li>`).join("")}</ol>`
          : `<h3>${ofD} yapı stoğu ve sık çıkan işler</h3>
             <p>${esc(d.context[0].p)}</p>
             <h3>Randevu ve mesafe</h3>
             <p>${esc(sure)} ${merkezMi ? "Keşif ücretsiz." : "Uzak ilçelerde işleri toplu planladığımız için, aynı mahalleden birden fazla iş çıktığında gün daha çabuk ayarlanıyor."}</p>`
      }

      <h3>${inD} en sık yaptığımız işler</h3>
      <ul>${svc.map((s) => `<li><a href="/hizmetler/${s.slug}/">${esc(s.title)}</a> — ${esc(s.short)}</li>`).join("")}</ul>
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks(`${d.name} mahalleleri`, locs.slice(0, 10).map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` })))}
      ${asideLinks("Diğer ilçeler", districts.filter((x) => x.slug !== d.slug).slice(0, 8).map((x) => ({ label: `${x.name} ${trLower(i.title)}`, href: `/${i.slug}/${x.slug}/` })))}
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="wrap" style="${themeVars(t)}">
    ${secHead("Mahalleler", `${ofD} tüm mahallelerine gidiyoruz`, `${esc(d.name)} sınırlarındaki ${locs.length} yerleşimin tamamı hizmet alanımızda.`)}
    ${chips(locs.map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` })))}
    <div class="btn-row mt-m">
      <a class="btn btn--ghost" href="/bolgeler/${d.slug}/">${esc(d.name)} bölge sayfası ${icon("arrow")}</a>
      <a class="btn btn--ghost" href="/${i.slug}/">Tüm ilçeler ${icon("arrow")}</a>
    </div>
  </div>
</section>

${faqBlock(faqs, `${d.name} ${trLower(i.title)} hakkında`)}

${ctaBlock({
  title: `${inD} ${trLower(i.title)} için arayın`,
  text: `Durumu anlatın; ${esc(d.name)} için net bir saat aralığı verelim.`,
})}
`;

  return page({
    title: `${d.name} ${i.title} | Malatya — ${site.name}`,
    description: `${d.name} Malatya'da ${trLower(i.title)}. ${merkezMi ? "Aynı gün müdahale, ücretsiz keşif." : `Merkeze ~${d.distanceKm} km, ücretsiz keşif.`} ${site.phoneDisplay}`,
    path: `/${i.slug}/${d.slug}/`,
    ctx,
    crumbs: [
      { label: i.title, href: `/${i.slug}/` },
      { label: d.name, href: `/${i.slug}/${d.slug}/` },
    ],
    schemas: [
      serviceSchema({
        name: `${i.title} — ${d.name}, Malatya`,
        description: `${d.name} Malatya'da ${trLower(i.title)} hizmeti.`,
        url: `/${i.slug}/${d.slug}/`,
        areaNames: [`${d.name}, Malatya`, ...locs.slice(0, 12).map((l) => `${l.name}, ${d.name}`)],
        offers: svc.map((s) => s.title),
      }),
      faqSchema(faqs),
    ],
    body,
  });
}

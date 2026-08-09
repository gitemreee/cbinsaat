// Mahalle × hizmet etiket sayfaları: /bolgeler/<ilce>/<mahalle>/<etiket>/
// Halkın aradığı terimlerle (elektrikçi, sucu, tesisatçı, doğalgazcı, sulamacı…)
// mahalle düzeyinde arama karşılığı üretir.
import { site } from "../data/site.mjs";
import { getService } from "../data/services.mjs";
import { localitiesOf, neighbours, displayName } from "../data/localities.mjs";
import { localTags } from "../data/local-tags.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, trLower, locIn, locOf, locTo, localTerms } from "../lib/html.mjs";
import { faqSchema, serviceSchema, itemList } from "../lib/schema.mjs";
import {
  serviceCard, chips, ctaBlock, secHead, faqBlock,
  pageHead, contactAside, asideLinks,
} from "../lib/blocks.mjs";

export const tagHref = (d, l, t) => `/bolgeler/${d.slug}/${l.slug}/${t.slug}/`;

/* Aynı metin her sayfada tekrar etmesin diye mahalle adına göre değişen
   giriş, çalışma biçimi ve fiyat paragrafı varyantları. */
const seed = (s) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};
const pick = (arr, s, off = 0) => arr[(s + off) % arr.length];
/** Cümle küçük harfli bir meslek adıyla başlayabiliyor; ilk harfi büyütür. */
const buyukHarf = (s = "") => s.charAt(0).toLocaleUpperCase("tr-TR") + s.slice(1);

const GIRIS = [
  (m, i, t) => `${m}, ${i} ilçesine bağlı mahallelerden biri ve düzenli olarak ${t} işi için gittiğimiz bir bölge.`,
  (m, i, t) => `${i} ilçesindeki ${m} çevresinde ${t} taleplerini yıllardır aynı ekiple karşılıyoruz.`,
  (m, i, t) => `${m} ve çevresinde ${t} aradığınızda, aramanızı aynı gün değerlendiriyor ve net bir randevu saati veriyoruz.`,
  (m, i, t) => `${t} için ${m} sakinlerinden gelen çağrılar bizim düzenli servis programımızın içinde.`,
  (m, i, t) => `${i}'ın ${m} bölgesinde ${t} işleri için keşif, fiyat ve uygulamayı tek elden yürütüyoruz.`,
  (m, i, t) => `${m} sınırlarında ${t} hizmetini, ${i} genelinde çalıştığımız aynı ekip ve aynı fiyat düzeniyle veriyoruz.`,
];

const CALISMA = [
  "Telefonda işi anlatmanız çoğu zaman yeterli oluyor. Gerekirse fotoğraf istiyoruz; iş büyükse yerinde keşfe geliyoruz.",
  "Önce yerinde bakıyoruz, sonra malzeme ve işçiliği ayrı ayrı yazıyoruz. Onay vermeden hiçbir iş başlamıyor.",
  "Keşif ücretsiz. İşin kapsamı netleştikten sonra yazılı fiyat veriyoruz ve iş sırasında fiyatı değiştirmiyoruz.",
  "İş sırasında ek kalem çıkarsa, devam etmeden önce size haber verip onayınızı alıyoruz.",
  "Kullandığımız malzemenin markasını ve modelini önceden söylüyoruz; isterseniz malzemeyi siz de alabilirsiniz.",
  "İş bitiminde çalışmayı birlikte kontrol ediyoruz; artan malzeme ve moloz bizde kalıyor.",
];

const KAPSAM = [
  (m, t, i) => `${m} içinde ${t} çağrılarının büyük bölümü küçük onarım ve montaj işlerinden oluşuyor; kapsamlı yenilemelerde ise işi baştan sona planlayıp tek elden bitiriyoruz.`,
  (m, t, i) => `${t} başlığı altında ${m} için yaptığımız işler, ${i} genelindeki yapı stoğuna göre şekilleniyor. En sık gelen kalemler şunlar:`,
  (m, t, i) => `${m} sakinlerinden gelen ${t} taleplerinin neredeyse tamamı aşağıdaki başlıklardan birine giriyor. Listede olmayan bir iş için de arayabilirsiniz.`,
  (m, t, i) => `${i} genelinde olduğu gibi ${m} için de ${t} işlerinin tamamını kendi ekibimizle yapıyoruz; taşeron veya havale yok.`,
  (m, t, i) => `${m} adresine ${t} için gittiğimizde araçta gerekli malzeme ve alet hazır oluyor; çoğu işi aynı ziyarette bitiriyoruz.`,
  (m, t, i) => `${t} kapsamında ${m} için yaptığımız başlıca işler aşağıda. Hepsi için aynı ekip, aynı fiyat düzeni geçerli.`,
];

const FIYAT = [
  "Fiyat, işin kapsamına ve kullanılacak malzemeye göre değişiyor. Telefonda tarif ettiğinizde bir aralık söyleyebiliyoruz; kesin rakam keşiften sonra netleşiyor.",
  "Küçük arıza ve montaj işlerinde fiyatı telefonda söyleyebiliyoruz. Kapsamlı işlerde keşif sonrası kalem kalem yazılı fiyat veriyoruz.",
  "Aynı mahalleden aynı gün birden fazla iş programlandığında yol ve zaman maliyeti düştüğü için fiyat da aşağı geliyor.",
  "Malzeme ve işçilik ayrı ayrı yazılıyor. Böylece hangi kalemin ne tuttuğunu görüyor, isterseniz malzeme tercihini değiştirebiliyorsunuz.",
];

export function localTagPage(l, d, t, ctx) {
  const s = seed(`${d.slug}-${l.slug}-${t.slug}`);
  const svc = getService(t.service);
  const also = t.also.map(getService).filter(Boolean).slice(0, 4);
  const nearby = neighbours(l, 8);
  const inL = locIn(l.name, l.poss);
  const toL = locTo(l.name, l.poss);
  const ofL = locOf(l.name, l.poss);
  const merkez = d.distanceKm === 0;

  const otherTags = localTags.filter((x) => x.slug !== t.slug);
  const title = `${l.name} ${t.h1}`;
  const h1 = `<em class="hl">${esc(displayName(l))}</em> ${esc(t.h1)}`;

  const description = `${l.name} (${d.name} / Malatya) ${t.label} hizmeti. ${t.terms.slice(0, 3).join(", ")} için CB İnşaat. ${merkez ? "Aynı gün keşif" : `Merkeze ${d.distanceKm} km`}, ücretsiz keşif, yazılı fiyat.`;

  const keywords = [
    ...t.terms.map((k) => `${l.name} ${k}`),
    ...t.terms.slice(0, 4).map((k) => `${d.name} ${k}`),
    `${l.name} ${d.name}`,
    ...localTerms(l.name).slice(0, 4),
  ];

  const faqs = [
    {
      q: `${inL} ${t.label} olarak geliyor musunuz?`,
      a: `Evet. ${esc(l.name)}, ${esc(d.name)} ilçesi sınırlarında ve servis bölgemizin içinde. ${
        merkez
          ? "Merkez ilçe olduğu için acil işlerde aynı gün müdahale ediyoruz."
          : `Malatya merkeze yaklaşık ${d.distanceKm} km mesafede; randevuyu gün içi programa göre birlikte belirliyoruz.`
      }`,
    },
    {
      q: `${l.name} için ${trLower(t.label)} fiyatı ne kadar?`,
      a: esc(pick(FIYAT, s, 1)),
    },
    {
      q: t.urgent
        ? `Acil durumda ${toL} ne kadar sürede gelirsiniz?`
        : `Randevu ne kadar sürede veriliyor?`,
      a: t.urgent
        ? merkez
          ? "Yanık kokusu, kıvılcım, su baskını gibi acil durumlarda aynı gün müdahale ediyoruz. Telefonda durumu anlattığınızda net bir saat aralığı söylüyoruz."
          : `Acil durumlarda gün içi program durumuna göre aynı gün gelmeye çalışıyoruz. Mesafe nedeniyle net saat aralığını arama sırasında söylüyoruz.`
        : merkez
        ? "Çoğu işte aynı hafta içinde randevu verebiliyoruz. Kapsamlı tadilat ve tesisat işlerinde takvimi birlikte planlıyoruz."
        : `${esc(d.name)} bölgesindeki işleri toplu planlıyoruz. Aynı mahalleden birden fazla iş olduğunda randevu belirgin şekilde hızlanıyor.`,
    },
    {
      q: `${inL} hangi işleri yapıyorsunuz?`,
      a: `${esc(t.jobs.slice(0, 4).join("; "))} ve benzeri tüm ${esc(trLower(t.label))} işlerini ${toL} yapıyoruz. Ayrıca elektrik, sıhhi tesisat, doğalgaz, sulama ve tadilat başlıklarının tamamı için aynı ekip geliyor.`,
    },
  ];

  const body = `
${pageHead({
  eyebrow: `${l.name} · ${d.name} · Malatya`,
  title: h1,
  lead: `${buyukHarf(pick(GIRIS, s, 0)(l.name, d.name, trLower(t.label)))} ${esc(l.note)}`,
  meta: [
    { icon: "pin", text: `${l.name}, ${d.name} / Malatya` },
    { icon: t.icon, text: t.label },
    { icon: "clock", text: merkez ? "Aynı gün keşif" : `Merkeze ~${d.distanceKm} km` },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div>
      <div class="prose" style="max-width:none">
        <h2>${inL} ${esc(trLower(t.label))} olarak hangi işleri yapıyoruz?</h2>
        <p>${esc(pick(KAPSAM, s, 0)(l.name, trLower(t.label), d.name))}</p>
        <ul>
          ${t.jobs.map((j) => `<li>${esc(j)}</li>`).join("")}
        </ul>
        ${t.note ? `<p><strong>${esc(t.note)}</strong></p>` : ""}

        <h3>${ofL} bölge özellikleri</h3>
        <p>${esc(d.intro)}</p>
        <p>${esc(d.context[s % d.context.length].p)}</p>

        <h3>Nasıl çalışıyoruz?</h3>
        <p>${esc(pick(CALISMA, s, 0))} ${esc(pick(CALISMA, s, 3))}</p>

        <h3>Fiyat nasıl belirleniyor?</h3>
        <p>${esc(pick(FIYAT, s, 2))}</p>

        <h3>${esc(l.name)} çevresinde de aynı ekip</h3>
        <p>${
          merkez
            ? `${esc(l.name)} merkez ilçe sınırlarında olduğu için keşif ücretsiz ve çoğu zaman aynı gün yapılabiliyor.`
            : `${esc(l.name)} Malatya merkeze yaklaşık ${d.distanceKm} km mesafede. Bu bölgedeki işleri toplu planladığımız için komşularınızla birlikte aradığınızda hem randevu hızlanıyor hem maliyet düşüyor.`
        } ${esc(nearby.slice(0, 4).map((n) => n.name).join(", "))} gibi çevre mahallelere de aynı ekip gidiyor.</p>
      </div>

      <h2 class="mt-l">${esc(t.label)} ile ilgili hizmet sayfaları</h2>
      <div class="grid g-2 mt-s">
        ${[svc, ...also].filter(Boolean).slice(0, 4).map(serviceCard).join("")}
      </div>

      <h2 class="mt-l">${esc(l.name)} için diğer başlıklar</h2>
      <div class="mt-s">
        ${chips(otherTags.map((x) => ({ label: `${l.name} ${x.label}`, href: tagHref(d, l, x) })))}
      </div>
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks(`${esc(l.name)} sayfaları`, [
        { label: `${l.name} genel sayfası`, href: `/bolgeler/${d.slug}/${l.slug}/` },
        { label: `${d.name} ilçe sayfası`, href: `/bolgeler/${d.slug}/` },
        ...(svc ? [{ label: `${svc.title} — ${d.name}`, href: `/hizmetler/${svc.slug}/${d.slug}/` }] : []),
        { label: "Ücretsiz fiyat teklifi", href: "/teklif/" },
      ])}
      ${asideLinks(
        `${d.name} yakın mahalleler`,
        nearby.map((n) => ({ label: `${n.name} ${t.label}`, href: tagHref(d, n, t) }))
      )}
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead(
      "Yakın çevre",
      `${esc(d.name)} içinde ${esc(trLower(t.label))} gittiğimiz diğer mahalleler`,
      `Aynı gün birden fazla iş programlandığında randevu hızlanıyor ve yol maliyeti düşüyor.`
    )}
    ${chips(
      localitiesOf(d.slug)
        .filter((x) => x.slug !== l.slug)
        .slice(0, 60)
        .map((x) => ({ label: x.name, href: tagHref(d, x, t) }))
    )}
  </div>
</section>

${faqBlock(faqs, `${l.name} ${t.label} — sık sorulanlar`)}

${ctaBlock({
  eyebrow: `${l.name} · ${d.name}`,
  title: `${l.name} için ${t.label} mi arıyorsunuz?`,
  text: t.urgent
    ? "Acil arızalarda telefonda durumu anlatın, aynı gün için net bir saat aralığı verelim. Keşif ücretsiz."
    : "İşi kısaca anlatın ya da fotoğraf gönderin; keşif ve fiyat için hemen dönüş yapalım. Keşif ücretsiz.",
})}
`;

  return page({
    title: `${title} — ${d.name} Malatya | CB İnşaat`,
    description,
    path: tagHref(d, l, t),
    keywords,
    body,
    ctx,
    crumbs: [
      { label: "Bölgeler", href: "/bolgeler/" },
      { label: d.name, href: `/bolgeler/${d.slug}/` },
      { label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` },
      { label: t.label, href: tagHref(d, l, t) },
    ],
    schemas: [
      serviceSchema({
        name: `${l.name} ${t.h1}`,
        description,
        url: `${site.url}${tagHref(d, l, t)}`,
        areaNames: [l.name, d.name, "Malatya"],
      }),
      faqSchema(faqs),
      itemList(
        otherTags.map((x) => ({ name: `${l.name} ${x.label}`, url: `${site.url}${tagHref(d, l, x)}` })),
        `${l.name} hizmet başlıkları`
      ),
    ],
  });
}

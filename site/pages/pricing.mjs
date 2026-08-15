// Fiyat sayfaları: /fiyatlar/ ve /fiyatlar/<hizmet>/
import { site, waLink, processSteps } from "../data/site.mjs";
import { services, getService } from "../data/services.mjs";
import { districts } from "../data/districts.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, trLower } from "../lib/html.mjs";
import { faqSchema, itemList, serviceSchema } from "../lib/schema.mjs";
import { themeOfService, themeVars } from "../lib/theme.mjs";
import {
  ctaBlock, secHead, faqBlock, pageHead, contactAside,
  asideLinks, scopeList, linkList, chips, serviceCard,
} from "../lib/blocks.mjs";
import { priceUpdated, pricesFor, hasPrices, surveyFees, pricedSlugs, factorsOnly, tl } from "../data/pricing.mjs";

const pricedServices = () => pricedSlugs.map(getService).filter(Boolean);

// Küçük ve standart işler: telefonda aralık söylenebiliyor.
// Büyük ve değişkeni çok olan işler: yerinde keşif şart.
const isStandard = (slug) => !factorsOnly.includes(slug);

/* ------------------------------------------------------- fiyat tablosu */
function priceTable(slug, t) {
  const p = pricesFor(slug);
  if (!p) return "";
  return `<div class="aside-box mt-m" style="border-top-color:var(--c)">
    <h3>${icon("doc")} Yaklaşık fiyat aralığı</h3>
    <p class="text-muted" style="font-size:.9rem">Birim: ${esc(p.unit)} · Güncelleme: ${esc(priceUpdated)}</p>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:.95rem">
        <thead><tr>
          <th style="text-align:left;padding:10px 12px;border-bottom:2px solid var(--c)">Kalem</th>
          <th style="text-align:right;padding:10px 12px;border-bottom:2px solid var(--c);white-space:nowrap">Aralık (₺)</th>
        </tr></thead>
        <tbody>
        ${p.items
          .map(
            (i) => `<tr>
            <td style="padding:10px 12px;border-bottom:1px solid var(--line)">${esc(i.label)}${
              i.note ? `<br><small style="color:var(--muted-2)">${esc(i.note)}</small>` : ""
            }</td>
            <td style="padding:10px 12px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;font-weight:600">${tl(i.min)} – ${tl(i.max)}</td>
          </tr>`
          )
          .join("")}
        </tbody>
      </table>
    </div>
    <p class="text-muted" style="font-size:.88rem;margin-top:12px">
      Bu aralıklar ${esc(priceUpdated)} tarihli ve bilgilendirme amaçlıdır.
      Kesin fiyat, yerinde keşif sonrası kalem kalem yazılı olarak verilir.
    </p>
  </div>`;
}

/* ============================================================ /fiyatlar/ */
export function pricingIndex(ctx) {
  const list = pricedServices();
  const withPrices = list.filter((s) => hasPrices(s.slug));

  const faqs = [
    {
      q: "Telefonda fiyat söylüyor musunuz?",
      a: "Standart kalemlerde (priz değişimi, gider açma, avize montajı gibi) bir aralık söyleyebiliyoruz. Tadilat, anahtar teslim ve sulama gibi değişkeni çok olan işlerde yerinde bakmadan rakam vermiyoruz; verirsek yanıltıcı olur. Aynı işin maliyeti binanın durumuna göre iki katına çıkabiliyor.",
    },
    {
      q: "Keşif ücretli mi?",
      a: "Battalgazi ve Yeşilyurt'ta ücretsiz. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabiliyor; işi biz yaparsak bu bedeli toplam tutardan düşüyoruz. Tutarı yola çıkmadan önce söylüyoruz.",
    },
    {
      q: "Teklifte neler yazılı oluyor?",
      a: "Malzeme ayrı, işçilik ayrı, süre ayrı. İş kalemleri metrajlı, malzeme sınıfı ve marka belirtilmiş, ödeme planı aşamalı. Sonradan çıkması muhtemel kalemler varsa onlar da baştan yazılıyor.",
    },
    {
      q: "İş sırasında fiyat değişir mi?",
      a: "Sözleşmedeki kalemler sabit. Değişiklik iki durumda oluyor: siz fikir değiştirirseniz ya da söküm sonrası gizli bir sorun çıkarsa (çürük boru, ıslanmış duvar, alüminyum kablo). İkisinde de önce yazılı bildirip onayınızı alıyoruz; onaysız ek iş yapılmıyor.",
    },
    {
      q: "Malzemeyi kendim alsam ucuzlar mı?",
      a: "Seramik, vitrifiye, armatür, parke gibi kalemleri kendiniz alabilirsiniz; teklifte sadece işçilik ve sarf malzeme yer alır. Ölçü ve miktar listesini biz çıkarıp size veriyoruz. Fiyat avantajı duruma göre değişir; asıl fayda ürünü kendiniz seçmenizdir.",
    },
    {
      q: "Ödeme nasıl yapılıyor?",
      a: "Hakediş esaslı: tamamlanan iş kalemlerine göre kademeli ödeme. Peşin toplu ödeme istemiyoruz. Son ödeme, birlikte dolaşıp eksik listesi kapatıldıktan sonra yapılıyor.",
    },
  ];

  const body = `
${pageHead({
  eyebrow: "Fiyatlandırma",
  title: `Fiyatlar nasıl <em class="hl">belirleniyor?</em>`,
  lead: "Götürü rakam vermiyoruz. Malzeme, işçilik ve süre ayrı ayrı yazılı. Bu sayfada her hizmetin fiyatını neyin belirlediğini ve teklif sürecinin nasıl işlediğini anlattık.",
  meta: [
    { icon: "doc", text: "Kalem kalem yazılı teklif" },
    { icon: "check", text: "Merkez ilçelerde ücretsiz keşif" },
    { icon: "shield", text: "Onaysız ek iş yok" },
  ],
})}

<section class="section">
  <div class="wrap">
    ${secHead(
      "Yaklaşım",
      "Neden telefonda kesin rakam vermiyoruz?",
      "Vermek isterdik ama verirsek yanıltıcı olur. Aynı işin maliyeti, yapının durumuna göre iki katına çıkabiliyor."
    )}
    <div class="grid g-2">
      <div class="prose" style="max-width:none">
        <p>Bir daire tadilatında maliyeti belirleyen şey metrekare değil, açtığınızda ne çıktığı. İki komşu daire, aynı metrekare, aynı oda sayısı; birinde tesisat sağlam, diğerinde alüminyum kablo ve galvaniz boru var. Aradaki fark iki katı bulabiliyor.</p>
        <p>O yüzden süreç şöyle işliyor: yerinde bakıyoruz, birkaç noktadan sondaj yapıp altyapının gerçek durumunu görüyoruz, sonra kalem kalem yazılı teklif veriyoruz. Teklifte "onu sonra konuşuruz" dediğimiz bir kalem bırakmıyoruz.</p>
        <p>Standart ve değişkeni az olan işlerde (priz değişimi, gider açma, avize montajı, petek temizliği) telefonda aralık söyleyebiliyoruz. O kalemlerin aralıklarını aşağıdaki sayfalarda bulabilirsiniz.</p>
      </div>
      <div>
        <div class="aside-box" style="border-top-color:var(--amber)">
          <h3>Fiyatı belirleyen ana etkenler</h3>
          <ul class="fact-list">
            <li><span>Alan</span><b>m² ve oda sayısı</b></li>
            <li><span>Kapsam</span><b>komple mi, kısmi mi</b></li>
            <li><span>Altyapı</span><b>tesisat yenilenecek mi</b></li>
            <li><span>Malzeme</span><b>sınıf ve marka tercihi</b></li>
            <li><span>Söküm</span><b>kırım ve moloz hacmi</b></li>
            <li><span>Bölge</span><b>merkez veya uzak ilçe</b></li>
          </ul>
        </div>
        <div class="aside-box">
          <h3>Keşif ve yol</h3>
          <ul class="fact-list">
            ${surveyFees
              .map(
                (f) => `<li><span>${esc(f.label)}</span><b>${
                  f.free ? "Ücretsiz" : priceUpdated && f.min != null ? `${tl(f.min)} – ${tl(f.max)} ₺` : "Aramada söylenir"
                }</b></li>`
              )
              .join("")}
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    ${secHead(
      "Hizmete göre",
      "Hangi işin fiyatını merak ediyorsunuz?",
      `${list.length} hizmet için fiyatı belirleyen kalemleri ayrı ayrı yazdık.${
        withPrices.length ? ` ${withPrices.length} tanesinde birim bazlı aralık da var.` : ""
      }`
    )}
    <div class="grid g-2">
      ${linkList(
        list.slice(0, Math.ceil(list.length / 2)).map((s) => ({
          label: s.title,
          sub: hasPrices(s.slug)
            ? "Fiyat aralığı var"
            : isStandard(s.slug)
              ? "Telefonda aralık söylüyoruz"
              : "Fiyatı ne belirler",
          href: `/fiyatlar/${s.slug}/`,
        }))
      )}
      ${linkList(
        list.slice(Math.ceil(list.length / 2)).map((s) => ({
          label: s.title,
          sub: hasPrices(s.slug)
            ? "Fiyat aralığı var"
            : isStandard(s.slug)
              ? "Telefonda aralık söylüyoruz"
              : "Fiyatı ne belirler",
          href: `/fiyatlar/${s.slug}/`,
        }))
      )}
    </div>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead("Süreç", "Tekliften teslime", "Her adımda ne olacağını önceden biliyorsunuz.")}
    <div class="steps">
      ${processSteps.map((s) => `<div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>`).join("")}
    </div>
  </div>
</section>

${faqBlock(faqs, "Fiyat ve teklif hakkında sık sorulanlar")}

${ctaBlock({
  title: "Kesin fiyat için keşif",
  text: "Adresi ve işin türünü söyleyin; yerinde bakıp kalem kalem yazılı teklif hazırlayalım. Merkez ilçelerde keşif ücretsiz.",
})}
`;

  return page({
    title: "Fiyatlar ve Teklif Süreci | CB İnşaat Malatya",
    description:
      "Malatya tadilat, elektrik ve tesisat fiyatları nasıl belirlenir? Kalem kalem yazılı teklif, ücretsiz keşif ve hakediş esaslı ödeme.",
    path: "/fiyatlar/",
    ctx,
    crumbs: [{ label: "Fiyatlar", href: "/fiyatlar/" }],
    schemas: [
      itemList(list.map((s) => ({ label: `${s.title} fiyatları`, href: `/fiyatlar/${s.slug}/` })), "Hizmet fiyatları"),
      faqSchema(faqs),
    ],
    body,
  });
}

/* =================================================== /fiyatlar/<hizmet>/ */
export function pricingServicePage(s, ctx) {
  const t = themeOfService(s);
  const table = priceTable(s.slug, t);
  const varsa = hasPrices(s.slug);
  const std = isStandard(s.slug);
  const group = services.filter((x) => x.group === s.group && x.slug !== s.slug && pricedSlugs.includes(x.slug));
  const komsu = (group.length >= 3 ? group : pricedServices().filter((x) => x.slug !== s.slug)).slice(0, 8);

  const faqs = [
    {
      q: `${s.title} fiyatı neye göre değişiyor?`,
      a: `Başlıca şu kalemler belirliyor: ${trLower(s.priceFactors.join(", "))}. ${
        std
          ? "Bunları telefonda konuşup bir aralık verebiliyoruz; kesin tutar yerinde görülünce netleşiyor."
          : "O yüzden yerinde bakmadan kesin rakam vermiyoruz."
      }`,
    },
    {
      q: std ? "Telefonda fiyat söylüyor musunuz?" : "Keşif ücretli mi?",
      a: std
        ? "Evet, bu iş kaleminde söylüyoruz. Adedi ve malzeme tercihini bilirsek bir aralık veriyoruz. Yerinde beklenmedik bir durum çıkarsa (buat çürümüş, hat kısa kalmış gibi) işe başlamadan haber verip onayınızı alıyoruz."
        : "Battalgazi ve Yeşilyurt'ta ücretsiz. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabiliyor; işi biz yaparsak toplam tutardan düşüyoruz.",
    },
    {
      q: "Teklif ne kadar sürede geliyor?",
      a: "Küçük ve standart işlerde keşif sırasında yazılı olarak veriyoruz. Kapsamlı işlerde metraj çıkarılması gerektiği için 2–3 iş günü sürüyor.",
    },
    ...(s.faqs || []).slice(0, 2),
  ];

  const body = `
${pageHead({
  eyebrow: "Fiyatlandırma",
  title: `Malatya <em class="hl">${esc(s.title.toLocaleLowerCase("tr-TR"))}</em> fiyatları`,
  lead: varsa
    ? `${s.title} için birim bazlı yaklaşık aralıklar ve fiyatı belirleyen kalemler. Kesin fiyat keşif sonrası yazılı veriliyor.`
    : std
      ? `${s.title} fiyatını belirleyen kalemler ve teklif süreci. Standart bir iş olduğu için adedi ve malzeme tercihini söylerseniz telefonda aralık verebiliyoruz.`
      : `${s.title} fiyatını belirleyen kalemler, kapsam ve teklif süreci. Değişkeni çok olan bir iş olduğu için yerinde bakmadan rakam vermiyoruz.`,
  theme: t,
  meta: [
    { icon: "doc", text: "Kalem kalem yazılı teklif" },
    { icon: "check", text: "Onaysız ek iş yok" },
    { icon: "phone", text: site.phoneDisplay },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div style="${themeVars(t)}">
      ${table}

      <h2${table ? ' class="mt-l"' : ""}>Fiyatı ne belirliyor?</h2>
      <p class="text-muted">${esc(s.title)} işinde tutarı birebir değiştiren kalemler:</p>
      ${scopeList(s.priceFactors)}

      <h2 class="mt-l">Fiyata neler dahil?</h2>
      <p class="text-muted">Teklif kapsamında yapılan işler:</p>
      ${scopeList(s.scope)}

      <div class="prose mt-l" style="max-width:none">
        <h2>Teklif nasıl hazırlanıyor?</h2>
        <p>${esc(s.intro)}</p>
        <p>Keşifte iş kalemlerini metrajlı çıkarıyor, malzeme ve işçiliği ayrı ayrı yazıyoruz. Sonradan çıkması muhtemel kalemler varsa onları da baştan belirtiyoruz; iş ortasında sürpriz çıkmıyor.</p>
        <p>${
          varsa
            ? "Yukarıdaki aralıklar bilgilendirme amaçlı. Kesin fiyat, yerinde görüldükten sonra yazılı olarak veriliyor."
            : std
              ? `${esc(s.title)} standart bir iş kalemi. Adedi, malzeme tercihini ve varsa sıva onarımı gerekip gerekmediğini söylerseniz telefonda bir aralık verebiliyoruz. Rakamı burada yazmıyoruz çünkü malzeme fiyatları sık değişiyor ve eskimiş bir liste yanıltır; aramada güncel rakamı söylüyoruz.`
              : "Bu iş kaleminde birim fiyat vermiyoruz çünkü kapsam projeden projeye çok değişiyor. Yerinde bakıp kalem kalem yazılı teklif hazırlıyoruz."
        }</p>
      </div>
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks("Hizmet detayı", [{ label: `${s.title} sayfası`, href: `/hizmetler/${s.slug}/` }])}
      ${asideLinks(
        group.length >= 3 ? `${s.group} fiyatları` : "Diğer fiyat sayfaları",
        [
          ...komsu.map((x) => ({ label: x.title, href: `/fiyatlar/${x.slug}/` })),
          { label: "Tüm fiyat sayfaları", href: "/fiyatlar/" },
        ]
      )}
    </aside>
  </div>
</section>

${faqBlock(faqs, `${s.title} fiyatı hakkında`)}

${ctaBlock({
  title: `${s.title} için teklif alın`,
  text: "Adresi ve işin kapsamını söyleyin; yerinde bakıp kalem kalem yazılı teklif hazırlayalım.",
})}
`;

  return page({
    title: `Malatya ${s.title} Fiyatları | ${site.name}`,
    description: `Malatya ${trLower(s.title)} fiyatları: fiyatı belirleyen kalemler, kapsam ve teklif süreci. Ücretsiz keşif, kalem kalem yazılı teklif.`,
    path: `/fiyatlar/${s.slug}/`,
    ctx,
    crumbs: [
      { label: "Fiyatlar", href: "/fiyatlar/" },
      { label: s.title, href: `/fiyatlar/${s.slug}/` },
    ],
    schemas: [
      serviceSchema({
        name: `${s.title} — Malatya fiyatlandırma`,
        description: `Malatya ${trLower(s.title)} fiyatlandırması ve teklif süreci.`,
        url: `/fiyatlar/${s.slug}/`,
        areaNames: districts.map((d) => `${d.name}, Malatya`),
        offers: s.scope,
      }),
      faqSchema(faqs),
    ],
    body,
  });
}

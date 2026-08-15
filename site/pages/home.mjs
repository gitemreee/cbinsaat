// Ana sayfa.
import { site, waLink, differentiators } from "../data/site.mjs";
import { services, featuredServices, serviceGroups, byGroup, groupsOrdered } from "../data/services.mjs";
import { districts } from "../data/districts.mjs";
import { localities } from "../data/localities.mjs";
import { posts } from "../data/posts.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon } from "../lib/html.mjs";
import { organization, website, itemList, faqSchema } from "../lib/schema.mjs";
import { themeOfGroup } from "../lib/theme.mjs";
import {
  serviceCard, postCard, linkList, chips, ctaBlock, processBlock,
  statsBlock, quickbar, secHead, faqBlock,
} from "../lib/blocks.mjs";
import { groupCard } from "./services.mjs";

// Hero slaytları — 6 ana hizmet alanı sırayla geçer.
// Kaynak dosyalar: public/photos/<source>.jpg  →  build /assets/hero-N.jpg üretir.
export const heroSlides = [
  { label: "Anahtar teslim tadilat", source: "anahtar-teslim-tadilat", alt: "Malatya'da anahtar teslim tadilat: yenilenmiş bir dairenin teslim öncesi hâli" },
  { label: "Elektrik tesisatı", source: "hero", alt: "CB İnşaat ekibi Malatya'da bir dairede elektrik panosu üzerinde çalışırken" },
  { label: "Su ve sıhhi tesisat", source: "sihhi-tesisat", alt: "Sıhhi tesisat: temiz su hattı kolektör ve boru bağlantısı" },
  { label: "Doğalgaz tesisatı", source: "dogalgaz-ic-tesisat", alt: "Doğalgaz iç tesisatı: daire içi gaz hattı ve sayaç bağlantısı" },
  { label: "Hidrofor ve pompa", source: "hidrofor-pompa-sistemleri", alt: "Hidrofor ve pompa sistemi: bina su basınçlandırma grubu" },
  { label: "Sulama sistemleri", source: "kayisi-bahcesi-sulama", alt: "Kayısı bahçesinde damlama sulama sistemi" },
];

const homeFaqs = [
  {
    q: "Hangi ilçelere geliyorsunuz?",
    a: "Hepsine. Battalgazi ve Yeşilyurt'ta genelde aynı gün geliriz. Uzak ilçelerde o günkü programa bakarız, aynı gün olmazsa ertesi sabah. Aynı mahalleden birden fazla iş çıktığında gün çok daha çabuk ayarlanıyor; komşularınızla birlikte aramanızı öneririz.",
  },
  {
    q: "Keşif ücretli mi?",
    a: "Battalgazi ve Yeşilyurt'ta ücretsiz. Uzak ilçelerde yol mesafesine göre bir keşif bedeli oluşabiliyor; işi biz yaparsak bu bedeli toplamdan düşüyoruz. Tutarı yola çıkmadan önce söylüyoruz.",
  },
  {
    q: "Teklif nasıl veriliyor?",
    a: "Malzeme ne kadar, işçilik ne kadar, kaç gün sürer, hepsi ayrı ayrı yazılı. Sonradan çıkması muhtemel işler varsa onları da baştan söylüyoruz. Siz onaylamadan ek iş yapılmıyor.",
  },
  {
    q: "Elektrik ve su işlerini aynı ekip mi yapıyor?",
    a: "Evet, hepsi bizde; işin tamamını kendi ekibimiz yapıyor. Sebebi şu: suda çıkan bir sorun elektriği bekletiyor, elektrikte çıkan bir sorun seramiği. Aynı ekipte olunca bu beklemeler yaşanmıyor, aynı duvar iki kez kırılmıyor.",
  },
  {
    q: "Acil durumda aynı gün gelir misiniz?",
    a: "Yanık kokusu, kıvılcım, su baskını, evin tamamının elektriksiz kalması. Bunlar acil, merkez ilçelerde aynı gün geliyoruz. Her iş acil değil; aciliyeti telefonda birlikte değerlendiriyoruz. Acil ücreti yalnızca gerçekten acil işlerde geçerli.",
  },
  {
    q: "Garanti var mı?",
    a: "İşçilik garantili, süresi de kapsamı da teklifte yazıyor. Malzemede üreticinin garantisi geçerli, belgeleri iş biterken size veriyoruz. Garanti kapsamında bir sorun olursa ek ücret almadan geliyoruz.",
  },
];

export function homePage(ctx) {
  const topServices = featuredServices.slice(0, 12);
  const latestPosts = posts.slice(0, 3);
  const centralLocalities = localities
    .filter((l) => l.district === "battalgazi" || l.district === "yesilyurt")
    .slice(0, 24);

  const body = `
<section class="hero">
  <div class="hero-media">
    ${heroSlides
      .map(
        (h, i) => `<picture>
      <source srcset="/assets/hero-${i + 1}.webp" type="image/webp">
      <img src="/assets/hero-${i + 1}.jpg" alt="${esc(h.alt)}" width="1920" height="1080"${
          i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'
        } decoding="async">
    </picture>`
      )
      .join("")}
  </div>
  <div class="wrap hero-in">
    <p class="eyebrow">Malatya geneli hizmetinizdeyiz · ${site.founded}'ten beri</p>
    <h1>Anahtar teslim<br><em>tadilat.</em></h1>
    <p class="hero-rotator" aria-hidden="true">${heroSlides
      .map((h, i) => `<span class="r-${i + 1}">${icon("check")} ${esc(h.label)}</span>`)
      .join("")}</p>
    <p>Elektrik, su, dekorasyon ve yapı işleri tek ekipte. Daire, ev, mutfak, banyo ve iş yeri tadilatını yıkımından teslimine kadar biz yürütüyoruz.</p>
    <div class="btn-row">
      <a class="btn btn--primary" href="/teklif/">${icon("doc")} Ücretsiz keşif iste</a>
      <a class="btn btn--wa" href="${waLink()}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp'tan yazın</a>
    </div>
    <div class="hero-tags">
      <span>${icon("check")} Yıkımından teslimine yanınızdayız</span>
      <span>${icon("check")} Fiyatı yazılı veriyoruz</span>
      <span>${icon("check")} Hakediş esaslı ödeme</span>
      <span>${icon("check")} İşçilik garantili teslim</span>
    </div>
  </div>
</section>

${quickbar()}

<section class="section">
  <div class="wrap">
    ${secHead(
      "Hizmetler",
      "Ne yapıyoruz?",
      "Anahtar teslim tadilattan mutfak–banyoya, iş yeri projelerinden elektrik ve su tesisatına kadar tüm hizmeti veriyoruz. Hepsi aynı ekiple, aynı tecrübeyle."
    )}
    <div class="grid g-4">
      ${groupsOrdered.map(groupCard).join("")}
    </div>
    <div class="btn-row mt-l">
      <a class="btn btn--dark" href="/hizmetler/">Tüm hizmetleri görün ${icon("arrow")}</a>
    </div>
  </div>
</section>

${statsBlock()}

<section class="section section--dark section--photo">
  <div class="section-bg" aria-hidden="true">
    <picture>
      <source srcset="/assets/neden-biz.webp" type="image/webp">
      <img src="/assets/neden-biz.jpg" alt="" width="1920" height="1080" loading="lazy" decoding="async">
    </picture>
  </div>
  <div class="wrap">
    <div class="split" style="gap:clamp(32px,5vw,72px);align-items:center">
      <div>
        <p class="eyebrow on-dark">Neden CB İnşaat</p>
        <h2>Yıkımdan<br>temiz teslime<br>tek muhatap.</h2>
        <p class="lead mt-m">Elektrikçi sıvacıyı bekler, sıvacı seramikçiyi. İş uzar, maliyet artar, bir aksaklık çıktığında da kimse sorumluluğu üstlenmez. Biz bu kalemleri tek programda topluyoruz; muhatabınız tek.</p>
        <div class="points">
          ${differentiators
            .map(
              (d) => `<div>
              <span class="tick">${icon("check")}</span>
              <div><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p></div>
            </div>`
            )
            .join("")}
        </div>
        <div class="btn-row mt-l">
          <a class="btn btn--primary" href="/hakkimizda/">Hakkımızda ${icon("arrow")}</a>
        </div>
      </div>
      <div>
        <div class="aside-box aside-box--dark" style="border-top-color:var(--amber)">
          <h3>Hizmet gruplarımız</h3>
          ${serviceGroups
            .map((g) => {
              const list = byGroup(g);
              return `<div style="padding:16px 0;border-bottom:1px solid var(--line-dark)">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
                  <span style="color:${themeOfGroup(g).color};display:grid;place-items:center;width:22px">${icon(themeOfGroup(g).icon)}</span>
                  <b style="color:#fff;font-family:var(--f-display);font-size:1.2rem">${esc(g)}</b>
                  <span style="margin-left:auto;font-size:.8rem;color:#8a939e">${list.length} hizmet</span>
                </div>
                <p style="margin:0;font-size:.88rem;color:#98a1ab">${list.slice(0, 4).map((s) => esc(s.title)).join(" · ")}</p>
              </div>`;
            })
            .join("")}
          <div class="btn-row mt-m">
            <a class="btn btn--ghost-light btn--block" href="/hizmetler/">Hizmet listesi</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

${processBlock()}

<section class="section section--white">
  <div class="wrap">
    ${secHead(
      "Hizmet bölgeleri",
      "Malatya'nın her ilçesinde",
      "Merkezin dışında Darende, Hekimhan, Arapgir, Pütürge dahil hepsine gidiyoruz. Uzak ilçelerde işleri toplayıp gittiğimiz için, komşunuzla birlikte aradığınızda randevu günü daha çabuk çıkıyor."
    )}
    <div class="grid g-3">
      ${linkList(
        districts.slice(0, 5).map((d) => ({
          label: d.name,
          sub: d.distanceKm === 0 ? "Merkez ilçe" : `Merkeze ~${d.distanceKm} km`,
          href: `/bolgeler/${d.slug}/`,
        }))
      )}
      ${linkList(
        districts.slice(5, 9).map((d) => ({
          label: d.name,
          sub: `Merkeze ~${d.distanceKm} km`,
          href: `/bolgeler/${d.slug}/`,
        }))
      )}
      ${linkList(
        districts.slice(9).map((d) => ({
          label: d.name,
          sub: `Merkeze ~${d.distanceKm} km`,
          href: `/bolgeler/${d.slug}/`,
        }))
      )}
    </div>

    <div class="mt-l">
      <p class="eyebrow">Merkez mahalleler</p>
      <p class="lead" style="max-width:56rem">Battalgazi ve Yeşilyurt'ta mahalle mahalle çalışıyoruz. Kendi mahallenizi seçtiğinizde orada en çok hangi işi yaptığımızı ve o bölgedeki binaların tipik sorunlarını görebilirsiniz.</p>
      <div class="mt-s">
        ${chips(
          centralLocalities.map((l) => ({ label: l.name, href: `/bolgeler/${l.district}/${l.slug}/` }))
        )}
      </div>
      <div class="btn-row mt-m">
        <a class="btn btn--ghost" href="/bolgeler/">Tüm bölge ve mahalleler ${icon("arrow")}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    ${secHead(
      "Rehber içerikler",
      "Usta çağırmadan önce okuyun",
      "Sigorta neden atar, peteğin altı neden soğuk kalır, su kaçağını evde nasıl anlarsınız. Kendiniz çözebileceğiniz durumlar için gereksiz masraf yapmayın diye yazdık."
    )}
    <div class="grid g-3">
      ${latestPosts.map((p, i) => postCard(p, i)).join("")}
    </div>
    <div class="btn-row mt-l">
      <a class="btn btn--dark" href="/blog/">${posts.length} yazının tamamı ${icon("arrow")}</a>
    </div>
  </div>
</section>

${faqBlock(homeFaqs, "Sık sorulan sorular")}

${ctaBlock({
  title: "Bugün arayın, gelip bakalım",
  text: "Ne olduğunu anlatın, adresi verin. Acil bir işse aynı gün geliriz; değilse size uygun günü birlikte belirleriz. Merkez ilçelerde keşif ücretsiz.",
})}
`;

  return page({
    title: `${site.name} | Malatya Elektrik, Sıhhi Tesisat ve İnşaat`,
    description:
      "Malatya'da elektrik, sıhhi tesisat, hidrofor–pompa, sulama sistemi ve anahtar teslim tadilat. Malatya geneli yerinde keşif, yazılı fiyat.",
    path: "/",
    ctx,
    schemas: [
      organization(districts.map((d) => `${d.name}, Malatya`)),
      website(),
      faqSchema(homeFaqs),
      itemList(
        services.map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })),
        "CB İnşaat hizmetleri"
      ),
    ],
    body,
  });
}

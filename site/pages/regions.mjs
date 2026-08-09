// Bölge rehberi, ilçe ve mahalle sayfaları.
import { site } from "../data/site.mjs";
import { services, getService, coreServices } from "../data/services.mjs";
import { districts } from "../data/districts.mjs";
import { localities, localitiesOf, featuredOf, neighbours, displayName } from "../data/localities.mjs";
import { localTags } from "../data/local-tags.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, trLower, locIn, locOf, locTo , localTerms} from "../lib/html.mjs";
import { itemList, faqSchema, serviceSchema } from "../lib/schema.mjs";
import {
  serviceCard, linkList, chips, ctaBlock, secHead, faqBlock,
  pageHead, contactAside, asideLinks, processBlock, regionBanner,
} from "../lib/blocks.mjs";

/* ============================================================= /bolgeler/ */
export function regionsIndex(ctx) {
  const merkez = districts.filter((d) => d.type === "merkez ilçe");
  const ilceler = districts.filter((d) => d.type !== "merkez ilçe");

  const body = `
${pageHead({
  eyebrow: "Hizmet bölgeleri",
  title: `Malatya'nın <em class="hl">13 ilçesinde</em>`,
  lead: `Merkez ilçelerin yanında Darende, Hekimhan, Arapgir, Pütürge dahil tüm ilçelere gidiyoruz. ${localities.length} mahalle ve yerleşim için ayrı sayfa hazırladık; her birinde o bölgedeki tipik yapı özelliklerini ve en sık yaptığımız işleri yazdık.`,
  meta: [
    { icon: "pin", text: "13 ilçe" },
    { icon: "layers", text: `${localities.length} mahalle ve yerleşim` },
    { icon: "clock", text: site.hoursText },
  ],
})}

<section class="section">
  <div class="wrap">
    ${secHead("Merkez ilçeler", "Battalgazi ve Yeşilyurt", "Malatya nüfusunun büyük bölümünün yaşadığı iki merkez ilçe. Acil arızalarda aynı gün müdahale ediyoruz.")}
    <div class="grid g-2">
      ${merkez
        .map(
          (d) => `<div class="card"><div class="card-body">
        <span style="color:var(--amber-dark)">${icon("building")}</span>
        <h3>${esc(d.name)}</h3>
        <p>${esc(d.tagline)}</p>
        <p style="font-size:.86rem;color:var(--muted-2);margin:0">${localitiesOf(d.slug).length} mahalle ve yerleşim</p>
        <div class="card-foot"><a class="arrow-link" href="/bolgeler/${d.slug}/">${esc(d.name)} sayfası ${icon("arrow")}</a></div>
      </div></div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead("İlçeler", "Malatya'nın diğer 11 ilçesi", "Uzak ilçelerde işleri toplu programlıyoruz. Aynı bölgeden birden fazla iş aynı güne alındığında hem randevu hızlanıyor hem maliyet düşüyor.")}
    <div class="grid g-3">
      ${linkList(ilceler.slice(0, 4).map((d) => ({ label: d.name, sub: `~${d.distanceKm} km · ${localitiesOf(d.slug).length} yerleşim`, href: `/bolgeler/${d.slug}/` })))}
      ${linkList(ilceler.slice(4, 8).map((d) => ({ label: d.name, sub: `~${d.distanceKm} km · ${localitiesOf(d.slug).length} yerleşim`, href: `/bolgeler/${d.slug}/` })))}
      ${linkList(ilceler.slice(8).map((d) => ({ label: d.name, sub: `~${d.distanceKm} km · ${localitiesOf(d.slug).length} yerleşim`, href: `/bolgeler/${d.slug}/` })))}
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    ${secHead("Mahalleler", "Mahalle bazında hizmet", "Aşağıdaki listeden mahallenizi seçerek, o bölgede en sık yaptığımız işleri ve dikkat ettiğimiz noktaları görebilirsiniz.")}
    ${districts
      .map((d) => {
        const locs = localitiesOf(d.slug);
        if (!locs.length) return "";
        const one = featuredOf(d.slug).length ? featuredOf(d.slug) : locs.slice(0, 24);
        return `<div style="margin-bottom:32px">
        <div class="divider"><h3><a href="/bolgeler/${d.slug}/">${esc(d.name)}</a></h3></div>
        ${chips([
          ...one.map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` })),
          ...(locs.length > one.length
            ? [{ label: `${d.name} — ${locs.length} mahallenin tamamı`, href: `/bolgeler/${d.slug}/` }]
            : []),
        ])}
      </div>`;
      })
      .join("")}
  </div>
</section>

${ctaBlock({ title: "Bölgenize geliyor muyuz? Evet.", text: "Malatya'nın hangi ilçesinde olursanız olun keşif için gelebiliyoruz. Uzak ilçelerde program durumunu telefonda net söylüyoruz." })}
`;

  return page({
    title: "Hizmet Bölgeleri | Malatya'nın 13 İlçesi ve Mahalleleri",
    description: `Malatya'nın 13 ilçesinde ve ${localities.length} mahallede elektrik, tesisat, pompa ve tadilat hizmeti. Battalgazi, Yeşilyurt, Akçadağ, Darende, Doğanşehir ve tüm ilçeler.`,
    path: "/bolgeler/",
    ctx,
    crumbs: [{ label: "Bölgeler", href: "/bolgeler/" }],
    schemas: [itemList(districts.map((d) => ({ label: d.name, href: `/bolgeler/${d.slug}/` })), "Malatya ilçeleri")],
    body,
  });
}

/* ====================================================== /bolgeler/<ilce>/ */
export function districtPage(d, ctx) {
  const locs = localitiesOf(d.slug);
  const priority = (d.priorityServices || []).map(getService).filter(Boolean);
  const inD = locIn(d.name);
  const ofD = locOf(d.name);
  const toD = locTo(d.name);

  const faqs = [
    {
      q: `${inD} aynı gün gelebiliyor musunuz?`,
      a:
        d.distanceKm === 0
          ? `Evet. ${esc(d.name)} merkez ilçe olduğu için acil arızalarda aynı gün müdahale ediyoruz. Planlı işlerde size uygun gün ve saati birlikte belirliyoruz.`
          : `Acil durumlarda gün içi program durumuna göre aynı gün, aksi hâlde ertesi gün randevu veriyoruz. ${esc(d.name)} merkeze yaklaşık ${d.distanceKm} km mesafede olduğu için işleri toplu planlıyoruz; aynı mahalleden birden fazla iş olduğunda randevu iyice hızlanıyor.`,
    },
    {
      q: `${inD} keşif ücretli mi?`,
      a:
        d.distanceKm === 0
          ? "Merkez ilçelerde ilk keşif ücretsizdir. Keşifte iş kalemleri yazılı olarak çıkarılır ve teklif hazırlanır."
          : `${esc(d.name)} için yol mesafesine göre bir keşif bedeli oluşabilir. Bu tutarı aramadan önce söylüyoruz ve iş tarafımızca yapıldığında toplam tutardan düşüyoruz.`,
    },
    {
      q: `${ofD} kırsal mahallelerine de geliyor musunuz?`,
      a: `Evet. ${esc(d.name)} sınırlarındaki tüm mahalle ve yerleşimlere gidiyoruz. Kırsal mahallelerde ağırlıklı olarak ev tesisatı, kuyu pompası, sulama hattı ve topraklama işleri yapıyoruz.`,
    },
    {
      q: `${inD} hangi hizmetleri veriyorsunuz?`,
      a: `Elektrik tesisatı ve arıza, pano, sıhhi tesisat, su kaçağı tespiti, gider açma, hidrofor ve pompa sistemleri, sulama altyapısı, aydınlatma, güvenlik sistemleri ile anahtar teslim tadilat dahil ${services.length} hizmet başlığının tamamını veriyoruz.`,
    },
  ];

  const body = `
${pageHead({
  eyebrow: `Malatya · ${d.type}`,
  title: `<em class="hl">${esc(d.name)}</em> elektrik, tesisat ve yapı hizmetleri`,
  lead: d.intro,
  meta: [
    { icon: "pin", text: d.distanceKm === 0 ? "Merkez ilçe" : `Malatya merkeze ~${d.distanceKm} km` },
    { icon: "layers", text: `${locs.length} mahalle ve yerleşim` },
    { icon: "doc", text: "Yerinde keşif, yazılı teklif" },
  ],
})}

${regionBanner(`${d.name} · Malatya`)}

<section class="section">
  <div class="wrap with-aside">
    <div>
      <div class="prose" style="max-width:none">
        <h2>${inD} çalışırken nelere dikkat ediyoruz?</h2>
        ${d.context.map((c) => `<h3>${esc(c.h)}</h3><p>${esc(c.p)}</p>`).join("")}
      </div>

      <h2 class="mt-l">${ofD} öne çıkan hizmetleri</h2>
      <p class="text-muted">${esc(d.name)} özelinde en sık talep edilen kalemler:</p>
      <div class="grid g-2 mt-s">
        ${priority.map(serviceCard).join("")}
      </div>

      <h2 class="mt-l">Tüm hizmetler ${inD}</h2>
      <p class="text-muted">Aşağıdaki hizmet başlıklarının tamamını ${toD} veriyoruz.</p>
      <div class="mt-s">
        ${chips(
          services.map((s) => ({
            label: s.title,
            href: s.core ? `/hizmetler/${s.slug}/${d.slug}/` : `/hizmetler/${s.slug}/`,
          }))
        )}
      </div>
    </div>

    <aside>
      ${contactAside()}
      <div class="aside-box">
        <h3>${esc(d.name)} özeti</h3>
        <ul class="fact-list">
          <li><span>Tip</span><b>${esc(d.type)}</b></li>
          <li><span>Merkeze uzaklık</span><b>${d.distanceKm === 0 ? "Merkez ilçe" : `~${d.distanceKm} km`}</b></li>
          <li><span>Yerleşim sayısı</span><b>${locs.length}</b></li>
          <li><span>Keşif</span><b>${d.distanceKm === 0 ? "Ücretsiz" : "Mesafeye göre"}</b></li>
        </ul>
        <p class="mt-s" style="font-size:.9rem;color:var(--muted)">${esc(d.highlights.join(" · "))}</p>
      </div>
      ${asideLinks(
        "Öne çıkan hizmetler",
        priority.map((s) => ({
          label: s.title,
          href: s.core ? `/hizmetler/${s.slug}/${d.slug}/` : `/hizmetler/${s.slug}/`,
        }))
      )}
      ${asideLinks("Diğer ilçeler", districts.filter((x) => x.slug !== d.slug).slice(0, 8).map((x) => ({ label: x.name, href: `/bolgeler/${x.slug}/` })))}
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead(
      "Mahalleler",
      `${ofD} mahalle ve yerleşimleri`,
      `${esc(d.name)} sınırlarındaki ${locs.length} yerleşimin tamamına gidiyoruz. Mahalle sayfasında o bölgenin yapı özelliklerini ve en sık yaptığımız işleri bulabilirsiniz.`
    )}
    <div class="grid g-2">
      ${linkList(locs.slice(0, Math.ceil(locs.length / 2)).map((l) => ({ label: l.name, sub: l.type, href: `/bolgeler/${d.slug}/${l.slug}/` })))}
      ${linkList(locs.slice(Math.ceil(locs.length / 2)).map((l) => ({ label: l.name, sub: l.type, href: `/bolgeler/${d.slug}/${l.slug}/` })))}
    </div>
  </div>
</section>

${processBlock(`${inD} nasıl çalışıyoruz?`)}

${faqBlock(faqs, `${d.name} hakkında sık sorulanlar`)}

${ctaBlock({
  title: `${inD} bir iş için görüşelim`,
  text: `Adresi ve işin türünü söyleyin; ${esc(d.name)} için uygun gün ve saati birlikte belirleyelim.`,
})}
`;

  return page({
    title: `${d.name} Elektrikçi, Tesisatçı ve Tadilat | Malatya ${d.name}`,
    description: `${d.name} Malatya'da elektrik tesisatı, arıza, sıhhi tesisat, su kaçağı, hidrofor ve tadilat hizmeti. ${d.metaExtra} yerinde keşif ve yazılı teklif.`,
    path: `/bolgeler/${d.slug}/`,
    ctx,
    keywords: [...localTerms(`Malatya ${d.name}`), ...localTerms(d.name)],
    crumbs: [
      { label: "Bölgeler", href: "/bolgeler/" },
      { label: d.name, href: `/bolgeler/${d.slug}/` },
    ],
    schemas: [
      serviceSchema({
        name: `Elektrik, tesisat ve yapı hizmetleri, ${d.name}, Malatya`,
        description: d.intro,
        url: `/bolgeler/${d.slug}/`,
        areaNames: [`${d.name}, Malatya`, ...locs.slice(0, 40).map((l) => `${l.name}, ${d.name}`)],
        offers: services.map((s) => s.title),
      }),
      itemList(locs.map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` })), `${d.name} mahalleleri`),
      faqSchema(faqs),
    ],
    body,
  });
}

/* =========================================== /bolgeler/<ilce>/<mahalle>/ */
export function localityPage(l, d, ctx) {
  const nearby = neighbours(l, 8);
  const priority = (d.priorityServices || []).map(getService).filter(Boolean).slice(0, 4);
  const inL = locIn(l.name, l.poss);
  const inD = locIn(d.name);
  const ofL = locOf(l.name, l.poss);
  const toL = locTo(l.name, l.poss);

  const typeText = {
    mahalle: "yerleşik mahalle",
    "kırsal mahalle": "kırsal mahalle",
    "sanayi bölgesi": "sanayi bölgesi",
  }[l.type] || l.type;

  const faqs = [
    {
      q: `${inL} servis veriyor musunuz?`,
      a: `Evet. ${esc(l.name)}, ${esc(d.name)} ilçesi sınırlarında ve düzenli olarak gittiğimiz bir bölge. ${d.distanceKm === 0 ? "Merkez ilçe olduğu için acil işlerde aynı gün müdahale edebiliyoruz." : `Malatya merkeze yaklaşık ${d.distanceKm} km mesafede; randevuyu program durumuna göre birlikte belirliyoruz.`}`,
    },
    {
      q: `${inL} hangi işleri yapıyorsunuz?`,
      a: `Elektrik tesisatı ve arıza, pano, sıhhi tesisat, su kaçağı tespiti, gider açma, hidrofor ve pompa, sulama sistemleri, aydınlatma ve tadilat dahil tüm hizmet başlıklarını ${toL} veriyoruz.`,
    },
    {
      q: `Acil bir arızada ne kadar sürede gelirsiniz?`,
      a:
        d.distanceKm === 0
          ? "Yanık kokusu, kıvılcım, su baskını gibi acil durumlarda aynı gün müdahale ediyoruz. Telefonda durumu anlattığınızda net bir saat aralığı söylüyoruz."
          : `Acil durumlarda gün içi program durumuna göre aynı gün gelmeye çalışıyoruz. Mesafe nedeniyle net saat aralığını arama sırasında söylüyoruz.`,
    },
  ];

  const body = `
${pageHead({
  eyebrow: `${d.name} · Malatya`,
  title: `<em class="hl">${esc(displayName(l))}</em> elektrikçi ve tesisatçı`,
  lead: `${esc(l.name)}, ${esc(d.name)} ilçesine bağlı bir ${typeText}. ${esc(l.note)}`,
  meta: [
    { icon: "pin", text: `${l.name}, ${d.name} / Malatya` },
    { icon: "layers", text: typeText },
    { icon: "phone", text: site.phoneDisplay },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div>
      <div class="prose" style="max-width:none">
        <h2>${inL} hangi işleri yapıyoruz?</h2>
        <p>${esc(l.note)} Bu nedenle ${inL} en sık gelen talepler, ${esc(d.name)} genelindeki iş profiliyle örtüşüyor: ${priority.map((s) => esc(trLower(s.title))).join(", ")}.</p>
        <p>${esc(d.intro)}</p>

        <h3>Bölgenin yapı özellikleri</h3>
        <p>${esc(d.context[0].p)}</p>

        <h3>Keşif ve randevu</h3>
        <p>${
          d.distanceKm === 0
            ? `${esc(l.name)} merkez ilçe sınırlarında olduğu için keşif ücretsiz ve çoğu zaman aynı gün yapılabiliyor. Acil arızalarda telefonda durumu anlattığınızda net bir saat aralığı veriyoruz.`
            : `${esc(l.name)} Malatya merkeze yaklaşık ${d.distanceKm} km mesafede. Bu bölgedeki işleri toplu planladığımız için, aynı mahalleden birden fazla iş olduğunda hem randevu hızlanıyor hem maliyet düşüyor. Komşularınızla birlikte aradığınızda program açısından belirgin avantaj sağlıyoruz.`
        }</p>
        <p>Keşif sonrası malzeme, işçilik ve süre ayrı ayrı yazılıyor. Onay vermeden hiçbir iş başlamıyor; iş sırasında ek kalem çıkarsa önce size bildiriyoruz.</p>
      </div>

      <h2 class="mt-l">${esc(l.name)} için aranan başlıklar</h2>
      <p class="lead-sm">${esc(l.name)} sakinlerinin en sık aradığı iş başlıkları. Her biri için ayrı sayfa hazırladık.</p>
      <div class="grid g-4 mt-s">
        ${localTags
          .map(
            (t) => `<a class="tag-card" href="/bolgeler/${d.slug}/${l.slug}/${t.slug}/">
          <span class="tag-card-i">${icon(t.icon)}</span>
          <strong>${esc(l.name)} ${esc(t.label)}</strong>
          <span>${esc(t.terms.slice(0, 3).join(" · "))}</span>
        </a>`
          )
          .join("")}
      </div>

      <h2 class="mt-l">${inL} öne çıkan hizmetler</h2>
      <div class="grid g-2 mt-s">
        ${priority.map(serviceCard).join("")}
      </div>

      <h2 class="mt-l">Tüm hizmet başlıkları</h2>
      <div class="mt-s">
        ${chips(
          services.map((s) => ({
            label: s.title,
            href: s.core ? `/hizmetler/${s.slug}/${d.slug}/` : `/hizmetler/${s.slug}/`,
          }))
        )}
      </div>
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks(
        `${d.name} yakın mahalleler`,
        nearby.map((n) => ({ label: n.name, href: `/bolgeler/${d.slug}/${n.slug}/` }))
      )}
      ${asideLinks("Bölge sayfaları", [
        { label: `${d.name} ilçe sayfası`, href: `/bolgeler/${d.slug}/` },
        { label: "Tüm bölgeler", href: "/bolgeler/" },
        { label: "Hizmet listesi", href: "/hizmetler/" },
      ])}
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead("Yakın çevre", `${esc(d.name)} içindeki diğer mahalleler`, `${esc(l.name)} çevresindeki yerleşimlere de aynı ekip gidiyor. Aynı gün birden fazla iş programlandığında randevu hızlanıyor.`)}
    ${chips(localitiesOf(d.slug).filter((x) => x.slug !== l.slug).map((x) => ({ label: x.name, href: `/bolgeler/${d.slug}/${x.slug}/` })))}
  </div>
</section>

${faqBlock(faqs, `${l.name} hakkında sık sorulanlar`)}

${ctaBlock({
  title: `${inL} bir iş için arayın`,
  text: `${esc(l.name)} ve çevresine düzenli gidiyoruz. Durumu anlatın, uygun gün ve saati birlikte belirleyelim.`,
})}
`;

  return page({
    // Uzun yerleşim adlarında (ör. "I. Organize Sanayi Bölgesi") title 70 karakteri
    // aşmasın diye kısa varyant kullanılır.
    title:
      l.name.length > 20
        ? `${l.name} Elektrik ve Tesisat | Malatya`
        : `${l.name} Elektrikçi ve Tesisatçı | ${d.name} Malatya`,
    description: `${l.name} (${d.name} / Malatya) elektrik tesisatı, arıza, su tesisatı, kaçak tespiti, gider açma, hidrofor ve tadilat hizmeti. Yerinde keşif ve yazılı teklif.`,
    path: `/bolgeler/${d.slug}/${l.slug}/`,
    keywords: [...localTerms(l.name), ...localTerms(`${l.name} ${d.name}`), `${l.name} Malatya`],
    ctx,
    crumbs: [
      { label: "Bölgeler", href: "/bolgeler/" },
      { label: d.name, href: `/bolgeler/${d.slug}/` },
      { label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` },
    ],
    schemas: [
      serviceSchema({
        name: `Elektrik ve tesisat hizmetleri, ${l.name}, ${d.name}`,
        description: `${l.name} ${d.name} Malatya'da elektrik, sıhhi tesisat, pompa ve tadilat hizmeti.`,
        url: `/bolgeler/${d.slug}/${l.slug}/`,
        areaNames: [`${l.name}, ${d.name}, Malatya`],
        offers: services.filter((s) => s.featured).map((s) => s.title),
      }),
      faqSchema(faqs),
    ],
    body,
  });
}

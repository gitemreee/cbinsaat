// Hizmetler listesi, hizmet detay ve hizmet × ilçe sayfaları.
import { site, waLink } from "../data/site.mjs";
import { services, serviceGroups, byGroup, groupIntro, groupIcon, getService, groupsOrdered, groupHref, groupCover } from "../data/services.mjs";
import { districts } from "../data/districts.mjs";
import { localitiesOf, featuredOf } from "../data/localities.mjs";
import { postsForService } from "../data/posts.mjs";
import { extraFor } from "../data/service-extra.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon, trLower, locIn, locOf, locTo , localTerms} from "../lib/html.mjs";
import { serviceSchema, faqSchema, itemList } from "../lib/schema.mjs";
import { themeOfService, themeOfGroup, themeVars } from "../lib/theme.mjs";
import {
  serviceCard, postCard, linkList, chips, ctaBlock, processBlock,
  secHead, faqBlock, pageHead, renderBlocks, tocFrom, contactAside, asideLinks, scopeList,
  coverImg,
} from "../lib/blocks.mjs";

/* ------------------------------------------------- grup kartı (ortak) */
export const groupCard = (g) => {
  const t = themeOfGroup(g.name);
  return `<a class="card svc-card" href="${g.href}" style="${themeVars(t)}">
  <div class="cover">
    ${coverImg(groupCover(g.name), `${g.name} — Malatya`)}
    <span class="cover-tag">${icon(t.icon)} ${g.items.length} hizmet</span>
  </div>
  <div class="card-body">
    <div class="head">
      <span class="icon">${icon(t.icon)}</span>
      <h3>${esc(g.name)}</h3>
    </div>
    <p>${esc(g.items.slice(0, 4).map((s) => s.title).join(" · "))}${g.items.length > 4 ? " …" : ""}</p>
    <span class="card-foot arrow-link">${g.items.length} hizmeti görün ${icon("arrow")}</span>
  </div>
</a>`;
};

/* ============================================================ /hizmetler/ */
export function servicesIndex(ctx) {
  const body = `
${pageHead({
  eyebrow: "Hizmetler",
  title: `Malatya'da <em class="hl">${services.length} hizmet</em> başlığı`,
  lead: "Elektrik, su, mekanik ve yapı işlerinin tamamı tek ekipte. Her hizmet başlığı için kapsamı, sürecin nasıl işlediğini ve sık sorulanları ayrı ayrı yazdık.",
  meta: [
    { icon: "pin", text: "Malatya'nın 13 ilçesinde" },
    { icon: "clock", text: site.hoursText },
    { icon: "shield", text: "İşçilik garantili" },
  ],
})}

${serviceGroups
  .map(
    (g, gi) => `<section class="section${gi % 2 ? " section--white" : ""}">
  <div class="wrap">
    ${secHead(`${byGroup(g).length} hizmet`, g, groupIntro[g])}
    <div class="grid g-4">
      ${byGroup(g).map(serviceCard).join("")}
    </div>
  </div>
</section>`
  )
  .join("")}

${processBlock("Hangi hizmet olursa olsun süreç aynı")}

${ctaBlock({
  title: "Hangi hizmete ihtiyacınız olduğundan emin değil misiniz?",
  text: "Durumu anlatın; hangi kalemin gerektiğini, acil olup olmadığını ve yaklaşık maliyeti telefonda söyleyelim.",
})}
`;

  return page({
    title: "Hizmetler | Malatya Elektrik, Tesisat ve Yapı İşleri",
    description:
      "Malatya'da elektrik tesisatı, arıza, pano, sıhhi tesisat, su kaçağı, gider açma, hidrofor, sulama sistemleri ve anahtar teslim tadilat hizmetlerinin tamamı.",
    path: "/hizmetler/",
    ctx,
    crumbs: [{ label: "Hizmetler", href: "/hizmetler/" }],
    schemas: [
      itemList(services.map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })), "Hizmetler"),
    ],
    body,
  });
}

/* ============================================ /hizmetler/alan/<grup>/ */
export function serviceGroupPage(g, ctx) {
  const t = themeOfGroup(g.name);
  const others = groupsOrdered.filter((x) => x.slug !== g.slug);
  const lower = trLower(g.name);

  const faqs = [
    {
      q: `${g.name} işlerinde keşif ücretli mi?`,
      a: "Battalgazi ve Yeşilyurt'ta ücretsiz. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabiliyor; işi biz yaparsak toplam tutardan düşüyoruz. Tutarı yola çıkmadan önce söylüyoruz.",
    },
    {
      q: `${g.name} başlığı altında hangi işleri yapıyorsunuz?`,
      a: `${g.items.map((s) => s.title).join(", ")}. Her birinin kapsamı ve fiyatı belirleyen kalemler kendi sayfasında yazılı.`,
    },
    {
      q: "Malatya'nın hangi ilçelerine geliyorsunuz?",
      a: `Malatya'nın her yerine, kırsal mahalleler dahil gidiyoruz. Battalgazi ve Yeşilyurt'ta genelde aynı gün; uzak ilçelerde o günkü programa göre aynı gün ya da ertesi sabah.`,
    },
    {
      q: "Fiyatı nasıl veriyorsunuz?",
      a: "Yerinde bakıp kalem kalem yazılı teklif hazırlıyoruz. Malzeme ayrı, işçilik ayrı, süre ayrı yazılır. Siz onaylamadan iş başlamıyor, onaysız ek iş yapılmıyor.",
    },
  ];

  const body = `
${pageHead({
  eyebrow: "Hizmet alanı",
  title: `Malatya <em class="hl">${esc(lower)}</em> hizmetleri`,
  lead: g.intro || `${g.name} başlığı altında yürüttüğümüz ${g.items.length} hizmet. Hepsi aynı ekiple, aynı program içinde.`,
  theme: t,
  meta: [
    { icon: t.icon, text: `${g.items.length} hizmet` },
    { icon: "pin", text: "Malatya geneli" },
    { icon: "doc", text: "Fiyat yazılı ve açık" },
  ],
})}

<section class="section">
  <div class="wrap">
    ${secHead(`${g.items.length} başlık`, `${g.name} işlerimiz`, "Her başlıkta kapsam, fiyatı belirleyen kalemler ve sık sorulanlar yazılı.")}
    <div class="grid g-3">${g.items.map(serviceCard).join("")}</div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap with-aside">
    <div class="prose" style="max-width:none">
      <h2>Neden tek ekip?</h2>
      <p>${esc(g.name)} işleri tek başına yapılan işler değil. Bir tanesine dokunduğunuzda genelde diğerine de dokunmak gerekiyor: duvar açılıyorsa elektrik de su da aynı anda düşünülmeli, zemin sökülüyorsa altındaki hat da gözden geçirilmeli.</p>
      <p>Elektrik, su, mekanik ve yapı ekipleri bizde olduğu için bu kalemler birbirini beklemiyor. Aynı duvar iki kez açılmıyor, aynı sıva iki kez yapılmıyor. Bir aksaklık çıktığında da kimin sorumlu olduğu tartışılmıyor; muhatabınız tek.</p>

      <h2>İşin nasıl yürüdüğü</h2>
      <p>Ararsınız, ne yaptırmak istediğinizi ve adresi konuşuruz. Yerinde bakar, mevcut durumu açar ve ölçeriz. Fiyatı kalem kalem yazılı veririz: malzeme ayrı, işçilik ayrı, süre ayrı. Onayınızdan sonra iş programına göre çalışır, testlerini yapıp temiz teslim ederiz.</p>
      <p>Söküm sonrası beklenmedik bir durum çıkarsa iş durur, durumu fotoğraflar ve ek kalemi yazılı bildiririz. Onayınız olmadan devam etmeyiz.</p>

      <h2>Malatya'nın her ilçesinde</h2>
      <p>Battalgazi ve Yeşilyurt'un yanında Akçadağ, Arapgir, Arguvan, Darende, Doğanşehir, Doğanyol, Hekimhan, Kale, Kuluncak, Pütürge ve Yazıhan'a da aynı ekip gidiyor. Kırsal mahalleler dahil, her yere kendi ekibimiz gidiyor.</p>
    </div>
    <aside>
      ${contactAside()}
      ${asideLinks(`${g.name} hizmetleri`, g.items.map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })))}
      ${asideLinks("Diğer alanlar", others.slice(0, 8).map((x) => ({ label: x.name, href: x.href })))}
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead("Diğer alanlar", "Bakabileceğiniz diğer hizmet grupları", "")}
    <div class="grid g-4">${others.slice(0, 8).map(groupCard).join("")}</div>
  </div>
</section>

${faqBlock(faqs, `${g.name} hakkında sık sorulanlar`)}

${ctaBlock({
  title: `${g.name} için teklif alın`,
  text: "Adresi ve işin kapsamını söyleyin; yerinde bakıp kalem kalem yazılı teklif hazırlayalım. Merkez ilçelerde keşif ücretsiz.",
})}
`;

  return page({
    title: `Malatya ${g.name} Hizmetleri | ${site.name}`,
    description: `Malatya'da ${lower} hizmetleri: ${g.items.slice(0, 2).map((s) => trLower(s.title)).join(", ")} ve dahası. Malatya geneli yerinde keşif, yazılı fiyat.`,
    path: g.href,
    ctx,
    keywords: [
      `Malatya ${lower}`,
      `${lower} Malatya`,
      ...g.items.slice(0, 6).map((s) => `Malatya ${trLower(s.title)}`),
      ...localTerms("Malatya").slice(0, 6),
    ],
    crumbs: [
      { label: "Hizmetler", href: "/hizmetler/" },
      { label: g.name, href: g.href },
    ],
    schemas: [
      itemList(g.items.map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })), `${g.name} hizmetleri`),
      faqSchema(faqs),
    ],
    body,
  });
}

/* ====================================================== /hizmetler/<slug>/ */
export function servicePage(s, ctx) {
  const t = themeOfService(s);
  const related = (s.related || []).map(getService).filter(Boolean);
  const blogPosts = postsForService(s.slug, 3);
  // Derinlik blokları (site/data/service-extra.mjs) ana metnin sonuna eklenir.
  const govde = [...s.body, ...extraFor(s.slug)];
  const toc = tocFrom(govde, "Bu sayfada");

  const body = `
${pageHead({
  eyebrow: s.group,
  title: `Malatya <em class="hl">${esc(s.title)}</em>`,
  lead: s.intro,
  theme: t,
  meta: [
    { icon: "pin", text: "Malatya geneli" },
    { icon: "doc", text: "Yerinde keşif, yazılı teklif" },
    { icon: "shield", text: "İşçilik garantili" },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div style="${themeVars(t)}">
      <figure class="lead-media">${coverImg(s.slug, `${s.title}, CB İnşaat Malatya`, { lazy: false })}</figure>
      <p class="eyebrow">Ne zaman gerekir?</p>
      <h2>Bu belirtiler varsa arayın</h2>
      <div class="grid g-2 mt-m">
        ${s.symptoms
          .map(
            (sy) => `<div class="card"><div class="card-body">
            <span style="color:var(--amber-dark);display:block">${icon("alert")}</span>
            <h3 style="font-size:1.2rem">${esc(sy.title)}</h3>
            <p>${esc(sy.text)}</p>
          </div></div>`
          )
          .join("")}
      </div>

      <h2 class="mt-l">Kapsam</h2>
      <p class="text-muted">${esc(s.title)} kapsamında yaptığımız işler:</p>
      ${scopeList(s.scope)}

      ${toc}

      <div class="prose">
        ${renderBlocks(govde)}
      </div>

      <h2 class="mt-l">Fiyatı ne belirler?</h2>
      <p class="text-muted">Kesin rakam keşiften sonra netleşiyor; aşağıdaki kalemler işin tutarını doğrudan değiştiriyor. Keşiften sonra fiyatı yazılı ve kalem kalem çıkarıyoruz.</p>
      ${scopeList(s.priceFactors)}
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks(
        "İlçelere göre",
        districts.slice(0, 8).map((d) => ({
          label: `${d.name} ${trLower(s.title)}`,
          href: s.core ? `/hizmetler/${s.slug}/${d.slug}/` : `/bolgeler/${d.slug}/`,
        }))
      )}
      ${asideLinks(
        "İlgili hizmetler",
        related.map((r) => ({ label: r.title, href: `/hizmetler/${r.slug}/` }))
      )}
      ${
        blogPosts.length
          ? asideLinks("Rehber yazılar", blogPosts.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })))
          : ""
      }
    </aside>
  </div>
</section>

${faqBlock(s.faqs, `${s.title} hakkında sık sorulanlar`)}

<section class="section section--paper2">
  <div class="wrap">
    ${secHead("Hizmet bölgeleri", `${s.title} için Malatya geneli`, `${esc(s.title)} hizmetini Malatya'nın 13 ilçesinde veriyoruz. Bölgenizdeki tipik iş kalemleri ve yapı özellikleri için ilçe sayfasına bakabilirsiniz.`)}
    ${chips(districts.map((d) => ({ label: d.name, href: s.core ? `/hizmetler/${s.slug}/${d.slug}/` : `/bolgeler/${d.slug}/` })))}
  </div>
</section>

${
  related.length
    ? `<section class="section section--white">
  <div class="wrap">
    ${secHead("Birlikte yürüyen işler", "İlgili hizmetler", "Bu işi yaparken sık sık birlikte ele alınan kalemler.")}
    <div class="grid g-${Math.min(related.length, 4)}">${related.map(serviceCard).join("")}</div>
  </div>
</section>`
    : ""
}

${
  blogPosts.length
    ? `<section class="section">
  <div class="wrap">
    ${secHead("Rehber", "Konuyla ilgili yazılar", "Karar vermeden önce okumanızda fayda olan içerikler.")}
    <div class="grid g-3">${blogPosts.map((p, i) => postCard(p, i)).join("")}</div>
  </div>
</section>`
    : ""
}

${ctaBlock({ title: `${s.title} için keşif randevusu`, text: "Adresi ve işin türünü söyleyin, uygun gün ve saati birlikte belirleyelim. Merkez ilçelerde keşif ücretsiz." })}
`;

  return page({
    title: s.metaTitle || `Malatya ${s.title} | ${site.name}`,
    description: s.metaDesc,
    path: `/hizmetler/${s.slug}/`,
    keywords: [...(s.keywords || []), ...localTerms("Malatya").slice(0, 8)],
    ctx,
    crumbs: [
      { label: "Hizmetler", href: "/hizmetler/" },
      { label: s.title, href: `/hizmetler/${s.slug}/` },
    ],
    schemas: [
      serviceSchema({
        name: `${s.title}, Malatya`,
        description: s.metaDesc,
        url: `/hizmetler/${s.slug}/`,
        areaNames: districts.map((d) => `${d.name}, Malatya`),
        offers: s.scope,
      }),
      faqSchema(s.faqs),
    ],
    body,
  });
}

/* ============================================ /hizmetler/<slug>/<ilce>/ */
export function serviceDistrictPage(s, d, ctx) {
  const t = themeOfService(s);
  const locs = (featuredOf(d.slug).length ? featuredOf(d.slug) : localitiesOf(d.slug)).slice(0, 24);
  const otherServices = services.filter((x) => x.core && x.slug !== s.slug);
  const blogPosts = postsForService(s.slug, 3);
  const inD = locIn(d.name);
  const ofD = locOf(d.name);

  const body = `
${pageHead({
  eyebrow: `${d.name} · Malatya`,
  title: `${inD} <em class="hl">${esc(s.title)}</em>`,
  theme: t,
  lead: `${esc(d.name)} ve çevresindeki mahallelerde ${trLower(s.title)} hizmeti veriyoruz. ${d.distanceKm === 0 ? "Merkez ilçe olduğu için aynı gün randevu verebiliyoruz." : `Malatya merkeze yaklaşık ${d.distanceKm} km mesafede; işleri toplu programladığımız için randevuyu birlikte planlıyoruz.`}`,
  meta: [
    { icon: "pin", text: `${d.name}, Malatya` },
    { icon: "layers", text: `${locs.length} mahalle ve yerleşim` },
    { icon: "doc", text: "Yazılı teklif" },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div class="prose" style="max-width:none">
      <h2>${inD} ${trLower(s.title)} hizmeti</h2>
      <p>${esc(d.intro)}</p>
      <p>${esc(s.intro)}</p>
      <p><strong>${esc(d.name)}</strong> özelinde bu hizmette öne çıkan konu şu: ${esc(s.localAngle)}. ${esc(ofD)} yapı stoğu ve coğrafi koşulları uygulamayı doğrudan etkilediği için, keşifte önce mevcut durumu görüp sonra kalem yazıyoruz. İlçede öne çıkan bölgeler: ${esc(d.highlights.join(", "))}.</p>

      <h2>${inD} en sık yaptığımız işler</h2>
      <ul>
        ${s.scope.slice(0, 6).map((x) => `<li>${esc(x)}</li>`).join("")}
      </ul>

      <h2>Bölgeye özel notlar</h2>
      ${d.context.map((c) => `<h3>${esc(c.h)}</h3><p>${esc(c.p)}</p>`).join("")}

      <h2>Ne zaman aramalısınız?</h2>
      <ul>
        ${s.symptoms.map((sy) => `<li><strong>${esc(sy.title)}:</strong> ${esc(sy.text)}</li>`).join("")}
      </ul>

      <h2>Fiyatı belirleyen kalemler</h2>
      <ul>
        ${s.priceFactors.map((x) => `<li>${esc(x)}</li>`).join("")}
      </ul>
      <p>${esc(d.name)} için ${d.distanceKm === 0 ? "keşif ücretsizdir" : "yol mesafesine göre bir keşif bedeli oluşabilir; iş tarafımızca yapıldığında bu bedel toplam tutardan düşülür"}. Rakamı aramadan önce net olarak söylüyoruz.</p>
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks(
        `${d.name} mahalleleri`,
        locs.slice(0, 10).map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` }))
      )}
      ${asideLinks(
        `${d.name} diğer hizmetler`,
        otherServices.map((x) => ({ label: x.title, href: `/hizmetler/${x.slug}/${d.slug}/` }))
      )}
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead(
      "Mahalleler",
      `${ofD} hizmet verdiğimiz mahalleler`,
      `${esc(d.name)} sınırlarındaki mahalle ve yerleşimlerin tamamına gidiyoruz. Mahalle sayfalarında o bölgedeki tipik yapı özelliklerini bulabilirsiniz.`
    )}
    ${chips(locs.map((l) => ({ label: l.name, href: `/bolgeler/${d.slug}/${l.slug}/` })))}
    <div class="btn-row mt-m">
      <a class="btn btn--ghost" href="/bolgeler/${d.slug}/">${esc(d.name)} bölge sayfası ${icon("arrow")}</a>
    </div>
  </div>
</section>

${faqBlock(
  [
    {
      q: `${inD} aynı gün gelebiliyor musunuz?`,
      a:
        d.distanceKm === 0
          ? `Evet. ${esc(d.name)} merkez ilçe olduğu için acil arızalarda aynı gün müdahale ediyoruz. Planlı işlerde ise size uygun gün ve saati birlikte belirliyoruz.`
          : `${esc(d.name)} Malatya merkeze yaklaşık ${d.distanceKm} km mesafede. Acil durumlarda gün içi program durumuna göre aynı gün, aksi hâlde ertesi gün randevu veriyoruz. Aynı bölgedeki işleri toplu planladığımız için komşularınızla birlikte aradığınızda randevu daha hızlı oluyor.`,
    },
    {
      q: `${inD} keşif ücretli mi?`,
      a:
        d.distanceKm === 0
          ? "Merkez ilçelerde ilk keşif ücretsizdir. Keşifte iş kalemleri yazılı olarak çıkarılır ve teklif hazırlanır."
          : `${esc(d.name)} için yol mesafesine göre bir keşif bedeli oluşabilir. Bu tutarı aramadan önce söylüyoruz ve iş tarafımızca yapıldığında toplam tutardan düşüyoruz.`,
    },
    ...s.faqs.slice(0, 3),
  ],
  `${d.name} ${trLower(s.title)} hakkında sık sorulanlar`
)}

${ctaBlock({
  title: `${inD} ${trLower(s.title)} için arayın`,
  text: `Adresi ve işin türünü söyleyin; ${esc(d.name)} için uygun gün ve saati birlikte belirleyelim.`,
})}
`;

  return page({
    title: `${d.name} ${s.title} | Malatya`,
    description: `${d.name} Malatya'da ${trLower(s.title)} hizmeti. Yerinde keşif, kalem kalem yazılı teklif ve işçilik garantisi. ${site.phoneDisplay}`,
    path: `/hizmetler/${s.slug}/${d.slug}/`,
    keywords: [`${d.name} ${s.title}`, `Malatya ${d.name} ${s.title}`, ...localTerms(d.name).slice(0, 10), ...(s.keywords || []).slice(0, 4)],
    ctx,
    crumbs: [
      { label: "Hizmetler", href: "/hizmetler/" },
      { label: s.title, href: `/hizmetler/${s.slug}/` },
      { label: d.name, href: `/hizmetler/${s.slug}/${d.slug}/` },
    ],
    schemas: [
      serviceSchema({
        name: `${s.title}, ${d.name}, Malatya`,
        description: `${d.name} Malatya'da ${trLower(s.title)} hizmeti.`,
        url: `/hizmetler/${s.slug}/${d.slug}/`,
        areaNames: [`${d.name}, Malatya`, ...locs.slice(0, 12).map((l) => `${l.name}, ${d.name}`)],
        offers: s.scope,
      }),
      faqSchema(s.faqs.slice(0, 3)),
    ],
    body,
  });
}

// Google Search Console için dizin (indeksleme) takip listesi üretir.
// Çalıştırma: node site/gsc-list.mjs
// Çıktı: gsc/ klasörü — dizin-listesi.csv + dizin-plani.md
//
// Neden: GSC'de "Dizine eklenmesini iste" günlük kotayla sınırlı (günde ~10-12 URL).
// 295 sayfanın tamamını elle göndermenin anlamı yok; site haritası bu işi yapıyor.
// Bu liste, elle istenmesi anlamlı olan sayfaları önceliklendirir ve
// kalanının takibi için bir tablo bırakır.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "./data/site.mjs";
import { services, coreServices, groupsOrdered } from "./data/services.mjs";
import { districts } from "./data/districts.mjs";
import { localitiesOf } from "./data/localities.mjs";
import { localTags } from "./data/local-tags.mjs";
import { posts, categoryList } from "./data/posts.mjs";
import { intents } from "./data/intents.mjs";
import { pricedSlugs } from "./data/pricing.mjs";
import { publishedProjects } from "./data/projects.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "gsc");
const D = site.domain;

/* ---------------------------------------------------------- URL toplama */
// tier 1: elle dizin isteği gönderilecek çekirdek sayfalar
// tier 2: site haritasıyla gider, 2. haftada kontrol edilir
// tier 3: sadece site haritası, kendiliğinden taranır

const rows = [];
const add = (tier, tur, url, baslik, not = "") =>
  rows.push({ tier, tur, url, baslik, not });

/* --- Tier 1: çekirdek (elle istenecek) */
add(1, "Ana sayfa", `${D}/`, "CB İnşaat | Malatya Elektrik, Sıhhi Tesisat ve İnşaat", "En kritik sayfa");
add(1, "Hub", `${D}/hizmetler/`, "Hizmetler", `${services.length} hizmete iç link dağıtır`);
add(1, "Hub", `${D}/bolgeler/`, "Hizmet bölgeleri", `${districts.length} ilçe + mahallelere link dağıtır`);
add(1, "Hub", `${D}/blog/`, "Blog", `${posts.length} yazıya link dağıtır`);
add(1, "Hub", `${D}/fiyatlar/`, "Fiyatlar", "Fiyat aramalarının giriş kapısı");
add(1, "Hub", `${D}/projeler/`, "Tamamlanan projeler", "Referans ve güven sayfası");
add(1, "Dönüşüm", `${D}/teklif/`, "Ücretsiz keşif ve teklif", "Form sayfası");
add(1, "Dönüşüm", `${D}/iletisim/`, "İletişim", "NAP bilgisi, yerel SEO için önemli");
add(1, "Kurumsal", `${D}/hakkimizda/`, "Hakkımızda", "E-E-A-T sinyali");
add(1, "Kurumsal", `${D}/sss/`, "Sık sorulan sorular", "FAQPage şeması");

// Hizmet alanı hub sayfaları — grup bazlı aramaların giriş kapısı
for (const g of groupsOrdered) {
  add(1, "Hizmet alanı", `${D}${g.href}`, `${g.name} hizmetleri`, `${g.items.length} hizmete link dağıtır`);
}

// Vitrindeki hizmetler — arama hacmi en yüksek başlıklar
const oneCikan = services.filter((s) => s.featured);
for (const s of oneCikan) {
  add(1, "Ana hizmet", `${D}/hizmetler/${s.slug}/`, s.title, "Öne çıkan hizmet");
}

// Niyet hub sayfaları — "acil elektrikçi" gibi yüksek dönüşümlü aramalar
for (const i of intents) {
  add(1, "Niyet", `${D}/${i.slug}/`, i.title, i.kind === "acil" ? "Acil servis" : "Yakınlık aramaları");
}

// İki merkez ilçe
for (const d of districts.filter((x) => x.distanceKm === 0)) {
  add(1, "Merkez ilçe", `${D}/bolgeler/${d.slug}/`, `${d.name} bölge sayfası`, "Nüfusun çoğu burada");
}

/* --- Tier 2: hizmet, ilçe, fiyat, kategori ve blog sayfaları */
for (const s of services.filter((x) => !x.featured)) {
  add(2, "Hizmet", `${D}/hizmetler/${s.slug}/`, s.title, s.group);
}
for (const s of pricedSlugs) {
  const svc = services.find((x) => x.slug === s);
  if (svc) add(2, "Fiyat", `${D}/fiyatlar/${svc.slug}/`, `${svc.title} fiyatları`, "Fiyat araması");
}
for (const d of districts.filter((x) => x.distanceKm > 0)) {
  add(2, "İlçe", `${D}/bolgeler/${d.slug}/`, `${d.name} bölge sayfası`, `Merkeze ~${d.distanceKm} km`);
}
for (const c of categoryList) {
  add(2, "Blog kategorisi", `${D}/blog/kategori/${c.slug}/`, `${c.name} yazıları`, `${c.count} yazı`);
}
for (const p of posts) {
  add(2, "Blog", `${D}/blog/${p.slug}/`, p.title, p.category);
}
for (const p of publishedProjects) {
  add(2, "Proje", `${D}/projeler/${p.slug}/`, p.title, p.type);
}

/* --- Tier 3: uzun kuyruk */
for (const s of coreServices) {
  for (const d of districts) {
    add(3, "Hizmet × ilçe", `${D}/hizmetler/${s.slug}/${d.slug}/`, `${d.name} ${s.title}`, "Uzun kuyruk");
  }
}
for (const d of districts) {
  for (const l of localitiesOf(d.slug)) {
    add(3, "Mahalle", `${D}/bolgeler/${d.slug}/${l.slug}/`, `${l.name} (${d.name})`, l.featured ? "öne çıkan mahalle" : l.type);
    for (const t of localTags) {
      add(3, "Mahalle × etiket", `${D}/bolgeler/${d.slug}/${l.slug}/${t.slug}/`, `${l.name} ${t.label}`, "Uzun kuyruk");
    }
  }
}
for (const i of intents) {
  for (const d of districts) {
    add(3, "Niyet × ilçe", `${D}/${i.slug}/${d.slug}/`, `${d.name} ${i.title}`, "Uzun kuyruk");
  }
}
add(3, "Kurumsal", `${D}/gizlilik/`, "Gizlilik ve KVKK", "Dizine girmesi öncelikli değil");

/* --------------------------------------- site haritasıyla karşılaştırma */
// Liste ile sitemap.xml birbirinden kaymasın diye her çalıştırmada doğrulanır.
try {
  const { readFile } = await import("node:fs/promises");
  const xml = await readFile(resolve(__dirname, "..", "dist-site", "sitemap.xml"), "utf8");
  const inSitemap = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  const inList = new Set(rows.map((r) => r.url));
  const eksik = [...inSitemap].filter((u) => !inList.has(u));
  const fazla = [...inList].filter((u) => !inSitemap.has(u));
  if (eksik.length || fazla.length) {
    console.warn(`\n  ! Site haritasıyla uyuşmuyor:`);
    eksik.slice(0, 10).forEach((u) => console.warn(`    listede yok  : ${u}`));
    fazla.slice(0, 10).forEach((u) => console.warn(`    haritada yok : ${u}`));
  } else {
    console.log(`\n  ✓ Site haritasıyla birebir uyuşuyor (${inSitemap.size} URL)`);
  }
} catch {
  console.warn("\n  ! sitemap.xml okunamadı — önce: node site/build.mjs");
}

/* ------------------------------------------------------------------ CSV */
await mkdir(OUT, { recursive: true });

const csvEsc = (v) => `"${String(v).replace(/"/g, '""')}"`;
// Markdown tablosunda dikey çizgi sütunu böler
const mdEsc = (v) => String(v).replace(/\|/g, "\|");
const csv = [
  ["Öncelik", "Tür", "URL", "Başlık", "Not", "Gönderim tarihi", "Durum"].map(csvEsc).join(";"),
  ...rows.map((r) => [r.tier, r.tur, r.url, r.baslik, r.not, "", ""].map(csvEsc).join(";")),
].join("\r\n");

// Excel'in Türkçe karakterleri doğru açması için BOM
await writeFile(join(OUT, "dizin-listesi.csv"), "﻿" + csv, "utf8");

/* ------------------------------------------------------------------- MD */
const t1 = rows.filter((r) => r.tier === 1);
const t2 = rows.filter((r) => r.tier === 2);
const t3 = rows.filter((r) => r.tier === 3);

// Tier 1'i günde 9 URL olacak şekilde günlere böl (GSC kotası günde ~10-12)
const PER_DAY = 9;
const batches = [];
for (let i = 0; i < t1.length; i += PER_DAY) batches.push(t1.slice(i, i + PER_DAY));

const md = `# GSC dizin planı — ${site.domain.replace("https://", "")}

Toplam **${rows.length} URL**. Site haritası (\`/sitemap.xml\`) zaten gönderildi ve
tamamını kapsıyor; aşağıdaki plan sadece hangi sayfaların elle hızlandırılacağını
ve neyin ne zaman kontrol edileceğini düzenler.

| Öncelik | Sayfa | Yöntem |
|---|---|---|
| 1 | ${t1.length} | Elle "Dizine eklenmesini iste" |
| 2 | ${t2.length} | Site haritası + 2. hafta kontrol |
| 3 | ${t3.length} | Sadece site haritası |

> GSC'de elle dizin isteği günlük kotayla sınırlı (günde yaklaşık 10–12 URL).
> Kotayı zorlamanın faydası yok; sıralamayı hızlandırmıyor, sadece ilk taramayı
> öne çekiyor. Uzun kuyruk sayfalarını elle göndermeyin.

---

## Öncelik 1 — elle gönderilecek (${t1.length} URL)

GSC → üstteki arama kutusuna URL'yi yapıştır → sonucu bekle →
**Dizine eklenmesini iste**. Günde bir grup, ${batches.length} günde biter.

${batches
  .map(
    (b, i) => `### ${i + 1}. gün

| # | URL | Sayfa |
|---|---|---|
${b.map((r, j) => `| ${j + 1} | \`${r.url}\` | ${r.baslik} |`).join("\n")}
`
  )
  .join("\n")}
---

## Öncelik 2 — site haritasına bırakılacak (${t2.length} URL)

Elle göndermeyin. İki hafta sonra GSC → **Sayfa sayısı** bölümünden kaçının
dizine girdiğine bakın. Girmeyenler için "Neden dizine eklenmedi?" tablosundaki
sebebe göre karar verin.

<details>
<summary>Listeyi aç (${t2.length} URL)</summary>

${t2.map((r) => `- \`${r.url}\` — ${r.baslik} _(${r.not})_`).join("\n")}

</details>

---

## Öncelik 3 — uzun kuyruk (${t3.length} URL)

Hizmet × ilçe ve mahalle sayfaları. Bunların tamamının dizine girmesi
normalde **4–8 hafta** sürer ve bir kısmı hiç girmeyebilir; bu beklenen bir
durumdur. Elle istek göndermeyin.

Tam liste \`dizin-listesi.csv\` dosyasında (Öncelik sütunu = 3).

---

## Takip

\`dizin-listesi.csv\` dosyasını Excel veya Google Sheets'te açın.
**Gönderim tarihi** ve **Durum** sütunları boş bırakıldı; elle gönderdikçe
doldurun. Durum için önerilen değerler:

- \`beklemede\` — henüz bir şey yapılmadı
- \`istendi\` — elle dizin isteği gönderildi
- \`dizinde\` — GSC "URL Google'da mevcut" diyor
- \`hariç\` — GSC dizine eklemedi (sebebi nota yazın)

## Kontrol takvimi

| Ne zaman | Ne yapılacak |
|---|---|
| 1. hafta | Öncelik 1 listesini elle gönder |
| 2. hafta | Site Haritaları → durum "Başarılı" mı, kaç URL okundu |
| 3. hafta | Sayfa sayısı → dizine giren/girmeyen dağılımı |
| 4. hafta | Performans → ilk gösterim ve tıklama verileri |
| 6.–8. hafta | Öncelik 3'ten dizine girmeyenleri değerlendir |

## Sık çıkan "dizine eklenmedi" sebepleri

| GSC mesajı | Anlamı | Yapılacak |
|---|---|---|
| Taranmadı — şu anda dizine eklenmedi | Google gördü, sıraya aldı | Bekleyin, normal |
| Bulundu — şu anda dizine eklenmedi | Tarama bütçesi sınırı | İç link ekleyin, bekleyin |
| Alternatif sayfa, uygun kurallı etiket | Canonical başka sayfayı gösteriyor | Kontrol edin; kasıtlıysa sorun yok |
| Yinelenen, kullanıcı kurallı etiketi seçmedi | Google içeriği benzer buldu | O sayfanın özgün içeriğini artırın |
| Yumuşak 404 | İçerik yetersiz görülüyor | İçeriği genişletin |

Son iki madde özellikle mahalle sayfaları için çıkabilir. Çıkarsa
\`site/data/localities.mjs\` içindeki \`note\` alanını o mahalleye özgü
bilgiyle genişletmek en doğrudan çözüm.
`;

await writeFile(join(OUT, "dizin-plani.md"), md, "utf8");

/* -------------------------------------------------------------- düz liste */
await writeFile(join(OUT, "tum-urller.txt"), rows.map((r) => r.url).join("\n") + "\n", "utf8");

/* ------------------------------------------- günlük plan: 10 URL / gün */
// Tüm URL'ler önceliğe göre sıralanıp 10'arlı günlere bölünür.
// GSC'de "Dizine eklenmesini iste" günlük kotayla sınırlı; günde 10 güvenli tempo.
const GUNLUK = 10;
// Günlük plana sadece elle göndermenin anlamlı olduğu sayfalar girer (öncelik 1-2).
// Öncelik 3 uzun kuyruk: site haritasıyla kendiliğinden taranır, elle gönderilmez.
const sirali = rows.filter((r) => r.tier <= 2).sort((a, b) => a.tier - b.tier);
const gunler = [];
for (let i = 0; i < sirali.length; i += GUNLUK) gunler.push(sirali.slice(i, i + GUNLUK));

const bugun = new Date();
const gunTarih = (n) => new Date(bugun.getFullYear(), bugun.getMonth(), bugun.getDate() + n);
const trTarih = (n) => gunTarih(n).toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric" });
const trGun = (n) => gunTarih(n).toLocaleDateString("tr-TR", { weekday: "long" });

const gunCsv = [
  ["Gün", "Tarih", "Haftanın günü", "Sıra", "Öncelik", "Tür", "URL", "Başlık", "Gönderildi mi"].map(csvEsc).join(";"),
  ...gunler.flatMap((grup, gi) =>
    grup.map((r, ri) =>
      [gi + 1, trTarih(gi), trGun(gi), ri + 1, r.tier, r.tur, r.url, r.baslik, ""].map(csvEsc).join(";")
    )
  ),
].join("\r\n");
await writeFile(join(OUT, "gunluk-plan.csv"), "﻿" + gunCsv, "utf8");

const gunMd = [
  `# Günlük GSC gönderim planı — ${site.domain.replace("https://", "")}`,
  "",
  `Elle gönderilecek **${sirali.length} URL** (öncelik 1-2), günde **${GUNLUK} adet**, **${gunler.length} gün**.`,
  `Sitedeki toplam ${rows.length} URL'in kalanı (öncelik 3, uzun kuyruk) site haritasıyla taranır; elle göndermeyin.`,
  "Liste önceliğe göre sıralı: en değerli sayfalar ilk günlerde.",
  "",
  "## Nasıl kullanılır",
  "",
  "1. Search Console'u açın, sol üstten `cbinsaat.com` özelliğini seçin.",
  "2. Üstteki **URL İnceleme** kutusuna o günün ilk URL'sini yapıştırın, Enter'a basın.",
  '3. "URL Google\'da değil" diyorsa **Dizine eklenmesini iste**\'ye basın.',
  '4. "URL Google\'da mevcut" diyorsa hiçbir şey yapmayın, sıradakine geçin.',
  `5. O günün ${GUNLUK} URL'si bitince durun. Kotayı zorlamanın faydası yok.`,
  "",
  '> Kota dolduğunda "Kota aşıldı" uyarısı gelir; ertesi gün kaldığınız yerden devam edin.',
  "> Site haritası zaten tüm URL'leri kapsıyor. Bu liste sadece ilk taramayı öne çekmek için.",
  "",
  "---",
  "",
  ...gunler.flatMap((grup, gi) => [
    `### Gün ${gi + 1} — ${trTarih(gi)} (${trGun(gi)})`,
    "",
    ...grup.map((r) => `- [ ] ${r.url}`),
    "",
  ]),
].join("\n");
await writeFile(join(OUT, "gunluk-plan.md"), gunMd, "utf8");

const gunTxt = gunler
  .map((grup, gi) => `--- GUN ${gi + 1} (${trTarih(gi)}) ---\n${grup.map((r) => r.url).join("\n")}`)
  .join("\n\n");
await writeFile(join(OUT, "gunluk-plan.txt"), gunTxt + "\n", "utf8");

console.log(`
GSC dizin listesi hazır.

  Toplam URL   : ${rows.length}
  Öncelik 1    : ${t1.length}  (elle gönderilecek, ${batches.length} güne bölündü)
  Öncelik 2    : ${t2.length}  (site haritası + kontrol)
  Öncelik 3    : ${t3.length}  (sadece site haritası)

  Klasör: ${OUT}
    dizin-plani.md      → adım adım plan ve günlük gruplar
    dizin-listesi.csv   → Excel'de açılır takip tablosu
    tum-urller.txt      → düz URL listesi
    gunluk-plan.md      → günde ${GUNLUK} URL, ${gunler.length} günlük işaretlemeli liste
    gunluk-plan.csv     → Excel takip tablosu (tarih + durum sütunu)
    gunluk-plan.txt     → kopyala-yapıştır için düz liste
`);

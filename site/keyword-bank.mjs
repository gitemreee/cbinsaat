// Anahtar kelime bankası üretici.
// Çalıştırma: node site/keyword-bank.mjs
// Çıktı: gsc/anahtar-kelime-bankasi.csv
//
// ÖNEMLİ: Bu dosyadaki her kelime için SAYFA ÜRETİLMEZ.
// Kelimeler mevcut sayfalara eşlenir. Her mahalle için ayrı sayfa açmak,
// Google'ın doorway (kapı sayfası) tanımına girer ve tüm siteyi riske atar.
// Banka, hangi kelimenin hangi sayfada geçmesi gerektiğini gösteren bir
// planlama tablosudur; içerik yazarken ve başlık kurarken kullanılır.

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "./data/site.mjs";
import { services, coreServices } from "./data/services.mjs";
import { districts } from "./data/districts.mjs";
import { localities, localitiesOf } from "./data/localities.mjs";
import { posts } from "./data/posts.mjs";
import { intents } from "./data/intents.mjs";
import { trLower } from "./lib/html.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", "gsc");
const D = site.domain;

const rows = [];
const seen = new Set();

/**
 * @param kelime  arama terimi
 * @param niyet   bilgi | ticari | islem | yerel   (arama amacı)
 * @param oncelik 1 = ana hedef, 2 = destek, 3 = uzun kuyruk
 * @param sayfa   bu kelimenin hedeflendiği URL
 * @param nerede  kelimenin sayfada nerede geçmesi gerektiği
 */
const add = (kelime, niyet, oncelik, sayfa, nerede, grup) => {
  const k = kelime.toLocaleLowerCase("tr-TR").replace(/\s+/g, " ").trim();
  if (seen.has(k)) return;
  seen.add(k);
  rows.push({ kelime: k, niyet, oncelik, sayfa, nerede, grup });
};

/* ------------------------------------------------------- 1. Marka ve genel */
const MARKA = [
  ["malatya anahtar teslim tadilat", "ticari", 1, "/", "H1 ve title"],
  ["malatya tadilat firması", "ticari", 1, "/", "H1 çevresi, hakkımızda"],
  ["malatya tadilat", "ticari", 1, "/", "title ve giriş paragrafı"],
  ["malatya anahtar teslim inşaat", "ticari", 1, "/hizmetler/anahtar-teslim-insaat/", "title"],
  ["malatya iç dekorasyon firması", "ticari", 2, "/hizmetler/anahtar-teslim-tadilat/", "gövde metni"],
  ["malatya tadilat ve dekorasyon", "ticari", 2, "/hizmetler/anahtar-teslim-tadilat/", "gövde metni"],
  ["malatya güvenilir tadilat firması", "ticari", 2, "/hakkimizda/", "gövde metni"],
  ["malatya tadilat ustası", "ticari", 2, "/hizmetler/anahtar-teslim-tadilat/", "SSS"],
  ["cb inşaat malatya", "marka", 1, "/", "title ve footer"],
];
MARKA.forEach(([k, n, o, s, w]) => add(k, n, o, s, w, "Marka"));

/* --------------------------------------------- 2. Hizmet × şehir (ana grup) */
for (const s of services) {
  const t = trLower(s.title);
  add(`malatya ${t}`, "ticari", 1, `/hizmetler/${s.slug}/`, "title ve H1", s.group);
  add(`${t} malatya`, "ticari", 2, `/hizmetler/${s.slug}/`, "gövde metni", s.group);
  add(`malatya ${t} fiyatları`, "ticari", 2, `/hizmetler/${s.slug}/`, "fiyatı ne belirler bölümü", s.group);
  add(`malatya ${t} firması`, "ticari", 2, `/hizmetler/${s.slug}/`, "gövde metni", s.group);
  for (const kw of s.keywords || []) add(kw, "ticari", 2, `/hizmetler/${s.slug}/`, "gövde ve SSS", s.group);
}

/* ------------------------------------------------- 3. Hizmet × ilçe (yerel) */
for (const s of coreServices) {
  const t = trLower(s.title);
  for (const d of districts) {
    add(`${trLower(d.name)} ${t}`, "yerel", 2, `/hizmetler/${s.slug}/${d.slug}/`, "title ve H1", s.group);
    add(`malatya ${trLower(d.name)} ${t}`, "yerel", 3, `/hizmetler/${s.slug}/${d.slug}/`, "giriş paragrafı", s.group);
  }
}

/* ------------------------------------- 4. Mahalle (SAYFA DEĞİL, eşleme) */
// Mahalle kelimeleri, o mahallenin kendi sayfasına veya bağlı ilçe sayfasına
// eşlenir. Her mahalle için ayrı hizmet sayfası AÇILMAZ.
const MAHALLE_HIZMET = [
  "tadilat", "ev tadilatı", "daire tadilatı", "banyo tadilatı", "mutfak tadilatı",
  "elektrikçi", "su tesisatçısı", "tesisatçı", "boya badana", "usta",
];
for (const d of districts) {
  for (const l of localitiesOf(d.slug)) {
    const ln = trLower(l.name);
    for (const h of MAHALLE_HIZMET) {
      add(`${ln} ${h}`, "yerel", 3, `/bolgeler/${d.slug}/${l.slug}/`, "mahalle sayfası gövde metni", "Mahalle");
    }
    add(`${ln} mahallesi tadilat`, "yerel", 3, `/bolgeler/${d.slug}/${l.slug}/`, "mahalle sayfası", "Mahalle");
  }
}

/* ----------------------------------------------------- 5. Niyet kelimeleri */
for (const i of intents) {
  const t = trLower(i.title);
  add(`malatya ${t}`, "islem", 1, `/${i.slug}/`, "title ve H1", "Niyet");
  add(t, "islem", 2, `/${i.slug}/`, "H1", "Niyet");
  for (const kw of i.keywords || []) add(kw, "islem", 2, `/${i.slug}/`, "gövde metni", "Niyet");
  for (const d of districts) {
    add(`${trLower(d.name)} ${t}`, "yerel", 3, `/${i.slug}/${d.slug}/`, "title ve H1", "Niyet");
  }
}

/* ------------------------------------------- 6. Yapı tipi ve oda sayısı */
const YAPI = ["2+1 daire", "3+1 daire", "4+1 daire", "1+1 daire", "dubleks", "villa", "müstakil ev", "bağ evi", "yazlık"];
for (const y of YAPI) {
  add(`malatya ${y} tadilatı`, "ticari", 2, "/hizmetler/daire-tadilati/", "gövde metni ve tablo", "Yapı tipi");
  add(`${y} tadilatı fiyatları`, "ticari", 3, "/hizmetler/daire-tadilati/", "fiyatı ne belirler bölümü", "Yapı tipi");
  add(`${y} yenileme malatya`, "ticari", 3, "/hizmetler/komple-ev-tadilati/", "gövde metni", "Yapı tipi");
}

/* --------------------------------------------- 7. Durum ve ihtiyaç bazlı */
const DURUM = [
  ["eski ev tadilatı", "/hizmetler/eski-ev-tadilati/"],
  ["yeni alınan daire tadilatı", "/hizmetler/anahtar-teslim-daire/"],
  ["deprem sonrası ev tadilatı", "/hizmetler/deprem-sonrasi-tadilat/"],
  ["kiralık ev yenileme", "/hizmetler/kiralik-ev-yenileme/"],
  ["satış öncesi ev yenileme", "/hizmetler/satis-oncesi-ev-yenileme/"],
  ["apartman ortak alan tadilatı", "/hizmetler/apartman-ortak-alan-tadilati/"],
  ["bina tesisat yenileme", "/hizmetler/bina-tesisat-yenileme/"],
  ["komple ev yenileme", "/hizmetler/komple-ev-tadilati/"],
  ["ofis tadilatı", "/hizmetler/dukkan-ofis-tadilati/"],
  ["dükkan tadilatı", "/hizmetler/anahtar-teslim-is-yeri/"],
  ["kafe tadilatı", "/hizmetler/kafe-restoran-tadilati/"],
  ["restoran tadilatı", "/hizmetler/kafe-restoran-tadilati/"],
  ["villa tadilatı", "/hizmetler/villa-dubleks-tadilati/"],
  ["kayısı bahçesi sulama", "/hizmetler/kayisi-bahcesi-sulama/"],
  ["sera sulama sistemi", "/hizmetler/sera-elektrik-sulama/"],
  ["uzaktan pompa çalıştırma", "/hizmetler/uzaktan-kumanda-otomasyon/"],
];
for (const [k, url] of DURUM) {
  add(`malatya ${k}`, "ticari", 1, url, "title ve H1", "Durum");
  add(k, "ticari", 2, url, "H1 ve gövde", "Durum");
  add(`${k} fiyatları`, "ticari", 2, url, "fiyatı ne belirler bölümü", "Durum");
  add(`${k} ne kadar tutar`, "bilgi", 3, url, "SSS", "Durum");
  for (const d of districts.filter((x) => x.distanceKm === 0)) {
    add(`${trLower(d.name)} ${k}`, "yerel", 3, url, "hizmet × ilçe sayfası", "Durum");
  }
}

/* ------------------------------------------ 8. Satın almaya yakın (işlem) */
const ISLEM = [
  ["malatya tadilat firması telefon", "/iletisim/"],
  ["malatya tadilat firması whatsapp", "/iletisim/"],
  ["malatya anahtar teslim tadilat teklifi", "/teklif/"],
  ["malatya ücretsiz tadilat keşfi", "/teklif/"],
  ["malatya tadilat metrekare fiyatı", "/hizmetler/anahtar-teslim-tadilat/"],
  ["malatya malzemeli tadilat", "/hizmetler/anahtar-teslim-tadilat/"],
  ["malatya işçilik dahil tadilat", "/hizmetler/anahtar-teslim-tadilat/"],
  ["malatya sözleşmeli tadilat firması", "/hakkimizda/"],
  ["malatya yakın tadilat firması", "/bolgeler/"],
  ["malatya tadilat ustası tavsiye", "/hakkimizda/"],
];
ISLEM.forEach(([k, url]) => add(k, "islem", 1, url, "title, CTA ve SSS", "İşlem"));

/* ------------------------------------------------------ 9. Blog soruları */
for (const p of posts) {
  add(trLower(p.title), "bilgi", 2, `/blog/${p.slug}/`, "title ve H1", "Blog");
  for (const kw of p.keywords || []) add(kw, "bilgi", 3, `/blog/${p.slug}/`, "gövde ve H2", "Blog");
  for (const f of p.faqs || []) add(trLower(f.q), "bilgi", 3, `/blog/${p.slug}/`, "SSS bölümü", "Blog");
}
for (const s of services) {
  for (const f of s.faqs || []) add(trLower(f.q), "bilgi", 3, `/hizmetler/${s.slug}/`, "SSS bölümü", s.group);
}

/* --------------------------------------------------------------- çıktı */
await mkdir(OUT, { recursive: true });

const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
const header = ["Kelime", "Arama amacı", "Öncelik", "Hedef sayfa", "Nerede geçmeli", "Grup"];
const csv = [
  header.map(esc).join(";"),
  ...rows
    .sort((a, b) => a.oncelik - b.oncelik || a.grup.localeCompare(b.grup, "tr") || a.kelime.localeCompare(b.kelime, "tr"))
    .map((r) => [r.kelime, r.niyet, r.oncelik, D + r.sayfa, r.nerede, r.grup].map(esc).join(";")),
].join("\r\n");

await writeFile(join(OUT, "anahtar-kelime-bankasi.csv"), "﻿" + csv, "utf8");

const byPriority = [1, 2, 3].map((p) => rows.filter((r) => r.oncelik === p).length);
const byIntent = {};
rows.forEach((r) => (byIntent[r.niyet] = (byIntent[r.niyet] || 0) + 1));
const pages = new Set(rows.map((r) => r.sayfa));

await writeFile(
  join(OUT, "kelime-bankasi-notu.md"),
  `# Anahtar kelime bankası — nasıl kullanılır

**${rows.length} kelime**, ${pages.size} sayfaya eşlendi.

| Öncelik | Kelime | Anlamı |
|---|---|---|
| 1 | ${byPriority[0]} | Ana hedef. Title ve H1'de geçmeli. |
| 2 | ${byPriority[1]} | Destek. Gövde metninde ve alt başlıklarda geçmeli. |
| 3 | ${byPriority[2]} | Uzun kuyruk. SSS ve doğal metin içinde geçerse yeterli. |

| Arama amacı | Adet | Ne beklenir |
|---|---|---|
${Object.entries(byIntent).map(([k, v]) => `| ${k} | ${v} | ${
  { ticari: "Hizmet arıyor, teklif almaya yakın", yerel: "Konum belirtiyor, yakındaki firmayı arıyor", islem: "Hemen iletişime geçecek", bilgi: "Öğrenmek istiyor, blog hedefi", marka: "Firmayı arıyor" }[k] || ""
} |`).join("\n")}

## Kritik uyarı

Bu tablodaki **her kelime için ayrı sayfa açılmaz.** Özellikle mahalle
kelimeleri (${rows.filter((r) => r.grup === "Mahalle").length} adet) için ayrı hizmet sayfası üretmek,
Google'ın "kapı sayfası" (doorway) tanımına girer. Aynı içeriğin sadece
mahalle adı değiştirilerek çoğaltılması, siteyi bütün olarak riske atar.

Doğru kullanım: kelime, **Hedef sayfa** sütunundaki mevcut sayfanın
**Nerede geçmeli** sütununda belirtilen bölümünde, doğal bir cümle içinde
geçer. Kelime yığmak değil, o kelimeyi arayan kişinin sorusunu o sayfada
gerçekten cevaplamak amaç.

## Sayfa üretilen ve üretilmeyen alanlar

| Alan | Sayfa üretiliyor mu? |
|---|---|
| Hizmet | Evet — ${services.length} sayfa |
| Hizmet × ilçe | Evet — ${coreServices.length} ana hizmet × ${districts.length} ilçe |
| Niyet (acil / en yakın) | Evet — ${intents.length} × ${districts.length + 1} |
| İlçe | Evet — ${districts.length} sayfa |
| Mahalle | Evet — ${localities.length} sayfa (hizmet başına DEĞİL, mahalle başına 1) |
| Hizmet × mahalle | **Hayır** — doorway riski |
| Yapı tipi, durum, fiyat varyasyonları | **Hayır** — mevcut sayfalara eşlendi |

## Sıradaki iş

1. Öncelik 1 kelimelerin hedef sayfalarında title ve H1 kontrolü
2. Öncelik 2 kelimelerin gövde metninde doğal geçip geçmediği kontrolü
3. GSC'de 3 ay sonra gerçek arama terimlerine bakıp bu bankayı güncelleme

GSC verisi geldikten sonra bu tablo tahminden çıkıp veriye dayanır. Asıl
değerli hâli o zaman ortaya çıkacak.
`,
  "utf8"
);

console.log(`
Anahtar kelime bankası hazır.

  Kelime      : ${rows.length}
  Hedef sayfa : ${pages.size}
  Öncelik 1/2/3: ${byPriority.join(" / ")}

  ${join(OUT, "anahtar-kelime-bankasi.csv")}
  ${join(OUT, "kelime-bankasi-notu.md")}
`);

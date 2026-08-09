// Resmî 719 mahalle listesinden sitede eksik olanları veri dosyası olarak üretir.
// Kaynak: outputs/seo-yerel/malatya-yerlesim-listeleri/01-malatya-guncel-ilce-mahalleleri.csv
import { readFile, writeFile } from "node:fs/promises";
// Sadece elle yazılmış (featured) kayıtlarla karşılaştırılır. `localities` kullanılırsa
// bu dosyanın kendi çıktısı da "zaten var" sayılır ve üretim boş kalır.
import { featuredLocalities } from "../site/data/localities.mjs";
import { districts } from "../site/data/districts.mjs";

const CSV = "outputs/seo-yerel/malatya-yerlesim-listeleri/01-malatya-guncel-ilce-mahalleleri.csv";

const slugify = (s) =>
  s
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
const norm = (s) => slugify(s).replace(/-/g, "");

const ilceSlug = Object.fromEntries(districts.map((d) => [norm(d.name), d.slug]));
const raw = (await readFile(CSV, "utf8")).replace(/^﻿/, "");
const rows = raw
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((l) => {
    const c = l.split(";").map((x) => x.replace(/^"|"$/g, ""));
    return { ilce: ilceSlug[norm(c[0])], mahalle: c[1] };
  });

// Kaynak listede kalan idari kısaltmaları temizle: sayfa başlığında görünüyor.
const temizAd = (s) =>
  s
    .replace(/\s*\(Vekaleten\)\s*$/i, "")
    .replace(/\s+Nah\.?$/i, "")
    .replace(/\s+Mah\.?$/i, "")
    .replace(/\s+Mahallesi$/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
for (const r of rows) if (r.mahalle) r.mahalle = temizAd(r.mahalle);

const varSite = new Set(featuredLocalities.map((l) => `${l.district}|${norm(l.name)}`));
const usedSlug = new Set(featuredLocalities.map((l) => `${l.district}|${l.slug}`));

// ---- İlçe profilleri: not metinlerinin coğrafi/ekonomik dayanağı ----------
const P = {
  battalgazi: {
    zemin: [
      "Orduzu ve çevresindeki kayısı bahçelerine yakın",
      "Beydağı eteklerine bakan",
      "Malatya ovasının kuzeyinde yer alan",
      "merkeze kısa mesafede kalan",
    ],
    is: [
      "kuyu ve dalgıç pompa bağlantısı",
      "damlama sulama hattı",
      "bahçe elektriği ve dış mekân aydınlatması",
      "ev tesisatı yenileme",
      "pano değişimi ve topraklama",
      "su deposu ve hidrofor kurulumu",
    ],
  },
  yesilyurt: {
    zemin: [
      "Yeşilyurt'un bağlık kesiminde bulunan",
      "yeni konut alanlarının sınırındaki",
      "Sürgü yoluna açılan",
      "merkeze bağlı yamaç yerleşimi olan",
    ],
    is: [
      "bağ evi elektriği ve sulama hattı",
      "daire tadilatı ve tesisat yenileme",
      "hidrofor ve su deposu kurulumu",
      "damlama sulama uygulaması",
      "aydınlatma ve priz ilavesi",
      "kuyu pompası bakımı",
    ],
  },
  akcadag: {
    zemin: [
      "Akçadağ ovasına bakan",
      "Kürecik yolu üzerindeki",
      "Levent Vadisi çevresinde yer alan",
      "tarım arazileriyle çevrili",
    ],
    is: [
      "tarla sulama pompası",
      "arazi enerji hattı çekimi",
      "müstakil ev tesisatı",
      "su deposu ve terfi hattı",
      "sera ve besi tesisi elektriği",
      "damlama sulama sistemi",
    ],
  },
  arapgir: {
    zemin: [
      "Arapgir'in dağlık kesiminde kurulmuş",
      "Fırat'a inen vadilerde yer alan",
      "eski konak dokusuna yakın",
      "meyve bahçeleriyle çevrili",
    ],
    is: [
      "taş yapılarda tesisat yenileme",
      "kuyu pompası ve depo bağlantısı",
      "bahçe sulama hattı",
      "ev elektriği ve topraklama",
      "ısıtma tesisatı ilavesi",
      "dış mekân aydınlatma",
    ],
  },
  arguvan: {
    zemin: [
      "Arguvan yaylalarına açılan",
      "Karakaya Baraj Gölü çevresinde bulunan",
      "hayvancılığın sürdüğü",
      "yayla yolu üzerindeki",
    ],
    is: [
      "ahır ve besi tesisi elektriği",
      "su terfi hattı",
      "dalgıç pompa bağlantısı",
      "ev tesisatı yenileme",
      "sulama panosu kurulumu",
      "topraklama ve pano işleri",
    ],
  },
  darende: {
    zemin: [
      "Tohma Vadisi'ne bakan",
      "Darende'nin su kaynaklarına yakın",
      "Balıklıgöl çevresindeki",
      "vadi tabanında kurulmuş",
    ],
    is: [
      "kaynak suyu hattı ve depo",
      "işletme tesisatı",
      "bahçe sulama sistemi",
      "ev tesisatı yenileme",
      "pompa ve hidrofor kurulumu",
      "aydınlatma uygulaması",
    ],
  },
  dogansehir: {
    zemin: [
      "Sürgü çevresinde bulunan",
      "Doğanşehir ovasında yer alan",
      "Beydağı'nın güney eteğindeki",
      "elma bahçeleriyle çevrili",
    ],
    is: [
      "meyve bahçesi sulaması",
      "kuyu ve dalgıç pompa bağlantısı",
      "sera elektriği",
      "ev tesisatı ve pano yenileme",
      "damlama sulama hattı",
      "depo ve terfi sistemi",
    ],
  },
  doganyol: {
    zemin: [
      "Fırat kıyısındaki",
      "Doğanyol'un dik yamaçlarında kurulmuş",
      "baraj gölüne bakan",
      "vadi yerleşimi olan",
    ],
    is: [
      "yüksek basınç pompa çözümü",
      "su terfi hattı",
      "ev tesisatı yenileme",
      "bahçe sulama bağlantısı",
      "topraklama ve pano işleri",
      "aydınlatma uygulaması",
    ],
  },
  hekimhan: {
    zemin: [
      "Hekimhan'ın demir yatakları çevresinde",
      "Kuluncak yolu üzerindeki",
      "step arazide kurulmuş",
      "maden sahasına yakın",
    ],
    is: [
      "derin kuyu pompası",
      "arazi enerji hattı",
      "işletme elektriği ve pano",
      "ev tesisatı yenileme",
      "su deposu ve terfi hattı",
      "sulama otomasyonu",
    ],
  },
  kale: {
    zemin: [
      "Kömürhan Köprüsü çevresinde bulunan",
      "Fırat'a inen",
      "İzollu ovasında yer alan",
      "baraj gölü kıyısındaki",
    ],
    is: [
      "sulama pompası ve filtre istasyonu",
      "bahçe sulama hattı",
      "ev tesisatı yenileme",
      "dalgıç pompa bağlantısı",
      "pano ve topraklama",
      "depo ve hidrofor kurulumu",
    ],
  },
  kuluncak: {
    zemin: [
      "Kuluncak'ın yüksek kesiminde",
      "Sofular çevresinde bulunan",
      "yayla karakterli",
      "orman sınırına yakın",
    ],
    is: [
      "ev tesisatı ve ısıtma hattı",
      "kuyu pompası bağlantısı",
      "ahır elektriği",
      "su deposu ve donma yalıtımı",
      "pano yenileme",
      "dış mekân aydınlatma",
    ],
  },
  puturge: {
    zemin: [
      "Pütürge'nin dağ yamaçlarında",
      "Fırat vadisine bakan",
      "ceviz ve dut bahçeleriyle çevrili",
      "yüksek rakımlı",
    ],
    is: [
      "yüksek irtifa su terfi hattı",
      "kuyu ve kaynak bağlantısı",
      "ev tesisatı yenileme",
      "bahçe sulaması",
      "pano ve topraklama",
      "aydınlatma ilavesi",
    ],
  },
  yazihan: {
    zemin: [
      "Yazıhan ovasında yer alan",
      "Karakaya Barajı sulama sahasındaki",
      "kayısı ve sebze üretiminin sürdüğü",
      "sera bölgesine yakın",
    ],
    is: [
      "damlama sulama sistemi",
      "filtre istasyonu ve pompa",
      "sera otomasyonu",
      "arazi enerji hattı",
      "ev tesisatı ve pano",
      "depo ve terfi hattı",
    ],
  },
};

// ---- Not şablonları -------------------------------------------------------
// İş adlarının bir kısmı zaten "ve" içeriyor ("kuyu ve dalgıç pompa bağlantısı").
// İkisini "ve" ile bağlarsak "… ve … ve …" çıkıyor; o durumda virgülle bağlıyoruz.
const bag = (a, b, baglac) =>
  a.includes(" ve ") || b.includes(" ve ") ? `${a}, ${b}` : `${a} ${baglac} ${b}`;
const ve = (a, b) => bag(a, b, "ve");
const ile = (a, b) => bag(a, b, "ile");

const T = [
  (d, z, a, b) => `${d} ilçesine bağlı, ${z} yerleşim. En sık gelen talepler ${ve(a, b)}.`,
  (d, z, a, b) => `${z} mahalle; ${d} genelinde olduğu gibi burada da ${ile(a, b)} öne çıkıyor.`,
  (d, z, a, b) => `${d}'ın ${z} mahallelerinden biri. Müstakil yapı oranı yüksek; ${ve(a, b)} düzenli olarak talep ediliyor.`,
  (d, z, a, b) => `${z} bu yerleşimde ${a} sezonluk yoğunlaşırken, ${b} yıl boyu süren işler arasında.`,
  (d, z, a, b) => `${d} sınırlarında yer alan, ${z} mahalle. Bahçe ve tarla dokusu nedeniyle ${ile(a, b)} sık yapılıyor.`,
  (d, z, a, b) => `${z} yerleşimde yapı stoğu ağırlıklı olarak müstakil. ${a}, ardından ${b} en çok istenen kalemler.`,
  (d, z, a, b) => `${d} ilçesinin ${z} kesiminde. ${ve(a, b)} bölgeye gittiğimizde en sık yaptığımız işler.`,
  (d, z, a, b) => `${z} mahallede su ve elektrik altyapısı yerleşim geneline yayılmış durumda; ${ile(a, b)} öne çıkıyor.`,
  (d, z, a, b) => `${d}'a bağlı, ${z} yerleşim. Talepler çoğunlukla ${ve(a, b)} başlıklarında toplanıyor.`,
  (d, z, a, b) => `${z} mahalle. Arazi ve bahçe kullanımının yaygın olması nedeniyle ${ile(a, b)} işleri düzenli geliyor.`,
  (d, z, a, b) => `${d} ilçesinde, ${z} konumda. Yapıların çoğu bahçeli olduğundan ${ve(a, b)} sık istenen çözümler.`,
  (d, z, a, b) => `${z} bu mahallede mevsimlik iş yoğunluğu var: ${a} bahar aylarında, ${b} yıl boyunca yapılıyor.`,
  (d, z, a, b) => `${d}'ın ${z} yerleşimlerinden. Tesisat işlerinde ${ile(a, b)} en çok karşılaştığımız kalemler.`,
  (d, z, a, b) => `${z} mahallede hem konut hem arazi işleri yapıyoruz; ${ve(a, b)} başta geliyor.`,
];

const ilceAd = Object.fromEntries(districts.map((d) => [d.slug, d.name]));
const out = new Map(districts.map((d) => [d.slug, []]));
const idx = new Map(districts.map((d) => [d.slug, 0]));

for (const r of rows) {
  if (!r.ilce) continue;
  if (varSite.has(`${r.ilce}|${norm(r.mahalle)}`)) continue;
  const base = slugify(r.mahalle);
  let slug = base;
  let n = 2;
  while (usedSlug.has(`${r.ilce}|${slug}`)) slug = `${base}-${n++}`;
  usedSlug.add(`${r.ilce}|${slug}`);

  const p = P[r.ilce];
  const i = idx.get(r.ilce);
  idx.set(r.ilce, i + 1);
  const z = p.zemin[Math.floor(i / T.length) % p.zemin.length];
  const a = p.is[i % p.is.length];
  let b = p.is[(i + 1 + Math.floor(i / p.is.length)) % p.is.length];
  if (b === a) b = p.is[(i + 2) % p.is.length];
  const note = T[i % T.length](ilceAd[r.ilce], z, a, b);
  out.get(r.ilce).push([r.mahalle, slug, r.ilce, "mahalle", note]);
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
let src = `// OTOMATİK ÜRETİLDİ — scripts/gen-localities.mjs ile üretilir, elle düzenlemeyin.
// Kaynak: Malatya Valiliği muhtarlık listesi (719 güncel mahalle, 6360 sayılı Kanun sonrası).
// Sitede elle yazılmış mahalleler localities.mjs içinde; bu dosya kalanları tamamlar.
// [ad, slug, ilçe, tip, kısa not]

export const extraRows = [
`;
let total = 0;
for (const d of districts) {
  const arr = out.get(d.slug);
  if (!arr.length) continue;
  src += `  // ${"-".repeat(Math.max(2, 62 - d.name.length))} ${d.name} (${arr.length})\n`;
  for (const [name, slug, ds, type, note] of arr) {
    src += `  ["${esc(name)}", "${slug}", "${ds}", "${type}", "${esc(note)}"],\n`;
    total++;
  }
  src += "\n";
}
src += "];\n";
await writeFile("site/data/localities-extra.mjs", src, "utf8");
console.log(`✓ ${total} mahalle → site/data/localities-extra.mjs`);
for (const d of districts) console.log(`   ${d.name.padEnd(12)} +${out.get(d.slug).length}`);

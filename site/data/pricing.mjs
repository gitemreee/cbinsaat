// FİYAT LİSTESİ
// ─────────────────────────────────────────────────────────────────────────
// NASIL DOLDURULUR
//
// 1. Aşağıdaki kalemlerde min/max değerlerini TL olarak yazın.
//    Örnek:  { label: "Priz veya anahtar değişimi", min: 400, max: 700 }
// 2. En üstteki `priceUpdated` alanına güncelleme ayını yazın: "Şubat 2026"
// 3. node site/build.mjs
//
// priceUpdated BOŞ olduğu sürece hiçbir sayfada rakam görünmez; fiyat
// sayfaları "fiyatı ne belirler" içeriğiyle yayınlanır. Bu kasıtlı:
// doldurulmamış ya da eskimiş bir rakam yayına çıkmasın.
//
// min/max'ı null bıraktığınız tek tek kalemler de tabloda gösterilmez.
// Yani hepsini doldurmak zorunda değilsiniz; bildiğinizi yazın.
//
// UYARI: Yayınladığınız rakam sizi bağlar. Aralık verin, tarih damgası
// otomatik ekleniyor ve her sayfada "kesin fiyat keşif sonrası" notu var.

/** Örn. "Şubat 2026". Boş bırakılırsa hiçbir tablo yayınlanmaz. */
export const priceUpdated = "";

/** Büyük ve değişkeni çok olan işlerde rakam yerine sadece fiyat faktörleri gösterilir. */
export const factorsOnly = [
  "anahtar-teslim-tadilat",
  "anahtar-teslim-daire",
  "anahtar-teslim-insaat",
  "anahtar-teslim-is-yeri",
  "bina-tesisat-yenileme",
  "villa-dubleks-tadilati",
  "kafe-restoran-tadilati",
  "apartman-ortak-alan-tadilati",
  "deprem-sonrasi-tadilat",
  "eski-ev-tadilati",
  "anahtar-teslim-sulama-sistemi",
  "kayisi-bahcesi-sulama",
  "sera-elektrik-sulama",
  "fabrika-elektrik-tesisati",
];

/**
 * Küçük ve standart işler — birim bazlı aralık verilebilir.
 * unit: fiyatın neye göre verildiği (adet, daire, m², nokta, ton…)
 */
export const priceList = {
  "priz-tamiri": {
    unit: "adet",
    items: [
      { label: "Priz veya anahtar değişimi", min: null, max: null, note: "malzeme dahil, mevcut kutuya" },
      { label: "Yeni priz noktası açma (sıva üstü kanal)", min: null, max: null, note: "kanal ve kablo dahil" },
      { label: "Yeni priz noktası açma (sıva altı)", min: null, max: null, note: "kanal açma + sıva onarımı" },
      { label: "Çerçeve ve kapak grubu yenileme", min: null, max: null, note: "" },
    ],
  },
  "avize-aydinlatma": {
    unit: "adet",
    items: [
      { label: "Avize montajı (beton tavan)", min: null, max: null, note: "" },
      { label: "Avize montajı (alçıpan, takviyeli)", min: null, max: null, note: "" },
      { label: "Spot montajı", min: null, max: null, note: "delme + kablolama, adet başı" },
      { label: "Şerit LED uygulaması", min: null, max: null, note: "metre başı, profil ve güç kaynağı ayrı" },
      { label: "Aplik montajı", min: null, max: null, note: "" },
    ],
  },
  "elektrik-ariza": {
    unit: "iş",
    items: [
      { label: "Arıza tespiti (ölçümlü)", min: null, max: null, note: "onarım tarafımızca yapılırsa düşülür" },
      { label: "Sigorta / şalter değişimi", min: null, max: null, note: "malzeme dahil" },
      { label: "Kaçak akım rölesi ilavesi", min: null, max: null, note: "" },
      { label: "Mesai dışı acil müdahale farkı", min: null, max: null, note: "normal ücrete eklenir" },
    ],
  },
  "elektrik-panosu": {
    unit: "pano",
    items: [
      { label: "Daire panosu yenileme (buşonludan modern panoya)", min: null, max: null, note: "malzeme dahil" },
      { label: "Pano bakımı (sıkma, ölçüm, etiketleme)", min: null, max: null, note: "" },
      { label: "Parafudr ilavesi", min: null, max: null, note: "" },
    ],
  },
  "elektrik-tesisati": {
    unit: "m² / nokta",
    items: [
      { label: "Daire tesisatı yenileme (mevcut borudan kablo değişimi)", min: null, max: null, note: "m² başı" },
      { label: "Daire tesisatı yenileme (kanal açma dahil)", min: null, max: null, note: "m² başı, sıva onarımı dahil" },
      { label: "Yeni hat çekimi (panodan tek nokta)", min: null, max: null, note: "nokta başı" },
    ],
  },
  "topraklama-paratoner": {
    unit: "iş",
    items: [
      { label: "Topraklama ölçümü ve rapor", min: null, max: null, note: "" },
      { label: "Topraklama hattı ilavesi (daire)", min: null, max: null, note: "" },
    ],
  },
  "tikali-gider-acma": {
    unit: "iş",
    items: [
      { label: "Daire içi gider açma (lavabo, eviye, banyo)", min: null, max: null, note: "" },
      { label: "Klozet / WC hattı açma", min: null, max: null, note: "" },
      { label: "Kolon veya bina ana gider hattı", min: null, max: null, note: "basınçlı su ile" },
      { label: "Mesai dışı acil müdahale farkı", min: null, max: null, note: "" },
    ],
  },
  "su-kacagi-tespiti": {
    unit: "iş",
    items: [
      { label: "Kaçak tespiti (daire içi)", min: null, max: null, note: "onarım tarafımızca yapılırsa düşülür" },
      { label: "Kaçak tespiti + noktasal kırım ve onarım", min: null, max: null, note: "seramik hariç" },
      { label: "Isıtma hattı kaçak tespiti", min: null, max: null, note: "" },
    ],
  },
  "sihhi-tesisat": {
    unit: "m² / nokta",
    items: [
      { label: "Daire su tesisatı yenileme (kolektörlü)", min: null, max: null, note: "m² başı, kırım ve sıva dahil" },
      { label: "Tek nokta hat yenileme", min: null, max: null, note: "" },
      { label: "Ara vana takılması", min: null, max: null, note: "adet başı" },
    ],
  },
  "petek-temizligi": {
    unit: "petek / daire",
    items: [
      { label: "Petek temizliği (petek başı)", min: null, max: null, note: "" },
      { label: "Daire geneli petek temizliği", min: null, max: null, note: "hava alma ve basınç ayarı dahil" },
      { label: "Manyetik filtre ilavesi", min: null, max: null, note: "malzeme dahil" },
    ],
  },
  "hidrofor-tamiri": {
    unit: "iş",
    items: [
      { label: "Hidrofor bakımı (tank basıncı, şalter ayarı)", min: null, max: null, note: "" },
      { label: "Basınç şalteri değişimi", min: null, max: null, note: "malzeme dahil" },
      { label: "Basınç tankı değişimi", min: null, max: null, note: "tank hariç, işçilik" },
      { label: "Apartman yıllık bakım anlaşması", min: null, max: null, note: "yılda 2 ziyaret" },
    ],
  },
  "su-deposu-temizligi": {
    unit: "ton",
    items: [
      { label: "Su deposu temizliği ve dezenfeksiyon", min: null, max: null, note: "ton başı" },
      { label: "Depo kapak, conta ve şamandıra kontrolü", min: null, max: null, note: "temizlikle birlikte" },
    ],
  },
  "dusakabin-montaji": {
    unit: "adet",
    items: [
      { label: "Duşakabin montajı (tekne ile)", min: null, max: null, note: "" },
      { label: "Duşakabin montajı (teknesiz)", min: null, max: null, note: "" },
      { label: "Eski duşakabin sökümü", min: null, max: null, note: "" },
      { label: "Conta / tekerlek değişimi", min: null, max: null, note: "malzeme ayrı" },
    ],
  },
  "vitrifiye-armatur-montaji": {
    unit: "adet",
    items: [
      { label: "Klozet montajı", min: null, max: null, note: "söküm dahil" },
      { label: "Asma klozet + gömme rezervuar montajı", min: null, max: null, note: "kasa montajı dahil" },
      { label: "Lavabo montajı", min: null, max: null, note: "" },
      { label: "Batarya değişimi", min: null, max: null, note: "" },
      { label: "Rezervuar iç takım değişimi", min: null, max: null, note: "" },
    ],
  },
  "kombi-petek-montaji": {
    unit: "adet",
    items: [
      { label: "Panel radyatör montajı (mevcut hatta)", min: null, max: null, note: "" },
      { label: "Petek yeri değişimi (hat uzatma dahil)", min: null, max: null, note: "" },
      { label: "Havlupan montajı", min: null, max: null, note: "" },
    ],
  },
  "kamera-guvenlik-sistemleri": {
    unit: "kamera",
    items: [
      { label: "Kamera montajı ve kablolama (kamera başı)", min: null, max: null, note: "cihaz hariç" },
      { label: "Kayıt cihazı kurulumu ve devreye alma", min: null, max: null, note: "" },
      { label: "Mobil erişim yapılandırma", min: null, max: null, note: "" },
    ],
  },
  "diafon-goruntulu-konusma": {
    unit: "daire",
    items: [
      { label: "Daire ünitesi değişimi", min: null, max: null, note: "cihaz hariç işçilik" },
      { label: "Apartman diafon sistemi yenileme (daire başı)", min: null, max: null, note: "mevcut kablo kullanılabiliyorsa" },
      { label: "Kapı otomatiği montajı", min: null, max: null, note: "" },
    ],
  },
  "uzaktan-kumanda-otomasyon": {
    unit: "sistem",
    items: [
      { label: "Telsiz (RF) kumanda sistemi kurulumu", min: null, max: null, note: "mevcut panoya ilave" },
      { label: "GSM kumanda sistemi kurulumu", min: null, max: null, note: "SIM hattı müşteriye ait" },
      { label: "Kuru çalışma + faz koruma ilavesi", min: null, max: null, note: "" },
    ],
  },
  "mutfak-tadilati": {
    unit: "metretül / iş",
    items: [
      { label: "Mutfak dolabı montajı (metretül)", min: null, max: null, note: "dolap hariç işçilik" },
      { label: "Tezgâh ölçü, kesim ve montaj (metretül)", min: null, max: null, note: "suntalam/laminat" },
      { label: "Eviye ve batarya montajı, su bağlantısı", min: null, max: null, note: "" },
      { label: "Ankastre fırın için ayrı hat çekimi", min: null, max: null, note: "" },
      { label: "Eski mutfak sökümü ve moloz", min: null, max: null, note: "" },
    ],
  },
  "banyo-tadilati": {
    unit: "m² / iş",
    items: [
      { label: "Su yalıtımı uygulaması (m²)", min: null, max: null, note: "su testi dahil" },
      { label: "Seramik döşeme işçiliği (m²)", min: null, max: null, note: "seramik hariç" },
      { label: "Eski fayans sökümü (m²)", min: null, max: null, note: "moloz tahliyesi dahil" },
      { label: "Banyo tesisatı yenileme", min: null, max: null, note: "temiz su + gider" },
    ],
  },
  "komple-ev-tadilati": {
    unit: "m²",
    items: [
      { label: "Boya ve badana (m²)", min: null, max: null, note: "duvar alanı" },
      { label: "Laminat parke döşeme işçiliği (m²)", min: null, max: null, note: "parke hariç, süpürgelik dahil" },
      { label: "Alçıpan asma tavan (m²)", min: null, max: null, note: "" },
      { label: "Alçıpan bölme duvar (m²)", min: null, max: null, note: "" },
      { label: "Söküm ve moloz tahliyesi (m²)", min: null, max: null, note: "" },
    ],
  },
  "daire-tadilati": {
    unit: "m²",
    items: [
      { label: "Komple tadilat (tesisat dahil, m²)", min: null, max: null, note: "orta segment malzeme" },
      { label: "Kozmetik yenileme (boya + zemin, m²)", min: null, max: null, note: "" },
    ],
  },
  "kiralik-ev-yenileme": {
    unit: "daire",
    items: [
      { label: "Hızlı hazırlama paketi (boya + onarım + temizlik)", min: null, max: null, note: "2+1 daire" },
      { label: "Genişletilmiş paket (zemin ve banyo tazeleme dahil)", min: null, max: null, note: "2+1 daire" },
    ],
  },
  "satis-oncesi-ev-yenileme": {
    unit: "daire",
    items: [
      { label: "Satış öncesi tazeleme paketi", min: null, max: null, note: "boya, aydınlatma, küçük onarım" },
    ],
  },
  "dukkan-ofis-tadilati": {
    unit: "m²",
    items: [
      { label: "Ofis/dükkan tadilatı (m²)", min: null, max: null, note: "elektrik + ince iş" },
      { label: "Aydınlatma yenileme (armatür başı)", min: null, max: null, note: "armatür hariç" },
    ],
  },
  "bahce-sulama": {
    unit: "m² / zon",
    items: [
      { label: "Otomatik bahçe sulama kurulumu (m²)", min: null, max: null, note: "kazı ve hat dahil" },
      { label: "Sprinkler kafa montajı (adet)", min: null, max: null, note: "" },
      { label: "Sezon kapatma / açma", min: null, max: null, note: "" },
    ],
  },
  "hidrofor-pompa-sistemleri": {
    unit: "iş",
    items: [
      { label: "Hidrofor montajı ve devreye alma", min: null, max: null, note: "cihaz hariç işçilik" },
      { label: "Dalgıç pompa indirme / çıkarma", min: null, max: null, note: "kuyu derinliğine göre" },
      { label: "Pompa panosu kurulumu (korumalı)", min: null, max: null, note: "" },
    ],
  },
};

/** Keşif ve yol bedelleri — ayrı gösterilir. */
export const surveyFees = [
  { label: "Battalgazi ve Yeşilyurt keşif", min: 0, max: 0, note: "ücretsiz", free: true },
  { label: "Diğer ilçeler keşif bedeli", min: null, max: null, note: "iş tarafımızca yapılırsa toplamdan düşülür" },
  { label: "Minimum servis bedeli (tek kalemlik küçük işler)", min: null, max: null, note: "" },
];

/* ----------------------------------------------------------- yardımcılar */

/** Bir hizmet için yayınlanabilir fiyat kalemi var mı? */
export const hasPrices = (slug) => {
  if (!priceUpdated) return false;
  const e = priceList[slug];
  return !!e && e.items.some((i) => i.min != null && i.max != null);
};

/** Yayınlanacak kalemler (boş bırakılanlar gizlenir). */
export const pricesFor = (slug) => {
  const e = priceList[slug];
  if (!e || !priceUpdated) return null;
  const items = e.items.filter((i) => i.min != null && i.max != null);
  return items.length ? { unit: e.unit, items } : null;
};

/** Fiyat sayfası üretilecek hizmet slug'ları. */
export const pricedSlugs = [...new Set([...Object.keys(priceList), ...factorsOnly])];

/** Doldurulmamış kalemleri raporlamak için. */
export const missingPrices = () => {
  const out = [];
  for (const [slug, e] of Object.entries(priceList)) {
    const bos = e.items.filter((i) => i.min == null || i.max == null).length;
    if (bos) out.push({ slug, bos, toplam: e.items.length });
  }
  return out;
};

export const tl = (n) => new Intl.NumberFormat("tr-TR").format(n);

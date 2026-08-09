// Marka, iletişim ve site geneli sabitler.
// Tek doğruluk kaynağı: telefon/e-posta/adres burada değişir, tüm site güncellenir.

export const site = {
  name: "CB İnşaat",
  legalName: "CB İnşaat Tadilat ve Yapı",
  domain: "https://cbinsaat.com",
  locale: "tr_TR",
  lang: "tr",
  city: "Malatya",
  cityPlural: "Malatya geneli",
  founded: 2005,
  tagline: "Malatya'da anahtar teslim tadilat. Elektrik, su, dekorasyon ve yapı işleri tek ekipte.",
  shortDescription:
    "Malatya'da anahtar teslim tadilat ve yapı firması. Daire, ev, mutfak, banyo, iş yeri tadilatı; elektrik, sıhhi ve mekanik tesisat, sulama sistemleri.",
  phoneDisplay: "0530 734 60 00",
  phoneHref: "+905307346000",
  whatsapp: "905307346000",
  whatsappText:
    "Merhaba CB İnşaat, bir iş için usta ile görüşmek istiyorum.",
  email: "info@cbinsaat.com",
  address: {
    street: "Merkez",
    district: "Battalgazi",
    city: "Malatya",
    region: "Malatya",
    postalCode: "44000",
    country: "TR",
  },
  geo: { lat: 38.3552, lng: 38.3095 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], open: "08:00", close: "20:00" },
    { days: ["Sunday"], open: "09:00", close: "18:00" },
  ],
  hoursText: "Hafta içi ve cumartesi 08.00–20.00, pazar 09.00–18.00",
  emergencyText: "Yanık kokusu, kıvılcım, su baskını gibi acil işlerde aynı gün geliyoruz.",
  priceRange: "₺₺",
  // Sosyal hesaplar. Boş bırakılanlar şemaya, footer'a ve iletişim sayfasına yazılmaz.
  social: {
    instagram: "https://www.instagram.com/cbelektrikinsaat/",
    facebook: "https://www.facebook.com/cbelektrikinsaat/",
    youtube: "",
    googleMaps: "",
  },

  /**
   * Arama motoru doğrulama kodları.
   * Google Search Console → "HTML etiketi" yöntemini seçtiğinizde verdiği
   *   <meta name="google-site-verification" content="ABC123..."> etiketindeki
   * yalnızca content değerini aşağıya yapıştırın, sonra:
   *   node site/build.mjs   ve yeniden yayına alın.
   * Boş bırakılan satırlar sayfaya hiç yazılmaz.
   */
  verification: {
    google: "",
    bing: "",
    yandex: "",
  },
};

export const waLink = (text = site.whatsappText) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Ana menü. Mega menü içerikleri build sırasında veriden doldurulur.
export const mainNav = [
  { label: "Hizmetler", href: "/hizmetler/", mega: "services" },
  { label: "Bölgeler", href: "/bolgeler/", mega: "regions" },
  { label: "Tamamlanan Projeler", href: "/projeler/" },
  { label: "Fiyatlar", href: "/fiyatlar/" },
  { label: "Blog", href: "/blog/", mega: "blog" },
  { label: "Kurumsal", href: "/hakkimizda/", mega: "corporate" },
];

// Ana sayfada ve iç sayfalarda kullanılan güven göstergeleri.
export const trustPoints = [
  { value: "21", label: "yıllık saha tecrübesi" },
  { value: "13", label: "ilçede hizmet" },
  { value: "2.400+", label: "tamamlanan iş" },
  { value: "24 saat", label: "içinde keşif randevusu" },
];

// Çalışma süreci, hizmet sayfalarında ortak blok.
export const processSteps = [
  {
    title: "Ararsınız",
    text: "Ne yaptırmak istediğinizi, adresi ve işin aciliyetini konuşuruz. Arızanın fotoğrafını WhatsApp'tan gönderirseniz çoğu işi telefonda ön değerlendirmeden geçirebiliyoruz.",
  },
  {
    title: "Geliriz, bakarız",
    text: "Ekip adrese gelir; mevcut tesisatı açar, ölçer, riskli noktaları not eder. Neyin değişmesi gerektiğini de neyin şimdilik durabileceğini de söyleriz.",
  },
  {
    title: "Fiyatı yazılı veririz",
    text: "Malzeme ayrı, işçilik ayrı, süre ayrı yazılır. Sonradan çıkması muhtemel kalemler varsa onlar da baştan belirtilir. Siz onaylamadan iş başlamaz.",
  },
  {
    title: "İşi yaparız",
    text: "İş programına göre çalışırız. Elektrik, su ve mekanik aynı ekipte olduğu için kimse kimseyi beklemez; aynı duvar iki kez kırılmaz.",
  },
  {
    title: "Test edip teslim ederiz",
    text: "Basınç testi, pano ölçümü ve sızdırmazlık kontrolü yapılır. Alan temizlenir, yapılan iş anlatılır ve kapanan hatların fotoğrafları size teslim edilir.",
  },
];

// Neden biz, ana sayfa ve kurumsal sayfalarda kullanılır.
export const differentiators = [
  {
    title: "Tek ekip, tek muhatap",
    text: "Elektrikçi, su tesisatçısı, mekanikçi ayrı ayrı taşerona gitmez. Hepsi bizim ekibimizde. Bir işte çıkan aksaklık diğerini bekletmez; kimin ne zaman geleceğini takip etmek zorunda kalmazsınız.",
  },
  {
    title: "Fiyat yazılı, kalem kalem",
    text: "Götürü rakam vermiyoruz. Malzeme ne kadar, işçilik ne kadar, kaç gün sürer; hepsi ayrı yazılı. İş sırasında ek bir kalem çıkarsa önce sizi arıyoruz.",
  },
  {
    title: "13 ilçenin hepsine gidiyoruz",
    text: "Merkezin yanında Darende, Hekimhan, Arapgir, Pütürge de dahil. Kırsal mahallelere de aynı ekip gidiyor; başka firmaya havale etmiyoruz.",
  },
  {
    title: "Ne yaptığımızı belgeliyoruz",
    text: "Kapanacak hattı fotoğraflıyoruz, panoyu etiketliyoruz, güzergâhı size bırakıyoruz. Yıllar sonra duvara raf takarken hattın nereden geçtiğini bilirsiniz.",
  },
];

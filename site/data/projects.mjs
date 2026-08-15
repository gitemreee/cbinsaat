// TAMAMLANAN PROJELER
// ─────────────────────────────────────────────────────────────────────────
// NASIL DOLDURULUR
//
// 1. Aşağıdaki şablonu kopyalayıp gerçek bir işinizin bilgileriyle doldurun.
// 2. `published: true` yapın.
// 3. Fotoğrafları public/projects/<slug>-1.jpg, -2.jpg ... olarak koyun.
//    Önce/sonra varsa: <slug>-once.jpg ve <slug>-sonra.jpg
// 4. node site/build.mjs
//
// published: false olan kayıtlar için SAYFA ÜRETİLMEZ.
// Bu kasıtlı: yapılmamış bir işin referans olarak yayınlanmaması için.
// Aşağıdaki iki kayıt örnek şablondur, gerçek iş değildir; oldukları gibi
// yayınlanmazlar. Kendi işlerinizle değiştirin.
//
// MÜŞTERİ İZNİ: Daire ve iş yeri fotoğraflarını yayınlamadan önce mülk
// sahibinden izin alın. Adres bilgisini mahalle düzeyinde bırakın,
// kapı numarası ve müşteri adı yazmayın.

export const projects = [
  {
    published: false, // ← gerçek işle doldurulunca true yapın
    slug: "ornek-3-1-daire-tadilati",
    title: "3+1 Daire Komple Tadilat",
    type: "Daire tadilatı",
    service: "daire-tadilati",       // hizmet slug'ı — sayfalar birbirine bağlanır
    district: "yesilyurt",           // ilçe slug'ı
    locality: "Tecde",               // mahalle adı (kapı no yazmayın)
    year: 2025,
    duration: "32 iş günü",
    area: "135 m²",
    summary:
      "1998 yapımı dairede tesisat dahil komple yenileme. Alüminyum kolon hattı, galvaniz su borusu ve buşonlu pano değişti.",
    scope: [
      "Söküm ve moloz tahliyesi",
      "Elektrik tesisatı ve pano yenileme",
      "Su ve atık su tesisatı yenileme",
      "Mutfak ve banyo komple uygulama",
      "Seramik, parke ve boya",
      "Aydınlatma ve montajlar",
    ],
    challenge:
      "Söküm sonrası banyo döşemesinde su yalıtımı olmadığı ve alt kata sızıntı başladığı görüldü. Kapsam genişletildi, alt komşunun tavanı da onarıldı.",
    result:
      "Tesisat komple yenilendi, banyoda su yalıtımı yapılıp 24 saat su testi geçildi. Daire teslim tarihinde teslim edildi.",
    photos: [],   // ["once", "sonra", "1", "2"] → public/projects/<slug>-once.jpg ...
  },

  {
    published: false,
    slug: "ornek-kayisi-bahcesi-sulama",
    title: "20 Dekar Kayısı Bahçesi Damlama Sulama",
    type: "Sulama sistemi",
    service: "kayisi-bahcesi-sulama",
    district: "battalgazi",
    locality: "Hatunsuyu",
    year: 2025,
    duration: "9 iş günü",
    area: "20 dekar",
    summary:
      "Salma sulamadan damlama sistemine geçiş. Kuyu pompası, arazi enerji hattı, filtre istasyonu ve 4 zonlu otomasyon kuruldu.",
    scope: [
      "Kuyu verimi ölçümü ve pompa seçimi",
      "Arazi enerji hattı ve korumalı pompa panosu",
      "Hidrosiklon ve eleman filtre istasyonu",
      "Ana hat, manifold ve lateral döşeme",
      "4 zonlu otomasyon ve programlama",
    ],
    challenge:
      "Arazi hattında gerilim düşümü ölçüldü; mevcut kesit yetersizdi. Kablo kesiti mesafeye göre yeniden hesaplandı ve faz koruma eklendi.",
    result:
      "Gece sulamasına geçildi. Sulama işçiliği ortadan kalktı, su tüketimi epeyce düştü.",
    photos: [],
  },
];

export const publishedProjects = projects.filter((p) => p.published);
export const getProject = (slug) => publishedProjects.find((p) => p.slug === slug);
export const projectsForService = (serviceSlug) =>
  publishedProjects.filter((p) => p.service === serviceSlug);
export const projectsForDistrict = (districtSlug) =>
  publishedProjects.filter((p) => p.district === districtSlug);

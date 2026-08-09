// Mahalle × hizmet etiketleri.
// Her mahalle sayfası altında /bolgeler/<ilce>/<mahalle>/<etiket>/ adresinde
// halkın aradığı terimlerle (elektrikçi, sucu, tesisatçı, doğalgazcı…) sayfa üretir.
//
// slug     : URL parçası
// label    : sayfa başlığında geçen meslek/iş adı
// h1       : "<Mahalle> <h1>" biçiminde H1 kurar
// terms    : meta keywords ve metin içinde geçen halk dilindeki karşılıklar
// service  : ilgili ana hizmet slug'ı (iç link + şema)
// also     : ilgili diğer hizmet slug'ları (sayfa altındaki kart bloğu)
// icon     : blocks/icons setinden ikon adı
// jobs     : bu etiket altında yapılan işler (madde listesi)
// urgent   : acil çağrı metni kullanılsın mı

export const localTags = [
  {
    slug: "elektrikci",
    label: "elektrikçi",
    h1: "elektrikçi",
    icon: "bolt",
    service: "elektrik-tesisati",
    also: ["elektrik-ariza", "elektrik-panosu", "topraklama-paratoner", "avize-aydinlatma"],
    urgent: true,
    terms: ["elektrikçi", "elektrik ustası", "elektrikçi numarası", "acil elektrikçi", "en yakın elektrikçi", "elektrik tamircisi", "sigorta atıyor", "elektrik arızası"],
    jobs: [
      "Sigorta atması, kaçak akım rölesinin sürekli düşmesi ve kısa devre arızası",
      "Buşonlu eski sigorta kutusunun otomatik sigortalı panoyla değişimi",
      "Priz, anahtar, avize ve spot aydınlatma montajı",
      "Topraklama hattı çekimi ve topraklama ölçümü",
      "Klima, kombi, elektrikli ocak ve şofben için ayrı hat çekimi",
      "Bahçe, avlu ve dış cephe aydınlatması",
      "Kamera, diafon ve data altyapısı",
    ],
  },
  {
    slug: "su-tesisatcisi",
    label: "su tesisatçısı",
    h1: "su tesisatçısı (sucu)",
    icon: "drop",
    service: "sihhi-tesisat",
    also: ["su-kacagi-tespiti", "tikali-gider-acma", "banyo-tadilati", "kombi-petek-montaji"],
    urgent: true,
    terms: ["su tesisatçısı", "sucu", "tesisatçı", "su ustası", "acil su tesisatçısı", "en yakın sucu", "su patlağı", "musluk tamiri", "su kaçağı"],
    jobs: [
      "Patlayan boru, akan musluk ve damlatan bağlantıların onarımı",
      "Galvaniz boruların PPRC veya pex hatla komple yenilenmesi",
      "Batarya, duş seti, klozet, lavabo ve eviye montajı",
      "Su sayacı sonrası ana hat, vana ve kolektör düzenlemesi",
      "Sıcak su devresi, boyler ve şofben bağlantıları",
      "Donma nedeniyle çatlayan dış hatların onarımı ve yalıtımı",
    ],
  },
  {
    slug: "sihhi-tesisatci",
    label: "sıhhi tesisatçı",
    h1: "sıhhi tesisatçı",
    icon: "wrench",
    service: "sihhi-tesisat",
    also: ["banyo-tadilati", "mutfak-tadilati", "tikali-gider-acma", "su-kacagi-tespiti"],
    urgent: false,
    terms: ["sıhhi tesisatçı", "sıhhi tesisat", "tesisatçı", "banyo tesisatı", "mutfak tesisatı", "klozet montajı", "duşakabin montajı", "tesisat yenileme"],
    jobs: [
      "Banyo ve mutfakta temiz su + pis su tesisatının komple yenilenmesi",
      "Klozet, hilton lavabo, duşakabin ve küvet montajı",
      "Gizli rezervuar ve asma klozet uygulaması",
      "Yer süzgeci, sifon ve havalandırma bacası düzenlemesi",
      "Kolon hattı ve daire giriş vanası değişimi",
      "Seramik öncesi tesisat kaba işi ve su testi",
    ],
  },
  {
    slug: "dogalgazci",
    label: "doğalgaz tesisatçısı",
    h1: "doğalgaz tesisatı ve kombi servisi",
    icon: "fire",
    service: "dogalgaz-ic-tesisat",
    also: ["kombi-bakim-ariza", "kombi-petek-montaji", "yerden-isitma"],
    urgent: false,
    terms: ["doğalgazcı", "doğalgaz tesisatçısı", "doğalgaz tesisatı", "kombi montajı", "kombi ustası", "petek montajı", "doğalgaz projesi", "gaz açtırma"],
    jobs: [
      "Doğalgaz iç tesisat projesi için yetkili proje ekipleriyle koordinasyon",
      "Kombi montajı, baca bağlantısı ve devreye alma",
      "Petek ve yerden ısıtma tesisatı, kolektör dağıtımı",
      "Kombi yeri değişimi ve gaz hattı revizyonu",
      "Ocak ve şofben gaz bağlantısı",
      "Tesisat sonrası sızdırmazlık testi ve gaz açma sürecinin takibi",
    ],
    note: "Doğalgaz iç tesisat işleri yetkili firma ve onaylı proje ile yürütülür; süreci baştan sona biz takip ediyoruz.",
  },
  {
    slug: "sulama-sistemleri",
    label: "sulama sistemi ustası",
    h1: "sulama sistemleri ve damlama sulama",
    icon: "leaf",
    service: "tarimsal-sulama-sistemleri",
    also: ["bahce-sulama", "anahtar-teslim-sulama-sistemi", "hidrofor-pompa-sistemleri", "kayisi-bahcesi-sulama"],
    urgent: false,
    terms: ["damlama sulama", "sulama sistemi", "bahçe sulama", "otomatik sulama", "sulama ustası", "sulama borusu", "yağmurlama sulama", "kayısı bahçesi sulama"],
    jobs: [
      "Damlama sulama hattı projelendirme ve kurulum",
      "Filtre istasyonu, gübreleme tankı ve ana vana grubu",
      "Yağmurlama ve mikro yağmurlama uygulamaları",
      "Otomatik sulama: zaman ayarlı vana, kontrol ünitesi ve sensör",
      "Kuyu, dere ve depo bağlantılı pompa hattı",
      "Sezon açma–kapatma, hat temizliği ve kış bakımı",
    ],
  },
  {
    slug: "hidrofor-pompa",
    label: "hidrofor ve pompa ustası",
    h1: "hidrofor, dalgıç pompa ve su deposu",
    icon: "gauge",
    service: "hidrofor-pompa-sistemleri",
    also: ["hidrofor-tamiri", "su-deposu-temizligi", "gunes-enerjisi-su-sistemi", "sihhi-tesisat"],
    urgent: true,
    terms: ["hidrofor", "hidrofor tamiri", "hidrofor çalışmıyor", "dalgıç pompa", "kuyu pompası", "su motoru", "su basıncı düşük", "su deposu"],
    jobs: [
      "Üst katlarda basınç düşüklüğü için hidrofor seçimi ve montajı",
      "Hidrofor arızası: basınç şalteri, tank membranı ve kaçak kontrolü",
      "Kuyu için dalgıç pompa montajı, kablo ve boru inişi",
      "Su deposu kurulumu, şamandıra ve dolum otomatiği",
      "Pompa panosu, kuru çalışma koruması ve termik ayarı",
      "Apartman ortak hidroforunun bakımı ve yenilenmesi",
    ],
  },
  {
    slug: "aydinlatma",
    label: "aydınlatma ustası",
    h1: "aydınlatma ve elektrik döşeme",
    icon: "sun",
    service: "avize-aydinlatma",
    also: ["elektrik-tesisati", "elektrik-panosu", "kamera-guvenlik-sistemleri", "diafon-goruntulu-konusma"],
    urgent: false,
    terms: ["aydınlatma", "spot montajı", "avize montajı", "led aydınlatma", "bahçe aydınlatma", "sokak aydınlatma", "elektrikçi aydınlatma"],
    jobs: [
      "Spot, şerit LED ve gizli ışık uygulaması",
      "Avize, aplik ve sarkıt montajı",
      "Bahçe, avlu ve dış cephe aydınlatması",
      "Fotosel, hareket sensörü ve zaman ayarlı devreler",
      "Apartman ortak alan ve merdiven otomatiği",
      "Dükkân, tabela ve vitrin aydınlatması",
    ],
  },
  {
    slug: "tadilat",
    label: "tadilat ustası",
    h1: "tadilat ve yenileme",
    icon: "tools",
    service: "komple-ev-tadilati",
    also: ["banyo-tadilati", "mutfak-tadilati", "boya-badana", "alcipan-asma-tavan"],
    urgent: false,
    terms: ["tadilat", "ev tadilatı", "daire tadilatı", "banyo tadilatı", "mutfak tadilatı", "tadilat ustası", "boya badana", "dükkan tadilatı"],
    jobs: [
      "Komple daire yenileme: elektrik, su, zemin, boya tek elden",
      "Banyo ve mutfak yenileme, seramik ve dolap işleri",
      "Alçıpan, asma tavan ve kartonpiyer",
      "Boya, badana ve dekoratif duvar uygulamaları",
      "Kapı, pencere ve iç mekân doğrama değişimi",
      "Dükkân ve iş yeri tadilatı",
    ],
  },
];

export const tagBySlug = Object.fromEntries(localTags.map((t) => [t.slug, t]));

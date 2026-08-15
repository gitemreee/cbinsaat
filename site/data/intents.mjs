// Niyet (intent) sayfaları: "acil elektrikçi", "en yakın tesisatçı" gibi
// aramalara karşılık gelen ayrı URL ailesi.
// Her niyet için /<slug>/ ve /<slug>/<ilce>/ sayfaları üretilir.

export const intents = [
  {
    slug: "acil-elektrikci",
    kind: "acil",
    title: "Acil Elektrikçi",
    h1: "Malatya acil elektrikçi",
    icon: "alert",
    group: "Elektrik",
    metaTitle: "Malatya Acil Elektrikçi | Aynı Gün Müdahale",
    metaDesc:
      "Malatya'da acil elektrikçi. Yanık kokusu, kıvılcım, tüm dairenin enerjisiz kalması ve su teması gibi durumlarda aynı gün müdahale. {phone}",
    keywords: ["Malatya acil elektrikçi", "acil elektrikçi", "gece elektrikçi Malatya", "elektrik arıza acil"],
    lead:
      "Yanık kokusu, kıvılcım, ısınan pano ya da tüm dairenin enerjisiz kalması bekleyecek durumlar değil. Bu tür arızalarda merkez ilçelerde aynı gün müdahale ediyoruz.",
    urgent: [
      "Priz, anahtar veya panodan yanık kokusu geliyor",
      "Kıvılcım veya duman görüyorsunuz",
      "Pano elle dokunulamayacak kadar ısınmış",
      "Su, elektrikli bir cihaza veya prize temas etmiş",
      "Kablo veya priz erimiş, plastik deforme olmuş",
      "Tüm daire enerjisiz kaldı ve komşularda kesinti yok",
    ],
    notUrgent: [
      "Tek bir prizin çalışmaması",
      "Bir avizenin yanmaması",
      "Arada bir atan ama kolay kalkan sigorta",
      "Cızırtısız çalışan eski bir anahtar",
    ],
    firstAid: {
      title: "Biz gelene kadar",
      steps: [
        "Yanık kokusu veya kıvılcım varsa ana şalteri indirin",
        "Su temas etmiş bir prize veya cihaza kesinlikle dokunmayın",
        "Atan sigortayı ikiden fazla kaldırmayı denemeyin",
        "Hangi cihaz çalışırken olduğunu not edin, tespiti hızlandırır",
        "Islak zeminde elektrikli cihazla işlem yapmayın",
      ],
    },
    services: ["elektrik-ariza", "elektrik-panosu", "priz-tamiri", "elektrik-tesisati"],
    relatedIntent: "acil-tesisatci",
  },

  {
    slug: "acil-tesisatci",
    kind: "acil",
    title: "Acil Tesisatçı",
    h1: "Malatya acil tesisatçı",
    icon: "drop",
    group: "Su ve Tesisat",
    metaTitle: "Malatya Acil Tesisatçı | Su Baskını ve Patlak Boru",
    metaDesc:
      "Malatya'da acil tesisatçı. Patlak boru, su baskını, geri tepen gider ve alt kata sızıntı durumlarında aynı gün müdahale. {phone}",
    keywords: ["Malatya acil tesisatçı", "acil su tesisatçısı", "patlak boru Malatya", "su baskını müdahale"],
    lead:
      "Patlak boru, su baskını veya alt kata sızıntı; bunlar her geçen dakika zararı büyüten durumlar. Su kesme noktasını bilmek, ilk beş dakikada yapılacak en değerli şey.",
    urgent: [
      "Boru patladı, su akıyor",
      "Alt komşunun tavanına su geçiyor",
      "Gider geri tepiyor, su yükseliyor",
      "Bodrumu su basıyor",
      "Kombi veya tesisat basıncı hızla düşüyor",
      "Kışın donan hatta çözülme başladı ve sızıntı var",
    ],
    notUrgent: [
      "Damlayan tek bir musluk",
      "Yavaş çeken lavabo",
      "Akan rezervuar",
      "Peteğin altının soğuk kalması",
    ],
    firstAid: {
      title: "Biz gelene kadar",
      steps: [
        "Daire giriş vanasını kapatın; yerini bilmiyorsanız kolon vanasını arayın",
        "Elektrikli cihazlara su ulaştıysa önce ana şalteri indirin",
        "Alt kattaki komşuyu haberdar edin",
        "Su birikintisinin üzerinden elektrikli alet taşımayın",
        "Kombi varsa kapatın ve dolum vanasını kapalı tutun",
      ],
    },
    services: ["sihhi-tesisat", "su-kacagi-tespiti", "tikali-gider-acma", "hidrofor-tamiri"],
    relatedIntent: "acil-elektrikci",
  },

  {
    slug: "acil-su-kacagi",
    kind: "acil",
    title: "Acil Su Kaçağı Tespiti",
    h1: "Malatya acil su kaçağı tespiti",
    icon: "drop",
    group: "Su ve Tesisat",
    metaTitle: "Malatya Acil Su Kaçağı Tespiti | Aynı Gün Arama",
    metaDesc:
      "Malatya'da acil su kaçağı tespiti. Duvarda nem, alt kata sızıntı ve sayaç dönmesi durumlarında en az kırımla kaçak arama. {phone}",
    keywords: ["Malatya su kaçağı tespiti acil", "acil kaçak bulma", "alt kata su sızıyor", "duvarda nem"],
    lead:
      "Su kaçağında geçen her gün, kaçağın kendisinden çok çevresindeki hasarı büyütüyor. Alt kata sızıntı başladıysa iş artık iki daireyi birden ilgilendiriyor.",
    urgent: [
      "Alt komşunun tavanında leke büyüyor",
      "Duvar dibinde boya kabarıyor ve alan genişliyor",
      "Parke şişmeye başladı",
      "Musluklar kapalıyken sayaç dönüyor",
      "Zeminde belirli bir nokta sürekli sıcak",
    ],
    notUrgent: [
      "Su faturasında küçük bir artış",
      "Rezervuarın hafif akması",
      "Musluk contasından damlama",
    ],
    firstAid: {
      title: "Aramadan önce",
      steps: [
        "Tüm muslukları kapatıp sayacın en küçük göstergesini 10 dakika izleyin",
        "İbre dönüyorsa temiz su hattında kaçak var demektir",
        "Daire giriş vanasını kapatıp tekrar bakın; durursa kaçak daire içinde",
        "Nemin en yoğun olduğu noktayı fotoğraflayın",
        "Rezervuara gıda boyası damlatıp yarım saat bekleyin",
      ],
    },
    services: ["su-kacagi-tespiti", "sihhi-tesisat", "bina-tesisat-yenileme"],
    relatedIntent: "acil-tesisatci",
  },

  {
    slug: "en-yakin-elektrikci",
    kind: "yakin",
    title: "En Yakın Elektrikçi",
    h1: "Malatya'da en yakın elektrikçi",
    icon: "bolt",
    group: "Elektrik",
    metaTitle: "Malatya En Yakın Elektrikçi | Mahallenize Gelen Ekip",
    metaDesc:
      "Malatya'da en yakın elektrikçi arıyorsanız: Malatya'nın her yerine gidiyoruz. Merkez ilçelerde aynı gün, uzak ilçelerde planlı randevu. {phone}",
    keywords: ["Malatya en yakın elektrikçi", "yakınımdaki elektrikçi", "mahallemde elektrikçi", "Malatya elektrikçi"],
    lead:
      "\"En yakın elektrikçi\" aramasının asıl sorduğu şey mesafe değil, ne kadar çabuk gelineceği. Malatya'nın 13 ilçesinin tamamına gidiyoruz ve hangi bölgeye ne kadar sürede ulaştığımızı baştan söylüyoruz.",
    services: ["elektrik-ariza", "elektrik-tesisati", "elektrik-panosu", "avize-aydinlatma", "uzaktan-kumanda-otomasyon"],
    relatedIntent: "en-yakin-tesisatci",
  },

  {
    slug: "en-yakin-tesisatci",
    kind: "yakin",
    title: "En Yakın Tesisatçı",
    h1: "Malatya'da en yakın tesisatçı",
    icon: "pipe",
    group: "Su ve Tesisat",
    metaTitle: "Malatya En Yakın Tesisatçı | Mahallenize Gelen Ekip",
    metaDesc:
      "Malatya'da en yakın tesisatçı arıyorsanız: Malatya'nın her yerine gidiyoruz. Su kaçağı, gider açma, boru yenileme ve hidrofor işleri. {phone}",
    keywords: ["Malatya en yakın tesisatçı", "yakınımdaki tesisatçı", "mahallemde su tesisatçısı", "Malatya sucu"],
    lead:
      "Tesisat işinde önemli olan sadece gelmek değil, doğru malzemeyle gelmek. Bölgeyi ve oradaki yapı stoğunu bildiğimiz için çoğu işi tek ziyarette bitiriyoruz.",
    services: ["sihhi-tesisat", "su-kacagi-tespiti", "tikali-gider-acma", "hidrofor-pompa-sistemleri", "bina-tesisat-yenileme"],
    relatedIntent: "en-yakin-elektrikci",
  },

  {
    slug: "en-yakin-sulama-ustasi",
    kind: "yakin",
    title: "En Yakın Sulama Ustası",
    h1: "Malatya'da en yakın sulama ustası",
    icon: "leaf",
    group: "Pompa ve Sulama",
    metaTitle: "Malatya Sulama Ustası | Kuyu Pompası ve Damlama Sistemi",
    metaDesc:
      "Malatya'da sulama ustası: kuyu ve dalgıç pompa, damlama sulama, kayısı bahçesi ve sera sistemleri. Arazinize geliyoruz. {phone}",
    keywords: ["Malatya sulama ustası", "kuyu pompası ustası", "damlama sulama kurulumu", "bahçe sulama Malatya"],
    lead:
      "Sulama işi arazide biter. Kuyunun verimi, arazinin kot farkı ve enerji hattının mesafesi görülmeden doğru sistem kurulamıyor; bu yüzden önce araziye geliyoruz.",
    services: ["anahtar-teslim-sulama-sistemi", "kayisi-bahcesi-sulama", "sera-elektrik-sulama", "hidrofor-pompa-sistemleri", "uzaktan-kumanda-otomasyon"],
    relatedIntent: "en-yakin-tesisatci",
  },
];

export const getIntent = (slug) => intents.find((i) => i.slug === slug);

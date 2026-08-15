// Blog: çatı, dış cephe ve yalıtım konulu yazılar.

export const cephePosts = [
  {
    slug: "cati-akintisi-nereden-baslar",
    title: "Çatı akıntısı nereden başlar? Görünen yer ile giren yer aynı değil",
    category: "Çatı ve Cephe",
    published: "2025-09-30",
    updated: "2026-05-26",
    reading: 6,
    metaTitle: "Çatı Akıntısı Nereden Gelir? Baca, Dere ve Mahya",
    metaDesc:
      "Tavandaki leke suyun girdiği yeri göstermez. Çatıda sızıntının en sık başladığı noktalar ve doğru tespit yöntemi.",
    keywords: ["çatı akıyor", "çatı sızıntısı", "baca dibi", "çatı deresi", "mahya"],
    excerpt: "Tavandaki leke suyun girdiği yeri göstermiyor. Su, çatı altında metrelerce yol alıp en zayıf noktadan iniyor.",
    services: ["cati-yapimi", "cati-izolasyonu"],
    intro:
      "Çatı akıntılarında en sık yapılan hata, lekenin göründüğü noktanın hemen üstünü onarmak. Su, örtünün altına girdikten sonra ahşap karkas üzerinde metrelerce ilerleyip en zayıf noktadan aşağı iniyor.",
    body: [
      { h2: "En sık giriş noktaları" },
      { ul: [
        "Baca dibi ve baca yanı birleşimleri",
        "Çatı deresi (iki eğimin birleştiği oluk)",
        "Mahya kiremitleri ve harcı",
        "Çatı penceresi çevresi",
        "Anten, uydu ve güneş paneli montaj delikleri",
        "Saçak kenarı ve son sıra kiremit",
      ] },
      { p: "Bu altı noktanın dışında kalan kırık kiremit de sebep olabiliyor ama sızıntıların büyük kısmı yukarıdaki birleşim detaylarından çıkıyor." },

      { h2: "Baca dibi neden en sık sorun?" },
      { p: "Baca, çatı örtüsünü kesen bir eleman. Birleşim yerinde su geçirmez bir detay (etek/flashing) yapılması gerekiyor. Bu detay çoğu çatıda sadece harçla geçiştiriliyor." },
      { p: "Harç zamanla çatlıyor ve su içeri giriyor. Doğru çözüm metal etek ve uygun bindirmeyle detayı yeniden yapmak." },

      { h2: "Dere: en çok su taşıyan yer" },
      { p: "İki çatı eğiminin birleştiği dere, çatının en çok su taşıyan bölümü. Sac dere zamanla korozyona uğruyor ve delik açılıyor." },
      { p: "Derenin genişliği ve bindirme mesafesi yağış yoğunluğuna göre olmalı. Dar yapılmış bir dere şiddetli yağışta taşıyor." },

      { h2: "Kışın buz sarkması neyi gösterir?" },
      { p: "Saçakta buz sarkıtları, çatı yalıtımının zayıf olduğunun işareti. İç ortamdan çatıya kaçan ısı karı eritiyor, su saçağa ulaşınca donuyor." },
      { p: "Oluşan buz barajı, sonraki eriyen suyun kiremidin altına dolmasına yol açıyor. Bu, çatı akıntılarının kışa özgü sebebi ve çözümü örtü değil yalıtım." },

      { h2: "Tespit nasıl yapılır?" },
      { p: "Çatı arasına çıkıp ahşap karkas üzerindeki su izleri takip ediliyor. İzler, suyun geldiği yönü gösteriyor." },
      { p: "Çatı arası yoksa dışarıdan bölge bölge su verilerek test yapılıyor. Bu, sabırlı ama kesin sonuç veren bir yöntem." },

      { h2: "Nokta onarım mı, aktarma mı?" },
      { p: "Karkas sağlam ve sorun tek bir detaydaysa nokta onarım yeterli. Kiremitler yer yer kırık ve altyapı yorulmuşsa aktarma gerekiyor." },
      { p: "Ahşap karkasta çürüme, sehim ya da böcek zararı varsa aktarma da yetmiyor; karkas yenilemesi gerekiyor. Bu karar için karkasa çıkıp bakmamız gerekiyor." },
    ],
    faqs: [
      { q: "Sadece akıntının olduğu yeri tamir eder misiniz?", a: "Ederiz, ama önce çatıya çıkıp kaynağı buluyoruz. Nokta onarım yeterliyse onu yapıyoruz; değilse nedenini yazılı anlatıyoruz." },
      { q: "Yağmurda tespit yapılabilir mi?", a: "Yağış sırasında çatıya çıkmak güvenli değil. Ama içeriden, çatı arasında izlemek çok işe yarıyor; mümkünse yağış sırasında bir gözlem yapılmasını istiyoruz." },
      { q: "Çatı aktarma ne kadar sürer?", a: "Ortalama bir apartman çatısında 5–10 iş günü. Yağış beklenen günlerde örtü sökülmüyor, süre buna göre planlanıyor." },
    ],
    related: ["cati-yalitimi-nasil-yapilir", "oluk-neden-tasar", "teras-su-yalitimi-adimlari"],
  },

  {
    slug: "cati-yalitimi-nasil-yapilir",
    title: "Çatı yalıtımı: çatı arasına mı, eğim boyunca mı?",
    category: "Çatı ve Cephe",
    published: "2025-10-14",
    updated: "2026-06-02",
    reading: 5,
    metaTitle: "Çatı Yalıtımı Nasıl Yapılır? İki Yöntem ve Havalandırma",
    metaDesc:
      "Çatı arası kullanılıyorsa eğim boyunca, kullanılmıyorsa döşemeye yalıtım. Kalınlık, buhar kesici ve havalandırma detayları.",
    keywords: ["çatı yalıtımı", "çatı arası yalıtım", "taş yünü", "buhar kesici", "çatı havalandırma"],
    excerpt: "Isının önemli kısmı çatıdan kaçıyor. Doğru yöntem, çatı arasının kullanılıp kullanılmadığına göre değişiyor.",
    services: ["cati-izolasyonu", "cati-yapimi", "dis-cephe-mantolama"],
    intro:
      "Bir binada ısı kaybının gözle görülür bir kısmı çatıdan oluyor. Çatı yalıtımı, dış cephe yalıtımına göre daha ucuz ve daha kolay uygulanabilir olduğu için genelde en hızlı geri dönen kalem.",
    body: [
      { h2: "Çatı arası kullanılmıyorsa" },
      { p: "En ekonomik yöntem yalıtımı çatı arası döşemesine sermek. Böylece ısıtılan hacim ile soğuk çatı arası birbirinden ayrılıyor." },
      { p: "Uygulama basit: taş yünü veya cam yünü şilteler döşemenin üzerine seriliyor. Üzerine basılacaksa yürüme yolu bırakılıyor." },

      { h2: "Çatı arası kullanılıyorsa" },
      { p: "Yalıtım eğim boyunca, mertekler arasına ve örtünün altına uygulanıyor. Bu daha zahmetli ve daha pahalı ama çatı arasını yaşanabilir kılıyor." },
      { p: "Bu uygulamada buhar kesici membran, yalıtımın iç tarafına geliyor. Yanlış tarafa konan buhar kesici, yoğuşmayı yalıtımın içinde hapsediyor." },

      { h2: "Havalandırma boşluğu" },
      { p: "Yalıtım ile örtü arasında hava geçişi bırakılmalı. Nefes almayan çatıda yoğuşma oluyor ve ahşap karkas zamanla çürüyor." },
      { p: "Bu boşluk saçaktan girip mahyadan çıkacak şekilde tasarlanıyor. Yalıtım yapılırken en sık atlanan detay bu." },

      { h2: "Kalınlık ne olmalı?" },
      { p: "Kalınlık iklim bölgesine göre belirleniyor. Malatya için tipik uygulama, çatı arası döşemesinde 10–15 cm aralığında." },
      { p: "Kalınlıktan kısmak, işin geri kalanını da anlamsızlaştırıyor. İşçilik aynı, malzeme farkı sınırlı; burada tasarruf etmek mantıklı değil." },

      { h2: "Malzeme seçimi" },
      { ul: [
        "Taş yünü: yangın dayanımı yüksek, ses yalıtımı iyi",
        "Cam yünü: hafif, ekonomik, uygulaması kolay",
        "XPS/EPS levha: nem dayanımı iyi, teras çatıda kullanılır",
        "Püskürtme poliüretan: karmaşık geometride avantajlı, pahalı",
      ] },
      { p: "Eğik çatıda çoğunlukla taş yünü veya cam yünü, teras çatıda XPS tercih ediliyor." },

      { h2: "Yalıtımla birlikte yapılacaklar" },
      { p: "İskele veya çatıya çıkma zaten gerekiyorsa oluk kontrolü, baca dibi detayı ve kırık kiremit değişimini aynı anda yapmak mantıklı." },
      { p: "Ayrıca çatı arasındaki elektrik tesisatı gözden geçirilmeli; yalıtım malzemesi kabloların üstünü örtüyor ve ısınan bir hat fark edilmiyor." },
    ],
    faqs: [
      { q: "Çatı yalıtımı ne kadar sürer?", a: "Çatı arası döşemesine serme yönteminde ortalama bir çatıda 1–2 gün. Eğim boyunca uygulama 4–7 güne çıkıyor." },
      { q: "Yalıtım yaptım ama yine soğuk, neden?", a: "En sık sebep havalandırma boşluğunun bırakılmaması ve buhar kesicinin yanlış tarafa konması. İkisi de yalıtımın performansını düşürüyor." },
      { q: "Apartmanda çatı yalıtımı kararı nasıl alınır?", a: "Ortak alan kapsamına giren bir iş; yönetim üzerinden karar alınıyor. Kat maliki başına düşen tutarı hesaplayıp teklifte gösteriyoruz." },
    ],
    related: ["cati-akintisi-nereden-baslar", "mantolama-ne-kazandirir", "dogalgaz-faturasi-neden-yuksek"],
  },

  {
    slug: "mantolama-ne-kazandirir",
    title: "Mantolama gerçekte ne kazandırır? Detaylar belirleyici",
    category: "Çatı ve Cephe",
    published: "2025-11-04",
    updated: "2026-06-03",
    reading: 6,
    metaTitle: "Mantolama Ne Kazandırır? Kalınlık ve Isı Köprüleri",
    metaDesc:
      "Mantolamada levha kalınlığı, ısı köprüleri ve detay çözümleri. Yapılan işin beklenen tasarrufu vermemesinin sebepleri.",
    keywords: ["mantolama", "dış cephe yalıtım", "ısı köprüsü", "mantolama kalınlığı", "apartman mantolama"],
    excerpt: "Mantolamada işin yarısı levha, yarısı detay. Pencere kenarı ve balkon birleşimi atlanırsa beklenen tasarruf gelmiyor.",
    services: ["dis-cephe-mantolama", "cati-izolasyonu", "dis-cephe-boya"],
    intro:
      "Mantolama yaptırıp \"beklediğim tasarrufu görmedim\" diyenlerin şikâyeti çoğu zaman haklı. Sebep ise malzeme değil: ısı köprüleri ve detay eksikleri.",
    body: [
      { h2: "Isı köprüsü nedir?" },
      { p: "Yalıtımın kesintiye uğradığı noktalara ısı köprüsü deniyor. Isı, en az direnç gösteren yoldan gitmeyi tercih ettiği için bu noktalardan yoğun biçimde kaçıyor." },
      { p: "Yalıtımı yapılmış bir binada küfün hâlâ köşelerde çıkmasının sebebi bu. O nokta çevresine göre soğuk kaldığı için nem orada yoğuşuyor." },

      { h2: "En sık ısı köprüleri" },
      { ul: [
        "Balkon döşemesi (bina içinden dışarı uzanan beton plak)",
        "Pencere ve kapı kenarları",
        "Denizlik altları",
        "Çatı saçağı ve parapet",
        "Bodrum-zemin birleşimi",
        "Kolon ve kiriş hizaları (levha düzgün oturmadıysa)",
      ] },
      { p: "Bu noktalara özel detay uygulanmazsa, cephenin geri kalanına yapılan yalıtımın etkisi hissedilir ölçüde azalıyor." },

      { h2: "Detay çözümleri" },
      { p: "Pencere kenarlarına ince levha (fitil) uygulanıyor, denizlik altına damlalık ve yalıtım devam ettiriliyor, köşelere profil konuyor." },
      { p: "Balkon döşemesinde yalıtım alt ve üst yüzeyden mümkün olduğunca devam ettiriliyor. Tamamen çözmek zor ama etkisini azaltmak mümkün." },

      { h2: "Kalınlık kararı" },
      { p: "Kalınlık iklim bölgesine ve duvar yapısına göre belirleniyor. Malatya için tipik uygulama 5–8 cm aralığında." },
      { p: "İnce levha maliyeti düşürüyor ama tasarrufu da düşürüyor. İşçilik ve iskele maliyeti aynı kaldığı için ince levha tercih etmek çoğu zaman yanlış hesap." },

      { h2: "Uygulama kalitesi" },
      { p: "Levhalar şaşırtmalı (staggered) dizilmeli, aralarında boşluk kalmamalı, dübel sayısı yeterli olmalı ve file sıva içinde tam gömülmeli." },
      { p: "Levha araları boş bırakıldığında o boşluklar hava kanalı gibi çalışıyor. Gözle görülmeyen ama performansı doğrudan düşüren bir kusur." },

      { h2: "Tek daireye mantolama" },
      { p: "Yapılabiliyor ama verim binanın tamamına yapıldığındaki kadar olmuyor; komşu duvarlardan ısı köprüsü devam ediyor." },
      { p: "Yine de dış duvarı çok olan köşe ve üst kat dairelerinde açık fark yaratıyor. Bina kararı çıkmıyorsa değerlendirilebilir bir seçenek." },
    ],
    faqs: [
      { q: "Mantolama kendini kaç yılda amorti eder?", a: "Mevcut duruma ve ısıtma giderine bağlı. Yalıtımsız bir binada tipik olarak 5–8 yıl aralığı konuşuluyor. Keşifte binanıza göre gerçekçi bir aralık veriyoruz; kesin rakam keşiften sonra netleşiyor." },
      { q: "Mantolama nem sorunu yaratır mı?", a: "Doğru uygulandığında tam tersine azaltıyor; duvar yüzey sıcaklığı yükseldiği için yoğuşma azalıyor. Nem sorunu, detayların atlandığı ve havalandırmanın yetersiz olduğu binalarda çıkıyor." },
      { q: "Ne kadar sürer?", a: "5 katlı bir apartmanın cephesi 3–5 hafta. İskele kurulumu ve hava koşulları süreyi etkiliyor; yağışta sıva ve boya yapılmıyor." },
    ],
    related: ["cati-yalitimi-nasil-yapilir", "cephe-boyasi-ne-zaman-yenilenmeli", "dogalgaz-faturasi-neden-yuksek"],
  },

  {
    slug: "teras-su-yalitimi-adimlari",
    title: "Teras su yalıtımı: adım adım ve sık yapılan hatalar",
    category: "Çatı ve Cephe",
    published: "2025-11-18",
    updated: "2026-06-04",
    reading: 6,
    metaTitle: "Teras Su Yalıtımı Nasıl Yapılır? Adımlar ve Testler",
    metaDesc:
      "Eğim, membran veya sürme yalıtım, parapet detayı, gider çözümü ve 24 saat su testi. Teras yalıtımında sıralama ve hatalar.",
    keywords: ["teras su yalıtımı", "teras izolasyon", "membran", "parapet detayı", "su testi"],
    excerpt: "Terasta su, yüzeyin ortasından değil kenarlardan giriyor. Parapet dibi ve gider çevresi işin en kritik iki noktası.",
    services: ["cati-izolasyonu", "seramik-fayans", "cati-yapimi"],
    intro:
      "Teras yalıtımı yapılmış ama hâlâ akıyorsa, sorun neredeyse hep aynı yerlerde: duvar-döşeme birleşimi, gider çevresi ve parapet dibi. Yüzeyin ortası nadiren sorun çıkarıyor.",
    body: [
      { h2: "Adım 1: Söküm ve yüzey hazırlığı" },
      { p: "Mevcut kaplama ve gevşek şap sökülüyor, yüzey temizleniyor. Kırık ve boşluklu alanlar tamir ediliyor." },
      { p: "Bu aşamada mevcut eğimin ölçülmesi gerekiyor. Suyun gidere yönelip yönelmediği burada belirleniyor." },

      { h2: "Adım 2: Eğim düzeltme" },
      { p: "Eğimi olmayan bir yüzeyde su birikiyor ve en küçük zayıflıktan içeri giriyor. Sadece yalıtım yapıp eğimi düzeltmemek, sorunu ertelemek." },
      { p: "Eğim betonu gidere doğru dökülüyor. Kot yükseleceği için kapı eşiği ve parapet yüksekliği kontrol ediliyor." },

      { h2: "Adım 3: Yalıtım uygulaması" },
      { p: "Geniş ve düz teraslarda membran, detaylı köşeleri çok olan ve üstüne seramik gelecek yüzeylerde sürme yalıtım tercih ediliyor." },
      { p: "Yalıtım duvara doğru 20–30 cm yukarı taşınıyor ve köşelere takviye bant uygulanıyor. Bu, işin en kritik detayı." },

      { h2: "Adım 4: Gider ve parapet" },
      { p: "Gider çevresine özel manşet uygulanıyor; yalıtım giderin içine doğru devam ettiriliyor. Su, giderin kenarından sızmaya en yatkın." },
      { p: "Parapet üstündeki harpuşta (kapak) da su geçirmez olmalı ve damlalıklı olmalı. Harpuştasız parapet, duvarın içine su alıyor." },

      { h2: "Adım 5: Su testi" },
      { p: "Gider tıkanıp alan suyla dolduruluyor ve 24 saat bekleniyor. Alt kat ve duvarlar kontrol ediliyor." },
      { p: "Test geçmeden kaplamaya başlanmıyor. Testin fotoğrafını dosyaya koyup size veriyoruz." },

      { h2: "Sık yapılan hatalar" },
      { ul: [
        "Yalıtımı duvara taşımadan sadece zemine uygulamak",
        "Köşelere takviye bant koymamak",
        "Eğimi düzeltmeden yalıtım yapmak",
        "Gider manşeti kullanmamak",
        "Su testi yapmadan seramiğe geçmek",
        "Membran üstüne doğrudan seramik yapıştırmaya çalışmak",
      ] },
    ],
    faqs: [
      { q: "Balkonda sadece seramik değiştirmek yeterli mi?", a: "Genelde yetmiyor. Su seramikten değil, altındaki yalıtımsız katmandan geçiyor. Seramiği zaten söküyorsanız yalıtımın ek maliyeti sınırlı." },
      { q: "Kışın yapılabilir mi?", a: "Sıcaklık ürünün uygulama aralığının altına düştüğünde yapılmıyor. Acil bir sızıntıda geçici çözüm uygulayıp kalıcı işi uygun havaya alıyoruz." },
      { q: "Ne kadar sürer?", a: "20 m² bir terasta söküm, eğim, yalıtım, test ve seramikle birlikte 7–12 iş günü. Kuruma ve test süreleri buna dahil." },
    ],
    related: ["cati-akintisi-nereden-baslar", "banyo-tadilatinda-su-yalitimi", "balkon-yenilemede-sira"],
  },

  {
    slug: "oluk-neden-tasar",
    title: "Yağmur oluğu neden taşar? Kesit, eğim ve tıkanma",
    category: "Çatı ve Cephe",
    published: "2025-12-16",
    updated: "2026-06-05",
    reading: 4,
    metaTitle: "Yağmur Oluğu Neden Taşar? Kesit ve İniş Borusu",
    metaDesc:
      "Taşan oluk suyu duvara ve temele indiriyor. Kesit hesabı, eğim, iniş borusu sayısı ve temizlik sıklığı.",
    keywords: ["yağmur oluğu", "oluk taşıyor", "iniş borusu", "çatı oluğu temizliği"],
    excerpt: "Taşan oluk sadece rahatsızlık değil; su duvara ve temele iniyor, donma döngüsünde cephede kalıcı hasar bırakıyor.",
    services: ["cati-yapimi", "dis-cephe-boya", "bahce-cevre-duzenleme"],
    intro:
      "Oluk taşması küçük bir sorun gibi görünüyor ama sonucu büyük: su cepheye ve bina temeline iniyor. Donma-çözülme döngüsünde bu, sıva dökülmesi ve bodrum rutubeti olarak geri dönüyor.",
    body: [
      { h2: "1. Kesit yetersiz" },
      { p: "Oluğun genişliği ve derinliği, çatının topladığı su miktarına göre seçilmeli. Geniş çatıya dar oluk takıldığında şiddetli yağışta taşıyor." },
      { p: "Aynı şekilde iniş borusu sayısı da yeterli olmalı. Tek iniş borusuyla drene edilen uzun bir oluk, ortada birikme yapıyor." },

      { h2: "2. Eğim yok ya da ters" },
      { p: "Oluk iniş borusuna doğru hafif eğimli monte edilmeli. Eğimsiz olukta su duruyor, çamur ve yaprak birikiyor." },
      { p: "Zamanla oluk askıları gevşediğinde eğim bozuluyor. Yıllar içinde ortası çöken oluklar sık görülüyor." },

      { h2: "3. Tıkanma" },
      { p: "Yaprak, kuş yuvası ve çatı yosunu en sık tıkanma sebepleri. İniş borusunun ağzı tıkandığında oluk tamamen dolup taşıyor." },
      { p: "Sonbaharda bir kez temizlik çoğu binada yeterli. Ağaç altındaki binalarda yılda iki kez gerekebiliyor." },

      { h2: "4. Bağlantı ve ek yerleri" },
      { p: "Oluk parçalarının birleşim yerleri zamanla açılıyor ve damlatmaya başlıyor. Bu, taşma gibi görünmese de duvara su indiriyor." },
      { p: "Ek yerlerinin conta ve mastikleri yenilenerek çözülüyor. Korozyona uğramış parçalarda ise değişim gerekiyor." },

      { h2: "İniş borusu nereye boşalmalı?" },
      { p: "İniş borusu doğrudan bina dibine boşalmamalı. Su temele yöneliyor ve bodrumda rutubet yapıyor." },
      { p: "Doğru çözüm boruyu yağmur suyu hattına bağlamak ya da en azından bina dibinden uzaklaştıran bir kanal yapmak. Bahçe düzenlemesi varsa drenaj hattına bağlanıyor." },

      { h2: "Kar tutucu da düşünülmeli" },
      { p: "Kar kütlesinin toplu kayması olukları söküyor ve altından geçenler için tehlike yaratıyor. Saçak üstüne kar tutucu koymak gerekiyor." },
      { p: "Malatya kışında bu ihmal edilmemesi gereken bir detay, özellikle yola ve girişe bakan çatılarda." },
    ],
    faqs: [
      { q: "Oluk temizliği ne sıklıkla yapılmalı?", a: "Sonbaharda bir kez çoğu binada yeterli. Ağaç altındaki binalarda ilkbaharda ikinci bir temizlik gerekebiliyor." },
      { q: "Oluk değişimi mi tamir mi?", a: "Ek yerleri açılmış ve askıları gevşemiş oluklarda tamir yeterli olabiliyor. Korozyon ilerlemiş ve delikler açılmışsa değişim daha mantıklı." },
      { q: "PVC mi metal mi?", a: "PVC daha ucuz ve korozyona uğramıyor ama UV ile zamanla kırılganlaşıyor. Metal (galvaniz, alüminyum) daha uzun ömürlü. Bina yüksekliği ve bütçeye göre öneriyoruz." },
    ],
    related: ["cati-akintisi-nereden-baslar", "cephe-boyasi-ne-zaman-yenilenmeli", "bahce-duzenlemesinde-sira"],
  },

  {
    slug: "cephe-boyasi-ne-zaman-yenilenmeli",
    title: "Dış cephe boyası ne zaman yenilenmeli?",
    category: "Çatı ve Cephe",
    published: "2026-01-13",
    updated: "2026-06-06",
    reading: 5,
    metaTitle: "Dış Cephe Boyası Ne Zaman Yenilenir? Belirtiler",
    metaDesc:
      "Solma, kabarma, çatlak ve yosunlanma. Cephe boyasının ömrünü belirleyen etkenler ve yenileme zamanının işaretleri.",
    keywords: ["dış cephe boyası", "cephe yenileme", "cephe çatlağı", "silikonlu boya"],
    excerpt: "Cephe boyası estetik değil koruma katmanı. Ömrünü doldurduğunda arkadaki sıva ve duvar zarar görmeye başlıyor.",
    services: ["dis-cephe-boya", "dis-cephe-mantolama", "apartman-ortak-alan-tadilati"],
    intro:
      "Dış cephe boyası, binayı güneşe, yağmura ve donmaya karşı koruyan bir katman. Ömrünü doldurduğunda mesele görüntü olmaktan çıkıp koruma sorununa dönüşüyor.",
    body: [
      { h2: "Yenileme zamanının işaretleri" },
      { ul: [
        "Renk epeyce solmuş, cephe alacalı görünüyor",
        "Boya kabarıyor, elle sürtünce toz bırakıyor (tebeşirlenme)",
        "Saç çatlakları oluşmuş",
        "Kuzey cephesinde yosun ve küf tabakası var",
        "Sıva yer yer dökülmüş",
        "Denizlik altlarında koyu su izleri var",
      ] },
      { p: "Bu belirtilerden üçü ve fazlası varsa yenileme zamanı gelmiş demektir." },

      { h2: "Cephe boyası kaç yıl dayanır?" },
      { p: "Doğru hazırlık ve kaliteli silikonlu boyayla 8–12 yıl. Güneş alan güney ve batı cepheleri daha erken soluyor, kuzey cephesi daha uzun dayanıyor ama yosunlanıyor." },
      { p: "Boyanın markası kadar altındaki hazırlık belirleyici. Temizlenmemiş bir yüzeye atılan en iyi boya bile birkaç yılda kalkıyor." },

      { h2: "Çatlakları kapatmadan boya atılmaz" },
      { p: "Saç çatlakları boyanın altından çıkıyor ve kısa sürede tekrar görünür oluyor. Önce açılıp tamir harcı ve file ile onarılmalı." },
      { p: "Genişleyen ve derinleşen çatlaklar ise yapısal olabilir. Bu durumda boya değil, önce nedenin araştırılması gerekiyor." },

      { h2: "Temizlik olmadan boya tutmaz" },
      { p: "Cephede yıllar içinde toz, is ve yosun birikiyor. Bu tabakanın üzerine atılan boya yüzeye değil kire yapışıyor." },
      { p: "Yüksek basınçlı yıkama ve sonrasında kuruma süresi, işin atlanmaması gereken ilk adımı. Teklifte ayrı kalem olarak yazılmalı." },

      { h2: "Mantolama düşünüyorsanız" },
      { p: "Mantolama gündemdeyse boyayı ona ertelemek daha mantıklı. Mantolama zaten üstüne dekoratif kaplama ve boya içeriyor." },
      { p: "Sadece boya yaptırmak görüntüyü yeniliyor ama ısı tasarrufu sağlamıyor. İskele bir kez kurulurken ikisini birlikte planlamak ciddi tasarruf." },

      { h2: "Hangi mevsimde?" },
      { p: "İlkbahar ve sonbahar en uygun. Çok sıcakta boya hızlı kuruyup iz bırakıyor, donma riski olan günlerde hiç uygulanmıyor." },
      { p: "Yağış beklenen günlerde sıva ve boya yapılmıyor; program hava durumuna göre esnetiliyor." },
    ],
    faqs: [
      { q: "Sadece bir cepheyi boyatabilir miyiz?", a: "Boyatabilirsiniz ama renk farkı oluşuyor; eski boya solduğu için yeni boya göze batıyor. Genelde tüm cephenin birlikte yapılması öneriliyor." },
      { q: "Korkuluk ve doğrama boyası dahil mi?", a: "Ayrı kalem olarak yazıyoruz. İskele kuruluyken yapılması hem ucuz hem mantıklı; teklifte seçenek olarak sunuyoruz." },
      { q: "Kararı apartman nasıl alır?", a: "Ortak alan kapsamında yönetim üzerinden karar alınıyor. Kat maliki başına düşen tutarı hesaplayıp teklifte gösteriyoruz." },
    ],
    related: ["mantolama-ne-kazandirir", "apartman-ortak-alan-yenileme", "oluk-neden-tasar"],
  },

  {
    slug: "balkon-yenilemede-sira",
    title: "Balkon yenilemede doğru sıra",
    category: "Çatı ve Cephe",
    published: "2026-02-10",
    updated: "2026-06-07",
    reading: 5,
    metaTitle: "Balkon Yenileme: Yalıtım, Eğim ve Kaplama Sırası",
    metaDesc:
      "Balkonda sadece seramik değiştirmek neden yetmez? Söküm, eğim, su yalıtımı, kaplama ve korkuluk sırası.",
    keywords: ["balkon yenileme", "balkon su yalıtımı", "balkon seramiği", "balkon damlıyor"],
    excerpt: "Balkonda seramiği değiştirip yalıtımı atlamak, iki yıl sonra aynı işi tekrar yaptırmak demek.",
    services: ["cati-izolasyonu", "seramik-fayans", "demir-korkuluk"],
    intro:
      "Balkon, evin en zorlu koşullara maruz kalan bölümü: güneş, yağmur, donma-çözülme ve mekanik yük. Yenileme yaparken sıra bozulduğunda sonuç birkaç yılda geri geliyor.",
    body: [
      { h2: "1. Söküm ve durum tespiti" },
      { p: "Eski kaplama ve gevşek şap sökülüyor. Beton yüzeyde donatı görünüyorsa (paspayı yetersizse) önce onarım gerekiyor." },
      { p: "Alt komşuda leke varsa sızıntının nereden geldiği bu aşamada belirleniyor. Genelde parapet dibi ya da gider çevresi çıkıyor." },

      { h2: "2. Eğim" },
      { p: "Su, balkon kenarına ya da gidere doğru yönelmeli. Eğimsiz balkonda su birikiyor ve donduğunda kaplamayı kaldırıyor." },
      { p: "Eğim düzeltmesi kot yükselttiği için kapı eşiği ve korkuluk yüksekliği kontrol ediliyor." },

      { h2: "3. Su yalıtımı" },
      { p: "Sürme yalıtım, zemine ve parapet duvarına 20–30 cm yukarı uygulanıyor. Köşelere takviye bant konuyor." },
      { p: "Kapı eşiği altı özellikle kritik; su buradan içeri girdiğinde salon parkesinde kabarma olarak görünüyor." },

      { h2: "4. Kaplama" },
      { p: "Dış mekân için donma-çözülme dayanımı olan seramik kullanılmalı. İç mekân seramiği balkonda birkaç kışta çatlıyor." },
      { p: "Kaymaz yüzey sınıfı seçmek, ıslandığında güvenlik açısından önemli. Derz malzemesi de dış mekâna uygun olmalı." },

      { h2: "5. Korkuluk ve parapet" },
      { p: "Korkuluk ayakları su yalıtımını delip geçiyorsa o noktalar özel olarak sızdırmaz hâle getirilmeli. Sık atlanan bir detay." },
      { p: "Parapet üstüne damlalıklı harpuşta konması, duvarın içine su almasını önlüyor." },

      { h2: "6. Su testi" },
      { p: "Kaplamadan önce 24 saat su testi yapılıyor. Alt kat ve kapı eşiği kontrol ediliyor." },
      { p: "Test geçmeden seramiğe başlanmıyor; testin kaydı size veriliyor." },
    ],
    faqs: [
      { q: "Balkonu kapatmak istiyorum, yalıtım gerekli mi?", a: "Gerekli. Kapalı balkonda da yoğuşma suyu ve temizlik suyu var. Ayrıca kapatma sistemi tam sızdırmaz değil; yağmur girebiliyor." },
      { q: "Balkon kaç günde biter?", a: "10 m² bir balkonda söküm, eğim, yalıtım, test ve seramikle 6–9 iş günü." },
      { q: "Korkuluğu da yeniliyor musunuz?", a: "Yeniliyoruz. Balkon açıkken korkuluk değişimi ya da boyası yapmak en uygun zaman; ayrı gelmeye gerek kalmıyor." },
    ],
    related: ["teras-su-yalitimi-adimlari", "seramik-mi-parke-mi", "demir-isleri-neden-paslanir"],
  },

  {
    slug: "demir-isleri-neden-paslanir",
    title: "Korkuluk ve demir işleri neden paslanır?",
    category: "Çatı ve Cephe",
    published: "2026-03-10",
    updated: "2026-06-08",
    reading: 4,
    metaTitle: "Demir Korkuluk Neden Paslanır? Yüzey İşlemi",
    metaDesc:
      "Demir işlerinin ömrünü belirleyen şey kalınlık değil yüzey işlemi. Kaynak temizliği, antipas, boya ve galvaniz karşılaştırması.",
    keywords: ["demir korkuluk", "korkuluk paslanması", "antipas", "galvaniz kaplama", "ferforje"],
    excerpt: "Demirin ömrünü kalınlığı değil yüzey işlemi belirliyor. Dört adımı atlayan boya iki kışta kalkıyor.",
    services: ["demir-korkuluk", "dis-cephe-boya", "bahce-cevre-duzenleme"],
    intro:
      "Paslanan bir korkuluğa bakıp \"kalınlık az tutulmuş\" denir genelde. Oysa asıl sebep neredeyse hep yüzey hazırlığında: kaynak sonrası temizlik, yağ alma ve antipas.",
    body: [
      { h2: "Dört adım" },
      { ol: [
        "Kaynak cürufunun temizlenmesi ve taşlama",
        "Yağ ve kir alma",
        "Antipas astar (uygun kalınlıkta, iki kat)",
        "Son kat boya (dış mekâna uygun ürün)",
      ] },
      { p: "Bu dört adımdan biri atlandığında boya metale değil kire ya da cürufa yapışıyor. Sonuç birkaç kışta kabarma ve pas." },

      { h2: "Kaynak noktaları neden önce paslanır?" },
      { p: "Kaynak sırasında oluşan cüruf ve ısıl işlem, metal yüzeyi kimyasal olarak değiştiriyor. Temizlenmezse pas hep buradan başlıyor." },
      { p: "Kaynak dikişlerinin taşlanıp düzgünleştirilmesi hem estetik hem koruma açısından gerekli. Pürüzlü yüzeyde boya kalınlığı eşit olmuyor." },

      { h2: "Galvaniz: bakım istemeyen çözüm" },
      { p: "Sıcak daldırma galvaniz, çeliği çinko tabakasıyla kaplıyor. Maliyeti yüksek ama uzun yıllar bakım gerektirmiyor." },
      { p: "Dış mekânda, özellikle bahçe kapısı ve yüksek nem olan yerlerde galvaniz mantıklı bir yatırım. Üzerine boya da yapılabiliyor." },

      { h2: "Boya seçimi" },
      { p: "İç mekân boyası dış mekânda kullanılmamalı. UV dayanımlı, dış mekâna uygun ürünler gerekiyor." },
      { p: "Elektrostatik toz boya, fırınlanmış olduğu için dayanımı yüksek. Atölyede uygulanabilen bu yöntem, yerinde boyamaya göre çok daha uzun ömürlü." },

      { h2: "Mevcut korkuluğu kurtarmak" },
      { p: "Kesiti incelmemiş, pas delik açmamış korkuluklar kurtarılabiliyor: pas temizliği, taşlama, antipas ve son kat." },
      { p: "Pas metali delmişse ya da kesiti gözle görülür ölçüde incelttiyse boyama çözüm değil. Öyle bir durumda parça değişimi ya da yenileme gerekiyor." },

      { h2: "Güvenlik ölçüleri" },
      { p: "Bakım sırasında korkuluğun yüksekliği ve dikmeler arasındaki boşluk da gözden geçirilmeli. Özellikle çocuklu evlerde kritik." },
      { p: "Yatay elemanlı korkuluklar tırmanmaya elverişli oluyor; dikey dikme öneriyoruz. Ayak bağlantılarının sağlamlığı da kontrol ediliyor." },
    ],
    faqs: [
      { q: "Korkuluk boyası kaç yılda bir yenilenmeli?", a: "Dış mekânda 4–7 yılda bir. Deniz kenarı olmayan Malatya koşullarında doğru hazırlıkla bu süre uzuyor." },
      { q: "Galvaniz mi boya mı?", a: "Uzun ömür ve bakımsızlık isteniyorsa galvaniz. Renk esnekliği ve düşük ilk maliyet isteniyorsa boya. İkisinin maliyetini yan yana veriyoruz." },
      { q: "Balkon korkuluğunu tek başına değiştirebilir miyim?", a: "Değiştirebilirsiniz ama bina cephesinde görüntü bütünlüğü açısından yönetimle konuşmakta fayda var. Bazı binalarda korkuluk tipi ortak karara bağlı." },
    ],
    related: ["balkon-yenilemede-sira", "cephe-boyasi-ne-zaman-yenilenmeli", "bahce-duzenlemesinde-sira"],
  },

  {
    slug: "cepheden-nem-alan-duvar",
    title: "Duvar içeriden nem alıyor: sebebi dışarıda mı?",
    category: "Çatı ve Cephe",
    published: "2026-04-07",
    updated: "2026-06-09",
    reading: 5,
    metaTitle: "Duvarda Nem ve Küf: Sebep Dışarıda mı İçeride mi?",
    metaDesc:
      "Küf, kabarma ve nem lekesi; dış cepheden mi, tesisattan mı, yoğuşmadan mı? Ayırt etme yöntemi ve çözümler.",
    keywords: ["duvarda nem", "küf", "yoğuşma", "cepheden nem", "rutubet"],
    excerpt: "Nemin üç farklı kaynağı var ve üçünün çözümü farklı. Boyamadan önce hangisi olduğunu bilmek gerekiyor.",
    services: ["dis-cephe-mantolama", "su-kacagi-tespiti", "boya-badana"],
    intro:
      "Duvardaki nem lekesini boyayla kapatmak, sorunu birkaç ay ertelemek demek. Önce kaynağın belirlenmesi gerekiyor ve üç ayrı ihtimal var.",
    body: [
      { h2: "İhtimal 1: Yoğuşma" },
      { p: "İç ortamdaki nem, soğuk duvar yüzeyinde yoğuşuyor. Belirtisi tipik: dış duvarın iç yüzünde, özellikle köşelerde ve mobilya arkasında küf." },
      { p: "Çözüm iki yönlü: duvar yüzey sıcaklığını yükseltmek (yalıtım) ve iç nemi azaltmak (havalandırma). Sadece boyamak sorunu çözmüyor." },

      { h2: "İhtimal 2: Dış cepheden su girişi" },
      { p: "Cephede çatlak, dökülmüş sıva, tıkalı oluk ya da bozuk denizlik varsa yağmur suyu duvara giriyor. Belirtisi yağış sonrası artan, kuru havada azalan nem." },
      { p: "Çözüm dış cephede: çatlak onarımı, denizlik damlalığı, oluk düzenlemesi ve cephe boyası. İç taraftan yapılan hiçbir işlem kalıcı olmuyor." },

      { h2: "İhtimal 3: Tesisat kaçağı" },
      { p: "Su ya da ısıtma hattından sızıntı varsa nem belirli bir noktadan yayılıyor ve hava durumundan bağımsız devam ediyor." },
      { p: "Termal kamera ve akustik dinleme ile kaçak noktası bulunuyor. Doğru tespit, duvarın en az yerden açılmasını sağlıyor." },

      { h2: "Ayırt etme yöntemi" },
      { ul: [
        "Yağış sonrası artıyorsa → dış cephe",
        "Hava durumundan bağımsız, sabit ve yayılıyorsa → tesisat",
        "Kışın ve köşelerde yoğunlaşıyorsa → yoğuşma",
        "Zeminden yukarı doğru çıkıyorsa → kapiler (temel) nem",
        "Sadece banyoya bitişik duvarda ise → banyodan sızıntı",
      ] },

      { h2: "Zeminden yükselen nem" },
      { p: "Bodrum ve zemin katta duvarın alt kısmından yukarı doğru çıkan nem, temel yalıtımının olmadığını gösteriyor." },
      { p: "Çözüm dış taraftan temel yalıtımı ve drenaj. İçeriden yapılan yalıtım geçici çözüm sağlıyor ama nemi duvarın içine hapsediyor." },

      { h2: "Onarım sırası" },
      { p: "Önce kaynak giderilir, sonra duvarın kuruması beklenir, en son sıva ve boya yapılır. Bu sıra bozulduğunda iş kısa sürede geri geliyor." },
      { p: "Kuruma süresi duvarın kalınlığına ve nem miktarına göre haftalar sürebiliyor. Aceleye getirilmemesi gereken bir bekleme." },
    ],
    faqs: [
      { q: "Küf boyasıyla çözülür mü?", a: "Küf boyası yüzeyde küf oluşumunu geciktiriyor ama nemin kaynağını gidermiyor. Kaynak çözülmeden yapılan uygulama kalıcı olmuyor." },
      { q: "Havalandırma gerçekten fark eder mi?", a: "Ediyor. Günde birkaç kez kısa süreli tam açık havalandırma, sürekli aralık bırakmaktan daha etkili ve daha az ısı kaybettiriyor." },
      { q: "Nem ölçümü yapıyor musunuz?", a: "Yapıyoruz. Yüzey nem ölçümü ve termal kamera ile kaynağı belirliyoruz; boyamadan önce kuruluk teyit ediliyor." },
    ],
    related: ["mantolama-ne-kazandirir", "su-kacagi-nasil-bulunur-blog", "boya-neden-kabarir"],
  },

  {
    slug: "kar-yuku-ve-cati-tasarimi",
    title: "Malatya'da kar yükü çatı tasarımını nasıl etkiler?",
    category: "Çatı ve Cephe",
    published: "2026-04-21",
    updated: "2026-06-10",
    reading: 5,
    metaTitle: "Kar Yükü ve Çatı Tasarımı: Malatya Koşulları",
    metaDesc:
      "Kar yükü çatı karkasını, eğimini ve kar tutucu ihtiyacını belirliyor. Malatya ve yüksek rakımlı ilçelerde dikkat edilecekler.",
    keywords: ["kar yükü", "çatı eğimi", "kar tutucu", "çatı makası", "sundurma kar yükü"],
    excerpt: "Kar, hafif görünen bir yük değil. Çatı karkası, sundurma ve kamelya bu yüke göre boyutlanmadığında ilk yoğun kışta sorun çıkıyor.",
    services: ["cati-yapimi", "demir-korkuluk", "depo-atolye-yapimi"],
    intro:
      "Çatı hesabında en çok küçümsenen yük kar. Birikmiş kar, çatının kendi ağırlığıyla kıyaslanabilecek düzeyde bir yük bindirebiliyor ve bu yük eşit dağılmıyor.",
    body: [
      { h2: "Kar yükü neye göre belirlenir?" },
      { p: "Bölgenin kar yükü değeri, çatının eğimi ve yapının yüksekliği hesaba giriyor. Yüksek rakımlı ilçelerde bu değer merkeze göre daha yüksek." },
      { p: "Makas aralığı, mertek kesiti ve bağlantı detayları bu hesaba göre belirleniyor. \"Komşununki de böyleydi\" yaklaşımı burada işe yaramıyor." },

      { h2: "Kar eşit dağılmaz" },
      { p: "Rüzgâr karı bir tarafa yığıyor. Ayrıca iki çatının birleştiği yerde ve duvar diplerinde birikme oluyor." },
      { p: "Bu yüzden hesapta dengesiz yükleme durumu da ele alınıyor. Tek yönlü birikme, simetrik yüklemeden daha zorlayıcı olabiliyor." },

      { h2: "Çatı eğimi" },
      { p: "Dik çatıda kar daha kolay kayıyor, yük azalıyor. Az eğimli çatıda kar duruyor ve yük artıyor." },
      { p: "Ama dik çatıda kar kütlesinin toplu kayması ayrı bir risk. O yüzden kar tutucu devreye giriyor." },

      { h2: "Kar tutucu" },
      { p: "Saçak üstüne monte edilen kar tutucular, karın toplu kaymasını engelliyor ve yavaş erimesini sağlıyor." },
      { p: "Yola, girişe ve otoparka bakan çatılarda ihmal edilmemesi gereken bir güvenlik elemanı. Ayrıca oluğun sökülmesini de önlüyor." },

      { h2: "Sundurma ve kamelya" },
      { p: "Hafif yapılar oldukları için kar yükü sık ihmal ediliyor. İnce profille yapılmış bir sundurma, yoğun kar yağışında çökebiliyor." },
      { p: "Profil kesitini ve açıklığı kar yüküne göre boyutluyoruz. Ucuz görünen ince profil, ilk yoğun kışta pahalıya mal oluyor." },

      { h2: "Buz barajı" },
      { p: "Yalıtımı zayıf çatılarda iç ortamdan kaçan ısı karı eritiyor, su saçakta donuyor ve buz barajı oluşuyor. Sonraki eriyen su kiremidin altına doluyor." },
      { p: "Çözüm örtü değil yalıtım ve havalandırma. Çatı arası doğru havalandırıldığında çatı yüzeyi soğuk kalıyor ve kar erimiyor." },
    ],
    faqs: [
      { q: "Çatıdaki karı temizletmeli miyim?", a: "Normal koşullarda gerekmiyor; çatı bu yüke göre yapılmış olmalı. Olağandışı yoğun ve uzun süreli birikmede, güvenli erişim varsa temizlik düşünülebilir." },
      { q: "Sundurmam çöktü, yenisi nasıl yapılmalı?", a: "Profil kesiti ve açıklık kar yüküne göre yeniden hesaplanmalı. Aynı ölçülerle yenilemek aynı sonucu veriyor." },
      { q: "Güneş paneli koyacağım, çatı taşır mı?", a: "Panel yükü ve montaj noktaları karkas hesabında dikkate alınmalı. Mevcut çatıya ekleme yapılacaksa yetkili değerlendirme gerekiyor." },
    ],
    related: ["cati-akintisi-nereden-baslar", "cati-yalitimi-nasil-yapilir", "kis-gelmeden-yapilacak-10-kontrol"],
  },
];

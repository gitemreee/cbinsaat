// Blog: doğalgaz, kombi ve ısıtma konulu yazılar.

export const dogalgazPosts = [
  {
    slug: "kombi-basinci-neden-duser",
    title: "Kombi basıncı neden düşer? Üç neden ve ayırt etme yolu",
    category: "Isıtma",
    published: "2025-10-08",
    updated: "2026-05-18",
    reading: 6,
    metaTitle: "Kombi Basıncı Neden Düşer? Sızıntı, Tank ve Ventil",
    metaDesc:
      "Kombide basınç haftada bir düşüyorsa üç ihtimal var: tesisat sızıntısı, genleşme tankı ve emniyet ventili. Hangisi olduğunu evde nasıl ayırt edersiniz?",
    keywords: ["kombi basıncı düşüyor", "kombi su eksiltiyor", "genleşme tankı", "emniyet ventili", "kombi arıza"],
    excerpt: "Basınç düşmesi kombinin değil çoğu zaman tesisatın sorunu. Üç ihtimali evde ayırt etmenin yolu ve hangisinde usta çağırmanız gerektiği.",
    services: ["kombi-bakim-ariza", "dogalgaz-ic-tesisat", "sihhi-tesisat"],
    intro:
      "Kapalı bir ısıtma tesisatında su kendiliğinden azalmaz. Basınç düşüyorsa su bir yerden çıkıyor demektir. Sorun şu ki bu \"bir yer\" üç farklı noktada olabiliyor ve üçünün çözümü de birbirinden farklı.",
    body: [
      { h2: "Önce şu ölçümü yapın" },
      { p: "Kombiyi tamamen kapatın, basıncı 1,5 bara tamamlayın ve 24 saat hiç çalıştırmadan bekleyin. Bu süre sonunda basınç düşmüşse tesisatta fiziksel bir sızıntı var demektir. Düşmemişse sorun ısınma sırasında ortaya çıkıyor, yani genleşme tankı veya emniyet ventiliyle ilgili." },
      { p: "Bu tek test, üç ihtimalden ikisini eleyerek işi ciddi biçimde kısaltıyor. Usta çağırmadan önce yapabileceğiniz en faydalı şey bu." },

      { h2: "1. Tesisat sızıntısı" },
      { p: "En sık kaçırdığımız noktalar petek altı rakorları, vana gövdeleri ve kombi içindeki bağlantılar. Sızıntı çoğu zaman damlama şeklinde olduğu için gözle görülmüyor; su buharlaşıp kireç izi bırakıyor." },
      { p: "Peteklerin altına kâğıt havlu sererek bir gece bekleyin. Islanan nokta size hattı gösterir. Sızıntı şap altındaysa iş değişir; orada tespit cihazıyla çalışmak gerekiyor." },

      { h2: "2. Genleşme tankı havasını kaybetmiş" },
      { p: "Genleşme tankı, su ısınıp genleştiğinde fazla hacmi karşılayan yastıktır. İçindeki hava zamanla kaçtığında bu görevi yapamıyor; su ısındıkça basınç fırlıyor, emniyet ventili açılıp suyu dışarı atıyor, sistem soğuyunca basınç düşük kalıyor." },
      { p: "Belirtisi tipiktir: kombi çalışırken basınç 3 bara yaklaşıyor, soğuduğunda 0,5 bara iniyor. Tankın havası şarj edilerek ya da tank değiştirilerek çözülüyor; kombiyi değiştirmekten çok daha ucuz bir iş." },

      { h2: "3. Emniyet ventili sızdırıyor" },
      { p: "Ventilin görevi basınç 3 barı aştığında suyu tahliye etmek. Ama içine kireç veya kir kaçtığında tam kapanmıyor ve sürekli damlatıyor. Bu durumda tahliye borusunun ucunda düzenli bir ıslaklık görürsünüz." },
      { p: "Ventilin sızdırdığını doğrulamak kolay: tahliye çıkışının altına kuru bir kap koyun. Bir gün içinde su birikiyorsa ventil değişmesi gereken parçadır." },

      { h2: "Basıncı ne sıklıkla tamamlamak normal?" },
      { p: "Sağlıklı bir tesisatta yılda bir, en fazla iki kez basınç tamamlamak normaldir. Ayda bir tamamlıyorsanız arıza var demektir; suyu sürekli eklemek sorunu çözmediği gibi tesisata her seferinde yeni kireç ve oksijen sokuyor." },
      { p: "Bu, uzun vadede peteklerde çamurlaşmaya ve kombide eşanjör tıkanmasına yol açıyor. Yani \"idare ediyoruz\" demek, birkaç yıl sonra çok daha pahalı bir işe dönüşüyor." },

      { h2: "Ne zaman usta gerekir?" },
      { ul: [
        "24 saatlik testte basınç düşüyorsa (sızıntı arama gerekir)",
        "Kombi çalışırken basınç 3 barı geçiyorsa",
        "Emniyet ventilinden sürekli su geliyorsa",
        "Basıncı tamamladıktan sonra kombi kilitleniyorsa",
        "Şap altından ıslaklık ya da alt kata sızıntı şüphesi varsa",
      ] },
    ],
    faqs: [
      { q: "Kombi basıncı kaç bar olmalı?", a: "Soğuk tesisatta 1,2–1,5 bar. Isınınca 2–2,5 bara çıkması normaldir. 3 barı aşıyorsa genleşme tankına bakmak gerekiyor." },
      { q: "Basıncı kendim tamamlayabilir miyim?", a: "Evet, kombinin altındaki doldurma vanasından yapılır. Yavaşça açıp göstergeyi izleyin, 1,5 bara gelince kapatın. Vanayı açık unutmak basıncı fırlatır." },
      { q: "Basınç düşünce petekler ısınmaz mı?", a: "Basınç kritik seviyenin altına indiğinde kombi güvenlik için kendini kilitler ve ısıtma durur. Bu bir arıza değil, koruma davranışıdır." },
    ],
    related: ["petek-isinmiyor-ne-yapmali", "kombi-bakimi-neden-gerekli", "dogalgaza-gecerken-dikkat"],
  },

  {
    slug: "petek-isinmiyor-ne-yapmali",
    title: "Petek ısınmıyor: hangi belirti neyi gösterir?",
    category: "Isıtma",
    published: "2025-10-22",
    updated: "2026-04-11",
    reading: 6,
    metaTitle: "Petek Isınmıyor: Üstten Soğuk, Alttan Soğuk, Hiç Isınmıyor",
    metaDesc:
      "Peteğin hangi kısmının soğuk olduğu sorunun ne olduğunu söyler. Üstten soğuk, alttan soğuk ve hiç ısınmayan petek için ayrı ayrı çözümler.",
    keywords: ["petek ısınmıyor", "petek üstten soğuk", "petek hava yapmış", "purjör", "radyatör ısınmıyor"],
    excerpt: "Peteğin soğuk kalan kısmı size sorunu söyler. Üstten soğuksa hava, alttan soğuksa çamur, hiç ısınmıyorsa vana. Üçünün de çözümü farklı.",
    services: ["petek-temizligi", "kombi-bakim-ariza", "kombi-petek-montaji"],
    intro:
      "Petek şikâyetlerinde en faydalı bilgi \"ısınmıyor\" değil, \"neresi ısınmıyor\". Elinizi peteğin üstüne, ortasına ve altına koyup karşılaştırdığınızda sorunun ne olduğu neredeyse kesinleşiyor.",
    body: [
      { h2: "Üstü soğuk, altı sıcak: hava yapmış" },
      { p: "Sıcak su alttan girip yukarı doğru ilerler. Peteğin üst kısmında hava sıkıştıysa su oraya ulaşamaz ve o bölge soğuk kalır. Sistemin en yaygın sorunu budur ve çözümü de en kolayıdır." },
      { p: "Purjör anahtarıyla peteğin üst köşesindeki vidayı hafifçe gevşetin, hava çıkışı bitip su gelmeye başlayınca kapatın. Altına bir kap koymayı unutmayın. Bütün petekleri havalandırdıktan sonra kombideki basıncı 1,5 bara tamamlayın." },

      { h2: "Altı soğuk, üstü sıcak: çamurlanmış" },
      { p: "Bu ters durum, peteğin alt kısmında birikmiş çamur ve tortuyu gösterir. Yıllar içinde tesisatta oluşan pas ve kireç aşağıda toplanır, suyun dolaşımını engeller." },
      { p: "Bunun çözümü havalandırma değil, kimyasal veya basınçlı petek temizliğidir. Tek petekte varsa o petek sökülüp yıkanabilir; birkaç petekte birden varsa tesisatın tamamının temizlenmesi gerekiyor." },

      { h2: "Hiç ısınmıyor: vana veya termostatik başlık" },
      { p: "Petek tamamen soğuksa önce vanaya bakın. Termostatik başlıklar yaz boyunca aynı konumda kaldığında iğnesi sıkışabiliyor; başlığı söküp iğneye elle bastırmak çoğu zaman yeterli oluyor." },
      { p: "Vana açık olmasına rağmen ısınmıyorsa hat kapalı ya da tıkalı olabilir. Kolektörlü sistemlerde o zonun vanası kapatılmış olabilir; kolektör kutusunu kontrol etmek gerekiyor." },

      { h2: "Bütün petekler soğuk: kombi tarafı" },
      { p: "Tek tek peteklerde değil evin tamamında ısınma yoksa sorun peteklerde değil. Kombi sıcak su veriyor ama ısıtma çalışmıyorsa üç yollu vana ya da sirkülasyon pompası akla gelir." },
      { p: "Oda termostatının pil durumunu ve ayarını da kontrol edin. Şaşırtıcı ama ısıtma çağrılarının azımsanmayacak bir kısmı boşalmış termostat pilinden çıkıyor." },

      { h2: "Bir oda hep daha soğuk" },
      { p: "Bazı odaların diğerlerinden geç ısınması, tesisatın dengelenmemiş olmasından kaynaklanabilir. Kombiye yakın petekler suyu önce ve daha sıcak aldığı için uzak odalara az kalıyor." },
      { p: "Denge vanalarıyla debi ayarı yapılarak bu düzeltiliyor. Kolektörlü sistemlerde debimetre üzerinden ayar daha kolay; klasik hatta vana kısma yöntemiyle yapılıyor." },

      { h2: "Sezon öncesi yapılacaklar" },
      { ul: [
        "Bütün peteklerin havasını alın, sonra basıncı tamamlayın",
        "Termostatik başlıkları birkaç kez açıp kapatın",
        "Oda termostatının pilini değiştirin",
        "Kombi bakımını sezon başlamadan yaptırın",
        "Petek altlarında ıslaklık olup olmadığına bakın",
      ] },
    ],
    faqs: [
      { q: "Havayı ne sıklıkla almalıyım?", a: "Sezon başında bir kez yeterli. Sürekli hava yapıyorsa tesisata bir yerden hava giriyor demektir; bu bir arızadır ve baktırmak gerekir." },
      { q: "Petek temizliği kaç yılda bir yapılmalı?", a: "Ortalama 4–6 yılda bir. Suyu sert olan bölgelerde ve eski tesisatlarda bu süre kısalıyor. Alt kısmı soğuk kalan petek, süresi geldiğinin en net işareti." },
      { q: "Peteği sökmeden temizlemek mümkün mü?", a: "Mümkün. Tesisata bağlı hâldeyken basınçlı temizleme makinesiyle yıkanabiliyor. Sadece bir petekte sorun varsa sökerek yıkamak daha ekonomik olabiliyor." },
    ],
    related: ["kombi-basinci-neden-duser", "kombi-bakimi-neden-gerekli", "petek-mi-yerden-isitma-mi"],
  },

  {
    slug: "kombi-bakimi-neden-gerekli",
    title: "Kombi bakımı gerçekten gerekli mi? Rakamlarla bakalım",
    category: "Bakım",
    published: "2025-11-05",
    updated: "2026-05-02",
    reading: 5,
    metaTitle: "Kombi Bakımı Gerekli mi? Verim, Güvenlik ve Maliyet",
    metaDesc:
      "Yıllık kombi bakımı bir masraf mı yoksa tasarruf mu? Bakımın verime, güvenliğe ve cihaz ömrüne etkisi; hangi işlemlerin yapılması gerektiği.",
    keywords: ["kombi bakımı", "kombi bakım fiyatı", "yoğuşmalı kombi bakımı", "eşanjör temizliği", "baca gazı ölçümü"],
    excerpt: "Bakımı atlamanın maliyeti faturada ve arıza gününde çıkıyor. Yıllık bakımda tam olarak ne yapılır, neden yapılır ve ne zaman yaptırılmalı?",
    services: ["kombi-bakim-ariza", "petek-temizligi", "dogalgaz-ic-tesisat"],
    intro:
      "Kombi bakımı, faydası hemen görünmediği için en kolay ertelenen işlerden biri. Oysa bakımın üç somut karşılığı var: daha az gaz tüketimi, daha az arıza ve daha uzun cihaz ömrü. Üçü de ertelemenin bedelini bir yıl içinde geri veriyor.",
    body: [
      { h2: "Kirli eşanjör ne yapar?" },
      { p: "Yanma sonucu oluşan kurum, eşanjörün ısı transfer yüzeyini kaplar. Aynı sıcak suyu üretmek için brülörün daha uzun süre yanması gerekir; bu doğrudan gaz tüketimi demektir." },
      { p: "Kurumun kalınlığı arttıkça fark büyür. Yıllardır bakım görmemiş bir kombide bu kayıp faturada hissedilecek düzeye çıkabiliyor. Bakım masrafı çoğu evde bir sezonda kendini karşılıyor." },

      { h2: "Baca tarafı: görünmeyen risk" },
      { p: "Bacalı kombilerde tahliye yolunun tıkanması, yanma gazlarının içeri dönmesine yol açabilir. Karbonmonoksit renksiz ve kokusuz olduğu için fark edilmesi mümkün değildir." },
      { p: "Bakımda baca çekişi ve tahliye yolu kontrol ediliyor. Hermetik kombilerde de tahliye borusunun conta ve birleşimleri gözden geçiriliyor. Bu, bakımın pazarlığı yapılmayacak kısmı." },

      { h2: "Bakımda ne yapılır?" },
      { ul: [
        "Yanma odası, brülör ve eşanjör temizliği",
        "Baca gazı ve tahliye kontrolü",
        "Genleşme tankı hava basıncı ölçümü",
        "Emniyet ventili ve basınç kontrolü",
        "Sirkülasyon pompası ve üç yollu vana kontrolü",
        "Elektrot ve alev sensörü temizliği",
        "Su ve gaz bağlantılarında sızdırmazlık kontrolü",
      ] },
      { p: "İşlem yaklaşık bir saat sürüyor. Yapılanların yazılı olarak size verilmesini isteyin; hangi parçanın hangi durumda olduğu bir sonraki yıl için referans oluyor." },

      { h2: "Ne zaman yaptırmalı?" },
      { p: "En doğru zaman eylül–ekim, yani ısıtma sezonu başlamadan hemen önce. Kasım ayında arıza yoğunluğu arttığı için hem randevu bulmak zorlaşıyor hem ilk soğukta cihazın çalışmama ihtimali artıyor." },
      { p: "Yazın uzun süre kullanılmayan kombide pompa sıkışması sık görülüyor. Sezon öncesi bakım bunu da ortaya çıkarıp çözüyor." },

      { h2: "Garantili cihazlarda durum" },
      { p: "Garantisi devam eden cihazlarda yetkili servis dışında yapılan işlemler garantiyi etkileyebiliyor. Böyle bir durumda cihaz bakımını yetkili servise bırakmak doğru olan." },
      { p: "Buna karşılık tesisat kaynaklı sorunlar (basınç düşmesi, petek çamurlanması, denge ayarı) garanti kapsamı dışında. O tarafta biz çalışabiliyoruz." },
    ],
    faqs: [
      { q: "Yoğuşmalı kombide bakım farklı mı?", a: "İşlem sırası benzer ama yoğuşmalı cihazlarda kondens tahliyesi ve sifonun temizliği ayrıca kontrol ediliyor. Tıkanan kondens sifonu cihazın kilitlenmesine yol açan yaygın bir arıza." },
      { q: "Kombi bakımı yılda kaç kez?", a: "Yılda bir yeterli. Yoğun kullanılan ticari yerlerde ve büyük kapasiteli cihazlarda üretici sıklığı artırabiliyor." },
      { q: "Bakım yaptırdım ama yine arıza verdi, normal mi?", a: "Bakım arızayı sıfırlamaz, riskini azaltır. Yaşlanmış bir parça bakımdan kısa süre sonra da gidebilir. Bakımda o parçanın durumu not edildiyse en azından hazırlıksız yakalanmazsınız." },
    ],
    related: ["kombi-basinci-neden-duser", "petek-isinmiyor-ne-yapmali", "dogalgaza-gecerken-dikkat"],
  },

  {
    slug: "dogalgaza-gecerken-dikkat",
    title: "Sobadan doğalgaza geçerken atlanan 6 şey",
    category: "Isıtma",
    published: "2025-11-19",
    updated: "2026-06-01",
    reading: 7,
    metaTitle: "Sobadan Doğalgaza Geçiş: Dikkat Edilecek 6 Konu",
    metaDesc:
      "Doğalgaza geçişte proje, güzergâh, baca, petek kapasitesi ve maliyet sıralaması. Sonradan duvarı ikinci kez açtırmamak için baştan bilinmesi gerekenler.",
    keywords: ["doğalgaza geçiş", "doğalgaz iç tesisat", "kombi bağlantısı", "petek tesisatı", "gaz açtırma"],
    excerpt: "Doğalgaza geçişte en pahalı hatalar sıralama hatası. Gazı önce, petekleri sonra yaptıranlar aynı duvarı iki kez açtırıyor.",
    services: ["dogalgaz-ic-tesisat", "kombi-petek-montaji", "yerden-isitma"],
    intro:
      "Doğalgaza geçiş tek bir iş gibi görünüyor ama aslında birbirine bağlı beş ayrı iş: proje, iç tesisat, petek hattı, kombi montajı ve gaz açma. Sıralama bozulduğunda maliyet katlanıyor.",
    body: [
      { h2: "1. Proje ve gaz açma yetkili firmanın işi" },
      { p: "Doğalgaz iç tesisatı, dağıtım şirketinin yetkilendirdiği sertifikalı firmalar tarafından, onaylı proje üzerinden yapılır ve gaz kontrol sonrası açılır. Bunun kestirme yolu yok." },
      { p: "Uygulama, kırım, petek tesisatı ve sonrasındaki tadilat tarafı ayrı yürüyebiliyor. Kimin neyi üstlendiğini baştan yazılı netleştirmek, sürecin en sık tıkanan yerini açıyor." },

      { h2: "2. Peteği gazla aynı anda planlayın" },
      { p: "En sık yapılan hata gazı çektirip petekleri sonraya bırakmak. İki iş ayrı zamanlarda yapıldığında aynı duvar iki kez açılıyor, sıva ve boya iki kez yapılıyor." },
      { p: "Birlikte planlandığında hem kırım tek seferde bitiyor hem de kombi kapasitesi peteklerin toplam gücüne göre doğru seçilebiliyor." },

      { h2: "3. Kombi kapasitesini oda sayısına göre seçmeyin" },
      { p: "Kombi seçimi \"3+1 evde şu kadar kilovat\" gibi kaba bir kuralla yapılmamalı. Belirleyici olan peteklerin toplam gücü, evin yalıtımı ve pencere alanı." },
      { p: "Gereğinden büyük kombi sürekli açılıp kapanarak hem verimsiz çalışıyor hem eşanjörü yoruyor. Küçük kombi ise en soğuk günlerde yetişemiyor." },

      { h2: "4. Baca uygunluğunu kombiyi almadan kontrol ettirin" },
      { p: "Hermetik kombide duvar delme yeri ve tahliye yönü kurala bağlı. Bacalı kombide ise bacanın kesiti ve çekişi kontrol edilmeden montaj yapılmıyor." },
      { p: "Eski binalarda ortak baca çoğu zaman uygun çıkmıyor ve hermetiğe geçmek gerekiyor. Kombiyi aldıktan sonra bunu öğrenmek can sıkıcı bir sürpriz oluyor." },

      { h2: "5. Güzergâhı gözle değil ölçüyle belirleyin" },
      { p: "En kısa görünen hat çoğu zaman en çok kırım gerektiren hat oluyor. Kolon çıkışının yeri, kombinin duracağı nokta ve bacanın konumu birlikte değerlendirilmeli." },
      { p: "Görünür geçiş, kanal içi ve tavandan dolaşma seçeneklerinin maliyeti farklı. Üçünü de konuşup karar vermek, sonradan \"keşke\" dememenizi sağlıyor." },

      { h2: "6. Yalıtımı da hesaba katın" },
      { p: "Yalıtımsız bir evde büyük kombi almak sorunu çözmüyor, sadece faturayı büyütüyor. Pencere değişimi ve dış cephe yalıtımı, ısıtma sisteminden önce konuşulması gereken kalemler." },
      { p: "Bütçe sınırlıysa sıralama şöyle olmalı: önce yalıtım ve doğrama, sonra doğru boyutlanmış ısıtma sistemi. Tersi sıralama her kış size fatura olarak geri dönüyor." },
    ],
    faqs: [
      { q: "Doğalgaz açtırma ne kadar sürer?", a: "İç tesisat ve petek hattı standart bir dairede 3–6 iş günü. Proje onayı ve dağıtım şirketinin gaz açma randevusu buna dahil değil; o süre şirketin yoğunluğuna göre değişiyor." },
      { q: "Kombiyi balkona alabilir miyim?", a: "Çoğu dairede alınabiliyor. Gaz hattı, su bağlantıları ve tahliyenin yeni noktaya taşınması gerekiyor. Balkon kapalıysa havalandırma kuralları ayrıca kontrol ediliyor." },
      { q: "Gaz kokusu alırsam ne yapmalıyım?", a: "Vanayı kapatın, pencereleri açın, elektrik düğmelerine ve prizlere dokunmayın, çakmak yakmayın. Binadan çıkıp 187 Doğalgaz Acil hattını arayın." },
    ],
    related: ["kombi-basinci-neden-duser", "petek-mi-yerden-isitma-mi", "kombi-bakimi-neden-gerekli"],
  },

  {
    slug: "petek-mi-yerden-isitma-mi",
    title: "Petek mi yerden ısıtma mı? Karar verirken bakılacak 5 şey",
    category: "Isıtma",
    published: "2025-12-03",
    updated: "2026-04-25",
    reading: 6,
    metaTitle: "Petek mi Yerden Isıtma mı? Maliyet, Konfor ve Kullanım",
    metaDesc:
      "Yerden ısıtma her eve uygun değil. Kullanım şekli, kat yüksekliği, zemin kaplaması ve maliyet üzerinden karşılaştırma.",
    keywords: ["yerden ısıtma", "petek mi yerden ısıtma mı", "yerden ısıtma maliyeti", "yerden ısıtma dezavantajları"],
    excerpt: "Yerden ısıtma daha konforlu ama her eve uymuyor. Kararı belirleyen beş şey: kullanım şekli, kat yüksekliği, zemin kaplaması, yalıtım ve tadilat durumu.",
    services: ["yerden-isitma", "kombi-petek-montaji", "sap-zemin-hazirligi"],
    intro:
      "Yerden ısıtma soruları genellikle \"daha mı iyi\" diye geliyor. Doğru soru bu değil. Yerden ısıtmanın peteğe göre farklı davranışları var; bu davranışlar sizin kullanım şeklinize uyuyorsa iyi, uymuyorsa değil.",
    body: [
      { h2: "1. Evi nasıl kullanıyorsunuz?" },
      { p: "Yerden ısıtma yavaş ısıtır ve yavaş soğur. Sürekli oturulan bir evde bu avantaj: sıcaklık dalgalanmadan sabit kalıyor. Haftada bir gidilen bir yazlıkta ise dezavantaj; gittiğiniz gün ev saatlerce ısınmıyor." },
      { p: "Gündüz boş kalan ve akşam hızlı ısıtılmak istenen evlerde petek daha uygun. Karma çözüm de var: salon ve ıslak hacimlerde yerden ısıtma, yatak odalarında petek." },

      { h2: "2. Kat yüksekliğiniz yeterli mi?" },
      { p: "Yalıtım levhası, serpantin ve şap birlikte zemini 6–8 cm yükseltiyor. Kapı altları, balkon eşiği ve merdiven basamakları buna göre planlanmazsa kapıları kesmek gerekiyor." },
      { p: "Tavan yüksekliği düşük dairelerde ince şaplı sistemler kullanılabiliyor; yükseklik kaybı 4 cm'e iniyor ama maliyet artıyor." },

      { h2: "3. Zemin kaplaması ne olacak?" },
      { p: "Seramik ve doğal taş ısıyı iyi iletir, yerden ısıtmayla en verimli çalışan kaplamalardır. Kalın halı ve bazı laminat türleri ise yalıtkan davranıp verimi düşürüyor." },
      { p: "Kaplama kararını sistem kararıyla birlikte vermek gerekiyor. Yerden ısıtma yaptırıp üstüne kalın halı sermek, sistemin faydasını ciddi biçimde azaltıyor." },

      { h2: "4. Zaten tadilat yapılacak mı?" },
      { p: "Zemin nasılsa sökülecekse yerden ısıtmanın ek maliyeti epeyce düşüyor. Sadece yerden ısıtma için sağlam bir zemini sökmek çoğu evde ekonomik olmuyor." },
      { p: "O yüzden karar, tadilat kararıyla aynı anda verilmesi gereken bir konu. Tadilat bittikten sonra gündeme geldiğinde iş baştan başlıyor." },

      { h2: "5. Yalıtımınız ne durumda?" },
      { p: "Yerden ısıtma düşük su sıcaklığıyla çalışır; bu da yalıtımı iyi olan evlerde avantaja dönüşür. Yalıtımsız bir evde düşük sıcaklıkla istenen konforu yakalamak zorlaşıyor." },
      { p: "Yoğuşmalı kombiyle birlikte kullanıldığında verim daha da artıyor, çünkü yoğuşmalı cihazlar düşük dönüş sıcaklığında en yüksek verimi veriyor." },

      { h2: "Uygulamada atlanmaması gerekenler" },
      { ul: [
        "Serpantin şap dökülürken basınç altında tutulmalı",
        "Kolektörde debi ayarı yapılmalı",
        "Şap kuruma süresi beklenmeli, sistem kademeli devreye alınmalı",
        "Zon planı oda kullanımına göre kurulmalı",
        "Kaplama seçimi sistemle uyumlu olmalı",
      ] },
    ],
    faqs: [
      { q: "Yerden ısıtma daha mı ekonomik?", a: "Düşük su sıcaklığıyla çalıştığı ve ısıyı daha dengeli dağıttığı için iyi yalıtılmış evlerde tasarruf sağlıyor. Yalıtımı zayıf evlerde bu fark kayboluyor." },
      { q: "Boru patlarsa ne olur?", a: "Serpantin şap içinde eksiz döşenir, ek yeri olmadığı için patlama riski çok düşüktür. Asıl risk şap dökümü sırasındaki darbedir; o yüzden hat basınçlıyken dökülür." },
      { q: "Mevcut peteklerle birlikte kullanılabilir mi?", a: "Kullanılabilir. Kolektör buna göre planlanır ve iki sistem farklı su sıcaklıklarıyla çalışacak şekilde ayrılır." },
    ],
    related: ["dogalgaza-gecerken-dikkat", "petek-isinmiyor-ne-yapmali", "sap-kurumadan-parke-doseme"],
  },

  {
    slug: "dogalgaz-faturasi-neden-yuksek",
    title: "Doğalgaz faturası neden yüksek geliyor? Sırayla kontrol listesi",
    category: "Enerji",
    published: "2025-12-17",
    updated: "2026-05-30",
    reading: 6,
    metaTitle: "Doğalgaz Faturası Neden Yüksek? Kontrol Listesi",
    metaDesc:
      "Aynı evde fatura neden komşudan yüksek? Yalıtım, kombi ayarı, petek dengesi, termostat kullanımı ve kaçaklar için sırayla kontrol listesi.",
    keywords: ["doğalgaz faturası yüksek", "ısınma tasarrufu", "kombi ayarı", "termostat kullanımı", "yalıtım"],
    excerpt: "Fatura farkının sebebi çoğu zaman kombinin markası değil. Yalıtımdan termostat kullanımına kadar sırayla bakılacak yedi başlık.",
    services: ["dis-cephe-mantolama", "kombi-bakim-ariza", "petek-temizligi", "kapi-pencere-dograma"],
    intro:
      "Aynı binada, aynı büyüklükte iki daire arasında ısınma faturası iki katına kadar farklı olabiliyor. Cihaz markası bu farkın küçük bir kısmını açıklıyor; asıl belirleyiciler başka yerde.",
    body: [
      { h2: "1. Dairenin konumu" },
      { p: "Ara kat orta daire ile en üst kat köşe daire arasında ısı kaybı farkı çok büyük. Köşe dairede iki dış duvar, üst katta bir de çatı devrede." },
      { p: "Bu farkı kapatmanın yolu dış duvar ve çatı yalıtımı. Konumunuzu değiştiremezsiniz ama kaybı azaltabilirsiniz." },

      { h2: "2. Pencereler" },
      { p: "Eski ahşap doğrama ve tek camlı pencereler, ısı kaybının önemli bir kısmını tek başına yapıyor. Elinizi kapalı pencerenin kenarına tuttuğunuzda hava akımı hissediyorsanız orada kayıp var." },
      { p: "Tam değişim bütçe istiyor; ara çözüm olarak conta yenileme ve kanat ayarı ciddi fark yaratabiliyor. Bu, birkaç saatlik bir iş." },

      { h2: "3. Kombi ayarı" },
      { p: "Kombinin kalorifer suyu sıcaklığını sürekli en üstte tutmak yaygın bir alışkanlık. Yoğuşmalı cihazlarda bu tam tersi etki yapıyor; düşük dönüş sıcaklığında verim yükseldiği için ayarı düşürmek tasarruf sağlıyor." },
      { p: "Doğru ayar dış hava sıcaklığına göre değişiyor. Çok soğuk günlerde yükseltip ılık günlerde düşürmek, sabit tutmaktan daha verimli." },

      { h2: "4. Termostat kullanımı" },
      { p: "Termostatı sürekli açıp kapatmak yerine sabit bir sıcaklıkta bırakmak çoğu durumda daha verimli. Evi tamamen soğutup sonra hızla ısıtmak, sabit tutmaktan daha çok gaz harcıyor." },
      { p: "Gece ve evde kimse yokken 2–3 derece düşürmek yeterli. 10 derece düşürüp akşam ısıtmaya çalışmak tasarruf değil, ek maliyet." },

      { h2: "5. Petek dengesi ve temizliği" },
      { p: "Alt kısmı soğuk kalan petek, aynı odayı ısıtmak için kombiyi daha uzun çalıştırıyor. Çamurlanmış tesisatta bu kayıp evin tamamına yayılıyor." },
      { p: "Denge vanalarıyla debi ayarı yapılmamış tesisatlarda kombiye yakın odalar aşırı ısınırken uzak odalar üşüyor; termostat uzak odaya göre çalıştığı için sistem gereğinden fazla yanıyor." },

      { h2: "6. Kullanılmayan odalar" },
      { p: "Boş odanın peteğini tamamen kapatmak ilk bakışta mantıklı görünüyor ama o odanın duvarları komşu odalardan ısı çekmeye başlıyor. Ayrıca soğuyan odada yoğuşma ve küf riski oluşuyor." },
      { p: "Doğru yöntem kapatmak değil kısmak: 15–16 derece civarında tutmak hem tasarruf sağlıyor hem nem sorununu önlüyor." },

      { h2: "7. Bakımsızlık" },
      { p: "Kurumlanmış eşanjör aynı ısı için daha fazla gaz yakıyor. Bakım masrafı çoğu evde bir sezon içinde faturadan geri dönüyor." },
      { p: "Bakımı olmayan cihazda ayrıca arıza riski yükseliyor; kışın ortasında kombinin durması, tasarruf hesabını tamamen bozan bir kalem." },
    ],
    faqs: [
      { q: "Kombiyi gece kapatmalı mıyım?", a: "Kapatmak yerine 2–3 derece düşürmek daha verimli. Tamamen soğuyan evi sabah ısıtmak, geceyi düşük sıcaklıkta geçirmekten daha çok gaz harcıyor." },
      { q: "Yalıtım yaptırsam ne kadar tasarruf ederim?", a: "Mevcut durumunuza bağlı. Yalıtımsız bir binada fark açık oluyor; kısmen yalıtılmış binada daha sınırlı. Keşifte binanızın durumuna göre gerçekçi bir aralık söylüyoruz." },
      { q: "Faturamda kaçak olabilir mi?", a: "Sayaç, hiçbir cihaz çalışmazken dönmemeli. Tüm vanaları kapatıp sayacı izleyin; hareket varsa dağıtım şirketini arayın." },
    ],
    related: ["dogalgaza-gecerken-dikkat", "kombi-bakimi-neden-gerekli", "mantolama-ne-kazandirir"],
  },

  {
    slug: "kombi-hata-kodlari-ne-anlama-gelir",
    title: "Kombi kilitlendi: hata kodu ne anlatıyor?",
    category: "Isıtma",
    published: "2026-01-14",
    updated: "2026-06-10",
    reading: 5,
    metaTitle: "Kombi Kilitlendi: Hata Kodları Neyi Gösterir?",
    metaDesc:
      "Kombi hata kodları marka marka değişir ama arka plandaki sebepler aynıdır: basınç, ateşleme, baca, sensör. Hangi durumda reset, hangisinde servis?",
    keywords: ["kombi hata kodu", "kombi kilitlendi", "kombi reset", "kombi ateşleme arızası", "kombi arıza kodu"],
    excerpt: "Kod markaya göre değişiyor ama sebep dört başlıkta toplanıyor. Hangi durumda reset yeterli, hangisinde tekrar tekrar resetlemek zararlı?",
    services: ["kombi-bakim-ariza", "dogalgaz-ic-tesisat"],
    intro:
      "Kombi ekranındaki kod cihaz markasına göre farklı yazılıyor ama arkasındaki nedenler hemen her markada aynı dört başlıkta toplanıyor. Kodun ne olduğundan çok, hangi gruba girdiğini bilmek işe yarıyor.",
    body: [
      { h2: "Grup 1: Düşük su basıncı" },
      { p: "En sık görülen kilitlenme sebebi. Basınç kritik seviyenin altına inince kombi güvenlik için ısıtmayı durduruyor. Bu bir arıza değil, koruma davranışı." },
      { p: "Basıncı 1,5 bara tamamlayıp resetlediğinizde çoğunlukla düzeliyor. Kısa sürede tekrar ediyorsa altta yatan sızıntı veya genleşme tankı sorunu var demektir." },

      { h2: "Grup 2: Ateşleme yok / alev algılanmıyor" },
      { p: "Kombi gazı vermeye çalışıyor ama alev oluşmuyor ya da oluşan alevi göremiyor. Gaz vanasının kapalı olması, gaz kesintisi, kirlenmiş ateşleme elektrodu veya alev sensörü sebep olabilir." },
      { p: "Önce gaz vanasının açık olduğunu ve ocakta gaz geldiğini kontrol edin. Gaz varsa ve kod tekrar ediyorsa elektrot temizliği gerekiyor; bu servis işi." },

      { h2: "Grup 3: Baca / fan / tahliye" },
      { p: "Fan çalışmıyorsa ya da tahliye yolu tıkalıysa kombi kendini kilitler. Rüzgârlı havalarda hermetik bacadan geri basınç gelmesi de geçici kilitlenmeye yol açabiliyor." },
      { p: "Bu grup güvenlikle doğrudan ilgili. Tekrar eden baca hatalarını resetleyip geçiştirmemek gerekiyor; tahliye yolunun kontrol edilmesi şart." },

      { h2: "Grup 4: Aşırı ısınma / sensör" },
      { p: "Su sıcaklığı beklenenin üzerine çıktığında limit termostat devreye giriyor. Sebebi genelde dolaşım eksikliği: pompa çalışmıyor, hat tıkalı ya da tüm petek vanaları kapatılmış." },
      { p: "Bütün petek vanalarını kapatmak, kombiyi kapalı devrede çalıştırmak demek. En az bir peteğin (genelde banyodaki havlupanın) vanasını açık bırakmak gerekiyor." },

      { h2: "Kaç kez reset yapılır?" },
      { p: "Bir kez reset makul. Aynı kod kısa sürede tekrar ediyorsa reset üstüne reset yapmak cihazı zorluyor ve arızanın kaynağını gizliyor." },
      { p: "Özellikle ateşleme ve baca gruplarında ısrarlı reset güvenli değil. İkinci tekrarda servis çağırmak doğru olan." },

      { h2: "Servis çağırmadan önce hazırlayın" },
      { ul: [
        "Ekrandaki kodun fotoğrafı",
        "Basınç göstergesinin fotoğrafı",
        "Kaç gündür ve ne sıklıkla tekrar ettiği",
        "Son bakımın ne zaman yapıldığı",
        "Cihazın marka, model ve yaşı",
      ] },
      { p: "Bu beş bilgi telefonda çoğu arızayı ön değerlendirmeden geçirmemizi sağlıyor; gerekiyorsa parçayı yanımızda getiriyoruz." },
    ],
    faqs: [
      { q: "Reset tuşuna basmak zararlı mı?", a: "Tek seferlik reset zararsız. Aynı arızayı üst üste resetlemek ise sorunu maskeliyor ve bazı durumlarda cihaza zarar veriyor." },
      { q: "Kombi kışın gece dondu, ne yapmalıyım?", a: "Çoğu kombide donma koruması var ama elektrik veya gaz kesikse çalışmıyor. Donmuş tesisatı sıcak suyla ya da açık alevle çözmeye çalışmayın; boru patlayabilir." },
      { q: "Her marka kombiye bakıyor musunuz?", a: "Arıza tespiti ve tesisat kaynaklı sorunlarda marka fark etmiyor. Garantisi süren cihazlarda yetkili servise yönlendiriyoruz." },
    ],
    related: ["kombi-basinci-neden-duser", "kombi-bakimi-neden-gerekli", "petek-isinmiyor-ne-yapmali"],
  },

  {
    slug: "havlupan-mi-petek-mi",
    title: "Banyoda havlupan mı petek mi? Isıtma açısından fark",
    category: "Isıtma",
    published: "2026-01-28",
    updated: "2026-05-12",
    reading: 4,
    metaTitle: "Banyoda Havlupan mı Petek mi? Isıtma Gücü ve Kullanım",
    metaDesc:
      "Havlupan dekoratif ama ısıtma gücü panel petekten düşük. Banyo büyüklüğüne göre doğru seçim, elektrikli destek ve montaj detayları.",
    keywords: ["havlupan", "banyo peteği", "havlupan ısıtmıyor", "elektrikli havlupan", "banyo ısıtma"],
    excerpt: "Havlupan güzel görünüyor ama aynı ölçüdeki panel peteğin ısıtma gücünü vermiyor. Banyonuz için doğru seçim nasıl yapılır?",
    services: ["kombi-petek-montaji", "banyo-tadilati", "sihhi-tesisat"],
    intro:
      "Banyo tadilatlarında havlupan neredeyse otomatik tercih hâline geldi. Görüntü olarak haklı bir tercih ama ısıtma tarafında bilinmesi gereken bir gerçek var: aynı ölçüdeki bir panel petek, havlupandan gözle görülür ölçüde fazla ısı veriyor.",
    body: [
      { h2: "Isı gücü farkı nereden geliyor?" },
      { p: "Panel peteklerde arka yüzeyde ısı transferini artıran kanatçıklar bulunur. Havlupanda ise düz borular vardır; yüzey alanı daha az olduğu için aynı ölçüde daha az ısı verir." },
      { p: "Bu fark küçük banyolarda hissedilmeyebilir. Ama dış duvarı olan, penceresi büyük ya da geniş bir banyoda havlupan tek başına yetersiz kalıyor." },

      { h2: "Doğru seçim nasıl yapılır?" },
      { p: "Banyonun ısı ihtiyacı hesaplanıp havlupanın katalog değeriyle karşılaştırılmalı. Katalog değerlerinin çoğu 75/65 derece su sıcaklığına göre verilir; yoğuşmalı sistemde daha düşük sıcaklıkla çalışıldığı için gerçek güç daha düşük olur." },
      { p: "Bu yüzden havlupanı bir üst ölçüde seçmek çoğu banyoda doğru oluyor. Yükseklik yetmiyorsa çift sıralı modeller devreye giriyor." },

      { h2: "Elektrikli destek" },
      { p: "Yazın kombi kapalıyken havluları kurutmak isteyenler için elektrikli rezistanslı modeller var. Kalorifer suyuyla da elektrikle de çalışabiliyorlar." },
      { p: "Elektrikli kullanımda banyoda su ve elektrik bir arada olduğu için besleme hattının kaçak akım korumalı olması ve montajın kurallara uygun mesafede yapılması gerekiyor." },

      { h2: "Montaj detayları" },
      { ul: [
        "Bağlantı yükseklikleri seramikten önce belirlenmeli",
        "Vana ve rakor yerleri kaplama planına göre işaretlenmeli",
        "Havlupan hava yapmaya yatkın; purjör erişilebilir olmalı",
        "Duvara sabitleme dübelleri seramik altındaki malzemeye göre seçilmeli",
        "Elektrikli modellerde besleme kaçak akım korumalı olmalı",
      ] },

      { h2: "Karma çözüm" },
      { p: "Geniş banyolarda en pratik çözüm ikisini birden kullanmak: duvarda bir panel petek, lavabo yanında dekoratif bir havlupan. Isıtma yükünü petek taşıyor, havlupan işlevini görüyor." },
      { p: "Yerden ısıtma varsa havlupan tamamen dekoratif bir eleman hâline geliyor; böyle bir durumda ölçü ve model seçimi tamamen zevke kalıyor." },
    ],
    faqs: [
      { q: "Havlupan ısıtmıyor, ne yapmalıyım?", a: "Önce havasını alın; havlupanlar hava yapmaya çok yatkındır. Isınmıyorsa vana ve termostatik başlığı kontrol edin. Yine olmuyorsa ölçüsü banyonuz için yetersiz olabilir." },
      { q: "Havlupanı sonradan takabilir miyim?", a: "Bağlantı noktaları hazırsa takılır. Yeni hat çekilmesi gerekiyorsa duvar açılması gerektiği için tadilatla birlikte yapılması daha mantıklı." },
      { q: "Elektrikli havlupan çok mu harcar?", a: "Sürekli açık bırakılırsa harcar. Zaman ayarlı modellerde günde birkaç saat çalıştırmak hem yeterli oluyor hem tüketimi sınırlıyor." },
    ],
    related: ["banyo-tadilatinda-su-yalitimi", "petek-isinmiyor-ne-yapmali", "petek-mi-yerden-isitma-mi"],
  },

  {
    slug: "kombi-mi-degistirmeli-tamir-mi",
    title: "Kombi tamir mi edilmeli değiştirilmeli mi? Karar tablosu",
    category: "Bakım",
    published: "2026-02-11",
    updated: "2026-06-05",
    reading: 5,
    metaTitle: "Kombi Tamir mi Değişim mi? Yaş, Parça ve Maliyet",
    metaDesc:
      "Kombi yaşı, arızalı parça ve tamir maliyeti üzerinden karar tablosu. Hangi arızada tamir mantıklı, hangisinde yeni cihaz daha doğru?",
    keywords: ["kombi değişimi", "kombi tamiri", "kombi kaç yıl kullanılır", "eşanjör arızası", "kombi kartı"],
    excerpt: "Karar üç değişkene bakıyor: cihazın yaşı, giden parça ve tamir bedelinin yeni cihaza oranı. Üçünü yan yana koyduğunuzda cevap netleşiyor.",
    services: ["kombi-bakim-ariza", "kombi-petek-montaji", "dogalgaz-ic-tesisat"],
    intro:
      "Bu kararı duygusal ya da satış odaklı vermek yerine üç rakama bakarak vermek mümkün: cihazın yaşı, arızalı parçanın maliyeti ve yeni cihazın kurulumlu fiyatı.",
    body: [
      { h2: "Cihazın yaşı" },
      { p: "0–8 yaş arası cihazlarda neredeyse her arıza tamir edilir. Parça bulunabiliyor, cihazın önünde uzun bir ömür var." },
      { p: "8–14 yaş arası gri bölge; tek parça arızasında tamir mantıklı, büyük parça gittiğinde hesap yapmak gerekiyor. 15 yaş üstünde ise büyük parça arızasında değişim çoğu zaman daha doğru." },

      { h2: "Hangi parça gitti?" },
      { p: "Sensör, elektrot, üç yollu vana ve genleşme tankı görece ucuz parçalar; bunlarda yaş ne olursa olsun tamir öne çıkıyor." },
      { p: "Ana kart, ana eşanjör ve fan pahalı parçalar. Yaşlı bir cihazda bunlardan biri gittiğinde tamir bedeli yeni cihazın önemli bir kısmına çıkabiliyor." },

      { h2: "Yüzde 40 kuralı" },
      { p: "Pratikte kullandığımız basit bir eşik var: tamir maliyeti, kurulumlu yeni cihaz bedelinin yüzde 40'ını aşıyorsa değişimi konuşuyoruz. Altında kalıyorsa tamir öneriyoruz." },
      { p: "Bu kuralı cihazın yaşıyla birlikte değerlendirmek gerekiyor. 5 yaşındaki bir cihazda yüzde 50 tamir bile mantıklı olabilirken, 16 yaşındaki cihazda yüzde 30 bile tartışılır." },

      { h2: "Yoğuşmalıya geçiş" },
      { p: "Eski bacalı cihazdan yoğuşmalıya geçiş, verim farkı nedeniyle uzun vadede kendini amorti edebiliyor. Ama bu geçiş baca ve kondens tahliyesi gerektiriyor." },
      { p: "Kondens suyunun gidere bağlanabilmesi şart. Bunun mümkün olup olmadığını keşifte söylüyoruz; mümkün değilse yoğuşmalı öneremiyoruz." },

      { h2: "Değişimde tesisatı da düşünün" },
      { p: "Yeni kombi eski ve çamurlu bir tesisata bağlandığında kısa sürede eşanjörü tıkanıyor. Cihaz değişiminde tesisatın yıkanması ve manyetik filtre takılması, yeni cihazın ömrünü doğrudan uzatıyor." },
      { p: "Bu iki kalem çoğu teklifte olmuyor; biz ayrı satır olarak yazıyor ve neden gerektiğini anlatıyoruz." },
    ],
    faqs: [
      { q: "Kombi kaç yıl kullanılır?", a: "Bakımlı bir cihaz 12–18 yıl arasında kullanılabiliyor. Bakımsız cihazlarda bu süre iyice kısalıyor." },
      { q: "Yeni kombiyi ben alsam montajını yapar mısınız?", a: "Yaparız. Aynı yere montajda tesisat, tahliye ve baca bağlantısını biz yapıyoruz. Yeri değişiyorsa gaz hattı tarafı yetkili firmayla birlikte yürüyor." },
      { q: "Değişimde eski kombiyi ne yapıyorsunuz?", a: "Sökümü ve tahliyesi bizde. Talep ederseniz eski cihazı size bırakıyoruz." },
    ],
    related: ["kombi-bakimi-neden-gerekli", "kombi-hata-kodlari-ne-anlama-gelir", "dogalgaza-gecerken-dikkat"],
  },

  {
    slug: "kis-gelmeden-yapilacak-10-kontrol",
    title: "Kış gelmeden yapılacak 10 kontrol",
    category: "Bakım",
    published: "2026-02-25",
    updated: "2026-06-08",
    reading: 6,
    metaTitle: "Kış Hazırlığı: Evde Yapılacak 10 Kontrol",
    metaDesc:
      "Kombi, petek, çatı, oluk, pencere, dış musluk ve pano. Kış gelmeden bir öğleden sonrada yapabileceğiniz 10 kontrol ve neyi önlediği.",
    keywords: ["kış hazırlığı", "kombi sezon bakımı", "boru donması", "oluk temizliği", "çatı kontrolü"],
    excerpt: "Bir öğleden sonra ayıracağınız kontrol listesi, kışın ortasında acil çağrı yapmanızı önlüyor. Sırayla neye bakılır?",
    services: ["kombi-bakim-ariza", "cati-yapimi", "petek-temizligi", "elektrik-panosu"],
    intro:
      "Kış aylarında aldığımız acil çağrıların büyük kısmı, sonbaharda yarım saatte önlenebilecek şeylerden çıkıyor. Aşağıdaki liste, sırayla yapıldığında bir öğleden sonra sürüyor.",
    body: [
      { h2: "1. Kombi bakımını yaptırın" },
      { p: "Sezon başlamadan yapılan bakım hem verim hem güvenlik açısından listenin ilk maddesi. Kasımda randevu bulmak zorlaşıyor." },

      { h2: "2. Peteklerin havasını alın" },
      { p: "Yaz boyunca sistemde biriken hava üstte toplanıyor. Havalandırdıktan sonra basıncı 1,5 bara tamamlamayı unutmayın." },

      { h2: "3. Termostatik başlıkları hareket ettirin" },
      { p: "Yaz boyunca aynı konumda kalan başlıkların iğnesi sıkışabiliyor. Birkaç kez açıp kapatmak bu sıkışmayı çözüyor." },

      { h2: "4. Oda termostatının pilini değiştirin" },
      { p: "Basit ama en sık atlanan madde. Kışın ortasında biten pil, ısıtmanın hiç çalışmaması olarak karşınıza çıkıyor." },

      { h2: "5. Çatıyı ve mahyayı kontrol ettirin" },
      { p: "Kırık kiremit ve gevşemiş mahya, ilk fırtınada büyüyen bir soruna dönüşüyor. Kar yağmadan önce bakılması gereken bir kalem." },

      { h2: "6. Olukları ve iniş borularını temizletin" },
      { p: "Yaprakla dolan oluk yağmurda taşıyor, su duvara ve temele iniyor. Donma-çözülme döngüsünde bu, cephede kalıcı hasara dönüşüyor." },

      { h2: "7. Dış muslukları boşaltın" },
      { p: "Bahçe musluğunun içinde kalan su donduğunda boruyu çatlatıyor. İç vanadan kapatıp dış musluğu açık bırakarak boşaltın." },

      { h2: "8. Kışın kullanılmayan yerlerin tesisatını boşaltın" },
      { p: "Bağ evi, yazlık ve boş dairelerde ana vanayı kapatıp tesisatı boşaltmak gerekiyor. Dalgıç pompa ve hidrofor için de kış modu uygulanmalı." },

      { h2: "9. Pencere ve kapı contalarını gözden geçirin" },
      { p: "Elinizi kapalı pencerenin kenarına tutun; hava akımı hissediyorsanız conta yıpranmış demektir. Conta değişimi kısa ve ucuz bir iş, faturaya etkisi hissedilir." },

      { h2: "10. Panoyu ve kaçak akım rölesini test edin" },
      { p: "Kaçak akım rölesinin üzerindeki test tuşuna basın; röle atmıyorsa çalışmıyor demektir. Kışın ısıtıcı yükü artacağı için panonun sağlam olması önemli." },
      { p: "Isıtıcı, ısıtmalı halı ve elektrikli soba gibi cihazları çoklu prizden beslemeyin. Bu cihazlar doğrudan duvar prizinden çalıştırılmalı." },
    ],
    faqs: [
      { q: "Bu kontrolleri kendim yapabilir miyim?", a: "Çoğunu yapabilirsiniz. Çatı, oluk ve kombi bakımı için usta gerekiyor; diğerleri temel el işi bilgisiyle yapılabilir." },
      { q: "Bağ evini kışa nasıl hazırlarım?", a: "Ana su vanasını kapatın, tesisatı en alçak noktadan boşaltın, sifonlara antifriz koyun, dalgıç pompayı kış konumuna alın ve elektriği ana şalterden kesin." },
      { q: "Donan boru nasıl çözülür?", a: "Açık alev kullanmayın. Ortamı ısıtarak yavaşça çözülmesini sağlayın. Boru çatlamışsa su verildiğinde belli olur; vanayı kapalı tutup usta çağırın." },
    ],
    related: ["kombi-bakimi-neden-gerekli", "cati-akintisi-nereden-baslar", "kombi-basinci-neden-duser"],
  },
];

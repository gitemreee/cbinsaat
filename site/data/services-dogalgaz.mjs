// Doğalgaz ve ısıtma tarafı.
//
// ÖNEMLİ / YASAL ÇERÇEVE
// Doğalgaz iç tesisatı, dağıtım şirketinin yetkilendirdiği sertifikalı firmalar
// tarafından, onaylı proje üzerinden yapılır ve gaz açma işlemi dağıtım
// şirketinin kontrolüyle olur. Aşağıdaki metinler bu gerçeği açıkça yazar:
// projeyi ve gaz açma sürecini yetkili firmayla birlikte yürüttüğümüzü,
// kırım, güzergâh, petek ve tadilat tarafının bizde olduğunu söyler.
// Kendi sertifikanız varsa bu ifadeleri güncelleyin.

export const dogalgazServices = [
  {
    slug: "dogalgaz-ic-tesisat",
    title: "Doğalgaz İç Tesisatı",
    group: "Doğalgaz",
    icon: "fire",
    featured: true,
    priced: true,
    short: "Kolon çıkışından kombiye kadar iç tesisat güzergâhı, petek hattı ve gaz açma süreci.",
    metaTitle: "Malatya Doğalgaz İç Tesisatı ve Kombi Bağlantısı",
    metaDesc:
      "Malatya'da doğalgaz iç tesisatı: güzergâh, kolon bağlantısı, kombi ve petek hattı, baca kontrolü ve gaz açma süreci. Yetkili firmayla proje, uygulama bizde.",
    keywords: [
      "Malatya doğalgaz iç tesisat",
      "Malatya doğalgaz tesisatçısı",
      "kombi bağlantısı Malatya",
      "doğalgaz projesi Malatya",
      "gaz açtırma Malatya",
    ],
    intro:
      "Doğalgaz tesisatı, evdeki diğer tesisatlardan bir noktada ayrılıyor: burada hata yapmanın karşılığı su lekesi değil. Bu yüzden iç tesisat işi baştan sona kayıt altında yürüyor. Proje dağıtım şirketine onaylatılıyor, hat basınç testinden geçiyor, gaz ancak kontrol edildikten sonra açılıyor.",
    symptoms: [
      { title: "Yeni daireye gaz çekilecek", text: "Kolon hattı binada var ama daire içi tesisat yok; proje ve güzergâh gerekiyor." },
      { title: "Kombi yeri değişecek", text: "Mutfaktan balkona alınacaksa hat, baca ve tahliye güzergâhı yeniden çözülür." },
      { title: "Sobadan doğalgaza geçiliyor", text: "Petek hattı, kombi ve gaz hattı birlikte planlanmalı; sonradan eklemek duvarı ikinci kez açtırıyor." },
      { title: "Gaz kokusu alınıyor", text: "Bu bir bekleme durumu değil. Vanayı kapatın, pencereyi açın, elektrik düğmesine dokunmayın ve 187'yi arayın." },
    ],
    scope: [
      "İç tesisat güzergâh planı ve proje süreci",
      "Kolon çıkışı ve daire girişi bağlantısı",
      "Kombi gaz hattı ve tahliye güzergâhı",
      "Petek (radyatör) tesisatı ve kolektör",
      "Duvar kırımı, kanal açma ve sıva onarımı",
      "Baca uygunluk kontrolü ve gerekli düzenleme",
      "Basınç testi ve gaz açma sürecine eşlik",
      "Tesisat sonrası boya ve tadilat toparlaması",
    ],
    body: [
      { h2: "İşin hangi kısmı yetkili firmaya ait?" },
      { p: "Doğalgaz iç tesisatı, dağıtım şirketinin yetkilendirdiği sertifikalı firmalar tarafından yapılır ve gaz, onaylı proje ile kontrol sonrası açılır. Bunun kısayolu yok; olmadığını söyleyen varsa uzak durun." },
      { p: "Biz bu süreci yetkili firmayla birlikte yürütüyoruz. Projenin çıkarılması ve gaz açma tarafı yetkili firmada; güzergâhın belirlenmesi, kırım ve kanal, petek tesisatı, kolektör, sıva onarımı ve sonrasındaki tadilat işi bizde. Tek muhatap olarak takibi yapıyoruz, siz iki ayrı firmayla uğraşmıyorsunuz." },

      { h2: "Güzergâh, işin görünmeyen ama pahalı kısmı" },
      { p: "Gaz hattı görünür geçebilir, kanal içine alınabilir ya da tavandan dolaşabilir. Hangisinin uygun olduğu evin planına, kombinin yerine ve baca konumuna bağlı. Kısa görünen güzergâh çoğu zaman en çok kırım gerektireni oluyor." },
      { p: "Keşifte üç şeye bakıyoruz: kolon çıkışının yeri, kombinin duracağı nokta ve bacanın durumu. Bu üçü belli olunca güzergâh kendiliğinden ortaya çıkıyor. Metrajı buna göre çıkarıp yazılı veriyoruz." },

      { h2: "Petek hattını gazla aynı anda çekmek" },
      { p: "Sobadan doğalgaza geçen evlerde en sık yapılan hata, önce gazı çektirip petekleri sonraya bırakmak. İki iş ayrı zamanlarda yapıldığında aynı duvar iki kez açılıyor, sıva ve boya iki kez yapılıyor." },
      { p: "İkisi birlikte planlandığında hem maliyet düşüyor hem de kolektör, vana ve hat çapları birbirine göre seçilebiliyor. Kombinin kapasitesi de peteklerin toplam gücüne göre belirleniyor; önce kombi alıp sonra petek eklemek çoğu evde yetersiz ısınmayla sonuçlanıyor." },

      { h2: "Baca meselesi" },
      { p: "Hermetik kombide baca zorunlu değil ama duvar delme yeri ve tahliye yönü kurala bağlı. Bacalı kombide ise bacanın çekişi ve kesiti kontrol edilmeden montaj yapılmıyor. Eski binalarda ortak baca çoğu zaman uygun çıkmıyor ve hermetiğe geçmek gerekiyor." },
      { p: "Bunu keşifte söylüyoruz. Kombiyi aldıktan sonra bacanın uygun olmadığını öğrenmek, çoğu evde tesisat maliyetinden daha can sıkıcı bir sürpriz oluyor." },
    ],
    priceFactors: [
      "Hat uzunluğu ve güzergâhın kırım gerektirip gerektirmediği",
      "Petek sayısı ve kolektörlü sistem tercihi",
      "Kombi yeri değişikliği ve baca durumu",
      "Sıva onarımı ve boyanın dahil olup olmadığı",
      "Proje ve dağıtım şirketi bedelleri (ayrı kalem)",
    ],
    faqs: [
      { q: "Doğalgaz açtırma işlemini siz mi yapıyorsunuz?", a: "Proje ve gaz açma, dağıtım şirketinin yetkilendirdiği sertifikalı firma üzerinden yürüyor. Biz bu firmayla süreci birlikte yürütüyor, evrak ve randevu takibini üstleniyoruz. Uygulama, kırım, petek tesisatı ve sonrasındaki tadilat bizde." },
      { q: "Gaz kokusu alıyorum, ne yapmalıyım?", a: "Gaz vanasını kapatın, pencereleri açın, elektrik düğmelerine ve prizlere dokunmayın, çakmak yakmayın. Binadan çıkıp 187 Doğalgaz Acil hattını arayın. Bu durumda önce onlar gelir; biz sonrasındaki onarımı yaparız." },
      { q: "Kombiyi mutfaktan balkona alabilir miyiz?", a: "Çoğu dairede alınabiliyor. Gaz hattının, temiz su ve tesisat bağlantılarının ve tahliyenin yeni noktaya taşınması gerekiyor. Balkon kapalıysa havalandırma kuralları ayrıca kontrol ediliyor. Keşifte mümkün olup olmadığını net söylüyoruz." },
      { q: "Petekleri de siz mi takıyorsunuz?", a: "Evet. Kolektörlü ya da klasik hat şeklinde petek tesisatını biz kuruyoruz. Panel radyatör, havlupan ve yerden ısıtma seçeneklerini odanın ısı ihtiyacına göre birlikte belirliyoruz." },
      { q: "Ne kadar sürüyor?", a: "Standart bir dairede iç tesisat ve petek hattı 3–6 iş günü. Buna proje onayı ve dağıtım şirketinin gaz açma randevusu dahil değil; o süre şirketin yoğunluğuna bağlı." },
    ],
    localAngle: "Malatya'da sobadan doğalgaza geçişin hâlâ sürmesi ve eski binalarda ortak baca sorunu",
    related: ["kombi-petek-montaji", "petek-temizligi", "sihhi-tesisat", "komple-ev-tadilati"],
  },

  {
    slug: "kombi-bakim-ariza",
    title: "Kombi Bakımı ve Arıza",
    group: "Doğalgaz",
    icon: "fire",
    featured: false,
    priced: true,
    short: "Yıllık kombi bakımı, basınç ve ateşleme arızaları, peteklerin ısınmama sorunu.",
    metaTitle: "Malatya Kombi Bakımı ve Kombi Arıza Servisi",
    metaDesc:
      "Malatya'da kombi bakımı, ateşleme ve basınç arızası, radyatörlerin ısınmaması, su eksiltme sorunu. Aynı gün keşif, yazılı fiyat.",
    keywords: ["Malatya kombi bakımı", "kombi arıza Malatya", "kombi basınç düşüyor", "petek ısınmıyor Malatya"],
    intro:
      "Kombi arızalarının önemli bir kısmı kombiden kaynaklanmıyor. Basıncın düşmesi, peteklerin üstten soğuk kalması ya da sık sık kilitlenme; çoğu zaman tesisatın kendisiyle ilgili. Kombiyi değiştirmeden önce bunlara bakılması gerekiyor.",
    symptoms: [
      { title: "Basınç sürekli düşüyor", text: "Tesisatta sızıntı, genleşme tankı arızası veya emniyet ventili kaçırıyor olabilir." },
      { title: "Petekler üstten soğuk", text: "Hava yapmış. Purjörden hava alınması ve sonrasında basıncın tamamlanması gerekiyor." },
      { title: "Kombi kilitleniyor, hata veriyor", text: "Ateşleme, alev sensörü, düşük basınç ya da baca tahliyesi kaynaklı olabilir." },
      { title: "Sıcak su geliyor, petek ısınmıyor", text: "Üç yollu vana ya da pompa tarafında sorun var demektir." },
    ],
    scope: [
      "Yıllık bakım: yanma odası, eşanjör ve brülör temizliği",
      "Baca gazı ve tahliye kontrolü",
      "Basınç, genleşme tankı ve emniyet ventili kontrolü",
      "Petek hava alma ve denge ayarı",
      "Pompa ve üç yollu vana arızası",
      "Sensör, ateşleme ve kart arızası tespiti",
      "Tesisat sızıntısı araştırması",
      "Kombi değişimi ve montajı",
    ],
    body: [
      { h2: "Basınç neden düşüyor?" },
      { p: "Kapalı bir ısıtma tesisatında suyun azalması için bir yerden çıkması gerekir. Basınç haftada bir tamamlanıyorsa tesisatta sızıntı var demektir; petek altı, vana rakoru ve kombi içi en sık noktalar." },
      { p: "İkinci ihtimal genleşme tankı. Tankın havası kaçtığında su ısınıp genleştikçe basınç yükseliyor, emniyet ventili suyu dışarı atıyor, soğuyunca basınç düşüyor. Tank kontrolü kısa bir işlem ve kombiyi değiştirmekten çok daha ucuz." },

      { h2: "Bakım gerçekten gerekli mi?" },
      { p: "Yılda bir yapılan bakımın iki faydası var: yanma verimi ve güvenlik. Kirli bir eşanjör aynı sıcaklık için daha fazla gaz yakıyor; bu doğrudan faturaya yansıyor. Baca tarafındaki tıkanma ise karbonmonoksit riski demek." },
      { p: "Sezon başında yapılan bakım, ilk soğukta kombinin çalışmaması ihtimalini de düşürüyor. Kasım ayında arıza yoğunluğunun neden arttığını buradan anlayabilirsiniz." },

      { h2: "Ne zaman tamir, ne zaman değişim?" },
      { p: "Kombi 15 yaşını geçtiyse ve kart, eşanjör gibi büyük parçalardan biri gitmişse, tamir çoğu zaman ekonomik olmuyor. 8–12 yaş aralığında ise tek parça arızasında tamir mantıklı." },
      { p: "Kararı size bırakmadan önce iki rakamı yan yana koyuyoruz: tamir maliyeti ve yeni kombi maliyeti. Yeni kombi öneriyorsak nedenini yazıyoruz; sadece satmak için değişim önermiyoruz." },
    ],
    priceFactors: [
      "Bakım mı, arıza tespiti mi",
      "Değişecek parça (sensör, pompa, kart, eşanjör)",
      "Tesisat sızıntısı araştırması gerekip gerekmediği",
      "Kombi markası ve parça temini",
      "Kombi değişiminde eski cihazın sökümü",
    ],
    faqs: [
      { q: "Kombi bakımını yılda kaç kez yaptırmalıyım?", a: "Yılda bir, ısıtma sezonu başlamadan önce yeterli. Yoğuşmalı kombilerde de aynı; sadece temizlik yöntemi farklı." },
      { q: "Petekler üstten soğuk, alttan sıcak. Sorun ne?", a: "Hava yapmış. Purjör anahtarıyla havası alınıp kombideki basınç 1,5 bara tamamlanınca düzeliyor. Sürekli tekrarlıyorsa tesisatta hava girişi var demektir, bakmak gerekiyor." },
      { q: "Her marka kombiye bakıyor musunuz?", a: "Arıza tespiti ve tesisat kaynaklı sorunlarda marka fark etmiyor. Garantisi devam eden cihazlarda yetkili servise yönlendiriyoruz; garantiyi düşürecek bir işlem yapmıyoruz." },
      { q: "Kombiyi ben aldım, montajını yapar mısınız?", a: "Yapıyoruz. Yeri değişiyorsa gaz hattı tarafı yetkili firmayla birlikte yürüyor; aynı yere montajda tesisat, tahliye ve baca bağlantısını biz yapıyoruz." },
    ],
    localAngle: "Malatya kışının uzun sürmesi ve sezon başında kombi arıza yoğunluğunun artması",
    related: ["dogalgaz-ic-tesisat", "petek-temizligi", "kombi-petek-montaji"],
  },

  {
    slug: "yerden-isitma",
    title: "Yerden Isıtma Sistemi",
    group: "Doğalgaz",
    icon: "fire",
    featured: false,
    priced: true,
    short: "Yerden ısıtma serpantini, kolektör, şap ve test. Tadilatla birlikte planlanır.",
    metaTitle: "Malatya Yerden Isıtma Sistemi Kurulumu",
    metaDesc:
      "Malatya'da yerden ısıtma kurulumu: serpantin, kolektör, ısı yalıtımı, şap ve basınç testi. Daire tadilatıyla birlikte planlanır.",
    keywords: ["Malatya yerden ısıtma", "yerden ısıtma kurulumu", "yerden ısıtma fiyat Malatya", "kolektör montajı"],
    intro:
      "Yerden ısıtma, doğru kurulduğunda peteğe göre daha düşük su sıcaklığıyla aynı konforu veriyor. Yanlış kurulduğunda ise altına ulaşmak için zemini sökmek gerekiyor. Bu yüzden bu iş, tadilatın en başında karar verilmesi gereken kalemlerden biri.",
    symptoms: [
      { title: "Yeni tadilat planlanıyor", text: "Zemin nasılsa sökülecekse yerden ısıtmanın maliyeti belirgin şekilde düşüyor." },
      { title: "Peteklerin yer kaplaması istenmiyor", text: "Küçük odalarda duvar boyunca petek yeri açmak zor oluyor." },
      { title: "Villa ve dubleks ısınmıyor", text: "Yüksek tavanlı hacimlerde yerden ısıtma sıcaklığı daha dengeli dağıtıyor." },
      { title: "Islak hacimlerde soğuk zemin", text: "Banyo ve mutfak için kısmi uygulama da yapılabiliyor." },
    ],
    scope: [
      "Isı ihtiyacı hesabı ve zon planı",
      "Isı yalıtım levhası ve kenar bandı",
      "Serpantin döşeme (PEX / PERT boru)",
      "Kolektör kabini, vana ve debi ayarı",
      "Basınç testi ve şap öncesi kontrol",
      "Şap dökümü ve kuruma takibi",
      "Oda termostatı ve zon kontrolü",
      "Kombi/ısı kaynağı uyumlandırma",
    ],
    body: [
      { h2: "Şaptan önce test, şaptan sonra değil" },
      { p: "Serpantin döşendikten sonra hat basınç altına alınıyor ve şap bu basınçla dökülüyor. Amaç, döküm sırasında bir yere darbe gelirse hemen fark edilmesi. Şap kuruduktan sonra ortaya çıkan bir kaçak, o zemini yeniden sökmek demek." },
      { p: "Bu adımı atlayan uygulamalar var. Biz test basıncını ölçüp fotoğraflıyor, dosyaya koyuyoruz." },

      { h2: "Kat yüksekliğini hesaba katın" },
      { p: "Yalıtım levhası, serpantin ve şap birlikte zemini 6–8 cm yükseltiyor. Kapı altlarının, balkon eşiğinin ve merdiven basamaklarının buna göre planlanması gerekiyor. Tadilat başlamadan bu ölçü konuşulmazsa kapıların kesilmesi gündeme geliyor." },
      { p: "Alçak tavanlı dairelerde ince şaplı sistemler kullanılabiliyor; maliyeti biraz artıyor ama yükseklik kaybı 4 cm'e iniyor." },

      { h2: "Isınma yavaş, ama daha dengeli" },
      { p: "Yerden ısıtma peteğe göre daha yavaş ısıtır, karşılığında daha yavaş soğur. Sürekli oturulan evlerde bu bir avantaj; haftada bir gidilen yazlıkta ise dezavantaj. Kullanım şekli, sistem seçiminin ilk sorusu." },
      { p: "Zemin kaplaması da önemli. Seramik ve doğal taş ısıyı iyi iletiyor; kalın halı ve bazı laminat türleri verimi düşürüyor. Kaplama seçimini sistem kararıyla birlikte yapmak gerekiyor." },
    ],
    priceFactors: [
      "Uygulanacak alan (m²) ve zon sayısı",
      "Boru tipi ve serpantin aralığı",
      "Yalıtım kalınlığı ve şap tipi",
      "Kolektör, vana ve termostat seçimi",
      "Mevcut zeminin sökülüp sökülmeyeceği",
    ],
    faqs: [
      { q: "Mevcut evde yerden ısıtma yapılabilir mi?", a: "Yapılabilir ama zeminin sökülmesi gerekiyor. Zaten tadilat düşünüyorsanız maliyeti çok daha makul; sadece yerden ısıtma için zemin sökmek genelde ekonomik olmuyor." },
      { q: "Peteklerle birlikte kullanılır mı?", a: "Kullanılır. Yaygın çözüm, ıslak hacimlerde ve salonda yerden ısıtma, yatak odalarında petek. Kolektör buna göre planlanıyor." },
      { q: "Boru patlarsa ne oluyor?", a: "Serpantin şap içinde eksiz döşenir; ek yeri olmadığı için patlama riski çok düşüktür. Riskin asıl kaynağı şap dökümü sırasındaki darbe, o yüzden hat basınçlıyken döküyoruz." },
      { q: "Ne kadar sürer?", a: "100 m² bir dairede serpantin ve kolektör 2–3 gün. Şap sonrası kuruma süresi ayrı; kaplamaya geçmeden önce beklenmesi gerekiyor." },
    ],
    localAngle: "Malatya'da villa ve dubleks yapılarda yerden ısıtma talebinin artması",
    related: ["dogalgaz-ic-tesisat", "banyo-tadilati", "komple-ev-tadilati", "villa-dubleks-tadilati"],
  },
];

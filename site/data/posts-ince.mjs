// Blog: ince işler, boya, alçı, kaplama ve doğrama konulu yazılar.

export const incePosts = [
  {
    slug: "boya-neden-kabarir",
    title: "Boya neden kabarır, çatlar, dökülür?",
    category: "İnce İşler",
    published: "2025-09-08",
    updated: "2026-05-21",
    reading: 5,
    metaTitle: "Boya Neden Kabarır? Nem, Astar ve Yüzey Hazırlığı",
    metaDesc:
      "Kabarma, çatlama ve dökülmenin sebepleri: nem, atlanan astar, tozlu yüzey ve uyumsuz ürün. Kalıcı çözüm için sıra.",
    keywords: ["boya kabarıyor", "boya çatlıyor", "astar", "yüzey hazırlığı", "iç cephe boya"],
    excerpt: "Boyanın ömrünü markası değil altındaki yüzey belirliyor. Kabarmanın dört sebebi ve her birinin çözümü.",
    services: ["boya-badana", "ince-insaat-isleri", "su-kacagi-tespiti"],
    intro:
      "Yeni boyanmış bir duvarın birkaç ayda kabarması sık karşılaştığımız bir şikâyet. Sebep neredeyse hiçbir zaman boyanın kendisi değil; altındaki katmanda bir sorun var.",
    body: [
      { h2: "1. Nem" },
      { p: "Nemli bir duvarı boyamak, sorunu iki ay ertelemek demek. Nem boyanın altında buhar basıncı oluşturuyor ve filmi yüzeyden ayırıyor." },
      { p: "Nemin kaynağı üç yerden biri: tesisat kaçağı, dış cepheden su girişi ya da yoğuşma. Boyamadan önce kaynağın bulunup giderilmesi ve duvarın kuruması gerekiyor." },

      { h2: "2. Astar atlanmış" },
      { p: "Astarın işi, emici yüzeyi dengelemek ve boyanın tutunmasını sağlamak. Yeni sıva ve alçı yüzeylerde astarsız boya, emilerek matlaşıyor ve tutunamıyor." },
      { p: "Astar teklifte ayrı satır olarak yazılmalı. Fiyatı düşürmek için bu adımı çıkaran teklifler var; kısa vadede ucuz, orta vadede pahalı." },

      { h2: "3. Tozlu ve gevşek yüzey" },
      { p: "Eski boyanın tebeşirlenmiş yüzeyine ya da tozlu alçıya atılan boya, yüzeye değil toza yapışıyor. Bir süre sonra o toz tabakasıyla birlikte kalkıyor." },
      { p: "Çözüm zımpara ve iyi bir toz alma. Gerekiyorsa penetrasyon astarı ile yüzey sağlamlaştırılıyor." },

      { h2: "4. Uyumsuz ürün" },
      { p: "Su bazlı boyanın üstüne solvent bazlı ürün ya da tam tersi uygulandığında tutunma sorunu çıkıyor. Eski yağlı boyalı yüzeylerde bu sık görülüyor." },
      { p: "Eski yüzeyin ne olduğu bilinmiyorsa küçük bir alanda deneme yapmak en sağlıklısı. Bir gün bekleyip bant testiyle tutunma kontrol ediliyor." },

      { h2: "Çatlaklar" },
      { p: "Saç teli inceliğindeki çatlaklar genelde sıva büzülmesinden; bunlar açılıp macunlanıyor ve gerekiyorsa file uygulanıyor." },
      { p: "Genişleyen, kademeli ve kapı-pencere köşelerinden çıkan çatlaklar yapısal olabiliyor. Bunları sadece macunlamak sorunu tekrar ettiriyor." },

      { h2: "Doğru sıra" },
      { ol: [
        "Nemin kaynağını gider, duvarın kurumasını bekle",
        "Kabarmış ve gevşek boyayı raspala",
        "Çatlakları aç, macunla, gerekiyorsa file uygula",
        "Zımpara ve toz alma",
        "Astar uygula",
        "İki kat boya (kat araları kurumaya bırakılarak)",
      ] },
    ],
    faqs: [
      { q: "Kaç kat boya gerekir?", a: "Standart uygulama astar + iki kat. Koyu renkten açık renge geçişte üç kat gerekebiliyor." },
      { q: "Boya kokusu ne kadar sürer?", a: "Su bazlı boyalarda birkaç saat içinde büyük ölçüde geçiyor. Havalandırarak aynı gün oturulabiliyor." },
      { q: "Duvardaki nem kurudu mu, nasıl anlarım?", a: "Yüzey nem ölçer ile ölçüyoruz. Gözle kuru görünen duvar içeride nem barındırabiliyor; ölçüm yapmadan boyaya başlamıyoruz." },
    ],
    related: ["cepheden-nem-alan-duvar", "alci-mi-macun-mu", "duvar-dalgali-nasil-duzeltilir"],
  },

  {
    slug: "alci-mi-macun-mu",
    title: "Saten alçı mı macun mu? Hangi yüzeyde hangisi",
    category: "İnce İşler",
    published: "2025-09-22",
    updated: "2026-05-24",
    reading: 4,
    metaTitle: "Saten Alçı mı Macun mu? Yüzeye Göre Seçim",
    metaDesc:
      "Saten alçı ve macun arasındaki fark, hangi yüzeyde hangisinin uygulandığı ve maliyet-sonuç dengesi.",
    keywords: ["saten alçı", "macun", "alçı sıva", "duvar düzeltme", "iç cephe hazırlık"],
    excerpt: "İkisi aynı iş değil. Saten alçı yüzey oluşturuyor, macun ise mevcut yüzeyi onarıyor. Hangi durumda hangisi?",
    services: ["ince-insaat-isleri", "boya-badana", "alcipan-asma-tavan"],
    intro:
      "Boya öncesi hazırlıkta iki ürün karıştırılıyor: saten alçı ve macun. İkisi farklı işler yapıyor ve yanlış tercih hem maliyeti hem sonucu etkiliyor.",
    body: [
      { h2: "Saten alçı ne yapar?" },
      { p: "Kaba sıvanın üstüne uygulanan, ince taneli ve düzgün bir yüzey oluşturan katman. Duvarın son yüzeyini o oluşturuyor." },
      { p: "Yeni yapılarda ve kaba sıva üzerinde standart uygulama. Yaklaşık 2–3 mm kalınlıkta, iki kat hâlinde çekiliyor." },

      { h2: "Macun ne yapar?" },
      { p: "Mevcut düzgün bir yüzeydeki lokal kusurları (çatlak, darbe izi, delik) onarmak için kullanılıyor. Tüm duvara uygulanan bir katman değil." },
      { p: "Tadilat ve yenileme işlerinde, yüzey zaten satenli ve düzgünse macun yeterli oluyor. Bu, hem daha hızlı hem daha ekonomik." },

      { h2: "Hangi durumda hangisi?" },
      { ul: [
        "Yeni sıva, hiç boyanmamış duvar → saten alçı",
        "Alçıpan yüzey → derz bandı + macun (saten gerekmez)",
        "Eski satenli duvar, yer yer kusurlu → macun + zımpara",
        "Eski duvar, yüzey dalgalı ve bozuk → saten alçı",
        "Islak hacim duvarı → su dayanımlı ürün, saten değil",
      ] },

      { h2: "Saten kalınlığı ve dalgalanma" },
      { p: "Saten alçı, kaba sıvanın dalgalarını düzeltmek için değil, yüzeyi inceltmek için var. 2–3 mm ile büyük dalgalanmalar kapatılamıyor." },
      { p: "Duvar açıkça dalgalıysa önce kaba sıva düzeltmesi gerekiyor. Bunu satenle çözmeye çalışmak hem kalınlık hem çatlama sorunu yaratıyor." },

      { h2: "Zımpara ve toz" },
      { p: "Saten sonrası zımpara işin en tozlu kısmı. Toz emicili zımpara makinesi kullanmak, ortama yayılan tozu epeyce azaltıyor." },
      { p: "Eşyalı evde bu fark büyük. Klasik zımparada toz eve dağılıyor ve temizlik günler alıyor." },

      { h2: "Kuruma süresi" },
      { p: "Saten kat araları ve son kat sonrası kuruma beklenmeli. Erken boyanan saten, boyanın altında nem bırakıyor ve leke yapıyor." },
      { p: "Havalandırma bu süreyi kısaltıyor. Kışın kapalı ortamda süre uzuyor; programa bu şekilde yazıyoruz." },
    ],
    faqs: [
      { q: "Alçıpanda saten gerekir mi?", a: "Gerekmiyor. Derz bandı ve derz macunu ile birleşimler kapatılıyor, sonra zımpara ve astar yeterli oluyor. Tam düz bir yüzey isteniyorsa ince bir saten çekilebiliyor." },
      { q: "Banyoda saten kullanılır mı?", a: "Fayans olmayan bölümlerde su dayanımlı ürünler tercih ediliyor. Standart saten nemli ortamda zamanla sorun çıkarıyor." },
      { q: "Ne kadar sürer?", a: "120 m² dairede saten çekimi ve zımpara 4–6 iş günü. Kuruma süreleri buna ek." },
    ],
    related: ["boya-neden-kabarir", "duvar-dalgali-nasil-duzeltilir", "alcipan-nerede-kullanilir"],
  },

  {
    slug: "duvar-dalgali-nasil-duzeltilir",
    title: "Duvar dalgalı: nasıl anlaşılır, nasıl düzeltilir?",
    category: "İnce İşler",
    published: "2025-10-06",
    updated: "2026-05-29",
    reading: 4,
    metaTitle: "Dalgalı Duvar Nasıl Düzeltilir? Kontrol ve Çözüm",
    metaDesc:
      "Duvarın düzgünlüğü nasıl kontrol edilir, dalgalanma hangi aşamada düzeltilir ve ışığın kusurları nasıl büyüttüğü.",
    keywords: ["dalgalı duvar", "duvar düzeltme", "mastar", "sıva terazisi", "duvar kontrolü"],
    excerpt: "Dalgalanma en çok yandan gelen ışıkta belli oluyor. Gizli aydınlatmalı tavan ve büyük pencereli salonlarda daha da görünür.",
    services: ["ince-insaat-isleri", "boya-badana", "alcipan-asma-tavan"],
    intro:
      "Bitmiş bir dairede en çok konuşulan kusurlardan biri dalgalı duvar. Çoğu duvarda küçük bir dalgalanma zaten var; sorun ışığın onu görünür kılması.",
    body: [
      { h2: "Nasıl kontrol edilir?" },
      { p: "En basit yöntem: duvara paralel, yakın mesafeden bir el feneri tutmak. Yandan gelen ışık en küçük dalgayı bile gölge olarak gösteriyor." },
      { p: "Daha kesin yöntem 2 metrelik mastarı duvara dayamak. Mastar ile duvar arasındaki boşluk ölçülüyor; kabul edilebilir tolerans milimetre düzeyinde." },

      { h2: "Işık kusurları büyütür" },
      { p: "Gizli bant aydınlatmalı tavanlarda ışık duvara paralel iniyor ve her kusuru gösteriyor. Büyük pencereli salonlarda da aynı etki var." },
      { p: "O yüzden keşifte aydınlatma planını konuşuyoruz. Nereye bant aydınlatma geleceğini bilirsek o duvarlarda daha titiz çalışıyoruz." },

      { h2: "Hangi aşamada düzeltilir?" },
      { p: "Dalgalanmanın düzeltileceği yer kaba sıva aşaması. Sıva mastarla, alüminyum köşebentler arasında çekildiğinde düzgün çıkıyor." },
      { p: "Saten alçı 2–3 mm kalınlıkta; büyük dalgalanmayı kapatmıyor. Sıva aşaması atlanmışsa saten çözüm olmuyor." },

      { h2: "Mevcut duvarda ne yapılabilir?" },
      { p: "Küçük dalgalanmalar kalın saten ya da kademeli macun uygulamasıyla düzeltilebiliyor. Sabır ve birkaç kat gerektiriyor." },
      { p: "Belirgin bozuk duvarlarda en kesin çözüm alçıpan kaplama. Metal profil üzerine kurulan alçıpan, arkadaki bozuk yüzeyden bağımsız düz bir yüzey veriyor." },

      { h2: "Alçıpan kaplama ne kaybettirir?" },
      { p: "Profil ve levha kalınlığı duvardan 4–7 cm yer alıyor. Küçük odalarda bu hissedilir bir kayıp." },
      { p: "Buna karşılık arkasına yalıtım konabiliyor ve tesisat gizlenebiliyor. Dış duvarlarda bu, iki sorunu birden çözen bir çözüm oluyor." },

      { h2: "Köşeler ve pencere kenarları" },
      { p: "Köşelerin düzgünlüğü, duvar yüzeyinden daha çok göze çarpıyor. Alüminyum köşe profili kullanmak hem düzgünlük hem darbe dayanımı sağlıyor." },
      { p: "Pencere kenarları da aynı şekilde; buradaki eğrilik perde takıldığında ve gün ışığında hemen belli oluyor." },
    ],
    faqs: [
      { q: "Ne kadar dalgalanma normal?", a: "2 metrelik mastarda birkaç milimetre tolerans normal kabul ediliyor. Bunun üzerindeki sapmalar düzeltilmeli." },
      { q: "Boyadan sonra fark ettim, ne yapmalıyım?", a: "Lokal kusurlar macun ve zımparayla düzeltilip o bölge yeniden boyanabiliyor. Yaygınsa saten katı gerekiyor ve tüm duvar yeniden boyanıyor." },
      { q: "Mat boya kusuru gizler mi?", a: "Gizler. Parlak ve yarı mat boyalar ışığı yansıttığı için kusuru büyütüyor. Dalgalı duvarda mat boya tercih etmek işe yarıyor." },
    ],
    related: ["tavan-dalgali-nasil-duzeltilir", "alci-mi-macun-mu", "boya-neden-kabarir", "alcipan-nerede-kullanilir"],
  },

  {
    slug: "alcipan-nerede-kullanilir",
    title: "Alçıpan nerede kullanılır, nerede kullanılmaz?",
    category: "İnce İşler",
    published: "2025-10-20",
    updated: "2026-06-01",
    reading: 5,
    metaTitle: "Alçıpan Kullanım Alanları ve Plaka Tipleri",
    metaDesc:
      "Standart, nem dayanımlı ve yangın dayanımlı alçıpan farkı; bölme duvar, asma tavan ve kaplama uygulamaları.",
    keywords: ["alçıpan", "nem dayanımlı alçıpan", "yangın alçıpan", "bölme duvar", "asma tavan"],
    excerpt: "Alçıpan hızlı ve esnek ama her yere aynı plaka konmuyor. Renk kodları neyi anlatıyor?",
    services: ["alcipan-asma-tavan", "ince-insaat-isleri", "ofis-ticari-alan"],
    intro:
      "Alçıpan, tuğla duvara göre hızlı, hafif ve içinden tesisat geçirilebilen bir sistem. Ama plaka seçimi ve detaylar doğru yapılmazsa avantajları dezavantaja dönüşüyor.",
    body: [
      { h2: "Plaka tipleri" },
      { ul: [
        "Beyaz/gri (standart): kuru mekân duvar ve tavanları",
        "Yeşil (nem dayanımlı): banyo, mutfak, ıslak hacim çevresi",
        "Kırmızı/pembe (yangın dayanımlı): kaçış koridoru, kazan dairesi bitişiği, asansör kuyusu",
        "Mavi (ses yalıtımlı): yoğun ses yalıtımı gereken bölmeler",
      ] },
      { p: "Renk kodları üreticiye göre küçük farklar gösterebiliyor ama mantık aynı. Islak hacimde standart plaka kullanmak, birkaç yıl içinde şişme ve dağılma demek." },

      { h2: "Bölme duvar" },
      { p: "Alçıpan bölme, tuğlaya göre çok daha hızlı kuruluyor ve zemine yük bindirmiyor. Üst katlarda ve mevcut yapıda oda bölmede avantajlı." },
      { p: "Ses yalıtımı için profil arasına taş yünü dolgu ve gerekiyorsa çift kat plaka gerekiyor. Boş bölme sesi neredeyse hiç durdurmuyor." },

      { h2: "Asma tavan" },
      { p: "Tavan içinden geçen kablo, kanal ve boruları gizliyor. Gizli aydınlatma için kademeli detaylar yapılabiliyor." },
      { p: "Bakım gerektiren noktalara revizyon kapağı bırakılmalı. Kapak bırakılmayan tavanlar ilk arızada kesilerek açılıyor ve bir daha eski hâline dönmüyor." },

      { h2: "Nerede kullanılmaz?" },
      { p: "Doğrudan su teması olan yerlerde (duş içi duvarı) alçıpan tek başına yeterli değil; su yalıtımı ve seramik gerekiyor." },
      { p: "Dış mekânda ve sürekli nemli ortamlarda kullanılmıyor. Ayrıca ağır yük taşıyacak duvarlarda takviye planlanmadan kullanılmamalı." },

      { h2: "Ağır yük asmak" },
      { p: "TV, raf ve dolap asılacak noktalar önceden söylenmeli; o bölgelere profil arası takviye konuyor." },
      { p: "Sonradan asmak için özel dübeller var ama ağır yüklerde güvenli olmuyor. Takviye, montaj sırasında yapılacak birkaç dakikalık iş." },

      { h2: "Derz ve çatlama" },
      { p: "Plaka birleşimlerine derz bandı uygulanmadığında zamanla çizgi hâlinde çatlak çıkıyor. Bu, alçıpanda en sık görülen kusur." },
      { p: "Köşelere köşe profili, tavan-duvar birleşimine ise hareket derzi ya da esnek dolgu konması gerekiyor; yapı hareket ettiğinde çatlak burada oluşuyor." },
    ],
    faqs: [
      { q: "Alçıpan duvar ses geçirir mi?", a: "Boş bölme geçirir. Taş yünü dolgu ve çift kat plaka ile ses yalıtımı epeyce artıyor. Duvarın asma tavan üstünden döşemeye kadar devam etmesi de şart." },
      { q: "Alçıpan tavan kaç santim alçaltır?", a: "Düz tavanda 8–12 cm, gizli aydınlatmalı kademeli tavanda 15–20 cm." },
      { q: "Islanırsa ne olur?", a: "Standart plaka ıslandığında şişip dağılıyor ve değişmesi gerekiyor. Nem dayanımlı plaka kısa süreli neme dayanıyor ama sürekli suya değil." },
    ],
    related: ["duvar-dalgali-nasil-duzeltilir", "alci-mi-macun-mu", "ofis-kurulumunda-altyapi"],
  },

  {
    slug: "seramik-bos-ses-veriyor",
    title: "Seramik boş ses veriyor: sebebi ve çözümü",
    category: "İnce İşler",
    published: "2025-11-03",
    updated: "2026-06-02",
    reading: 4,
    metaTitle: "Seramik Neden Boş Ses Verir? Yapıştırma Hatası",
    metaDesc:
      "Boş ses veren seramiğin sebepleri: eksik yapıştırıcı, tozlu zemin, derz yokluğu ve nem. Ne zaman sökmek gerekir?",
    keywords: ["seramik boş ses", "seramik kalkıyor", "fayans çatladı", "derz aralığı"],
    excerpt: "Boş ses, altında hava boşluğu olduğunu gösteriyor. Zamanla o karo kırılıyor ya da kalkıyor.",
    services: ["seramik-fayans", "sap-zemin-hazirligi", "banyo-tadilati"],
    intro:
      "Seramiğe elinizle ya da bir madeni parayla vurduğunuzda çıkan tok ses normal; boş ve yankılı ses ise altında hava boşluğu olduğunu gösteriyor. O karo er ya da geç sorun çıkarıyor.",
    body: [
      { h2: "1. Yapıştırıcı tam yayılmamış" },
      { p: "En yaygın sebep. Yapıştırıcı sadece dört köşeye ya da ortaya konarak döşenen karolarda temas alanı yetersiz kalıyor." },
      { p: "Doğru yöntem tarak (dişli mala) ile tüm yüzeye yayıp karoyu oynatarak yerleştirmek. Büyük ebat karolarda ayrıca karonun arkasına da ince bir kat sürülüyor." },

      { h2: "2. Zemin tozlu ya da kirli" },
      { p: "Toz, yapıştırıcı ile zemin arasında bir ayırıcı tabaka oluşturuyor. Yapıştırıcı zemine değil toza yapışıyor." },
      { p: "Döşemeden önce zeminin süpürülüp gerekiyorsa astarlanması gerekiyor. Emici zeminlerde astar, yapıştırıcının suyunu kaçırmasını da önlüyor." },

      { h2: "3. Derz aralığı bırakılmamış" },
      { p: "Seramik ısı ve nemle genleşiyor. Derzsiz döşenen zeminlerde karolar birbirini itip kalkıyor, ortada kabarma oluşuyor." },
      { p: "Ayrıca duvar diplerinde ve büyük alanlarda genleşme derzi bırakılması gerekiyor. Bu detay atlandığında hasar tek bir karoyla sınırlı kalmıyor." },

      { h2: "4. Altta nem var" },
      { p: "Yeterince kurumamış şapın üstüne döşenen seramikte, şapın nemi yapıştırıcının priz almasını bozuyor." },
      { p: "Klasik şapta her santim için kabaca bir hafta kuruma bekleniyor. Bu süre kısaltıldığında sorun aylar sonra ortaya çıkıyor." },

      { h2: "Ne zaman sökmek gerekir?" },
      { p: "Tek tük karoda boş ses varsa ve kırılma yoksa, izlenebiliyor. Zamanla kırılırsa o karo tek başına değiştirilebiliyor." },
      { p: "Geniş bir alanda yaygın boş ses varsa ya da karolar kabarıp kalkmaya başladıysa sökümü gerekiyor. Öyle bir durumda zemin hazırlığı da yenileniyor." },

      { h2: "Tek karo değişimi" },
      { p: "Derzler kesilip karo dikkatlice kırılarak çıkarılıyor, altı temizleniyor ve yeni karo döşeniyor. Aynı seri karo bulunması önemli." },
      { p: "O yüzden döşemeden sonra birkaç fazla karoyu saklamanızı öneriyoruz. Yıllar sonra aynı seriyi bulmak çoğu zaman mümkün olmuyor." },
    ],
    faqs: [
      { q: "Boş ses veren her karo değişmeli mi?", a: "Hayır. Kırılma ve hareket yoksa izlenebiliyor. Islak hacimlerde ise su altına girebileceği için daha temkinli davranmak gerekiyor." },
      { q: "Derz rengi neden kararıyor?", a: "Normal çimento esaslı derz gözenekli olduğu için kir tutuyor. Epoksi derz leke tutmuyor ve rengini koruyor; maliyeti yüksek ama banyoda ve mutfak tezgâh arasında değer." },
      { q: "Eski fayansın üstüne döşenir mi?", a: "Teknik olarak mümkün ama önermiyoruz; kot yükseliyor, altta boşluk varsa taşınıyor ve banyoda su yalıtımı yenilenemiyor." },
    ],
    related: ["seramik-mi-parke-mi", "sap-kurumadan-parke-doseme", "banyo-tadilatinda-su-yalitimi"],
  },

  {
    slug: "sap-kurumadan-parke-doseme",
    title: "Şap kurumadan parke döşenirse ne olur?",
    category: "İnce İşler",
    published: "2025-11-17",
    updated: "2026-06-03",
    reading: 4,
    metaTitle: "Şap Kuruma Süresi ve Parke Döşeme Zamanı",
    metaDesc:
      "Şap kaç günde kurur, nem ölçümü nasıl yapılır ve erken döşenen parkede ne olur? Hızlı şap alternatifi.",
    keywords: ["şap kuruma süresi", "parke döşeme", "zemin nem ölçümü", "hızlı şap"],
    excerpt: "Şap kuru görünse de içinde nem barındırıyor. Ölçmeden döşenen parke birkaç ayda kabarıyor.",
    services: ["sap-zemin-hazirligi", "parke-laminat", "yerden-isitma"],
    intro:
      "Tadilatta en çok baskı yapılan bekleme şap kuruması. Program sıkışınca ilk kısaltılmak istenen süre bu oluyor ve sonucu birkaç ay içinde parkede görünüyor.",
    body: [
      { h2: "Ne kadar beklenir?" },
      { p: "Klasik çimento şapta kabaca her santimetre için bir hafta hesaplanıyor. 5 cm şap için 4–6 hafta." },
      { p: "Bu süre ortam sıcaklığı ve havalandırmaya göre değişiyor. Kışın kapalı ortamda uzuyor, yazda havalandırmayla kısalıyor." },

      { h2: "Erken döşenirse ne olur?" },
      { p: "Şapın nemi parkenin altında hapsoluyor. Laminat kenarlardan kabarıyor, kilitler açılıyor, zamanla ses yapmaya başlıyor." },
      { p: "Ahşap parkede ise nem emen tahtalar şişiyor ve kuruyunca çekiyor; aralar açılıyor. İkisinde de çözüm sökmek ve yeniden döşemek." },

      { h2: "Nem nasıl ölçülür?" },
      { p: "Zemin nem ölçüm cihazıyla birkaç noktadan ölçüm yapılıyor. Ürün üreticisinin belirttiği eşiğin altına inmesi bekleniyor." },
      { p: "Ölçüm birkaç dakikalık iş ve sonucunu size gösteriyoruz. Uygun değilse beklemek gerekiyor; bu bekleme parkeyi ikinci kez döşemekten ucuz." },

      { h2: "Hızlı şap alternatifi" },
      { p: "Program çok sıkışıksa hızlı kuruyan şap ürünleri kullanılabiliyor. Kuruma süresi günlere iniyor." },
      { p: "Maliyeti klasik şaptan yüksek ama kaybedilen zamanın maliyetiyle karşılaştırıldığında bazı işlerde mantıklı çıkıyor. Seçeneği baştan sunuyoruz." },

      { h2: "Yerden ısıtmalı şap" },
      { p: "Yerden ısıtma varsa şap kuruduktan sonra sistem kademeli olarak devreye alınıyor ve zemin nemi bu şekilde alınıyor." },
      { p: "Bu ısıtma programı üreticinin talimatına göre yapılıyor; aniden tam güçle çalıştırmak şapta çatlak yapıyor." },

      { h2: "Nem bariyeri" },
      { p: "Zemin kat ve bodrumda, alttan gelen neme karşı buhar kesici serilmesi gerekiyor. Bu, şap kurumasından ayrı bir konu." },
      { p: "Laminat altına serilen şiltelerin bir kısmı nem bariyeri içeriyor; içermiyorsa ayrıca folyo serilmeli." },
    ],
    faqs: [
      { q: "Şapın üstüne seramik ne zaman döşenir?", a: "Seramik parkeye göre neme daha toleranslı; daha erken döşenebiliyor. Yine de tam kuruma beklenmesi en sağlıklısı, özellikle büyük ebat karolarda." },
      { q: "Eski şapın üstüne yeni şap dökülür mü?", a: "Mevcut şap sağlam ve kot uygunsa dökülebiliyor. Boş sesi veren, çatlamış veya kabarmış şapın sökülmesi gerekiyor." },
      { q: "Kuruma nasıl hızlandırılır?", a: "Havalandırma ve ortam sıcaklığı en etkili iki etken. Vantilatörle hava sirkülasyonu sağlamak süreyi kısaltıyor; doğrudan ısı vermek ise yüzeyde çatlak yapıyor." },
    ],
    related: ["seramik-bos-ses-veriyor", "seramik-mi-parke-mi", "petek-mi-yerden-isitma-mi"],
  },

  {
    slug: "kapi-neden-surtuyor",
    title: "Kapı sürtüyor, kendiliğinden kapanıyor: sebepleri",
    category: "İnce İşler",
    published: "2025-12-01",
    updated: "2026-06-04",
    reading: 4,
    metaTitle: "Kapı Neden Sürtüyor? Kasa Terazisi ve Menteşe Ayarı",
    metaDesc:
      "Kapının sürtmesi, kendiliğinden açılıp kapanması ve kilidin zor dönmesi; sebepleri ve ayar yöntemleri.",
    keywords: ["kapı sürtüyor", "kapı kendiliğinden kapanıyor", "menteşe ayarı", "kapı kasası"],
    excerpt: "Kapının kendiliğinden hareket etmesi kasanın terazide olmadığını gösteriyor. Çoğu ayar işi, bazısı montaj hatası.",
    services: ["kapi-pencere-dograma", "ince-insaat-isleri"],
    intro:
      "Kapı şikâyetlerinin neredeyse tamamı iki başlıkta toplanıyor: kasa terazide değil ya da menteşe ayarı bozulmuş. İkisi de çözülebilir ama biri ayar, diğeri montaj işi.",
    body: [
      { h2: "Kendiliğinden açılıyor veya kapanıyor" },
      { p: "Bu, kasanın düşey terazide olmadığının en net işareti. Kapı ağırlığıyla eğimin düşük tarafına doğru hareket ediyor." },
      { p: "Hafif sapmalarda menteşe ayarıyla düzeltilebiliyor. Belirgin sapmalarda kasanın sökülüp yeniden terazilenmesi gerekiyor." },

      { h2: "Alt kenarı sürtüyor" },
      { p: "Zemin kaplaması sonradan değiştiyse ve kalınlaştıysa kapı altı boşluğu yetmiyor. Kapının altından kesilmesi gerekiyor." },
      { p: "Halı ya da kalın laminat döşenecekse bunu kapı montajından önce söylemek gerekiyor; kasa ve kanat ona göre ayarlanıyor." },

      { h2: "Üst köşesi sürtüyor" },
      { p: "Menteşe vidalarının gevşemesi kapıyı sarkıtıyor ve üst köşe kasaya değiyor. Vidaları sıkmak çoğu zaman yeterli." },
      { p: "Vida yuvası genişlemişse daha uzun vida ya da tıkaçlı onarım gerekiyor. Ahşap kasada bu sık karşılaşılan bir durum." },

      { h2: "Kilit zor dönüyor" },
      { p: "Kilit dili karşılık plakasına tam denk gelmiyor. Karşılık plakası gevşetilip birkaç milimetre kaydırılarak ayarlanıyor." },
      { p: "Kapı şişmiş ya da kasa hareket etmişse önce onun çözülmesi gerekiyor; kilit ayarı semptomu geçiriyor ama sebebi değil." },

      { h2: "Kapı şişmesi" },
      { p: "Ahşap ve MDF kapılar nemle şişiyor. Banyo kapılarında ve nemli ortamlarda sık görülüyor." },
      { p: "Kalıcı çözüm ortamın nemini azaltmak (havalandırma, aspiratör) ve kapı kenarlarının kapalı olduğundan emin olmak. Kesim geçici çözüm; nem geçince boşluk kalıyor." },

      { h2: "Çelik kapıda ayar" },
      { p: "Çelik kapılarda menteşeler genelde üç yönde ayarlanabiliyor. Bu, kapıyı sökmeden düzeltme imkânı veriyor." },
      { p: "Kilit noktalarının hepsinin karşılığa oturması gerekiyor. Tek noktadan kilitlenen bir çelik kapı, güvenlik açısından tasarlandığı gibi çalışmıyor." },
    ],
    faqs: [
      { q: "Kapı ayarı ne kadar sürer?", a: "Basit menteşe ve kilit ayarları 15–30 dakika. Kasanın yeniden terazilenmesi gerekiyorsa yarım gün." },
      { q: "Kapıyı ben aldım, montajını yapar mısınız?", a: "Yaparız. Sipariş öncesi ölçüyü bize aldırmanızı öneriyoruz; ölçü kaynaklı hatanın sorumluluğu böylece bizde oluyor." },
      { q: "Kasa çevresi çatlıyor, neden?", a: "Montaj sonrası sıva ve boya onarımı yapılmadıysa ya da montaj köpüğü fazla sıkıldıysa oluyor. Onarımı teklifte ayrı kalem olarak yazıyoruz." },
    ],
    related: ["pencereden-hava-geliyor", "kapi-pencere-secerken", "duvar-dalgali-nasil-duzeltilir"],
  },

  {
    slug: "pencereden-hava-geliyor",
    title: "Pencereden hava geliyor: conta mı montaj mı?",
    category: "İnce İşler",
    published: "2025-12-15",
    updated: "2026-06-05",
    reading: 4,
    metaTitle: "Pencereden Hava Geliyor: Conta ve Montaj Kontrolü",
    metaDesc:
      "Pencere kenarından hava girişinin sebepleri: conta yıpranması, kanat ayarı ve montaj bantlarının eksikliği.",
    keywords: ["pencereden hava geliyor", "pencere contası", "pvc pencere ayarı", "pencere montajı"],
    excerpt: "Hava girişinin üç sebebi var ve üçünün çözümü farklı: conta, kanat ayarı ve montaj detayı.",
    services: ["kapi-pencere-dograma", "dis-cephe-mantolama"],
    intro:
      "Kapalı pencerenin kenarında hava akımı hissediyorsanız üç ihtimal var. İkisi kısa sürede çözülüyor, üçüncüsü montajla ilgili ve daha kapsamlı.",
    body: [
      { h2: "Test: kâğıt yöntemi" },
      { p: "Bir kâğıt parçasını kanat ile kasa arasına koyup pencereyi kapatın. Kâğıdı kolayca çekebiliyorsanız o noktada conta baskısı yetersiz." },
      { p: "Bu testi pencerenin çevresinde birkaç noktada tekrarlayın. Sadece bir köşede sorun varsa kanat ayarı, her yerde varsa conta yıpranmış demektir." },

      { h2: "1. Conta yıpranmış" },
      { p: "Lastik contalar zamanla sertleşiyor ve esnekliğini kaybediyor. Baskı yapamayınca hava geçiriyor." },
      { p: "Conta değişimi görece basit bir iş ve maliyeti düşük. Pencerenin tamamını değiştirmeden önce mutlaka denenmesi gereken adım." },

      { h2: "2. Kanat ayarı bozulmuş" },
      { p: "PVC pencerelerde kanat, menteşe ve kilit karşılıklarından ayarlanabiliyor. Zamanla sarkma olduğunda baskı eşit dağılmıyor." },
      { p: "Ayar işlemi bir alyan anahtarıyla yapılıyor ve pencere başına birkaç dakika sürüyor. Yılda bir yapılması önerilen bir bakım." },

      { h2: "3. Montaj detayı eksik" },
      { p: "PVC pencere montajı, çerçeveyi boşluğa oturtup köpük sıkmaktan ibaret değil. İç tarafa buhar kesici, dış tarafa su geçirmez nefes alan bant uygulanmalı." },
      { p: "Bu bantlar yoksa köpük zamanla nem çekip çürüyor ve kenardan hava ile su gelmeye başlıyor. Çözüm, kenar detayının yeniden yapılması." },

      { h2: "Yoğuşma camın hangi yüzünde?" },
      { p: "Camın iç yüzeyinde yoğuşma varsa iç nem yüksek demek; havalandırma gerekiyor. Cam ile cam arasında (ünitenin içinde) ise cam ünitesi gaz kaçırıyor ve değişmeli." },
      { p: "Camın dış yüzeyinde sabah yoğuşma görmek ise iyi bir işaret; camın yalıtımının çalıştığını gösteriyor." },

      { h2: "Değişim ne zaman gerekir?" },
      { p: "Profil çarpılmış, cam ünitesi buğulanmış, kanat oturmuyor ve conta değişimi işe yaramıyorsa değişim gündeme geliyor." },
      { p: "Cephe yalıtımı da düşünülüyorsa ikisini aynı anda planlamak gerekiyor; sonra yapılan pencere değişimi kenar detaylarını bozuyor." },
    ],
    faqs: [
      { q: "Conta değişimi ne kadar sürer?", a: "Standart bir dairede tüm pencerelerin contası yarım günde değişiyor." },
      { q: "Kışın pencere değiştirilir mi?", a: "Değiştirilir. Oda oda ilerliyoruz; bir odanın penceresi aynı gün takılıp kapatılıyor, ev soğukta kalmıyor." },
      { q: "Sineklik ve panjur da yapıyor musunuz?", a: "Yapıyoruz. Pencere montajıyla birlikte planlandığında hem daha uygun hem montaj daha temiz oluyor." },
    ],
    related: ["kapi-neden-surtuyor", "kapi-pencere-secerken", "dogalgaz-faturasi-neden-yuksek"],
  },

  {
    slug: "kapi-pencere-secerken",
    title: "Kapı ve pencere seçerken nelere bakmalı?",
    category: "İnce İşler",
    published: "2026-01-19",
    updated: "2026-06-06",
    reading: 5,
    metaTitle: "Kapı ve Pencere Seçimi: Profil, Cam ve Donanım",
    metaDesc:
      "PVC profil odacık sayısı, cam ünitesi, donanım kalitesi ve çelik kapı seçiminde bakılacak teknik özellikler.",
    keywords: ["pvc pencere seçimi", "çelik kapı seçimi", "ısıcam", "profil odacık", "pencere donanımı"],
    excerpt: "Pencerede fiyat farkı profilden değil çoğu zaman camdan ve donanımdan geliyor. Nelere bakılır?",
    services: ["kapi-pencere-dograma", "ince-insaat-isleri"],
    intro:
      "Kapı ve pencere tekliflerinde fiyat farkı büyük olabiliyor ve fark genelde göze görünmeyen kalemlerden geliyor: cam ünitesi, donanım ve montaj detayları.",
    body: [
      { h2: "PVC profil" },
      { p: "Profilin odacık sayısı (3, 5, 6 odacık) ve genişliği yalıtım performansını etkiliyor. Odacık arttıkça yalıtım iyileşiyor." },
      { p: "Profil içindeki çelik takviyenin varlığı ve kalınlığı da önemli. Takviyesiz ya da ince takviyeli profil zamanla çarpılabiliyor." },

      { h2: "Cam ünitesi: asıl fark burada" },
      { p: "Pencere alanının büyük kısmı cam. Isı kaybının da büyük kısmı camdan oluyor. Bu yüzden cam seçimi profilden daha belirleyici." },
      { p: "Low-E (düşük yayınımlı) kaplamalı cam ve ara boşlukta argon gazı, standart ısıcama göre net fark yaratıyor. Teklifte cam ünitesinin özelliği yazılı olmalı." },

      { h2: "Donanım (ispanyolet)" },
      { p: "Kanadı kasaya kilitleyen mekanizma. Kilitleme noktası sayısı hem güvenliği hem conta baskısının eşitliğini belirliyor." },
      { p: "Ucuz donanımda kanat zamanla sarkıyor ve ayar tutmuyor. Bu, ilk yıl fark edilmeyen ama üçüncü yıl şikâyet konusu olan bir kalem." },

      { h2: "Çelik kapıda neye bakılır?" },
      { ul: [
        "Sac kalınlığı ve iç dolgu malzemesi",
        "Kilit noktası sayısı ve dağılımı",
        "Menteşe sayısı ve ayarlanabilirliği",
        "Yalıtım (ısı ve ses) dolgusu",
        "Kasa ankraj noktası sayısı",
        "Emniyet pimleri (menteşe tarafı)",
      ] },
      { p: "Kapının güvenliğini belirleyen şey sadece kapı değil, kasanın duvara nasıl sabitlendiği. Yetersiz ankraj yapılmış kapı kasadan sökülüyor." },

      { h2: "İç kapıda" },
      { p: "Yüzey malzemesi (melamin, lake, kaplama), iç dolgu (bal peteği, dolu) ve kasa sistemi belirleyici. Islak hacim kapılarında nem dayanımı önemli." },
      { p: "Ses yalıtımı isteniyorsa dolu gövdeli kapı gerekiyor; bal peteği dolgulu kapılar sesi durdurmuyor." },

      { h2: "Ölçü kimin sorumluluğunda?" },
      { p: "Yanlış ölçüde üretilen doğrama iade edilemiyor. Bunun için ölçüyü kendimiz alıyor ve sipariş listesini imzalı veriyoruz." },
      { p: "Ölçü kaynaklı bir hata olursa sorumluluğu bizde oluyor. Bu maddeyi baştan netleştirmek, en sık yaşanan anlaşmazlığı ortadan kaldırıyor." },
    ],
    faqs: [
      { q: "Kaç odacıklı profil yeterli?", a: "Konutta 5 odacık yaygın ve yeterli bir tercih. Asıl farkı cam ünitesi yaratıyor; bütçeyi oraya ayırmak daha mantıklı." },
      { q: "Çift cam mı üçlü cam mı?", a: "Üçlü cam daha iyi yalıtıyor ama ağır ve pahalı. Malatya koşullarında iyi bir Low-E çift cam çoğu konut için yeterli oluyor." },
      { q: "Sipariş ne kadar sürede gelir?", a: "Standart ölçü ve renklerde 2–3 hafta. Özel renk ve ölçülerde süre uzuyor; programa erken yazılması gereken bir kalem." },
    ],
    related: ["pencereden-hava-geliyor", "kapi-neden-surtuyor", "dogalgaz-faturasi-neden-yuksek"],
  },

  {
    slug: "granit-mi-mermer-mi-tezgah",
    title: "Mutfak tezgâhı: granit mi mermer mi kompozit mi?",
    category: "İnce İşler",
    published: "2026-02-02",
    updated: "2026-06-07",
    reading: 5,
    metaTitle: "Mutfak Tezgâhı Seçimi: Granit, Mermer, Kompozit",
    metaDesc:
      "Leke, çizik, ısı ve bakım açısından granit, mermer ve kompozit tezgâh karşılaştırması. Şablon ve montaj süreci.",
    keywords: ["mutfak tezgahı", "granit tezgah", "mermer tezgah", "kompozit tezgah", "kuvars tezgah"],
    excerpt: "Görüntü kadar kullanım da belirleyici. Üç malzemenin leke, çizik ve ısı davranışı yan yana.",
    services: ["mermer-granit", "mutfak-tadilati"],
    intro:
      "Tezgâh, mutfağın en çok kullanılan yüzeyi. Seçimi yaparken görüntüye bakmak yeterli değil; o yüzeyde ne yapacağınız belirleyici.",
    body: [
      { h2: "Mermer" },
      { p: "Doğal ve karakterli bir görüntü veriyor ama asit ve lekeye hassas. Limon, sirke ve şarap yüzeyde iz bırakabiliyor." },
      { p: "Koruyucu uygulanıyor ve periyodik yenilenmesi gerekiyor. Yoğun kullanılan mutfaklarda bakım yükü var." },

      { h2: "Granit" },
      { p: "Doğal taş ama mermerden çok daha sert ve dayanıklı. Çizilmeye ve ısıya karşı iyi davranıyor." },
      { p: "Gözenekli olduğu için yine koruyucu isteniyor ama mermere göre çok daha az. Yoğun kullanılan mutfaklar için güvenli tercih." },

      { h2: "Kompozit (kuvars)" },
      { p: "Doğal kuvars taneleri ve reçineyle üretiliyor. Gözeneksiz olduğu için leke tutmuyor ve bakım gerektirmiyor." },
      { p: "Renk ve desen seçeneği geniş, ton bütünlüğü doğal taştan daha tutarlı. Buna karşılık yüksek ısıya doğrudan temasa hassas; sıcak tencere altlıksız konmamalı." },

      { h2: "Karşılaştırma" },
      { ul: [
        "Leke direnci: kompozit > granit > mermer",
        "Çizik direnci: granit ≈ kompozit > mermer",
        "Isı direnci: granit > mermer > kompozit",
        "Bakım kolaylığı: kompozit > granit > mermer",
        "Görsel karakter: mermer > granit > kompozit",
      ] },

      { h2: "Kenar profili ve kesim" },
      { p: "Kenar profili sadece estetik değil; keskin bırakılan köşeler çarpma sonucu kırılmaya yatkın. Hafif yuvarlatılmış profiller daha dayanıklı." },
      { p: "Eviye kesim köşeleri de keskin bırakılmamalı; gerilme oradan başlıyor ve çatlak oluşuyor. Bu, uygulama kalitesinin en net göstergelerinden biri." },

      { h2: "Şablon ve montaj süreci" },
      { p: "Tezgâh, mutfak dolapları monte edildikten sonra yerinde şablonla ölçülüyor. Duvarlar tam dik olmadığı için kâğıt üstü ölçü tutmuyor." },
      { p: "Şablondan kesime ve montaja kadar 3–5 gün geçiyor. Bu sürede eviye ve ocak takılamıyor; programa yazılması gereken bir bekleme." },
    ],
    faqs: [
      { q: "Hangisi daha ekonomik?", a: "Fiyat aralıkları malzeme kalitesine göre geniş ve birbirine giriyor. Aynı segmentte kompozit ve granit yakın, mermer seçilen taşa göre çok değişiyor." },
      { q: "Tezgâh üstü fayans yerine aynı taş kullanılır mı?", a: "Kullanılıyor ve bütünlüklü bir görüntü veriyor. Maliyeti fayanstan yüksek ama derz olmadığı için temizliği kolay." },
      { q: "Eski tezgâhı söküp yenisini takar mısınız?", a: "Takarız. Söküm sırasında dolapların zarar görmemesi için dikkatli çalışıyoruz; su ve elektrik bağlantıları da bizde olduğu için eviye ve ocak montajı aynı gün bitiyor." },
    ],
    related: ["mutfak-tadilatinda-plan", "seramik-bos-ses-veriyor", "seramik-mi-parke-mi"],
  },

  {
    slug: "kucuk-banyoda-cozumler",
    title: "Küçük banyoda alan kazandıran çözümler",
    category: "İnce İşler",
    published: "2026-03-08",
    updated: "2026-06-08",
    reading: 4,
    metaTitle: "Küçük Banyo Çözümleri: Alan Kazandıran Uygulamalar",
    metaDesc:
      "Askılı klozet, teknesiz duş, sürgülü kapı, gömme niş ve doğru aydınlatma ile küçük banyoda alan kazanma.",
    keywords: ["küçük banyo", "askılı klozet", "teknesiz duş", "banyo nişi", "gömme rezervuar"],
    excerpt: "Küçük banyoda birkaç santimlik kazanç kullanımı tamamen değiştiriyor. Uygulanabilir altı çözüm.",
    services: ["banyo-tadilati", "dusakabin-montaji", "vitrifiye-armatur-montaji"],
    intro:
      "Küçük banyolarda alan kazanmak, duvar kaldırmadan da mümkün. Aşağıdakiler tadilat sırasında planlandığında ek maliyeti sınırlı olan ama kullanımı baştan değiştiren çözümler.",
    body: [
      { h2: "1. Askılı klozet ve gömme rezervuar" },
      { p: "Rezervuar duvar içine alındığında zeminde gözle görülür alan açılıyor ve temizlik kolaylaşıyor. Klozetin altı boş kaldığı için mekân daha geniş görünüyor." },
      { p: "Duvar içine taşıyıcı kasa gerekiyor; bu, alçıpan ya da tuğla duvarda uygulanabiliyor. Tadilat sırasında planlanacak bir kalem." },

      { h2: "2. Teknesiz duş alanı" },
      { p: "Duş teknesi yerine zemine entegre duş alanı, hem alan kazandırıyor hem eşiksiz kullanım sağlıyor." },
      { p: "Burada zemin yalıtımı ve eğim kritik. Lineer süzgeç kullanılıyorsa eğim tek yöne veriliyor; uygulama hatası doğrudan sızıntı demek." },

      { h2: "3. Sürgülü ya da dışa açılan kapı" },
      { p: "İçeri açılan kapı, dönüş yarıçapı kadar alanı kullanılamaz kılıyor. Küçük banyoda bu ciddi bir kayıp." },
      { p: "Kapıyı dışarı açtırmak en basit çözüm. Duvar uygunsa sürgülü kapı daha da fazla kazandırıyor." },

      { h2: "4. Duvar içi niş" },
      { p: "Duş alanının duvarında açılan niş, şampuan ve sabunluk için raf ihtiyacını ortadan kaldırıyor." },
      { p: "Niş, su yalıtımı yapılırken planlanmalı; tabanına hafif eğim verilerek su birikmesi önleniyor." },

      { h2: "5. Doğru vitrifiye ölçüsü" },
      { p: "Kompakt ölçülü klozet ve lavabo modelleri var. Standart ölçü yerine bunları seçmek birkaç santim kazandırıyor." },
      { p: "Lavabo altı dolabı yerine askılı lavabo da mekânı hafifletiyor; depolama ihtiyacı varsa ayna dolabıyla dengeleniyor." },

      { h2: "6. Aydınlatma ve renk" },
      { p: "Tek tavan armatürü yerine ayna çevresi ve duş alanı aydınlatması eklemek, mekânı daha geniş gösteriyor." },
      { p: "Büyük ebat açık renk seramik, derz sayısını azalttığı için alanı bölünmüş göstermiyor. Zemin ve duvarda aynı tonu kullanmak da benzer etki yapıyor." },
    ],
    faqs: [
      { q: "Askılı klozet sağlam mı?", a: "Doğru monte edilmiş taşıyıcı kasa ile sorun olmuyor; kasa yükü zemine aktarıyor. Kasanın kalitesi ve montajı burada belirleyici." },
      { q: "Teknesiz duşta su dışarı taşar mı?", a: "Eğim doğru verildiğinde ve süzgeç kapasitesi yeterliyse taşmıyor. Cam bölme ya da perde ile sıçrama kontrol ediliyor." },
      { q: "Küçük banyo tadilatı ne kadar sürer?", a: "4 m² bir banyoda söküm, yalıtım, su testi ve seramikle birlikte 6–9 iş günü." },
    ],
    related: ["banyo-tadilatinda-su-yalitimi", "kucuk-daireyi-buyuk-gostermek", "havlupan-mi-petek-mi"],
  },

  {
    slug: "ic-mekan-aydinlatma-planlama",
    title: "İç mekân aydınlatması nasıl planlanır?",
    category: "Aydınlatma",
    published: "2026-04-05",
    updated: "2026-06-09",
    reading: 5,
    metaTitle: "İç Mekân Aydınlatma Planı: Katmanlar ve Renk Sıcaklığı",
    metaDesc:
      "Genel, görev ve vurgu aydınlatması; renk sıcaklığı seçimi, spot sayısı ve dimmer planlaması.",
    keywords: ["aydınlatma planı", "spot aydınlatma", "renk sıcaklığı", "gizli aydınlatma", "dimmer"],
    excerpt: "İyi aydınlatma tek bir armatürle olmuyor. Üç katman ve doğru renk sıcaklığı, mekânı tamamen değiştiriyor.",
    services: ["avize-aydinlatma", "alcipan-asma-tavan", "elektrik-tesisati"],
    intro:
      "Aydınlatma, tadilatta en sona bırakılan ama en başta planlanması gereken konu. Kabloların yeri sıva öncesi belirleniyor; sonradan eklenen her nokta duvar açmayı gerektiriyor.",
    body: [
      { h2: "Üç katman" },
      { p: "Genel aydınlatma mekânı görünür kılıyor; görev aydınlatması belirli bir iş için (mutfak tezgâhı, okuma köşesi) ışık veriyor; vurgu aydınlatması ise duvar, tablo ya da nişi öne çıkarıyor." },
      { p: "Tek bir tavan armatürüyle üç katmanın hepsini karşılamak mümkün değil. Aydınlatma şikâyetlerinin çoğu bu eksiklikten çıkıyor." },

      { h2: "Renk sıcaklığı" },
      { ul: [
        "2700–3000K (sıcak beyaz): salon, yatak odası, koridor",
        "3000–4000K (doğal beyaz): mutfak, banyo, çalışma odası",
        "4000K ve üzeri (soğuk beyaz): atölye, depo, teknik alan",
      ] },
      { p: "Aynı mekânda farklı renk sıcaklıkları karıştırılmamalı; göze rahatsız edici geliyor. Armatür alırken bu değere bakmak gerekiyor." },

      { h2: "Spot sayısı ve yerleşimi" },
      { p: "Spotları eşit aralıklarla tavana dağıtmak yaygın ama her zaman doğru değil. Işığın nereye gerekli olduğuna göre yerleştirmek daha iyi sonuç veriyor." },
      { p: "Duvara yakın yerleştirilen spotlar duvarı yıkayarak mekânı geniş gösteriyor. Tam ortaya toplanan spotlar ise köşeleri karanlık bırakıyor." },

      { h2: "Gizli (bant) aydınlatma" },
      { p: "Kademeli asma tavanda gizlenen LED bant, dolaylı ve yumuşak bir ışık veriyor. Ana aydınlatma olarak değil, tamamlayıcı katman olarak kullanılıyor." },
      { p: "Bandın besleme noktası ve trafo yeri, revizyon kapağıyla erişilebilir olmalı. Kapak bırakılmadığında arıza anında tavan kesiliyor." },

      { h2: "Dimmer ve senaryo" },
      { p: "Salon ve yatak odasında kısılabilir aydınlatma, aynı mekânı farklı kullanımlara uyarlıyor. Dimmerlenebilir LED ve uyumlu dimmer seçilmesi gerekiyor." },
      { p: "Her LED dimmerlenmiyor; uyumsuz kombinasyonda titreme ve uğultu oluyor. Ürün seçimini birlikte yapmak bu sorunu baştan önlüyor." },

      { h2: "Anahtar planı" },
      { p: "Hangi anahtarın hangi grubu kontrol edeceği, yerleşimle birlikte belirleniyor. Uzun koridorlarda ve merdivende çift yönlü (vaevien) anahtar gerekiyor." },
      { p: "Yatak odasında yatak başından kontrol, salonda kapı yanında ve oturma grubu yanında çift kontrol; bunlar sonradan eklenemeyen konfor detayları." },
    ],
    faqs: [
      { q: "Bir odaya kaç spot gerekir?", a: "Oda büyüklüğü, tavan yüksekliği ve armatürün ışık gücüne göre değişiyor. Tek bir sayı vermek yerine, ışık ihtiyacını hesaplayıp yerleşim çiziyoruz." },
      { q: "Avize mi spot mu?", a: "İkisi farklı katman. Avize genel aydınlatma ve dekoratif eleman; spot ise görev ve vurgu için. Birlikte kullanmak en iyi sonucu veriyor." },
      { q: "Aydınlatma değişikliği tadilatsız yapılabilir mi?", a: "Mevcut noktalarda armatür değişimi her zaman mümkün. Yeni nokta açmak duvar ya da tavan açmayı gerektiriyor; alçıpan tavan varsa çok daha kolay." },
    ],
    related: ["alcipan-nerede-kullanilir", "kucuk-daireyi-buyuk-gostermek", "ic-mekan-priz-plani"],
  },
];

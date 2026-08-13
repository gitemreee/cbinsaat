// Yağmurlama sulama kurulumu ve dona karşı sulamayla koruma.

export const sulamaEkPosts = [
  {
    slug: "yagmurlama-sulama-kurulumu",
    title: "Yağmurlama sulama: başlık seçimi ve yerleşim",
    category: "Sulama",
    published: "2026-07-17",
    reading: 10,
    metaTitle: "Yağmurlama Sulama Kurulumu | Başlık ve Yerleşim",
    metaDesc:
      "Rotor mu sprey mi? Başlık aralığı, örtüşme kuralı, zon hesabı ve dağılım testi. Çim ve geniş alanlarda yağmurlama sistemi nasıl kurulur?",
    keywords: [
      "yağmurlama sulama",
      "sprinkler başlık seçimi",
      "çim sulama sistemi",
      "başlık aralığı",
      "yağış hızı",
    ],
    excerpt:
      "Yağmurlama sistemlerinde kuru lekelerin sebebi neredeyse hiç \"su az\" değildir. Sorun genelde tek bir kuralın atlanmasından çıkar: başlıklar birbirini yakalamalıdır.",
    services: ["bahce-sulama", "anahtar-teslim-sulama-sistemi", "bahce-cevre-duzenleme"],
    intro:
      "Damlama, suyu tek tek bitkiye verir; yağmurlama ise bir yüzeyi kaplar. Çim, mera ve geniş yeşil alanlarda tek uygulanabilir yöntem odur. Ancak yüzeyi eşit ıslatmak göründüğü kadar kolay değil: yerleşim hatalı olduğunda bahçenin bir bölümü sürekli fazla, bir bölümü sürekli az su alır.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Yağmurlama yerleşiminin temel kuralı, her başlığın attığı suyun komşu başlığa ulaşmasıdır.</strong> Buna baş başa örtüşme denir; başlık aralığı, başlığın atış mesafesine eşit veya ondan küçük seçilir.",
      },
      {
        p: "İkinci kural, aynı zonda aynı tip ve aynı yağış hızındaki başlıkların kullanılmasıdır. Rotor ile sprey başlığı aynı zona bağlandığında, biri yeterli su alırken diğeri ya boğulur ya susuz kalır.",
      },

      { h2: "Yağmurlama mı, damlama mı?" },
      {
        table: {
          head: ["Alan", "Uygun yöntem", "Neden"],
          rows: [
            ["Çim", "Yağmurlama", "Yüzeyin tamamı ıslatılmalı"],
            ["Çiçek ve mevsimlik", "Sprey veya mikro yağmurlama", "Sık aralıklı, düşük debi"],
            ["Çalı ve ağaç", "Damlama", "Su doğrudan köke verilir"],
            ["Meyve bahçesi", "Damlama", "Yaprak ıslanmaz, hastalık riski düşer"],
            ["Sebze sıraları", "Damlama (hat içi)", "Sıra boyunca eşit dağılım"],
            ["Geniş tarla / mera", "Yağmurlama", "Alan kaplama gerekir"],
          ],
        },
      },
      {
        p: "Karma bahçelerde ikisi birlikte kullanılır ama asla aynı zonda değil. Çim zonu ile ağaç zonu ayrı vanalara bağlanır; su ihtiyaçları ve süreleri farklı olduğu için tek programda yönetilemezler.",
      },

      { h2: "Başlık tipleri" },
      {
        p: "Üç ana grup var ve her biri farklı alan büyüklüğü için üretiliyor:",
      },
      {
        ul: [
          "Rotor başlıklar: dönerek uzağa atar, geniş alanlar için. Yağış hızı düşüktür, süre uzun tutulur.",
          "Sprey (sabit) başlıklar: sabit desenle yakın mesafeye püskürtür. Yağış hızı yüksektir, süre kısa tutulur.",
          "Mikro yağmurlama: çok düşük debiyle küçük alanları ıslatır; çiçeklik ve fidanlıkta kullanılır.",
        ],
      },
      {
        p: "Aynı bahçede üçü de bulunabilir; yeter ki her biri kendi zonunda olsun. Bu ayrım yapılmadığında program süresi hiçbir grup için doğru olmaz.",
      },

      { h2: "Baş başa örtüşme kuralı" },
      {
        p: "Bir yağmurlama başlığı, attığı suyu eşit dağıtmaz: en çok su başlığa yakın bölgeye düşer, uzaklaştıkça azalır. Bu nedenle tek bir başlığın kapsadığı alan, tek başına eşit sulanmaz.",
      },
      {
        p: "Çözüm, başlıkların birbirinin sınırına su atmasıdır. Böylece bir başlığın zayıf kaldığı uç bölge, komşusunun güçlü bölgesiyle tamamlanır ve toplamda eşit bir dağılım oluşur.",
      },
      {
        quote:
          "Yağmurlamada kuru lekelerin bir numaralı sebebi, başlıkları birbirine yetişemeyecek kadar seyrek koymaktır.",
      },
      {
        p: "Pratikte aralık, başlığın kataloğunda yazan atış mesafesine eşit alınır. Rüzgârlı bölgelerde bu mesafe bir miktar daraltılır; rüzgâr, suyun uçmasına ve deseni bozmasına yol açıyor.",
      },

      { h2: "Yağış hızı ve toprak" },
      {
        p: "Yağış hızı, sistemin alana saatte kaç milimetre su verdiğidir. Toprağın emebileceğinden hızlı su verilirse yüzeyde birikme ve akış başlar; verilen su kök bölgesine inmeden kaybolur.",
      },
      {
        p: "Killi ve sıkışmış topraklar suyu yavaş emer; bu alanlarda düşük yağış hızlı başlıklar seçilir veya sulama bölünerek uygulanır. Kumlu topraklarda ise emme hızlıdır, kısa ve sık sulama daha uygundur.",
      },
      {
        p: "Eğimli alanlarda akış riski artar. Bu durumda \"döngüsel sulama\" uygulanır: örneğin on dakika sulanır, on dakika beklenir, tekrar sulanır. Toplam su aynı kalır ama tamamı toprağa girer.",
      },

      { h2: "Zon hesabı" },
      {
        p: "Bir zonda aynı anda çalışabilecek başlık sayısı, kaynağın debisiyle sınırlıdır. Hesap damlamadaki mantığın aynısı: kaynağın saatlik debisi, başlıkların toplam debisine bölünür.",
      },
      {
        table: {
          head: ["Veri", "Örnek"],
          rows: [
            ["Kaynak debisi", "3000 litre/saat"],
            ["Başlık debisi", "500 litre/saat"],
            ["Aynı anda çalışacak başlık", "6 adet"],
            ["Bahçedeki toplam başlık", "18 adet"],
            ["Gereken zon sayısı", "3 zon"],
          ],
        },
      },
      {
        p: "Zon sayısı belirlenirken günlük sulama penceresi de hesaba katılmalı. Üç zonun sırayla çalışması toplam süreyi üçe katlar; sabah erken saatlere sığmıyorsa ya debi ya program yeniden düşünülür.",
      },

      { h2: "Basınç uyumu" },
      {
        p: "Her başlığın çalışması için belirli bir basınç aralığı vardır. Basınç düşükse atış mesafesi kısalır ve örtüşme bozulur; yüksekse su sisleşir, rüzgârla uçar ve dağılım bozulur.",
      },
      {
        p: "Aynı zonda kot farkı varsa alt ve üst başlıklar farklı basınçta çalışır. Bu durumda basınç regülatörlü başlıklar tercih edilir; her biri kendi çıkışında basıncı sabitler.",
      },
      {
        p: "Sistem devreye alınırken en uzak başlıkta basınç ölçülmeli. Katalog değerinin altındaysa çap, hat uzunluğu veya zon bölünmesi gözden geçirilir.",
      },

      { h2: "Boru ve hat düzeni" },
      {
        p: "Yağmurlama hatları damlamaya göre daha yüksek debi taşır; bu yüzden çaplar daha büyük seçilir. Dar boru, sürtünme kaybını artırır ve hat sonundaki başlığı zayıflatır.",
      },
      {
        ul: [
          "Ana hat, toplam debiye göre boyutlandırılır.",
          "Zon hatları başlık sayısına göre seçilir.",
          "Hat mümkün olduğunca kısa ve düz güzergâhta ilerler.",
          "Dirsek sayısı azaltılır; her dirsek basınç kaybıdır.",
          "Boru gömme derinliği, çim biçme ve toprak işlemeden etkilenmeyecek kadar olmalı.",
          "Güzergâh krokiye işlenir; sonraki kazılarda kesilmesi önlenir.",
        ],
      },
      {
        p: "Son madde ihmal edildiğinde bahçede yapılan her küçük iş risk hâline geliyor. Kroki, montaj günü on dakika süren ama yıllarca fayda veren bir kayıt.",
      },

      { h2: "Kurulum adımları" },
      {
        ol: [
          "Alanın krokisi çıkarılır; başlık konumları ve zonlar çizilir.",
          "Kaynağın debisi ve basıncı ölçülür.",
          "Başlık tipi ve aralığı belirlenir, örtüşme kontrol edilir.",
          "Zonlar oluşturulur; her zon için vana planlanır.",
          "Hat güzergâhları kazılır, ana hat ve zon hatları döşenir.",
          "Vana kutuları yerleştirilir, kablolar boru içinden çekilir.",
          "Hat düşük basınçta yıkanır; içerideki toprak ve talaş atılır.",
          "Başlıklar takılır, yükseklikleri zemine göre ayarlanır.",
          "Sistem çalıştırılır; her başlığın deseni ve dönüş açısı ayarlanır.",
          "Dağılım testi yapılır, program yazılır.",
        ],
      },
      {
        p: "Sekizinci adımdaki yükseklik ayarı sonradan düzeltmesi zahmetli bir detay: başlık gövdesi çim seviyesiyle aynı hizada olmalı, yukarıda kalırsa biçme sırasında zarar görür.",
      },

      { h2: "Dağılım testi" },
      {
        p: "Sistemin gerçekten eşit sulayıp sulamadığını anlamanın tek yolu ölçmektir. Bahçeye eşit boyutta birkaç düz kap yerleştirilir ve sistem belirli bir süre çalıştırılır.",
      },
      {
        p: "Süre sonunda kaplardaki su yüksekliği karşılaştırılır. Aralarındaki fark belirginse dağılım dengesizdir ve nedeni aranır: başlık aralığı, basınç farkı, tıkalı meme ya da yanlış açı ayarı.",
      },
      {
        p: "Bu test aynı zamanda sulama süresini belirlemenin de en doğru yolu. Kaplarda biriken su yüksekliği, alana verilen su miktarını doğrudan gösterir.",
      },

      { h2: "Rüzgâr ve zamanlama" },
      {
        p: "Yağmurlamanın en büyük düşmanı rüzgârdır. Suyun bir kısmı hedefe ulaşmadan uçar, deseni bozulur ve alanın bir tarafı sürekli az su alır.",
      },
      {
        p: "Bu yüzden sulama saatleri sabahın erken saatlerine alınır: rüzgâr en zayıf, buharlaşma en düşük seviyededir. Yapraklar da gün içinde kuruduğu için mantar hastalığı riski azalır.",
      },
      {
        p: "Akşam sulaması yapraklarında gece boyunca ıslak kalmasına yol açtığı için özellikle çimde önerilmez. Öğle saatleri ise hem buharlaşma hem rüzgâr açısından en verimsiz zaman.",
      },

      { h2: "Vana ve kablo düzeni" },
      {
        p: "Yağmurlama sistemlerinde her zonun kendi elektrikli vanası bulunur ve bu vanalar kutular içinde toplanır. Kutu düzeni, ileride yapılacak her müdahalenin süresini belirler.",
      },
      {
        ul: [
          "Kutular zemin seviyesinin biraz üzerinde bitirilmeli; yağmur suyu içeri akmamalı.",
          "Kutu altına çakıl serilerek drenaj sağlanmalı.",
          "Kablo ekleri su geçirmez klemenslerle yapılmalı ve kutu içinde kalmalı.",
          "Her vananın hangi zonu beslediği kapağın içine yazılmalı.",
          "Kutuların yeri krokiye işlenmeli; bitki örtüsü altında kaybolmamalı.",
        ],
      },
      {
        p: "Elektrik bandıyla yapılan kablo ekleri birkaç sezon içinde mutlaka su alıyor. İlk yıl sorunsuz çalıştığı için güven veriyor; arıza ise genelde en yoğun sulama döneminde ortaya çıkıyor.",
      },

      { h2: "Çim alanda program" },
      {
        p: "Çimin kökleri yüzeye yakındır; bu nedenle derin sulamanın karşılığı yoktur, su kök bölgesinin altına indiğinde boşa gider. Buna karşılık çok sık sulama da kökleri yüzeyde tutar ve sıcağa dayanıksız hâle getirir.",
      },
      {
        p: "Doğru denge, kök bölgesini dolduracak kadar su vermek ve toprağın üst kısmı kurumaya başlayınca tekrarlamaktır. Sıklık mevsime göre değişir; kontrol ünitesinin mevsimsel ayar özelliği bu geçişi kolaylaştırır.",
      },
      {
        p: "Yeni ekilmiş çimde kural farklıdır: tutma dönemi boyunca sık ve az sulama gerekir. Kök geliştikçe program kademeli olarak seyrekleştirilir ve süre uzatılır.",
      },

      { h2: "Sık yapılan hatalar" },
      {
        ul: [
          "Başlıkları örtüşme kuralına uymadan seyrek yerleştirmek.",
          "Aynı zonda rotor ve sprey başlığı karıştırmak.",
          "Kot farkı olan alanlarda basınç regülatörsüz başlık kullanmak.",
          "Kaynağın debisini ölçmeden zon kurmak.",
          "Hattı yıkamadan başlıkları takmak; memeler ilk çalıştırmada tıkanır.",
          "Başlık yüksekliğini zemine göre ayarlamamak.",
          "Kroki çıkarmamak.",
        ],
      },
      {
        p: "Beşinci madde kurulum günü fark edilmeyen ama ertesi hafta ortaya çıkan bir hata: montaj sırasında boruya giren toprak, doğrudan meme deliklerine gidiyor.",
      },

      { h2: "Su kaynağına göre planlama" },
      {
        p: "Yağmurlama, damlamaya göre çok daha yüksek anlık debi ister. Bu nedenle sistem tasarımı kaynağın kapasitesiyle başlar; başlık seçimi ondan sonra gelir.",
      },
      {
        p: "Şebekeden beslenen bahçelerde gün içindeki basınç değişimi hesaba katılmalı. Sabah yeterli olan basınç akşam düştüğünde, aynı program bambaşka bir sonuç veriyor.",
      },
      {
        p: "Kuyu veya depodan beslenen sistemlerde ise pompa, yağmurlamanın istediği sürekli debiye göre seçilir. Damlama için alınmış bir pompa, yağmurlama zonlarında çoğu zaman yetersiz kalıyor.",
      },

      { h2: "Bakım" },
      {
        table: {
          head: ["İşlem", "Sıklık"],
          rows: [
            ["Başlık memelerinin kontrolü", "Sezon başı ve ayda bir gözle"],
            ["Filtre temizliği", "Su kalitesine göre 2–4 haftada bir"],
            ["Dönüş açısı ve desen kontrolü", "Sezon başı"],
            ["Başlık yüksekliği kontrolü", "Sezon başı"],
            ["Vana kutusu ve kablo kontrolü", "Sezon başı"],
            ["Dağılım testi", "Yılda bir"],
          ],
        },
      },
      {
        p: "Çim biçme sırasında darbe alan başlıklar zamanla eğilir ve deseni bozar. Sezon başında yapılan kısa bir tur, bu sapmaları toplu olarak düzeltiyor.",
      },

      { h2: "Kışa hazırlık" },
      {
        p: "Malatya kışında yağmurlama hatları donma riski taşır. Sezon sonunda hatların basınçlı hava veya tahliye vanalarıyla boşaltılması gerekir.",
      },
      {
        p: "Başlık gövdeleri içinde kalan su da donabilir. Tahliye sırasında her zonun ayrı ayrı çalıştırılıp içindeki suyun atılması, bahar açılışında kırık gövdeyle uğraşmayı önlüyor.",
      },
      {
        p: "Bahar açılışında sistem doğrudan tam basınçla çalıştırılmaz: önce düşük basınçta yıkama yapılır, ardından basınç kademeli yükseltilir ve her zon gözle kontrol edilir.",
      },
    ],
    faqs: [
      {
        q: "Başlıklar arasındaki mesafe ne olmalı?",
        a: "Temel kural baş başa örtüşmedir: her başlığın attığı su komşu başlığa ulaşmalıdır. Pratikte aralık, kataloğunda yazan atış mesafesine eşit alınır. Rüzgârlı bölgelerde bu mesafe bir miktar daraltılır, çünkü rüzgâr deseni bozar ve uçlarda kuru leke bırakır.",
      },
      {
        q: "Rotor ve sprey başlığı aynı zonda kullanılır mı?",
        a: "Kullanılmamalıdır. İkisinin yağış hızı çok farklıdır: sprey başlıklar aynı sürede rotorlardan kat kat fazla su verir. Aynı zona bağlandıklarında biri boğulurken diğeri susuz kalır. Her tip kendi zonunda toplanmalı ve süresi ayrı ayarlanmalıdır.",
      },
      {
        q: "Bahçemde kuru lekeler var, sebebi ne olabilir?",
        a: "En yaygın neden başlıkların örtüşme kuralına uymadan seyrek yerleştirilmesidir. Diğer nedenler: tıkalı meme, yanlış ayarlanmış dönüş açısı, kot farkı nedeniyle düşen basınç ve rüzgâr. Dağılım testi, hangisinin geçerli olduğunu ölçerek gösterir.",
      },
      {
        q: "Dağılım testi nasıl yapılır?",
        a: "Bahçeye eşit boyutta birkaç düz kap yerleştirin ve sistemi belirli bir süre çalıştırın. Süre sonunda kaplardaki su yüksekliklerini karşılaştırın. Belirgin fark varsa dağılım dengesizdir. Bu test aynı zamanda sulama süresini belirlemenin de en doğru yoludur.",
      },
      {
        q: "Eğimli bahçede su akıp gidiyor, ne yapmalı?",
        a: "Döngüsel sulama uygulayın: toplam süreyi bölerek örneğin on dakika sulayıp on dakika bekleyin, sonra tekrarlayın. Toprak aradaki sürede suyu emer ve yüzey akışı olmaz. Ayrıca düşük yağış hızlı başlıklar ve basınç regülatörlü modeller bu alanlarda daha uygundur.",
      },
      {
        q: "Kaç zon kurmam gerekir?",
        a: "Kaynağın saatlik debisini başlıkların toplam debisine bölerek aynı anda kaç başlık çalışabileceğini bulun; toplam başlık sayısını buna bölünce zon sayısı çıkar. Zon sayısı arttıkça toplam sulama süresi uzar, bu yüzden günlük sulama penceresine sığdığından emin olun.",
      },
      {
        q: "Ne zaman sulamalı?",
        a: "Sabahın erken saatleri en uygunudur: rüzgâr zayıf, buharlaşma düşüktür ve yapraklar gün içinde kurur. Akşam sulaması yaprakları gece boyunca ıslak bıraktığı için özellikle çimde mantar hastalığı riskini artırır. Öğle saatleri hem rüzgâr hem buharlaşma açısından en verimsiz zamandır.",
      },
      {
        q: "Kışın ne yapmalıyım?",
        a: "Sezon sonunda hatlar basınçlı hava veya tahliye vanalarıyla boşaltılmalıdır. Başlık gövdeleri içinde kalan su da donabildiği için her zon ayrı ayrı çalıştırılarak suyu atılır. Bahar açılışında sistem önce düşük basınçta yıkanır, sonra basınç kademeli yükseltilir.",
      },
    ],
    related: ["otomatik-bahce-sulama", "bahce-sulama-suresi", "damlama-mi-yagmurlama-mi"],
  },

  {
    slug: "dona-karsi-sulama-koruma",
    title: "İlkbahar donuna karşı sulamayla koruma nasıl çalışır?",
    category: "Sulama",
    published: "2026-07-16",
    reading: 10,
    metaTitle: "Dona Karşı Sulama | Yağmurlama ile Don Koruma",
    metaDesc:
      "Üstten yağmurlama ile don koruma hangi durumda işe yarar? Donma gizli ısısı, başlama–bitirme kuralı, su kapasitesi ve riskler. Kayısıda planlama.",
    keywords: [
      "dona karşı sulama",
      "don koruma sistemi",
      "kayısı don",
      "yağmurlama don koruma",
      "ilkbahar geç donu",
    ],
    excerpt:
      "Buz tutan bir dal, çıplak bir daldan daha sıcak olabilir. Kulağa ters gelen bu cümle, don koruma sulamasının tüm mantığını özetliyor — ama tek bir hata her şeyi tersine çeviriyor.",
    services: ["kayisi-bahcesi-sulama", "tarimsal-sulama-sistemleri", "anahtar-teslim-sulama-sistemi"],
    intro:
      "Malatya'da bir gecelik don, bir yılın emeğini alıp götürebiliyor. Bu yüzden don koruma yöntemleri bölgede sıkça konuşuluyor. Sulamayla koruma bunların en bilineni; doğru kurulduğunda gerçekten işe yarıyor, yarım uygulandığında ise zarar veriyor. Bu yazıda nasıl çalıştığını ve neyin şart olduğunu anlatıyoruz.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Üstten yağmurlama ile don koruma, suyun donarken ısı açığa çıkarması ilkesine dayanır.</strong> Sürekli su verildiği sürece, buz tabakasının altındaki tomurcuk sıfır derece civarında kalır ve hava sıcaklığından daha az etkilenir.",
      },
      {
        p: "Kritik kural şudur: <strong>bir kez başlandığında, buz tamamen çözülene kadar durmadan devam edilmelidir.</strong> Ortada bırakılan bir uygulama, hiç yapmamaktan daha büyük zarar verir. Damlama sulamanın bu koruma üzerinde etkisi yoktur.",
      },

      { h2: "Fiziksel mantık" },
      {
        p: "Su donarken çevresine ısı verir. Bu, kimyada donma gizli ısısı diye anılan olaydır ve miktarı küçümsenecek gibi değildir: bir gram suyun buza dönüşmesi sırasında açığa çıkan enerji, aynı gram suyun sıcaklığını onlarca derece düşürecek kadar ısıya denktir.",
      },
      {
        p: "Sürekli yeni su verildiğinde, dal üzerindeki buz tabakası sürekli \"donmaya devam eder\" ve bu süreç boyunca ısı üretmeyi sürdürür. Sonuçta buzun altındaki doku, hava sıcaklığı çok daha aşağı inse bile sıfır civarında kalır.",
      },
      {
        p: "Su kesildiğinde ise tam tersi olur: buz erimeye başlar ve erirken çevreden ısı çeker. Bu, korumasız bir dalın yaşayacağından daha sert bir soğuma anlamına gelir. Kuralın bu kadar keskin olmasının nedeni budur.",
      },

      { h2: "Hangi don türünde işe yarar?" },
      {
        table: {
          head: ["Don türü", "Nasıl oluşur", "Sulamayla koruma"],
          rows: [
            ["Radyasyon donu", "Açık ve durgun gecede yerden ısı kaybı", "Etkili"],
            ["Advektif (rüzgârlı) don", "Soğuk hava kütlesi bölgeye taşınır", "Etkisi sınırlı, riskli"],
          ],
        },
      },
      {
        p: "Radyasyon donunda hava durgundur, sıcaklık yerden yukarı doğru artar ve koruma yöntemleri işe yarar. Advektif donda ise rüzgârla gelen soğuk hava sürekli yenilenir; sulama suyu buharlaşarak ek soğuma yaratabilir ve fayda beklenmez.",
      },
      {
        p: "Bu ayrım, gecenin hava durumuna bakılarak yapılır. Rüzgârlı ve kapalı bir gecede sulamayla korumaya girişmek, faydadan çok risk taşıyor.",
      },

      { h2: "Ne zaman başlanır?" },
      {
        p: "Uygulama, sıcaklık kritik eşiğe inmeden önce başlatılır. Beklemek ve \"biraz daha düşsün\" demek, koruma penceresini kaçırmak anlamına gelir.",
      },
      {
        p: "Kritik eşik bitkinin gelişim dönemine göre değişir: tomurcuk kabardıkça, çiçek açtıkça ve küçük meyve oluştukça dayanıklılık azalır. Bu nedenle sabit bir sıcaklık vermek doğru olmaz; dönemin durumu izlenerek karar verilir.",
      },
      {
        p: "Ölçüm için bahçenin en soğuk noktasına, bitki yüksekliğinde bir termometre konur. Bahçenin çukur bölümleri her zaman daha soğuktur; karar oradaki değere göre verilmelidir.",
      },

      { h2: "Ne zaman kesilir?" },
      {
        p: "Uygulama, güneş doğduktan sonra sıcaklık sıfırın üzerine çıkıp buz kendiliğinden çözülmeye başlayana kadar sürdürülür. Buz görünür şekilde erimeye başlamadan su kesilmez.",
      },
      {
        quote:
          "Don korumasında en pahalı hata, gece yarısı suyun bitmesi ya da elektriğin kesilmesidir. Yarım kalan koruma, hiç yapılmamış korumadan daha çok zarar verir.",
      },
      {
        p: "Bu yüzden sistem, gecenin tamamını kesintisiz karşılayacak kapasitede planlanmalıdır. Sadece başlamak yetmez; bitirebilecek olmak gerekir.",
      },

      { h2: "Su kapasitesi: asıl kısıt" },
      {
        p: "Don koruma sulaması, normal sulamadan tamamen farklı bir kapasite ister. Alanın tamamına, saatler boyunca kesintisiz ve eşit su verilmesi gerekir.",
      },
      {
        p: "Bu, çoğu bahçedeki mevcut kuyunun ve hattın kapasitesini aşar. Damlama sulama için yeterli olan bir sistem, don koruma için genelde yetersiz kalır.",
      },
      {
        ul: [
          "Kuyu debisi, tüm alanı aynı anda besleyecek düzeyde olmalı.",
          "Depolama, gecenin tamamını karşılayacak hacimde planlanmalı.",
          "Pompa ve hat, sürekli ve yüksek debiye uygun seçilmeli.",
          "Elektrik kesintisine karşı yedek güç kaynağı bulunmalı.",
          "Sistem, sezon boyunca her an devreye girmeye hazır tutulmalı.",
        ],
      },
      {
        p: "Dördüncü madde çoğu zaman en zayıf halka. Don gecelerinde şebeke arızaları da sık yaşandığı için, yedek güç olmadan kurulan bir sistem tam ihtiyaç anında durabiliyor.",
      },

      { h2: "Sistem nasıl tasarlanır?" },
      {
        p: "Don koruma için kullanılan yağmurlama sistemi, sulama amaçlı olandan farklı kriterlerle boyutlandırılır. Amaç toprağı ıslatmak değil, bitkiyi sürekli ince bir su filmiyle kaplamaktır.",
      },
      {
        p: "Bu nedenle başlıkların dönüş süresi kritiktir: bir başlık turunu tamamlayana kadar geçen süre uzarsa, iki geçiş arasında su filmi kesilir ve koruma bozulur. Dönüş süresi kısa tutulan özel başlıklar kullanılır.",
      },
      {
        p: "Alanın tamamının eşit kaplanması da şart. Örtüşmenin zayıf kaldığı bir bölge, tam da korumasız kalan bölge olur; oradaki zarar bahçenin geri kalanından bağımsız gerçekleşir.",
      },

      { h2: "Damlama neden yetmez?" },
      {
        p: "Damlama sulama suyu köke verir; dal ve tomurcuk üzerinde bir su filmi oluşturmaz. Donma gizli ısısından yararlanmak için suyun korunacak dokunun üzerinde donması gerekir.",
      },
      {
        p: "Damlamanın dolaylı ve sınırlı bir katkısı olabilir: nemli toprak, kuru toprağa göre gün içinde daha fazla ısı depolar ve gece bunu yavaş bırakır. Ancak bu etki tek başına koruma sayılmaz.",
      },
      {
        p: "Yani damlama sistemi kurulu olması, don riskine karşı hazırlıklı olmak anlamına gelmiyor. İki sistem farklı amaçlara hizmet ediyor ve gerekiyorsa ayrı ayrı planlanmaları gerekiyor.",
      },

      { h2: "Riskler ve sınırlar" },
      {
        p: "Yöntem işe yarar ama bedelsiz değildir. Planlamada şu riskler baştan hesaba katılmalı:",
      },
      {
        table: {
          head: ["Risk", "Nasıl oluşur", "Önlem"],
          rows: [
            ["Dal kırılması", "Biriken buzun ağırlığı", "Uygun debi, aşırı su vermemek"],
            ["Yarım kalan uygulama", "Su veya elektrik bitmesi", "Kapasite ve yedek güç"],
            ["Toprakta aşırı su", "Uzun süreli uygulama", "Drenaj, süre yönetimi"],
            ["Rüzgârlı gecede uygulama", "Buharlaşmayla ek soğuma", "Hava durumuna göre karar"],
            ["Eşit olmayan kaplama", "Zayıf örtüşme", "Tasarımda örtüşme kontrolü"],
          ],
        },
      },
      {
        p: "Buz yükü özellikle genç ağaçlarda ve dallanması zayıf çeşitlerde önemli. Sistem, gerekenden fazla su vermeyecek şekilde ayarlanmalı; \"ne kadar çok su o kadar iyi\" burada geçerli değil.",
      },

      { h2: "Alternatif ve tamamlayıcı yöntemler" },
      {
        p: "Sulama tek yöntem değil. Bölgeye, bahçe büyüklüğüne ve bütçeye göre başka yaklaşımlar da kullanılıyor:",
      },
      {
        ul: [
          "Rüzgâr makineleri: radyasyon donunda üstteki sıcak havayı aşağı karıştırır.",
          "Isıtıcılar: küçük alanlarda etkili, işletme maliyeti yüksek.",
          "Yer seçimi ve bahçe planı: soğuk havanın biriktiği çukur alanlardan kaçınmak.",
          "Toprak yüzeyini temiz ve sıkı tutmak: gündüz depolanan ısının gece salınmasını kolaylaştırır.",
          "Geç uyanan çeşit ve anaç tercihi: uzun vadeli en sağlam önlem.",
        ],
      },
      {
        p: "En etkili yaklaşım genelde tek bir yöntem değil, bunların bahçeye uygun bir bileşimi oluyor. Yeni tesis edilecek bahçelerde yer seçimi, sonradan kurulacak hiçbir sistemin sağlayamayacağı bir avantaj sağlıyor.",
      },

      { h2: "Karar: yatırım mantıklı mı?" },
      {
        p: "Don koruma sistemi ciddi bir yatırımdır: yüksek debili kaynak, depolama, pompa, hat ve yedek güç. Kararı verirken bahçenin risk profiline bakmak gerekir.",
      },
      {
        p: "Sorulacak sorular: bu bahçede son yıllarda kaç kez don zararı yaşandı, bahçe soğuk havanın biriktiği bir konumda mı, ürün değeri yatırımı karşılıyor mu, mevcut su kaynağı yeterli mi?",
      },
      {
        p: "Kaynak yetersizse sistemi yarım kurmak en kötü seçenek. Böyle bir durumda, kapasiteyi büyütmeden diğer yöntemlere yönelmek daha doğru bir karar oluyor.",
      },

      { h2: "Kararı gece vermek zorunda kalmamak" },
      {
        p: "Don gecelerinde en zor kısım, saat üçte doğru kararı verebilmek. Bunu kolaylaştırmanın yolu, kararı önceden yazılı hâle getirmek.",
      },
      {
        p: "Basit bir plan yeterli: hangi sıcaklıkta sistem devreye alınacak, kim uyanacak, kim depoyu ve pompayı kontrol edecek, elektrik kesilirse ne yapılacak. Bu dört soru gündüz cevaplandığında gece tereddüt kalmıyor.",
      },
      {
        p: "Hava tahminlerinin düzenli takibi de planın parçası. Risk taşıyan geceler genelde bir–iki gün önceden belli oluyor; hazırlık o zaman yapılırsa gece sadece uygulama kalıyor.",
      },

      { h2: "Uygulama sonrası ne yapılır?" },
      {
        p: "Sabah buz çözüldükten sonra sistem durdurulur ve bahçe gözden geçirilir. İlk bakılacak şey dal kırıkları ve buz yükünden zarar görmüş noktalardır.",
      },
      {
        p: "İkinci kontrol toprakta: uzun süren uygulamalarda kök bölgesi fazla suya doymuş olabilir. Drenajı zayıf alanlarda birkaç gün ek sulama yapılmaması gerekir.",
      },
      {
        p: "Üçüncüsü sistemin kendisi: pompanın çalışma saatleri, depo seviyesi ve başlıkların durumu kaydedilir. Bir sonraki don gecesine hazır olmak, bu kaydın tutulmasıyla başlıyor.",
      },

      { h2: "Sezon boyunca hazır tutmak" },
      {
        ol: [
          "Sezon başında tüm hat basınçlandırılarak kontrol edilir.",
          "Başlıkların dönüşü ve deseni tek tek gözlenir.",
          "Filtreler temizlenir, memeler kontrol edilir.",
          "Pompa ve yedek güç kaynağı çalıştırılarak denenir.",
          "Depo dolu tutulur; kritik gecelerden önce seviye kontrol edilir.",
          "Termometreler yerleştirilir ve okunabilirliği doğrulanır.",
          "Gece uygulaması için görev dağılımı önceden belirlenir.",
        ],
      },
      {
        p: "Son madde teknik değil ama belirleyici: sistem hazır olsa bile gece yarısı kimin ne yapacağı belli değilse, karar gecikiyor ve pencere kaçıyor.",
      },

      { h2: "Ölçüm ve kayıt" },
      {
        p: "Don gecelerinin kaydını tutmak, sonraki yılların kararını kolaylaştırıyor. Tarih, en düşük sıcaklık, uygulamanın başlangıç ve bitiş saati, harcanan su ve sonuçta görülen zarar yazıldığında bahçenin risk profili birkaç yılda netleşiyor.",
      },
      {
        p: "Bu kayıt aynı zamanda sistemin gerçekten işe yarayıp yaramadığını gösteren tek veri. Uygulanan ve uygulanmayan gecelerin karşılaştırılması, yatırımın karşılığını somutlaştırıyor.",
      },
      {
        p: "Bahçenin farklı noktalarına konan birkaç termometre ile hangi bölgelerin daha riskli olduğu da ortaya çıkıyor. Bu bilgi, ileride yapılacak dikim ve çeşit tercihlerini doğrudan etkiliyor.",
      },

      { h2: "Malatya bağlamı" },
      {
        p: "Bölgede ilkbahar geç donları, kayısı üretiminin en büyük risk kalemi. Tomurcuk kabarma ve çiçeklenme dönemine denk gelen bir don gecesi, o yılın ürününü belirleyebiliyor.",
      },
      {
        p: "Bahçelerin konumu da belirleyici: soğuk hava ağır olduğu için çukur alanlarda birikiyor. Aynı köyde birkaç yüz metre arayla iki bahçenin zarar tablosu tamamen farklı çıkabiliyor.",
      },
      {
        p: "Bu nedenle karar bahçe bazında veriliyor. Bir komşuda işe yarayan çözüm, konumu farklı bir bahçede aynı sonucu vermeyebiliyor; planlama her zaman kendi arazinizin verisiyle yapılmalı.",
      },
    ],
    faqs: [
      {
        q: "Sulamayla don koruma gerçekten işe yarar mı?",
        a: "Radyasyon donunda, yani açık ve durgun gecelerde işe yarar. Su donarken ısı açığa çıkarır ve buz tabakasının altındaki doku sıfır civarında kalır. Rüzgârlı advektif donlarda ise soğuk hava sürekli yenilendiği için etkisi sınırlıdır ve uygulama risk taşır.",
      },
      {
        q: "Suyu ne zaman açıp ne zaman kapatmalıyım?",
        a: "Sıcaklık kritik eşiğe inmeden önce başlatılır ve güneş doğup buz kendiliğinden çözülmeye başlayana kadar kesintisiz sürdürülür. Ortada bırakılan uygulama, buzun erirken çevreden ısı çekmesi nedeniyle hiç yapmamaktan daha büyük zarar verir.",
      },
      {
        q: "Damlama sulama dona karşı koruma sağlar mı?",
        a: "Hayır. Koruma için suyun dal ve tomurcuk üzerinde donması gerekir; damlama suyu köke verir. Nemli toprağın gün içinde daha fazla ısı depolaması gibi dolaylı ve sınırlı bir katkısı olabilir, ancak bu tek başına koruma sayılmaz.",
      },
      {
        q: "Mevcut sulama sistemim don koruma için yeterli mi?",
        a: "Büyük ihtimalle değil. Don koruma, tüm alana saatler boyunca kesintisiz ve eşit su verilmesini gerektirir; bu, damlama için yeterli olan kaynak ve hattın çok üzerinde bir kapasitedir. Kuyu debisi, depolama, pompa ve hat yeniden boyutlandırılmalıdır.",
      },
      {
        q: "Elektrik kesilirse ne olur?",
        a: "Uygulama yarıda kalır ve zarar korumasız durumdan daha büyük olabilir. Don gecelerinde şebeke arızaları da sık yaşandığı için yedek güç kaynağı bu sistemlerin isteğe bağlı değil zorunlu parçasıdır. Sistem, geceyi bitirebilecek kapasiteyle planlanmalıdır.",
      },
      {
        q: "Buz ağırlığı dalları kırar mı?",
        a: "Aşırı su verildiğinde kırabilir; özellikle genç ağaçlarda ve dallanması zayıf çeşitlerde risk yüksektir. Sistem gerekenden fazla su vermeyecek şekilde ayarlanmalıdır. Bu uygulamada \"ne kadar çok su o kadar iyi\" kuralı geçerli değildir.",
      },
      {
        q: "Termometreyi nereye koymalıyım?",
        a: "Bahçenin en soğuk noktasına, bitki yüksekliğinde. Soğuk hava ağır olduğu için çukur bölümlerde birikir; karar oradaki değere göre verilmelidir. Tek bir noktadan okuma yapmak yanıltıcı olabilir, bu yüzden birden fazla nokta izlenmesi tercih edilir.",
      },
      {
        q: "Başka hangi yöntemler var?",
        a: "Rüzgâr makineleri radyasyon donunda üstteki sıcak havayı aşağı karıştırır; ısıtıcılar küçük alanlarda etkilidir ama işletme maliyeti yüksektir. Uzun vadede en sağlam önlemler yer seçimi ve geç uyanan çeşit–anaç tercihidir. Genelde yöntemlerin bileşimi en iyi sonucu verir.",
      },
    ],
    related: ["kayisi-bahcesi-damlama-sulama", "yagmurlama-sulama-kurulumu", "bahce-sulama-suresi"],
  },
];

// Su deposu, basınç ve tesisat malzemesi yazıları.
// Depo–hidrofor kümesi arama verisinde güçlü; bu dosya o kümeyi derinleştiriyor.

export const tesisatPosts = [
  {
    slug: "su-deposu-secimi",
    title: "Su deposu seçimi: hangi malzeme, kaç ton?",
    category: "Sıhhi Tesisat",
    published: "2026-08-07",
    reading: 9,
    metaTitle: "Su Deposu Seçimi | Malzeme, Hacim ve Montaj",
    metaDesc:
      "Polietilen, paslanmaz ve betonarme depo karşılaştırması; hacim hesabı, bağlantı detayları ve montaj kuralları. Apartman ve müstakil ev için seçim rehberi.",
    keywords: [
      "su deposu seçimi",
      "polietilen su deposu",
      "paslanmaz su deposu",
      "depo hacmi hesabı",
      "apartman su deposu",
    ],
    excerpt:
      "Depo seçiminde \"ne kadar büyükse o kadar iyi\" doğru değil. Hacim, malzeme ve bağlantı detayları birlikte kararlaştırıldığında sistem yıllarca sorunsuz çalışıyor.",
    services: ["su-deposu-temizligi", "hidrofor-pompa-sistemleri", "sihhi-tesisat"],
    intro:
      "Su deposu, tesisatın en görünmeyen ama en belirleyici parçalarından biri. Yanlış hacim seçildiğinde ya kesintide susuz kalıyorsunuz ya da su depoda bekleyip tazeliğini kaybediyor. Malzeme yanlış seçildiğinde ise sorun daha sinsi: suya tat ve koku geçiyor, temizlik zorlaşıyor.",
    body: [
      { h2: "Hacim ve malzeme" },
      {
        p: "Depo hacmi, günlük su tüketiminin yaklaşık yarısı ile tamamı arasında seçilir; malzeme olarak konutlarda gıdayla temasa uygun çok katmanlı polietilen depolar, uzun ömür arandığında paslanmaz depolar tercih edilir.",
      },
      {
        p: "Hacmi gereğinden büyük seçmek sorun çözmez, yeni sorun yaratır: su uzun süre bekler, tortu artar ve koku başlar. Doğru hacim, kesintiye karşı yeterli yedek bırakacak ama suyu bekletmeyecek büyüklüktür.",
      },

      { h2: "Hacim nasıl hesaplanır?" },
      {
        p: "Hesabın başlangıcı kişi başı günlük tüketim. Konutlarda genel kabul kişi başı 120–150 litre civarındadır; bahçe sulaması, çamaşırhane gibi ek kullanımlar bu değerin üzerine eklenir.",
      },
      {
        table: {
          head: ["Yapı", "Kişi sayısı", "Günlük tüketim", "Önerilen depo"],
          rows: [
            ["Müstakil ev", "4 kişi", "≈ 0,6 ton", "0,5–1 ton"],
            ["Küçük apartman", "8 daire × 3 kişi", "≈ 3,6 ton", "2–3 ton"],
            ["Orta apartman", "12 daire × 3 kişi", "≈ 5,4 ton", "2,5–5 ton"],
            ["Site bloğu", "24 daire × 3 kişi", "≈ 10,8 ton", "5–10 ton"],
          ],
        },
      },
      {
        p: "Tablodaki değerler başlangıç noktasıdır. Bölgede kesintiler uzun sürüyorsa üst sınıra, şebeke düzenli çalışıyorsa alt sınıra yaklaşmak daha doğru olur.",
      },
      {
        p: "Bahçe sulaması yapılan evlerde hesap ayrı yapılmalı. Sulama suyu, içme–kullanma suyundan farklı bir tüketim profiline sahiptir ve deponun kısa sürede boşalmasına yol açar.",
      },

      { h2: "Malzeme karşılaştırması" },
      {
        table: {
          head: ["Tip", "Güçlü yanı", "Dikkat edilecek"],
          rows: [
            ["Çok katmanlı polietilen", "Hafif, ekonomik, hijyenik iç yüzey", "Sertifikası kontrol edilmeli"],
            ["Tek katmanlı polietilen", "En ekonomik", "Işık geçirir, alg riski yüksek"],
            ["Paslanmaz çelik", "Uzun ömür, kolay temizlik", "Maliyeti yüksek, kaynak kalitesi kritik"],
            ["Betonarme (yerinde)", "İstenen hacim ve şekil", "Su yalıtımı ve iç kaplama şart"],
            ["Galvaniz", "Dayanıklı gövde", "Zamanla korozyon riski"],
          ],
        },
      },
      {
        p: "Konut uygulamalarında en yaygın tercih çok katmanlı polietilen depolar. Dış katman ışığı geçirmez, orta katman yalıtım sağlar, iç katman ise hijyenik ve pürüzsüz bir yüzey sunar. Tek katmanlı ve ışık geçiren depolar ucuz görünse de içeride alg gelişimine davetiye çıkarır. Güneş gören bir konumda kullanılacaksa bu fark birkaç ay içinde kendini gösteriyor.",
      },

      { h2: "Sertifika ve iç yüzey" },
      {
        p: "İçme suyu depolanacak her depo, gıdayla temasa uygunluk belgesine sahip olmalıdır. Bu belge, malzemenin suya madde geçirmediğini gösterir; belgesi olmayan depolarda plastik tadı ve kokusu sık karşılaşılan bir şikâyet.",
      },
      {
        p: "İç yüzeyin pürüzsüz olması da önemli. Pürüzlü yüzeyler biyofilm oluşumunu kolaylaştırır ve temizliği zorlaştırır. Depo alırken iç yüzeye bakmak, dış görünüşe bakmaktan daha anlamlı.",
      },
      {
        p: "Sulama veya teknik su için kullanılacak depolarda bu kriterler bir miktar esneyebilir; ancak aynı depo ileride içme suyu için kullanılacaksa baştan sertifikalı seçmek doğru olur.",
      },

      { h2: "Depo nereye konumlanır?" },
      {
        p: "En yaygın çözüm bodrum katı + hidrofor kombinasyonudur. Bu düzen yapıya ek yük bindirmez, bakımı kolaydır ve basınç hidroforla sağlanır.",
      },
      {
        p: "Çatı deposu ise yerçekimiyle basınç sağlar; elektrik kesintisinde bile su akar. Buna karşılık üst katlarda basınç yetersiz kalır ve yapıya ciddi yük biner. Bir ton su bir ton ağırlık demektir; bu yük, taşıyıcı sistemin hesabına girmelidir.",
      },
      {
        ul: [
          "Zemin düz, taşıyıcı ve deponun tabanını tam destekleyecek nitelikte olmalı.",
          "Depo çevresinde temizlik ve bakım için erişim boşluğu bırakılmalı.",
          "Kapak tarafında, adam giriş açıklığını kullanabilecek kadar yükseklik olmalı.",
          "Taşma ve tahliye borularının gideceği bir nokta bulunmalı.",
          "Dış mekân depolarında donmaya karşı yalıtım düşünülmeli.",
        ],
      },
      {
        p: "Erişim boşluğu bırakılmadan yerleştirilen depolar, pratikte hiç temizlenemiyor. Montaj sırasında kazanılan birkaç santim, yıllar boyunca yapılamayan bir bakıma dönüşüyor.",
      },

      { h2: "Bağlantı detayları" },
      {
        p: "Deponun performansını belirleyen asıl kısım bağlantılar. Doğru kurgu şu elemanları içerir:",
      },
      {
        ol: [
          "Giriş hattı: şamandıra veya seviye kontrolüyle dolumu yönetir.",
          "Çıkış (emiş) hattı: taban seviyesinden birkaç santim yukarıda olmalı, tortu çekilmemeli.",
          "Tahliye hattı: temizlik için depoyu tamamen boşaltır, en alt kottan alınır.",
          "Taşma borusu: dolumda arıza olursa suyu güvenli bir noktaya yönlendirir.",
          "Havalandırma: dolum ve boşalmada vakum oluşmasını önler, sinekliği olmalı.",
          "Kapak: sızdırmaz, kilitlenebilir ve tozu geçirmeyen tipte.",
        ],
      },
      {
        p: "Taşma borusu ve havalandırmanın sinekliksiz bırakılması, depoya böcek girmesinin bir numaralı nedeni. Basit bir paslanmaz tel, bu sorunu tamamen ortadan kaldırıyor.",
      },

      { h2: "Şamandıra seçimi" },
      {
        p: "Mekanik şamandıralar basit ve ucuzdur; suyla birlikte yükselerek giriş vanasını kapatır. Kireçli sularda zamanla takılabilir ve tam kapanmayarak taşmaya yol açabilir. Elektrikli seviye kontrolleri ise elektrot veya seviye şalteriyle çalışır ve giriş vanasını elektrikli olarak yönetir. Daha güvenilirdir; ayrıca aynı devreden pompa kontrolü de yapılabilir.",
      },
      {
        p: "Hangi tip kullanılırsa kullanılsın, taşma borusunun mutlaka bulunması gerekir. Şamandıra bir gün mutlaka takılır; taşma borusu o gün için vardır.",
      },

      { h2: "Tek depo mu, ikiz depo mu?" },
      {
        p: "İki küçük depo, aynı hacimdeki tek depoya göre birkaç avantaj sunar. En önemlisi bakım: biri temizlenirken diğeri hizmet verir ve bina susuz kalmaz.",
      },
      {
        p: "İkinci avantaj taşıma ve montaj kolaylığı. Dar bodrum kapılarından geçmeyen büyük bir depo yerine, iki küçük depoyu yerleştirmek çoğu binada tek pratik çözüm oluyor.",
      },
      {
        p: "İkiz depo kurulurken bağlantıların vanalarla ayrılabilir olması şart. Biri devre dışı bırakılamayan bir düzen, iki depoyu tek depo hâline getirir ve avantajı ortadan kaldırır.",
      },

      { h2: "Suyun bekleme süresi" },
      {
        p: "Depodaki su ne kadar uzun beklerse kalitesi o kadar düşer. Klor zamanla uçar, sıcaklık arttıkça biyolojik aktivite hızlanır ve tortu birikir.",
      },
      {
        p: "O yüzden deponun günlük tüketimle orantılı olması gerekir. Günde bir kez tamamen yenilenen bir depo, aynı hacimde ama haftada bir yenilenen depodan çok daha sağlıklıdır.",
      },
      {
        p: "Ölü hacim de dikkat edilmesi gereken bir konu. Emiş ağzının konumu nedeniyle hiç kullanılmayan alt bölge, tortu ve bakteri için birikim alanı hâline gelebiliyor.",
      },

      { h2: "Kışın donma riski" },
      {
        p: "Malatya'da kış sıcaklıkları, dış mekâna veya soğuk bir bodruma yerleştirilmiş depolar için risk oluşturur. Donan su genleşir; depo gövdesinde ve özellikle bağlantı rekorlarında çatlama yapabilir.",
      },
      {
        ul: [
          "Dış mekân depoları yalıtımlı tip seçilmeli veya sonradan yalıtılmalı.",
          "Bağlantı hatları donmaya karşı korunmalı, gerekirse ısıtıcı kablo kullanılmalı.",
          "Kullanılmayan mevsimlik depolar kış öncesi tamamen boşaltılmalı.",
          "Depo odasının havalandırması, soğuk hava akımı yaratmayacak şekilde düzenlenmeli.",
        ],
      },
      {
        p: "Çatı depolarında risk daha yüksek. Yalıtımı yetersiz bir çatı deposu, sert bir kış gecesinde yüzeyden donmaya başlar ve bağlantılar zarar görür.",
      },

      { h2: "Giriş hattı ve dolum süresi" },
      {
        p: "Deponun ne kadar sürede dolduğu, şebeke basıncına ve giriş hattının çapına bağlıdır. Basıncın düşük olduğu bölgelerde dar bir giriş hattı, deponun gece boyunca bile dolmamasına yol açabilir. Bu durumda çözüm depoyu büyütmek değil, giriş hattını gözden geçirmektir. Giriş çapının bir kademe büyütülmesi veya hattaki bir filtrenin temizlenmesi, dolum süresini epeyce kısaltıyor.",
      },
      {
        p: "Dolum süresini bir kez ölçmek faydalı: depo boşken giriş açılır ve dolum süresi not edilir. Bu değer, ileride yaşanacak yavaşlamaları fark etmek için referans oluşturur.",
      },

      { h2: "Sulama ve teknik su için ayrı depo" },
      {
        p: "Bahçe sulaması, araç yıkama gibi kullanımlar içme suyu deposundan beslendiğinde, depo hızla boşalır ve kesintide yedek kalmaz. Bu tür kullanımlar için ayrı bir teknik su deposu mantıklı bir çözüm.",
      },
      {
        ul: [
          "Teknik su deposunda sertifika koşulları daha esnektir.",
          "Kuyu suyu varsa sulama bu kaynaktan beslenebilir.",
          "İki sistem birbirine bağlanacaksa geri akış önleyici zorunludur.",
          "Ayrı depo, içme suyu deposunun daha küçük ve daha sık yenilenen olmasını sağlar.",
        ],
      },
      {
        p: "Üçüncü madde ihmal edilmemeli: sulama suyunun içme suyu hattına geri kaçması, sağlık açısından ciddi bir risk. İki sistemin kesişme noktalarında çekvalf kullanılması şart.",
      },

      { h2: "Depo ne zaman değişmeli?" },
      {
        table: {
          head: ["Bulgu", "Karar"],
          rows: [
            ["Gövdede çatlak veya sızıntı", "Değişim"],
            ["İç yüzeyde kalıcı leke ve pürüzlenme", "Değişim değerlendirilir"],
            ["Temizliğe rağmen tekrarlayan koku", "İç yüzey ve malzeme incelenir"],
            ["Kapak ve conta yıpranması", "Parça değişimi yeterli"],
            ["Hacim ihtiyaca uymuyor", "Yeniden boyutlandırma"],
            ["Işık geçiren tek katmanlı depo", "Değişim veya gölgeleme"],
          ],
        },
      },
      {
        p: "Depo değişimi planlanırken bodrum kapısı ölçüsü, hortum ve vana bağlantı çapları ile zeminin durumu birlikte değerlendirilmeli. Aynı iş sırasında emiş kotu ve tahliye hattı da düzeltilebiliyor.",
      },

      { h2: "Temizlik ve bakım" },
      {
        p: "Depo temizliği yılda bir–iki kez yapılır. İşlem; boşaltma, tortu alma, iç yüzeyin fırçalanması, dezenfeksiyon ve bol suyla durulama adımlarından oluşur.",
      },
      {
        p: "Temizlik sonrası ilk dolum kullanılmadan tahliye edilmelidir. Aynı ziyarette kapak contası, havalandırma sinekliği, şamandıra ve emiş hattı da kontrol edilir.",
      },
      {
        p: "Bu bakım hem su kalitesi hem sistem ömrü açısından karşılığı yüksek bir iş. Tortu birikmiş bir depoda hem su kokar hem pompa ve armatürler sürekli tortu çeker.",
      },

      { h2: "Deponun yalıtımı ve konumu" },
      {
        p: "Yalıtımlı depolar, suyun yaz sıcağında fazla ısınmasını ve kışın donmaya yaklaşmasını geciktirir. Sıcaklık farkının azalması, aynı zamanda su kalitesinin daha uzun süre korunması demektir.",
      },
      {
        p: "Deponun bulunduğu mekânın havalandırması da önemli. Rutubetli ve havasız bir depo odasında küf gelişir; koku suya değil, ortama ait olsa bile şikâyet suya yazılır.",
      },
      {
        p: "Mümkünse depo, ısı kaynaklarından ve doğrudan güneşten uzak bir noktaya yerleştirilir. Bu, hiçbir ek maliyeti olmayan ama yıllar boyunca fayda veren bir konumlandırma kararı.",
      },

      { h2: "Depo alırken sorulacak sorular" },
      {
        ol: [
          "İçme suyu için gıda uygunluk belgesi var mı?",
          "Kaç katmanlı, dış katman ışık geçiriyor mu?",
          "Adam giriş açıklığı temizlik yapmaya uygun mu?",
          "Tahliye çıkışı en alt kotta mı?",
          "Kapak sızdırmaz ve kilitlenebilir mi?",
          "Bodrum kapısından geçecek ölçüde mi?",
          "Zemin, dolu ağırlığı taşıyacak durumda mı?",
          "Bağlantı çapları mevcut tesisata uygun mu?",
        ],
      },
      {
        p: "Bu sekiz sorunun tamamı satın alma öncesinde yanıtlandığında, montaj sırasında sürpriz çıkmıyor. En sık yaşanan aksilik ise altıncı madde: kapıdan geçmeyen depo.",
      },
    ],
    faqs: [
      {
        q: "Su deposu kaç tonluk olmalı?",
        a: "Genel yaklaşım, günlük tüketimin yarısı ile tamamı arasında bir hacim seçmektir. Kişi başı günlük 120–150 litre kabul edilir. On iki daireli ve daire başına üç kişilik bir binada günlük tüketim yaklaşık beş tondur; depo 2,5–5 ton aralığında seçilir.",
      },
      {
        q: "Büyük depo daha mı iyi?",
        a: "Hayır. Gereğinden büyük depoda su uzun süre bekler; klor uçar, sıcaklıkla birlikte biyolojik aktivite artar ve tortu birikir. Sonuçta koku ve bulanıklık şikâyeti başlar. Doğru hacim, kesintiye karşı yedek bırakan ama suyu bekletmeyen büyüklüktür.",
      },
      {
        q: "Polietilen mi paslanmaz mı?",
        a: "Konutlarda çok katmanlı polietilen depolar ekonomik ve yeterlidir; hafif oldukları için montajı da kolaydır. Paslanmaz depolar daha uzun ömürlü ve temizliği kolaydır, ancak maliyeti epey yüksektir. Her iki durumda da gıda uygunluk belgesi aranmalıdır.",
      },
      {
        q: "Depo çatıya mı bodruma mı konmalı?",
        a: "Bodrum deposu ve hidrofor en yaygın çözümdür; yapıya ek yük bindirmez, bakımı kolaydır. Çatı deposu yerçekimiyle basınç sağlar ve elektrik kesintisinde bile su verir; buna karşılık üst katlarda basınç yetersiz kalır ve yapıya ciddi yük biner.",
      },
      {
        q: "Emiş hattı neden tabandan yukarıda olmalı?",
        a: "Depo tabanında zamanla tortu birikir. Emiş ağzı doğrudan tabanda olursa bu tortu sürekli tesisata çekilir; armatürler tıkanır, pompa aşınır. Emiş ağzının tabandan birkaç santim yukarıda konumlandırılması bu sorunu büyük ölçüde ortadan kaldırır.",
      },
      {
        q: "Taşma borusu şart mı?",
        a: "Evet. Şamandıra veya seviye kontrolü bir gün mutlaka arızalanır; taşma borusu o gün için vardır. Suyu güvenli bir noktaya yönlendirir ve su basmasını önler. Ucuna sineklik takılması, depoya böcek girişini engellemek için gereklidir.",
      },
      {
        q: "İki küçük depo mu, tek büyük depo mu?",
        a: "İkiz depo düzeni bakım açısından açık biçimde avantajlıdır: biri temizlenirken diğeri hizmet verir ve bina susuz kalmaz. Ayrıca dar kapılardan geçirmek kolaydır. Tek koşul, depoların vanalarla birbirinden ayrılabilir şekilde bağlanmasıdır.",
      },
      {
        q: "Depo ne sıklıkla temizlenmeli?",
        a: "Yılda bir–iki kez yeterlidir; su kalitesi ve kullanım yoğunluğu sıklığı değiştirir. Temizlik boşaltma, tortu alma, fırçalama, dezenfeksiyon ve bol suyla durulama adımlarını içerir. Aynı ziyarette kapak contası, sineklik ve şamandıra da kontrol edilmelidir.",
      },
    ],
    related: ["su-deposu-hidrofor-birlikte", "depo-suyu-kokuyor", "su-deposu-ne-zaman-temizlenmeli"],
  },

  {
    slug: "depo-suyu-kokuyor",
    title: "Depo suyu neden kokar, neden bulanıklaşır?",
    category: "Bakım",
    published: "2026-07-28",
    reading: 9,
    metaTitle: "Depo Suyu Kokuyor | Nedenleri ve Çözümü",
    metaDesc:
      "Yumurta kokusu, küf kokusu, bulanıklık ve yeşillenme: depo suyundaki sorunların nedenleri, temizlik prosedürü ve tekrarını önleme yöntemleri.",
    keywords: [
      "depo suyu kokuyor",
      "su deposu temizliği",
      "depoda yosun",
      "bulanık su",
      "biyofilm",
    ],
    excerpt:
      "Depo suyu koktuysa aranacak yer deponun içidir; gelen suyun kendisi nadiren suçludur. Kokunun türü, çoğu zaman nedeni de adresiyle söylüyor.",
    services: ["su-deposu-temizligi", "sihhi-tesisat", "hidrofor-pompa-sistemleri"],
    intro:
      "Musluktan gelen suda koku fark edildiğinde ilk şüphe şebekeye gider. Oysa aynı şebekeden beslenen komşu binada sorun yoksa, kaynak neredeyse kesinlikle kendi deponuzdur. İyi haber şu: bu sorunların tamamı önlenebilir ve çoğu tek bir bakımla çözülüyor.",
    body: [
      {
        p: "Depo suyunda koku ve bulanıklığın başlıca nedenleri şunlardır: suyun uzun süre beklemesi, iç yüzeyde biyofilm oluşumu, ışık geçiren depoda alg gelişimi, kapak ve havalandırmadan içeri madde girmesi ve tabanda biriken tortu. Çözüm sırası da bu nedenlere göre kurulur: önce depo boşaltılıp temizlenir ve dezenfekte edilir, ardından kokunun tekrarlamaması için kaynak ortadan kaldırılır. Sadece temizlik yapmak, nedeni gidermezse birkaç ay sonra aynı noktaya dönülür.",
      },

      { h2: "Kokunun türü nedeni söyler" },
      {
        table: {
          head: ["Koku / görünüm", "Muhtemel neden", "Yapılacak"],
          rows: [
            ["Çürük yumurta kokusu", "Oksijensiz ortamda bakteri faaliyeti", "Boşaltma, temizlik, dezenfeksiyon"],
            ["Küf, toprak kokusu", "Biyofilm veya alg", "Fırçalama ve dezenfeksiyon"],
            ["Yeşilimsi renk", "Işık geçiren depoda alg", "Işık geçirmeyen depo veya gölgeleme"],
            ["Bulanık, tortulu su", "Tabanda biriken tortu", "Tahliye ve emiş kotu kontrolü"],
            ["Plastik / kimyasal koku", "Uygun olmayan malzeme veya yeni depo", "Sertifika kontrolü, uzun durulama"],
            ["Kuvvetli klor kokusu", "Şebeke klor seviyesi veya aşırı dezenfeksiyon", "Havalandırma, durulama"],
            ["Metalik tat", "Korozyon", "Depo ve boru kontrolü"],
          ],
        },
      },
      {
        p: "Ayrım yapmadan yapılan müdahale sonuç vermez. Örneğin alg kaynaklı bir kokuda tek başına dezenfeksiyon yeterli olmaz; ışık girişi engellenmediği sürece alg birkaç hafta içinde geri döner.",
      },

      { h2: "Suyun beklemesi" },
      {
        p: "Şebeke suyunda bulunan klor, zamanla uçar. Deponun büyüklüğü tüketime göre fazlaysa su günlerce bekler ve koruyucu etki ortadan kalkar. Bu, koku sorunlarının en yaygın arka planı.",
      },
      {
        p: "Sıcaklık bu süreci hızlandırır. Yaz aylarında ısınan bir depoda biyolojik aktivite epeyce artar; aynı depo kışın hiç sorun çıkarmazken temmuzda koku yapmaya başlayabilir.",
      },
      {
        p: "Çözüm çoğunlukla hacmi tüketime uyarlamaktan geçer. İki depolu sistemlerde birini devre dışı bırakmak, tek depolu sistemlerde ise seviye ayarını düşürerek suyun daha sık yenilenmesini sağlamak pratik yöntemler.",
      },

      { h2: "Biyofilm: gözle görülmeyen tabaka" },
      {
        p: "Depo iç yüzeyinde zamanla ince, kaygan bir tabaka oluşur. Mikroorganizmaların oluşturduğu bu tabakaya biyofilm denir ve suya koku ile tat verir.",
      },
      {
        p: "Elle dokunulduğunda kayganlığı hemen fark edilir.",
      },
      {
        p: "Biyofilm sadece durulamayla kalkmaz; mekanik olarak fırçalanması gerekir. depo temizliğinde fırçalama adımı atlanamaz; sadece boşaltıp doldurmak, tabakayı yerinde bırakır.",
      },
      {
        p: "Pürüzlü iç yüzeyler biyofilmi kolaylaştırır. Bu nedenle depo seçiminde iç yüzeyin düzgünlüğü, dış görünüşten çok daha önemli bir kriter.",
      },

      { h2: "Işık ve alg" },
      {
        p: "Alg gelişimi için üç şey gerekir: su, besin ve ışık. Depoda ilk ikisini engelleyemezsiniz; ama ışığı tamamen kesmek mümkün ve etkili bir çözüm. Işık geçiren tek katmanlı depolar, özellikle güneş gören konumlarda kısa sürede yeşillenir. Çok katmanlı depolarda dış katman ışığı geçirmez ve bu sorun büyük ölçüde ortadan kalkar.",
      },
      {
        p: "Mevcut depo ışık geçiriyorsa, üzerini örtmek veya güneş almayan bir konuma taşımak kalıcı çözümdür. Sürekli dezenfeksiyonla algle mücadele etmek hem zahmetli hem sonuçsuz.",
      },

      { h2: "Kapak, havalandırma ve dışarıdan giriş" },
      {
        ul: [
          "Kapak contası yıpranmışsa toz ve haşere girer.",
          "Havalandırma ağzında sineklik yoksa böcek yumurtlayabilir.",
          "Taşma borusunun ucu açıkta ve sineksizse dışarıdan giriş yolu olur.",
          "Depo üzerinde biriken su, kapak kenarından içeri sızabilir.",
          "Kilitlenmeyen kapak, istenmeyen müdahalelere açıktır.",
        ],
      },
      {
        p: "Bu beş maddenin tamamı ucuz ve hızlı çözülür. Buna rağmen sahada en sık gördüğümüz durum, kapağı üzerine kapatılmış ama sızdırmazlığı hiç kontrol edilmemiş depolar.",
      },
      {
        p: "Depo odasında rutubet ve küf varsa, koku suyun kendisinden değil ortamdan geliyor olabilir. Bu ayrımı yapmak için depodan alınan su örneği başka bir ortamda koklanır.",
      },

      { h2: "Tortu ve ölü hacim" },
      {
        p: "Zamanla depo tabanında kum, kireç ve organik parçacıklardan oluşan bir tortu birikir. Emiş ağzı bu birikime yakınsa, her pompa çalışmasında tortu tesisata gider ve suyu bulandırır.",
      },
      {
        p: "Emiş ağzının tabandan birkaç santim yukarıda olması, tortunun tesisata karışmasını büyük ölçüde önler. Ancak bu, tortunun temizlenmemesi anlamına gelmez; birikim büyüdükçe emiş seviyesine yaklaşır.",
      },
      {
        p: "Tahliye vanasının en alt kottan alınmış olması, temizliği kolaylaştıran en önemli detay. Tahliyesi olmayan depolarda tortu ancak elle boşaltılabiliyor ve bu, temizliğin ertelenme nedeni oluyor.",
      },

      { h2: "Temizlik nasıl yapılır?" },
      {
        ol: [
          "Depo girişi kapatılır, mevcut su tahliye edilir.",
          "Taban tortusu tamamen alınır.",
          "İç yüzey uygun fırçayla mekanik olarak temizlenir.",
          "Uygun dezenfektanla belirtilen sürede uygulama yapılır.",
          "Depo bol suyla durulanır.",
          "İlk dolum kullanılmadan tahliye edilir.",
          "Kapak contası, sineklik, şamandıra ve emiş hattı kontrol edilir.",
          "Tarih ve yapılan işlemler kaydedilir.",
        ],
      },
      {
        p: "Kapalı hacim içinde çalışmak güvenlik gerektirir. Havalandırması yetersiz depolarda kimyasal buharı birikebilir; işlem sırasında dışarıda bir kişinin bulunması ve havalandırmanın açık tutulması şart.",
      },

      { h2: "Dezenfeksiyonda ölçü önemli" },
      {
        p: "Fazla dezenfektan, sorunu çözmek yerine yeni bir koku kaynağı yaratır. Uygulama, ürünün talimatındaki doz ve bekleme süresine göre yapılmalı; \"biraz fazla koyalım\" yaklaşımı doğru değil.",
      },
      {
        p: "Farklı kimyasalların birlikte kullanılmasından kaçınılmalı. Karışım hem tehlikeli gazlar açığa çıkarabilir hem de deponun malzemesine zarar verebilir. İşlem sonrası durulamanın yeterliliği, suyun kokusuyla anlaşılır. Klor kokusu kalmışsa durulama tekrarlanır; ilk dolumun kullanılmadan boşaltılması o yüzden standart bir adım.",
      },

      { h2: "Koku ne zaman ciddiye alınmalı?" },
      {
        p: "Her koku aynı aciliyette değil. Kısa süreli, temizlikle geçen ve tekrarlamayan kokular genelde bakım eksikliğinden kaynaklanır ve düzeltilmesi kolaydır.",
      },
      {
        p: "Ancak koku aniden başladıysa, suyun rengi değiştiyse ve aynı dönemde mide rahatsızlıkları görüldüyse, su içme amaçlı kullanılmamalı ve analiz yaptırılmalıdır. Böyle olunca tahminle ilerlemek doğru değil.",
      },
      {
        p: "Kuyu suyu kullanılan yerlerde bu ayrım daha da önemli. Yüzey sularının karıştığı sığ kuyularda özellikle yağışlı dönemlerden sonra su kalitesi değişebiliyor.",
      },

      { h2: "Sorun depoda değilse" },
      {
        p: "Bazı durumlarda koku deponun değil tesisatın sorunudur. Uzun süre kullanılmayan bir kolon hattı, kullanılmayan bir banyonun ölü hattı ya da sıcak su tarafındaki bir sorun benzer şikâyet yaratır.",
      },
      {
        table: {
          head: ["Bulgu", "Nereye bakılır"],
          rows: [
            ["Sadece sıcak suda koku", "Boyler, kombi ve sıcak su hattı"],
            ["Sadece bir muslukta koku", "O noktaya giden hat, ölü kol"],
            ["Tüm evde, depodan bağımsız", "Şebeke veya ana giriş filtresi"],
            ["Tatilden dönüşte kuvvetli", "Durgun kalmış tesisat, ölü hat"],
            ["Gider tarafından yayılan koku", "Sifon kurumuş, gider havalandırması"],
          ],
        },
      },
      {
        p: "Son satır özellikle sık karıştırılıyor: kuruyan bir sifon, kanalizasyon kokusunun mekâna dolmasına yol açıyor ve bu koku suya atfediliyor. Kontrolü basit: kullanılmayan gidere bir bardak su dökmek yeterli.",
      },

      { h2: "Yaz aylarında ne değişir?" },
      {
        p: "Sıcaklık, depo suyunun kalitesini etkiler. Isınan suda hem klor daha hızlı uçar hem mikroorganizma faaliyeti hızlanır. O nedenle koku şikâyetleri neredeyse her zaman yaz aylarında yoğunlaşır.",
      },
      {
        p: "Depo odasının serin ve havalandırılmış olması bu etkiyi azaltır. Güneş gören bir konumda bulunan depolarda gölgeleme yapmak, tek başına gözle görülür fark yaratıyor.",
      },
      {
        p: "Yaz aylarında temizlik aralığını kısaltmak da makul bir yaklaşım. Kışın yılda bir yeterli olan bakım, sıcak dönemde sezon ortasında bir kez daha tekrarlandığında sorun çıkmıyor.",
      },

      { h2: "Apartmanda kim sorumlu?" },
      {
        p: "Ortak kullanılan su deposu, binanın ortak alanıdır ve bakımı yönetimin sorumluluğundadır. Buna rağmen uygulamada depo temizliği çoğu binada, ancak şikâyet geldiğinde gündeme geliyor. Pratik çözüm, temizliği yıllık bakım planına almak ve tarihini kayıt altına almak.",
      },
      {
        p: "Kapı girişine asılan küçük bir bakım kartı, hem şeffaflık sağlıyor hem işin unutulmasını engelliyor.",
      },
      {
        p: "İkiz depo düzeni bu konuda da kolaylık sağlıyor: temizlik sırasında su kesilmediği için sakinlerden itiraz gelmiyor ve iş ertelenmiyor.",
      },

      { h2: "Filtre ve arıtma çözümleri" },
      {
        p: "Depo çıkışına konan bir filtre, tortu ve partikülleri tutarak musluğa temiz su gitmesini sağlar. Ancak filtre, kokunun nedenini ortadan kaldırmaz; yalnızca sonucunu bir miktar perdeler.",
      },
      {
        ul: [
          "Tortu filtresi: kum, kireç parçacığı ve partikülleri tutar.",
          "Aktif karbon filtre: tat ve koku giderimine yardımcı olur.",
          "Yumuşatma sistemi: sertlik kaynaklı kireç sorunlarına yöneliktir.",
          "Ultraviyole dezenfeksiyon: mikrobiyolojik risklerde kullanılır.",
        ],
      },
      {
        p: "Bu çözümlerin hiçbiri, temizlenmemiş bir deponun yerine geçmez. Doğru sıra önce kaynağı düzeltmek, sonra gerekiyorsa filtreleme eklemektir; tersi yapıldığında filtreler sık sık tıkanır ve maliyet büyür.",
      },

      { h2: "Tekrarını önlemek" },
      {
        ol: [
          "Depo hacmini tüketimle orantılı tutun; su beklemesin.",
          "Işık geçirmeyen depo kullanın veya üzerini örtün.",
          "Kapak sızdırmazlığını ve sinekliği yılda bir kontrol edin.",
          "Emiş ağzını tabandan yukarıda tutun.",
          "Tahliye vanasını en alt kottan alın.",
          "Yılda bir–iki kez temizlik yapın ve kaydını tutun.",
          "Yaz aylarında depo odasının serin kalmasını sağlayın.",
        ],
      },
      {
        p: "Bu yedi maddeyi uygulayan binalarda koku şikâyeti neredeyse hiç tekrarlamıyor. Aksatıldığında ise sorun mevsimsel olarak geri dönüyor: her yaz aynı şikâyet, her sonbahar aynı temizlik.",
      },

      { h2: "Tatil dönüşü ne yapmalı?" },
      {
        p: "Uzun süre kullanılmayan bir tesisatta su durgun kalır. Dönüşte ilk yapılacak şey, tüm musluklardan birkaç dakika su akıtarak hatları yenilemek.",
      },
      {
        ol: [
          "Önce soğuk su musluklarını sırayla açıp akıtın.",
          "Ardından sıcak su hattını akıtın; boyler suyu da yenilenmiş olur.",
          "Duş başlığını ayrı olarak akıtın; içinde su kalır.",
          "Az kullanılan banyoların giderlerine su dökerek sifonları doldurun.",
          "Depolu sistemde depo seviyesini ve suyun görünümünü kontrol edin.",
        ],
      },
      {
        p: "Dördüncü madde sıklıkla kokunun asıl kaynağı. Kuruyan sifon, kanalizasyon kokusunun mekâna dolmasına yol açar ve bu koku sıklıkla musluk suyuna atfedilir.",
      },

      { h2: "Ne zaman analiz yaptırmalı?" },
      {
        p: "Temizlik ve dezenfeksiyona rağmen koku sürüyorsa, ya kaynak farklıdır ya da suyun kendisinde bir sorun vardır. Bu noktada tahmin yürütmek yerine analiz yaptırmak en doğrusu.",
      },
      {
        p: "Analiz, mikrobiyolojik ve kimyasal başlıkları ayrı ayrı gösterir. Sonuç, sorunun depoda mı şebekede mi kuyuda mı olduğunu netleştirir ve gereksiz müdahaleleri önler.",
      },
      {
        p: "Kuyu suyu kullanılan yerlerde analiz zaten düzenli olarak yapılmalı. Yüzey sularının karıştığı sığ kuyularda su kalitesi mevsimsel olarak değişebiliyor; tek seferlik bir sonuç yıllarca geçerli sayılmamalı.",
      },
    ],
    faqs: [
      {
        q: "Depo suyu neden çürük yumurta gibi kokar?",
        a: "Bu koku genellikle oksijensiz ortamda çalışan bakterilerin faaliyetinden kaynaklanır. Suyun uzun süre beklemesi ve tabanda biriken organik tortu bu ortamı hazırlar. Çözüm; deponun boşaltılması, tortunun alınması, iç yüzeyin fırçalanması ve uygun dozda dezenfeksiyondur.",
      },
      {
        q: "Depoda yeşillenme neden olur?",
        a: "Işık geçiren depolarda alg gelişiminden kaynaklanır. Alg için su, besin ve ışık gerekir; engellenebilecek tek unsur ışıktır. Işık geçirmeyen çok katmanlı depo kullanmak veya mevcut deponun üzerini örtmek kalıcı çözümdür. Yalnızca dezenfeksiyon yapmak sorunu tekrarlatır.",
      },
      {
        q: "Temizlik yaptırdım, koku birkaç ay sonra geri döndü. Neden?",
        a: "Temizlik semptomu giderir, nedeni gidermez. Deponun tüketime göre büyük olması, ışık geçirmesi, kapak sızdırmazlığının bozuk olması veya emiş kotunun yanlış olması kokuyu tekrar getirir. Kalıcı sonuç için bu nedenlerden hangisinin geçerli olduğu tespit edilmelidir.",
      },
      {
        q: "Sadece sıcak sudan koku geliyorsa sorun depoda mı?",
        a: "Büyük ihtimalle hayır. Sadece sıcak suda ortaya çıkan koku, boyler veya sıcak su hattıyla ilgilidir. Boyler içinde biriken tortu ve düşük sıcaklıkta uzun süre bekleyen su bu kokuyu yaratabilir. Kontrol, sıcak su tarafında yapılmalıdır.",
      },
      {
        q: "Depoya klor tableti atmak doğru mu?",
        a: "Kontrolsüz uygulama önerilmez. Doz belirlenmeden yapılan klorlama ya yetersiz kalır ya da suya keskin bir koku verir. Sorun tekrarlıyorsa çözüm sürekli kimyasal eklemek değil; deponun hacmini, ışık geçirgenliğini ve temizlik düzenini gözden geçirmektir.",
      },
      {
        q: "Bulanık su tehlikeli mi?",
        a: "Bulanıklık tek başına bir tanı değildir; kaynağına göre değişir. Tortu kaynaklıysa öncelikle estetik ve mekanik bir sorundur. Ancak bulanıklık ani başladıysa ve kokuyla birlikteyse, kullanmadan önce analiz yaptırmak doğru olur. Şüphede kalınan durumda içme suyu olarak kullanılmamalıdır.",
      },
      {
        q: "Depo temizliği sırasında su kesilecek mi?",
        a: "Tek depolu sistemlerde temizlik süresince su kesintisi olur; genelde birkaç saat sürer. İkiz depo düzeninde ise biri devre dışı bırakılıp diğeri hizmet vermeye devam eder ve kesinti yaşanmaz. Bu, apartmanlarda ikiz depoyu tercih etme nedenlerinden biridir.",
      },
      {
        q: "Kokunun kaynağının depo olduğunu nasıl doğrularım?",
        a: "Depodan ve depoya girmeden önceki noktadan ayrı ayrı su örneği alın. Şebeke girişindeki su temiz, depo çıkışındaki su kokuluysa kaynak depodur. Aynı şebekeden beslenen komşu binada sorun olup olmadığını sormak da hızlı bir doğrulama yöntemidir.",
      },
    ],
    related: ["su-deposu-ne-zaman-temizlenmeli", "su-deposu-secimi", "su-deposu-hidrofor-birlikte"],
  },

  {
    slug: "evde-su-basinci-dusuk",
    title: "Evde su basıncı neden düşük? Adım adım kontrol",
    category: "Sıhhi Tesisat",
    published: "2026-08-03",
    reading: 9,
    metaTitle: "Evde Su Basıncı Düşük | Nedenleri ve Kontrol Sırası",
    metaDesc:
      "Tek musluk mu, tüm ev mi? Perlatör, ana filtre, kireçlenme, basınç düşürücü ve hidrofor. Su basıncı sorununda hangi sırayla kontrol yapılır?",
    keywords: [
      "su basıncı düşük",
      "musluktan az su akıyor",
      "perlatör temizliği",
      "basınç düşürücü vana",
      "kireçlenmiş boru",
    ],
    excerpt:
      "Su basıncı sorununda ilk soru hep aynı: tek noktada mı, tüm evde mi? Bu ayrım yapıldığında çözüm yarım saatlik bir işe iniyor.",
    services: ["sihhi-tesisat", "hidrofor-pompa-sistemleri", "bina-tesisat-yenileme"],
    intro:
      "Basınç düşüklüğü şikâyetlerinin önemli bölümü, evin içindeki küçük bir tıkanıklıktan kaynaklanıyor. Buna rağmen genelde ilk akla gelen çözüm hidrofor almak oluyor. Doğru sıra izlendiğinde, hidrofora gerçekten ihtiyaç olup olmadığı birkaç kontrolde ortaya çıkıyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Önce sorunun kapsamı belirlenir: tek musluk, tek daire yoksa tüm bina mı? Tek muslukta perlatör ve köşe vanası, tek dairede ana filtre ve kolon hattı, tüm binada ise şebeke basıncı, depo ve hidrofor incelenir.</strong>",
      },
      {
        p: "Bu ayrım yapılmadan yapılan her müdahale ihtimal oyunudur. Basınç sorunlarında en pahalı yol, nedeni bulmadan ekipman değiştirmek.",
      },

      { h2: "Kapsamı belirleyin" },
      {
        table: {
          head: ["Durum", "Muhtemel kaynak", "İlk kontrol"],
          rows: [
            ["Tek musluk düşük", "Perlatör, köşe vanası, esnek bağlantı", "Perlatör sökülüp temizlenir"],
            ["Sadece sıcak su düşük", "Kombi, boyler, sıcak su hattı", "Kombi filtresi ve eşanjör"],
            ["Bir dairede tüm musluklar", "Daire girişi filtresi veya vana", "Ana filtre ve giriş vanası"],
            ["Üst katlarda düşük", "Şebeke basıncı yetersiz", "Basınç ölçümü, hidrofor değerlendirmesi"],
            ["Tüm binada düşük", "Şebeke, depo, pompa", "Ana giriş basıncı ölçümü"],
            ["Belirli saatlerde düşük", "Şebeke yoğunluğu veya depo boşalması", "Saatlik ölçüm, depo seviyesi"],
          ],
        },
      },
      {
        p: "Belirli saatlerde yaşanan düşüşler özellikle yanıltıcı. Sabah ve akşam saatlerinde şebeke basıncı bölgesel olarak düşebilir; böyle bir durumda evde arıza aramak sonuçsuz kalır.",
      },

      { h2: "Perlatör: en sık ve en kolay" },
      {
        p: "Musluk ucundaki perlatör, suya hava karıştıran küçük bir süzgeçtir. İçindeki elek zamanla kireç ve tortuyla dolar; akış görünürde azalır ama tesisatta hiçbir sorun yoktur. Sökülüp sirke içinde bekletilerek veya yumuşak fırçayla temizlenerek çözülür. Çok kireçlenmişse değiştirmek daha pratiktir; küçük bir parça, akışı hissedilir ölçüde geri getirir.",
      },
      {
        p: "Perlatör temizlendikten sonra akış düzeldiyse sorun çözülmüştür. Düzelmediyse sıradaki adıma geçilir; bu sıralama zaman kaybını önlüyor.",
      },

      { h2: "Köşe vanası ve esnek bağlantı" },
      {
        p: "Lavabo ve klozet altındaki köşe vanaları çoğu zaman tam açık sanılır ama değildir. Özellikle tadilat sonrası yarı kapalı bırakılan vanalar, o noktadaki akışı epeyce düşürür.",
      },
      {
        p: "Esnek bağlantı hortumları da sorun kaynağı olabilir. Kıvrılmış, ezilmiş veya içi kireç tutmuş bir hortum kesit daralması yaratır. Sökülüp içinden bakıldığında durum hemen anlaşılır.",
      },
      {
        p: "Bu iki kontrol birkaç dakika sürer ve alet gerektirmez. Tek noktadaki basınç sorunlarının önemli bölümü bu adımda kapanıyor.",
      },

      { h2: "Ana filtre: unutulan parça" },
      {
        p: "Daire veya bina girişindeki ana filtre, tesisata giren tortuyu tutar. Düzenli temizlenmediğinde tıkanır ve tüm evde basıncı düşürür. Sahada en sık gördüğümüz \"tüm evde basınç düştü\" nedeni budur.",
      },
      {
        p: "Filtre gövdesi şeffafsa içeriden gözle bakmak yeterli olur. Değilse sökülüp kartuş kontrol edilir. Kartuşlu filtrelerde kartuşun ömrü sınırlıdır ve temizlenerek değil değiştirilerek yenilenir.",
      },
      {
        p: "Filtre yeni takıldıysa ve basınç ondan sonra düştüyse, filtre sistemin debisine göre küçük seçilmiş olabilir. Bu durumda temizlik değil, doğru boyutta bir filtre gerekir.",
      },

      { h2: "Kireçlenmiş borular" },
      {
        p: "Eski galvaniz borulu binalarda, boru iç yüzeyinde yıllar içinde kireç ve korozyon birikir. Bu birikim iç çapı daraltır ve basıncı kalıcı biçimde düşürür. Belirtisi tipiktir: basınç yıllar içinde yavaş yavaş azalmıştır, sıcak su tarafında daha ağırdır ve hiçbir müdahaleyle geri gelmez.",
      },
      {
        p: "Bir noktadan kesilen boru parçasına bakıldığında daralma gözle görülür.",
      },
      {
        quote:
          "Kireçlenmiş galvaniz boruda basıncı geri getiren bir ayar yoktur; çözüm hattın yenilenmesidir.",
      },
      {
        p: "Yenileme kararı verilirken kısmi mi komple mi yapılacağı önemli. Sadece bir kısmın değiştirilmesi, darboğazı bir sonraki eski bölüme kaydırır ve beklenen sonucu vermez.",
      },

      { h2: "Basınç düşürücü vana" },
      {
        p: "Bazı binalarda daire girişine basınç düşürücü vana konur. Görevi, şebekeden gelen yüksek basıncı tesisatın kaldırabileceği seviyeye indirmektir. Arızalandığında basıncı gereğinden fazla düşürebilir.",
      },
      {
        p: "Bu vana çoğu kullanıcı tarafından bilinmez; bu nedenle basınç sorununda hiç akla gelmez. Daire girişinde ayar vidalı bir eleman varsa, kontrol listesine mutlaka eklenmelidir.",
      },
      {
        p: "Ayarı değiştirmeden önce mevcut değeri not etmek doğru olur. Yükseltirken tesisatın sınırları gözetilmeli; eski hatlarda aşırı basınç kaçak başlatabilir.",
      },

      { h2: "Sadece sıcak su düşükse" },
      {
        p: "Soğuk su normal, sıcak su zayıf akıyorsa sorun ısıtma tarafındadır. Kombilerde eşanjör kireçlenmesi, boylerlerde tortu birikimi ve sıcak su çıkış vanasının kısıklığı en sık nedenlerdir.",
      },
      {
        ul: [
          "Kombi giriş filtresi tıkanmış olabilir.",
          "Eşanjör kireçlenmişse hem debi hem sıcaklık düşer.",
          "Boyler dibinde biriken tortu çıkışı daraltır.",
          "Sıcak su köşe vanası yarı kapalı olabilir.",
          "Termostatik bataryalarda kartuş tıkanması görülebilir.",
        ],
      },
      {
        p: "Kireç kaynaklı sorunlarda bakım aralığını kısaltmak kalıcı fayda sağlar. Suyun sert olduğu bölgelerde bu, ekipman ömrünü birebir etkileyen bir alışkanlık.",
      },

      { h2: "Ölçmeden karar vermeyin" },
      {
        p: "Basınç şikâyetlerinde iki ölçüm neredeyse her zaman yeterli bilgi verir: hattın statik basıncı (tüm musluklar kapalıyken) ve dinamik basıncı (bir musluk açıkken).",
      },
      {
        table: {
          head: ["Ölçüm sonucu", "Yorum"],
          rows: [
            ["Statik yüksek, dinamik çok düşük", "Kesit daralması veya tıkanıklık"],
            ["İkisi de düşük", "Şebeke veya besleme yetersiz"],
            ["Sadece üst katta düşük", "Yükseklik kaynaklı, basınçlandırma gerekli"],
            ["Belirli saatlerde düşük", "Şebeke yoğunluğu veya depo seviyesi"],
            ["Ölçüm normal ama akış az", "Armatür veya perlatör sorunu"],
          ],
        },
      },
      {
        p: "Debi ölçümü de basit: bilinen hacimde bir kabı doldurup süreyi tutmak yeterli. Bu iki veri birlikte alındığında sorunun basınç mı debi mi olduğu netleşiyor.",
      },

      { h2: "Gizli kaçak basıncı düşürür mü?" },
      {
        p: "Tesisatta gözle görülmeyen bir kaçak, basıncı doğrudan düşürmez ama depolu ve hidroforlu sistemlerde belirtiler yaratır: pompa musluklar kapalıyken devreye girer, depo beklenenden hızlı boşalır.",
      },
      {
        p: "Basit bir test var: tüm muslukları kapatın ve su sayacını okuyun. Yarım saat sonra tekrar okuduğunuzda değer değişmişse hatta bir yerde su gidiyor demektir.",
      },
      {
        p: "Kaçak, basınç şikâyetinin nedeni olmasa bile ayrı bir sorundur ve erken bulunması önemlidir. Gömme tesisatta ilerleyen bir sızıntı, zamanla duvar ve zeminde hasara dönüşüyor.",
      },

      { h2: "Hidrofor gerçekten gerekli mi?" },
      {
        p: "Hidrofor, şebeke basıncının binanın yüksekliği için yetersiz kaldığı durumlarda gerekir. Evin içindeki bir tıkanıklıktan kaynaklanan basınç düşüklüğünü ise çözmez; sadece sorunu daha yüksek basınçla itmeye çalışır. Karar öncesi kontrol listesi şu: perlatörler temiz mi, ana filtre açık mı, köşe vanaları tam açık mı, boru hattında kireçlenme var mı, basınç düşürücü doğru ayarda mı? Hepsi temizse ve basınç hâlâ yetersizse hidrofor gündeme gelir.",
      },
      {
        p: "Şebekeden doğrudan emiş yapmanın uygun olmadığı yerlerde depo–hidrofor düzeni kurulur. Bu, hem sistemin düzenli çalışması hem komşu abonelerin etkilenmemesi açısından doğru yaklaşım.",
      },

      { h2: "Basınç yüksekse de sorun var" },
      {
        p: "Basınç düşüklüğü kadar yüksekliği de sorunludur. Gereğinden yüksek basınç; armatürleri zorlar, su darbesini şiddetlendirir, contaları yorar ve su tüketimini artırır.",
      },
      {
        p: "Belirtileri tanıdıktır: musluk açıldığında suyun sıçraması, vana kapanışında duyulan vurma sesi, sık sık damlamaya başlayan bataryalar ve beklenenden yüksek su faturası.",
      },
      {
        p: "Çözüm, daire girişine basınç düşürücü vana takmak ve makul bir değere ayarlamak. Bu, hem konforu iyileştiriyor hem tesisatın ömrünü uzatıyor.",
      },

      { h2: "Apartmanda kat farkı" },
      {
        p: "Her 10 metre yükseklik yaklaşık 1 bar basınç tüketir. aynı binada zemin katta yeterli olan basınç, üst katta yetersiz kalabilir. Bu bir arıza değil, fiziğin sonucudur.",
      },
      {
        p: "Çözüm, sistemi en üst kata göre kurmak ve alt katlarda basınç düşürücü vana kullanmaktır. Böylece üst kat yeterli basınç alırken alt katlardaki armatürler gereğinden yüksek basınçla zorlanmaz.",
      },
      {
        p: "Çok katlı yapılarda alternatif çözüm zonlamadır: bina iki bölgeye ayrılır ve her bölge kendi basıncında beslenir. Yatırım gerektirir ama konforu dengeler.",
      },

      { h2: "Basınç mı, debi mi?" },
      {
        p: "İki kavram sık karıştırılır. Basınç, suyun hattı iten kuvvetidir; debi ise birim zamanda akan su miktarıdır. Basıncı yüksek ama kesiti dar bir hatta debi düşük olabilir. Kullanıcı şikâyeti neredeyse her zaman debi üzerinedir: \"musluktan az su akıyor.\" Ancak çözüm için hangisinin düşük olduğunu bilmek gerekir; ölçüm yapılmadan bu ayrım yapılamaz.",
      },
      {
        p: "Manometre basıncı, kapla yapılan ölçüm ise debiyi gösterir. Basınç normal ama debi düşükse sorun kesit daralmasındadır; ikisi de düşükse besleme tarafına bakılır.",
      },
      {
        p: "Ölçümleri aynı gün içinde farklı saatlerde tekrarlamak da faydalı. Sabah ve akşam saatlerinde alınan değerlerin epey farklı olması, sorunun evin içinde değil şebeke tarafında olduğunu gösterir ve gereksiz müdahaleden korur.",
      },

      { h2: "Yeni taşındığınız bir evde" },
      {
        p: "Yeni bir eve taşındığınızda basınç düşüklüğü fark ederseniz, önce evin geçmişini bilmediğinizi kabul edip standart kontrolleri baştan yapmak en hızlı yol.",
      },
      {
        ol: [
          "Tüm perlatörleri sökün ve temizleyin; uzun süre boş kalan evlerde tortu birikir.",
          "Daire giriş vanasının tam açık olduğunu doğrulayın.",
          "Ana filtre varsa kartuşunu değiştirin; ne zaman değiştiğini bilmiyorsunuz.",
          "Köşe vanalarını tek tek kontrol edin.",
          "Basınç düşürücü vana varsa ayarını not edin.",
          "Su sayacı ve giriş hattı çapını gözden geçirin.",
        ],
      },
      {
        p: "Uzun süre boş kalan evlerde ilk günlerde bulanık su gelmesi de normaldir. Hattın birkaç dakika akıtılması, durgun kalan suyun ve tortunun dışarı atılmasını sağlar.",
      },

      { h2: "Armatür seçiminin etkisi" },
      {
        p: "Bazı armatürler tasarım gereği daha düşük debiyle çalışır. Su tasarrufu sağlayan perlatörler ve kartuşlar akışı sınırlar; basınç normal olsa bile musluktan az su akıyormuş hissi verir.",
      },
      {
        p: "Termostatik bataryalar ise belirli bir minimum basınç ister. Basıncın sınırda olduğu tesisatlarda bu armatürler beklenen konforu vermez ve sıcaklık dengesi bozulur.",
      },
      {
        p: "Bu yüzden armatür seçimi, tesisatın gerçek basıncı bilinerek yapılmalı. Yüksek konforlu bir duş sistemi, altyapısı uygun olmayan bir tesisatta hayal kırıklığı yaratıyor.",
      },

      { h2: "Kontrol sırası" },
      {
        ol: [
          "Sorunun kapsamını belirleyin: tek musluk mu, daire mi, bina mı?",
          "Perlatörleri sökün ve temizleyin.",
          "Köşe vanalarının tam açık olduğunu doğrulayın.",
          "Esnek bağlantıları kontrol edin.",
          "Daire veya bina girişindeki ana filtreyi temizleyin.",
          "Basınç düşürücü vana varsa ayarını kontrol edin.",
          "Sadece sıcak su etkileniyorsa kombi ve boyler tarafına bakın.",
          "Statik ve dinamik basınç ölçümü yapın.",
          "Sonuç alınamadıysa boru hattı ve besleme tarafını değerlendirin.",
        ],
      },
      {
        p: "Bu dokuz adım, ucuzdan pahalıya doğru sıralanmıştır. İlk beş adım ekseriyetle alet gerektirmeden yapılabiliyor ve şikâyetlerin büyük bölümünü çözüyor.",
      },
    ],
    faqs: [
      {
        q: "Sadece bir muslukta basınç düşükse ne yapmalıyım?",
        a: "Önce perlatörü sökün ve temizleyin; kireç ve tortu birikimi en yaygın nedendir. Ardından o musluğa giden köşe vanasının tam açık olduğunu doğrulayın ve esnek bağlantının kıvrılmadığını kontrol edin. Tek noktadaki sorunların çoğu bu üç kontrolde çözülür.",
      },
      {
        q: "Tüm evde basınç birden düştü, sebebi ne olabilir?",
        a: "En sık neden daire girişindeki ana filtrenin tıkanmasıdır. Şeffaf gövdeli filtrelerde durum gözle görülür. İkinci ihtimal şebeke tarafındaki bir sorundur; komşulara sormak hızlı bir doğrulama sağlar. Depolu sistemlerde depo seviyesi de kontrol edilmelidir.",
      },
      {
        q: "Sıcak su az akıyor, soğuk su normal. Neden?",
        a: "Sorun ısıtma tarafındadır. Kombi giriş filtresinin tıkanması, eşanjörün kireçlenmesi veya boyler dibindeki tortu birikimi tipik nedenlerdir. Sıcak su köşe vanasının yarı kapalı olması da sık karşılaşılır. Suyun sert olduğu bölgelerde bakım aralığını kısaltmak kalıcı fayda sağlar.",
      },
      {
        q: "Hidrofor aldım ama basınç düzelmedi, neden?",
        a: "Basınç düşüklüğü tesisat içindeki bir daralma veya tıkanıklıktan kaynaklanıyorsa hidrofor sorunu çözmez. Kireçlenmiş boru, tıkalı filtre veya kısık vana yerinde durduğu sürece daha yüksek basınç da o darboğazdan geçemez. Önce kontrol listesi tamamlanmalıdır.",
      },
      {
        q: "Üst katta basınç düşükse ne yapılır?",
        a: "Her 10 metre yükseklik yaklaşık 1 bar basınç tüketir; bu bir arıza değil fiziksel sonuçtur. Sistem en üst kata göre kurulur ve alt katlarda basınç düşürücü vana kullanılır. Şebeke basıncı yetersizse depo ve hidroforlu bir düzen gündeme gelir.",
      },
      {
        q: "Basınç düşürücü vana nedir, nasıl anlarım?",
        a: "Daire veya bina girişinde bulunan, üzerinde ayar vidası ve çoğu zaman manometre yuvası olan bir elemandır. Şebekeden gelen yüksek basıncı tesisatın kaldırabileceği seviyeye indirir. Arızalandığında basıncı gereğinden fazla düşürebilir; kontrol listesine eklenmelidir.",
      },
      {
        q: "Belirli saatlerde basınç düşüyor, tesisat sorunu mu?",
        a: "Çoğunlukla değil. Sabah ve akşam saatlerinde şebeke yoğunluğu artar ve bölgesel basınç düşer. Depolu sistemlerde ise deponun o saatlerde boşalması aynı şikâyeti yaratır. Ölçümü farklı saatlerde tekrarlamak ayrımı hızla yapar.",
      },
      {
        q: "Basıncı ölçmek için ne gerekir?",
        a: "Musluğa takılabilen basit bir manometre yeterlidir. İki değer ölçülür: tüm musluklar kapalıyken statik basınç, bir musluk açıkken dinamik basınç. Aradaki büyük fark tesisatta daralma olduğunu gösterir. İkisinin de düşük olması besleme tarafına işaret eder.",
      },
    ],
    related: ["hidrofor-basinc-salteri-ayari", "hidrofor-surekli-calisiyor", "pprc-mi-pex-mi"],
  },

  {
    slug: "pprc-mi-pex-mi",
    title: "PPRC mi PEX mi? Ev tesisatında boru seçimi",
    category: "Sıhhi Tesisat",
    published: "2026-07-26",
    reading: 9,
    metaTitle: "PPRC mi PEX mi? Tesisat Borusu Seçimi",
    metaDesc:
      "PPRC ve PEX borular arasındaki farklar: montaj, ek sayısı, tamir, donma dayanımı ve maliyet. Kolektörlü sistem mantığı ve hangi durumda hangisi?",
    keywords: [
      "pprc boru",
      "pex boru",
      "kolektörlü tesisat",
      "tesisat borusu seçimi",
      "temiz su tesisatı",
    ],
    excerpt:
      "İki sistem de doğru uygulandığında uzun ömürlü. Fark, duvarın içinde ek olup olmamasında ve ileride bir sorun çıktığında ne yapacağınızda.",
    services: ["sihhi-tesisat", "bina-tesisat-yenileme", "banyo-tadilati"],
    intro:
      "Tesisat yenilerken en sık sorulan sorulardan biri boru tercihi. PPRC yıllardır standart; PEX ise kolektörlü sistemlerle birlikte yaygınlaştı. İkisi de sağlam çözümler, ama davranışları farklı: biri kaynaklı ve sert, diğeri esnek ve eksiz.",
    body: [
      {
        p: "PPRC, füzyon kaynağıyla birleştirilen sert bir borudur; ekonomik ve yaygındır. PEX ise esnek bir borudur ve kolektörlü sistemde her musluğa tek parça, duvar içinde eksiz olarak çekilir. Yeni yapılarda ve komple yenilemelerde kolektörlü PEX düzeni açık avantaj sağlar. Kısmi tadilatlarda ve mevcut PPRC hattına ekleme yapılacak işlerde ise PPRC ile devam etmek pratik olur.",
      },

      { h2: "İki sistem nasıl çalışır?" },
      {
        p: "PPRC borular, özel bir makineyle ısıtılıp birbirine kaynatılarak birleştirilir. Doğru yapıldığında ek yeri borunun kendisi kadar sağlamdır; yanlış yapıldığında ise iç kesitte daralma veya sızdırma oluşur.",
      },
      {
        p: "PEX ise esnek olduğu için dirsek kullanmadan kıvrılabilir. Kolektörlü düzende her musluk için ayrı bir hat çekilir; bu hatlar duvar içinde hiç eklenmeden, kolektörden armatüre kadar tek parça gider.",
      },
      {
        p: "Bu fark, ileride yaşanabilecek bir sızıntının nerede olacağını doğrudan belirliyor. Ek yoksa duvar içinde sızdıracak nokta da yok demektir.",
      },

      { h2: "Yan yana karşılaştırma" },
      {
        table: {
          head: ["Ölçüt", "PPRC", "PEX (kolektörlü)"],
          rows: [
            ["Birleştirme", "Füzyon kaynağı", "Mekanik veya pres bağlantı"],
            ["Duvar içi ek", "Var", "Yok"],
            ["Esneklik", "Sert, dirsek gerekir", "Esnek, kıvrılarak döner"],
            ["Uygulama hızı", "Orta", "Hızlı"],
            ["Ustalık hassasiyeti", "Kaynak süresi kritik", "Bağlantı sıkma tekniği kritik"],
            ["Tamir", "Kaynak makinesiyle", "Rakor değişimi"],
            ["Donma davranışı", "Çatlamaya daha yatkın", "Bir miktar genleşebilir"],
            ["İlk maliyet", "Genelde düşük", "Kolektör nedeniyle daha yüksek"],
          ],
        },
      },
      {
        p: "Tablo bir üstünlük sıralaması değil; hangi ölçütün sizin için önemli olduğunu gösteriyor. Bütçe belirleyiciyse PPRC, duvar içinde eksiz bir hat isteniyorsa PEX öne çıkıyor.",
      },

      { h2: "Kolektörlü sistemin mantığı" },
      {
        p: "Kolektör, tesisatın dağıtım merkezidir. Ana hat kolektöre gelir; oradan her musluk, klozet ve makine için ayrı bir hat çıkar. Her hattın kendi vanası bulunur.",
      },
      {
        ul: [
          "Bir noktada sorun çıktığında sadece o hat kapatılır, evin suyu kesilmez.",
          "Duvar içinde ek olmadığı için gömme kaçak riski çok düşer.",
          "Boru, koruyucu spiral içinde çekildiğinde gerektiğinde değiştirilebilir.",
          "Her noktaya ayrı hat gittiği için basınç dengesi daha iyidir.",
          "Kolektör dolabı erişilebilir bir yere konumlandırılmalıdır.",
        ],
      },
      {
        p: "Üçüncü madde en değerli olanı: spiral içinden çekilmiş bir PEX borusu, duvar kırılmadan yenisiyle değiştirilebilir. Bu, uzun vadede en büyük avantajlardan biri.",
      },

      { h2: "PPRC'de kaliteyi belirleyen detaylar" },
      {
        p: "PPRC uygulamasında sonucu belirleyen şey markadan çok işçiliktir. Kaynak sıcaklığı, ısıtma süresi ve birleştirme sonrası bekleme süresi doğru uygulanmalıdır.",
      },
      {
        p: "Fazla ısıtılan bir ek, boru içine doğru bir boğum oluşturur ve kesiti daraltır. Gözle görülmediği için fark edilmez; sonuç, o hatta kalıcı bir basınç kaybı olur.",
      },
      {
        p: "Sıcak su hatlarında cam elyaf takviyeli borular tercih edilir. Bu borular sıcaklıkla boyuna genleşmeyi azaltır; takviyesiz borularda uzun hatlarda kıvrılma ve askıdan çıkma görülebiliyor.",
      },

      { h2: "Donma davranışı" },
      {
        p: "Malatya kışında donma riski gerçek bir konu. PEX borular esnek yapıları sayesinde bir miktar genleşerek dona bir ölçüde direnç gösterir; PPRC ve metal borular ise çatlamaya daha yatkındır. Ancak hiçbir boru donmaya karşı garanti değildir. Asıl çözüm, riskli bölgelerdeki hatların yalıtılması ve kullanılmayan mevsimlik hatların kış öncesi boşaltılmasıdır.",
      },
      {
        p: "Dış duvar içinden geçen hatlar, çatı arası ve soğuk bodrum bölümleri en riskli noktalar. Tesisat projelendirilirken bu güzergâhlardan kaçınmak, sonradan yapılacak yalıtımdan daha etkili.",
      },

      { h2: "Gürültü ve su darbesi" },
      {
        p: "Sert borular titreşimi daha çok iletir; hızlı kapanan bir vanada oluşan darbe, PPRC hatta daha çok duyulur. PEX'in esnekliği bu darbeyi bir miktar yumuşatır.",
      },
      {
        p: "Her iki sistemde de asıl çözüm aynı: basıncı makul seviyede tutmak, hızlı kapanan armatürlerde darbe emici kullanmak ve boru askılarını lastik contalı seçmek.",
      },
      {
        quote:
          "Boru cinsi ses farkı yaratır ama sesin asıl kaynağı çoğunlukla yüksek basınç ve sert montajdır.",
      },
      {
        p: "Gömme tesisatta boruların beton içinde serbest hareket edebilmesi de önemli. Spiral veya koruyucu kılıf kullanılması, hem genleşmeyi karşılar hem sesi azaltır.",
      },

      { h2: "Basınç testi atlanmaz" },
      {
        p: "Hangi sistem kullanılırsa kullanılsın, sıva ve şap kapatılmadan önce basınç testi yapılmalıdır. Test, hattın belirli bir basınçta belirli bir süre tutulması ve düşüş olup olmadığının izlenmesidir.",
      },
      {
        ol: [
          "Tüm uçlar körlenir ve hat suyla doldurulur.",
          "Hattaki hava tamamen tahliye edilir.",
          "Belirlenen test basıncına çıkılır.",
          "Basınç belirli süre boyunca izlenir ve kayda geçirilir.",
          "Düşüş varsa kaçak aranır ve giderilir, test tekrarlanır.",
          "Test sonucu fotoğrafla belgelenir.",
        ],
      },
      {
        p: "Bu test on beş dakikalık bir iş; atlandığında ise sıva ve seramik kapatıldıktan sonra ortaya çıkan bir kaçak, yapılan işin bir bölümünü baştan yaptırıyor.",
      },

      { h2: "Yerden ısıtmada durum farklı" },
      {
        p: "Yerden ısıtma hatlarında kullanılan borularda oksijen difüzyon bariyeri aranır. Bu bariyer, boru cidarından sisteme oksijen geçişini engelleyerek metal parçalarda korozyonu önler.",
      },
      {
        p: "Temiz su tesisatı için alınan bir boru, yerden ısıtma için otomatik olarak uygun değildir. Etiket üzerinde bariyerli olduğunun belirtilmesi gerekir.",
      },
      {
        p: "Yerden ısıtmada ikinci kritik nokta, döşeme içinde ek yapılmamasıdır. Her devre kolektörden çıkar, tek parça olarak döşenir ve kolektöre geri döner.",
      },

      { h2: "Ana kapama vanaları" },
      {
        p: "Boru sistemi ne olursa olsun, tesisatta erişilebilir kapama vanaları bulunmalı. Daire girişinde bir ana vana, ıslak hacim girişlerinde ise ayrı vanalar olması, küçük bir arızada tüm evin suyunu kesmeyi gereksiz kılar. Kolektörlü sistemlerde bu zaten hazır: her hattın kendi vanası vardır.",
      },
      {
        p: "Klasik dağıtımda ise vanaların baştan planlanması gerekir; sonradan eklemek duvar açmayı gerektiriyor.",
      },
      {
        p: "Vanaların yılda bir kez açılıp kapatılması da faydalı. Yıllarca hiç hareket etmeyen bir vana, ihtiyaç duyulduğu gün sıkışmış olarak bulunuyor.",
      },

      { h2: "Hangi durumda hangisi?" },
      {
        table: {
          head: ["Durum", "Öneri"],
          rows: [
            ["Yeni yapı, sıfırdan tesisat", "Kolektörlü PEX"],
            ["Komple daire yenilemesi", "Kolektörlü PEX veya PPRC"],
            ["Sadece banyo yenilemesi", "Mevcut sistemle uyumlu devam"],
            ["Mevcut PPRC hatta ekleme", "PPRC"],
            ["Donma riski yüksek güzergâh", "PEX + yalıtım"],
            ["Yerden ısıtma", "Bariyerli boru, kolektörlü"],
          ],
        },
      },
      {
        p: "Karma uygulama da mümkün: ana hatlar PPRC, daire içi dağıtım kolektörlü PEX olabilir. Önemli olan geçiş noktalarının erişilebilir yerlerde ve uygun bağlantı elemanlarıyla yapılması.",
      },
      {
        p: "Maliyet tarafında ilk fatura genelde PPRC lehinedir; kolektörlü düzende hem kolektörün kendisi hem her hattın ayrı çekilmesinden doğan fazla metraj hesaba biner. Uzun vadede tablo tersine dönebiliyor, çünkü gömme kaçak riskinin düşük olması ve borunun kılıf içinden çekilip değiştirilebilmesi ileride açılmayacak duvar demek.",
      },

      { h2: "Gömme tesisatta güzergâh planı" },
      {
        p: "Boru cinsinden bağımsız olarak, duvar içindeki güzergâhın planlı olması gerekir. Rastgele açılan kanallar hem yapıyı zayıflatır hem ileride yapılacak delme işlerinde boru delme riskini artırır.",
      },
      {
        ul: [
          "Hatlar mümkün olduğunca dikey ve yatay eksenlerde ilerlemeli.",
          "Priz ve anahtar aksları ile su hatları çakışmamalı.",
          "Kapatmadan önce tüm güzergâhın fotoğrafı çekilmeli.",
          "Fotoğraflar ölçülü olmalı; referans olarak kapı kenarı gibi sabit noktalar girmeli.",
          "Taşıyıcı elemanlarda kanal açılmamalı.",
        ],
      },
      {
        p: "Üçüncü ve dördüncü madde, yıllar sonra duvara bir raf takarken hayat kurtarıyor. Kapatmadan önce çekilen birkaç fotoğraf, tesisatın görünmez hâlinin tek kaydı oluyor.",
      },

      { h2: "Sıcak su hattında yalıtım" },
      {
        p: "Sıcak su hatlarının yalıtılması, hem enerji kaybını azaltır hem musluktan sıcak suyun daha çabuk gelmesini sağlar. Yalıtımsız bir hatta ilk saniyelerde akan su boşa gider.",
      },
      {
        p: "Yalıtım ayrıca boruların genleşmesine yer bırakır. Doğrudan betona gömülen sıcak su hatları, ısındıkça uzayacak yer bulamaz ve zamanla ses yapmaya başlar.",
      },
      {
        p: "Sirkülasyon hattı bulunan büyük evlerde yalıtımın önemi daha da artıyor; sürekli dolaşan sıcak su, yalıtımsız hatta sürekli ısı kaybediyor.",
      },

      { h2: "Tadilatta karar sırası" },
      {
        p: "Boru cinsi kararı, tesisat işinin ilk kararı değil. Önce hangi noktalara su gideceği, armatür yerleri ve kolektör konumu belirlenir; boru tercihi bu plana göre yapılır.",
      },
      {
        table: {
          head: ["Sıra", "Karar"],
          rows: [
            ["1", "Mekân planı: hangi noktada ne olacak"],
            ["2", "Armatür ve cihaz seçimi, bağlantı gereksinimleri"],
            ["3", "Kolektör veya ana dağıtım konumu"],
            ["4", "Güzergâh planı ve kanal açımı"],
            ["5", "Boru sistemi tercihi"],
            ["6", "Montaj ve basınç testi"],
            ["7", "Fotoğraf kaydı ve kapatma"],
          ],
        },
      },
      {
        p: "Bu sıra bozulduğunda, örneğin borular çekildikten sonra duş bataryasının yeri değiştiğinde, yapılan işin bir bölümü sökülüyor. Karar sırasına uymak, tadilatta en çok zaman kazandıran alışkanlıklardan biri.",
      },

      { h2: "Malzeme kalitesi nasıl anlaşılır?" },
      {
        p: "Boru üzerinde basılı bilgiler önemli: üretici, üretim tarihi, çap, et kalınlığı ve basınç sınıfı. Bu bilgilerin okunaklı ve eksiksiz olması, ürünün izlenebilir olduğunu gösterir.",
      },
      {
        ul: [
          "Boru kesildiğinde et kalınlığı her noktada eşit olmalı.",
          "İç yüzey pürüzsüz ve temiz olmalı.",
          "Elle bükülmeye çalışıldığında çatlama veya beyazlaşma olmamalı.",
          "Uzun süre güneşte bekletilmiş, rengi solmuş borular tercih edilmemeli.",
          "Bağlantı parçaları aynı sistemin parçası olmalı; markalar karıştırılmamalı.",
        ],
      },
      {
        p: "Farklı sistemlerin bağlantı parçalarını karıştırmak listenin en sinsi maddesi; ilk günlerde sorun çıkarmasa da uzun vadede sızdırma nedeni oluyor.",
      },

      { h2: "Kısmi yenilemede ne yapmalı?" },
      {
        p: "Sadece banyo veya mutfak yenileniyorsa, tüm tesisatı değiştirmek gerekmeyebilir. Ancak açılan bölümdeki hatların yenilenmesi ve bağlantı noktalarının erişilebilir bırakılması doğru olur.",
      },
      {
        p: "Kısmi yenilemede dikkat edilecek nokta, yeni ve eski hattın birleştiği yer. Bu nokta duvar içinde bırakılırsa, ileride oradan gelecek bir sızıntı yeni yapılan işi de bozar.",
      },
      {
        p: "Eski hattın durumu belirsizse basınç testi yaptırmak fikir verir. Test sırasında ortaya çıkan bir zayıflık, tadilat devam ederken çözülebilecek bir sorun; iş bittikten sonra ise çok daha maliyetli olur.",
      },

      { h2: "Ek parçalar ve armatür bağlantıları" },
      {
        p: "Boru kadar ek parçalar da belirleyicidir. Dirsek, te, redüksiyon ve armatür bağlantı elemanları sistemin en çok zorlanan noktalarıdır ve sızıntıların büyük bölümü buralarda başlar. Duvar içine gömülen armatür bağlantı kutuları sağlam biçimde sabitlenmeli; batarya takılıp sökülürken hareket eden bir bağlantı zamanla sızdırır. Sabitlemenin sıva öncesinde yapılması gerekir.",
      },
      {
        p: "Farklı sistemlerin bağlantı parçalarını karıştırmamak da temel kural. Aynı görünen iki parçanın diş yapısı veya conta oturma yüzeyi farklı olabilir; bu fark ilk günlerde değil, aylar sonra ortaya çıkıyor.",
      },

      { h2: "Ömür ve bakım" },
      {
        p: "Doğru uygulanmış her iki sistem de uzun yıllar sorunsuz çalışır. Ömrü belirleyen etkenler; sürekli yüksek basınç, sürekli yüksek sıcaklık, güneş ışığına maruz kalma ve mekanik zorlanmadır.",
      },
      {
        p: "Bakım tarafında yapılacaklar basit: ana filtrenin düzenli temizlenmesi, basıncın makul seviyede tutulması ve kolektör vanalarının yılda bir açılıp kapatılarak sıkışmasının önlenmesi.",
      },
      {
        p: "Tesisat yenilenirken kolektör dolabının erişilebilir kalması da ihmal edilmemeli. Dolabın önüne mobilya konması veya seramikle kapatılması, yıllar sonra basit bir müdahaleyi zor bir işe çeviriyor.",
      },
    ],
    faqs: [
      {
        q: "PPRC mi PEX mi daha uzun ömürlü?",
        a: "Her ikisi de doğru uygulandığında uzun ömürlüdür; ömrü belirleyen asıl etken malzeme cinsi değil işçilik ve çalışma koşullarıdır. Sürekli yüksek basınç ve sıcaklık, güneş maruziyeti ve mekanik zorlanma her iki sistemi de yıpratır.",
      },
      {
        q: "Kolektörlü sistemin avantajı ne?",
        a: "Her musluğa ayrı ve duvar içinde eksiz hat gider. Bir noktada sorun çıktığında sadece o hattın vanası kapatılır, evin suyu kesilmez. Boru koruyucu spiral içinden çekildiyse duvar kırılmadan değiştirilebilir. Basınç dengesi de daha iyidir.",
      },
      {
        q: "Mevcut PPRC tesisatıma PEX ekleyebilir miyim?",
        a: "Uygun geçiş bağlantı parçalarıyla mümkündür. Önemli olan geçiş noktasının erişilebilir bir yerde olması ve duvar içinde bırakılmamasıdır. Kısmi işlerde mevcut sistemle devam etmek genelde daha pratik ve ekonomiktir.",
      },
      {
        q: "Donmaya karşı hangisi daha dayanıklı?",
        a: "PEX esnek yapısı sayesinde bir miktar genleşerek dona kısmi direnç gösterir; PPRC çatlamaya daha yatkındır. Ancak hiçbir boru donmaya karşı garanti değildir. Asıl çözüm riskli güzergâhların yalıtılması ve mevsimlik hatların kış öncesi boşaltılmasıdır.",
      },
      {
        q: "Basınç testi neden önemli?",
        a: "Sıva ve şap kapatıldıktan sonra ortaya çıkan bir kaçak, yapılan işin bir bölümünü baştan yaptırır. Test on beş dakikalık bir işlemdir: hat basınçlandırılır ve belirli süre izlenir. Sonucun fotoğrafla belgelenmesi, ileride çıkabilecek tartışmaları da önler.",
      },
      {
        q: "Yerden ısıtmada aynı boru kullanılabilir mi?",
        a: "Kullanılmamalıdır. Yerden ısıtma borularında oksijen difüzyon bariyeri bulunması gerekir; bu bariyer sisteme oksijen geçişini engelleyerek metal parçalarda korozyonu önler. Etiket üzerinde bariyerli olduğu belirtilmeyen boru bu amaçla kullanılmaz.",
      },
      {
        q: "PPRC kaynağı yanlış yapılırsa ne olur?",
        a: "Fazla ısıtılan bir ek, boru içine doğru boğum oluşturarak kesiti daraltır. Gözle görülmediği için fark edilmez ve o hatta kalıcı basınç kaybı yaratır. Az ısıtılan ek ise zamanla sızdırır. Kaynak sıcaklığı ve süresi bunun için kritiktir.",
      },
    ],
    related: ["evde-su-basinci-dusuk", "ev-su-tesisati-yenileme", "banyo-tadilatinda-su-yalitimi"],
  },
];

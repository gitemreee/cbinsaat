// Blog: su, tesisat ve ısıtma konulu yazılar.

export const suPosts = [
  {
    slug: "su-kacagi-erken-belirtileri",
    title: "Gizli su kaçağı nasıl anlaşılır? Erken belirtiler ve ilk kontroller",
    category: "Sıhhi Tesisat",
    published: "2025-04-28",
    updated: "2026-03-19",
    reading: 7,
    metaTitle: "Gizli Su Kaçağı Nasıl Anlaşılır? Erken Belirtiler",
    metaDesc:
      "Artan su faturası, kabaran boya, rutubet kokusu… Gizli su kaçağının erken belirtileri ve evde kendiniz yapabileceğiniz sayaç kontrolü.",
    keywords: ["su kaçağı belirtileri", "gizli su kaçağı", "duvarda nem", "su faturası arttı", "sayaç dönüyor"],
    excerpt: "Su kaçağı fark edilene kadar aylarca ilerler ve zarar tesisattan çıkıp tadilata dönüşür. Erken belirtileri ve on dakikalık sayaç testi.",
    services: ["su-kacagi-tespiti", "sihhi-tesisat", "komple-ev-tadilati"],
    intro:
      "Su kaçağının en pahalı yanı, geç fark edilmesi. İlk aylarda sadece faturaya yansır; sonra sıva, boya, parke ve alt kat devreye girer. O noktada iş artık bir tesisat işi değil, tadilat işidir.",
    body: [
      { h2: "İlk ve en kesin test: sayaç kontrolü" },
      { p: "On dakikanızı alan bu test, temiz su hattında kaçak olup olmadığını net şekilde gösterir:" },
      { ol: [
        "Evdeki tüm muslukları kapatın.",
        "Çamaşır makinesi, bulaşık makinesi ve varsa arıtma cihazını durdurun.",
        "Rezervuarların akmadığından emin olun (sifon damlaması en sık gizli tüketim nedenidir).",
        "Sayacın en küçük göstergesine (kırmızı ibre veya yıldız şeklindeki disk) bakın.",
        "5–10 dakika bekleyip tekrar kontrol edin.",
      ] },
      { p: "İbre kıpırdıyorsa temiz su hattında kaçak var demektir. Hiç hareket etmiyorsa temiz suda kaçak yoktur. Ama bu, sorun olmadığı anlamına gelmez; atık su sızıntısı veya su yalıtımı problemi hâlâ mümkündür." },

      { h2: "Görsel belirtiler ve ne anlattıkları" },
      {
        table: {
          head: ["Belirti", "Muhtemel kaynak", "Aciliyet"],
          rows: [
            ["Duvar dibinde boya kabarması", "Zemin altı veya duvar içi temiz su hattı", "Yüksek"],
            ["Alt komşuda tavanda leke", "Zemin altı hat veya su yalıtımı", "Yüksek"],
            ["Rutubet kokusu, küf", "Yavaş ve uzun süreli sızıntı", "Orta"],
            ["Belirli bir zemin bölgesi sıcak", "Sıcak su veya ısıtma hattı kaçağı", "Yüksek"],
            ["Parke kabarması / şişme", "Zemin altı sızıntı", "Yüksek"],
            ["Fatura arttı, görünür belirti yok", "Erken aşama kaçak veya rezervuar", "Orta"],
          ],
        },
      },

      { h2: "Isıtma tesisatı kaçağı ayrı bir konudur" },
      { p: "Kombi veya tesisat basıncının sürekli düşmesi, ısıtma devresinde kaçak olduğunu gösterir. Sık sık su takviyesi yapmanız gerekiyorsa hatta sızıntı vardır." },
      { p: "Bu tip kaçaklar sayaçta görünmez çünkü ısıtma devresi kapalı bir sistemdir. Basınç düşme hızı, kaçağın büyüklüğü hakkında fikir verir: günde 0,2 bar düşüş küçük, saatlerde 1 bar düşüş büyük bir sızıntıya işaret eder." },

      { h2: "Kaçağın yerini daraltmak" },
      { p: "Kaçak doğrulandıktan sonra hat bölümlere ayrılır. Daire giriş vanası, mutfak ve banyo ara vanaları sırayla kapatılarak sayaç tekrar izlenir. Kaçak hangi vana kapatıldığında duruyorsa sorun o bölümdedir." },
      { p: "Bu işlem ev sahibi tarafından da yapılabilir ve tespit süresini gözle görülür şekilde kısaltır. Hangi vanayı kapattığınızda durduğunu bize söylediğinizde, işin yarısı yapılmış olur." },

      { h2: "Rezervuar: en çok gözden kaçan tüketim" },
      { p: "Klozet rezervuarının hafif akması, kulağa küçük gelen ama ayda tonlarca su tüketen bir sorundur. Kontrolü basit: rezervuara birkaç damla gıda boyası damlatın ve yarım saat sifonu çekmeden bekleyin. Klozet haznesinde renk görünüyorsa rezervuar akıyor demektir." },
      { p: "Bu, çoğu durumda contası değiştirilerek çözülebilen basit bir iştir ve su faturasında hemen fark yaratır." },

      { h2: "Beklemenin maliyeti" },
      { p: "Küçük bir damlama ilk aylarda sadece faturaya yansır. Nem sıva ve alçının içinde ilerledikçe boya kabarır, duvar küflenir, parke şişer ve alt katta hasar başlar." },
      { p: "Fatura artışı fark edildiğinde ya da duvarda ilk nem izi göründüğünde araştırma yapmak, hem kaçağın hem onarımın küçük kalmasını sağlıyor. Bu, geciktirmenin en pahalıya patladığı tesisat kalemidir." },
    ],
    faqs: [
      { q: "Kırmadan kaçak bulunabilir mi?", a: "Kaçağın bölgesi kırmadan büyük oranda daraltılabilir. Ancak onarım için hatta ulaşmak gerektiğinden tespit edilen noktada sınırlı bir kırım kaçınılmazdır. Hedef, kırımı tek noktaya ve en küçük alana indirmektir." },
      { q: "Sigorta bu hasarı karşılar mı?", a: "Konut sigortası poliçenizin kapsamına bağlı. Çoğu poliçe ani ve beklenmedik su hasarını karşılar. Tespit raporu, kaçağın konumu ve fotoğraflarla belgelenmiş bir dosya bu süreçte işinizi kolaylaştırır." },
    ],
    related: ["su-faturasi-neden-yuksek", "rezervuar-su-akitiyor", "ev-su-tesisati-yenileme", "kombi-basinci-neden-dusuyor", "banyo-tadilati-siralama"],
  },

  {
    slug: "lavabo-tikanikligi-neden-olur",
    title: "Lavabo tıkanıklığı neden tekrarlar?",
    category: "Sıhhi Tesisat",
    published: "2025-05-20",
    updated: "2025-11-28",
    reading: 5,
    metaTitle: "Lavabo Tıkanıklığı Neden Tekrarlar? Kalıcı Çözüm",
    metaDesc:
      "Yağ, saç ve tortu birikimi, yanlış boru eğimi ve havalandırma sorunları. Tıkanıklığın tekrarlamasının gerçek nedenleri ve kalıcı çözümü.",
    keywords: ["lavabo tıkanıklığı", "gider açma", "mutfak gideri tıkandı", "boru eğimi", "sifon kokusu"],
    excerpt: "Aynı gider üç ayda bir tıkanıyorsa sorun kullanımda değil hattın kendisindedir. Tekrarlamanın gerçek nedenleri ve kalıcı çözüm.",
    services: ["tikali-gider-acma", "sihhi-tesisat", "su-kacagi-tespiti"],
    intro:
      "Tıkanıklığı açmak işin kolay kısmı. Asıl soru neden tıkandığı. Aynı noktada tekrarlayan bir tıkanıklık, hemen her zaman yapısal bir nedene işaret eder.",
    body: [
      { h2: "Mutfakta baş sorumlu: yağ" },
      { p: "Sıvı hâlde dökülen yağ, boru içinde soğuyup katılaşır. Üzerine yemek artığı, kahve telvesi ve deterjan kalıntısı yapışır. Zamanla boru çapı daralır ve bir gün tamamen kapanır." },
      { p: "Sıcak su dökmek yağı geçici olarak eritir ama birkaç metre ilerideki soğuk bölümde tekrar katılaşmasına neden olur; yani sorunu ötelemiş olursunuz. Kalıcı çözüm yağı gidere hiç vermemektir." },

      { h2: "Banyoda: saç ve sabun" },
      { p: "Saç ve sabun kalıntısı birleşerek süzgeç altında yumak oluşturur. Bu, en kolay önlenebilir tıkanıklık türüdür: birkaç liralık bir saç tutucu, banyo gideri çağrılarının büyük bölümünü önlüyor." },

      { h2: "Tekrarlıyorsa yapısal neden arayın" },
      { p: "Açıldıktan birkaç hafta veya birkaç ay sonra tekrar tıkanan bir gider, kullanım alışkanlığıyla açıklanamaz. Bu durumda dört ihtimal var:" },
      { ul: [
        "Yetersiz eğim: yatay hatta metrede 2–3 cm eğim olmalı; az eğimde su artığı taşıyamaz",
        "Fazla eğim: su hızla akar, katı madde geride kalır, az eğim kadar sorunludur",
        "Dirsek fazlalığı: 90° dirsekler yerine 45° parçalar tercih edilmeli",
        "Boru kırığı, çökme veya ağaç kökü: bahçeli yapılarda sık karşılaşılır",
      ] },
      { p: "Bu durumlarda spiral makineyle açma geçici çözüm kalır. Kamera ile hat incelemesi yapılarak yapısal sorunun yeri belirlenmeli ve noktasal onarım planlanmalıdır." },

      { h2: "Koku geliyorsa havalandırmaya bakın" },
      { p: "Gider hattı tıkalı olmadığı hâlde koku geliyorsa, sifon suyu emiliyor olabilir. Her sıhhi tesisat elemanının altındaki sifon, içinde tuttuğu su ile kokuyu engeller. Kolon havalandırması yetersizse, başka bir noktadan akan su bu suyu emer ve koku yolu açılır." },
      { p: "Belirtisi tipiktir: üst kattaki biri sifonu çektiğinde sizin lavabodan gurultu gelir ve ardından koku başlar. Çözüm, kolon havalandırmasının kontrol edilmesi veya vakum kırıcı vana takılmasıdır." },

      { h2: "Kimyasal açıcılar hakkında" },
      { quote: "Kimyasal açıcı kullandıysanız mutlaka söyleyin. Açılmayan bir hatta biriken kimyasal, müdahale sırasında sıçrama riski oluşturur." },
      { p: "Kimyasallar kısa vadede etkili olabilir ancak boruyu, contaları ve özellikle eski metal hatları yıpratır. Tekrarlayan tıkanıklıklarda düzenli kimyasal kullanımı, hattın ömrünü epey kısaltıyor." },

      { h2: "Önleyici bakım" },
      { ul: [
        "Kızartma yağını kapalı kapta biriktirip atın, asla lavaboya dökmeyin",
        "Eviye süzgecini kullanın ve haftada bir temizleyin",
        "Banyo süzgecine saç tutucu takın",
        "Ayda bir sıcak su + karbonat ile hattı yıkayın",
        "Klozete ıslak mendil ve bez atmayın",
        "Apartman ana giderini yılda bir basınçlı su ile temizletin",
      ] },
      { p: "Listenin en değerli maddesi sonuncusu. Apartmanlarda ana gider hattının yıllık temizliği, hem daire içi tıkanıklıkları hem bodrum su baskınlarını ciddi oranda azaltıyor ve yönetim bütçesinde küçük bir kalem." },
    ],
    faqs: [
      { q: "Pompa (lastik) ile açamadım, ne yapmalıyım?", a: "Pompa yalnızca yüzeysel ve yeni oluşmuş tıkanıklıklarda işe yarar. Sonuç alamadıysanız daha derinde bir birikim var demektir; spiral makine veya basınçlı su ile açma gerekir. Zorlamak sifonu ve bağlantıları gevşetebilir." },
      { q: "Apartman ana giderinde masrafı kim öder?", a: "Ortak alan sayıldığı için genelde bina yönetimi karşılar. Tıkanıklığın belirli bir daireden kaynaklandığı tespit edilirse durum değişebilir. Teknik tespiti yazılı olarak veriyoruz; mali kısım yönetimin kararıdır." },
    ],
    related: ["gider-kokusu-neden-gelir", "ev-su-tesisati-yenileme", "su-kacagi-erken-belirtileri", "banyo-tadilati-siralama"],
  },

  {
    slug: "ev-su-tesisati-yenileme",
    title: "Ev su tesisatı yenileme rehberi: hangi boru, hangi sıra?",
    category: "Sıhhi Tesisat",
    published: "2025-06-11",
    updated: "2026-05-04",
    reading: 9,
    metaTitle: "Ev Su Tesisatı Yenileme Rehberi | Boru Seçimi ve Sıra",
    metaDesc:
      "Galvaniz, PPRC, PEX: hangi boru nerede kullanılır? Su tesisatı yenilemede doğru uygulama sırası, basınç testi ve kolektörlü sistem.",
    keywords: ["su tesisatı yenileme", "PPRC boru", "PEX kolektörlü sistem", "galvaniz boru değişimi", "basınç testi"],
    excerpt: "Galvaniz borudan modern sisteme geçerken hangi malzeme, hangi sıra ve hangi test? Yenilemede karar vermeniz gereken her şey.",
    services: ["sihhi-tesisat", "komple-ev-tadilati", "su-kacagi-tespiti"],
    intro:
      "Su tesisatı hata affetmez. Elektrikte bir arıza kendini gösterir; suda ise yıllarca duvarın içinde ilerler ve fark edildiğinde zarar başka kalemlere de yayılmıştır. Dolayısıyla yenilemede malzeme kadar işçilik ve test disiplini önemli.",
    body: [
      { h2: "Ne zaman yenileme gerekir?" },
      { ul: [
        "Su basıncında açık ve giderek artan düşüş",
        "Musluktan paslı veya bulanık su gelmesi",
        "Sık tekrarlayan ek yeri damlamaları",
        "Duvarda nem, kabarma ve küf oluşumu",
        "Galvaniz boru kullanılan 30+ yaşındaki tesisat",
        "Banyo veya mutfak tadilatı planlanması (fırsat penceresi)",
      ] },
      { p: "Duvar zaten açılacaksa tesisatı da yenilemek, ileride ikinci bir kırım ihtimalini bitirir. Aynı işi iki kez yaptırmanın maliyeti, bir kez fazladan yapmanın maliyetinden yüksektir." },

      { h2: "Malzeme seçimi" },
      {
        table: {
          head: ["Malzeme", "Güçlü yönü", "Zayıf yönü", "Nerede"],
          rows: [
            ["PPRC (yeşil boru)", "Kaynaklı ek, sızdırmaz, ekonomik", "Sıcakta genleşir, dirsek basıncı düşürür", "Genel konut tesisatı"],
            ["PEX / Pes-Al-Pes", "Esnek, ek yeri yok, kolektöre uygun", "Kaliteli press aleti şart", "Kolektörlü sistem, yerden ısıtma"],
            ["Galvaniz / çelik", "Mekanik dayanım yüksek", "İçten korozyon, ağır işçilik", "Yangın hattı, özel uygulamalar"],
            ["Bakır", "Uzun ömürlü, hijyenik", "Maliyetli, işçilik ustalık ister", "Özel projeler"],
          ],
        },
      },

      { h2: "Kolektörlü sistem neden öneriliyor?" },
      { p: "Klasik sistemde ana hattan dallanarak her noktaya gidilir; bu da duvar içinde çok sayıda ek yeri demektir. Kolektörlü sistemde ise merkezi bir dağıtıcıdan her musluğa ayrı ve kesintisiz bir hat çekilir." },
      { p: "Duvar içinde ek yeri kalmadığı için kaçak riski çoğunlukla biter. Ayrıca her hat kolektörden ayrı kapatılabildiği için, bir noktada onarım yapılırken evin geri kalanı susuz kalmaz." },
      { p: "Başlangıç maliyeti bir miktar yüksektir çünkü daha fazla boru kullanılır. Öte yandan uzun vadede kaçak ve onarım maliyeti düşer." },

      { h2: "Uygulama sırası" },
      { ol: [
        "Mevcut tesisatın tespiti ve yeni hat güzergâhının belirlenmesi",
        "Kolektör yerinin seçilmesi (erişilebilir, kapaklı bir hacim)",
        "Kanal açma ve eski hatların sökümü",
        "Yeni boru döşemesi ve bağlantıların yapılması",
        "Basınç testi, hat kapanmadan önce, zorunlu adım",
        "Kanal kapatma ve sıva onarımı",
        "Su yalıtımı (ıslak hacimlerde) ve su testi",
        "Seramik, armatür ve vitrifiye montajı",
        "Son kontrol ve teslim",
      ] },

      { h2: "Basınç testi: atlanmaması gereken 15 dakika" },
      { p: "Tesisat kapanmadan önce hat basınç altında bırakılır ve belirli bir süre boyunca manometre izlenir. Değer sabit kalıyorsa hat sızdırmıyor demektir." },
      { quote: "Basınç testi yapılmadan sıva atılan bir tesisatta ilk kaçak genelde ısıtma sezonunda ortaya çıkar; yani yeni yapılmış seramiğin kırılması demektir." },
      { p: "Bu test on beş dakikalık bir işlemdir ve sonucunu size gösterip fotoğraflıyoruz. Yaptıracağınız her tesisat işinde bu testin yapıldığını görmenizi öneriyoruz." },

      { h2: "Atık su tarafını unutmayın" },
      { p: "Temiz su yenilenirken atık su hattının olduğu gibi bırakılması sık yapılan bir eksiklik. Eski atık hatlarında eğim bozulmuş, dirsekler tıkanmaya müsait hâle gelmiş olabilir." },
      { p: "Aynı kırımda atık hattının da gözden geçirilmesi, ileride tekrarlayan tıkanıklık sorununu baştan çözer. Ek maliyeti sınırlıdır çünkü kırım ve işçiliğin büyük kısmı zaten yapılmış olur." },

      { h2: "Vana konumunu öğrenin" },
      { p: "Daire giriş vanasının nerede olduğunu bilmek, bir su baskınında yaşanacak zararın büyüklüğünü tek başına belirler. Yenileme sonrası vananın kolay erişilebilir bir noktada ve rahat dönebilir durumda olmasını sağlıyoruz." },
      { p: "Vanası sıkışmış ve dönmeyen daireler beklediğimizden çok daha fazla. Bu, küçük ama çok değerli bir iyileştirme." },
    ],
    faqs: [
      { q: "Bir dairenin su tesisatı kaç günde yenilenir?", a: "Sadece tesisat yenileme 3–5 gün sürer. Kırım, sıva onarımı, su yalıtımı ve seramik dahil edildiğinde süre 10–20 iş gününe çıkar. Sürenin önemli kısmı kuruma sürelerinden gelir ve sıkıştırılamaz." },
      { q: "Galvaniz boruyu mutlaka değiştirmeli miyim?", a: "Basınç düşüşü, paslı su veya sık kaçak varsa evet. Sorun yaşanmıyorsa acil değildir; ancak banyo veya mutfak tadilatı planlıyorsanız aynı anda değiştirmek hem daha ucuz hem daha mantıklı olur." },
    ],
    related: ["su-kacagi-erken-belirtileri", "banyo-tadilati-siralama", "lavabo-tikanikligi-neden-olur"],
  },

  {
    slug: "su-deposu-ne-zaman-temizlenmeli",
    title: "Su deposu ne sıklıkla temizlenmeli?",
    category: "Bakım",
    published: "2025-07-01",
    updated: "2026-02-13",
    reading: 5,
    metaTitle: "Su Deposu Ne Sıklıkla Temizlenmeli? Bakım Rehberi",
    metaDesc:
      "Apartman ve işletme su depolarında temizlik periyodu, uygulama adımları ve deponun kendisinde kontrol edilmesi gereken noktalar.",
    keywords: ["su deposu temizliği", "apartman su deposu", "depo dezenfeksiyonu", "su deposu bakımı", "depo kapağı"],
    excerpt: "Deponun içi yıllardır açılmadıysa, tortu sadece hijyen değil hidrofor ve tesisat ömrü sorunudur. Periyot, adımlar ve kontrol noktaları.",
    services: ["su-deposu-temizligi", "hidrofor-tamiri", "sihhi-tesisat"],
    intro:
      "Su deposu, binanın en az görülen ama en çok temas edilen bölümü. İçindeki tortu yalnızca hijyen değil, hidrofor ve tesisat ömrü açısından da sorun yaratıyor.",
    body: [
      { h2: "Önerilen periyot" },
      {
        table: {
          head: ["Kullanım tipi", "Periyot", "Not"],
          rows: [
            ["Apartman / site", "Yılda 1 kez", "Tortu oranı yüksekse 6 ayda bir"],
            ["Otel, yurt, pansiyon", "6 ayda 1", "Yoğun ve değişken kullanım"],
            ["Gıda üreten işletme", "6 ayda 1", "Mevzuat gereklilikleri ayrıca kontrol edilmeli"],
            ["Müstakil konut", "Yılda 1 kez", "Tanker ile su alınıyorsa daha sık"],
          ],
        },
      },
      { p: "Temizlik tarihini deponun kapağına etiketlemek basit ama etkili bir uygulama. Böylece bir sonraki kontrolde ne kadar zaman geçtiği tartışma konusu olmuyor." },

      { h2: "Temizlik nasıl yapılır?" },
      { ol: [
        "Bina yönetimiyle su kesintisi saati planlanır ve sakinlere duyurulur",
        "Depo girişi kapatılır, mevcut su tahliye edilir",
        "Taban ve duvarlarda biriken tortu mekanik olarak sıyrılır",
        "Yüzeyler fırçalanarak yıkanır, kalıntı su tahliye edilir",
        "İçme suyuna uygun dezenfektan ile uygulama yapılır",
        "Bekleme süresi sonunda bol su ile durulanır",
        "Kapak contası, havalandırma ve şamandıra kontrol edilir",
        "Depo doldurulur, ilk su akıtılarak sistem devreye alınır",
      ] },
      { p: "Toplam süre depo hacmine göre 3–6 saat. Kesintiyi en aza indirmek için işi sabah erken saatlerde başlatmak en pratik yöntem." },

      { h2: "Deponun kendisi de kontrol edilmeli" },
      { p: "Temizlik sırasında sadece iç yüzey değil, deponun bütünlüğü de değerlendirilmeli. Aksi hâlde depo birkaç ay içinde eski hâline döner." },
      { ul: [
        "Kapak kilitli ve contalı olmalı, açık kapak, toz ve böcek girişi demektir",
        "Havalandırma ağzı sinek teliyle korunmalı",
        "Taşma hattı doğrudan gidere bağlı olmalı",
        "Emiş hattı taban seviyesinden birkaç santim yukarıdan alınmalı, böylece tortu çekilmez",
        "Depo doğrudan güneş almamalı; alıyorsa yosun oluşumu hızlanır",
        "Poliester depoda çatlak, betonarme depoda sıva dökülmesi kontrol edilmeli",
      ] },

      { h2: "Tortunun görünmeyen maliyeti" },
      { p: "Depo tabanındaki tortu, emiş hattından tesisata taşınır. Musluk süzgeçlerinin sık tıkanması, hidrofor filtresinin çabuk kirlenmesi ve armatürlerin ömrünün kısalması bunun sonuçlarıdır." },
      { p: "Hidrofor açısından ise tortulu su, çark ve salmastra aşınmasını hızlandırır. Yani depo temizliği sadece bir hijyen kalemi değil, ekipman koruma kalemidir." },

      { h2: "Temizlik sonrası ne beklenir?" },
      { p: "İlk birkaç saat suyun hafif bulanık gelmesi normaldir; sistemde kalan durulama suyudur. Musluklar birkaç dakika akıtıldığında berraklaşır. Bulanıklık ertesi güne kadar sürerse tekrar kontrol edilmelidir." },
      { p: "Kullanılan dezenfektan ürününün bilgisini iş sonunda yazılı olarak veriyoruz. Depo içi durum ve tespit edilen eksikler de fotoğraflarla raporlanıyor." },
    ],
    faqs: [
      { q: "Temizlik sırasında su kesilir mi?", a: "Evet, depo boşaltılacağı için kesinti olur. Süre depo hacmine göre 3–6 saattir. Bina yönetimiyle en uygun saati planlıyor, sakinlere önceden duyuru yapılmasını sağlıyoruz." },
      { q: "Deponun içi paslanmışsa ne yapılır?", a: "Metal depolarda yüzey korozyonu varsa temizlik sonrası içme suyuna uygun kaplama yapılması gerekir. Korozyon ilerlemişse depo değişimi gündeme gelir; durumu fotoğraflarla raporluyoruz." },
    ],
    related: ["depoya-su-dolmuyor", "depo-suyu-kokuyor", "su-deposu-hidrofor-birlikte", "hidrofor-surekli-calisiyor", "ev-su-tesisati-yenileme"],
  },

  {
    slug: "peteklerin-alti-neden-soguk",
    title: "Peteklerin altı neden soğuk kalır?",
    category: "Isıtma",
    published: "2025-10-08",
    updated: "2026-01-14",
    reading: 6,
    metaTitle: "Peteğin Altı Neden Soğuk? Hava mı Tortu mu?",
    metaDesc:
      "Peteğin altı soğuk, üstü sıcaksa tortu; tersi ise hava vardır. İki durumu ayırt etmenin yolu ve her biri için yapılması gerekenler.",
    keywords: ["petek ısınmıyor", "peteğin altı soğuk", "petek temizliği", "petek hava alma", "kalorifer sorunu"],
    excerpt: "Aynı şikâyetin altında üç farklı sorun yatabilir: hava, tortu ve dolaşım. Hangisi olduğunu evde nasıl anlarsınız?",
    services: ["petek-temizligi", "mekanik-tesisat", "sihhi-tesisat"],
    intro:
      "\"Peteğin altı soğuk\" şikâyeti her kış tekrarlanır ve genelde tek bir nedene bağlanır. Oysa altında üç farklı sorun yatabilir ve çözümleri tamamen farklıdır.",
    body: [
      { h2: "Üç durumu ayırt edin" },
      {
        table: {
          head: ["Belirti", "Neden", "Çözüm"],
          rows: [
            ["Üst soğuk, alt sıcak", "Petek içinde hava toplanmış", "Purjörden hava alma (5 dakika)"],
            ["Üst sıcak, alt soğuk", "Tabanda tortu birikmiş", "Petek yıkama / temizlik"],
            ["Tamamı ılık", "Dolaşım sorunu", "Pompa, vana ve sistem dengeleme"],
            ["Bazı odalar hiç ısınmıyor", "Dengeleme yapılmamış", "Vana ayarı ve debi dağıtımı"],
          ],
        },
      },
      { p: "Bu ayrım evde elle yapılabilir ve doğru müdahaleyi belirler. Yanlış teşhisle yapılan temizlik, çoğu zaman aynı sonucu vermiyor." },

      { h2: "Hava: en kolay çözülen" },
      { p: "Petek üzerindeki purjör (hava alma vidası) yavaşça açılır, tıslama sesi kesilip su gelmeye başlayınca kapatılır. Altına bir kap koymayı unutmayın. İşlem tüm peteklerde en üst kattan başlanarak tekrarlanır." },
      { p: "Hava alma sonrası tesisat basıncı düşer; kombi manometresinden kontrol edip 1–1,5 bar aralığına tamamlamak gerekir. Bu, sezon başında yapılması gereken standart bir bakımdır." },

      { h2: "Tortu nereden geliyor?" },
      { p: "Kapalı bir ısıtma devresinde su sürekli aynı kalır. Zamanla borulardan ve radyatörlerden çözünen demir, oksijenle birleşerek çamurumsu bir tortu oluşturur. Bu tortu ağır olduğu için peteğin tabanında birikir." },
      { p: "Sık su takviyesi yapılan sistemlerde tortu daha hızlı oluşur, çünkü her yeni su beraberinde oksijen ve mineral getirir. Basıncı sürekli düşen bir tesisatta önce kaçağı bulmak, tortu sorununu da uzun vadede çözer." },

      { h2: "Temizlik nasıl yapılır?" },
      { ol: [
        "Sistem soğutulur, kombi veya kazan devre dışı bırakılır",
        "Temizlenecek petek vanaları kapatılır ve hat izole edilir",
        "Petek girişine basınçlı su verilerek ters yönde yıkama yapılır",
        "Çıkan su berraklaşana kadar işlem sürdürülür",
        "Gerekiyorsa sistem geneli için kimyasal temizlik değerlendirilir",
        "Petekler yerine takılır, sistem doldurulur, hava alınır",
        "Basınç ayarlanır ve dengeleme yapılarak devreye alınır",
      ] },
      { p: "Asıl mesele hat izolasyonudur: kirli suyun kombiye yönlendirilmemesi gerekir. Bu adım atlandığında tortu eşanjöre taşınabilir." },

      { h2: "Tekrarını önlemek" },
      { p: "Temizlik sonrası sisteme koruyucu katkı ilave edilmesi, tortu oluşumunu iyice yavaşlatır. Tesisat üzerine takılan manyetik filtre ise dolaşımdaki metal partikülleri tutarak peteklere ulaşmalarını engeller." },
      { p: "İkisi birlikte uygulandığında temizlik periyodu 5–7 yıla kadar uzayabiliyor. Her ikisinin de maliyeti, bir temizlik işleminin maliyetinin altında." },

      { h2: "Sezon öncesi on dakikalık kontrol" },
      { ul: [
        "Tüm peteklerin hava alma vidalarından hava alın",
        "Kombi basıncını 1–1,5 bar aralığına getirin",
        "Petek vanalarının tam açık olduğunu kontrol edin",
        "Termostatik başlıkları bir kez tam açıp kapatarak sıkışmadığını doğrulayın",
        "Sirkülasyon pompasının sessiz ve düzgün çalıştığını dinleyin",
      ] },
      { p: "Bu kontrol hem konforu artırıyor hem de kombinin gereksiz çalışmasını önleyerek yakıt tüketimini düşürüyor." },
    ],
    faqs: [
      { q: "Petek temizliğini ne sıklıkla yaptırmalıyım?", a: "Normal koşullarda 4–6 yılda bir yeterlidir. Sık su takviyesi yapılan, eski ve karışık malzemeli tesisatlarda bu süre kısalır. Belirti yoksa ve petekler eşit ısınıyorsa temizliğe gerek yoktur." },
      { q: "Temizlik yaptırdım ama düzelmedi, neden?", a: "Sorun tortu değil dolaşım olabilir. Sirkülasyon pompası kademesi, vana açıklıkları ve sistem dengesi kontrol edilmelidir. Ayrıca petek oda için küçük seçilmişse hiçbir temizlik sonuç vermez." },
    ],
    related: ["kombi-basinci-neden-dusuyor", "su-deposu-hidrofor-birlikte", "donmus-boru-ne-yapilir"],
  },

  {
    slug: "kombi-basinci-neden-dusuyor",
    title: "Kombi basıncı neden düşüyor? Sık su takviyesi ne anlatır",
    category: "Isıtma",
    published: "2025-11-19",
    updated: "2026-06-02",
    reading: 6,
    metaTitle: "Kombi Basıncı Neden Düşer? Nedenleri ve Çözümü",
    metaDesc:
      "Kombi basıncı sürekli düşüyorsa tesisatta kaçak olabilir. Genleşme tankı, emniyet ventili ve gizli kaçak arasındaki farkı anlama rehberi.",
    keywords: ["kombi basıncı düşüyor", "tesisat kaçağı", "genleşme tankı", "emniyet ventili", "su takviyesi"],
    excerpt: "Haftada bir su takviyesi yapıyorsanız bu normal değildir. Basınç düşüşünün üç ana nedeni ve hangisinin sizde olduğunu anlama yolu.",
    services: ["su-kacagi-tespiti", "mekanik-tesisat", "petek-temizligi"],
    intro:
      "Kapalı bir ısıtma sisteminde su tüketilmez. Dolayısıyla basıncın düşmesi, suyun bir yerden sistemden çıktığı anlamına gelir. Nereden çıktığı ise üç ihtimalden biridir.",
    body: [
      { h2: "Normal basınç değerleri" },
      { p: "Soğuk sistemde tipik değer 1–1,5 bar aralığıdır. Sistem ısındığında suyun genleşmesiyle 1,8–2,2 bar civarına çıkması normaldir. Soğuduğunda tekrar başlangıç değerine dönmelidir." },
      { p: "Ayda bir kez küçük bir takviye gerekmesi olağan kabul edilebilir. Haftada bir veya daha sık takviye gerekiyorsa sistemde bir sorun vardır ve araştırılmalıdır." },

      { h2: "1. Tesisat kaçağı" },
      { p: "En yaygın nedendir. Sızıntı görünür bir noktada olabilir (petek vanası, rekor, kombi altı) ya da duvar veya zemin içinde gizli kalabilir." },
      { ul: [
        "Tüm petek vanalarını ve rekorlarını elle kontrol edin, nemlilik arayın",
        "Kombinin altındaki bağlantıları ve emniyet ventili çıkışını inceleyin",
        "Zeminde belirli bir noktanın diğerlerinden sıcak olup olmadığına bakın",
        "Alt kata sızıntı olup olmadığını sorun",
      ] },
      { p: "Gizli kaçaklarda basınç düşme hızı, kaçağın büyüklüğü hakkında fikir verir: günde 0,2 bar düşüş küçük, saatlerde 1 bar düşüş büyük bir sızıntıya işaret eder." },

      { h2: "2. Genleşme tankı" },
      { p: "Genleşme tankı, ısınan suyun hacim artışını karşılar. İçinde bir membran ve arkasında sıkıştırılmış hava vardır. Bu hava kaçtığında tank görevini yapamaz." },
      { p: "Belirtisi tipiktir: sistem ısındığında basınç hızla yükselir, emniyet ventili açar ve su dışarı atılır; sistem soğuduğunda ise basınç düşük kalır. Yani su kaybı vardır ama kaçak yoktur, su emniyet ventilinden atılmıştır." },
      { p: "Kontrolü basittir: sistem basıncı boşaltılıp tankın sibobundan hava basıncı ölçülür. Genelde 1–1,2 bar civarında olmalıdır. Membran yırtılmışsa siboptan hava yerine su gelir; böyle olunca tank değişir." },

      { h2: "3. Emniyet ventili" },
      { p: "Emniyet ventili, basınç güvenli sınırı aştığında açarak sistemi korur. Ancak yayı yorulmuş veya oturma yüzeyine tortu kaçmış bir ventil, gerekmediği hâlde damlatır." },
      { p: "Kontrol için ventilin tahliye hortumuna bakın. Damlatma veya kuru kireç izi varsa ventil sızdırıyor demektir. Bu, ucuz ve hızlı değiştirilebilen bir parçadır." },

      { h2: "Ayırt etme özeti" },
      {
        table: {
          head: ["Belirti", "Muhtemel neden"],
          rows: [
            ["Basınç yavaş ve sürekli düşüyor", "Tesisat kaçağı"],
            ["Isınınca çok yükselip soğuyunca çok düşüyor", "Genleşme tankı"],
            ["Emniyet ventilinden damlama var", "Ventil arızası veya tank sorunu"],
            ["Petek altında veya vanada nem var", "Görünür kaçak, onarılabilir"],
            ["Zeminde sıcak nokta var", "Zemin altı ısıtma hattı kaçağı"],
          ],
        },
      },

      { h2: "Sık su takviyesinin gizli maliyeti" },
      { p: "Her yeni su, sisteme oksijen ve mineral getirir. Oksijen korozyonu hızlandırır, mineral kireç ve tortu oluşturur. Yani sık takviye yapılan bir sistem, sadece basınç sorunu yaşamaz; petekleri ve kombiyi de hızla yıpratır." },
      { p: "Onun için \"basınç düşüyorsa su ekleriz\" yaklaşımı, sorunu çözmek yerine ikinci bir sorun üretiyor. Nedenin bulunması hem daha ucuz hem daha kalıcı." },
    ],
    faqs: [
      { q: "Kendim su takviyesi yapabilir miyim?", a: "Evet, kombi altındaki dolum vanasından yapılır. Basıncı 1,5 barın üzerine çıkarmamaya dikkat edin ve vanayı işlem sonrası tam kapattığınızdan emin olun; açık kalan dolum vanası basıncın sürekli yükselmesine yol açar." },
      { q: "Isıtma hattı kaçağı sayaçta görünür mü?", a: "Hayır. Isıtma devresi kapalı bir sistemdir ve su sayacından beslenmez. Dolayısıyla ısıtma kaçakları su faturasında görünmez; tek göstergesi basınç düşüşüdür." },
    ],
    related: ["peteklerin-alti-neden-soguk", "su-kacagi-erken-belirtileri", "donmus-boru-ne-yapilir"],
  },

  {
    slug: "donmus-boru-ne-yapilir",
    title: "Donmuş boruda ne yapılır, nasıl önlenir?",
    category: "Sıhhi Tesisat",
    published: "2025-12-10",
    updated: "2026-01-29",
    reading: 6,
    metaTitle: "Donmuş Su Borusu | Ne Yapılmalı, Nasıl Önlenir",
    metaDesc:
      "Kış aylarında donan su borularında güvenli çözme yöntemleri, yapılmaması gerekenler ve donmayı önlemek için alınacak tedbirler.",
    keywords: ["donmuş boru", "su borusu dondu", "boru patladı", "don koruması", "kış tesisat bakımı"],
    excerpt: "Malatya kışında dış cephe ve soğuk hacimlerden geçen hatlar risk altında. Donan boruda ne yapılır, daha önemlisi nasıl önlenir?",
    services: ["sihhi-tesisat", "mekanik-tesisat", "su-kacagi-tespiti"],
    intro:
      "Su donduğunda hacmi yaklaşık %9 artar. Kapalı bir boru içinde bu genişleme gidecek yer bulamaz ve boruyu çatlatır. Kötü haber şu: çatlak genelde buz çözülene kadar fark edilmez.",
    body: [
      { h2: "Donma riski en yüksek noktalar" },
      { ul: [
        "Dış duvar boyunca giden, izolasyonsuz hatlar",
        "Bodrum, çatı arası ve kapalı olmayan garaj geçişleri",
        "Bahçe muslukları ve sulama hatları",
        "Kullanılmayan yazlık, bağ evi ve boş dairelerin tesisatı",
        "Balkon ve teras üzerindeki açık borular",
        "Cephe boyunca geçen güneş enerjisi hatları",
      ] },
      { p: "Malatya'da kış sıcaklıklarının uzun süre eksi değerlerde kalması, bu noktaları her yıl risk altına sokuyor. Özellikle uzun süre boş kalan yapılarda hasar oranı yüksek." },

      { h2: "Boru donduysa: güvenli çözme" },
      { ol: [
        "Daire giriş vanasını kapatın, çözülme sırasında çatlak varsa su basmasını sınırlar.",
        "Donan bölgeye en yakın musluğu açın, buz çözüldükçe suyun çıkacağı yer olsun.",
        "Isıtmayı kademeli yapın: sıcak havlu, saç kurutma makinesi veya ısıtıcı ile ortamı ısıtın.",
        "Boruyu uçtan (musluğa yakın taraftan) başlayarak ısıtın, ortadan değil.",
        "Su akmaya başladıktan sonra hattı bir süre akıtın ve sızıntı olup olmadığını kontrol edin.",
      ] },
      { quote: "Açık alevle (pürmüz, ısıtıcı üfleç) boru ısıtmayın. Hem yangın riski hem de plastik boruların erimesi söz konusudur." },

      { h2: "Yapılmaması gerekenler" },
      { ul: [
        "Boruya doğrudan kaynar su dökmek, ani sıcaklık farkı çatlağı büyütür",
        "Açık alev kullanmak",
        "Donmuş hatta basınç uygulamak, pompayı zorlamak",
        "Buz çözülmeden vanayı açıp sistemi basınç altına almak",
        "Çatlak olup olmadığını kontrol etmeden evi terk etmek",
      ] },

      { h2: "Kışa hazırlık: yapılacaklar" },
      { p: "Donmayı önlemek, donmuş boruyla uğraşmaktan çok daha ucuz ve kolay. Kasım ayında yapılacak birkaç işlem, tüm sezonu güvenli geçirmenizi sağlıyor." },
      { ol: [
        "Dış duvar, bodrum ve çatı arasından geçen hatları izole edin",
        "Bahçe musluklarının iç vanasını kapatıp hattı boşaltın",
        "Sulama sistemini tahliye edin, vana kutularını kontrol edin",
        "Kullanılmayan yapılarda ana vanayı kapatıp tüm hattı boşaltın",
        "İşin püf noktasılarda ısıtıcı kablo (heat trace) kullanmayı değerlendirin",
        "Güneş enerjisi sisteminde antifriz oranını ölçtürün",
      ] },

      { h2: "Uzun süre evden ayrılacaksanız" },
      { p: "Tatil veya iş nedeniyle evden uzun süre ayrılıyorsanız iki seçenek var. Birincisi ısıtmayı düşük bir seviyede (10–12 °C) açık bırakmak; bu, en pratik ve en güvenli yöntemdir." },
      { p: "İkincisi tesisatı tamamen boşaltmak. Bu daha kesin bir korumadır ama doğru yapılması gerekir: ana vana kapatılır, en alçak noktadaki musluklar açılarak sistem boşaltılır, sifonlara antifriz konur (aksi hâlde sifon suyu donar ve koku gelir)." },

      { h2: "Donmadan sonra kontrol" },
      { p: "Buz çözüldükten sonra hemen sızıntı görünmeyebilir. Çatlak küçükse, ilk günlerde sadece nem olarak kendini gösterir. O yüzden donma yaşanan bir hattı birkaç gün boyunca gözlemlemenizi öneriyoruz." },
      { p: "Şüphe varsa basınç testi yaptırmak kesin sonuç verir. Küçük bir çatlağın erken bulunması, birkaç ay sonra ortaya çıkacak bir su hasarını önlüyor." },
    ],
    faqs: [
      { q: "Donan boru mutlaka patlar mı?", a: "Hayır. Boru malzemesine ve donmanın süresine bağlıdır. PEX gibi esnek borular bir miktar genişleyerek dayanabilir; PPRC ve metal borular ise çatlamaya daha müsaittir. Yine de her donma olayından sonra kontrol yapılmalıdır." },
      { q: "Isıtıcı kablo ne kadar elektrik harcar?", a: "Termostatlı modeller sadece sıcaklık belirli bir değerin altına düştüğünde çalışır. Metre başına tipik tüketim 10–20 W civarındadır ve kışın yalnızca birkaç yüz saat çalışır; toplam maliyet, tek bir patlak boru onarımının çok altında kalır." },
    ],
    related: ["ev-su-tesisati-yenileme", "kombi-basinci-neden-dusuyor", "peteklerin-alti-neden-soguk"],
  },

  {
    slug: "hidrofor-surekli-calisiyor",
    title: "Hidrofor neden sürekli çalışır?",
    category: "Pompa",
    published: "2025-08-19",
    updated: "2026-08-19",
    reading: 11,
    metaTitle: "Hidrofor Neden Sürekli Çalışır? Nedenleri ve Çözümü",
    metaDesc:
      "Hidrofor sık devreye giriyor veya hiç durmuyorsa nedeni nedir? Basınç tankı, çekvalf, kaçak ve şalter ayarı üzerinden adım adım kontrol.",
    keywords: ["hidrofor neden sürekli çalışır", "hidrofor sürekli çalışıyor", "hidrofor sık devreye giriyor", "hidrofor durmuyor", "basınç tankı havası", "çekvalf"],
    excerpt: "Hidroforun sık devreye girmesi neredeyse her zaman tek bir nedenden kaynaklanır ve çözümü on dakikalık bir işlemdir.",
    services: ["hidrofor-tamiri", "hidrofor-pompa-sistemleri", "su-kacagi-tespiti"],
    intro:
      "Hidrofor arızalarının büyük bölümü pompanın kendisinden değil, çevresindeki üç parçadan kaynaklanıyor: basınç tankı, basınç şalteri ve çekvalf. Pompayı değiştirmeden önce bu üçlüye bakmak, çoğu zaman hem parayı hem zamanı kurtarıyor.",
    body: [
      { h2: "Sık devreye giriyor mu, hiç durmuyor mu?" },
      { p: "İki farklı belirti, iki farklı neden grubuna işaret eder ve karıştırılmamalıdır." },
      {
        table: {
          head: ["Belirti", "En olası neden", "Kontrol"],
          rows: [
            ["Musluk açınca hemen devreye giriyor", "Basınç tankının havası kaçmış", "Tank hava basıncı ölçümü"],
            ["Musluk kapalıyken de sık sık kalkıyor", "Hatta damlama veya çekvalf sızdırıyor", "Kaçak kontrolü, çekvalf testi"],
            ["Hiç durmuyor", "Basınç ayarı yüksek, pompa hedefe ulaşamıyor", "Şalter ayarı, pompa performansı"],
            ["Çalışıyor ama su basmıyor", "Emişte hava, çark aşınmış", "Emiş hattı ve çark kontrolü"],
          ],
        },
      },

      { h2: "Basınç tankı: en sık suçlu" },
      { p: "Tankın içinde bir membran ve arkasında sıkıştırılmış hava bulunur. Bu hava sistemin \"yayı\" gibidir; musluk açıldığında önce tanktaki basınçlı su kullanılır, ancak basınç belirli seviyenin altına düşünce pompa devreye girer." },
      { p: "Hava zamanla kaçtığında tank görevini yapamaz ve pompa her musluk açılışında anında devreye girer. Bu, hidroforun sık devreye girmesinin en yaygın nedeni." },
      { p: "Kontrolü basittir: sistem basıncı boşaltılır ve tank üzerindeki sibobtan manometreli bir pompa ile ölçüm yapılır. Değer, pompanın devreye girme basıncının yaklaşık 0,2 bar altında olmalıdır. Düşükse hava basılır." },

      { h2: "Membran yırtıksa" },
      { p: "Sibobtan hava yerine su geliyorsa membran yırtılmıştır ve tank değişmelidir. Böyle bir durumda hava basmak geçici bir çözüm bile olmaz; hava doğrudan suya karışır." },
      { p: "Tank gövdesinde pas, şişme veya kaynak yerinde sızıntı varsa da değişim gerekir. Sadece havası kaçmışsa hava basmak yeterlidir, tank değişmez. Bu ayrım maliyet açısından önemli." },

      { h2: "Çekvalf ve gizli kaçak" },
      { p: "Çekvalf, suyun geri kaçmasını engelleyen tek yönlü vanadır. Sızdırdığında basınç yavaşça düşer ve pompa musluk kapalıyken bile devreye girer." },
      { p: "Aynı belirtiyi tesisattaki küçük bir kaçak da verir. Ayırt etmek için hidrofor çıkışındaki vana kapatılır: pompa hâlâ sık kalkıyorsa sorun çekvalf veya tanktadır; kalkmıyorsa kaçak tesisattadır." },

      { h2: "Basınç şalteri ayarı" },
      { p: "Basınç şalteri, pompanın hangi basınçta devreye girip hangi basınçta duracağını belirler. Devreye girme (P1) ve durma (P2) değerleri arasındaki fark çok küçükse pompa sürekli açılıp kapanır." },
      { p: "Tipik bir konut hidroforunda P1 = 2 bar, P2 = 3,5 bar gibi bir aralık uygundur. Aradaki farkın 1,5 bar civarında tutulması, hem konforlu basınç hem makul devreye girme sıklığı sağlar." },

      { h2: "Sık devreye girmenin maliyeti" },
      { p: "Pompanın ömrünü belirleyen en önemli faktörlerden biri devreye girme sayısıdır. Her kalkışta motor yüksek akım çeker ve mekanik parçalar zorlanır. Günde 200 kez devreye giren bir pompa, günde 20 kez devreye girenden çok daha hızlı yıpranır." },
      { p: "Yılda bir yapılan on dakikalık tank basıncı kontrolü, bu sayıyı hissedilir ölçüde düşürüyor. Bu, tüm tesisatta getirisi en yüksek bakım kalemlerinden biri." },

      { h2: "Beş dakikada nedeni daraltmak" },
      { p: "Ustayı çağırmadan önce yapabileceğiniz üç adım var ve üçü de birkaç dakika sürüyor. Sonuca göre sorunun hangi parçada olduğu büyük ölçüde belli oluyor." },
      { ol: [
        "Evdeki bütün muslukları kapatın ve yarım saat bekleyin. Hidrofor bu sürede hiç kalkmıyorsa tesisat sağlam demektir.",
        "Kalkıyorsa hidrofor çıkışındaki vanayı kapatıp tekrar bekleyin. Yine kalkıyorsa sorun çekvalf ya da tankta; durursa kaçak tesisatta.",
        "Bir musluğu açıp pompanın ne kadar sonra devreye girdiğine bakın. Anında giriyorsa tankın havası kaçmış demektir.",
      ] },
      { p: "Bu üç adımın sonucu, aramanız gerektiğinde de işe yarıyor: sorunu tarif etmek yerine hangi parçanın şüpheli olduğunu söyleyebiliyorsunuz." },

      { h2: "Tank havası nasıl ölçülür?" },
      { p: "Ölçüm mutlaka sistem basıncı boşaltılmış hâlde yapılıyor. Tank içinde su basıncı varken alınan değer, membranın iki tarafındaki basıncın toplamını gösteriyor ve tamamen yanıltıcı oluyor." },
      { ol: [
        "Pompanın elektriğini kesin.",
        "En yakın musluğu açıp sistemdeki suyu boşaltın; akış tamamen kesilene kadar bekleyin.",
        "Tankın üzerindeki plastik kapağı çıkarın, altındaki sibobu bulun.",
        "Manometreli bir pompayla değeri okuyun.",
        "Değer, pompanın devreye girme basıncının yaklaşık 0,2 bar altında olmalı.",
        "Düşükse yavaşça hava basın; yüksekse sibobun ucuna bastırıp bir miktar boşaltın.",
      ] },
      { p: "Devreye girme basıncı 2 bar olan bir sistemde tank havası 1,8 bar civarında olmalı. Fabrikadan gelen 1,5 bar değeri her sisteme uymuyor; şalter ayarınıza göre değişiyor." },

      { h2: "Ne sıklıkla kontrol edilmeli?" },
      { p: "Yılda bir kez yeterli. Tanktaki hava, sibobun contasından ve membranın kendisinden çok yavaş biçimde kaçıyor; bu kaçış yıllar içinde birikiyor." },
      { p: "Yeni takılan bir tankta ilk kontrol altı ay sonra yapılabiliyor. Değer düşmemişse takvim yıllığa alınıyor. Kuyudan beslenen ve tortu taşıyan sistemlerde daha sık bakmak gerekiyor." },

      { h2: "Tank küçükse ne olur?" },
      { p: "Doğru havalandırılmış bir tank bile hacmi yetersizse pompanın sık kalkmasını engelleyemiyor. Tankın işi, iki kalkış arasında kullanılabilecek su miktarını depolamak." },
      { table: {
        head: ["Kullanım", "Önerilen tank"],
        rows: [
          ["Tek daire, 1-2 kişi", "24-50 litre"],
          ["Tek daire, kalabalık hane", "50-80 litre"],
          ["Müstakil ev, bahçeli", "80-100 litre"],
          ["Küçük apartman (4-8 daire)", "100-200 litre"],
          ["Orta apartman (8-16 daire)", "200-300 litre"],
          ["Sulama ve tarımsal kullanım", "300 litre ve üzeri"],
        ],
      } },
      { p: "Tankı büyütmek pompanın basıncını artırmıyor; yalnızca kalkış sayısını düşürüyor. Basınç sorunu ayrı bir konu ve orada pompa seçimine bakmak gerekiyor." },

      { h2: "Gizli kaçak nerede aranır?" },
      { p: "Vana kapatma testinde sorun tesisatta çıktıysa sıra kaçağı bulmaya geliyor. Sık karşılaşılan noktalar bellidir:" },
      { ul: [
        "Rezervuar iç takımı: sessizce klozete akan su en yaygın sebep.",
        "Bahçe musluğu ve dış hat: kışın donmuş bir bağlantı bahar gelince damlıyor.",
        "Şofben ya da kombi emniyet ventili: damlama gidere gittiği için görülmüyor.",
        "Gömme rezervuarlar: sızıntı duvarın içinde kalıyor.",
        "Eski musluk salmastraları: damla damla ama gün boyu.",
      ] },
      { p: "Rezervuar testi kolay: hazneye birkaç damla gıda boyası damlatıp yarım saat bekleyin. Klozet haznesinde renk görünüyorsa iç takım sızdırıyor demektir." },

      { h2: "Pompa hiç durmuyorsa" },
      { p: "Sık kalkmak ile hiç durmamak farklı sorunlar. Pompa duruyor ama sık kalkıyorsa yukarıdaki üçlüye bakılıyor; hiç durmuyorsa pompa hedef basınca ulaşamıyor demektir." },
      { p: "Bunun sebepleri: şalterin durma basıncının pompanın kapasitesinin üzerinde ayarlanmış olması, çarkların aşınması, emiş tarafında tıkanıklık ya da sistemde büyük bir kaçak." },
      { p: "Sürekli çalışan bir pompa kısa sürede ısınıyor ve termikten atıyor. Bu tabloyu görürseniz sistemi kapatıp beklemek, motoru korumanın en hızlı yolu." },

      { h2: "Şalter kontakları" },
      { p: "Basınç şalteri mekanik bir parça ve her kalkışta kontakları kıvılcım yapıyor. Sık devreye giren bir sistemde kontaklar birkaç yılda yanmaya başlıyor." },
      { p: "Yanmış kontak, pompanın geç kalkmasına ya da hiç kalkmamasına yol açıyor. Kapak açıldığında kontakların karardığı gözle görülüyor; bu durumda şalter değişiyor." },

      { h2: "Kuru çalışma koruması" },
      { p: "Deposu boşalan ya da kuyusu çekilen bir sistemde pompa suyu bulamadan dönmeye devam ediyor. Bu, hem sık kalkma gibi görünüyor hem pompayı en hızlı bitiren durum." },
      { p: "Kuru çalışma koruması bu durumda pompayı durduruyor. Deponun şamandırasına bağlı bir kontak ya da hat üzerindeki bir basınç anahtarıyla kuruluyor; maliyeti düşük, faydası büyük." },

      { h2: "Apartmanlarda durum" },
      { p: "Çok daireli binalarda hidrofor gün boyu çalışıyor ve sık kalkma daha erken fark ediliyor. Burada tank hacmi tek daireye göre çok daha belirleyici." },
      { p: "İki pompalı gruplarda pompaların dönüşümlü çalışması gerekiyor. Panodaki dönüşüm ayarı bozulduğunda bir pompa sürekli çalışıp yıpranıyor, diğeri boş duruyor. Yıllık kontrolde bu ayara da bakılıyor." },

      { h2: "Frekans kontrollü sistemler" },
      { p: "İnvertörlü hidroforlar açılıp kapanmak yerine devri ayarlayarak sabit basınç tutuyor. Sık kalkma sorunu bu sistemlerde büyük ölçüde ortadan kalkıyor." },
      { p: "Yine de küçük bir tank gerekiyor; sıfır debide sistemin basıncı tutması için. Tankın havası burada da kontrol ediliyor, yalnızca kalkış sayısı çok daha düşük olduğu için etkisi geç görünüyor." },

      { h2: "Ne zaman usta çağırmalı?" },
      { ul: [
        "Sibobtan hava yerine su geliyorsa; membran yırtılmış demektir.",
        "Pompa çalışıyor ama basınç hiç yükselmiyorsa.",
        "Motor ısınıp termikten atıyorsa.",
        "Panoda kararma, koku ya da kıvılcım varsa.",
        "Vana kapatma testinde kaçak tesisatta çıktı ve yeri bulunamıyorsa.",
      ] },
      { p: "İlk dört madde beklemeye gelmiyor. Özellikle dördüncüsünde önce enerjiyi kesip sonra aramak gerekiyor." },

      { h2: "Malatya koşullarında" },
      { p: "Şehrin bazı bölgelerinde şebeke basıncı gün içinde epeyce değişiyor; sabah ve akşam yoğunluğunda düşüyor. Depolu sistemlerde bu fark hissedilmiyor ama doğrudan şebekeden emen sistemlerde pompanın çalışma düzenini bozuyor." },
      { p: "Suyun sertliği de bir etken. Kireç zamanla çekvalfin tam kapanmasını engelliyor ve pompa musluk kapalıyken kalkmaya başlıyor. Kuyudan beslenen sistemlerde tortu aynı işi yapıyor; bu bölgelerde çekvalf, tank havasından daha sık kontrol ediliyor." },

      { h2: "Kışın çıkan sorunlar" },
      { p: "Soğukta iki şey değişiyor. Birincisi, dış hatta ya da korumasız bir hacimde duran hidroforun donma riski; ikincisi kullanım alışkanlığının değişmesiyle pompanın çalışma düzeninin farklılaşması." },
      { p: "Donmuş bir hatta pompa suyu itemiyor ve sürekli çalışır hâle geliyor. Bahçe hattının vanası kışa girmeden kapatılıp boşaltıldığında bu tablo hiç oluşmuyor." },
      { p: "Bir de kışın fark edilen kaçaklar var: donup çatlayan bir dış musluk, hava ısınınca damlamaya başlıyor ve pompa musluk kapalıyken kalkıyor. Baharda ilk yapılacak kontrol dış hat oluyor." },

      { h2: "Yıllık bakımda ne yapılıyor?" },
      { ul: [
        "Tank hava basıncı ölçülüyor, gerekirse takviye ediliyor.",
        "Çekvalf sızdırmazlığı vana kapatma testiyle kontrol ediliyor.",
        "Basınç şalterinin devreye girme ve durma değerleri okunuyor.",
        "Şalter kontakları açılıp gözle inceleniyor.",
        "Pano bağlantıları sıkılıyor.",
        "Kuru çalışma koruması tetiklenerek deneniyor.",
        "Çalışma sesi ve titreşim dinleniyor.",
      ] },
      { p: "Yedi maddenin tamamı bir saatte bitiyor. Sık kalkma sorunu olan sistemlerde bu bakım, pompa değişimini yıllarca öteliyor." },
    ],
    faqs: [
      { q: "Hidrofor musluk açar açmaz devreye giriyor, normal mi?", a: "Değil. Sağlıklı bir sistemde önce tanktaki basınçlı su kullanılıyor, pompa birkaç saniye sonra kalkıyor. Anında kalkıyorsa tankın havası kaçmış demektir. Ölçüm ve hava takviyesi on dakikalık bir iş." },
      { q: "Kimse su kullanmıyorken pompa kalkıyor, sebebi ne?", a: "Ya çekvalf sızdırıyor ya tesisatta bir kaçak var. Ayırt etmek için hidrofor çıkışındaki vanayı kapatın: pompa hâlâ kalkıyorsa sorun çekvalf ya da tankta, kalkmıyorsa kaçak tesisatta." },
      { q: "Tank havası kaç bar olmalı?", a: "Pompanın devreye girme basıncının yaklaşık 0,2 bar altında. Devreye girme 2 bar ise tank havası 1,8 bar civarında olur. Tankın üzerinde yazan fabrika değeri her sisteme uymuyor; sizin şalter ayarınıza göre değişiyor." },
      { q: "Sibobtan su geliyor, hava basmaya devam edeyim mi?", a: "Hayır. Sibobtan su gelmesi membranın yırtıldığını gösteriyor ve tank değişmeli. Hava basmak bu durumda geçici bir çözüm bile olmuyor; hava doğrudan suya karışıyor." },
      { q: "Tankı büyütsem sorun çözülür mü?", a: "Sık kalkma sorununu çözüyor; her kalkış arasında daha çok su depolandığı için pompa daha az devreye giriyor. Ama basınç sorununu çözmüyor, o ayrı bir konu ve orada pompa seçimine bakmak gerekiyor." },
      { q: "Pompa hiç durmuyor, ne yapmalıyım?", a: "Sık kalkmaktan farklı bir sorun. Pompa hedef basınca ulaşamıyor demektir: şalterin durma değeri kapasitenin üstünde ayarlanmış, çarklar aşınmış, emişte tıkanıklık ya da büyük bir kaçak olabilir. Motor ısınmadan sistemi kapatın." },
      { q: "Sık devreye girmek pompaya zarar verir mi?", a: "Verir. Her kalkışta motor yüksek başlangıç akımı çekiyor ve mekanik parçalar zorlanıyor. Günde 200 kez kalkan bir pompa, 20 kez kalkandan çok daha hızlı yıpranıyor. Yıllık tank kontrolü bu sayıyı hissedilir ölçüde düşürüyor." },
      { q: "Frekans kontrollü hidrofor bu sorunu çözer mi?", a: "Büyük ölçüde çözüyor. İnvertörlü sistemde pompa açılıp kapanmak yerine devrini ayarlayarak sabit basınç tutuyor; hem gürültü hem yıpranma azalıyor. İlk maliyeti klasik sistemden yüksek." },
      { q: "Hidrofor gürültüsü azaltılabilir mi?", a: "Çoğu durumda evet. Titreşim takozu, esnek bağlantı elemanı ve doğru montaj yüksekliği gürültüyü epeyce azaltıyor. Ses kavitasyondan geliyorsa emiş hattının çapı ve dirsek sayısı gözden geçiriliyor." },
    ],
    related: ["hidrofor-tank-havasi-ayari", "hidrofor-basinc-salteri-ayari", "su-deposu-hidrofor-birlikte", "su-deposu-ne-zaman-temizlenmeli", "kuyu-pompasi-basinc-sorunu"],
  },

  {
    slug: "su-deposu-hidrofor-birlikte",
    title: "Su deposu ve hidrofor birlikte nasıl çalışır?",
    category: "Pompa",
    published: "2026-01-08",
    updated: "2026-06-25",
    reading: 6,
    metaTitle: "Su Deposu ve Hidrofor Sistemi Nasıl Çalışır?",
    metaDesc:
      "Depo hacmi, emiş hattı, pompa grubu ve basınç tankının sistem içindeki görevleri. Apartmanlarda depo–hidrofor kurulumunun temel kuralları.",
    keywords: ["su deposu hidrofor", "apartman su sistemi", "depo hacmi hesabı", "emiş hattı", "kuru çalışma koruması"],
    excerpt: "Depo, pompa ve basınç tankının her birinin ayrı bir görevi var. Sistemin doğru kurulması hem konforu hem ekipman ömrünü belirliyor.",
    services: ["hidrofor-pompa-sistemleri", "su-deposu-temizligi", "hidrofor-tamiri"],
    intro:
      "Şebeke basıncının yetersiz kaldığı binalarda su deposu ve hidrofor birlikte kullanılır. İkisinin görevi farklıdır: depo süreklilik sağlar, hidrofor basınç sağlar.",
    body: [
      { h2: "Sistemin bileşenleri" },
      { p: "Klasik bir depo–hidrofor sisteminde beş temel bileşen bulunur ve her birinin ayrı bir işlevi vardır:" },
      { ul: [
        "Su deposu: şebeke kesintilerine karşı yedek ve düzenli besleme sağlar",
        "Şamandıra / seviye kontrolü: deponun dolumunu yönetir",
        "Pompa: suyu basınçlandırarak üst katlara ulaştırır",
        "Basınç tankı: küçük kullanımlarda pompanın devreye girmesini engeller",
        "Basınç şalteri veya invertör: pompanın ne zaman çalışacağını belirler",
      ] },

      { h2: "Depo hacmi nasıl belirlenir?" },
      { p: "Genel yaklaşım, günlük tüketimin en az yarısını karşılayacak hacimdir. Kişi başı günlük 120–150 litre kabul edilirse, 12 daireli ve daire başına ortalama 3 kişilik bir binada günlük tüketim yaklaşık 5 ton olur; depo hacmi 2,5–5 ton aralığında seçilir." },
      { p: "Çok büyük depo da sorunludur: su uzun süre bekler, tazeliğini kaybeder ve tortu oluşumu artar. Dolayısıyla \"ne kadar büyük o kadar iyi\" yaklaşımı doğru değildir." },

      { h2: "Emiş hattı: en çok hata yapılan yer" },
      { p: "Pompanın emiş tarafı, sistemin en hassas bölümüdür. Buradaki küçük hatalar kavitasyon, gürültü ve pompa aşınmasına yol açar." },
      { ul: [
        "Emiş hattı, basma hattından bir çap büyük seçilmelidir",
        "Emiş ağzı depo tabanından 5–10 cm yukarıda olmalı, böylece tortu çekilmez",
        "Dirsek sayısı en aza indirilmeli, mümkünse 45° parçalar kullanılmalı",
        "Emiş hattında hava sızdıracak hiçbir bağlantı bulunmamalı",
        "Dip klepe (ayak vanası) varsa düzenli kontrol edilmeli",
      ] },

      { h2: "Kuru çalışma koruması: pazarlık edilemez" },
      { p: "Depo boşaldığında pompa susuz çalışırsa, salmastra ve çark birkaç dakika içinde zarar görür; motor sargısı da yanabilir. Bunu önleyen basit ve ucuz bir eleman var: seviye şalteri veya elektrot." },
      { quote: "Kuru çalışma koruması, pompanın maliyetinin çok küçük bir yüzdesidir ama en sık görülen pompa arızası nedenini tamamen sıfırlar." },
      { p: "Şebeke kesintisi yaşanan bölgelerde bu koruma özellikle önemli. Kesinti sırasında depo boşalır ve kimse fark etmezse pompa kendini yakar." },

      { h2: "Apartmanlarda yedekli çalışma" },
      { p: "Apartman ve sitelerde tek pompa yerine iki pompalı grup öneriyoruz. Pompalar dönüşümlü çalışır; biri arızalandığında diğeri devreye girer ve yoğun talep anında ikisi birlikte çalışarak kapasiteyi artırır." },
      { p: "Dönüşümlü çalışma iki pompanın da eşit yıpranmasını sağladığı için toplam ömrü uzatır. Ayrıca bir arıza durumunda bina susuz kalmaz. Bu, yönetim açısından en değerli kazanım." },

      { h2: "Yıllık bakım listesi" },
      { ol: [
        "Depo temizliği ve iç yüzey kontrolü",
        "Kapak contası, havalandırma ve şamandıra kontrolü",
        "Basınç tankının hava basıncı ölçümü ve gerekirse takviyesi",
        "Basınç şalteri ayarlarının kontrolü",
        "Emiş hattı ve dip klepe kontrolü",
        "Kuru çalışma korumasının test edilmesi",
        "Pompa çalışma sesi ve titreşim değerlendirmesi",
        "Pano bağlantılarının sıkılması",
      ] },
      { p: "Bu bakımı yılda bir kez, tercihen yaz başında yapmak en uygunu. Yoğun kullanım dönemine hazır girmiş olursunuz." },
    ],
    faqs: [
      { q: "Depo olmadan sadece hidrofor kurulabilir mi?", a: "Şebeke doğrudan basılıyorsa mümkündür, ancak birçok yerde şebekeden doğrudan emiş yapmak uygun değildir ve komşulara da etki eder. Ayrıca kesintide sistem tamamen durur. Depo, hem yedek hem de düzenli emiş için önerilir." },
      { q: "Depo çatıda mı bodrumda mı olmalı?", a: "Bodrum deposu + hidrofor en yaygın çözümdür; yapıya ek yük bindirmez ve bakımı kolaydır. Çatı deposu ise yerçekimiyle basınç sağlar ama üst katlarda basınç yetersiz kalır ve yapısal yük getirir." },
    ],
    related: ["hidrofor-surekli-calisiyor", "su-deposu-secimi", "hidrofor-tank-havasi-ayari", "su-deposu-ne-zaman-temizlenmeli", "kuyu-pompasi-basinc-sorunu"],
  },

  {
    slug: "banyo-tadilati-siralama",
    title: "Banyo tadilatında doğru uygulama sırası",
    category: "Tadilat",
    published: "2026-02-04",
    updated: "2026-07-09",
    reading: 8,
    metaTitle: "Banyo Tadilatı Sıralaması | Adım Adım Doğru Uygulama",
    metaDesc:
      "Söküm, tesisat, su yalıtımı, seramik ve vitrifiye montajının doğru sırası. Su testi neden atlanmamalı ve tipik süreler ne kadar?",
    keywords: ["banyo tadilatı", "su yalıtımı", "banyo seramik", "tadilat sırası", "banyo yenileme süresi"],
    excerpt: "Banyoda en pahalı hata su yalıtımını atlamaktır. Doğru uygulama sırası, kritik kontrol noktaları ve gerçekçi süreler.",
    services: ["komple-ev-tadilati", "sihhi-tesisat", "anahtar-teslim-insaat"],
    intro:
      "Banyo, bir evin metrekare başına en pahalı ve en çok teknik detay barındıran mekânı. Sıra yanlış olduğunda doğru yapılmış işler bile bozulur.",
    body: [
      { h2: "Doğru sıra" },
      { ol: [
        "Söküm: vitrifiye, seramik ve gerekiyorsa şap kaldırılır",
        "Tesisat: temiz su ve atık su hatları yenilenir, elektrik hatları çekilir",
        "Basınç testi: su hattı kapanmadan önce test edilir",
        "Sıva ve şap: yüzeyler düzeltilir, kotlar ve eğimler tutturulur",
        "Su yalıtımı: zemin ve ıslak duvarlar yalıtılır",
        "Su testi: yalıtım 24 saat su altında bırakılarak doğrulanır",
        "Seramik: zemin ve duvar kaplaması yapılır",
        "Derz ve silikon: köşeler ve geçişler kapatılır",
        "Montaj: vitrifiye, batarya, duşakabin, ayna ve aksesuar",
        "Elektrik montajları: aydınlatma, priz, aspiratör",
        "Temizlik ve teslim",
      ] },
      { p: "Bu sıradaki her adım, bir sonrakinin ön koşulu. Atlanmaya en müsait ve atlandığında en pahalıya patlayan adım ise altıncı sıradaki su testi." },

      { h2: "Su yalıtımı: pazarlık edilemez kalem" },
      { p: "Seramik su geçirmez sanılır ama derz ve köşeler zamanla su alır. Yalıtım yapılmamış bir banyoda su, döşemeden alt kata geçer ve fark edildiğinde hem sizin hem alt komşunun tavanı zarar görmüştür." },
      { ul: [
        "Zeminin tamamı ve duvarların en az 20 cm yüksekliği yalıtılır",
        "Duş alanında yalıtım 180 cm yüksekliğe çıkarılır",
        "Köşelerde ve zemin–duvar birleşimlerinde takviye bandı kullanılır",
        "Boru geçişlerinde manşet uygulanır",
        "Süzgeç çevresi özel dikkat gerektirir, en sık sızan nokta burasıdır",
      ] },
      { quote: "Su testi bir gün kaybettirir; atlandığında kaybettirdiği tüm banyodur. Yalıtım sonrası alan 24 saat su altında bırakılır, alt kat kontrol edilir ve ancak sonra seramiğe geçilir." },

      { h2: "Gider yeri değişecekse" },
      { p: "Banyo tadilatında en çok tartışılan konu, klozet veya duş yerinin değiştirilmesi. Bu mümkündür ama eğimin korunması şartıyla. Yatay atık hattında metrede 2–3 cm eğim verilmelidir." },
      { p: "Gider yeri uzaklaştıkça bu eğimi tutturmak için ya zemin yükseltilmeli ya da hat farklı bir güzergâhtan götürülmelidir. Eğimden feda edilerek yapılan değişiklikler, gider çalışır görünse bile zamanla tortu birikimine ve tekrarlayan tıkanmaya yol açar." },

      { h2: "Elektrik tarafı" },
      { p: "Banyo, elektrik açısından da özel kurallar barındırır. Priz ve anahtarların konumu, koruma sınıfı ve eş potansiyel bağlantı bu mekânda ayrı önem taşır." },
      { ul: [
        "Banyo için ayrı hat ve tercihen ayrı kaçak akım koruması",
        "Priz, duş ve küvet sınırının dışında ve kapaklı tip",
        "Aydınlatma armatürleri uygun koruma sınıfında (IP44 ve üzeri)",
        "Aspiratör için ayrı hat veya aydınlatma ile birlikte kontrol",
        "Eş potansiyel bağlantı: metal borular ve küvet topraklamaya bağlanır",
      ] },
      { p: "Sondaki madde tadilatlarda en çok atlanan kalem. Metal borular plastikle değiştirildiğinde eski hattın sağladığı doğal süreklilik de kalmaz." },

      { h2: "Gerçekçi süre" },
      {
        table: {
          head: ["Aşama", "Süre", "Not"],
          rows: [
            ["Söküm", "1–2 gün", "Moloz tahliyesi dahil"],
            ["Tesisat", "2–3 gün", "Basınç testi dahil"],
            ["Sıva ve şap", "1–2 gün + kuruma", "Kuruma 3–7 gün, sıkıştırılamaz"],
            ["Su yalıtımı", "1 gün + test", "Test 24 saat"],
            ["Seramik", "2–4 gün", "Alan ve desen karmaşıklığına göre"],
            ["Derz ve montajlar", "2 gün", "Silikon kuruması beklenir"],
            ["Toplam", "12–20 iş günü", "Kuruma süreleri dahil"],
          ],
        },
      },
      { p: "Kuruma sürelerini kısaltmaya çalışmak, tadilatta yapılan en pahalı hata. Nemli şap üzerine döşenen seramik zamanla kabarır, kurumamış yalıtım üzerine yapılan uygulama işlevini yerine getirmez." },

      { h2: "Bütçe planlarken" },
      { p: "Banyo tadilatında maliyetin yaklaşık dağılımı şöyle: işçilik %35–45, seramik ve zemin %20–25, vitrifiye ve armatür %20–30, tesisat malzemesi ve yalıtım %10–15. Bu dağılım seçilen ürün sınıfına göre ciddi oranda değişir." },
      { p: "En yaygın bütçe hatası, gözle görülen kalemlere (seramik, batarya) ağırlık verip görünmeyenlerden (yalıtım, tesisat) kısmaktır. Ama aslında sorun her zaman görünmeyenden çıkıyor." },
    ],
    faqs: [
      { q: "Tadilat sırasında banyoyu kullanabilir miyim?", a: "Hayır, tek banyolu evlerde bu mümkün değildir. Onun için programı mümkün olduğunca sıkı tutuyor ve tek banyolu dairelerde geçici çözümleri (komşu, akraba, geçici duş düzeni) baştan planlamanızı öneriyoruz." },
      { q: "Eski seramiğin üzerine yeni seramik döşenebilir mi?", a: "Teknik olarak mümkündür ancak önerilmez. Altta kalan eski katman kontrol edilemez, zemin kotu yükselir ve en önemlisi su yalıtımı yenilenemez. Kısa vadeli çözüm arayanlar dışında tercih edilmemeli." },
    ],
    related: ["ev-su-tesisati-yenileme", "ev-tadilati-nereden-baslanir", "su-kacagi-erken-belirtileri"],
  },
];

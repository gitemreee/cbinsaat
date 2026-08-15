// Blog: tadilat, planlama ve iç mekân konulu yazılar.

export const tadilatPosts = [
  {
    slug: "daire-tadilati-is-sirasi",
    title: "Daire tadilatında doğru iş sırası nedir?",
    category: "Tadilat",
    published: "2025-09-10",
    updated: "2026-05-20",
    reading: 7,
    metaTitle: "Daire Tadilatında İş Sırası: Hangi İş Önce Yapılır?",
    metaDesc:
      "Söküm, tesisat, sıva, şap, alçı, seramik, boya, kapı, parke. Daire tadilatında doğru sıra ve sırayı bozmanın maliyeti.",
    keywords: ["daire tadilatı", "tadilat iş sırası", "tadilat programı", "komple tadilat", "tadilat aşamaları"],
    excerpt: "Tadilatta en pahalı hata malzeme seçimi değil, sıra hatası. Parkeyi boyadan önce döşemek ya da tesisatı sıvadan sonra çekmek işi baştan yaptırıyor.",
    services: ["daire-tadilati", "komple-ev-tadilati", "ince-insaat-isleri"],
    intro:
      "Bir daire tadilatında yapılan işlerin listesi hemen herkeste aynı. Sonucu belirleyen şey bu işlerin hangi sırayla yapıldığı. Sıra bozulduğunda bitmiş bir iş geri alınıyor ve fatura ikiye katlanıyor.",
    body: [
      { h2: "Doğru sıra" },
      { ol: [
        "Söküm ve moloz tahliyesi",
        "Duvar örme ve kırım işlerinin tamamlanması",
        "Elektrik ve su tesisatı güzergâhlarının açılması ve çekilmesi",
        "Tesisat testleri (basınç, yalıtım direnci)",
        "İç sıva",
        "Islak hacimlerde su yalıtımı ve test",
        "Şap ve zemin hazırlığı",
        "Alçı ve asma tavan",
        "Seramik ve fayans",
        "Boya astarı ve ilk kat",
        "Kapı, doğrama ve mutfak montajı",
        "Parke ve süpürgelik",
        "Son kat boya ve rötuş",
        "Elektrik ve tesisat montajları (armatür, priz, vitrifiye)",
        "Temizlik ve teslim",
      ] },
      { p: "Bu sıra her işte birebir aynı olmayabilir ama mantığı değişmiyor: kirli ve ıslak işler önce, hassas ve görünen işler sonra." },

      { h2: "Neden tesisat sıvadan önce?" },
      { p: "Kablo ve boru güzergâhları duvara açılan kanallara yerleştiriliyor, sonra sıva bu kanalları kapatıyor. Sıva bittikten sonra tesisat çekmek, yeni yapılmış sıvayı kırmak demek." },
      { p: "Tesisat testleri de bu aşamada yapılıyor. Kapanmadan önce su hattı basınç altına alınıyor, elektrik hatlarının yalıtım direnci ölçülüyor. Kapandıktan sonra bir sorun çıkarsa duvarı yeniden açmak gerekiyor." },

      { h2: "Neden parke boyadan sonra?" },
      { p: "Parke döşenmiş bir odada boya yapmak, zemini örtmeyi ve buna rağmen damla riskini kabul etmeyi gerektiriyor. Tersini yapmak, yani boyayı bitirip sonra parkeyi döşemek çok daha temiz." },
      { p: "Süpürgelik parkeden sonra takılıyor ve son kat boya rötuşuyla birleşim noktası kapatılıyor. Bu üçlü sıra bozulduğunda kenarlarda düzgün bir çizgi elde edilemiyor." },

      { h2: "Neden kapılar parkeden önce?" },
      { p: "Kapı kasası montajı sırasında zemine takoz konuyor, ölçü alınıyor ve gerekiyorsa kesim yapılıyor. Bu işlemler yeni döşenmiş parkeye zarar veriyor." },
      { p: "Ayrıca kapı altı boşluğu zemin kaplamasının kalınlığına göre ayarlanıyor. Kaplama kalınlığı belliyse kapı ona göre kesiliyor; belli değilse sonradan kapı kesmek gerekiyor." },

      { h2: "Kuruma süreleri programa yazılır" },
      { p: "Şap kuruması, su yalıtımı testi, alçı kuruması ve boya kat araları gerçek sürelerdir. Bunları programa yazmayan bir takvim baştan gerçekçi değildir." },
      { p: "Klasik şapta her santim için kabaca bir hafta hesaplanıyor. Bu süre kısaltıldığında parke kabarıyor, seramik boşluk veriyor. Aceleye gelen işlerde hızlı şap ürünleri kullanılabiliyor." },

      { h2: "Karar tarihleri" },
      { p: "Bazı malzemelerin temin süresi uzun: mutfak dolabı, özel doğrama, cam bölme, bazı seramikler. Bu kalemlerin seçim tarihini programa yazıyoruz." },
      { p: "\"Şu tarihe kadar seçilmezse teslim şu kadar kayar\" cümlesi baştan yazılı olduğunda, gecikmenin sebebi sonradan tartışılmıyor." },
    ],
    faqs: [
      { q: "Tadilat sırasında evde oturulur mu?", a: "Kısmi tadilatta oturulabilir; oda oda ilerlenir. Komple tadilatta söküm ve tesisat aşamasında toz ve su kesintisi nedeniyle boşaltmak daha sağlıklı." },
      { q: "3+1 daire tadilatı kaç gün sürer?", a: "Komple tadilatta tipik olarak 25–35 iş günü. Tesisat yenileme, mutfak üretim süresi ve şap kuruması bu süreyi etkiliyor." },
      { q: "Malzemeleri ben alabilir miyim?", a: "Alabilirsiniz. Metraj ve miktar listesini fire payıyla çıkarıp veriyoruz; teklifte işçilik ve sarf malzeme kalıyor." },
    ],
    related: ["tadilat-butcesi-nasil-planlanir", "tadilatta-sonradan-cikan-kalemler", "banyo-tadilatinda-su-yalitimi"],
  },

  {
    slug: "tadilat-butcesi-nasil-planlanir",
    title: "Tadilat bütçesi nasıl planlanır? Metraj mantığı",
    category: "Tadilat",
    published: "2025-09-24",
    updated: "2026-05-27",
    reading: 6,
    metaTitle: "Tadilat Bütçesi Nasıl Planlanır? Metraj ve Kalem Listesi",
    metaDesc:
      "Götürü rakam yerine metrajlı bütçe nasıl kurulur? Kalem listesi, yedek pay, kısılabilir ve kısılamaz kalemler.",
    keywords: ["tadilat bütçesi", "tadilat metrajı", "tadilat fiyatı", "tadilat maliyeti", "keşif ve metraj"],
    excerpt: "\"Yaklaşık şu kadar\" ile başlayan işlerin sonu neredeyse hep aynı. Metrajlı bütçe nasıl kurulur, nereden kısılır, nereden kısılmaz?",
    services: ["proje-uygulama-yonetimi", "daire-tadilati", "komple-ev-tadilati"],
    intro:
      "Tadilat bütçesinin aşılmasının bir numaralı sebebi kötü niyet değil, belirsizlik. Kalemler tek tek yazılmadığında herkes kafasında farklı bir kapsam taşıyor ve fark iş ortasında ortaya çıkıyor.",
    body: [
      { h2: "Metraj nedir, neden gerekli?" },
      { p: "Metraj, yapılacak her işin miktarını çıkarmak demek: kaç metrekare seramik, kaç metretül süpürgelik, kaç adet priz, kaç metrekare boya. Her kalemin miktarı ve birim fiyatı belli olduğunda toplam da belli oluyor." },
      { p: "Metrajsız verilen götürü rakam, kapsamı belirsiz bıraktığı için hem müşteriyi hem yükleniciyi riske sokuyor. İş ortasında \"bu dahil değildi\" cümlesinin kaynağı budur." },

      { h2: "Kalem listesi nasıl olmalı?" },
      { ul: [
        "Söküm ve moloz tahliyesi (m³ veya götürü, ayrı satır)",
        "Elektrik: nokta sayısı, pano, hat metrajı",
        "Su: nokta sayısı, boru metrajı, gider hatları",
        "Sıva ve alçı: m²",
        "Şap: m² ve kalınlık",
        "Seramik: zemin m², duvar m², malzeme sınıfı",
        "Boya: m², kat sayısı, hazırlık adımları",
        "Kapı ve doğrama: adet ve ölçü",
        "Mutfak ve banyo: dolap metretülü, tezgâh, vitrifiye",
        "Temizlik ve teslim",
      ] },
      { p: "Her satırda malzeme ve işçiliğin ayrı gösterilmesi, kıyaslama yapmanızı da kolaylaştırıyor." },

      { h2: "Yedek pay ne kadar olmalı?" },
      { p: "Söküm sonrası çıkabilecek sürprizler için bütçenin bir kısmını kenarda tutmak gerekiyor. Yeni yapılarda bu pay daha küçük, 30 yaş üstü binalarda daha büyük olmalı." },
      { p: "Bu payı önceden konuşmak, sürpriz çıktığında işin durmasını önlüyor. Kullanılmazsa cebinizde kalıyor; kullanılırsa hazırlıksız yakalanmıyorsunuz." },

      { h2: "Kısılamaz kalemler" },
      { p: "Su yalıtımı, elektrik tesisatı, tesisat boruları ve zemin hazırlığı; bunlar sonradan değiştirilemeyen ve kısıldığında geri dönüşü pahalı olan kalemler." },
      { p: "Bir banyoda su yalıtımından kısmak, birkaç yıl sonra alt komşuyla birlikte iki daireyi ilgilendiren bir işe dönüşüyor. Bu kalemde tasarruf gerçek bir tasarruf değil." },

      { h2: "Kısılabilir kalemler" },
      { p: "Mutfak dolabı kapak sınıfı, iç kapı modeli, seramik markası, aydınlatma armatürleri ve bahçe düzenlemesi; bunlar sonradan değiştirilebilen ve kaliteden ödün vermeden aşağı çekilebilen kalemler." },
      { p: "İkinci etaba bırakılabilecekleri baştan işaretlemek, bütçe sıkıştığında hızlı karar vermeyi sağlıyor." },

      { h2: "Ödeme planı" },
      { p: "Hakediş esaslı ödeme, yani tamamlanan iş kalemine göre kademeli ödeme, iki taraf için de en sağlıklısı. Peşin toplu ödeme, işin ilerleme hızını sizden bağımsız hâle getiriyor." },
      { p: "Son ödemenin, birlikte dolaşılıp eksik listesi kapatıldıktan sonra yapılması gerekiyor. Bu madde sözleşmede yazılı olmalı." },
    ],
    faqs: [
      { q: "Metraj çıkarmak ücretli mi?", a: "Merkez ilçelerde keşif ve metraj ücretsiz. Uzak ilçelerde yol bedeli oluşabiliyor; işi biz yaparsak toplam tutardan düşüyoruz." },
      { q: "Teklifler arasındaki fark neden bu kadar büyük?", a: "Genelde kapsam farkından. Hazırlık adımları, malzeme sınıfı ve dahil olmayan kalemler karşılaştırıldığında fark açıklanıyor. Teklifleri kalem kalem yan yana koymak en sağlıklısı." },
      { q: "Fiyat iş sırasında değişir mi?", a: "Sözleşmedeki kalemler sabit. Değişiklik iki durumda oluyor: siz fikir değiştirirseniz ya da söküm sonrası gizli bir sorun çıkarsa. İkisinde de önce yazılı bildirip onay alıyoruz." },
    ],
    related: ["daire-tadilati-is-sirasi", "tadilatta-sonradan-cikan-kalemler", "kiralik-daire-hazirlama-rehberi"],
  },

  {
    slug: "tadilatta-sonradan-cikan-kalemler",
    title: "Söküm sonrası en sık çıkan 8 sürpriz",
    category: "Tadilat",
    published: "2025-10-15",
    updated: "2026-06-02",
    reading: 6,
    metaTitle: "Tadilatta Söküm Sonrası Çıkan Sürprizler",
    metaDesc:
      "Alüminyum kablo, galvaniz boru, yalıtımsız banyo, çürük kalıp… Söküm sonrası en sık çıkan sekiz sürpriz ve her birinin maliyete etkisi.",
    keywords: ["tadilat sürprizleri", "alüminyum kablo", "galvaniz boru", "su yalıtımı yok", "tadilat riski"],
    excerpt: "Eski dairelerde duvar açılınca çıkan sekiz şey. Hangisi mutlaka değişmeli, hangisi ertelenebilir?",
    services: ["daire-tadilati", "elektrik-tesisati", "sihhi-tesisat", "eski-ev-tadilati"],
    intro:
      "Tadilat teklifleri söküm öncesi hazırlanır; duvarın içi ise ancak açılınca görünür. Aşağıdaki sekiz kalem, 25 yaş üstü dairelerde en sık karşımıza çıkanlar. Baştan bilirseniz sürpriz olmaktan çıkıyorlar.",
    body: [
      { h2: "1. Alüminyum iletkenli kablo" },
      { p: "Kesildiğinde bakır sarısı değil gümüş rengi görünen iletken alüminyumdur. Zamanla oksitlenip bağlantı noktalarında ısınmaya yol açar." },
      { p: "Bu, ertelenemeyecek tek kalem. Tadilat kapsamına mutlaka alınması gerekiyor, çünkü duvar bir daha bu kadar kolay açılmayacak." },

      { h2: "2. Galvaniz su borusu" },
      { p: "İç yüzeyi zamanla pas ve kireçle daralır; su basıncı düşer, suyun rengi bozulur. Dışarıdan sağlam görünse de iç kesiti daralmıştır." },
      { p: "Boru değişimi tadilatla birlikte yapıldığında ek maliyeti sınırlı kalıyor. Tadilat bittikten sonra yapmak, yeni seramiği kırmak demek." },

      { h2: "3. Banyoda su yalıtımı yok" },
      { p: "1990 öncesi yapılmış birçok banyoda seramik doğrudan şapın üstüne döşenmiş, arada yalıtım katmanı yok. Su, derz ve köşelerden geçip alt kata iniyor." },
      { p: "Söküm sonrası bu görülürse yalıtım mutlaka yapılmalı. Alt komşuda leke varsa iş sadece sizin daireyi ilgilendirmiyor." },

      { h2: "4. Islanmış ve çürümüş duvar dibi" },
      { p: "Uzun süredir sızan bir hattın altındaki sıva ve duvar dibi çürümüş olabiliyor. Üstüne yapılan yeni sıva ve boya kısa sürede kabarıyor." },
      { p: "Doğru çözüm çürüyen kısmı sökmek, kaynağı gidermek ve kurumasını beklemek. Bu bekleme programı uzatıyor ama atlanamıyor." },

      { h2: "5. Buşonlu pano ve topraklamasız hat" },
      { p: "Panoda seramik sigorta varsa kaçak akım koruması yok demektir. Prizlerde toprak fişinin görünmesi arkada gerçekten hat olduğu anlamına gelmiyor." },
      { p: "Pano değişimi ve topraklama, tadilat sırasında yapılabilecek en yüksek getirili güvenlik adımı." },

      { h2: "6. Zemin terazisi bozuk" },
      { p: "Eski dairelerde zemin kotu odadan odaya birkaç santim değişebiliyor. Bu, parke ve seramik döşemeden önce tesviye gerektiriyor." },
      { p: "Tesviye kalemi ilk teklifte görünmeyebiliyor çünkü ölçüm ancak eski kaplama söküldükten sonra yapılabiliyor." },

      { h2: "7. Kapı boşlukları standart dışı" },
      { p: "Eski yapılarda kapı boşlukları bugünün standart ölçülerine uymayabiliyor. Böyle bir durumda ya özel ölçü kapı ya da boşluk düzeltmesi gerekiyor." },
      { p: "Özel ölçü kapı hem daha pahalı hem temin süresi uzun; programa erken yazılması gereken bir kalem." },

      { h2: "8. Gider hattı eğimi yetersiz" },
      { p: "Banyo ve mutfakta gider hattının eğimi yetersizse tıkanma tekrarlıyor. Söküm sırasında bu ölçülüp düzeltilmezse yeni banyoda aynı sorun devam ediyor." },
      { p: "Eğim düzeltmesi bazen döşeme kotunu değiştirmeyi gerektiriyor; erken fark edilirse çözümü kolay." },
    ],
    faqs: [
      { q: "Bu sürprizler için baştan pay ayırmalı mıyım?", a: "Evet. 30 yaş üstü binalarda bütçenin bir kısmını kenarda tutmanızı öneriyoruz. Kullanılmazsa cebinizde kalıyor." },
      { q: "Sürpriz çıkınca fiyat nasıl belirleniyor?", a: "İş durduruluyor, durum fotoğraflanıyor, ek kalem metrajlı olarak yazılı bildiriliyor. Onayınız olmadan devam edilmiyor." },
      { q: "Hepsini yaptırmak zorunda mıyım?", a: "Hayır. Alüminyum kablo ve su yalıtımı gibi güvenlik ve hasar riski taşıyanları öneriyoruz; diğerleri ertelenebiliyor. Hangisinin hangi grupta olduğunu yazılı söylüyoruz." },
    ],
    related: ["daire-tadilati-is-sirasi", "eski-ev-tadilatinda-oncelik", "banyo-tadilatinda-su-yalitimi"],
  },

  {
    slug: "banyo-tadilatinda-su-yalitimi",
    title: "Banyo tadilatında en pahalı hata: su yalıtımını atlamak",
    category: "Tadilat",
    published: "2025-11-12",
    updated: "2026-05-08",
    reading: 6,
    metaTitle: "Banyo Su Yalıtımı Nasıl Yapılır? Adım Adım",
    metaDesc:
      "Seramik su geçirir. Banyoda su yalıtımı nerede, nasıl uygulanır; 24 saat su testi neden yapılır ve atlanırsa ne olur?",
    keywords: ["banyo su yalıtımı", "banyo tadilatı", "su testi", "alt kata su iniyor", "sürme yalıtım"],
    excerpt: "Seramiğin su geçirmediği sanılıyor ama geçiriyor. Asıl bariyer altındaki yalıtım katmanı; atlandığında fatura iki daireye çıkıyor.",
    services: ["banyo-tadilati", "cati-izolasyonu", "seramik-fayans"],
    intro:
      "Banyo tadilatında görünen kısım seramik ve vitrifiye. Ama işin kalitesini belirleyen katman görünmüyor: seramiğin altındaki su yalıtımı. Atlandığında sonuç birkaç yıl sonra alt komşunun tavanında ortaya çıkıyor.",
    body: [
      { h2: "Seramik su geçirir mi?" },
      { p: "Seramiğin kendisi geçirmez ama derzler ve köşe birleşimleri geçirir. Zamanla derz gözenekli hâle gelir, silikon yıpranır ve su altındaki katmana ulaşır." },
      { p: "Altta yalıtım varsa su orada durur ve gidere yönelir. Yoksa şapa geçer, şap doyar ve alt kata iner." },

      { h2: "Yalıtım nerelere uygulanır?" },
      { ul: [
        "Banyo zemininin tamamı",
        "Duvarlarda zeminden en az 20–30 cm yukarı",
        "Duş alanında duvarda 180–200 cm yüksekliğe kadar",
        "Küvet ve duş teknesi çevresi",
        "Gider ve süzgeç çevresi (özel manşet ile)",
        "Zemin-duvar köşeleri (takviye bant ile)",
      ] },
      { p: "En kritik yer köşeler. Su neredeyse hep yüzeyin ortasından değil, birleşimlerden giriyor." },

      { h2: "Uygulama sırası" },
      { p: "Söküm ve zemin hazırlığından sonra tesisat çekiliyor ve basınç testi yapılıyor. Ardından eğim betonu dökülüyor; su gidere yönelmeli." },
      { p: "Eğim kuruduktan sonra sürme yalıtım iki kat uygulanıyor, köşelere takviye bant konuyor. Kuruma süresi beklendikten sonra su testine geçiliyor." },

      { h2: "24 saat su testi" },
      { p: "Gider tıkanıp alan suyla dolduruluyor ve 24 saat bekleniyor. Alt kat ve komşu duvarlar kontrol ediliyor." },
      { p: "Test geçmeden seramiğe başlanmıyor. Bu bir gün, sorunun yıllar sonra ortaya çıkmasını önlüyor. Testin fotoğrafını dosyaya koyup size veriyoruz." },

      { h2: "Sadece seramik değiştirmek yeter mi?" },
      { p: "Alt kata sızıntı varsa yetmez. Seramiği yenileyip yalıtımı atlamak, sorunu görünmez hâle getirip birkaç yıl ertelemek demek." },
      { p: "Seramiği nasıl olsa söküyorsanız yalıtımın ek maliyeti sınırlı. Ayrı bir iş olarak yapmak ise seramiği ikinci kez söktürüyor." },

      { h2: "Gider ve eğim" },
      { p: "Eğimi yanlış verilen banyoda su köşede birikiyor ve yalıtımın zayıf noktasını arıyor. Süzgecin en alçak noktada olması gerekiyor." },
      { p: "Duş alanında lineer süzgeç kullanılıyorsa eğim tek yöne veriliyor; klasik süzgeçte dört yönden merkeze doğru. İkisinin uygulaması farklı." },
    ],
    faqs: [
      { q: "Banyo tadilatı kaç gün sürer?", a: "Söküm, tesisat, yalıtım, su testi ve seramikle birlikte 6–10 iş günü. Su testi ve kuruma süreleri bu sürenin içinde." },
      { q: "Tek banyolu evde ne yapacağız?", a: "İş programını buna göre kuruyoruz; klozet ve lavabo mümkün olan en son güne kadar kullanılabilir hâlde bırakılıyor, kapalı kalınan süre en aza indiriliyor." },
      { q: "Alt komşumda leke var, sorumluluk kimde?", a: "Kaynağın tespiti önce yapılmalı. Sızıntı sizin banyonuzdan geliyorsa onarım size ait; kolon hattından geliyorsa bina ortak gideri konusuna giriyor." },
    ],
    related: ["tadilatta-sonradan-cikan-kalemler", "su-kacagi-nasil-bulunur-blog", "seramik-mi-parke-mi"],
  },

  {
    slug: "mutfak-tadilatinda-plan",
    title: "Mutfak tadilatında ölçüden montaja: doğru sıra",
    category: "Tadilat",
    published: "2025-12-10",
    updated: "2026-05-22",
    reading: 6,
    metaTitle: "Mutfak Tadilatı: Ölçü, Üretim ve Montaj Sırası",
    metaDesc:
      "Mutfak tadilatında elektrik ve su altyapısı, dolap ölçüsü, tezgâh şablonu ve ankastre montajı hangi sırayla yapılır?",
    keywords: ["mutfak tadilatı", "mutfak dolabı ölçüsü", "ankastre montaj", "tezgah şablonu", "mutfak yenileme"],
    excerpt: "Mutfakta en sık yapılan hata dolabı sipariş ettikten sonra elektrik ve suyu düşünmek. Doğru sıra ne, karar tarihleri neler?",
    services: ["mutfak-tadilati", "mermer-granit", "elektrik-tesisati"],
    intro:
      "Mutfak, evin en çok altyapı barındıran odası. Su, gider, elektrik, ankastre besleme ve havalandırma; hepsi dolap yerleşimine bağlı. Bunun için mutfakta karar sırası, uygulama sırasından bile önemli.",
    body: [
      { h2: "Önce yerleşim, sonra altyapı" },
      { p: "Eviye nereye, ocak nereye, bulaşık makinesi nereye; bunlar netleşmeden su ve elektrik güzergâhı çekilemiyor. Yerleşim değiştiğinde tesisat da değişiyor." },
      { p: "Yerleşim kararını dolap firmasının ön çizimiyle birlikte veriyoruz. Çizim netleşince altyapı noktalarını işaretleyip tesisatı ona göre çekiyoruz." },

      { h2: "Ankastre cihazları erken seçin" },
      { p: "Ankastre fırın, ocak, davlumbaz ve bulaşık makinesinin ölçüleri ve besleme ihtiyaçları markaya göre değişiyor. Dolap üretimi bu ölçülere göre yapılıyor." },
      { p: "Cihazları dolap siparişinden önce seçmek gerekiyor. Sonradan değiştirilen bir cihaz, dolapta kesim ya da yeniden üretim demek." },

      { h2: "Elektrik: ayrı hatlar" },
      { p: "Fırın, bulaşık makinesi ve ankastre ocak yüksek çekişli cihazlar; panodan ayrı hat çekilmesi gerekiyor. Aynı hatta bağlandıklarında sigorta atmaya başlıyor." },
      { p: "Tezgâh üstü prizlerin sayısı ve yeri de yerleşimle birlikte belirleniyor. Sonradan priz eklemek, fayans kırmak demek." },

      { h2: "Dolap ölçüsü ve üretim süresi" },
      { p: "Dolap ölçüsü sıva ve fayans bittikten sonra, yerinde alınıyor. Kâğıt üstü ölçüyle sipariş edilen dolaplar çoğu mutfakta boşluk bırakıyor." },
      { p: "Üretim süresi tipik olarak 12–18 gün. Programda bu süre görünmüyorsa takvim gerçekçi değil demektir." },

      { h2: "Tezgâh şablonu" },
      { p: "Tezgâh, dolaplar monte edildikten sonra yerinde şablonla ölçülüyor. Duvarlar tam dik olmadığı için bu adım atlanamıyor." },
      { p: "Şablondan kesime ve montaja kadar 3–5 gün geçiyor. Bu sürede eviye ve ocak takılamıyor; programa yazılması gereken bir bekleme." },

      { h2: "Havalandırma ve davlumbaz" },
      { p: "Davlumbaz bacaya bağlanacaksa çıkış yolunun mümkün olduğunu keşifte doğrulamak gerekiyor. Bina ve komşuluk kuralları burada belirleyici." },
      { p: "Karbon filtreli (bacasız) modeller alternatif ama koku ve nem tahliyesi konusunda bacalı sistem kadar etkili değil. Kararı baştan vermek dolap planını da etkiliyor." },
    ],
    faqs: [
      { q: "Mutfak tadilatı kaç gün sürer?", a: "Söküm, altyapı, fayans ve boya 8–12 iş günü. Dolap üretimi 12–18 gün, tezgâh 3–5 gün. Toplamda 4–6 hafta gerçekçi bir aralık." },
      { q: "Mutfağı kullanamayacak mıyım?", a: "Söküm sonrası mutfak birkaç hafta kullanılamıyor. Geçici bir eviye ve buzdolabı bağlantısı bırakabiliyoruz; bunu programda planlıyoruz." },
      { q: "Dolabı ben aldım, montajını yapar mısınız?", a: "Yaparız. Ölçüyü bizim almamızı öneriyoruz; ölçü kaynaklı hatanın sorumluluğu böylece bizde oluyor." },
    ],
    related: ["daire-tadilati-is-sirasi", "tadilat-butcesi-nasil-planlanir", "granit-mi-mermer-mi-tezgah"],
  },

  {
    slug: "kiralik-daire-hazirlama-rehberi",
    title: "Kiralık daireyi hazırlarken nereye para harcamalı?",
    category: "Tadilat",
    published: "2026-01-07",
    updated: "2026-06-03",
    reading: 5,
    metaTitle: "Kiralık Daire Hazırlama: Nereye Harcamalı, Nereden Kısmalı?",
    metaDesc:
      "Kiralık daire yenilemede getirisi en yüksek kalemler ve gereksiz harcamalar. Boya, mutfak, banyo, zemin ve elektrik önceliklendirmesi.",
    keywords: ["kiralık daire yenileme", "kiralık ev hazırlama", "kira getirisi", "daire boyama", "kiralık daire tadilatı"],
    excerpt: "Kiralık dairede her yatırım kiraya yansımıyor. Hangi kalem hızlı kiraya çıkarıyor, hangisi sadece maliyet?",
    services: ["kiralik-ev-yenileme", "boya-badana", "parke-laminat"],
    intro:
      "Kiralık daire yenilemesinde amaç en güzel daireyi yapmak değil; en kısa sürede, makul maliyetle kiraya verilebilir hâle getirmek. Bu ikisi çoğu zaman farklı işler.",
    body: [
      { h2: "Getirisi en yüksek üç kalem" },
      { p: "Birincisi boya. Temiz ve aydınlık bir daire, ilan fotoğraflarında ve ilk izlenimde en çok fark yaratan şey. Maliyeti düşük, etkisi yüksek." },
      { p: "İkincisi banyo ve mutfak temizliği: derz yenileme, silikon değişimi, batarya ve duş sistemi değişimi. Üçüncüsü aydınlatma; eski armatürlerin yenilenmesi daireyi olduğundan yeni gösteriyor." },

      { h2: "Zemin: değiştirmek mi, onarmak mı?" },
      { p: "Zemin sağlamsa temizlik ve cila yeterli olabiliyor. Yıpranmış laminatın değişimi ise kiraya doğrudan yansıyan kalemlerden." },
      { p: "Kiralıkta orta segment laminat mantıklı bir tercih. Üst segment ürün kiraya aynı oranda yansımıyor, yıpranma riski ise aynı." },

      { h2: "Elektrik: güvenlik kalemi" },
      { p: "Buşonlu pano, topraklamasız hat ve kararmış prizler; bunlar estetik değil güvenlik konusu. Kiracının kullanacağı bir dairede bu kalemler ertelenmemeli." },
      { p: "Pano değişimi yarım günlük bir iş ve kaçak akım koruması sağlıyor. Kiraya yansımasa bile yaptırılması gereken bir kalem." },

      { h2: "Gereksiz harcamalar" },
      { p: "Üst segment mutfak dolabı, pahalı armatür ve dekoratif duvar uygulamaları kiraya çoğu zaman yansımıyor. Kiracı bunları ödemeye istekli olmuyor." },
      { p: "Aynı bütçeyi boya, zemin ve ıslak hacim temizliğine ayırmak daha hızlı sonuç veriyor." },

      { h2: "Süre planı" },
      { p: "Boş kalan her ay doğrudan kayıp. Dolayısıyla kiralık daire işlerinde süre, maliyet kadar önemli." },
      { p: "Tipik bir kiralık hazırlığı 5–8 iş gününde bitiyor: boya, ıslak hacim temizliği, küçük onarımlar, aydınlatma. Zemin değişimi 2 gün ekliyor." },

      { h2: "Kiracı çıkışında kontrol listesi" },
      { ul: [
        "Musluk ve sifonlarda damlama var mı",
        "Prizler ve anahtarlar sağlam mı, kararmış mı",
        "Duvarlarda darbe ve leke, tavanda nem izi",
        "Kapı kilitleri ve menteşeler çalışıyor mu",
        "Kombi çalışıyor mu, basınç normal mi",
        "Gider hatları rahat çekiyor mu",
      ] },
    ],
    faqs: [
      { q: "Kiralık daire hazırlığı ne kadar sürer?", a: "Boya ve küçük onarımlarla 5–8 iş günü. Mutfak veya banyo yenileniyorsa 3–4 haftaya çıkıyor." },
      { q: "Boya rengi ne olmalı?", a: "Kırık beyaz ve açık gri tonlar en geniş kitleye hitap ediyor ve daireyi büyük gösteriyor. Koyu ve karakterli renkler kiralıkta kitleyi daraltıyor." },
      { q: "Eşyalı mı vermeli?", a: "Bu bir yatırım kararı; bölgeye ve hedef kitleye göre değişiyor. Eşyalı verecekseniz beyaz eşya ve mutfak dolabına ayrılan bütçe artıyor." },
    ],
    related: ["tadilat-butcesi-nasil-planlanir", "satis-oncesi-ev-yenileme-rehberi", "daire-tadilati-is-sirasi"],
  },

  {
    slug: "satis-oncesi-ev-yenileme-rehberi",
    title: "Satış öncesi ev yenileme: hangi işler değere yansır?",
    category: "Tadilat",
    published: "2026-01-21",
    updated: "2026-06-06",
    reading: 5,
    metaTitle: "Satış Öncesi Ev Yenileme: Değere Yansıyan İşler",
    metaDesc:
      "Satıştan önce yapılan hangi iş fiyata yansır, hangisi yansımaz? Boya, mutfak, banyo, zemin ve ilk izlenim üzerinden öncelik sırası.",
    keywords: ["satış öncesi tadilat", "ev satmadan önce yenileme", "daire değeri artırma", "ev boyama satış"],
    excerpt: "Satıştan önce her yenileme fiyata yansımıyor. Alıcının gözünün ilk gittiği yerler ve harcamanın geri döndüğü kalemler.",
    services: ["satis-oncesi-ev-yenileme", "boya-badana", "mutfak-tadilati"],
    intro:
      "Satış öncesi yenilemede amaç daireyi yeni göstermek değil, alıcının kafasındaki \"burada daha ne masraf var\" sorusunu ortadan kaldırmak. Alıcı gördüğü her eksiği pazarlık payına çeviriyor.",
    body: [
      { h2: "Alıcının gözü nereye gider?" },
      { p: "Kapıdan girişte antre ve salon, sonra mutfak ve banyo. Bu dört alan izlenimin neredeyse tamamını belirliyor. Yatak odaları çoğu zaman hızlı geçiliyor." },
      { p: "Bu yüzden bütçe sınırlıysa öncelik bu dört alana verilmeli. Yatak odasında boya yeterli oluyor." },

      { h2: "Boya: en yüksek getirili kalem" },
      { p: "Temiz ve nötr renkli bir daire, fotoğraflarda ve gezmede gözle görülür fark yaratıyor. Maliyeti diğer kalemlere göre düşük." },
      { p: "Koyu ve kişisel renkler alıcının kafasında \"boyamam gerekecek\" hesabı yaratıyor. Kırık beyaz ve açık gri en güvenli tercihler." },

      { h2: "Banyo ve mutfak: yenileme mi, temizleme mi?" },
      { p: "Komple yenileme her zaman geri dönmüyor. Çoğu dairede derz yenileme, silikon değişimi, batarya ve duş sistemi değişimi, dolap kapağı yenileme aynı etkiyi çok daha ucuza veriyor." },
      { p: "Ancak vitrifiye kırıksa, dolap dağılmışsa ya da su kaçağı izi varsa yenileme gerekiyor; alıcı bu kalemleri pazarlıkta fazlasıyla geri istiyor." },

      { h2: "Görünen kusurları kapatın" },
      { ul: [
        "Tavandaki nem lekeleri (önce kaynağı giderilmeli)",
        "Kararmış priz ve anahtarlar",
        "Kapanmayan kapılar, gıcırdayan menteşeler",
        "Damlayan musluklar",
        "Kırık fayans ve dökülmüş derz",
        "Yanmayan ampuller ve eksik armatürler",
      ] },
      { p: "Bunların her biri küçük iş ama alıcının zihninde \"bakımsız daire\" başlığı altında toplanıyor." },

      { h2: "Yapmayın: aşırı kişiselleştirme" },
      { p: "Özel tasarım duvar kaplaması, renkli mutfak dolabı ve dekoratif tavan uygulamaları alıcı kitlesini daraltıyor. Satış öncesi tercih nötr olmalı." },
      { p: "Aynı bütçeyi temizlik, boya ve küçük onarımlara ayırmak daha geniş bir alıcı kitlesine hitap ediyor." },

      { h2: "Belgeleri hazır edin" },
      { p: "Yakın zamanda yapılmış tesisat, pano veya çatı işiniz varsa faturasını ve fotoğraflarını hazır bulundurun. Bu, alıcının en çok merak ettiği kalemleri baştan kapatıyor." },
      { p: "Yaptığımız işlerde kapanan hatların fotoğraflarını ve test kayıtlarını size veriyoruz; satışta bu dosya işe yarıyor." },
    ],
    faqs: [
      { q: "Satış öncesi yenileme kendini amorti eder mi?", a: "Boya ve küçük onarımlar genelde eder. Komple mutfak veya banyo yenilemesi çoğu dairede tam olarak geri dönmüyor; kararı pazarlık gücü açısından değerlendirmek gerekiyor." },
      { q: "Ne kadar sürer?", a: "Boya ve onarım paketi 5–8 iş günü. Mutfak veya banyo devreye girerse 3–5 haftaya çıkıyor." },
      { q: "Boşken mi yapmalı?", a: "Boş dairede iş daha hızlı ve temiz ilerliyor. Eşyalı dairede de yapılabiliyor, süre uzuyor." },
    ],
    related: ["kiralik-daire-hazirlama-rehberi", "tadilat-butcesi-nasil-planlanir", "daire-tadilati-is-sirasi"],
  },

  {
    slug: "eski-ev-tadilatinda-oncelik",
    title: "Eski ev tadilatında öncelik sırası nasıl kurulur?",
    category: "Tadilat",
    published: "2026-02-04",
    updated: "2026-06-09",
    reading: 6,
    metaTitle: "Eski Ev Tadilatı: Öncelik Sırası ve Etaplama",
    metaDesc:
      "Bütçe sınırlıysa eski evde hangi iş önce yapılmalı? Tesisat, yalıtım, ıslak hacim ve kozmetik işlerin doğru sıralaması.",
    keywords: ["eski ev tadilatı", "eski daire yenileme", "tadilat önceliği", "etaplı tadilat"],
    excerpt: "Eski evde her şeyi aynı anda yapmak zorunda değilsiniz. Ama sıra yanlış kurulursa ikinci etap birincisini bozuyor.",
    services: ["eski-ev-tadilati", "elektrik-tesisati", "bina-tesisat-yenileme"],
    intro:
      "Eski evlerde bütçe genelde işin tamamına yetmiyor ve tadilat etaplara bölünüyor. Bu tamamen makul; yanlış olan etapları rastgele sıralamak. Sıra, sonradan sökülmeyecek şekilde kurulmalı.",
    body: [
      { h2: "Kural: içeriden dışarıya, altyapıdan yüzeye" },
      { p: "Duvarın içinde kalacak işler önce yapılmalı. Tesisat, yalıtım ve zemin hazırlığı; bunlar bir kez kapandıktan sonra ancak kırarak ulaşılabilen kalemler." },
      { p: "Boya, kapı, armatür gibi yüzey işleri her zaman sonraya bırakılabilir. Tersi sıralamada ikinci etap birincisini bozuyor." },

      { h2: "Etap 1: güvenlik ve altyapı" },
      { ul: [
        "Elektrik panosu, kaçak akım koruması ve topraklama",
        "Alüminyum iletkenli kabloların değişimi",
        "Su ve gider hatlarında bilinen sorunların giderilmesi",
        "Islak hacimlerde su yalıtımı",
        "Çatı ve teras sızıntılarının durdurulması",
      ] },
      { p: "Bu etap görüntüyü değiştirmiyor ama sonraki her etabın üzerine kurulacağı zemini oluşturuyor." },

      { h2: "Etap 2: ısı ve konfor" },
      { p: "Pencere değişimi, dış cephe yalıtımı ve ısıtma sistemi. Bunlar hem konforu hem işletme maliyetini doğrudan etkiliyor." },
      { p: "Pencere değişimi cephe yalıtımından önce yapılırsa denizlik ve kenar detayları iki kez ele alınıyor. İkisi aynı etapta planlanmalı." },

      { h2: "Etap 3: ıslak hacimler" },
      { p: "Banyo ve mutfak, hem maliyeti hem etkisi yüksek kalemler. Altyapı etabı tamamlandıysa bu etap sorunsuz ilerliyor." },
      { p: "Tek banyolu evlerde bu etabın ne zaman yapılacağını yaşam düzeninize göre planlıyoruz." },

      { h2: "Etap 4: yüzey ve montaj" },
      { p: "Zemin kaplaması, boya, kapı ve doğrama, aydınlatma ve montajlar. Bu etap en görünür olan ama en sona bırakılması gereken kısım." },
      { p: "Bu etaba geldiğinizde artık duvar açılmayacağı için işler hızlı ve temiz ilerliyor." },

      { h2: "Etaplar arasında ne kadar beklenebilir?" },
      { p: "Teknik bir zorunluluk yok; bütçenize göre aylar hatta yıllar olabilir. Yalnız her etabın sonunda ortamın yaşanabilir hâlde bırakılması gerekiyor." },
      { p: "Etap planını baştan yazılı çıkarıyoruz. Böylece ikinci etaba geldiğimizde birincide neyin nerede bırakıldığı belli oluyor; güzergâh fotoğrafları da bu sebeple önemli." },
    ],
    faqs: [
      { q: "Etaplı tadilat daha mı pahalı?", a: "Toplamda biraz daha pahalı oluyor; her etapta hazırlık, koruma ve temizlik tekrarlanıyor. Buna karşılık bütçeyi zamana yayıyor." },
      { q: "Hangi etabı atlarsam sorun olur?", a: "Birinci etap atlanamaz. Güvenlik ve altyapı işleri yapılmadan yüzey işlerine geçmek, birkaç yıl sonra yeni yapılanı sökmek demek." },
      { q: "Oturarak yapılabilir mi?", a: "Etaplı ilerlendiğinde büyük ölçüde evet. Islak hacim etabında kısa süreli zorluk oluyor; onu programla yönetiyoruz." },
    ],
    related: ["tadilatta-sonradan-cikan-kalemler", "daire-tadilati-is-sirasi", "mantolama-ne-kazandirir"],
  },

  {
    slug: "apartman-ortak-alan-yenileme",
    title: "Apartman ortak alan yenilemesi: karardan teslime",
    category: "Tadilat",
    published: "2026-02-18",
    updated: "2026-06-07",
    reading: 6,
    metaTitle: "Apartman Ortak Alan Yenileme: Süreç ve Maliyet Paylaşımı",
    metaDesc:
      "Merdiven, giriş, aydınlatma, boya ve ortak alan elektriği. Apartman yönetimi için karar süreci, teklif karşılaştırma ve uygulama planı.",
    keywords: ["apartman ortak alan tadilatı", "merdiven boyama", "apartman girişi yenileme", "ortak alan aydınlatma"],
    excerpt: "Apartman işlerinde teknik kısım kolay; zor olan karar süreci. Yönetim için teklif karşılaştırma ve uygulama planı rehberi.",
    services: ["apartman-ortak-alan-tadilati", "dis-cephe-boya", "elektrik-tesisati"],
    intro:
      "Apartman ortak alan işlerinde uygulama genelde birkaç haftada bitiyor. Asıl zaman karar aşamasında geçiyor: teklif toplama, kat malikleri toplantısı, ödeme planı. Bu aşamayı düzgün kurmak işin yarısı.",
    body: [
      { h2: "Kapsamı önce netleştirin" },
      { p: "\"Merdivenleri yenileyelim\" cümlesi herkesin kafasında farklı bir iş anlamına geliyor. Kapsamı madde madde yazmadan teklif toplamak, karşılaştırılamayan teklifler üretiyor." },
      { ul: [
        "Merdiven ve sahanlık boyası (kaç kat, hangi yükseklikten)",
        "Korkuluk zımpara ve boya",
        "Merdiven basamağı onarımı veya kaplama",
        "Kat aydınlatması ve otomatik/sensörlü kontrol",
        "Giriş kapısı, diafon ve posta kutuları",
        "Giriş cephesi düzenlemesi",
        "Ortak alan elektrik panosu ve sayaç bölümü",
      ] },

      { h2: "Teklifleri karşılaştırırken" },
      { p: "Teklifler arasındaki fark neredeyse hep kapsam farkından geliyor. Hazırlık adımları (zımpara, macun, astar), boya sınıfı ve kat sayısı yazılı değilse kıyaslama mümkün değil." },
      { p: "Kat maliki başına düşen tutarı da hesaplatın. Toplam rakam büyük görünse de daire başına düşen çoğu zaman kabul edilebilir çıkıyor." },

      { h2: "Aydınlatma: en hızlı geri dönen kalem" },
      { p: "Ortak alanlarda sürekli yanan eski armatürlerin sensörlü LED ile değişimi, elektrik giderini epeyce düşürüyor. Bu kalem kendini kısa sürede amorti ediyor." },
      { p: "Merdivende sensör konumu önemli; yanlış yerleştirilen sensör siz basamağa gelmeden sönüyor. Kat sahanlığı ve dönüş noktalarına ayrı sensör konması gerekiyor." },

      { h2: "Uygulama sırasında yaşam düzeni" },
      { p: "Merdiven tek geçiş yolu olduğu için iş etaplı yapılmalı: bir kat boyanırken diğerleri kullanılabilir olmalı. Boya kuruma süreleri programa yazılıyor." },
      { p: "Asansör kullanımı, malzeme taşıma saatleri ve gürültülü işlerin zamanı yönetimle önceden konuşuluyor. Bu, şikâyetlerin çoğunu baştan önlüyor." },

      { h2: "Elektrik tarafında sık çıkan sorunlar" },
      { p: "Ortak alan panolarında etiketleme çoğu binada yok; hangi sigortanın nereyi beslediği bilinmiyor. Yenilemede panoyu etiketleyip şemayı yönetime bırakıyoruz." },
      { p: "Sayaç bölümünde gevşemiş bağlantılar ve ısınma izleri sık görülüyor. Bu, göz ardı edilmemesi gereken bir güvenlik kalemi." },

      { h2: "Süre" },
      { p: "5 katlı bir apartmanda merdiven boyası, korkuluk ve aydınlatma tipik olarak 8–14 iş günü. Giriş cephesi ve kapı işleri devreye girerse 3–4 haftaya çıkıyor." },
      { p: "Dış cephe de yapılacaksa iskele bir kez kurulurken hepsini birlikte planlamak ciddi tasarruf sağlıyor." },
    ],
    faqs: [
      { q: "Karar için kaç kat maliki onayı gerekiyor?", a: "Bu, kat mülkiyeti mevzuatına ve işin niteliğine göre değişiyor. Yönetiminizin bu konuyu netleştirmesi gerekiyor; biz teknik ve maliyet tarafını sağlıyoruz." },
      { q: "Ödeme nasıl yapılıyor?", a: "Hakediş esaslı; tamamlanan iş kalemlerine göre kademeli. Yönetimle birlikte kat maliki başına düşen tutarı ve takvimi baştan yazıyoruz." },
      { q: "Sadece aydınlatma yaptırabilir miyiz?", a: "Yaptırabilirsiniz. Ortak alan aydınlatma yenileme tek başına en hızlı geri dönen kalem; boyayı sonraya bırakabilirsiniz." },
    ],
    related: ["eski-ev-tadilatinda-oncelik", "cephe-boyasi-ne-zaman-yenilenmeli", "ic-mekan-aydinlatma-planlama"],
  },

  {
    slug: "dukkan-tadilatinda-acilis-takvimi",
    title: "Dükkan tadilatında açılış tarihine yetişmek",
    category: "Tadilat",
    published: "2026-03-04",
    updated: "2026-06-11",
    reading: 6,
    metaTitle: "Dükkan Tadilatı: Açılış Takvimi ve Kritik Kalemler",
    metaDesc:
      "Ticari tadilatta programı açılış tarihinden geriye kurmak. Elektrik gücü, vitrin üretimi, havalandırma ve karar tarihleri.",
    keywords: ["dükkan tadilatı", "mağaza tadilatı", "iş yeri açılış", "vitrin yapımı", "ticari tadilat"],
    excerpt: "Ticari işte tek bir tarih vardır: açılış. Programı ona göre geriye kurmak, gecikmenin en büyük kalemini ortadan kaldırıyor.",
    services: ["dukkan-ofis-tadilati", "kafe-restoran-tadilati", "anahtar-teslim-is-yeri"],
    intro:
      "Konut tadilatında birkaç gün gecikme rahatsızlık verir; ticari tadilatta doğrudan para kaybıdır. Kira işlemeye başlamıştır, personel işe alınmıştır, açılış duyurulmuştur. O yüzden program açılış tarihinden geriye kurulur.",
    body: [
      { h2: "Geriye doğru program" },
      { p: "Açılış tarihinden başlayıp geriye gidiyoruz: son hafta temizlik ve deneme, ondan önce montajlar, ondan önce boya, ondan önce elektrik testleri, ondan önce zemin ve tavan." },
      { p: "Bu şekilde kurulan programda hangi kararın hangi tarihe kadar verilmesi gerektiği de netleşiyor. Karar tarihleri sözleşmeye yazılıyor." },

      { h2: "Uzun temin süreli kalemler" },
      { ul: [
        "Vitrin ve cephe doğraması: 3–4 hafta",
        "Özel üretim mobilya ve tezgâh: 3–5 hafta",
        "Aydınlatma armatürleri (özel model): 2–4 hafta",
        "Klima ve havalandırma ekipmanı: 2–3 hafta",
        "Zemin kaplaması (özel ebat/desen): 2–3 hafta",
      ] },
      { p: "Bu kalemler ilk hafta içinde siparişe çıkmalı. Programın kaymasının bir numaralı sebebi geç verilen sipariş." },

      { h2: "Elektrik gücü: erken başlatılması gereken süreç" },
      { p: "Kafe, fırın, kuaför ve market gibi işletmelerde toplam güç mevcut aboneliği kolayca aşıyor. Güç artırımı başvurusu zaman alıyor." },
      { p: "İlk hafta içinde toplam gücü hesaplayıp süreci başlatıyoruz. Bu adım geciktiğinde iş bitse bile açılış yapılamıyor." },

      { h2: "Havalandırma ve baca" },
      { p: "Yemek üreten iş yerlerinde en çok sonradan çıkan kalem bu. Davlumbaz, kanal ve baca çıkışının mümkün olup olmadığı keşifte netleştirilmeli." },
      { p: "Bina ve komşuluk kuralları burada belirleyici. Çıkış mümkün değilse konsept değişikliği bile gündeme gelebiliyor; bunu iş ortasında öğrenmek istemezsiniz." },

      { h2: "Faal çarşıda çalışmak" },
      { p: "Gürültülü işleri komşu esnafla konuşarak planlıyoruz; kırım ve kesim sabahın erken saatlerine ya da kapanış sonrasına alınabiliyor." },
      { p: "Moloz ve malzeme trafiğini de aynı şekilde yönetiyoruz. Çarşı içinde iş yapmanın kuralı, komşuyu iş bitmeden karşınıza almamak." },

      { h2: "Panoyu büyümeye yer bırakarak kurun" },
      { p: "İşletmeler açıldıktan sonra ekipman ekliyor. Boş yeri olmayan pano birkaç ay içinde tekrar açılmak zorunda kalıyor." },
      { p: "Panoyu bugünkü değil, konuştuğumuz büyüme senaryosuna göre boyutluyoruz. Bu, ilerideki en can sıkıcı işlerden birini baştan önlüyor." },
    ],
    faqs: [
      { q: "Açılış tarihine yetiştirebilir misiniz?", a: "Program gerçekçiyse taahhüt ediyoruz. Yetişmeyeceğini düşünüyorsak baştan söylüyoruz; sözleşmeye yetişmeyecek bir tarih yazmıyoruz." },
      { q: "Kepenk kapalıyken mi çalışıyorsunuz?", a: "Genelde evet, iş bu şekilde daha hızlı ilerliyor. Faal işletmelerde etaplı çalışma da yapabiliyoruz." },
      { q: "Ruhsat işlerini yapıyor musunuz?", a: "İzin ve ruhsat süreçleri yetkili proje ekiplerinin ve ilgili idarenin işi. Biz uygulamayı yürütüyor, gerekli teknik evrakı sağlıyoruz." },
    ],
    related: ["tadilat-butcesi-nasil-planlanir", "isyeri-elektrik-gucu-hesabi", "daire-tadilati-is-sirasi"],
  },

  {
    slug: "tadilatta-komsu-iliskileri",
    title: "Tadilat sırasında komşularla sorun yaşamamak",
    category: "Tadilat",
    published: "2026-03-18",
    updated: "2026-06-12",
    reading: 4,
    metaTitle: "Tadilatta Komşu İlişkileri: Gürültü, Toz ve Moloz",
    metaDesc:
      "Apartmanda tadilat yaparken gürültü saatleri, toz kontrolü, asansör kullanımı ve moloz tahliyesi. Şikâyeti önleyen pratik önlemler.",
    keywords: ["tadilat gürültü saatleri", "apartmanda tadilat", "moloz tahliyesi", "tadilat şikayeti"],
    excerpt: "Tadilat şikâyetlerinin çoğu gürültüden değil, haber verilmemesinden çıkıyor. Birkaç basit adım süreci sorunsuz geçiriyor.",
    services: ["daire-tadilati", "duvar-orme", "apartman-ortak-alan-tadilati"],
    intro:
      "Apartmanda tadilat, teknik olarak zor olmayan ama sosyal olarak yönetilmesi gereken bir süreç. Yaşadığımız tecrübe şunu gösteriyor: şikâyetlerin büyük kısmı gürültünün kendisinden değil, önceden haber verilmemiş olmasından kaynaklanıyor.",
    body: [
      { h2: "İşe başlamadan önce" },
      { p: "Yönetime ve komşulara işin ne zaman başlayacağını, kabaca ne kadar süreceğini ve gürültülü aşamaların hangi günlere denk geleceğini yazılı bildirin. Bir sayfalık kısa bir not yeterli." },
      { p: "İletişim için bir numara bırakın. Rahatsız olan komşunun kime söyleyeceğini bilmesi, sorunun büyümesini önlüyor." },

      { h2: "Gürültülü işleri kümeleyin" },
      { p: "Kırım ve kesim işlerini haftaya yaymak yerine art arda birkaç güne toplamak, toplam rahatsızlık süresini kısaltıyor." },
      { p: "Yönetimin belirlediği saatlere uyuyoruz. Saat kısıtı yoksa da sabah 09.00 öncesi ve akşam 18.00 sonrası gürültülü iş yapmıyoruz." },

      { h2: "Toz kontrolü" },
      { p: "Daire kapısına toz perdesi, merdiven ve asansör güzergâhına örtü seriyoruz. Kırım sırasında toz emici kullanmak, ortak alana çıkan tozu hissedilir ölçüde azaltıyor." },
      { p: "Her günün sonunda merdiven ve asansör süpürülüyor. Bu küçük alışkanlık, komşu şikâyetlerinin önemli bir kısmını baştan siliyor." },

      { h2: "Moloz" },
      { p: "Molozu merdivende bekletmiyoruz; aynı gün ya da en geç ertesi sabah tahliye ediyoruz. Torbalar ağzı kapalı taşınıyor." },
      { p: "Belediyenin moloz kuralları ve konteyner izni varsa ona uyuluyor. Bina önüne gelişigüzel dökülen moloz, hem ceza hem komşuluk sorunu." },

      { h2: "Su ve elektrik kesintileri" },
      { p: "Kolon hattına müdahale gerekiyorsa binaya en az bir gün önceden haber veriyoruz. Kesinti süresini kısa tutmak için hazırlığı önceden yapıyoruz." },
      { p: "Ortak alan elektriğine dokunulacaksa yönetimi bilgilendirmek şart; asansörün durması özellikle sorun yaratıyor." },

      { h2: "İş bitince" },
      { p: "Ortak alanlardaki her türlü iz temizleniyor, koruma malzemeleri kaldırılıyor. Merdiven ve asansör iş öncesindeki hâlinden daha kötü bırakılmıyor." },
      { p: "Zarar verilmiş bir yer varsa onarımı bizde. Bunu tartışmaya bırakmıyoruz." },
    ],
    faqs: [
      { q: "Tadilat saatleri kanunla belirli mi?", a: "Belediyelerin gürültü yönetmelikleri ve bina yönetim planları saat kısıtı getirebiliyor. Yönetiminizin kuralına uyuyoruz; kural yoksa 09.00–18.00 aralığında gürültülü iş yapıyoruz." },
      { q: "Komşum sürekli şikâyet ediyor, ne yapmalıyım?", a: "Programı yazılı paylaşmak ve gürültülü aşamanın ne zaman biteceğini söylemek çoğu durumu çözüyor. Belirsizlik, gürültünün kendisinden daha rahatsız edici." },
      { q: "Molozu siz mi atıyorsunuz?", a: "Evet, toplama ve tahliye teklife dahil. Miktar ve kat durumuna göre ayrı kalem olarak yazılıyor." },
    ],
    related: ["daire-tadilati-is-sirasi", "apartman-ortak-alan-yenileme", "tadilat-butcesi-nasil-planlanir"],
  },

  {
    slug: "deprem-sonrasi-ic-mekan-yenileme",
    title: "Deprem sonrası iç mekân yenilemesinde nelere dikkat edilir?",
    category: "Tadilat",
    published: "2026-04-01",
    updated: "2026-06-13",
    reading: 6,
    metaTitle: "Deprem Sonrası İç Mekân Yenileme: Sıra ve Kontroller",
    metaDesc:
      "Hasarsız raporlu yapılarda iç mekân yenilemesi: çatlak onarımı, tesisat kontrolü, kapı-pencere ayarı ve hangi durumda yetkili incelemenin şart olduğu.",
    keywords: ["deprem sonrası tadilat", "çatlak onarımı", "iç mekan yenileme", "hasar tespiti"],
    excerpt: "İç mekân yenilemesine başlamadan önce yapının durumu netleşmeli. Hangi çatlak kozmetik, hangisi yetkili inceleme gerektirir?",
    services: ["deprem-sonrasi-tadilat", "ince-insaat-isleri", "elektrik-tesisati"],
    intro:
      "Deprem sonrası iç mekân yenilemesi, yapının taşıyıcı sistemiyle ilgili değerlendirmenin tamamlanmasından sonra gündeme gelen bir iş. Bu sıralamayı tersine çevirmek doğru değil; önce yapının durumu, sonra iç mekân.",
    body: [
      { h2: "Önce yapının durumu netleşmeli" },
      { p: "Taşıyıcı sistemle ilgili değerlendirme, hasar tespiti ve gerekiyorsa güçlendirme kararı yetkili proje ekiplerinin ve ilgili kurumların işi. Bu süreç tamamlanmadan iç mekân yenilemesine başlamıyoruz." },
      { p: "Kolon, kiriş ve perde duvarda çatlak gördüğünüzde bunu bize değil, önce yetkili incelemeye taşımanız gerekiyor. Biz iç mekân tarafındayız." },

      { h2: "Hangi çatlak kozmetik?" },
      { p: "Bölme duvarlardaki ince, saç teli kalınlığındaki çatlaklar çoğunlukla sıva kaynaklı ve kozmetik. Bunlar açılıp file ve tamir harcıyla onarılıyor." },
      { p: "Buna karşılık kolon ve kirişte, özellikle çapraz yönde ilerleyen ve genişliği fark edilir çatlaklar kozmetik değildir. Bu tür bir çatlağı sıvayla kapatmak yanlış." },

      { h2: "Tesisat kontrolü" },
      { p: "Sarsıntı sonrası su ve gaz hatlarında gevşemiş bağlantılar olabiliyor. Su hattı basınç testinden geçirilmeli, gaz tarafı yetkili firmaya kontrol ettirilmeli." },
      { p: "Elektrik tarafında pano bağlantılarının sıkılığı ve kaçak akım rölesinin çalışırlığı kontrol ediliyor. Bunlar kısa işler ama atlanmaması gerekiyor." },

      { h2: "Kapı ve pencere ayarı" },
      { p: "Sarsıntı sonrası kapıların sürtmesi ve pencerelerin tam kapanmaması sık görülüyor. Çoğu zaman menteşe ve kanat ayarıyla çözülüyor." },
      { p: "Ancak kapı kasası hissedilir şekilde çarpılmışsa bu, duvarda deformasyon olduğunu gösterebiliyor; kozmetik onarımdan önce değerlendirilmesi gereken bir işaret." },

      { h2: "Yenileme sırası" },
      { ol: [
        "Yapı durumu ve gerekiyorsa güçlendirme sürecinin tamamlanması",
        "Tesisat kontrolleri ve testler",
        "Çatlak açma, file ve tamir harcı",
        "Sıva ve alçı onarımı",
        "Kapı ve doğrama ayarı",
        "Boya",
        "Montajlar ve temizlik",
      ] },

      { h2: "Ev eşyası ve sabitleme" },
      { p: "Yenileme sırasında yapılabilecek düşük maliyetli ama faydalı bir iş: yüksek dolapların, gardıropların ve televizyon ünitesinin duvara sabitlenmesi." },
      { p: "Bu, duvar açıkken yapıldığında hem kolay hem görünmez oluyor. Sonradan yapmak duvarı yeniden delmek demek." },
    ],
    faqs: [
      { q: "Çatlağın tehlikeli olup olmadığını siz söyleyebilir misiniz?", a: "Bölme duvar çatlaklarında değerlendirme yapabiliyoruz. Kolon, kiriş ve perde duvarla ilgili her durumda yetkili statik ekibe yönlendiriyoruz; bu konuda tahmin yürütmüyoruz." },
      { q: "Güçlendirme yapıyor musunuz?", a: "Güçlendirme, statik proje ve uygulama yetkisi gerektiren bir iş. Projesi ve yetkili ekibi olan bir işte uygulama tarafında yer alabiliyoruz." },
      { q: "İç mekân yenilemesi ne kadar sürer?", a: "Çatlak onarımı, sıva, boya ve ayar işleriyle 100 m² bir dairede tipik olarak 10–15 iş günü." },
    ],
    related: ["eski-ev-tadilatinda-oncelik", "tadilatta-sonradan-cikan-kalemler", "daire-tadilati-is-sirasi"],
  },

  {
    slug: "seramik-mi-parke-mi",
    title: "Seramik mi parke mi? Oda oda karar rehberi",
    category: "Tadilat",
    published: "2026-04-15",
    updated: "2026-06-14",
    reading: 5,
    metaTitle: "Seramik mi Parke mi? Oda Oda Karşılaştırma",
    metaDesc:
      "Salon, yatak odası, mutfak, banyo ve antre için zemin kaplaması seçimi. Isıtma, nem, ses ve bakım açısından karşılaştırma.",
    keywords: ["seramik mi parke mi", "zemin kaplaması", "laminat parke", "granit seramik", "yerden ısıtma kaplama"],
    excerpt: "Doğru kaplama odaya göre değişiyor. Nem, ses, yerden ısıtma ve bakım kolaylığı üzerinden oda oda karar rehberi.",
    services: ["parke-laminat", "seramik-fayans", "sap-zemin-hazirligi"],
    intro:
      "Zemin kaplaması seçimi tek bir karar değil; evin her odası için ayrı düşünülmesi gereken bir konu. Belirleyici olan dört şey: nem, ses, ısıtma sistemi ve bakım kolaylığı.",
    body: [
      { h2: "Salon ve yatak odası" },
      { p: "Bu odalarda parke ve laminat öne çıkıyor: ayağa daha sıcak geliyor, ses yalıtımı daha iyi ve düşen eşya kırılma riski daha az." },
      { p: "Yerden ısıtma varsa ince ve iletken bir ürün seçmek gerekiyor. Kalın masif parke sistemin verimini düşürüyor." },

      { h2: "Mutfak" },
      { p: "Mutfakta su ve yağ teması sürekli. Seramik burada daha güvenli tercih; lekeye ve neme dayanıklı, temizliği kolay." },
      { p: "Parke tercih edilecekse su geçirmez sınıflar var ama eviye ve bulaşık makinesi çevresinde silikonlu detay şart. Küçük bir sızıntı bile laminatı şişiriyor." },

      { h2: "Banyo ve tuvalet" },
      { p: "Burada tartışma yok: seramik veya doğal taş. Kaymaz yüzey sınıfı seçmek özellikle yaşlı ve çocuklu evlerde önemli." },
      { p: "Zeminin altında su yalıtımının olması gerektiğini unutmayın; kaplama seçimi yalıtımın yerini tutmuyor." },

      { h2: "Antre ve koridor" },
      { p: "En yoğun trafiği bu alanlar görüyor. Dışarıdan gelen kum ve ıslaklık da burada. Seramik veya yüksek aşınma sınıfı laminat uygun." },
      { p: "Antrede seramik, salonda parke gibi karma çözümlerde geçiş profili ve kot farkı önceden planlanmalı." },

      { h2: "Balkon ve teras" },
      { p: "Dış mekânda donma-çözülme dayanımı olan seramik kullanılmalı. İç mekân seramiği dışarıda birkaç kışta çatlıyor." },
      { p: "Balkonda kaplamadan önce su yalıtımı ve eğim düzeltmesi yapılmalı; sadece seramik değiştirmek çoğu balkonda sorunu çözmüyor." },

      { h2: "Maliyet ve ömür" },
      { ul: [
        "Laminat: uygun maliyet, kolay uygulama, neme hassas",
        "Lamine parke: orta maliyet, daha doğal görünüm, zımparalanabilir",
        "Masif parke: yüksek maliyet, uzun ömür, bakım ister",
        "Seramik: geniş fiyat aralığı, çok dayanıklı, sert ve soğuk",
        "Doğal taş: yüksek maliyet, karakterli, koruyucu bakım ister",
      ] },
    ],
    faqs: [
      { q: "Yerden ısıtmada hangisi daha iyi?", a: "Seramik ve doğal taş ısıyı en iyi ileten kaplamalar. Parke tercih edilecekse yerden ısıtmaya uygun, ince ve düşük ısı direncine sahip ürün seçilmeli." },
      { q: "Seramiğin üstüne parke döşenir mi?", a: "Seramik sağlam ve terazideyse döşenebiliyor. Kot yükseldiği için kapı altları kontrol edilmeli. Boş ses veren seramikte sökmek gerekiyor." },
      { q: "Parke kaç yılda bir yenilenir?", a: "Laminat yoğun kullanımda 8–12 yıl. Lamine ve masif parke zımparalanıp cilalanarak çok daha uzun kullanılabiliyor." },
    ],
    related: ["sap-kurumadan-parke-doseme", "banyo-tadilatinda-su-yalitimi", "daire-tadilati-is-sirasi"],
  },

  {
    slug: "kucuk-daireyi-buyuk-gostermek",
    title: "Küçük daireyi büyük göstermenin teknik yolları",
    category: "Tadilat",
    published: "2026-04-29",
    updated: "2026-06-15",
    reading: 5,
    metaTitle: "Küçük Daire Nasıl Büyük Gösterilir? Teknik Çözümler",
    metaDesc:
      "Aydınlatma, renk, kapı yönü, gömme dolap ve duvar kaldırma. Küçük dairede alan kazandıran teknik çözümler ve hangilerinin mümkün olduğu.",
    keywords: ["küçük daire tadilatı", "alan kazanma", "duvar kaldırma", "gömme dolap", "1+1 tadilat"],
    excerpt: "Alan kazanmanın yolu her zaman duvar yıkmak değil. Aydınlatmadan kapı yönüne kadar, uygulanabilir teknik çözümler.",
    services: ["daire-tadilati", "duvar-orme", "alcipan-asma-tavan", "avize-aydinlatma"],
    intro:
      "Küçük dairelerde en çok konuşulan çözüm duvar kaldırmak. Ama her duvar kaldırılamıyor ve kaldırılmadan da ciddi alan kazanmak mümkün. Aşağıdakiler sahada işe yaradığını gördüğümüz çözümler.",
    body: [
      { h2: "Duvar kaldırmak: önce hangi duvar?" },
      { p: "Salon ile mutfağı ayıran duvar çoğu betonarme binada bölme duvardır ve kaldırılabilir. Ama her binada istisna olabiliyor; projeye bakmadan karar verilmiyor." },
      { p: "Taşıyıcıysa kaldırılamaz. Kaldırılması isteniyorsa bu doğrudan statik konusu ve yetkili ekibin çözümüyle yapılıyor." },

      { h2: "Kapı yönü ve tipi" },
      { p: "İçeri açılan bir kapı, dönüş yarıçapı kadar alanı kullanılamaz hâle getiriyor. Küçük banyolarda kapıyı dışarı açtırmak ya da sürgülü kapıya geçmek gerçek bir alan kazancı sağlıyor." },
      { p: "Sürgülü kapı duvar içine gizlenebiliyorsa kazanç daha da artıyor; bu, alçıpan bölme duvarlarda uygulanabilen bir çözüm." },

      { h2: "Gömme dolap ve niş" },
      { p: "Dışarı taşan gardırop yerine duvara gömülü dolap, oda içinde gözle görülür fark yaratıyor. Duvar kalınlığı uygun bölme duvarlarda niş açmak mümkün." },
      { p: "Islak hacimlerde de aynı mantık geçerli: gömme rezervuar ve duvar içi niş, banyoda hem yer kazandırıyor hem düzenli görünüm sağlıyor." },

      { h2: "Aydınlatma" },
      { p: "Tek bir tavan avizesi yerine birden fazla noktadan dağıtılmış aydınlatma, mekânı iyice geniş gösteriyor. Köşelerin aydınlık olması sınırı uzaklaştırıyor." },
      { p: "Gizli bant aydınlatma ve duvar yıkama armatürleri bu etkiyi güçlendiriyor. Bu çözümler tadilat sırasında altyapısı bırakılırsa maliyetsiz sayılır." },

      { h2: "Renk ve kaplama sürekliliği" },
      { p: "Zemin kaplamasını odalar arasında değiştirmemek, mekânı bölünmüş göstermiyor. Aynı kaplamanın antreden salona kesintisiz devam etmesi alanı büyütüyor." },
      { p: "Açık renk duvarlar ve tavanla duvar arasında büyük kontrast olmaması da aynı etkiyi yapıyor." },

      { h2: "Islak hacimde kazanç" },
      { p: "Küvet yerine duş teknesi ya da teknesiz duş alanı, küçük banyolarda ciddi alan açıyor. Teknesiz uygulamada zemin yalıtımı ve eğimi kritik." },
      { p: "Askılı klozet ve gömme rezervuar, hem yer kazandırıyor hem temizliği kolaylaştırıyor. Montaj için duvarda taşıyıcı kasa gerekiyor; bu, tadilat sırasında planlanacak bir kalem." },
    ],
    faqs: [
      { q: "Duvarı kaldırmadan mutfağı açık hâle getirebilir miyim?", a: "Duvarın bir kısmını açıp tezgâh yüksekliğinde bir bar boşluğu bırakmak sık kullanılan bir çözüm. Taşıyıcı olmayan duvarlarda uygulanabiliyor." },
      { q: "Sürgülü kapı ses geçirir mi?", a: "Klasik kapıya göre daha çok ses geçiriyor. Yatak odası ve banyoda bunu göz önünde bulundurmak gerekiyor." },
      { q: "Bu işler tadilat olmadan yapılabilir mi?", a: "Aydınlatma ve dolap çözümlerinin bir kısmı yapılabiliyor. Duvar, kapı ve ıslak hacim değişiklikleri tadilat kapsamında olması gereken işler." },
    ],
    related: ["daire-tadilati-is-sirasi", "kucuk-banyoda-cozumler", "seramik-mi-parke-mi"],
  },
];

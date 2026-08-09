// Yapı ve tadilat grubu hizmetleri.

export const yapiServices = [
  {
    slug: "anahtar-teslim-insaat",
    title: "Anahtar Teslim İnşaat",
    group: "Anahtar Teslim Yapım",
    icon: "building",
    featured: true,
    short: "Kaba yapıdan ince işlere, elektrik ve mekanik dahil tek elden proje yönetimi.",
    metaTitle: "Malatya Anahtar Teslim İnşaat | Tek Elden Proje Yönetimi",
    metaDesc:
      "Malatya'da anahtar teslim inşaat ve tadilat. Kaba yapı, ince işler, elektrik ve mekanik tesisat dahil tek elden keşif, bütçe, iş programı ve teslim.",
    keywords: ["Malatya anahtar teslim inşaat", "Malatya müteahhit", "anahtar teslim tadilat", "villa yapımı Malatya", "iş yeri inşaatı"],
    intro:
      "Anahtar teslim işin özü, işveren ile onlarca ayrı ustanın arasına tek bir sorumlu koymaktır. Elektrikçinin sıvacıyı, sıvacının seramikçiyi beklediği bir şantiyede süre uzar, maliyet artar. Kalemleri tek programda toplayıp tek muhatapla yürütüyoruz.",
    symptoms: [
      { title: "Farklı ustaları koordine edemiyorsunuz", text: "İşler birbirini bekliyor, süre öngörülemiyor demektir." },
      { title: "Bütçe sürekli aşılıyor", text: "Kalemler baştan yazılı çıkarılmamış, ek işler kontrolsüz eklenmiştir." },
      { title: "Yapılan işler birbiriyle uyumsuz", text: "Tesisat, ince iş ve kaplama sırası yanlış planlanmıştır." },
      { title: "Teslim tarihi sürekli kayıyor", text: "İş programı ve tedarik planı yoktur." },
    ],
    scope: [
      "Keşif, metraj ve kalem kalem bütçe çıkarma",
      "İş programı ve tedarik planlaması",
      "Kaba yapı uygulamaları",
      "Elektrik ve zayıf akım tesisatı",
      "Sıhhi ve mekanik tesisat",
      "Alçı, boya, seramik, parke ve ince işler",
      "Doğrama, mutfak ve dolap koordinasyonu",
      "Kontrol, eksik listesi ve teslim",
    ],
    body: [
      { h2: "İşin sırası neden bu kadar önemli?" },
      { p: "Bir yapıda kalemlerin sırası yanlış olduğunda, doğru yapılmış işler bile bozulur. Sıva atıldıktan sonra hatırlanan bir priz, yeni yapılmış duvarın kırılması demektir. Seramik döşendikten sonra fark edilen bir gider eğimi, tüm zeminin sökülmesi anlamına gelir." },
      { p: "Doğru sıra kısaca şudur: kaba yapı → tesisat altyapısı → sıva → su yalıtımı → seramik → boya → ince montajlar → temizlik ve teslim. Her aşamanın kendi kontrol noktası vardır ve o kontrol yapılmadan sonraki aşamaya geçilmez." },
      { ol: [
        "Söküm ve kaba yapı: duvar, döşeme, kalıp işleri tamamlanır",
        "Tesisat altyapısı: elektrik boruları, su ve atık hatları çekilir, basınç testi yapılır",
        "Sıva ve şap: yüzeyler hazırlanır, kotlar tutturulur",
        "Su yalıtımı: ıslak hacimlerde uygulanır ve su testi yapılır",
        "Seramik ve zemin kaplamaları",
        "Boya ve dekoratif işler",
        "Armatür, vitrifiye, priz, aydınlatma montajları",
        "Genel temizlik, kontrol listesi ve teslim",
      ] },

      { h2: "Bütçe nasıl kontrol altında tutulur?" },
      { p: "Bütçe aşımının iki kaynağı vardır: baştan eksik yazılan kalemler ve iş sırasında değişen kararlar. Birincisini engellemek bizim işimiz; keşifte tüm kalemleri metrajlı biçimde yazıyoruz ve \"sonra bakarız\" dediğimiz bir kalem bırakmıyoruz." },
      { p: "İkincisi ise doğal bir durum: iş ilerledikçe fikirler değişir. Bunu engellemek yerine yönetiyoruz. Her değişiklik için ek maliyet ve süre etkisi yazılı olarak bildiriliyor, onayınız alınmadan uygulanmıyor. Böylece bütçe sürprizle değil, kararla değişiyor." },

      { h2: "İş programı ve şeffaflık" },
      { p: "Her iş için haftalık program çıkarıyoruz: hangi hafta hangi kalem, hangi ekip. Program, tedarik süreleriyle birlikte kuruluyor; seramik veya doğrama gibi teslim süresi uzun kalemler baştan sipariş ediliyor ki şantiye malzeme bekleyerek durmasın." },
      { p: "Şantiyeye gelemeyen işverenler için haftalık fotoğraf ve ilerleme raporu gönderiyoruz. Şehir dışında olan mülk sahipleriyle çalışırken bu yöntem güven açısından en çok işe yarayan uygulama oldu." },

      { h2: "Neyi yapıyoruz, neyi yapmıyoruz?" },
      { p: "Konut, iş yeri, mağaza, ofis ve küçük ölçekli ticari yapılarda anahtar teslim iş alıyoruz. Ruhsat gerektiren yeni yapılarda proje ve statik hizmetleri, ilgili müellifler tarafından yürütülür; biz uygulama ve koordinasyon tarafındayız." },
      { p: "Uzmanlık alanımız elektrik ve mekanik olduğu için, teknik altyapısı yoğun işlerde (mutfaklı iş yerleri, klinik, atölye, üretim alanı) fark yaratıyoruz. Sadece dekorasyon ağırlıklı işlerde ise doğru ekipleri yönetmekle birlikte, katkımızın daha sınırlı olduğunu baştan söylüyoruz." },
    ],
    priceFactors: [
      "Alan büyüklüğü ve yapı tipi",
      "Kaba yapı dahil mi, sadece ince işler mi",
      "Malzeme sınıfı ve marka tercihleri",
      "Tesisat altyapısının komple yenilenip yenilenmeyeceği",
      "İş programı süresi ve şantiye koşulları",
    ],
    faqs: [
      { q: "Keşif ücretli mi?", a: "Malatya merkez ilçelerde ilk keşif ücretsizdir. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabilir; iş tarafımızca yapıldığında bu bedel toplam tutardan düşülür." },
      { q: "Sözleşme yapıyor musunuz?", a: "Evet. İş kalemleri, metrajlar, malzeme sınıfı, süre, ödeme planı ve teslim şartları yazılı sözleşmeye bağlanıyor. Sonradan çıkan işler için ek protokol düzenleniyor." },
      { q: "Ödeme nasıl yapılıyor?", a: "Hakediş esaslı çalışıyoruz: tamamlanan iş kalemlerine göre kademeli ödeme. Peşin toplu ödeme istemiyoruz. Ödeme planı sözleşmede aşama aşama tanımlanıyor." },
      { q: "İş sonrası garanti veriyor musunuz?", a: "İşçilik garantisi veriyoruz; süresi ve kapsamı sözleşmede yazılı. Malzemelerde üretici garantisi geçerlidir ve garanti belgeleri teslimde size veriliyor." },
      { q: "Şehir dışındayım, takip edebilir miyim?", a: "Haftalık fotoğraflı ilerleme raporu gönderiyoruz. Kritik aşamalarda (tesisat kapanmadan önce, yalıtım öncesi) ayrıca detaylı görüntü paylaşıyoruz. İsterseniz kamera ile canlı takip de kurulabiliyor." },
    ],
    localAngle: "kentsel dönüşüm ve deprem sonrası yenileme sürecindeki yapı stoğu ile ticari alan tadilatları",
    related: ["komple-ev-tadilati", "dukkan-ofis-tadilati", "elektrik-tesisati", "sihhi-tesisat"],
  },

  {
    slug: "komple-ev-tadilati",
    title: "Komple Ev Tadilatı",
    group: "Anahtar Teslim Tadilat",
    icon: "home",
    featured: true,
    core: true,
    short: "Mutfak, banyo, elektrik, su, zemin, duvar ve aydınlatmanın birlikte yenilenmesi.",
    metaTitle: "Malatya Komple Ev Tadilatı | Daire Yenileme",
    metaDesc:
      "Malatya'da komple ev tadilatı: mutfak ve banyo yenileme, elektrik ve su tesisatı, zemin, duvar, boya ve aydınlatma. Tek ekip, yazılı teklif, iş programı.",
    keywords: ["Malatya ev tadilatı", "Malatya daire yenileme", "banyo tadilatı Malatya", "mutfak tadilatı", "komple tadilat"],
    intro:
      "Komple tadilat, bir dairenin sadece görünüşünü değil altyapısını da yenileme fırsatıdır. Duvar zaten açılacaksa elektrik ve su hattının da yenilenmesi, ileride ikinci bir kırım ihtimalini sıfırlar. Tadilatı bu bakışla planlıyoruz.",
    symptoms: [
      { title: "Tesisat eski, sık arıza çıkıyor", text: "Kozmetik yenileme, altyapı sorununu geciktirmekten başka işe yaramaz." },
      { title: "Mutfak ve banyo kullanışsız", text: "Yerleşim değişikliği tesisat planlamasıyla birlikte ele alınmalıdır." },
      { title: "Priz ve aydınlatma yetersiz", text: "Tadilat, hat ekleme için en ucuz zamandır." },
      { title: "Zemin ve duvarlar yıpranmış", text: "Kaplama yenilemesi öncesi altyapı kontrolü gerekir." },
    ],
    scope: [
      "Söküm ve moloz tahliyesi",
      "Elektrik tesisatı yenileme, pano ve hat ilavesi",
      "Su ve atık su tesisatı yenileme",
      "Banyo ve mutfak komple yenileme",
      "Su yalıtımı ve seramik uygulaması",
      "Alçı, boya ve tavan işleri",
      "Zemin kaplama (parke, laminat, seramik)",
      "Aydınlatma, armatür ve vitrifiye montajı",
    ],
    body: [
      { h2: "Tadilata nereden başlanır?" },
      { p: "Tadilat kararının ardından ilk yapılması gereken, neyin değişeceğini net bir listeye dökmektir. \"Banyoyu yenileyelim\" ifadesi tek başına bir kapsam değildir; seramik mi değişiyor, tesisat da mı, klozet yeri kayıyor mu, duş teknesi mi duşakabin mi, bunların hepsi ayrı maliyet ve ayrı süre demektir." },
      { p: "Keşifte oda oda dolaşıp bu listeyi birlikte çıkarıyoruz. Liste netleştikten sonra iş programı ve bütçe gerçekçi hâle geliyor. Belirsiz bırakılan her kalem, iş sırasında hem gecikme hem tartışma kaynağı oluyor." },

      { h2: "Oturarak mı, boşaltarak mı?" },
      {
        table: {
          head: ["", "Oturarak tadilat", "Boşaltarak tadilat"],
          rows: [
            ["Süre", "%40–60 daha uzun", "En kısa süre"],
            ["Maliyet", "Koruma ve temizlik nedeniyle daha yüksek", "Daha ekonomik"],
            ["Konfor", "Toz, gürültü, kısıtlı kullanım", "Etkilenme yok"],
            ["Uygun olduğu durum", "Tek mekân (banyo veya mutfak) yenileme", "Komple tadilat"],
          ],
        },
      },
      { p: "Komple tadilatta dairenin boşaltılmasını öneriyoruz. Sadece mutfak veya sadece banyo yenilemesinde ise oturarak çalışmak mümkün; bu durumda geçici kullanım düzenini (bulaşık için alternatif nokta, geçici duş çözümü) baştan planlıyoruz." },

      { h2: "Banyo tadilatında püf nokta: su yalıtımı" },
      { p: "Banyoda en pahalı hata, su yalıtımının atlanmasıdır. Seramik su geçirmez sanılır ama derz ve köşeler zamanla su alır. Yalıtım yapılmamış bir banyoda su, döşemeden alt kata geçer ve fark edildiğinde hem sizin hem alt komşunun tavanı zarar görmüştür." },
      { ul: [
        "Zemin ve duvarın en az 20 cm yüksekliği yalıtılır, duş alanında 180 cm'e çıkılır",
        "Köşe ve boru geçişlerinde bant ve manşet kullanılır",
        "Yalıtım sonrası su testi yapılır: alan 24 saat su altında bırakılır",
        "Test geçmeden seramik döşenmez",
      ] },
      { p: "Su testi bir gün kaybettirir; atlandığında kaybettirdiği ise tüm banyodur. Her banyo tadilatında bu testi yapıyor, sonucunu fotoğraflıyoruz." },

      { h2: "Süre ve program" },
      { p: "Ortalama bir 3+1 dairede komple tadilat 25–40 iş günü sürer. Sürenin dağılımı kabaca şöyledir: söküm ve tesisat 8–10 gün, sıva ve yalıtım 5–7 gün, seramik 6–8 gün, boya 4–6 gün, montajlar ve teslim 3–5 gün. Aralarda kuruma süreleri vardır ve bunlar sıkıştırılamaz." },
      { p: "Kuruma sürelerini kısaltmaya çalışmak, tadilatta yapılan en yaygın ve en pahalı hatadır. Nemli şap üzerine döşenen parke kabarır, kurumamış alçı üzerine atılan boya çatlar. Programı bu sürelere saygı göstererek kuruyoruz." },
    ],
    priceFactors: [
      "Daire metrekaresi ve oda sayısı",
      "Tesisatın komple mi kısmen mi yenileneceği",
      "Islak hacim sayısı (banyo, tuvalet, mutfak)",
      "Malzeme sınıfı (seramik, parke, vitrifiye, armatür)",
      "Söküm ve moloz tahliyesi kapsamı",
    ],
    faqs: [
      { q: "Tadilat için apartmandan izin gerekir mi?", a: "Daire içi tadilatlarda genelde yönetime bilgi vermek yeterlidir. Ancak taşıyıcı sisteme, ortak alana veya kolon hattına müdahale gerektiren işlerde yönetim ve gerekirse belediye izni gerekir. Bu ayrımı keşifte belirtiyoruz." },
      { q: "Molozu siz mi kaldırıyorsunuz?", a: "Evet, söküm ve moloz tahliyesi teklife dahil ediliyor. Apartmanlarda çalışma saatleri ve asansör kullanımı konusunda yönetimle önceden koordinasyon sağlıyoruz." },
      { q: "Malzemeyi kendim alabilir miyim?", a: "Alabilirsiniz. Seramik, vitrifiye, armatür ve parke gibi kalemleri kendiniz seçip almanız yaygın. Bu durumda teklifte sadece işçilik ve sarf malzeme yer alır. Ölçü ve miktar listesini biz çıkarıp size veriyoruz." },
      { q: "Tadilat sırasında ek iş çıkarsa ne oluyor?", a: "Söküm sonrası görünen gizli sorunlar (çürük boru, ıslanmış duvar, çökmüş şap) olabilir. Bu durumda işi durdurup fotoğrafla bildiriyor, ek kalem ve maliyeti yazılı sunuyoruz. Onayınız olmadan devam etmiyoruz." },
      { q: "Kışın tadilat yapılır mı?", a: "Yapılır ancak boya ve şap gibi kalemlerde kuruma süreleri uzar; havalandırma da zorlaşır. Programı buna göre uzatıyoruz. Yalıtım ve dış cephe işlerinde ise hava koşulları belirleyici oluyor." },
    ],
    localAngle: "1990–2005 arası yapı stoğunda tesisat ve yalıtımın birlikte yenilenmesi ihtiyacı",
    related: ["anahtar-teslim-insaat", "dukkan-ofis-tadilati", "sihhi-tesisat", "elektrik-tesisati"],
  },

  {
    slug: "dukkan-ofis-tadilati",
    title: "Dükkan ve Ofis Tadilatı",
    group: "Ticari Tadilat",
    icon: "layers",
    featured: false,
    short: "Mağaza, ofis ve iş yerlerinde teknik altyapı ve ince işlerin birlikte yürütülmesi.",
    metaTitle: "Malatya Dükkan ve Ofis Tadilatı | İş Yeri Yenileme",
    metaDesc:
      "Malatya'da dükkan, mağaza ve ofis tadilatı: elektrik ve data altyapısı, aydınlatma, bölme duvar, tavan, zemin ve teslim. Açılış tarihine göre program.",
    keywords: ["Malatya dükkan tadilatı", "Malatya ofis tadilatı", "mağaza yenileme", "iş yeri elektrik tesisatı", "vitrin aydınlatması"],
    intro:
      "Ticari alan tadilatında en kıymetli şey zamandır: her gecikme gün doğrudan ciro kaybıdır. Bu nedenle iş yeri işlerinde programı açılış tarihinden geriye doğru kuruyor, kritik kalemleri baştan sipariş ediyoruz.",
    symptoms: [
      { title: "Elektrik altyapısı yeni düzene uymuyor", text: "Kasa, vitrin ve cihaz noktaları için yeni hatlar gerekir." },
      { title: "Aydınlatma ürünü doğru göstermiyor", text: "Renk sıcaklığı ve renksel geri verim değeri yanlış seçilmiştir." },
      { title: "İnternet ve kasa sistemi sorunlu", text: "Data altyapısı planlanmamış, geçici çözümlerle ilerlenmiştir." },
      { title: "Açılış tarihi yaklaşıyor", text: "Program geriye doğru kurulmalı, tedarik hemen başlamalıdır." },
    ],
    scope: [
      "İş yeri elektrik tesisatı ve pano",
      "Data, kamera, kasa ve zayıf akım altyapısı",
      "Genel, vitrin ve ürün aydınlatması",
      "Alçıpan bölme duvar ve asma tavan",
      "Zemin kaplama ve boya",
      "Su tesisatı ve wc–mutfak alanı",
      "Klima ve havalandırma koordinasyonu",
      "Tabela beslemesi ve dış cephe aydınlatması",
    ],
    body: [
      { h2: "Ticari aydınlatma: satışı etkileyen teknik detay" },
      { p: "Mağazada aydınlatmanın işlevi görmek değil, göstermektir. Burada iki teknik değer öne çıkar: renk sıcaklığı ve renksel geri verim indeksi (CRI). CRI, bir ışığın renkleri ne kadar gerçeğe yakın gösterdiğini ifade eder; 100 gün ışığıdır." },
      {
        table: {
          head: ["İş kolu", "Renk sıcaklığı", "CRI hedefi"],
          rows: [
            ["Giyim, tekstil", "3000–3500K", "90+"],
            ["Kuyum, aksesuar", "4000K + vurgu", "95+"],
            ["Market, gıda", "4000K (et reyonunda özel)", "85+"],
            ["Ofis, çalışma alanı", "4000K", "80+"],
            ["Kafe, restoran", "2700–3000K", "90+"],
          ],
        },
      },
      { p: "Düşük CRI'li ucuz armatürler, ürünü olduğundan soluk gösterir. Tekstil ve gıda satan iş yerlerinde bu doğrudan satışa yansıyan bir fark yaratıyor." },

      { h2: "Elektrik ve data altyapısı" },
      { p: "İş yerinde elektrik planı, mobilya yerleşiminden sonra değil onunla birlikte yapılmalıdır. Kasa noktası, vitrin, deneme kabini, depo ve ürün rafları; hepsinin kendi besleme ve data ihtiyacı vardır." },
      { ul: [
        "Kasa noktasına kesintisiz güç için ayrı hat ve UPS prizi",
        "Kamera ve kayıt cihazı için ayrı beslenen bir teknik nokta",
        "Vitrin aydınlatmasının ayrı anahtar ve zaman rölesiyle kontrolü",
        "Tabela için ayrı sigorta ve fotosel/zaman kontrolü",
        "Data noktalarının Cat6 ile merkezi bir kabinete toplanması",
      ] },
      { p: "Bu ayrımlar yapılmadığında kasa arızası tüm mağazanın enerjisini kesebiliyor veya tabela unutulup gece boyu yanabiliyor. İkisi de kolayca önlenebilir durumlar." },

      { h2: "Açılış tarihine göre geri planlama" },
      { p: "Ticari işlerde programı sondan başa kuruyoruz. Açılış tarihi belirlenir; ondan geriye doğru temizlik, montaj, boya, kaplama, altyapı ve söküm süreleri yerleştirilir. Bu yöntem, hangi malzemenin en geç ne zaman sipariş edilmesi gerektiğini de otomatik olarak ortaya çıkarır." },
      { p: "Tedarik süresi uzun kalemler (özel aydınlatma, doğrama, tabela, özel seramik) genelde programın kritik yolunda yer alır. Bunlar keşif aşamasında belirlenip hemen siparişe çıkarılır; aksi hâlde şantiye hazır olur ama malzeme beklenir." },

      { h2: "Çalışan bir iş yerinde tadilat" },
      { p: "Faaliyeti durdurmadan yapılan tadilatlarda alan bölümlere ayrılır ve etaplı çalışılır. Toz bariyeri kurulur, gürültülü işler mesai dışına alınır, elektrik kesintileri müşteri yoğunluğunun düşük olduğu saatlere planlanır." },
      { p: "Bu şekilde çalışmak süreyi uzatır ve maliyeti bir miktar artırır; buna karşılık işletmenin kapanmaması çoğu durumda bu farkı fazlasıyla karşılıyor. Hangi yaklaşımın sizin için daha uygun olduğunu ciro ve süre üzerinden birlikte değerlendiriyoruz." },
    ],
    priceFactors: [
      "Alan büyüklüğü ve iş kolu gereksinimleri",
      "Elektrik ve data altyapısının kapsamı",
      "Aydınlatma armatürü sayısı ve sınıfı",
      "Bölme duvar, tavan ve zemin metrajı",
      "Faaliyet sürerken mi çalışılacağı",
    ],
    faqs: [
      { q: "Ne kadar sürede biter?", a: "60–100 m² bir dükkânda kapsamlı tadilat tipik olarak 15–25 iş günü sürer. Sadece aydınlatma ve boya gibi sınırlı kalemlerde bu süre 5–8 güne iner. Programı açılış tarihinize göre kuruyoruz." },
      { q: "Mimari proje olmadan olur mu?", a: "Küçük ölçekli işlerde yerleşim krokisi üzerinden ilerlenebiliyor. Zincir mağaza konsepti veya özel tasarım gerektiren işlerde mimarınızla koordineli çalışıyoruz; uygulama tarafını biz üstleniyoruz." },
      { q: "Tabela işini de yapıyor musunuz?", a: "Tabelanın elektrik beslemesi, kontrol ve montaj altyapısını yapıyoruz. Tabelanın üretimi ayrı bir uzmanlık; anlaştığınız üreticiyle koordineli çalışıyor veya çalıştığımız firmalarla sizi buluşturuyoruz." },
      { q: "Klima montajı dahil mi?", a: "Klima iç ve dış ünite yerleri, elektrik hattı ve drenaj hattı planlamasını yapıyoruz. Cihaz montajı ve gaz şarjı yetkili servis tarafından yapılıyor; programa dahil ederek koordine ediyoruz." },
    ],
    localAngle: "cadde üzeri mağazalar ve iş merkezlerindeki ofislerin yenileme ve açılış programları",
    related: ["anahtar-teslim-insaat", "komple-ev-tadilati", "kamera-guvenlik-sistemleri", "avize-aydinlatma"],
  },
];

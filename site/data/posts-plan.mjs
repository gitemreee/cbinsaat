// Planlama ve karar yazıları: elektrik altyapısı, anahtar teslim fiyatlandırma
// ve tadilat takvimi. Arama verisinde kapsam/maliyet sorguları güçlü.

export const planPosts = [
  {
    slug: "kablo-kesiti-ve-sigorta-secimi",
    title: "Evde kablo kesiti ve sigorta nasıl seçilir?",
    category: "Elektrik",
    published: "2026-08-02",
    reading: 9,
    metaTitle: "Kablo Kesiti ve Sigorta Seçimi | Ev Elektrik Tesisatı",
    metaDesc:
      "Aydınlatma, priz, mutfak ve klima devrelerinde kablo kesiti ve sigorta nasıl eşleştirilir? Kaçak akım rölesi, topraklama ve pano düzeni.",
    keywords: [
      "kablo kesiti",
      "sigorta seçimi",
      "kaçak akım rölesi",
      "priz devresi",
      "elektrik panosu düzeni",
    ],
    excerpt:
      "Sigorta kabloyu korur, cihazı değil. Bu tek cümle anlaşıldığında ev elektriğinde yapılan hataların büyük bölümü ortadan kalkıyor.",
    services: ["elektrik-tesisati", "elektrik-panosu", "elektrik-ariza"],
    intro:
      "Sigorta atıyor diye daha büyük sigorta takmak, ev elektriğinde yapılan en yaygın ve en tehlikeli hata. Sigortanın görevi cihazı değil, kablonun ısınmasını engellemektir. Kesit ile sigorta doğru eşleştirilmediğinde, koruma tamamen devre dışı kalır.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Konutlarda aydınlatma devreleri genellikle 1,5 mm² kablo ve 10 A sigorta, priz devreleri 2,5 mm² kablo ve 16 A sigorta ile kurulur.</strong> Fırın, klima ve şofben gibi yüksek güçlü cihazlar için ayrı devre çekilir ve kesit yüke göre büyütülür.",
      },
      {
        p: "Bunun üzerine can güvenliği için kaçak akım koruma rölesi eklenir. Konutlarda 30 mA hassasiyetli röle standarttır; ıslak hacimlerin ayrı korunması ise ek güvenlik sağlar.",
      },

      { h2: "Sigorta neyi korur?" },
      {
        p: "Sigorta, üzerinden geçen akım belirli bir değeri aştığında devreyi keser. Amaç, kablonun taşıyabileceğinden fazla akım geçmesini ve ısınarak yalıtımının bozulmasını engellemektir.",
      },
      {
        p: "Bu nedenle sigorta değeri kabloya göre seçilir, cihaza göre değil. 1,5 mm² kablonun bağlı olduğu bir devreye 16 A sigorta takıldığında, kablo tehlikeli seviyede ısınsa bile sigorta atmaz.",
      },
      {
        p: "Sigortanın sürekli atması bir arıza değil, bir uyarıdır. Sebebi bulunmadan sigortayı büyütmek, uyarı lambasını sökmeye benzer: gösterge susar, sorun büyür.",
      },

      { h2: "Devre planı: her şey aynı hatta olmaz" },
      {
        p: "Sağlıklı bir tesisat, yükün devrelere bölünmesiyle başlar. Tüm evi tek devreye bağlamak hem güvenli değildir hem bir arızada tüm evi karanlıkta bırakır.",
      },
      {
        ul: [
          "Aydınlatma devreleri: kat veya bölge bazında ayrılır.",
          "Genel priz devreleri: oda gruplarına göre bölünür.",
          "Mutfak priz devresi: ayrı ve daha yüksek kapasiteli olmalı.",
          "Banyo devresi: ayrı korunmalı, ıslak hacim kuralları geçerli.",
          "Fırın, ocak, klima: ayrı devre, yüke uygun kesit.",
          "Çamaşır ve bulaşık makinesi: mümkünse ayrı devre.",
        ],
      },
      {
        p: "Devrelerin ayrılması sadece güvenlik değil, kullanım konforu meselesi. Bir devrede sorun çıktığında evin geri kalanı çalışmaya devam eder ve arıza aramak da kolaylaşır.",
      },

      { h2: "Kesit ve sigorta eşleşmesi" },
      {
        table: {
          head: ["Devre", "Tipik kesit", "Tipik sigorta"],
          rows: [
            ["Aydınlatma", "1,5 mm²", "10 A"],
            ["Genel priz", "2,5 mm²", "16 A"],
            ["Mutfak priz", "2,5 mm²", "16 A (ayrı devre)"],
            ["Ankastre fırın", "2,5–4 mm²", "16–20 A"],
            ["Klima", "2,5–4 mm²", "16–20 A"],
            ["Elektrikli şofben / ısıtıcı", "4–6 mm²", "Cihaza göre"],
            ["Daire kolon hattı", "6–10 mm²", "Ana şalter değerine göre"],
          ],
        },
      },
      {
        p: "Tablodaki değerler tipik konut uygulamalarıdır. Kesin seçim; cihazın gücü, hat uzunluğu, döşeme biçimi ve ortam koşullarına göre yapılır ve uygulamanın yetkili kişilerce yürütülmesi gerekir.",
      },

      { h2: "Kesiti etkileyen dört etken" },
      {
        p: "Kesit yalnızca akıma bakılarak seçilmez. Dört etken birlikte değerlendirilir:",
      },
      {
        ol: [
          "Akım: cihazın veya devrenin çekeceği yük.",
          "Hat uzunluğu: uzun hatlarda gerilim düşümü artar.",
          "Döşeme biçimi: boru içinde, sıva altında veya yalıtım içinde döşenen kablo daha zor soğur.",
          "Ortam ve grup etkisi: yan yana döşenen çok sayıda kablo birbirini ısıtır.",
        ],
      },
      {
        p: "Müstakil evlerde bahçe, garaj veya depo hattı gibi uzun mesafeler bu hesabı belirginleştirir. Yirmi metre sonrası için seçilen kesit, aynı yükün beş metrelik hattındakinden büyük olabilir.",
      },
      {
        p: "Yalıtım içine gömülen kablolarda soğuma azalır. Mantolama veya ısı yalıtımı içinden geçen hatlarda bu durum dikkate alınmalı; aksi hâlde kablo hesaplanandan daha çok ısınır.",
      },

      { h2: "Kaçak akım rölesi" },
      {
        p: "Kaçak akım rölesi, devreye giren ve çıkan akım arasındaki farkı ölçer. Fark, akımın bir kısmının başka bir yoldan (örneğin insan üzerinden) toprağa gittiğini gösterir ve röle devreyi milisaniyeler içinde keser.",
      },
      {
        p: "Konutlarda can koruma amacıyla 30 mA hassasiyetli röleler kullanılır. Daha yüksek değerli röleler yangın koruma amaçlıdır ve can güvenliği için yeterli değildir.",
      },
      {
        quote:
          "Kaçak akım rölesi olmayan bir tesisatta sigortalar ne kadar yeni olursa olsun, can güvenliği açısından temel koruma eksiktir.",
      },
      {
        p: "Rölenin test butonu vardır ve bu buton düzenli olarak denenmelidir. Basıldığında devreyi kesmiyorsa röle görevini yapmıyor demektir; değiştirilmesi gerekir.",
      },

      { h2: "Topraklama olmadan olmaz" },
      {
        p: "Topraklama, cihaz gövdesine kaçan akıma güvenli bir yol açar. Kaçak akım rölesinin de doğru çalışabilmesi için sağlam bir topraklama gerekir; ikisi birlikte bir sistem oluşturur.",
      },
      {
        p: "Eski binalarda prizlerde topraklama ucu bulunsa bile hatta gerçekten toprak bağlantısı olmayabilir. Bu, gözle anlaşılmaz; ölçümle tespit edilir.",
      },
      {
        p: "Topraklama direncinin ölçülmesi ve kaydedilmesi, tesisat yenilemelerinde standart bir adım olmalı. Ölçüm yapılmadan \"topraklama var\" demek, sadece kablonun varlığını doğrular.",
      },

      { h2: "Pano düzeni" },
      {
        p: "İyi kurulmuş bir daire panosunda sıralama bellidir: kolon hattı, ana şalter, kaçak akım rölesi ve ardından devre sigortaları. Her sigortanın hangi devreye ait olduğu etiketlenir.",
      },
      {
        ul: [
          "Etiketleme, arıza anında dakikalar kazandırır.",
          "Sigortalar sıkı bağlanmalı; gevşek klemens ısınır ve yanık yapar.",
          "Pano içinde yedek yer bırakılmalı; ileride devre eklenebilir.",
          "Pano kapağı kapanabilir ve erişilebilir olmalı.",
          "Nem alan yerlere pano konumlandırılmamalı.",
        ],
      },
      {
        p: "Gevşek bağlantı, ev elektriğinde en sinsi arıza nedenlerinden biri. Isınma yavaş ilerler, plastik kararır ve sorun ancak koku duyulduğunda fark edilir. Yıllık kontrolde klemens sıkma, basit ama etkili bir bakım.",
      },

      { h2: "Sık yapılan hatalar" },
      {
        table: {
          head: ["Hata", "Sonucu"],
          rows: [
            ["1,5 mm² kabloya 16 A sigorta", "Kablo korumasız kalır, ısınma riski"],
            ["Sigortayı atıyor diye büyütmek", "Koruma devre dışı kalır"],
            ["Tüm evi tek devreye bağlamak", "Aşırı yük ve tek arızada tüm ev etkilenir"],
            ["Topraklamayı bağlamamak", "Kaçak akım koruması etkisiz kalır"],
            ["Priz devresine uzatma kablosuyla yığılma", "Devrenin kapasitesi aşılır"],
            ["Klemens yerine bantlı ek", "Isınma ve yangın riski"],
            ["Islak hacimde uygun olmayan malzeme", "Nem kaynaklı kaçak"],
          ],
        },
      },
      {
        p: "Bu hataların ortak yanı, hepsinin başlangıçta sorunsuz çalışıyor görünmesi. Risk, yük arttığında veya nem devreye girdiğinde ortaya çıkıyor; o noktada da genelde geç kalınmış oluyor.",
      },

      { h2: "Yüksek güçlü cihazlar" },
      {
        p: "Ankastre fırın, elektrikli ocak, klima ve elektrikli ısıtıcılar sürekli ve yüksek akım çeker. Bu cihazların genel priz devresine bağlanması, o devreyi sürekli sınırda çalıştırır.",
      },
      {
        p: "Doğru uygulama, her biri için panodan ayrı devre çekmektir. Bu hem devrenin kapasitesini korur hem cihazın arızasında sadece o hattı etkiler.",
      },
      {
        p: "Elektrikli araç şarjı gibi yeni ihtiyaçlar da baştan planlanmalı. Sonradan eklenen bir şarj hattı, mevcut kolon kapasitesinin gözden geçirilmesini gerektiriyor.",
      },

      { h2: "Priz ve aydınlatma planı" },
      {
        p: "Kesit ve sigorta doğru seçilse bile, priz sayısı ve yeri yanlış planlanmışsa ev kullanışsız olur. Yetersiz priz, uzatma kablosu kullanımını zorunlu kılar ve bu da devreyi sınırda çalıştırır.",
      },
      {
        ul: [
          "Mutfakta tezgâh üstü priz sayısı, kullanılacak küçük ev aletlerine göre belirlenir.",
          "Yatak odalarında yatağın iki yanına priz konumlandırılır.",
          "Televizyon ve çalışma alanlarında grup priz planlanır.",
          "Banyoda priz, ıslak hacim kurallarına uygun mesafede olmalı.",
          "Balkon ve bahçede dış mekân tipi, korumalı priz kullanılır.",
          "Ankastre cihazların bağlantı noktaları mobilya planına göre belirlenir.",
        ],
      },
      {
        p: "Bu plan, tesisat çekilmeden önce mobilya yerleşimiyle birlikte yapılmalı. Sonradan fark edilen bir priz ihtiyacı, ya duvarın açılmasını ya da kalıcı olarak uzatma kablosu kullanılmasını gerektiriyor.",
      },

      { h2: "Aydınlatma devrelerinde dikkat" },
      {
        p: "Aydınlatma devreleri düşük yük çeker ama nokta sayısı fazladır. Anahtar konumları, komütatör ve vaevien bağlantıları ve olası akıllı ev altyapısı bu aşamada düşünülmelidir.",
      },
      {
        p: "Uzun koridorlarda ve merdivenlerde iki noktadan kumanda edilebilen düzen, konforu belirgin artırır. Bu, sonradan eklenmesi zahmetli olan ama kurulum sırasında ek maliyeti düşük bir çözüm.",
      },
      {
        p: "Akıllı ev sistemleri düşünülüyorsa nötr hattının anahtar kutusuna kadar getirilmesi gerekir. Eski tesisatlarda bu hat çoğu zaman yoktur ve sonradan eklenmesi duvar açmayı gerektirir.",
      },

      { h2: "Panoda etiketleme ve kayıt" },
      {
        p: "İş bittiğinde panoda her sigortanın hangi devreye ait olduğu yazılı olmalı. Bu, arıza anında hangi şalterin indirileceğini saniyeler içinde gösterir.",
      },
      {
        p: "Etiketle birlikte tesisat krokisinin de saklanması faydalı. Hangi duvarda hangi hattın geçtiği bilindiğinde, ileride yapılacak delme işlerinde kablo kesme riski büyük ölçüde ortadan kalkar.",
      },
      {
        p: "Kapatmadan önce çekilen ölçülü fotoğraflar, bu krokinin en pratik hâli. Birkaç dakikalık bir iş; yıllar sonra tek bilgi kaynağı olarak kalıyor.",
      },

      { h2: "Tesisat yenileme belirtileri" },
      {
        ol: [
          "Sigortalar sık sık atıyorsa.",
          "Prizler ısınıyor veya kararmışsa.",
          "Priz ve anahtarlarda kıvılcım görülüyorsa.",
          "Tesisatta topraklama yoksa.",
          "Kablolar bez izoleli veya çok eskiyse.",
          "Panoda kaçak akım rölesi bulunmuyorsa.",
          "Yeni cihazlar için sürekli uzatma kablosu kullanılıyorsa.",
        ],
      },
      {
        p: "Bu belirtilerden birkaçı bir aradaysa kısmi onarım yerine tesisatın bütününü değerlendirmek daha doğru. Parça parça yapılan müdahaleler, eski hattı sistemde bırakarak riski taşımaya devam ediyor.",
      },

      { h2: "Malatya'daki bina stoğunda durum" },
      {
        p: "Bölgede kullanımdaki dairelerin bir bölümü, bugünkü cihaz yüklerinin çok altında bir tüketim öngörülerek kurulmuş tesisatlara sahip. O dönemde evde bulunan cihazlarla bugünkü liste karşılaştırıldığında fark açık.",
      },
      {
        p: "Deprem sonrası yapılan iç mekân yenilemelerinde bu, önemli bir fırsat. Duvarlar zaten açılmışken tesisatın da yenilenmesi, ileride ikinci kez kırım yapılmasını önlüyor.",
      },
      {
        p: "Tadilat planlanırken elektrik altyapısının ayrı bir başlık olarak ele alınması gerekiyor. Boya ve zemin görünür kalemler; tesisat ise görünmeyen ama güvenliği doğrudan belirleyen kalem.",
      },

      { h2: "Kolon hattı ve daire kapasitesi" },
      {
        p: "Daire içindeki devreler ne kadar doğru kurulursa kurulsun, panoya gelen kolon hattı yetersizse sistem sınırda çalışır. Kolon, dairenin toplam çekebileceği gücü belirleyen hattır.",
      },
      {
        p: "Cihaz sayısının arttığı evlerde bu sınır zorlanabiliyor. Elektrikli ısıtıcı, klima, ankastre setler ve şarj ihtiyaçları bir araya geldiğinde, eski bir kolon hattı bugünkü kullanımı karşılamıyor.",
      },
      {
        p: "Kolon yenilemesi bina ortak alanını ilgilendirdiği için yönetimle birlikte planlanması gerekir. Tadilat sırasında bu konunun gündeme alınması, ileride ikinci bir kırım işini önlüyor.",
      },

      { h2: "Uygulama kimin işi?" },
      {
        p: "Ev içi elektrik işleri, yürürlükteki mevzuata uygun şekilde yetkili kişilerce yapılmalıdır. Kesit ve sigorta seçimi bir hesap işidir; internetten bulunan bir tabloyu uygulamak, kendi koşullarınıza uygun olmayabilir.",
      },
      {
        p: "Bu yazının amacı, yapılan işi anlamanızı ve doğru soruları sormanızı sağlamak. Panoda hangi devrenin olduğunu, hangi sigortanın neyi koruduğunu bilmek, evinizin güvenliği hakkında fikir sahibi olmak demektir.",
      },
      {
        p: "İş bittiğinde pano etiketlerinin eksiksiz olmasını, kaçak akım rölesinin test edilmesini ve topraklama ölçümünün paylaşılmasını istemek en doğal hakkınız.",
      },
    ],
    faqs: [
      {
        q: "Sigorta sürekli atıyorsa büyütebilir miyim?",
        a: "Hayır. Sigorta değeri kabloya göre seçilir; büyütmek, kablonun aşırı ısınmasına karşı korumayı kaldırır. Sürekli atmanın nedeni ya devredeki yükün fazlalığı ya da bir arızadır. Doğru çözüm nedeni bulmak, gerekiyorsa yükü ayrı bir devreye almaktır.",
      },
      {
        q: "Priz devresinde neden 2,5 mm² kullanılır?",
        a: "Priz devrelerine bağlanan cihazların toplam yükü aydınlatmadan yüksektir ve değişkendir. 2,5 mm² kesit, 16 A sigortayla birlikte bu yükü güvenle taşır. Aydınlatma devrelerinde yük düşük ve öngörülebilir olduğu için 1,5 mm² ve 10 A yaygın uygulamadır.",
      },
      {
        q: "Kaçak akım rölesi ile sigorta arasındaki fark ne?",
        a: "Sigorta aşırı akıma karşı kabloyu korur; kaçak akım rölesi ise akımın bir kısmının toprağa kaçtığını algılayarak insanı korur. İkisi farklı tehlikelere karşıdır ve birbirinin yerine geçmez. Konutlarda 30 mA hassasiyetli röle can koruma amacıyla kullanılır.",
      },
      {
        q: "Kaçak akım rölesi ne sıklıkla test edilmeli?",
        a: "Üzerindeki test butonu düzenli olarak, örneğin altı ayda bir denenmelidir. Butona basıldığında röle devreyi anında kesmelidir. Kesmiyorsa röle görevini yapmıyordur ve değiştirilmesi gerekir. Test sonrası şalterin tekrar kaldırılması yeterlidir.",
      },
      {
        q: "Klima için ayrı hat şart mı?",
        a: "Şart sayılmalıdır. Klima sürekli ve yüksek akım çeken bir cihazdır; genel priz devresine bağlandığında o devreyi sınırda çalıştırır. Panodan çekilen ayrı bir devre, hem güvenliği artırır hem arıza durumunda etkiyi tek hatla sınırlar.",
      },
      {
        q: "Eski evimde topraklama var mı, nasıl anlarım?",
        a: "Prizde topraklama ucunun bulunması, hatta gerçekten toprak bağlantısı olduğunu göstermez. Kesin bilgi ölçümle alınır. Tesisat yenilemesi yapılıyorsa topraklama direncinin ölçülmesi ve sonucun kayda geçirilmesi standart bir adım olmalıdır.",
      },
      {
        q: "Uzatma kablosu kullanmak zararlı mı?",
        a: "Geçici kullanımda sorun değildir; kalıcı çözüm olarak kullanıldığında risklidir. Tek prizden çok sayıda cihaz beslendiğinde devrenin kapasitesi aşılır, kablo ve priz ısınır. Sürekli uzatma ihtiyacı duyuluyorsa priz sayısı ve devre planı yetersiz demektir.",
      },
      {
        q: "Tesisatı komple yenilemek mi, kısmi onarım mı?",
        a: "Belirtiler tek bir noktadaysa kısmi onarım yeterli olabilir. Ancak sigortaların sık atması, prizlerin ısınması, topraklama eksikliği ve çok eski kablolama bir aradaysa bütünsel yenileme daha doğrudur. Parça müdahaleler eski hattı sistemde bırakarak riski sürdürür.",
      },
    ],
    related: ["ev-elektrik-tesisati-maliyeti", "elektrik-tesisati-yenileme-belirtileri", "kacak-akim-rolesi-neden-atar"],
  },

  {
    slug: "anahtar-teslim-fiyat-nasil-hesaplanir",
    title: "Anahtar teslim işte fiyat nasıl hesaplanır?",
    category: "İnşaat",
    published: "2026-07-25",
    reading: 9,
    metaTitle: "Anahtar Teslim Fiyat Nasıl Hesaplanır? | Teklif Rehberi",
    metaDesc:
      "Metrekare fiyatı mı, kalem kalem keşif mi? Anahtar teslim işlerde fiyatı belirleyen değişkenler, teklifte olması gerekenler ve karşılaştırma yöntemi.",
    keywords: [
      "anahtar teslim fiyat",
      "tadilat teklifi",
      "metrekare fiyatı",
      "keşif ve metraj",
      "inşaat sözleşmesi",
    ],
    excerpt:
      "Aynı iş için gelen üç teklif çok farklıysa sorun fiyatta değil, kapsamda. Bu yazı, teklifleri gerçekten karşılaştırılabilir hâle getirmek için yazıldı.",
    services: ["anahtar-teslim-tadilat", "anahtar-teslim-insaat", "proje-uygulama-yonetimi"],
    intro:
      "\"Metrekaresi ne kadar?\" sorusu, anahtar teslim işlerde en çok sorulan ama en az bilgi veren soru. Aynı metrekaredeki iki daire, kapsamı farklı olduğu için tamamen farklı bütçelerle biter. Bu yazıda fiyatın nasıl oluştuğunu ve teklifleri neye göre karşılaştırmanız gerektiğini anlatıyoruz.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Anahtar teslim işlerde fiyat iki yöntemle çıkarılır: hızlı bir fikir veren metrekare birim fiyatı ve gerçek fiyatı veren kalem bazlı keşif–metraj.</strong> Karar aşamasında birincisi, sözleşme aşamasında ikincisi kullanılır.",
      },
      {
        p: "Metrekare fiyatı bir tahmindir; neyin dâhil olduğunu söylemez. Kalem bazlı keşif ise hangi işin ne kadar yapılacağını yazar ve bu sayede iki teklif gerçekten karşılaştırılabilir hâle gelir.",
      },

      { h2: "Metrekare fiyatı neyi gizler?" },
      {
        p: "Aynı büyüklükteki iki dairede iş kalemleri çok farklı olabilir. Birinde tesisat yenilenirken diğerinde sadece boya yapılıyorsa, ikisini aynı metrekare fiyatıyla konuşmak anlamsız.",
      },
      {
        p: "Metrekare fiyatı ayrıca ıslak hacim sayısını da yansıtmaz. Banyo ve mutfak, bir dairenin en yoğun iş gören bölümleridir; iki banyolu bir daire, aynı metrekaredeki tek banyolu daireden belirgin farklı bir bütçeye sahiptir.",
      },
      {
        p: "Bu yüzden metrekare fiyatını bir başlangıç aralığı olarak kullanmak doğru; ancak sözleşme bu rakama değil, metraja dayanmalı.",
      },

      { h2: "Fiyatı belirleyen değişkenler" },
      {
        table: {
          head: ["Değişken", "Fiyata etkisi"],
          rows: [
            ["Mevcut durum", "Söküm ve moloz miktarını belirler"],
            ["Islak hacim sayısı", "En yoğun iş kalemi, doğrudan etki eder"],
            ["Tesisat yenileme kapsamı", "Elektrik ve su hatları kırım gerektirir"],
            ["Malzeme sınıfı", "Aynı işte en geniş fark yaratan kalem"],
            ["Kat ve asansör durumu", "Malzeme taşıma ve moloz indirme süresi"],
            ["İş takvimi", "Hızlandırma talebi ekip sayısını artırır"],
            ["Bina kuralları", "Çalışma saatleri iş süresini uzatabilir"],
            ["Ruhsat ve izin gereksinimi", "Süreç ve belge maliyeti doğurur"],
          ],
        },
      },
      {
        p: "Bu tablodaki her satır, teklifte açıkça yazılması gereken bir başlık. Yazılmadığında \"sonradan çıkan kalem\" hâline geliyor ve tartışma da orada başlıyor.",
      },

      { h2: "Keşifte ne ölçülür?" },
      {
        p: "Doğru bir teklif için yerinde keşif şart. Keşifte ölçülen değerler, metrajın ve dolayısıyla fiyatın temelini oluşturur:",
      },
      {
        ul: [
          "Net kullanım alanı ve oda ölçüleri.",
          "Duvar uzunlukları ve tavan yüksekliği.",
          "Islak hacimlerin sayısı, ölçüsü ve mevcut durumu.",
          "Kapı ve pencere adedi, ölçüleri.",
          "Priz, anahtar ve aydınlatma noktası sayısı.",
          "Mevcut tesisatın durumu ve yaşı.",
          "Zemin türü ve kaplama altındaki durum.",
          "Moloz çıkarma güzergâhı ve taşıma koşulları.",
        ],
      },
      {
        p: "Sekizinci madde çoğu zaman hafife alınır. Asansörsüz bir binada dördüncü kattan moloz indirmek ile zemin kattan çıkarmak, aynı iş için farklı süre ve iş gücü demektir.",
      },

      { h2: "Metraj: fiyatın omurgası" },
      {
        p: "Metraj, her iş kaleminin miktarını gösterir. Kaç metrekare seramik, kaç metre kablo, kaç adet priz, kaç metrekare boya. Fiyat bu miktarların birim fiyatlarla çarpılmasıyla oluşur.",
      },
      {
        p: "Bu yöntemin en büyük faydası şeffaflık. Bir kalemin miktarı veya sınıfı değiştiğinde fiyatın ne kadar değişeceği kolayca görülür; pazarlık da kapsam üzerinden yapılabilir hâle gelir.",
      },
      {
        p: "Metrajsız teklifler tek satırdan oluşur ve içeriği görünmez. İki metrajsız teklifi karşılaştırmak, iki kapalı kutuyu ağırlığına bakarak kıyaslamaya benziyor.",
      },

      { h2: "Malzeme kime ait?" },
      {
        p: "Teklifin en kritik ayrımı bu. \"Malzeme dâhil\" ifadesi tek başına yeterli değildir; hangi malzemenin hangi sınıfta dâhil olduğu yazılmalıdır.",
      },
      {
        table: {
          head: ["Model", "Nasıl işler", "Dikkat"],
          rows: [
            ["Her şey dâhil", "Malzeme ve işçilik yüklenicide", "Malzeme sınıfı yazılı olmalı"],
            ["Malzeme sizde, işçilik yüklenicide", "Malzemeyi siz alırsınız", "Eksik malzeme işi durdurur"],
            ["Karma", "Belirli kalemler ayrı", "Hangi kalem kimde, listelenmeli"],
          ],
        },
      },
      {
        p: "İkinci modelde en sık yaşanan sorun tedarik gecikmesi. Ekip sahada beklerken malzemenin yolda olması, hem süreyi uzatıyor hem planı bozuyor. Bu modelde alım takvimi baştan belirlenmeli.",
      },

      { h2: "Teklifte bulunması gerekenler" },
      {
        ol: [
          "İşin kapsamı: hangi mahalde hangi işler yapılacak.",
          "Metraj: her kalemin miktarı.",
          "Malzeme sınıfı: marka veya eşdeğer nitelik tanımı.",
          "Hariç kalemler: neyin dâhil olmadığı açıkça yazılmalı.",
          "Süre: başlangıç, bitiş ve ara teslim tarihleri.",
          "Ödeme planı: hangi aşamada ne kadar ödeneceği.",
          "Değişiklik yönetimi: revizyon talebi nasıl fiyatlanacak.",
          "Garanti: hangi iş için ne kadar süre.",
          "Temizlik ve moloz: kime ait, nereye taşınacak.",
        ],
      },
      {
        p: "Dördüncü madde en çok atlanan ve en çok tartışma yaratan başlık. Hariç kalemlerin yazılması, yüklenici için de müşteri için de koruma sağlıyor.",
      },

      { h2: "Teklifler neden farklı çıkar?" },
      {
        p: "Aynı iş için gelen teklifler arasında büyük fark varsa, ilk varsayım fiyat farkı değil kapsam farkı olmalıdır. Tekliflerin yan yana konup satır satır karşılaştırılması gerekir.",
      },
      {
        ul: [
          "Biri tesisat yenilemeyi dâhil etmiş, diğeri etmemiş olabilir.",
          "Malzeme sınıfları farklı olabilir.",
          "Biri moloz taşımayı hariç tutmuş olabilir.",
          "Biri söküm işini müşteriye bırakmış olabilir.",
          "Süre taahhüdü ve ekip sayısı farklı olabilir.",
          "Biri sonradan çıkacak kalemleri baştan öngörmüş olabilir.",
        ],
      },
      {
        quote:
          "Düşük teklif çoğu zaman ucuz iş değil, dar kapsam demektir. Fark, iş ilerledikçe ek kalem olarak geri gelir.",
      },
      {
        p: "Karşılaştırmayı kolaylaştırmak için aynı kapsam listesini tüm firmalara vermek en pratik yöntem. Herkes aynı listeyi fiyatlandırdığında, teklifler gerçekten karşılaştırılabilir hâle geliyor.",
      },

      { h2: "Ödeme planı nasıl kurulur?" },
      {
        p: "Sağlıklı bir ödeme planı, işin ilerlemesine bağlıdır. Peşin ödeme oranının makul kalması ve ara ödemelerin tamamlanan aşamalara bağlanması, iki taraf için de koruma sağlar.",
      },
      {
        p: "Aşamalar somut olmalı: söküm tamamlandığında, tesisat çekildiğinde, seramik bittiğinde, teslimde. Belirsiz ifadeler yerine ölçülebilir kilometre taşları kullanılmalı.",
      },
      {
        p: "Son ödemenin teslim ve kontrol sonrasına bırakılması yaygın ve doğru bir uygulama. Teslim kontrol listesi üzerinden yapılan gözden geçirme, eksiklerin işin sonunda değil, o an giderilmesini sağlıyor.",
      },

      { h2: "Değişiklik talepleri" },
      {
        p: "Tadilat sırasında fikir değişmesi normaldir. Önemli olan, değişikliğin nasıl yönetileceğinin baştan belirlenmiş olması. Her değişiklik talebi; kapsam, süre ve fiyat açısından yazılı olarak değerlendirilmelidir.",
      },
      {
        p: "Sözlü olarak konuşulan ve kayda geçmeyen değişiklikler, işin sonunda hesap tartışmasına dönüşüyor. Kısa bir mesaj bile olsa, değişikliğin yazılı bir izinin kalması iki tarafı da rahatlatıyor.",
      },
      {
        p: "Bazı değişiklikler zincirleme etki yaratır: duvar yeri değişince elektrik hattı, kapı ölçüsü ve zemin metrajı da değişir. Bu etkinin önceden konuşulması, sürprizi ortadan kaldırıyor.",
      },

      { h2: "Garanti neyi kapsar?" },
      {
        p: "Garanti konusu teklif aşamasında konuşulmadığında, sorun çıktığında tartışma başlar. Kapsamın iki başlıkta netleşmesi gerekir: işçilik garantisi ve malzeme garantisi.",
      },
      {
        p: "İşçilik garantisi, yapılan uygulamanın kusurundan doğan sorunları kapsar; malzeme garantisi ise ürünün üreticisine aittir. Kullanım hatasından doğan durumlar ise ikisinin de dışında kalır.",
      },
      {
        p: "Süreler yazılı olmalı ve hangi iş kalemi için ne kadar garanti verildiği ayrı ayrı belirtilmeli. Tek satırlık genel ifadeler, ihtiyaç anında bir işe yaramıyor.",
      },

      { h2: "İşin görünmeyen kalemleri" },
      {
        p: "Bütçe yapılırken çoğu zaman görünen işler hesaplanır: seramik, boya, mutfak. Görünmeyen kalemler ise sonradan gündeme gelir ve toplamı azımsanmayacak bir yer tutar.",
      },
      {
        ul: [
          "Söküm ve moloz taşıma.",
          "Ortak alan koruması ve temizlik.",
          "Nakliye ve kat taşıma.",
          "Küçük malzeme ve sarf kalemleri.",
          "İş sonu ince temizlik.",
          "Geçici konaklama veya depolama ihtiyacı.",
        ],
      },
      {
        p: "Bu kalemlerin teklifte yer alıp almadığı baştan sorulmalı. Yer almıyorlarsa bütçenin ayrı bir satırı olarak planlanmaları gerekiyor; yoksa iş sonunda beklenmedik bir toplamla karşılaşılıyor.",
      },

      { h2: "Beklenmedik kalemler" },
      {
        p: "Özellikle eski yapılarda, söküm yapılmadan görülemeyen durumlar vardır: çürümüş bir hat, rutubet almış bir duvar, altından bozuk çıkan bir şap.",
      },
      {
        p: "Bu kalemler baştan fiyatlanamaz ama öngörülebilir. Deneyimli bir keşifte, riskli noktalar not edilir ve \"çıkarsa şu şekilde ilerlenir\" diye konuşulur. Böylece sürpriz, plana dönüşür.",
      },
      {
        p: "Bütçe planlanırken bu tür kalemler için bir pay ayrılması makul. Yapılan işin niteliğine göre değişse de, esneklik payı bırakmak işin akışını bozmadan ilerlemeyi sağlıyor.",
      },

      { h2: "Sözleşmede neler yer almalı?" },
      {
        p: "Teklif kabul edildikten sonra iş, sözleşmeyle tanımlanır. Sözleşme bir formalite değil; iki tarafın da neyi taahhüt ettiğini gösteren tek ortak belge.",
      },
      {
        ol: [
          "Tarafların bilgileri ve iş yerinin adresi.",
          "İşin kapsamı ve teklife ek olarak metraj listesi.",
          "Malzeme sınıfları ve marka–eşdeğer tanımları.",
          "Başlangıç ve bitiş tarihleri, ara teslim aşamaları.",
          "Ödeme planı ve her ödemenin hangi aşamaya bağlı olduğu.",
          "Değişiklik taleplerinin nasıl fiyatlanacağı.",
          "Gecikme hâlinde izlenecek yol.",
          "Garanti kapsamı ve süresi.",
          "İş güvenliği ve ortak alan kullanımına dair sorumluluklar.",
        ],
      },
      {
        p: "Metrajın sözleşmeye ek olarak konması, en önemli ayrıntı. Kapsam tartışması çıktığında bakılacak yer bu ek oluyor; olmadığında konuşma hafızaya kalıyor.",
      },

      { h2: "İş süresince iletişim" },
      {
        p: "Fiyatın sağlıklı yürümesi, iş sırasındaki iletişime de bağlı. Kimin karar verdiği, taleplerin kime iletileceği ve ilerlemenin nasıl paylaşılacağı baştan belirlenmeli.",
      },
      {
        p: "Haftalık kısa bir durum bildirimi çoğu iş için yeterli: hangi aşama tamamlandı, sırada ne var, hangi karar bekleniyor. Bu üç başlık, sürprizlerin büyük bölümünü ortadan kaldırıyor.",
      },
      {
        p: "Kararların tek bir kişide toplanması da işi hızlandırıyor. Birden fazla kişinin farklı talimat verdiği işlerde hem süre uzuyor hem sorumluluk belirsizleşiyor.",
      },

      { h2: "Firma seçerken bakılacaklar" },
      {
        p: "Fiyat tek başına karar vermeye yetmez. Aynı işi yapabilecek firmalar arasında ayrımı, çoğu zaman süreç yönetimi belirler.",
      },
      {
        table: {
          head: ["Ölçüt", "Nasıl anlaşılır"],
          rows: [
            ["Keşif ciddiyeti", "Ölçü alındı mı, notlar tutuldu mu?"],
            ["Teklifin ayrıntısı", "Metraj ve hariç kalemler yazılı mı?"],
            ["Benzer iş deneyimi", "Aynı tip işten örnek gösterilebiliyor mu?"],
            ["Planlama alışkanlığı", "İş programı sunuluyor mu?"],
            ["İletişim", "Sorulara net ve zamanında yanıt geliyor mu?"],
            ["Sonrası", "Garanti ve eksik takibi nasıl yürüyor?"],
          ],
        },
      },
      {
        p: "İlk satır çoğu zaman en iyi göstergedir: keşifte ölçü almadan, mevcut duruma bakmadan verilen bir fiyat, sonradan değişmeye mahkûm bir fiyattır.",
      },

      { h2: "Karar verirken" },
      {
        table: {
          head: ["Sorun", "Ne sorulmalı"],
          rows: [
            ["Teklif tek satır", "Metraj paylaşılabilir mi?"],
            ["Süre belirsiz", "Ara teslim tarihleri neler?"],
            ["Malzeme tanımı yok", "Hangi sınıf, hangi eşdeğer?"],
            ["Hariç kalemler yazılmamış", "Neler dâhil değil?"],
            ["Garanti konuşulmamış", "Hangi iş, ne kadar süre?"],
            ["Referans yok", "Benzer işlerden örnek görebilir miyim?"],
          ],
        },
      },
      {
        p: "Bu altı soru, teklifi veren tarafın işi ne kadar planladığını da gösterir. Yanıtlar net geliyorsa iş de büyük ihtimalle planlı yürüyecek demektir.",
      },
      {
        p: "Son bir hatırlatma: fiyat, işin tek boyutu değil. Aynı bütçeyle yapılan iki iş arasındaki farkı çoğu zaman planlama, iş sırası ve iletişim belirliyor. Teklif aşamasında bunları gözlemlemek, sonraki haftaları büyük ölçüde öngörülebilir kılıyor.",
      },
    ],
    faqs: [
      {
        q: "Anahtar teslim tadilat metrekare fiyatıyla hesaplanır mı?",
        a: "Metrekare fiyatı yalnızca ilk fikir için kullanılır. Gerçek fiyat, kalem bazlı keşif ve metrajla çıkar; çünkü aynı metrekaredeki iki dairede ıslak hacim sayısı, tesisat kapsamı ve malzeme sınıfı tamamen farklı olabilir. Sözleşme metraja dayanmalıdır.",
      },
      {
        q: "Üç firmadan çok farklı teklifler aldım, neden?",
        a: "Neredeyse her zaman kapsam farkındandır. Biri tesisat yenilemeyi, moloz taşımayı veya sökümü dâhil etmemiş olabilir; malzeme sınıfları farklı olabilir. Aynı kapsam listesini tüm firmalara vermek, teklifleri gerçekten karşılaştırılabilir hâle getirir.",
      },
      {
        q: "Teklifte hangi başlıklar mutlaka olmalı?",
        a: "Kapsam, metraj, malzeme sınıfı, hariç kalemler, süre, ödeme planı, değişiklik yönetimi, garanti ve moloz–temizlik sorumluluğu. Bu başlıkların eksik olması, işin ilerleyen aşamasında tartışma çıkma ihtimalini belirgin artırır.",
      },
      {
        q: "Malzemeyi kendim alsam daha mı ucuz olur?",
        a: "Bazı kalemlerde olabilir, ancak tedarik sorumluluğu da size geçer. Eksik veya geç gelen malzeme, sahadaki ekibi bekletir ve süreyi uzatır. Bu modeli seçecekseniz alım takviminin iş programıyla birlikte planlanması gerekir.",
      },
      {
        q: "Ödeme planı nasıl olmalı?",
        a: "Ödemeler işin ilerlemesine bağlanmalıdır. Peşin oranı makul tutulur, ara ödemeler tamamlanan somut aşamalara bağlanır ve son ödeme teslim kontrolünden sonra yapılır. Aşamalar ölçülebilir olmalı; belirsiz ifadeler yerine net kilometre taşları kullanılmalıdır.",
      },
      {
        q: "İş sırasında fikir değiştirirsem ne olur?",
        a: "Normal bir durumdur; önemli olan değişikliğin yazılı olarak değerlendirilmesidir. Her talep kapsam, süre ve fiyat açısından ele alınmalı ve kayda geçmelidir. Bazı değişiklikler zincirleme etki yaratır; bu etkinin önceden konuşulması sürprizi önler.",
      },
      {
        q: "Sonradan çıkan kalemler için ne yapmalı?",
        a: "Eski yapılarda söküm yapılmadan görülemeyen durumlar olabilir. Deneyimli bir keşifte riskli noktalar not edilir ve çıkması hâlinde nasıl ilerleneceği baştan konuşulur. Bütçede bu tür kalemler için bir esneklik payı bırakmak makul bir yaklaşımdır.",
      },
      {
        q: "En düşük teklifi seçmek doğru mu?",
        a: "Kapsamlar aynıysa değerlendirilebilir; farklıysa yanıltıcıdır. Düşük teklif çoğu zaman ucuz iş değil, dar kapsam anlamına gelir ve fark iş ilerledikçe ek kalem olarak geri döner. Karşılaştırma fiyat üzerinden değil, kapsam üzerinden yapılmalıdır.",
      },
    ],
    related: ["anahtar-teslim-insaat-kapsami", "tadilat-butcesi-nasil-planlanir", "komple-ev-tadilati-ne-kadar-surer"],
  },

  {
    slug: "komple-ev-tadilati-ne-kadar-surer",
    title: "Komple ev tadilatı ne kadar sürer?",
    category: "Tadilat",
    published: "2026-07-23",
    reading: 9,
    metaTitle: "Komple Ev Tadilatı Ne Kadar Sürer? Hafta Hafta Takvim",
    metaDesc:
      "Söküm, tesisat, şap, seramik, boya ve montaj: komple daire tadilatında hafta hafta takvim, kuruma süreleri ve gecikme nedenleri.",
    keywords: [
      "ev tadilatı ne kadar sürer",
      "tadilat takvimi",
      "daire tadilatı süresi",
      "iş programı",
      "tadilat aşamaları",
    ],
    excerpt:
      "Tadilat süresini uzatan şey genelde iş miktarı değil; beklenen kuruma süreleri, geciken malzeme ve sırası bozulan işler.",
    services: ["komple-ev-tadilati", "daire-tadilati", "anahtar-teslim-tadilat"],
    intro:
      "\"Bir ayda biter mi?\" sorusunun cevabı kapsama bağlı. Sadece boya ve zemin yenilemesi yapılacaksa evet; tesisat, ıslak hacim ve zemin birlikte yenilenecekse hayır. Süreyi belirleyen asıl unsur ise çoğu kişinin hesaba katmadığı bir şey: beklemek zorunda olduğunuz kuruma süreleri.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Yaklaşık 100 metrekarelik bir dairede tesisat, ıslak hacim, zemin ve boyayı kapsayan komple bir tadilat tipik olarak beş–sekiz hafta sürer.</strong> Sadece boya ve zemin yapılacaksa bu süre iki haftaya kadar iner.",
      },
      {
        p: "Süreyi belirleyen üç şey vardır: kapsam, kuruma süreleri ve malzeme temini. Ekip sayısını artırmak bunlardan yalnızca birincisini hızlandırır; diğer ikisi zamanla ilgilidir ve kısaltılamaz.",
      },

      { h2: "Hafta hafta tipik takvim" },
      {
        table: {
          head: ["Hafta", "Yapılan iş"],
          rows: [
            ["1. hafta", "Koruma, söküm, kırım ve moloz çıkarma"],
            ["2. hafta", "Elektrik ve su tesisatı kanalları, hat çekimi, basınç testi"],
            ["3. hafta", "Duvar düzeltme, ıslak hacim su yalıtımı, şap"],
            ["4. hafta", "Seramik ve fayans uygulaması, derz"],
            ["5. hafta", "Alçı, saten, zemin hazırlığı"],
            ["6. hafta", "Boya, parke veya laminat döşeme"],
            ["7. hafta", "Vitrifiye, batarya, priz–anahtar ve armatür montajı"],
            ["8. hafta", "Kapı–dolap montajı, ince işler, temizlik ve teslim"],
          ],
        },
      },
      {
        p: "Bu takvim bir şablon; işler mekân bazında iç içe geçer. Örneğin banyo seramiği yapılırken salonda alçı çalışması sürebilir. Ancak sıralamanın mantığı değişmez: her iş, kendinden önceki işin tamamlanmasını bekler.",
      },

      { h2: "Kuruma süreleri kısaltılamaz" },
      {
        p: "Tadilatta beklemek zorunda olduğunuz süreler, işin kendisi kadar belirleyici. Bu süreler hızlandırılmaya çalışıldığında sonuç neredeyse her zaman kalite kaybı olur.",
      },
      {
        ul: [
          "Şap: yüzeyi kısa sürede kurur ama içindeki nem uzun süre devam eder.",
          "Su yalıtımı: kat aralarında ve üzeri kapatılmadan önce belirli süre beklenir.",
          "Seramik yapıştırıcısı: derz öncesi priz alma süresi vardır.",
          "Alçı ve saten: kat aralarında kuruma beklenir.",
          "Boya: kat arası bekleme ve son kat sonrası kuruma gerekir.",
          "Silikon ve derz: kullanım öncesi tam kürlenme ister.",
        ],
      },
      {
        p: "En kritik nokta şap ile zemin kaplaması arasındaki ilişki. Nemini vermemiş bir şapın üzerine kapatılan parke, aylar sonra kabarma ve şişme olarak geri döner. Bu, sonradan düzeltmesi en pahalı hatalardan biri.",
      },

      { h2: "Kapsam süreyi nasıl değiştirir?" },
      {
        table: {
          head: ["Kapsam", "Yaklaşık süre"],
          rows: [
            ["Sadece boya", "3–5 gün"],
            ["Boya + zemin kaplaması", "1–2 hafta"],
            ["Tek banyo yenileme", "1,5–2,5 hafta"],
            ["Mutfak yenileme", "2–3 hafta"],
            ["Tesisat hariç komple daire", "3–5 hafta"],
            ["Tesisat dâhil komple daire", "5–8 hafta"],
            ["Yapısal değişiklik içeren tadilat", "8 hafta ve üzeri"],
          ],
        },
      },
      {
        p: "Süreler daire büyüklüğüne, mevcut duruma ve malzeme seçimlerine göre değişir. Yapısal değişiklik içeren işlerde ise izin ve proje süreçleri takvimin bir parçası hâline gelir.",
      },

      { h2: "Sıra neden bu kadar önemli?" },
      {
        p: "Tadilatta işler kaba işten ince işe doğru ilerler. Kırım yapılmadan tesisat çekilmez, tesisat bitmeden duvar kapatılmaz, şap kurumadan zemin döşenmez, boya bitmeden armatür takılmaz.",
      },
      {
        p: "Sıra bozulduğunda tamamlanmış bir iş zarar görür ve yeniden yapılır. Boyadan sonra yapılan bir tesisat müdahalesi, duvarın açılması ve boyanın tekrarlanması demektir.",
      },
      {
        quote:
          "Tadilatta kaybedilen zamanın büyük bölümü, yapılan işten değil; yeniden yapılan işten geliyor.",
      },
      {
        p: "Bu nedenle karar verilmemiş konular, ilgili aşama gelmeden çözülmeli. Seçilmemiş bir seramik veya kararsız kalınmış bir mutfak planı, tüm takvimi bekletiyor.",
      },

      { h2: "Ekip sayısı süreyi kısaltır mı?" },
      {
        p: "Bir noktaya kadar evet. Aynı anda farklı mekânlarda çalışılabilir ve bağımsız işler paralel yürütülebilir. Ancak her işin bir öncülü olduğu için, ekip sayısını artırmanın da bir sınırı var.",
      },
      {
        p: "Küçük bir dairede aynı anda çok sayıda kişinin çalışması verimi düşürür; ekipler birbirini bekler, alan yetmez ve hata riski artar. Doğru yaklaşım, ekip sayısını değil iş sırasını optimize etmektir.",
      },
      {
        p: "Kuruma sürelerini ise hiçbir ekip sayısı kısaltmaz. Bu yüzden hızlandırma talebi geldiğinde, önce hangi bekleme sürelerinin takvimi belirlediğini konuşuyoruz.",
      },

      { h2: "Malzeme temini kritik yol" },
      {
        p: "Takvimi en çok bozan kalemlerden biri, zamanında gelmeyen malzeme. Özel ölçü kapı, ısmarlama dolap, stokta olmayan seramik veya vitrifiye; hepsi tedarik süresi olan kalemler.",
      },
      {
        ol: [
          "Uzun tedarik süreli kalemler işin başında sipariş edilir.",
          "Seramik ve zemin kaplaması metrajı fire payıyla birlikte hesaplanır.",
          "Aynı parti numarasından alınması renk farkını önler.",
          "Teslimat tarihleri iş programına işlenir.",
          "Kritik kalemlerde alternatif ürün önceden belirlenir.",
        ],
      },
      {
        p: "Üçüncü madde sonradan çözülemeyen bir sorun. Eksik kalan seramiğin farklı partiden tamamlanması, ton farkı olarak gözle görülüyor ve düzeltmenin tek yolu o alanın tamamen sökülmesi oluyor.",
      },

      { h2: "Oturarak mı, boşken mi?" },
      {
        p: "Boş dairede tadilat her zaman daha hızlıdır. Ekip tüm mekânda serbest çalışır, toz ve gürültü sorun olmaz, eşya taşıma ve koruma zamanı harcanmaz.",
      },
      {
        p: "Oturulan evde yapılan tadilat ise bölümlere ayrılır. Her bölüm ayrı ayrı hazırlanır, korunur ve teslim edilir. Bu, toplam süreyi belirgin şekilde uzatır ama yaşamayı mümkün kılar.",
      },
      {
        p: "Karar verirken kısa süreli bir konaklama maliyeti ile uzayan tadilat süresini karşılaştırmak faydalı olur. Çoğu durumda dairenin boş olduğu bir dönemde iş yapmak, hem daha hızlı hem daha az yıpratıcı.",
      },

      { h2: "Apartman kuralları ve komşuluk" },
      {
        p: "Gürültülü işler için apartman yönetimlerinin belirlediği çalışma saatleri, takvimin gerçekçi kurulmasında dikkate alınmalı. Kırım işi günde birkaç saatle sınırlıysa, o aşama planlanandan uzun sürer.",
      },
      {
        p: "İşe başlamadan önce komşulara bilgi vermek, sürecin en zahmetsiz ama en etkili adımı. Ne kadar süreceği ve hangi günlerde gürültü olacağı bilindiğinde şikâyet belirgin azalıyor.",
      },
      {
        p: "Ortak alanların korunması da işin bir parçası. Asansör ve merdiven korumasının yapılması hem hasarı önlüyor hem yönetimle yaşanabilecek tartışmaları ortadan kaldırıyor.",
      },

      { h2: "Başlamadan önce yapılacaklar" },
      {
        p: "Tadilat takviminin ilk günü, sökümle değil hazırlıkla başlar. Bu hazırlık tamamlanmadan başlanan işler, ilerleyen haftalarda kaybedilen günler olarak geri döner.",
      },
      {
        ol: [
          "Tüm malzeme seçimleri tamamlanır ve numuneler onaylanır.",
          "Uzun tedarik süreli kalemler sipariş edilir.",
          "Mobilya ve eşya taşınır veya tek bir odada toplanıp korumaya alınır.",
          "Apartman yönetimine bilgi verilir, çalışma saatleri teyit edilir.",
          "Asansör ve merdiven koruması yapılır.",
          "Elektrik ve su vanalarının yerleri tespit edilir.",
          "Moloz çıkarma güzergâhı ve toplama noktası belirlenir.",
        ],
      },
      {
        p: "Birinci madde en çok ertelenen ve en pahalıya mal olan adım. \"Sonra bakarız\" denilen bir seramik seçimi, sıra o aşamaya geldiğinde tüm ekibi bekletiyor.",
      },

      { h2: "Toz ve koruma yönetimi" },
      {
        p: "Kırım ve söküm aşaması, tadilatın en tozlu bölümü. Toz, kapalı kapıların altından bile geçerek evin tamamına yayılır; bu nedenle koruma işin başında yapılmalı.",
      },
      {
        p: "Çalışılmayan alanların naylonla ve bantla ayrılması, kapı altlarının kapatılması ve mümkünse toz emişli aletlerle çalışılması, hem temizlik süresini kısaltıyor hem oturulan evlerde yaşamı mümkün kılıyor.",
      },
      {
        p: "Kombi, klima ve elektronik cihazların üzeri de kapatılmalı. İnce inşaat tozu, cihazların hava filtrelerine ve fan yataklarına girdiğinde sonradan arıza kaynağı oluyor.",
      },

      { h2: "Bütçe ile takvim ilişkisi" },
      {
        p: "Süre ve bütçe birbirine bağlı iki değişken. İşin hızlandırılması genelde daha fazla ekip veya mesai anlamına gelir; uzaması ise ek maliyet ve konfor kaybı yaratır.",
      },
      {
        p: "Sağlıklı yaklaşım, gerçekçi bir takvim kurmak ve buna uygun bir bütçe planlamak. Takvimin sonuna doğru sıkışan işlerde kalite düşer; en çok da ince işler ve detaylar bu sıkışmadan etkilenir.",
      },
      {
        quote:
          "Tadilatta acele edilen son hafta, sonraki yıllarda göz önünde duran detaylarda kendini gösterir.",
      },
      {
        p: "Takvimde bir–iki haftalık esneklik payı bırakmak, hem beklenmedik kalemleri hem hava koşullarını karşılıyor. Bu pay kullanılmazsa iş erken bitiyor; kullanılırsa da kimse geri kalmış olmuyor.",
      },

      { h2: "Gecikme nedenleri" },
      {
        table: {
          head: ["Neden", "Etkisi", "Önlem"],
          rows: [
            ["Karar verilmemiş seçimler", "İlgili aşama durur", "Seçimler aşamadan önce netleşir"],
            ["Geciken malzeme", "Kritik yolu uzatır", "Erken sipariş, teslimat takibi"],
            ["Söküm sonrası çıkan sürprizler", "Ek iş ve süre", "Keşifte risk notu, esneklik payı"],
            ["Sıra dışı revizyon talebi", "Yapılan iş tekrarlanır", "Yazılı değişiklik yönetimi"],
            ["Çalışma saati kısıtı", "Günlük verim düşer", "Takvim buna göre kurulur"],
            ["Hava koşulları", "Dış işler ertelenir", "Mevsim planlaması"],
            ["Kuruma sürelerinin zorlanması", "Kalite kaybı, yeniden yapım", "Süreye uyulur"],
          ],
        },
      },
      {
        p: "Bu yedi nedenin altısı önceden yönetilebilir. Yalnızca söküm sonrası çıkan sürprizler tamamen öngörülemez; onlar için de bütçe ve takvimde esneklik payı bırakmak doğru yaklaşım.",
      },

      { h2: "İş programı nasıl okunur?" },
      {
        p: "İyi bir iş programı, sadece bitiş tarihini değil ara aşamaları da gösterir. Böylece işin geride kalıp kalmadığı, sona yaklaşmadan çok önce anlaşılır.",
      },
      {
        p: "Programda her aşamanın başlangıç ve bitiş tarihi, o aşamanın hangi işe bağlı olduğu ve müşteriden beklenen kararların tarihi bulunmalı. Son madde önemli: bazı gecikmelerin kaynağı, zamanında verilmeyen kararlar.",
      },
      {
        p: "Haftalık kısa bir durum bildirimi, programın canlı kalmasını sağlıyor. Bir aşama sarktığında bunun sonraki aşamalara etkisi hemen görülüyor ve telafi planı yapılabiliyor.",
      },

      { h2: "Tek daire mi, tüm bina mı?" },
      {
        p: "Aynı binada birden fazla dairede iş yapılıyorsa takvim değişir. Ortak kullanılan asansör, merdiven ve moloz güzergâhı paylaşıldığı için işler birbirini bekleyebilir.",
      },
      {
        p: "Buna karşılık ölçek avantajı da var: nakliye, kurulum ve ekip yerleşimi tek seferde yapıldığı için toplam süre, dairelerin ayrı ayrı yapılmasından kısa olur.",
      },
      {
        p: "Apartman ortak alanı yenilemeleri de benzer mantıkla planlanıyor. Merdiven boşluğu, giriş ve cephe işleri sakinlerin günlük kullanımını etkilediği için takvim, kullanım saatleri gözetilerek kuruluyor.",
      },

      { h2: "Teslim ve kontrol" },
      {
        ol: [
          "Tüm musluk ve giderler akıtılarak kaçak kontrolü yapılır.",
          "Priz, anahtar ve aydınlatma noktaları tek tek denenir.",
          "Kapı ve pencereler açılıp kapatılarak ayarları kontrol edilir.",
          "Seramik yüzeyler boşluk sesi açısından denetlenir.",
          "Boya yüzeyleri gün ışığında kontrol edilir.",
          "Silikon ve derz uygulamaları gözden geçirilir.",
          "Kombi, klima ve cihazlar çalıştırılarak test edilir.",
          "İnce temizlik yapılır ve eksik listesi çıkarılır.",
        ],
      },
      {
        p: "Eksik listesinin teslim günü çıkarılması ve tamamlanma tarihinin yazılması, işin gerçekten bitmesini sağlıyor. Sözlü olarak konuşulan küçük eksikler, aylar sonra hâlâ açık kalabiliyor.",
      },
    ],
    faqs: [
      {
        q: "100 metrekarelik bir daire komple ne kadar sürede tadilat edilir?",
        a: "Tesisat, ıslak hacim, zemin ve boyayı kapsayan komple bir tadilat tipik olarak beş–sekiz hafta sürer. Sadece boya ve zemin yapılacaksa süre bir–iki haftaya iner. Kapsam, kuruma süreleri ve malzeme temini bu aralığı belirleyen üç ana etkendir.",
      },
      {
        q: "Ekip sayısını artırarak süre kısaltılabilir mi?",
        a: "Bir noktaya kadar evet; bağımsız işler paralel yürütülebilir. Ancak küçük bir dairede çok sayıda kişinin aynı anda çalışması verimi düşürür. Kuruma sürelerini ise hiçbir ekip sayısı kısaltmaz; şap, boya ve derz kendi süresini ister.",
      },
      {
        q: "Şap kuruduktan hemen sonra parke döşenebilir mi?",
        a: "Döşenmemelidir. Şapın yüzeyi kısa sürede kurur ama içindeki nem uzun süre devam eder. Nemini vermemiş şapın üzerine kapatılan parke aylar sonra kabarma ve şişme yapar. Nem ölçümü yapılması, tahmine göre karar vermekten çok daha güvenlidir.",
      },
      {
        q: "Evde otururken tadilat yaptırabilir miyim?",
        a: "Yapılabilir ancak süre belirgin uzar. İş bölümlere ayrılır; her bölüm ayrı hazırlanır, korunur ve teslim edilir. Toz ve gürültü günlük yaşamı zorlaştırır. Mümkünse dairenin boş olduğu bir dönemde çalışmak hem daha hızlı hem daha az yıpratıcıdır.",
      },
      {
        q: "Tadilat en çok neden gecikir?",
        a: "En sık üç neden: zamanında verilmeyen malzeme kararları, geciken tedarik ve söküm sonrası ortaya çıkan beklenmedik durumlar. İlk ikisi planlamayla yönetilebilir; üçüncüsü için keşifte risk notu alınması ve takvimde esneklik payı bırakılması gerekir.",
      },
      {
        q: "Hangi mevsimde tadilat daha uygun?",
        a: "İç mekân işleri yıl boyu yapılabilir; ancak havalandırma gerektiren boya ve yapıştırıcı uygulamaları için ılıman mevsimler avantajlıdır. Dış cephe, çatı ve balkon gibi işler ise hava koşullarına doğrudan bağlıdır ve yağışlı dönemlerde ertelenebilir.",
      },
      {
        q: "İş programı olmadan tadilat yapılır mı?",
        a: "Yapılır ama takip edilemez. Programsız bir işte gecikmenin nerede başladığı ancak sonuna doğru anlaşılır. İyi bir programda her aşamanın tarihi, bağlı olduğu iş ve müşteriden beklenen kararların tarihleri bulunur; haftalık durum bildirimiyle canlı tutulur.",
      },
      {
        q: "Teslimde neye bakmalıyım?",
        a: "Su tesisatında kaçak kontrolü, tüm priz ve anahtarların denenmesi, kapı–pencere ayarları, seramikte boşluk sesi, boya yüzeyinin gün ışığında incelenmesi ve cihazların çalıştırılması. Eksikler yazılı listeye alınmalı ve tamamlanma tarihi belirlenmelidir.",
      },
    ],
    related: ["ev-tadilati-nereden-baslanir", "daire-tadilati-is-sirasi", "anahtar-teslim-fiyat-nasil-hesaplanir"],
  },
];

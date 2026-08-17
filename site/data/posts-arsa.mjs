// Arsası olanlar için: imar, yapı kararı, kat karşılığı, uzaktan inşaat
// ve kiraya hazırlama.

export const arsaPosts = [
  {
    slug: "arsama-daire-yaptirmak",
    title: "Arsama daire yaptırmak: nereden başlanır?",
    category: "İnşaat",
    published: "2026-08-17",
    reading: 11,
    metaTitle: "Arsaya Daire Yaptırmak | Adım Adım Süreç",
    metaDesc:
      "Malatya'da arsanıza bina yaptırmak: imar durumu, zemin etüdü, proje, ruhsat, yapı denetim, inşaat aşamaları ve iskân. Uzaktakiler için yol haritası.",
    keywords: [
      "arsaya bina yapmak",
      "inşaat ruhsatı",
      "zemin etüdü",
      "yapı denetim",
      "iskân",
    ],
    excerpt:
      "Arsa elinizde, aklınızda bir bina var. Aradaki yol uzun görünüyor ama aslında sayılı adımdan oluşuyor ve her adımın ne zaman geleceği baştan bilinebiliyor.",
    services: ["anahtar-teslim-insaat", "anahtar-teslim-mustakil-ev", "proje-uygulama-yonetimi"],
    intro:
      "Elinde arsa olup ne yapacağını bilmeyen çok kişi var. Bir kısmı miras kalmış, bir kısmı yıllar önce alınmış, bir kısmı da köydeki eski evin yerinde duruyor. Şehir dışında ya da yurt dışında yaşıyorsanız süreç daha da bulanık görünüyor. Bu yazıda arsadan binaya giden yolu adım adım, hangi aşamada neyin gerektiğiyle birlikte anlattık.",
    body: [
      { h2: "Önce arsayı tanımak" },
      {
        p: "Her şey arsanın ne olduğunu bilmekle başlıyor. Ada ve parsel numarası, yüzölçümü, imar durumu ve üzerinde bir kısıt olup olmadığı; bu dördü baştan bilinmeli.",
      },
      {
        p: "Tapu bilgilerine e-devletten ulaşılabiliyor. İmar durumu ise belediyeden alınıyor ve arsada ne yapılabileceğini söyleyen asıl belge o oluyor. Bu belge olmadan yapılan her plan tahmin sayılıyor.",
      },

      { h2: "İmar durumu ne söylüyor?" },
      {
        p: "İmar durumu belgesi, arsanızda kaç kat çıkabileceğinizi, ne kadar alan kaplayabileceğinizi ve komşu sınırlarına ne kadar yaklaşabileceğinizi yazıyor.",
      },
      {
        table: {
          head: ["Terim", "Ne anlama geliyor"],
          rows: [
            ["TAKS", "Zeminde kaplanabilecek alanın arsaya oranı"],
            ["KAKS (Emsal)", "Toplam yapılabilecek inşaat alanının oranı"],
            ["Hmax", "İzin verilen en yüksek bina yüksekliği"],
            ["Çekme mesafesi", "Yoldan ve komşudan bırakılacak boşluk"],
            ["Yapı nizamı", "Ayrık, bitişik ya da blok düzen"],
            ["Kullanım kararı", "Konut, ticaret ya da karma"],
          ],
        },
      },
      {
        p: "Bu altı satır, arsanızda kaç daire çıkabileceğini büyük ölçüde belirliyor. Hesabı yaklaşık olarak kendiniz de yapabiliyorsunuz ama kesin sonuç mimari projeyle çıkıyor.",
      },

      { h2: "Zemin etüdü" },
      {
        p: "Zemin etüdü, arsanın altında ne olduğunu söyleyen rapor. Sondaj yapılıyor, numune alınıyor ve zeminin taşıma gücü belirleniyor.",
      },
      {
        p: "Bu rapor temel tipini ve maliyetin önemli bir kısmını belirliyor. Sağlam zeminde basit bir temel yeterken zayıf zeminde radye temel ya da zemin iyileştirmesi gerekebiliyor. Ruhsat için de zorunlu bir belge.",
      },

      { h2: "Proje aşaması" },
      {
        p: "Mimari proje, binanın neye benzeyeceğini ve içinde ne olacağını belirliyor. Statik, elektrik ve mekanik projeler de buna göre hazırlanıyor.",
      },
      {
        ul: [
          "Mimari proje: plan, kesit, görünüş, daire yerleşimleri.",
          "Statik proje: taşıyıcı sistem, deprem hesapları.",
          "Elektrik projesi: pano, kolon, aydınlatma ve priz planı.",
          "Mekanik proje: su, atık su, ısıtma, doğalgaz.",
          "Peyzaj ve altyapı: bahçe, otopark, dış tesisat.",
        ],
      },
      {
        p: "Bu aşamada verilecek kararlar sonradan değiştirilmesi en pahalı olanlar. Daire büyüklükleri, oda sayısı, banyo yerleri; hepsi projeye işleniyor. Uzaktan çalışıyorsanız bu aşamada görüntülü toplantı yapmak çok işe yarıyor.",
      },

      { h2: "Ruhsat" },
      {
        p: "Projeler tamamlanınca belediyeye ruhsat başvurusu yapılıyor. Yapı denetim firması sözleşmesi de bu aşamada imzalanıyor.",
      },
      {
        p: "Yurt dışındaysanız bu başvurular vekalet gerektiriyor. Vekaletnamede \"inşaat ruhsatı almaya\" ve \"yapı denetim sözleşmesi imzalamaya\" yetkisinin ayrıca yazılması gerekiyor; genel bir metin bazı kurumlarda kabul görmüyor.",
      },

      { h2: "Yapı denetim ne yapıyor?" },
      {
        p: "Yapı denetim firması, inşaatın projeye ve yönetmeliğe uygun yapılıp yapılmadığını kontrol ediyor. Beton dökümü, demir bağlama ve her kritik aşama onların onayıyla ilerliyor.",
      },
      {
        p: "Uzaktaki bir mal sahibi için bu bağımsız denetim ayrıca değerli. Sizin göremediğiniz aşamaları kontrol eden ve kayda geçiren bir taraf var; raporlar da dosyada duruyor.",
      },

      { h2: "İnşaat aşamaları" },
      {
        table: {
          head: ["Aşama", "İçerik"],
          rows: [
            ["Hafriyat ve temel", "Kazı, temel donatısı, beton"],
            ["Karkas", "Kolon, kiriş, döşeme; kat kat yükselme"],
            ["Duvar ve çatı", "Bölme duvarlar, çatı imalatı"],
            ["Kaba tesisat", "Su, atık su, elektrik, doğalgaz altyapısı"],
            ["Sıva ve şap", "Yüzey hazırlığı, kuruma süreleri"],
            ["İnce iş", "Kaplama, boya, dolap, doğrama"],
            ["Dış cephe", "Mantolama, boya, bahçe düzenlemesi"],
          ],
        },
      },
      {
        p: "Karkas aşaması görsel olarak en hızlı ilerleyen kısım; bina gözle görülür biçimde yükseliyor. İnce iş ise en uzun süren ve en çok karar isteyen bölüm.",
      },

      { h2: "Ne kadar sürüyor?" },
      {
        p: "Süre, binanın büyüklüğüne ve mevsime göre değişiyor. Kaba bir çerçeve şöyle:",
      },
      {
        ul: [
          "Proje ve ruhsat süreci: 2–4 ay.",
          "Hafriyat ve temel: 3–6 hafta.",
          "Karkas: kat başına 2–3 hafta.",
          "Kaba tesisat ve duvarlar: 1–2 ay.",
          "İnce iş ve dış cephe: 3–5 ay.",
          "İskân süreci: 1–2 ay.",
        ],
      },
      {
        p: "Beton işleri kışın yavaşlıyor; donlu günlerde döküm yapılmıyor. Malatya koşullarında ilkbaharda başlayan bir inşaat, kışa kapalı hâle gelmiş oluyor ve iç işler kışın sürebiliyor.",
      },

      { h2: "Uzaktan yürütmek" },
      {
        p: "Yurt dışında ya da başka şehirde yaşayan mal sahipleriyle çalışırken düzen tadilattakinden farklı değil, yalnızca daha uzun sürüyor ve daha çok belge içeriyor.",
      },
      {
        p: "Sahaya kamera kuruyoruz, haftalık rapor gönderiyoruz, yapı denetim raporlarını iletiyoruz. Kritik dökümler önceden haber veriliyor; isteyen o gün canlı bağlanıyor.",
      },

      { h2: "Ne yapılacağına karar vermek" },
      {
        p: "Aynı arsada birden fazla senaryo mümkün olabiliyor ve karar tamamen amaca bağlı.",
      },
      {
        table: {
          head: ["Amaç", "Uygun olabilecek"],
          rows: [
            ["Kendiniz oturacaksınız", "Müstakil ev ya da az katlı yapı"],
            ["Aile için birkaç daire", "Kat sayısı imara göre, her kata bir daire"],
            ["Kira geliri", "Daire sayısını artıran plan"],
            ["Yazın gelip kalma", "Bağ evi ya da tek katlı yapı"],
            ["Şimdilik bekletme", "Sınır belirleme ve koruma"],
          ],
        },
      },
      {
        p: "Son satır da bir karar. Hemen yapmak zorunda değilsiniz; arsanın sınırını belirlemek, çevresini kapatmak ve suyla elektriği getirmek de ileriye dönük bir yatırım oluyor.",
      },

      { h2: "Altyapı bağlantıları" },
      {
        p: "Su, elektrik ve doğalgazın arsaya ulaşıp ulaşmadığı, maliyeti etkileyen önemli bir konu. Şehir içinde çoğunlukla sorun olmuyor ama kırsalda mesafe uzayabiliyor.",
      },
      {
        p: "Bu bağlantıların maliyeti ve süresi baştan araştırılıyor. İnşaat bitip bina hazır olduğunda elektrik aboneliğinin haftalarca beklemesi, önceden başvurulmadığı için oluyor.",
      },

      { h2: "İskân (yapı kullanma izni)" },
      {
        p: "İnşaat bittiğinde iskân alınıyor. Bu belge olmadan abonelikler kalıcı hâle gelmiyor ve tapuda kat mülkiyeti kurulamıyor.",
      },
      {
        p: "İskân için yapının projeye uygun bitmiş olması gerekiyor. Proje dışına çıkılan noktalar varsa iskân aşamasında sorun çıkıyor; bu yüzden inşaat boyunca projeye sadık kalmak sonradan iş açmıyor.",
      },

      { h2: "Bütçeyi kurmak" },
      {
        p: "İnşaat bütçesi, kaba yapı ve ince yapı olarak iki büyük başlığa ayrılıyor. Kaba yapı öngörülebilir; ince yapı ise seçilen malzemeye göre geniş bir aralıkta değişiyor.",
      },
      {
        ol: [
          "Arsanın hazırlanması: kazı, istinat, altyapı bağlantıları.",
          "Kaba yapı: temel, karkas, duvar, çatı.",
          "Kaba tesisat: su, elektrik, doğalgaz altyapısı.",
          "İnce yapı: sıva, şap, kaplama, boya, dolap, doğrama.",
          "Dış cephe ve çevre düzenlemesi.",
          "Proje, ruhsat, yapı denetim ve harçlar.",
        ],
      },
      {
        p: "Altıncı kalem çoğu zaman hesaba katılmıyor ama küçümsenmeyecek bir tutar tutuyor. Bütçe kurulurken baştan yazılması, sonradan sürpriz olmasını önlüyor.",
      },

      { h2: "Malzeme kararları" },
      {
        p: "İnce iş aşamasında verilecek malzeme kararları hem maliyeti hem sonucu belirliyor. Uzaktayken bu kararlar için hazırlık yapmak gerekiyor.",
      },
      {
        p: "Yaygın yöntem, ince iş başlamadan önce bir malzeme paketi belirlemek: seramik, parke, kapı, mutfak, armatür ve boya renkleri. Bunlar bir dosyada toplanıp onaylandığında, iş sırasında karar beklemesi olmuyor.",
      },

      { h2: "Deprem yönetmeliği" },
      {
        p: "Malatya'da deprem gerçeği yapının en belirleyici tasarım girdisi. Statik proje güncel yönetmeliğe göre hazırlanıyor ve yapı denetim bu uygunluğu kontrol ediyor.",
      },
      {
        p: "Mal sahibi olarak buradaki en önemli katkınız, projeye müdahale etmemek. \"Şu kolonu kaldıralım, salon büyüsün\" isteği taşıyıcı sistemi ilgilendiriyor; böyle bir değişiklik ancak proje müellifinin hesabıyla yapılabiliyor.",
      },

      { h2: "Köy ve kırsal arsalar" },
      {
        p: "Köy yerleşiminde ve kırsal alanda yapılaşma kuralları şehir içinden farklı işliyor. Arsanın niteliği (tarla, bağ, arsa) ve bulunduğu yer belirleyici oluyor.",
      },
      {
        p: "Tarım arazisi üzerinde yapılaşma ayrı bir izin konusu. Ne yapılabileceği ilgili idareden öğreniliyor; bu adım atlandığında ileride ciddi sorun çıkabiliyor. İlk iş her zaman resmî durumu netleştirmek oluyor.",
      },

      { h2: "Kaç dairelik bina çıkar?" },
      {
        p: "Kaba bir fikir vermek için basit bir hesap yapılabiliyor: arsanın yüzölçümü ile emsal çarpılıyor, çıkan toplam inşaat alanı ortak alanlar düşülerek daire sayısına bölünüyor.",
      },
      {
        p: "Ancak çekme mesafeleri, otopark zorunluluğu ve yapı nizamı bu sayıyı azaltabiliyor. Kesin sonuç için mimari bir avan proje çizdirmek gerekiyor; bu, inşaata girmeden önce arsanın gerçek potansiyelini gösteren en somut adım.",
      },

      { h2: "Nereden başlanır?" },
      {
        ol: [
          "Tapu ve imar durumu belgesi alınır.",
          "Arsanın potansiyeli avan projeyle görülür.",
          "Zemin etüdü yaptırılır.",
          "Projeler hazırlanır, bütçe çıkarılır.",
          "Ruhsat alınır, yapı denetim sözleşmesi yapılır.",
          "İnşaat başlar, aşamalı olarak ilerler.",
          "İskân alınır, abonelikler kalıcı hâle gelir.",
        ],
      },
      {
        p: "İlk iki adım en az maliyetli ama en çok yol gösteren kısım. Uzaktaysanız bunlar için gelmeniz bile gerekmiyor; belgeler alınıp size gönderiliyor, avan proje görüntülü toplantıyla konuşuluyor.",
      },

      { h2: "Eski yapı varsa" },
      {
        p: "Arsanın üzerinde eski bir ev ya da müştemilat duruyorsa yıkım süreci de plana giriyor. Yıkım için ayrı bir izin alınıyor ve enkazın taşınması ayrı bir kalem oluyor.",
      },
      {
        p: "Yıkımdan önce aboneliklerin kapatılması gerekiyor. Elektrik, su ve varsa doğalgaz hattı sökülmeden yıkıma başlanmıyor; bu adım atlandığında hem tehlike doğuyor hem sonradan borç çıkabiliyor.",
      },
      {
        p: "Eski yapıdan çıkan bazı malzemeler değerlendirilebiliyor: demir, ahşap doğrama, kapı ve bazı yapı elemanları. Bunların hurda değeri yıkım maliyetinin bir kısmını karşılayabiliyor.",
      },

      { h2: "Komşu parsellerle ilişki" },
      {
        p: "İnşaat sırasında komşu parseldeki yapılar etkilenebiliyor. Derin kazı yapılacaksa komşu binanın temeline etkisi hesaplanıyor ve gerekiyorsa iksa yapılıyor.",
      },
      {
        p: "Bu, projede yer alan teknik bir konu ve yapı denetim tarafından da kontrol ediliyor. Uzaktaki bir arsa sahibi için önemli olan, bu konunun projede ele alınmış olması ve sonradan komşuyla sorun çıkmaması.",
      },

      { h2: "Şantiye güvenliği" },
      {
        p: "Şantiye çevresinin kapatılması, uyarı levhaları ve iş güvenliği önlemleri hem yasal zorunluluk hem sorumluluk konusu.",
      },
      {
        p: "Arsa sahibi olarak bunun yapıldığını görmek isteyebilirsiniz; şantiye kamerası ve haftalık raporda bu da görünüyor. İşin başında güvenlik düzeninin nasıl kurulacağı konuşuluyor.",
      },

      { h2: "Sığınak, otopark ve ortak alanlar" },
      {
        p: "Belli büyüklüğün üzerindeki binalarda sığınak zorunlu ve bodrum planlamasını doğrudan etkiliyor. Otopark ihtiyacı da aynı katta çözülüyor.",
      },
      {
        p: "Merdiven, asansör, kapıcı dairesi ve ortak depo alanları da toplam alandan pay alıyor. Kâğıt üzerindeki emsal hesabı ile daire içi kullanılabilir alan arasındaki fark buradan çıkıyor.",
      },
      {
        p: "Asansör kararı ayrıca konuşuluyor. Kat sayısına göre zorunlu olabiliyor; olmadığı durumda bile üst katların değerini etkilediği için baştan düşünülmesi gereken bir konu.",
      },

      { h2: "Isıtma sistemi kararı" },
      {
        p: "Bina ısıtmasının nasıl olacağı proje aşamasında belirleniyor. Daire başına kombi, merkezi sistem ya da yerden ısıtma; üçünün de altyapısı farklı.",
      },
      {
        p: "Bu karar sonradan değiştirilemiyor. Yerden ısıtma seçilirse şap kalınlığı ve kat yükseklikleri buna göre planlanıyor; kombili sistemde ise baca ve gaz hattı güzergâhı projeye işleniyor.",
      },
      {
        p: "Kiraya verilecek daireler için daire başına kombi çoğunlukla daha pratik oluyor: her daire kendi tüketimini yönetiyor ve ortak gider tartışması çıkmıyor.",
      },

      { h2: "Elektrik altyapısı" },
      {
        p: "Binanın toplam gücü, daire sayısına ve ortak alanlara göre hesaplanıyor. Asansör, hidrofor, otopark aydınlatması ve varsa jeneratör bu hesaba giriyor.",
      },
      {
        p: "Kolon hattı ve pano bu güce göre boyutlandırılıyor. Sonradan güç artırımı gerektiğinde kolon hattının değişmesi gerekebiliyor; baştan bir miktar pay bırakmak bunu önlüyor.",
      },

      { h2: "Su deposu ve hidrofor" },
      {
        p: "Şebeke basıncının üst katlara yetmediği yerlerde depo ve hidrofor gerekiyor. Depo hacmi daire sayısına ve kesinti ihtimaline göre belirleniyor.",
      },
      {
        p: "Deponun yeri de projede planlanıyor; sonradan yer bulmak zor oluyor. Hidrofor odasının ses yalıtımı da baştan düşünülüyor, aksi hâlde en alt kattaki daire pompanın sesiyle yaşıyor.",
      },
    ],
    faqs: [
      {
        q: "Arsamda kaç kat çıkabilirim?",
        a: "Bunu imar durumu belgesi söylüyor. Belgede kat adedi, emsal, taban alanı oranı ve çekme mesafeleri yazıyor. Belediyeden alınıyor ve arsada ne yapılabileceğini belirleyen asıl kaynak o.",
      },
      {
        q: "Yurt dışındayım, inşaat başlatabilir miyim?",
        a: "Başlatabilirsiniz. Ruhsat ve yapı denetim sözleşmesi gibi işlemler vekalet gerektiriyor; vekaletnamede bu yetkilerin ayrıca yazılması gerekiyor. Uygulama tarafı haftalık rapor ve sahaya kurulan kamerayla takip ediliyor.",
      },
      {
        q: "Zemin etüdü şart mı?",
        a: "Ruhsat için zorunlu. Ayrıca temel tipini ve maliyetin önemli bir kısmını belirliyor. Sağlam zeminde basit temel yeterken zayıf zeminde radye temel ya da zemin iyileştirmesi gerekebiliyor.",
      },
      {
        q: "Ne kadar sürer?",
        a: "Proje ve ruhsat 2–4 ay, inşaat büyüklüğe göre 8–14 ay, iskân 1–2 ay. Kışın beton işleri yavaşlıyor. İlkbaharda başlayan bir inşaat kışa kapalı hâle gelmiş oluyor ve iç işler kışın sürüyor.",
      },
      {
        q: "İskân alınmazsa ne olur?",
        a: "Abonelikler kalıcı hâle gelmiyor ve tapuda kat mülkiyeti kurulamıyor. İskân için yapının projeye uygun bitmiş olması gerekiyor; proje dışına çıkılan noktalar bu aşamada sorun çıkarıyor.",
      },
      {
        q: "Köydeki arsama ev yapabilir miyim?",
        a: "Arsanın niteliğine ve bulunduğu yere bağlı. Tarım arazisinde yapılaşma ayrı bir izin konusu. İlk adım her zaman resmî durumu ilgili idareden netleştirmek; bu atlandığında ileride ciddi sorun çıkabiliyor.",
      },
      {
        q: "Kaç dairelik bina çıkacağını nasıl öğrenirim?",
        a: "Kaba hesap için yüzölçümü ile emsal çarpılıyor. Kesin sonuç için avan proje çizdirmek gerekiyor; çekme mesafeleri ve otopark zorunluluğu sayıyı değiştirebiliyor. Avan proje, inşaata girmeden arsanın gerçek potansiyelini gösteriyor.",
      },
      {
        q: "Projeye sonradan değişiklik yapılabilir mi?",
        a: "İç bölme ve malzeme değişiklikleri esnek. Taşıyıcı sisteme dokunan değişiklikler ise proje müellifinin hesabıyla ve gerekiyorsa tadilat ruhsatıyla yapılıyor; kendi kararımızla geçmiyoruz.",
      },
    ],
    related: ["arsa-imar-durumu-nasil-okunur", "kat-karsiligi-mi-kendim-mi", "ev-yaptirmaya-nereden-baslanir"],
  },

  {
    slug: "arsa-imar-durumu-nasil-okunur",
    title: "İmar durumu nasıl okunur?",
    category: "İnşaat",
    published: "2026-08-17",
    reading: 10,
    metaTitle: "İmar Durumu Nasıl Okunur? | TAKS, KAKS, Çekme Mesafesi",
    metaDesc:
      "İmar durumu belgesindeki TAKS, KAKS, Hmax ve çekme mesafeleri ne anlama geliyor? Arsada kaç metrekare inşaat yapılabileceğini örnekle hesapladık.",
    keywords: [
      "imar durumu",
      "TAKS KAKS",
      "emsal hesabı",
      "çekme mesafesi",
      "arsa imar",
    ],
    excerpt:
      "İmar durumu belgesi, arsanızda ne yapabileceğinizi söyleyen tek belge. Beş satırı anlaşıldığında bir arsanın değeri de sınırı da ortaya çıkıyor.",
    services: ["anahtar-teslim-insaat", "proje-uygulama-yonetimi", "anahtar-teslim-mustakil-ev"],
    intro:
      "Arsa sahiplerinin en çok karıştırdığı konu imar durumu. Belgedeki kısaltmalar teknik görünüyor ama aslında hepsi tek bir soruyu cevaplıyor: bu arsada ne kadar ve nasıl yapı yapabilirim? Bu yazıda belgeyi satır satır açtık ve örnek bir hesapla ne çıktığını gösterdik.",
    body: [
      { h2: "Belge nereden alınır?" },
      {
        p: "İmar durumu belgesi, arsanın bağlı olduğu belediyeden alınıyor. Başvuru için tapu bilgileri yeterli: ada, parsel, il, ilçe ve mahalle.",
      },
      {
        p: "Yurt dışındaysanız bu başvuruyu vekaletle yaptırmak mümkün. Bazı belediyelerde imar durumu bilgisi çevrimiçi de görülebiliyor; resmî belge yerine geçmiyor ama ilk fikri veriyor.",
      },

      { h2: "TAKS: zeminde ne kadar kaplar?" },
      {
        p: "TAKS, taban alanı katsayısı. Binanın zeminde kapladığı alanın arsaya oranını söylüyor.",
      },
      {
        p: "TAKS 0,30 olan 500 metrekarelik bir arsada, binanın zeminde kaplayabileceği alan 150 metrekare. Geri kalan 350 metrekare bahçe, otopark ve çekme mesafesi olarak kalıyor.",
      },

      { h2: "KAKS: toplam ne kadar inşaat?" },
      {
        p: "KAKS (emsal), toplam inşaat alanının arsaya oranı. Bütün katların toplamını kapsıyor.",
      },
      {
        p: "Aynı 500 metrekarelik arsada emsal 1,50 ise toplam 750 metrekare inşaat yapılabiliyor. Zeminde 150 metrekare kaplayan bir bina için bu, kabaca beş kat demek.",
      },
      {
        table: {
          head: ["Arsa", "TAKS", "KAKS", "Taban", "Toplam inşaat"],
          rows: [
            ["500 m²", "0,30", "1,50", "150 m²", "750 m²"],
            ["500 m²", "0,40", "1,20", "200 m²", "600 m²"],
            ["800 m²", "0,25", "1,00", "200 m²", "800 m²"],
            ["300 m²", "0,40", "0,80", "120 m²", "240 m²"],
            ["1000 m²", "0,20", "0,40", "200 m²", "400 m²"],
          ],
        },
      },
      {
        p: "Tablodan görülen şu: yüksek TAKS geniş bir taban, yüksek KAKS ise çok kat demek. İkisi birlikte binanın oturacağı biçimi belirliyor.",
      },

      { h2: "Emsale dahil olmayan alanlar" },
      {
        p: "Bütün alanlar emsale sayılmıyor. Sığınak, otopark, merdiven ve asansör boşluğu gibi bazı ortak alanlar mevzuata göre emsal dışı kalabiliyor.",
      },
      {
        p: "Bu ayrıntı toplam inşaat alanını hatırı sayılır ölçüde değiştiriyor. Kaba hesabınız ile projeden çıkan sonuç arasındaki fark genelde buradan geliyor. Kesin rakam için mimarın hesabı gerekiyor.",
      },

      { h2: "Hmax: kaç metre yükselir?" },
      {
        p: "Hmax, izin verilen en yüksek bina yüksekliği. Bazı belgelerde metre olarak, bazılarında kat adedi olarak yazıyor.",
      },
      {
        p: "Kat yüksekliği de bu hesaba giriyor. Yüksek tavanlı daireler tasarlanacaksa toplam kat sayısı azalabiliyor. Hmax ile kat adedi birlikte okunuyor.",
      },

      { h2: "Çekme mesafeleri" },
      {
        p: "Çekme mesafesi, binanın arsa sınırlarına ne kadar yaklaşabileceğini söylüyor. Yoldan, komşudan ve arkadan ayrı ayrı belirleniyor.",
      },
      {
        p: "Bu mesafeler kullanılabilir taban alanını daraltıyor. Küçük ve dar arsalarda TAKS'ın izin verdiği alanı, çekme mesafeleri yüzünden kullanamayabiliyorsunuz. Dar parsellerde belirleyici olan çoğu durumda TAKS değil çekme mesafesi oluyor.",
      },

      { h2: "Yapı nizamı" },
      {
        table: {
          head: ["Nizam", "Ne demek"],
          rows: [
            ["Ayrık", "Her yönden çekme mesafesi bırakılır"],
            ["Bitişik", "Yan komşuya bitişik yapılır"],
            ["Blok", "Belirlenen blok düzenine uyulur"],
            ["İkiz", "İki parsel ortadan birleşik yapılır"],
          ],
        },
      },
      {
        p: "Nizam, komşu parselle ilişkinizi belirliyor. Bitişik nizamda dar bir arsa bile verimli kullanılabiliyor; ayrık nizamda ise her yönden boşluk bırakmak gerekiyor.",
      },

      { h2: "Kullanım kararı" },
      {
        p: "Arsanın konut, ticaret ya da karma kullanıma açık olması, ne yapabileceğinizi doğrudan belirliyor. Karma alanlarda zemin kat ticari, üst katlar konut olabiliyor.",
      },
      {
        p: "Bu karar arsanın değerini de etkiliyor. Ana cadde üzerindeki bir arsada zemin katın ticari olabilmesi, projenin gelir tarafını değiştiriyor.",
      },

      { h2: "Otopark zorunluluğu" },
      {
        p: "Her daire için belirli sayıda otopark yeri ayrılması gerekiyor. Bu, bodrum katı ya da bahçenin bir kısmını otoparka ayırmak demek.",
      },
      {
        p: "Küçük arsalarda otopark zorunluluğu, daire sayısını sınırlayan asıl etken olabiliyor. Emsal hesabı kâğıt üzerinde altı daireye izin verse bile otopark yerleşimi dörde indirebiliyor.",
      },

      { h2: "Yol ve terk" },
      {
        p: "Bazı arsalarda imar planı gereği bir bölümün yola terk edilmesi gerekiyor. Böyle olunca hesaplar terk sonrası kalan alan üzerinden yapılıyor.",
      },
      {
        p: "Belgede bu bilgi yer alıyor ve arsa alırken en çok atlanan noktalardan biri. Yüz metrekaresi yola gidecek bir arsada bütün hesap değişiyor.",
      },

      { h2: "İfraz ve tevhit" },
      {
        p: "İfraz, bir parselin bölünmesi; tevhit ise birden fazla parselin birleştirilmesi. İkisi de imar planına ve asgari parsel büyüklüğüne bağlı.",
      },
      {
        p: "Komşu parseller aynı ailedeyse tevhit bazen büyük avantaj sağlıyor: birleşen arsada çekme mesafeleri daha az yer yiyor ve daha verimli bir yerleşim çıkıyor. Bu ihtimal, avan proje aşamasında değerlendiriliyor.",
      },

      { h2: "Kısıtlar ve şerhler" },
      {
        p: "Tapu kaydında ipotek, haciz, irtifak hakkı ya da başka şerhler bulunabiliyor. Bunlar yapılaşmayı doğrudan engellemese de sürece etki edebiliyor.",
      },
      {
        p: "Arsa alırken ya da uzun süredir elde duran bir arsada iş yapmadan önce tapu kaydının güncel hâli çıkarılıyor. Bu bilgi e-devletten görülebiliyor ve baştan bakılması gereken bir konu.",
      },

      { h2: "İmar planı değişebilir mi?" },
      {
        p: "Değişebiliyor. Belediyeler zaman zaman imar planı revizyonu yapıyor ve bu, arsanızdaki hakları artırabildiği gibi azaltabiliyor da.",
      },
      {
        p: "O yüzden yıllar önce alınmış bir imar durumu belgesi güncel sayılmıyor. Yapı yapmaya karar verdiğinizde belgenin yenisi alınıyor; eski belgeyle yapılan planlar boşa çıkabiliyor.",
      },

      { h2: "Örnek bir okuma" },
      {
        p: "Diyelim ki belgede şunlar yazıyor: arsa 600 m², TAKS 0,35, KAKS 1,40, Hmax 4 kat, ayrık nizam, çekme mesafeleri yoldan 5 m, yanlardan ve arkadan 3 m.",
      },
      {
        ol: [
          "Taban alanı: 600 × 0,35 = 210 m².",
          "Toplam inşaat: 600 × 1,40 = 840 m².",
          "Kat sayısı: 840 ÷ 210 = 4 kat, Hmax ile uyumlu.",
          "Çekme sonrası kullanılabilir alan kontrol edilir.",
          "Ortak alanlar ve emsal dışı bölümler mimarla hesaplanır.",
          "Otopark yerleşimi daire sayısını belirler.",
        ],
      },
      {
        p: "Bu kaba hesap size bir fikir veriyor. Dördüncü adımdan sonrası mimarın işi; oradaki ayrıntılar sonucu her iki yöne de değiştirebiliyor.",
      },

      { h2: "Arsa alacaklar için" },
      {
        p: "Şehir dışından ya da yurt dışından arsa almayı düşünenlerin en sık yaptığı hata, imar durumuna bakmadan karar vermek. Aynı mahallede yan yana iki arsanın imar hakları farklı olabiliyor.",
      },
      {
        p: "Satın almadan önce imar durumu ve güncel tapu kaydı çıkarılıyor; ikisi birlikte arsanın gerçek değerini gösteriyor. Uzaktan alım yapılacaksa bu iki belge, yerinde görmenin yerini büyük ölçüde tutuyor.",
      },

      { h2: "Malatya'da tipik durum" },
      {
        p: "Merkez ilçelerde imar planları oturmuş durumda ve bilgiye ulaşmak kolay. Deprem sonrası yapılan planlama çalışmaları bazı bölgelerde imar haklarını değiştirdiği için güncel belge almak ayrıca önemli.",
      },
      {
        p: "Kırsal mahallelerde ise arsaların bir kısmı tarım niteliğinde. Orada yapılaşma imkânı ayrı bir izin sürecine bağlı; hesap yapmadan önce arsanın niteliğini netleştirmek gerekiyor. İlk adım her zaman aynı: belgeyi alıp okumak.",
      },

      { h2: "Avan proje ne veriyor?" },
      {
        p: "Avan proje, ruhsat projesinden önce çizilen ön tasarım. Binanın kütlesini, kat planlarını ve daire yerleşimlerini kabaca gösteriyor.",
      },
      {
        p: "Faydası şu: imar durumundaki sayıların arsada gerçekten neye karşılık geldiğini görüyorsunuz. Kâğıt üzerinde altı daire çıkan bir arsada, çekme mesafeleri ve otopark yerleşimi sonrası dört daire kalabiliyor.",
      },
      {
        p: "Maliyeti tam projeye göre düşük ve karar vermeden önce atılabilecek en somut adım. Yatırım yapıp yapmama kararı sıklıkla burada netleşiyor.",
      },

      { h2: "Arsanın şekli ve yönü" },
      {
        p: "İmar durumu sayıları veriyor ama arsanın şekli sonucu değiştiriyor. Dar ve uzun bir parselde çekme mesafeleri kullanılabilir alanı orantısız biçimde daraltıyor.",
      },
      {
        p: "Yön de tasarımı etkiliyor. Güneye bakan cephe hangi tarafa geliyor, hangi odalar sabah güneşi alıyor; bunlar dairenin yaşanabilirliğini doğrudan belirliyor.",
      },
      {
        p: "Eğimli arsalarda ise bodrum kullanımı öne çıkıyor. Doğru planlandığında eğim bir dezavantaj olmaktan çıkıp ek kullanılabilir alan sağlıyor.",
      },

      { h2: "Zemin katın değeri" },
      {
        p: "Konut alanlarında zemin kat çoğu durumda en az tercih edilen kat; bahçe kullanımı verilirse tablo değişiyor. Ticaret alanlarında ise zemin kat en değerli bölüm.",
      },
      {
        p: "İmar durumundaki kullanım kararı bunu belirliyor. Ana cadde üzerindeki bir arsada zemin katın ticari olabilmesi, projenin gelir tarafını baştan değiştiriyor.",
      },
      {
        p: "Bu ihtimal varsa mimari proje de ona göre kurgulanıyor: ayrı giriş, vitrin cephesi ve bağımsız tesisat. Sonradan dönüştürmek çok daha zor.",
      },

      { h2: "Bodrum ve iskân ilişkisi" },
      {
        p: "Bodrum katın nasıl kullanılacağı projede yazıyor: depo, otopark, sığınak ya da bağımsız bölüm. Projede depo görünen bir yerin daire olarak kullanılması iskân aşamasında sorun çıkarıyor.",
      },
      {
        p: "Eğimli arsalarda bodrumun bir cephesi açığa çıkıyor ve kullanılabilir hâle geliyor. Bunun projeye doğru işlenmesi, hem iskân hem ileride satış açısından önemli.",
      },

      { h2: "İmar barışı ve eski yapılar" },
      {
        p: "Arsa üzerinde ruhsatsız ya da ruhsata aykırı eski bir yapı varsa durumu netleştirmek gerekiyor. Kayıt belgesi olup olmadığı, yıkım gerekip gerekmediği baştan öğreniliyor.",
      },
      {
        p: "Yeni yapı yapılacaksa çoğu durumda eskisi yıkılıyor ve bu, ruhsat sürecinin bir parçası oluyor. Uzaktaki arsa sahipleri için bu adım genelde sürpriz oluyor; baştan konuşulduğunda takvime dahil ediliyor.",
      },

      { h2: "Belgeleri bir arada tutmak" },
      {
        ul: [
          "Güncel tapu kaydı.",
          "İmar durumu belgesi.",
          "Varsa zemin etüdü raporu.",
          "Eski yapıya ait belgeler.",
          "Kadastro çapı ve aplikasyon krokisi.",
          "Abonelik ve borç durumu.",
        ],
      },
      {
        p: "Bu altı belge bir dosyada durduğunda hem karar vermek hem teklif almak kolaylaşıyor. Uzaktaysanız dijital kopyalarını elinizde tutmak yeterli oluyor.",
      },

      { h2: "Aplikasyon: sınır nerede?" },
      {
        p: "Uzun süre boş kalmış arsalarda sınırın tam yeri belirsizleşiyor. Taşlar kaybolmuş, komşu çit çekmiş, yol genişlemiş olabiliyor.",
      },
      {
        p: "Aplikasyon işlemiyle kadastro sınırları araziye yeniden işaretleniyor. İnşaata başlamadan ve hatta çit çekmeden önce yapılması gereken bir adım; sonradan çıkan sınır tartışmalarının çoğunu baştan kapatıyor.",
      },
      {
        p: "Uzaktaki arsa sahipleri için bu ayrıca önemli. Yıllarca gidilmemiş bir arsada sınırın nerede olduğunu belge üzerinden bilmek, tahminle hareket etmekten çok daha güvenli.",
      },

      { h2: "İmar durumu ile arazi uyuşmuyorsa" },
      {
        p: "Bazen belgedeki bilgiyle arazideki durum örtüşmüyor. Planda yol görünen yer fiilen kullanılmıyor, ya da tersine, planda olmayan bir geçiş kullanılıyor olabiliyor.",
      },
      {
        p: "Bu tür durumlarda belge esas alınıyor; fiili kullanım hak doğurmuyor. Yapı yapılacaksa plan neyi söylüyorsa ona göre konumlandırılıyor.",
      },
      {
        p: "Belgede anlaşılmayan bir nokta varsa belediyenin imar müdürlüğünden açıklama istenebiliyor. Bu, yatırım kararı vermeden önce atılacak en ucuz adım.",
      },

      { h2: "Kaba fikir için hızlı kontrol" },
      {
        ol: [
          "Tapudan yüzölçümünü ve niteliğini öğrenin.",
          "İmar durumundan TAKS, KAKS ve kat adedini alın.",
          "Taban alanını ve toplam inşaat alanını hesaplayın.",
          "Çekme mesafelerini arsa ölçülerinden düşün.",
          "Kalan alan gerçekten kullanılabilir mi, bakın.",
          "Şüphedeyseniz avan proje çizdirin.",
        ],
      },
      {
        p: "Bu altı adım yarım günde tamamlanıyor ve arsanın potansiyeli hakkında ilk gerçekçi fikri veriyor. Uzaktaysanız ilk beş adım için gelmeniz de gerekmiyor.",
      },

      { h2: "Arsanın yola cephesi" },
      {
        p: "Yola cephesi olmayan bir parselde yapı yapmak mümkün olmuyor. Bazı arsalar plan üzerinde yola bağlı görünse de fiilen ulaşım bir başka parselden sağlanıyor olabiliyor.",
      },
      {
        p: "Böyle bir durumda geçit hakkı gündeme geliyor ve bu, komşu parselle çözülmesi gereken bir konu. Arsa alırken en çok atlanan risklerden biri; belge üzerinden kontrol edilmesi gerekiyor.",
      },
    ],
    faqs: [
      {
        q: "TAKS ile KAKS arasındaki fark ne?",
        a: "TAKS binanın zeminde kapladığı alanın arsaya oranı; KAKS ise bütün katların toplam inşaat alanının arsaya oranı. TAKS binanın genişliğini, KAKS yüksekliğini belirliyor diye düşünebilirsiniz.",
      },
      {
        q: "İmar durumunu nereden alırım?",
        a: "Arsanın bağlı olduğu belediyeden. Tapu bilgileri (ada, parsel, il, ilçe, mahalle) yeterli. Yurt dışındaysanız vekaletle alınabiliyor; bazı belediyelerde ön bilgi çevrimiçi de görülebiliyor.",
      },
      {
        q: "Kaba hesabım neden projeden farklı çıkıyor?",
        a: "Sığınak, otopark, merdiven ve asansör boşluğu gibi bazı alanlar emsale dahil olmayabiliyor. Çekme mesafeleri de kullanılabilir tabanı daraltıyor. Kesin sonuç mimarın hesabıyla çıkıyor.",
      },
      {
        q: "Eski imar durumum geçerli mi?",
        a: "İmar planları revize edilebiliyor, bu yüzden yıllar önce alınmış bir belge güncel sayılmıyor. Yapı yapmaya karar verdiğinizde yenisini almak gerekiyor; eski belgeyle yapılan planlar boşa çıkabiliyor.",
      },
      {
        q: "Otopark daire sayısını etkiler mi?",
        a: "Küçük arsalarda çoğu kez en belirleyici etken o oluyor. Emsal hesabı kâğıt üzerinde daha çok daireye izin verse bile otopark yerleşimi sayıyı aşağı çekebiliyor.",
      },
      {
        q: "İki arsayı birleştirmek avantaj sağlar mı?",
        a: "Sağlayabiliyor. Birleşen parselde çekme mesafeleri oransal olarak daha az yer yiyor ve daha verimli bir yerleşim çıkıyor. Tevhit imkânı imar planına ve asgari parsel büyüklüğüne bağlı; avan proje aşamasında değerlendiriliyor.",
      },
      {
        q: "Arsanın bir kısmı yola gidiyor mu, nasıl anlarım?",
        a: "İmar durumu belgesinde terk bilgisi yer alıyor. Arsa alırken en çok atlanan noktalardan biri; yüz metrekaresi yola gidecek bir arsada bütün hesap değişiyor.",
      },
    ],
    related: ["arsama-daire-yaptirmak", "kat-karsiligi-mi-kendim-mi", "temel-tipi-nasil-secilir"],
  },

  {
    slug: "kat-karsiligi-mi-kendim-mi",
    title: "Arsayı kat karşılığı mı vermeli, kendim mi yapmalıyım?",
    category: "İnşaat",
    published: "2026-08-17",
    reading: 10,
    metaTitle: "Kat Karşılığı mı, Kendi İnşaatım mı? | Karar Rehberi",
    metaDesc:
      "Arsa sahibi için iki yol: kat karşılığı vermek ya da kendi inşaatını yaptırmak. Risk, kontrol, sermaye ve süre açısından karşılaştırma.",
    keywords: [
      "kat karşılığı",
      "arsa payı",
      "müteahhit anlaşması",
      "kendi inşaatını yaptırmak",
      "arsa değerlendirme",
    ],
    excerpt:
      "Kat karşılığı, sermaye gerektirmeyen ama kontrolü paylaşan bir yol. Kendi yapmak ise tam kontrol veren ama sermaye ve takip isteyen bir yol. Doğru seçim, hangisine sahip olduğunuza bağlı.",
    services: ["anahtar-teslim-insaat", "proje-uygulama-yonetimi", "anahtar-teslim-daire"],
    intro:
      "Arsası olan herkesin bir gün önüne gelen soru bu. Uzakta yaşayanlar için ise soru daha da ağır: kendi yapmak istiyorsunuz ama başında duramıyorsunuz, kat karşılığı vermek istiyorsunuz ama kontrolü bırakmak zor geliyor. Bu yazıda iki yolu risk, kontrol, sermaye ve süre açısından karşılaştırdık.",
    body: [
      { h2: "İki yol nasıl işliyor?" },
      {
        p: "Kat karşılığında arsayı bir yükleniciye veriyorsunuz, o binayı yapıyor ve karşılığında dairelerin belli bir bölümü size, belli bir bölümü ona kalıyor. Nakit çıkarmıyorsunuz.",
      },
      {
        p: "Kendi yaptırmanızda ise bütün bina sizin oluyor ama inşaatın maliyetini siz karşılıyorsunuz. İster anahtar teslim bir firmayla, ister aşama aşama farklı ekiplerle yürütülüyor.",
      },

      { h2: "Yan yana karşılaştırma" },
      {
        table: {
          head: ["Konu", "Kat karşılığı", "Kendi yaptırmak"],
          rows: [
            ["Sermaye", "Gerekmiyor", "Gerekiyor"],
            ["Elde kalan daire", "Bir bölümü", "Tamamı"],
            ["Kontrol", "Sınırlı", "Tam"],
            ["Malzeme seçimi", "Sözleşmeye bağlı", "Size ait"],
            ["Risk", "Yüklenici riski", "Bütçe ve yönetim riski"],
            ["Takip yükü", "Az", "Fazla"],
            ["Süre", "Yükleniciye bağlı", "Sizin planınıza bağlı"],
          ],
        },
      },
      {
        p: "Tablodaki ilk satır kararı çoğu zaman tek başına veriyor. Sermaye yoksa kat karşılığı tek uygulanabilir yol oluyor.",
      },

      { h2: "Kat karşılığında ne konuşulur?" },
      {
        p: "Paylaşım oranı en çok konuşulan başlık ama tek başına anlamlı değil. Hangi dairelerin size kalacağı, oran kadar önemli.",
      },
      {
        ul: [
          "Paylaşım oranı ve hangi bağımsız bölümlerin kime ait olacağı.",
          "Malzeme ve işçilik kalitesi; teknik şartname olarak yazılı.",
          "Teslim süresi ve gecikme hâlinde ne olacağı.",
          "İskân alma sorumluluğu kimde.",
          "Ortak alanların durumu ve teslim şekli.",
          "Yüklenicinin daireleri ne zaman satabileceği.",
        ],
      },
      {
        p: "İkinci madde en çok sorun çıkaran yer. \"Kaliteli malzeme kullanılacak\" ifadesi bir şey söylemiyor; marka, seri ve teknik özellik yazılı olmalı.",
      },

      { h2: "Teknik şartname neden şart?" },
      {
        p: "Kat karşılığında en büyük hayal kırıklığı, biten dairenin beklenenden farklı çıkması. Bunun sebebi neredeyse her zaman şartnamenin eksik yazılmış olması.",
      },
      {
        p: "Sağlıklı bir şartname; seramik ölçüsü ve sınıfı, parke tipi, kapı malzemesi, doğrama profili ve cam özelliği, mutfak dolabı malzemesi, armatür markası, ısıtma sistemi ve dış cephe uygulamasını tek tek yazıyor.",
      },
      {
        p: "Uzaktaki bir arsa sahibi için bu daha da kritik. Yerinde görüp itiraz etme imkânınız sınırlıysa, yazılı olan tek dayanağınız oluyor.",
      },

      { h2: "Sözleşme hukuki bir iş" },
      {
        p: "Kat karşılığı sözleşmesi tapuda düzenleniyor ve ciddi sonuçlar doğuruyor. Bu, bir avukatla birlikte yürütülmesi gereken bir süreç.",
      },
      {
        p: "Biz uygulama tarafındayız; sözleşmenin hukuki kısmı bir avukatın alanı. Teknik şartnamenin doğru yazılması, projenin okunması ve inşaatın şartnameye uygun ilerleyip ilerlemediğinin takibi bizim yapabildiğimiz işler.",
      },

      { h2: "Bağımsız takip" },
      {
        p: "Kat karşılığında arsa sahibinin en az kullandığı ama en işe yarayan araç bu: inşaatı sizin adınıza takip eden bağımsız bir taraf.",
      },
      {
        p: "Bu kişi ya da ekip, şartnameye uygunluğu kontrol ediyor, kritik aşamalarda saha kaydı alıyor ve size raporluyor. Yurt dışındaysanız kendi gözünüz yerine geçiyor.",
      },
      {
        p: "Yapı denetim firması zaten var ama onun görevi mevzuata uygunluk; şartnamedeki seramik markasının doğru gelip gelmediğine bakmıyor. İki denetim farklı işler yapıyor.",
      },

      { h2: "Kendi yaptırmanın avantajı" },
      {
        p: "Bütün daireler sizde kalıyor ve her karar size ait. Malzemeden plana, süreden teslim şekline kadar hiçbir şey pazarlık konusu olmuyor.",
      },
      {
        p: "Uzun vadede getirisi de yüksek; kat karşılığında yükleniciye giden pay, sizde kalıyor. Karşılığında inşaat maliyetini üstleniyorsunuz ve süreci yönetmeniz gerekiyor.",
      },

      { h2: "Kendi yaptırırken risk nerede?" },
      {
        p: "En büyük risk bütçenin yetmemesi. Yarım kalan bir inşaat, hem maliyeti büyütüyor hem yapıya zarar veriyor.",
      },
      {
        p: "İkinci risk yönetim. Farklı ekipleri sırayla getirmek, malzeme tedarikini zamanlamak ve kaliteyi kontrol etmek zaman isteyen işler. Uzaktan bunu tek başına yürütmek zor; anahtar teslim çalışmanın anlamı burada ortaya çıkıyor.",
      },

      { h2: "Anahtar teslim ara yol" },
      {
        p: "Sermayeniz var ama süreci yönetecek vaktiniz yoksa üçüncü bir yol var: anahtar teslim. Bütün bina sizin kalıyor, yönetimi bir taraf üstleniyor.",
      },
      {
        table: {
          head: ["Model", "Sermaye", "Kontrol", "Takip yükü"],
          rows: [
            ["Kat karşılığı", "Yok", "Sınırlı", "Az"],
            ["Anahtar teslim", "Gerekli", "Yüksek", "Az"],
            ["Kendi yönetimi", "Gerekli", "Tam", "Fazla"],
            ["Karma (kaba + ince ayrı)", "Kısmi", "Orta", "Orta"],
          ],
        },
      },
      {
        p: "Uzakta yaşayan arsa sahiplerinin çoğu ikinci ya da dördüncü satırda buluşuyor. Karma modelde kaba yapı bir firmaya veriliyor, ince iş bütçe oluştukça ayrı ilerliyor.",
      },

      { h2: "Aşamalı ilerlemek" },
      {
        p: "Bütçe bir defada yetmiyorsa inşaatı aşamalara bölmek mümkün. Kaba yapı ve çatı tamamlanıp bina kapalı hâle getiriliyor, ince iş sonraya bırakılıyor.",
      },
      {
        p: "Bu düzende bina hava koşullarından korunuyor ve bekleme yapıya zarar vermiyor. Ruhsat süresi ve mevzuat açısından da bir plan yapılması gerekiyor; süresiz bekleyen inşaatlarda ruhsat yenileme gündeme geliyor.",
      },

      { h2: "Arsanın konumu kararı etkiliyor" },
      {
        p: "Talep gören bir bölgedeki arsada kat karşılığı için birden fazla teklif gelebiliyor ve paylaşım oranı arsa sahibi lehine dönüyor. Talebin düşük olduğu yerlerde ise yüklenici bulmak zorlaşıyor.",
      },
      {
        p: "Kendi yaptırmanın mantığı da konuma bağlı. Kira ya da satış potansiyeli düşük bir bölgede büyük bir bina yapmak, uzun süre boş daire tutmak anlamına gelebiliyor.",
      },

      { h2: "Aile içinde karar" },
      {
        p: "Arsalar çoğunlukla hisseli ve mirasçıların bir kısmı uzakta. Kat karşılığı ya da inşaat kararı bütün hissedarları ilgilendiriyor.",
      },
      {
        p: "Pratik yol, kararı bir kişide toplamak ve ona vekalet vermek. Aksi hâlde her adımda dört ayrı imza toplamak gerekiyor ve süreç aylara yayılıyor. Bu vekaletin bir avukatla hazırlanması doğru olan.",
      },

      { h2: "Karar nasıl verilir?" },
      {
        ol: [
          "İmar durumu alınır, arsanın potansiyeli görülür.",
          "Avan projeyle kaç daire çıkabileceği belirlenir.",
          "Kendi yaptırmanın kaba maliyeti çıkarılır.",
          "Sermaye durumu ve zaman planı gerçekçi biçimde değerlendirilir.",
          "Kat karşılığı için piyasadaki oranlar araştırılır.",
          "İki senaryonun sonucu yan yana konur.",
        ],
      },
      {
        p: "İkinci adım olmadan bu karşılaştırma yapılamıyor. Kaç daire çıkacağı bilinmeden ne kat karşılığı oranı değerlendirilebiliyor ne kendi maliyetiniz hesaplanabiliyor.",
      },

      { h2: "Malatya'da tablo" },
      {
        p: "Merkez ilçelerde ve talep gören mahallelerde kat karşılığı yaygın bir model. Deprem sonrası yenilenen bölgelerde de bu yöntem sıkça kullanılıyor.",
      },
      {
        p: "Kırsalda ve talebin düşük olduğu yerlerde ise yüklenici ilgisi sınırlı kalıyor; oralarda arsa sahipleri sıklıkla kendi ihtiyacına göre, tek katlı ya da az daireli yapılar yaptırıyor. Yurt dışında yaşayanların büyük kısmı bu ikinci grupta: aileye yetecek bir bina, kendi bütçesiyle ve kendi kontrolünde.",
      },

      { h2: "Yükleniciyi değerlendirirken" },
      {
        p: "Kat karşılığı verilecekse yüklenicinin geçmiş işlerine bakmak, teklif oranından daha önemli. Yüksek oran veren ama bitiremeyen bir tarafla anlaşmak, düşük oranla biten bir işten kötü.",
      },
      {
        ul: [
          "Daha önce bitirdiği binalar ve teslim tarihleri.",
          "Bitirdiği binalarda oturanların deneyimi.",
          "İskân alınmış mı, ne kadar sürede alınmış.",
          "Devam eden şantiye sayısı ve durumu.",
          "Teknik şartnameye ne kadar bağlı kalınmış.",
        ],
      },
      {
        p: "Üçüncü madde en çok gözden kaçan yer. Binası biten ama iskânı yıllarca alınamayan projeler var; o durumda daireniz duruyor ama kat mülkiyeti kurulamıyor.",
      },

      { h2: "Süre ve gecikme" },
      {
        p: "Kat karşılığı sözleşmelerinde teslim süresinin ve gecikme hâlinde ne olacağının yazılı olması gerekiyor. Sözlü verilen tarih bağlayıcı olmuyor.",
      },
      {
        p: "Gecikme durumunda ne yapılacağı, kira yardımı olup olmayacağı ve hangi koşulda sözleşmenin sona ereceği metne yazılıyor. Bunlar hukuki konular; bir avukatla birlikte hazırlanması doğru olan.",
      },

      { h2: "Hangi daireler size kalacak?" },
      {
        p: "Paylaşım oranı kadar önemli olan, hangi bağımsız bölümlerin size düşeceği. Aynı oranda farklı katlar bambaşka bir sonuç veriyor.",
      },
      {
        p: "Kat, cephe, manzara ve gürültü durumu daireler arasında ciddi değer farkı yaratıyor. Yola bakan bir zemin kat ile arka cephedeki bir üçüncü kat, aynı metrekarede olsa bile aynı şey değil.",
      },
      {
        p: "Sözleşmede dairelerin bağımsız bölüm numarasıyla ve kat planı ekiyle belirtilmesi gerekiyor. \"Yüzde kırk\" ifadesi tek başına, hangi dairelerin sizde kalacağını söylemiyor.",
      },

      { h2: "Kaba maliyeti anlamak" },
      {
        p: "Kendi yaptırma seçeneğini değerlendirmek için inşaat maliyetinin kabaca bilinmesi gerekiyor. Bu, metrekare üzerinden yapılan bir hesapla başlıyor.",
      },
      {
        p: "Maliyeti belirleyen ana kalemler: kaba yapı, kaba tesisat, ince iş ve dış cephe. İnce iş, seçilen malzemeye göre en geniş aralıkta değişen kalem; kaba yapı ise daha öngörülebilir.",
      },
      {
        p: "Bu hesap çıkarıldıktan sonra kat karşılığı teklifiyle karşılaştırma anlamlı hâle geliyor. İki senaryo yan yana konmadan verilen karar, çoğu durumda sezgiye dayanıyor.",
      },

      { h2: "Vergi ve harçlar" },
      {
        p: "İnşaat sürecinde proje, ruhsat, yapı denetim ve çeşitli harçlar var. Bunlar bütçenin küçümsenmeyecek bir kalemi.",
      },
      {
        p: "Kat karşılığında bu kalemlerin kimin üstleneceği sözleşmede yazılıyor. Kendi yaptırdığınızda ise tamamı size ait ve bütçeye baştan eklenmesi gerekiyor.",
      },
      {
        p: "Satış ve devir aşamalarında da vergi tarafı var; bu konu mali müşavire sorulacak bir konu. Biz uygulama tarafındayız, oradaki hesabı bir uzmanla yapmanız daha doğru olur.",
      },

      { h2: "Arsayı bekletmek de bir seçenek" },
      {
        p: "Her arsanın hemen değerlendirilmesi gerekmiyor. Bölgede talep düşükse ya da bütçe hazır değilse beklemek makul bir karar olabiliyor.",
      },
      {
        p: "Ama bekleyen arsanın da bakımı var: sınırının belli olması, çevresinin kapatılması ve otların temizlenmesi. Sahipsiz görünen arsalar zamanla işgale ve moloz dökümüne açık hâle geliyor.",
      },
      {
        p: "Sınır çiti ve basit bir kapı, uzun vadede en ucuz koruma. Uzaktaki arsa sahipleri için bu, hiç yapı yapmayacak olsalar bile atılması gereken bir adım.",
      },

      { h2: "Karar verirken sorulacaklar" },
      {
        ul: [
          "Sermayem inşaatı bitirmeye yeter mi, yoksa yarım mı kalır?",
          "Süreci yönetecek vaktim var mı, yoksa anahtar teslim mi?",
          "Bu bölgede kaç daire satılır ya da kiralanır?",
          "Kendim oturacak mıyım, gelir mi bekliyorum?",
          "Hissedarlar hemfikir mi?",
          "Beklemenin bana maliyeti ne?",
        ],
      },
      {
        p: "Bu altı sorunun cevabı netleştiğinde karar kendiliğinden çıkıyor. Cevaplardan biri bile belirsizse, önce onu netleştirmek en doğru adım oluyor.",
      },

      { h2: "Uzaktan hangi model daha rahat?" },
      {
        p: "Yurt dışında yaşayanlar için kat karşılığı ilk bakışta cazip görünüyor: para çıkmıyor, süreci başkası yürütüyor. Ama kontrolün büyük kısmı da karşı tarafa geçiyor.",
      },
      {
        p: "Anahtar teslim model, uzaktakiler için çoğunlukla daha dengeli çıkıyor. Bina tamamen sizde kalıyor, yönetim tek elden yürüyor ve takip düzeni kuruluyor.",
      },
      {
        p: "Kat karşılığı seçilecekse bağımsız teknik takip neredeyse zorunlu hâle geliyor. Sizin adınıza şartnameye bakan bir taraf yoksa, kontrol tamamen kaybolmuş oluyor.",
      },
    ],
    faqs: [
      {
        q: "Kat karşılığında oran ne olmalı?",
        a: "Oran arsanın konumuna, imar hakkına ve bölgedeki talebe göre değişiyor. Tek başına oran da anlamlı değil; hangi dairelerin size kalacağı en az oran kadar önemli. Aynı oranda farklı katlar bambaşka sonuç veriyor.",
      },
      {
        q: "Teknik şartname neleri içermeli?",
        a: "Seramik ölçüsü ve sınıfı, parke tipi, kapı malzemesi, doğrama profili ve cam özelliği, mutfak dolabı malzemesi, armatür markası, ısıtma sistemi ve dış cephe uygulaması. \"Kaliteli malzeme\" gibi ifadeler bir şey söylemiyor.",
      },
      {
        q: "Yurt dışındayım, kat karşılığı verebilir miyim?",
        a: "Verebilirsiniz ama sözleşme tapuda düzenlendiği için vekalet gerekiyor ve bu vekaletin bir avukatla hazırlanması doğru olan. Kapsamın dar tutulması ve hangi şartlarda imza atılabileceğinin yazılması önemli.",
      },
      {
        q: "İnşaatı benim adıma kim takip eder?",
        a: "Bağımsız bir teknik takip düzenlenebiliyor: şartnameye uygunluk kontrol ediliyor, kritik aşamalarda saha kaydı alınıp size raporlanıyor. Yapı denetim mevzuata bakıyor, şartnamedeki malzemeye bakmıyor; iki denetim farklı işler yapıyor.",
      },
      {
        q: "Sermayem yetmiyor, aşamalı yapabilir miyim?",
        a: "Yapılabiliyor. Kaba yapı ve çatı tamamlanıp bina kapalı hâle getiriliyor, ince iş sonraya bırakılıyor. Bina hava koşullarından korunmuş oluyor. Ruhsat süresi açısından bir plan yapılması gerekiyor.",
      },
      {
        q: "Anahtar teslim ile kendi yönetmem arasındaki fark ne?",
        a: "İkisinde de bina tamamen sizin. Fark takip yükünde: anahtar teslimde ekiplerin sıralanması, malzeme tedariki ve kalite kontrolü tek elden yürüyor. Uzaktaysanız bu fark belirleyici oluyor.",
      },
      {
        q: "Hisseli arsada nasıl ilerlenir?",
        a: "Karar bütün hissedarları ilgilendiriyor. Pratik yol, kararı bir kişide toplayıp ona vekalet vermek; aksi hâlde her adımda ayrı imza toplamak gerekiyor. Vekaletin bir avukatla hazırlanması doğru olan.",
      },
      {
        q: "Hangi durumda kendi yaptırmak daha mantıklı?",
        a: "Sermayeniz varsa ve arsanın konumu az daireli bir yapıya uygunsa. Yükleniciye giden pay sizde kalıyor. Talebin düşük olduğu bölgelerde zaten kat karşılığına ilgi sınırlı oluyor; orada kendi ihtiyacınıza göre yapmak daha anlamlı.",
      },
      {
        q: "Süre farkı var mı?",
        a: "Kat karşılığında süre yüklenicinin programına bağlı ve sözleşmede yazılı olması gerekiyor. Kendi yaptırdığınızda takvimi siz kuruyorsunuz; bütçe akışına göre hızlandırıp yavaşlatabiliyorsunuz.",
      },
    ],
    related: ["arsama-daire-yaptirmak", "muteahhit-secerken-sorulacak-sorular", "arsa-imar-durumu-nasil-okunur"],
  },

  {
    slug: "izne-gelmeden-ev-hazir-olsun",
    title: "İzne gelmeden evi hazır etmek",
    category: "Tadilat",
    published: "2026-08-17",
    reading: 10,
    metaTitle: "Yaz İznine Ev Hazırlama | Geriye Doğru Takvim",
    metaDesc:
      "Temmuzda geleceksiniz, ev hazır olsun. Hangi işe ne zaman başlanmalı? Geriye doğru planlama, sipariş süreleri ve kuruma beklemeleri.",
    keywords: [
      "yaz izni ev hazırlığı",
      "gurbetçi tadilat takvimi",
      "tadilat planlama",
      "geriye doğru planlama",
      "malzeme tedarik süresi",
    ],
    excerpt:
      "\"Temmuzda geleceğim, hazır olsun\" cümlesi bir hedef. Onu takvime çevirmek ise geriye doğru saymakla başlıyor: en uzun süren kalem hangisi?",
    services: ["anahtar-teslim-tadilat", "komple-ev-tadilati", "daire-tadilati"],
    intro:
      "Yaz aylarında Malatya'ya gelen ailelerin çoğu, gelmeden evin hazır olmasını istiyor. Bu makul bir istek ama tek bir şeye bağlı: ne zaman başlandığına. Kuruma süreleri kısaltılamıyor, sipariş süreleri sıkıştırılamıyor. Bu yazıda hedef tarihten geriye doğru nasıl planlandığını ve hangi işin ne zaman başlaması gerektiğini anlattık.",
    body: [
      { h2: "Geriye doğru planlama" },
      {
        p: "Planlama hedef tarihten başlıyor. Temmuzun ilk haftasında geleceksiniz diyelim; teslim tarihi olarak haziranın son haftası belirleniyor ve oradan geriye doğru sayılıyor.",
      },
      {
        p: "Bu sayımda üç şey belirleyici: işin kendi süresi, kuruma beklemeleri ve malzeme tedarik süreleri. Üçü toplanınca başlama tarihi çıkıyor.",
      },

      { h2: "Kapsama göre başlama tarihi" },
      {
        table: {
          head: ["Kapsam", "Süre", "Temmuz için başlangıç"],
          rows: [
            ["Boya ve temizlik", "1–2 hafta", "Haziran ortası"],
            ["Banyo yenileme", "2–3 hafta", "Haziran başı"],
            ["Mutfak yenileme", "3–4 hafta", "Mayıs sonu"],
            ["Daire komple tadilat", "6–8 hafta", "Nisan sonu"],
            ["Tesisat ve elektrik dahil", "8–10 hafta", "Nisan başı"],
            ["Cephe ve çatı dahil", "3 ay ve üzeri", "Mart"],
          ],
        },
      },
      {
        p: "Tabloya bir de karar süresi eklemek gerekiyor. Keşif, teklif ve malzeme seçimi de zaman alıyor; bunun için iki–üç hafta öngörmek gerçekçi oluyor.",
      },

      { h2: "En uzun süren kalem hangisi?" },
      {
        p: "Takvimi sıklıkla işin kendisi değil, bir malzemenin gelme süresi belirliyor. Özel ölçü mutfak dolabı, ısıcam doğrama ve bazı seramik serileri sipariş süresi isteyen kalemler.",
      },
      {
        p: "Planlama yapılırken önce bunlar tespit edilip sipariş ediliyor. Sonra kalan işler bu teslim tarihlerine göre sıralanıyor. Tersini yapmak, iki hafta beklenen bir dolap yüzünden bütün takvimi kaydırıyor.",
      },

      { h2: "Kısaltılamayan süreler" },
      {
        ul: [
          "Şap kuruması: kalınlığa göre haftalar sürüyor.",
          "Sıva kuruması: boya öncesi beklenmesi gereken süre.",
          "Beton işleri: kür süresi ve mevsim etkisi.",
          "Su yalıtımı: kat arası ve test öncesi bekleme.",
          "Boya katları: kat arası kuruma.",
        ],
      },
      {
        p: "Bu beklemeler hızlandırılmaya çalışıldığında sonuç kötü çıkıyor: parke kabarıyor, boya tutmuyor, seramik boş ses veriyor. Takvim kurulurken bunlar baştan hesaba giriyor.",
      },

      { h2: "Kararları öne almak" },
      {
        p: "Uzaktan çalışırken takvimi en çok geciktiren şey bekleyen kararlar. Seramik seçimi bir hafta gecikince ondan sonraki her kalem kayıyor.",
      },
      {
        p: "Çözüm, karar takvimini işin takvimine bağlamak. Her kararın en geç hangi tarihte verilmesi gerektiği yazılıyor ve birkaç gün öncesinden hatırlatılıyor.",
      },
      {
        p: "İşin başında bir seferde alınabilecek kararları toplu almak da işi kolaylaştırıyor: bütün malzeme paketini baştan belirlemek, süreç boyunca soru sayısını en aza indiriyor.",
      },

      { h2: "Yaz yoğunluğu" },
      {
        p: "Malatya'da yaz ayları inşaat sektörünün en yoğun dönemi. Aynı dönemde herkes izne geldiği için hem ekip hem malzeme talebi artıyor.",
      },
      {
        p: "Nisan–mayısta başlayan işler bu yoğunluktan önce ilerlemiş oluyor. Haziranda başlayan bir iş ise hem sıraya giriyor hem malzeme tedarikinde gecikme riski taşıyor.",
      },

      { h2: "Kışın yapılabilecek işler" },
      {
        p: "Yaza yetiştirmek için kışın başlamak da bir seçenek. İç mekân işlerinin çoğu kışın rahatlıkla yapılabiliyor.",
      },
      {
        table: {
          head: ["İş", "Kışın yapılır mı"],
          rows: [
            ["İç tadilat, boya, kaplama", "Evet"],
            ["Tesisat ve elektrik", "Evet"],
            ["Mutfak ve banyo", "Evet"],
            ["Dış cephe boyası", "Hayır, sıcaklık sınırı var"],
            ["Mantolama", "Kısmen, havaya bağlı"],
            ["Çatı ve beton işleri", "Hayır, don riski"],
          ],
        },
      },
      {
        p: "İç işleri kışın bitirip dış işleri baharda yapmak, yaza yetişmenin en rahat yolu. Bir de kış aylarında ekipler daha müsait oluyor.",
      },

      { h2: "Ev boşken çalışmanın avantajı" },
      {
        p: "Siz orada olmadığınız için ev tamamen boş ve bu iş hızını gözle görülür ölçüde artırıyor. Eşya taşımak, oda oda çalışmak ve toz önlemleriyle uğraşmak gerekmiyor.",
      },
      {
        p: "Aynı iş, içinde oturulan bir dairede yüzde otuz–kırk daha uzun sürüyor. Uzaktaki ev sahiplerinin farkında olmadığı bir avantaj bu.",
      },

      { h2: "Geliş tarihine yakın işler" },
      {
        p: "Bazı işler bilerek sona bırakılıyor: derin temizlik, cam silme, son rötuşlar ve varsa perde montajı.",
      },
      {
        p: "Ev geldiğinizde taze görünsün diye bunlar teslimden birkaç gün önceye alınıyor. Erken yapıldığında iki ay boyunca toz tutuyor ve etkisi kayboluyor.",
      },

      { h2: "Gelmeden önce açılış" },
      {
        p: "Geliş tarihinden birkaç gün önce ev açılıyor: su ve elektrik devreye alınıyor, hatlar yıkanıyor, havalandırma yapılıyor, kombi çalıştırılıyor.",
      },
      {
        p: "Böylece siz kapıdan girdiğinizde ev kullanıma hazır oluyor. Yol yorgunluğunun üstüne vana aramak ve su akıtmak zorunda kalmıyorsunuz.",
      },

      { h2: "Gecikme olursa" },
      {
        p: "Her takvimde bir miktar tampon bırakmak gerekiyor. Söküm sonrası çıkan işler, malzeme gecikmesi ya da hava koşulu takvimi etkileyebiliyor.",
      },
      {
        p: "Bir–iki haftalık tampon, bu tür durumlarda hedefin kaçmasını önlüyor. Tampon kullanılmazsa da ev erken hazır oluyor; kimse buna itiraz etmiyor.",
      },

      { h2: "Öncelik sırası" },
      {
        p: "Takvim sıkışırsa neyin önce biteceğine karar vermek gerekiyor. Yaşamayı mümkün kılan işler öne alınıyor.",
      },
      {
        ol: [
          "Su ve elektrik tesisatının çalışır olması.",
          "Banyo ve tuvaletin kullanılabilir olması.",
          "Mutfağın temel işlevi görmesi.",
          "Yatak odalarının hazır olması.",
          "Salon ve ortak alanlar.",
          "Dekorasyon, cephe ve bahçe işleri.",
        ],
      },
      {
        p: "Bu sıra takip edildiğinde takvim tam tutmasa bile ev oturulabilir hâlde oluyor. Kalan işler siz oradayken ya da siz gittikten sonra tamamlanabiliyor.",
      },

      { h2: "Siz oradayken yapılacaklar" },
      {
        p: "Bazı işleri bilinçli olarak geliş dönemine bırakmak da bir tercih. Renk seçimi zor gelen kalemler, mobilya yerleşimi ya da bahçe düzenlemesi böyle işler.",
      },
      {
        p: "Böyle bir durumda geldiğinizde iki hafta boyunca ev şantiye olmuyor; küçük ve gürültüsüz işler yapılıyor. Planlama yapılırken hangi işlerin bu gruba gireceği baştan konuşuluyor.",
      },

      { h2: "Malatya'da yaz takvimi" },
      {
        p: "Temmuz ve ağustos, izne gelenlerin yoğunlaştığı aylar. O dönemde hem ekipler hem tedarikçiler dolu oluyor.",
      },
      {
        p: "Bizim tarafta en rahat çalıştığımız dönem şubat ile mayıs arası. O aylarda başlayan işler hem zamanında bitiyor hem malzeme tedarikinde sıkıntı çıkmıyor. Yazı hedefleyenler için doğru zaman, kışın sonu.",
      },

      { h2: "Bir yıl önceden planlamak" },
      {
        p: "Kapsamlı bir tadilat düşünülüyorsa bir önceki yazda karar vermek en rahat yol. Geldiğinizde evi birlikte geziyor, ne yapılacağını yerinde konuşuyoruz.",
      },
      {
        p: "Kararlar siz oradayken alındığında uzaktan yürütülecek kısım çok azalıyor. Malzeme seçimi bile geldiğiniz dönemde yapılabiliyor; bayilere birlikte gidilip seçimler kayda alınıyor.",
      },
      {
        p: "Sonraki yılın kışında iş başlıyor ve yaza yetişiyor. Bu düzen, uzaktan çalışmanın bütün zorluğunu neredeyse ortadan kaldırıyor.",
      },

      { h2: "Kısa süreli gelişler" },
      {
        p: "Bayram tatili ya da bir haftalık kısa gelişlerde kapsamlı tadilat mümkün olmuyor. Ama o hafta içinde küçük işler toplu hâlde yapılabiliyor.",
      },
      {
        p: "Damlayan musluk, arızalı priz, sıkışan kapı, tıkanan gider; bunların hepsi bir günde bitiyor. Gelmeden önce liste çıkarmak, o günün verimli geçmesini sağlıyor.",
      },
      {
        p: "Bir de keşif için değerlendirilebiliyor: kısa geliş sırasında ev birlikte gezilip sonraki büyük iş için plan yapılıyor.",
      },

      { h2: "Aile birden çok daireyi hazırlıyorsa" },
      {
        p: "Aynı binada ya da yakın mahallede birden fazla daireye sahip aileler için işleri birleştirmek büyük avantaj sağlıyor. Aynı ekip, aynı malzeme siparişi, aynı şantiye kurulumu.",
      },
      {
        p: "Bu düzende hem takvim kısalıyor hem her daire için ayrı hazırlık maliyeti çıkmıyor. Kardeşlerin ya da akrabaların birlikte planlaması bu yüzden sık öneriliyor.",
      },
      {
        p: "Uzak ilçelerde bu daha da anlamlı. Aynı köyde ya da mahallede birden fazla iş çıktığında yol payı düşüyor ve ekip o bölgede daha uzun kalabiliyor.",
      },

      { h2: "Malzemeyi önceden getirtmek" },
      {
        p: "Bazı aileler izne gelirken beraberinde malzeme getirmeyi düşünüyor. Armatür, aydınlatma ve bazı dekoratif ürünler için bu mümkün.",
      },
      {
        p: "Ama tesisat parçalarında dikkat gerekiyor: farklı ülkelerde diş ölçüleri ve bağlantı standartları değişebiliyor. Getirilen bir bataryanın buradaki tesisata uymadığı durumlar oluyor.",
      },
      {
        p: "Getirmeyi düşündüğünüz ürünleri önceden sormak bu riski ortadan kaldırıyor. Uymayan bir ürün için ara parça bulunabiliyor ama iş sırasında bunu öğrenmek takvimi bozuyor.",
      },

      { h2: "Teslim gününü planlamak" },
      {
        p: "Teslimin geliş tarihinden birkaç gün önceye alınması, olası küçük düzeltmeler için zaman bırakıyor. Aynı gün teslim planlandığında, çıkan ufak bir eksik tatilinizin ilk gününe denk geliyor.",
      },
      {
        p: "Bu birkaç gün aynı zamanda derin temizlik ve son kontroller için de kullanılıyor. Kapıdan girdiğinizde ev bitmiş ve temiz oluyor.",
      },

      { h2: "Bayram ve kısa tatiller" },
      {
        p: "Yaz izni dışında bayram tatillerinde de gelenler oluyor. Ramazan ve Kurban bayramları kısa olduğu için o dönemlere büyük iş planlanmıyor.",
      },
      {
        p: "Bayramda gelinecekse hazırlık daha sınırlı tutuluyor: temizlik, küçük onarımlar ve evin açılması. Kapsamlı işler bayram sonrasına ya da yaza bırakılıyor.",
      },
      {
        p: "Bayram öncesi hafta Malatya'da yoğun bir dönem; ekipler ve tedarikçiler o günlerde dolu oluyor. Planlamayı bir–iki hafta önceden yapmak yeterli oluyor.",
      },

      { h2: "Çocuklu ailelerde" },
      {
        p: "Uzun yolculuk sonrası çocuklu bir ailenin ihtiyacı belli: çalışan bir banyo, sıcak su ve serin bir oda. Takvim sıkışırsa öncelik bunlara veriliyor.",
      },
      {
        p: "Yaz sıcağında klima ya da havalandırma da öncelikli hâle geliyor. Malatya yazında bu, konfor değil zorunluluk sayılıyor; hazırlık listesinde üst sıralara alınıyor.",
      },

      { h2: "Dönüşten sonra" },
      {
        p: "İzin bitip döndüğünüzde ev yeniden boş kalıyor. Ayrılmadan önce kapatma işlemlerinin yapılması, sonraki gelişte iş bırakmıyor.",
      },
      {
        p: "Kışa girecekse ana vana kapatılıyor, hatlar boşaltılıyor ve sifonlara yağ dökülüyor. Yazın ortasında ayrılıyorsanız bu işlemler daha basit; yine de sifonlar ve ana vana atlanmıyor.",
      },

      { h2: "Sonraki yıl için not bırakmak" },
      {
        p: "Bu yıl yetişmeyen ya da sonraya bırakılan işleri yazılı bırakmak, gelecek sene planlamayı çok kolaylaştırıyor.",
      },
      {
        p: "Kısa bir liste yeterli: şu oda boyanacak, banyo dolabı değişecek, bahçe kapısı yenilenecek. Bu liste elinizde olduğunda sonraki yılın planı kışın rahatça kurulabiliyor.",
      },
      {
        p: "Aynı listeyi biz de saklıyoruz. Bir sonraki görüşmede sıfırdan başlamak yerine kaldığınız yerden devam ediliyor.",
      },

      { h2: "Yaz boyunca küçük işler" },
      {
        p: "Siz oradayken çıkan küçük ihtiyaçlar için de bir düzen kurmak mümkün. Bir priz, bir musluk, bir kapı ayarı; bunlar aynı gün halledilebilen işler.",
      },
      {
        p: "İzin döneminde bunları biriktirip tek seferde yaptırmak hem daha verimli hem tatilinizi bölmüyor. Listeyi birkaç gün toplayıp tek çağrıyla bitirmek en pratiği.",
      },

      { h2: "Hangi işi ne zaman yapmalı?" },
      {
        table: {
          head: ["İş", "En uygun dönem"],
          rows: [
            ["İç tadilat, boya, kaplama", "Kış ve erken bahar"],
            ["Tesisat ve elektrik yenileme", "Kış"],
            ["Dış cephe boyası, mantolama", "Bahar ve sonbahar"],
            ["Çatı işleri", "Bahar ve yaz"],
            ["Bahçe düzenlemesi", "Bahar"],
            ["Küçük onarımlar", "Her zaman"],
          ],
        },
      },
      {
        p: "Yaza yetiştirmenin en rahat yolu tabloyu tersten okumak: kışın içeriyi, baharda dışarıyı bitirmek. Böylece hem hava koşullarına takılmıyorsunuz hem yaz yoğunluğuna denk gelmiyorsunuz.",
      },

      { h2: "Takvimi birlikte kurmak" },
      {
        p: "Hedef tarihi söylemek yeterli; geri kalanı birlikte planlıyoruz. Kapsam belirlendikten sonra hangi işin ne zaman başlayacağı bir takvim olarak yazılıp size gönderiliyor.",
      },
      {
        p: "Bu takvimde karar tarihleri de yer alıyor. Hangi seçimi en geç ne zaman yapmanız gerektiği baştan belli olduğunda, süreç boyunca kimse kimseyi beklemiyor.",
      },
    ],
    faqs: [
      {
        q: "Temmuzda geleceğim, ne zaman başlamalıyım?",
        a: "Kapsama bağlı. Boya ve temizlik için haziran ortası yetiyor; komple daire tadilatı için nisan sonu, tesisat ve elektrik dahilse nisan başı gerekiyor. Buna keşif, teklif ve malzeme seçimi için iki–üç hafta eklemek gerçekçi oluyor.",
      },
      {
        q: "Süreyi kısaltmak mümkün mü?",
        a: "İşçilik tarafında ekip artırarak bir miktar kısaltılabiliyor ama kuruma süreleri kısaltılamıyor. Şap, sıva ve boya kendi zamanını istiyor; zorlandığında parke kabarıyor, boya tutmuyor.",
      },
      {
        q: "Takvimi en çok ne geciktiriyor?",
        a: "İki şey: bekleyen kararlar ve sipariş süresi uzun malzemeler. İkisi de baştan planlanabiliyor. Karar tarihleri takvime bağlanıyor, uzun süreli kalemler işin başında sipariş ediliyor.",
      },
      {
        q: "Kışın tadilat yapılır mı?",
        a: "İç mekân işlerinin tamamı yapılıyor: tesisat, elektrik, kaplama, boya, mutfak, banyo. Dış cephe boyası ve beton işleri kışa uygun değil. İç işleri kışın bitirip dışı baharda yapmak yaza yetişmenin en rahat yolu.",
      },
      {
        q: "Ev boş olduğu için avantaj var mı?",
        a: "Var ve küçümsenmeyecek kadar. Aynı iş içinde oturulan bir dairede yüzde otuz–kırk daha uzun sürüyor. Eşya taşımak, oda oda çalışmak ve toz önlemleri iş hızını düşürüyor.",
      },
      {
        q: "Yetişmezse ne olur?",
        a: "Öncelik sırası devreye giriyor: önce su ve elektrik, sonra banyo ve mutfak, sonra yatak odaları. Bu sırayla ilerlendiğinde takvim tam tutmasa bile ev oturulabilir oluyor; kalan işler siz oradayken tamamlanıyor.",
      },
      {
        q: "Geldiğimde ev kullanıma hazır olacak mı?",
        a: "Geliş tarihinden birkaç gün önce ev açılıyor: su ve elektrik devreye alınıyor, hatlar yıkanıyor, havalandırma yapılıyor, kombi çalıştırılıyor. Kapıdan girdiğinizde uğraşacak bir şey kalmıyor.",
      },
    ],
    related: ["yurt-disindan-tadilat-yaptirmak", "komple-ev-tadilati-ne-kadar-surer", "daire-tadilati-is-sirasi"],
  },

  {
    slug: "uzaktan-kiraya-hazirlama",
    title: "Malatya'daki evi uzaktan kiraya hazırlamak",
    category: "Tadilat",
    published: "2026-08-17",
    reading: 10,
    metaTitle: "Uzaktan Kiraya Hazırlama | Ne Yapılmalı?",
    metaDesc:
      "Boş duran evi kiraya vermeden önce ne yapılmalı? Dayanıklı malzeme seçimi, tesisat kontrolü, teslim tutanağı ve uzaktan yönetim.",
    keywords: [
      "kiraya hazırlama",
      "uzaktan kira yönetimi",
      "kiralık daire yenileme",
      "teslim tutanağı",
      "dayanıklı malzeme",
    ],
    excerpt:
      "Kiralık bir evde doğru yatırım, en pahalı malzeme değil en az sorun çıkaran malzeme. Uzaktan yönetiliyorsa bu daha da geçerli.",
    services: ["kiralik-ev-yenileme", "daire-tadilati", "sihhi-tesisat"],
    intro:
      "Yurt dışında ya da başka şehirde yaşayanların Malatya'daki evi çoğu kez boş duruyor. Kiraya vermek hem geliri hem evin bakımını çözen bir yol; kullanılan bir ev boş duran evden daha iyi korunuyor. Ama uzaktan yönetilecekse hazırlığın da ona göre yapılması gerekiyor. Bu yazıda neye yatırım yapılacağını ve nelerin baştan halledilmesi gerektiğini anlattık.",
    body: [
      { h2: "Önce görünmeyen tarafı" },
      {
        p: "Kiralık daire hazırlığında en sık yapılan hata, parayı görünen yüzeye harcamak. Şık bir mutfak dolabı kirayı bir miktar artırıyor ama patlayan bir boru her şeyi götürüyor.",
      },
      {
        p: "Uzaktan yönetilen bir evde önce tesisat sağlamlığı geliyor. Sonra dayanıklı yüzeyler, en son görsel iyileştirme. Sıra tersine döndüğünde ilk kışta arıza çağrılarıyla uğraşıyorsunuz.",
      },

      { h2: "Baştan halledilecekler" },
      {
        ul: [
          "Su tesisatında çürümüş hat varsa yenilenmesi.",
          "Elektrik panosunun ve kaçak akım rölesinin kontrolü.",
          "Kombi bakımı ve basınç kontrolü.",
          "Musluk, rezervuar ve sifonların gözden geçirilmesi.",
          "Pencere contaları ve kapı kilitleri.",
          "Gider hatlarının açılması ve akış kontrolü.",
        ],
      },
      {
        p: "Bu altı kalem kiracı girmeden halledildiğinde, ilk yıl neredeyse hiç arıza çağrısı gelmiyor. Sonradan çıkan her arıza ise hem masraf hem koordinasyon demek.",
      },

      { h2: "Dayanıklı malzeme seçimi" },
      {
        p: "Kiralık dairede malzeme seçimi ev sahibinin kendi oturacağı daireden farklı yapılıyor. Ölçüt güzellik değil, yıpranmaya dayanma ve kolay onarılma.",
      },
      {
        table: {
          head: ["Kalem", "Kiralıkta uygun"],
          rows: [
            ["Zemin", "Dayanıklı seramik ya da sağlam laminat"],
            ["Duvar", "Silinebilir boya"],
            ["Mutfak tezgâhı", "Çizilmeye dayanıklı yüzey"],
            ["Armatür", "Yaygın bulunan, parçası kolay marka"],
            ["Kapı", "Sağlam kasa ve kilit"],
            ["Aydınlatma", "Standart armatür, kolay değişen ampul"],
          ],
        },
      },
      {
        p: "Dördüncü satır uzaktan yönetimde ayrı bir değer taşıyor. Yedek parçası her yerde bulunan bir armatür, bir tamir çağrısını yarım saatte bitiriyor.",
      },

      { h2: "Beyaz eşya konusu" },
      {
        p: "Eşyalı kiraya vermek kirayı artırıyor ama sorumluluğu da artırıyor. Bozulan her cihaz ev sahibinin işi hâline geliyor.",
      },
      {
        p: "Uzaktan yönetiliyorsa eşyasız ya da yalnızca ankastre fırın ve ocakla vermek daha rahat bir düzen kuruyor. Kararı verirken bölgedeki talebi de hesaba katmak gerekiyor.",
      },

      { h2: "İlk izlenim kalemleri" },
      {
        p: "Kiracı adayının ilk on dakikada gördükleri kararını büyük ölçüde belirliyor. Bunlar da aslında ucuz kalemler.",
      },
      {
        ol: [
          "Boya: en düşük maliyetli, en yüksek etkili kalem.",
          "Banyo ve mutfakta temizlik hissi; derz, silikon, armatür.",
          "Aydınlatma: yeterli ve düzgün ışık.",
          "Zemin: hasarlıysa kaplama, değilse iyi bir temizlik.",
          "Çalışan bir tesisat: damlayan musluk yok, akan rezervuar yok.",
          "Kapı ve kilitler: düzgün kapanan kapı, sağlam kilit.",
        ],
      },
      {
        p: "Bu altı kalem tamamlandığında daire, çok daha pahalı yenilenmiş dairelerle yarışabiliyor. Yüksek segment malzeme kullanmak kirayı genelde aynı oranda artırmıyor.",
      },

      { h2: "Teslim tutanağı" },
      {
        p: "Uzaktan yönetilen bir kiralamada en değerli belge bu. Dairenin teslim anındaki hâli fotoğraflarla kayda geçiyor.",
      },
      {
        p: "Her odanın fotoğrafı, beyaz eşyaların seri numaraları, sayaç endeksleri, anahtar sayısı ve varsa mevcut kusurlar tutanağa yazılıyor. Çıkışta karşılaştırma bu belgeyle yapılıyor.",
      },
      {
        p: "Tutanak olmadan yürüyen kiralamalarda çıkış anında yaşanan tartışmaların neredeyse tamamı, teslim anında ne olduğunun bilinmemesinden çıkıyor.",
      },

      { h2: "Yerel muhatap" },
      {
        p: "Uzaktan kiraya verirken Malatya'da bir muhatap olması işi büyük ölçüde kolaylaştırıyor. Bu kişi kiracıyla iletişimi yürütüyor, arıza durumunda kapıyı açıyor.",
      },
      {
        p: "Bir akrabanız olabileceği gibi, bu işi yapan bir emlak yönetimi de olabiliyor. Önemli olan kiracının bir sorunu olduğunda kime ulaşacağını bilmesi.",
      },

      { h2: "Arıza çağrılarını yönetmek" },
      {
        p: "Kiralık dairede en sık çıkan arızalar bellidir: musluk damlaması, rezervuar akıtması, gider tıkanması, kombi arızası ve sigorta atması.",
      },
      {
        p: "Bunlar için baştan bir düzen kurmak, her seferinde usta aramaktan çok daha rahat. Kiracıya kime ulaşacağı söyleniyor, iş yapılıyor ve size raporlanıyor.",
      },
      {
        p: "Küçük arızaların hızlı çözülmesi kiracıyı da elde tutuyor. Kiracı değişimi, birkaç küçük tamirden çok daha pahalı bir kalem.",
      },

      { h2: "Sayaçlar ve abonelikler" },
      {
        p: "Aboneliklerin kiracı üzerine alınması, hem faturaların takibini hem sorumluluğu netleştiriyor. Sayaç endeksleri teslim tutanağına yazılıyor.",
      },
      {
        p: "Çıkışta abonelik kapatma ve borç kontrolü yapılıyor. Uzaktan yönetimde bu adım atlandığında, sonraki kiracı döneminde eski borç sorunu çıkabiliyor.",
      },

      { h2: "Kışa hazırlık" },
      {
        p: "Kiracılı bir evde donma riski azalıyor çünkü ev ısıtılıyor. Yine de kiracıya birkaç şey anlatmak faydalı oluyor.",
      },
      {
        p: "Ana vananın yeri, kombinin nasıl çalıştığı, sigortaların nerede olduğu ve uzun süre evden ayrılırken ne yapılması gerektiği. Kısa bir bilgi notu bırakmak, kış ortasında çıkabilecek pek çok sorunu önlüyor.",
      },

      { h2: "Aidat ve ortak giderler" },
      {
        p: "Apartman aidatı ve ortak giderlerin kimin ödeyeceği kira sözleşmesinde yazılıyor. Uzaktan yönetimde ödeme düzeninin de belirlenmesi gerekiyor.",
      },
      {
        p: "Yönetimle iletişim kuracak bir kanal olması ayrıca önemli. Bina genelinde yapılan bir çatı ya da tesisat işinde, uzaktaki daire sahibinin haberi olmayabiliyor.",
      },

      { h2: "Sözleşme ve kayıt" },
      {
        p: "Kira sözleşmesinin yazılı olması ve bir kopyasının sizde bulunması esas. Kira ödemelerinin banka üzerinden yapılması da kayıt açısından önemli.",
      },
      {
        p: "Depozito tutarı ve iade koşulları da sözleşmede yer alıyor. Teslim tutanağıyla birlikte bu iki belge, çıkış aşamasında yaşanabilecek anlaşmazlıkların çoğunu baştan kapatıyor.",
      },

      { h2: "Ara kontrol" },
      {
        p: "Yılda bir yapılan kısa bir kontrol ziyareti, hem evin durumunu görmeyi hem küçük sorunları büyümeden yakalamayı sağlıyor.",
      },
      {
        p: "Bu ziyaret kira sözleşmesinde belirtilmiş ve kiracıyla önceden konuşulmuş olmalı. Amaç denetim değil bakım; kombi bakımı ya da tesisat kontrolüyle birlikte yapıldığında kiracı için de faydalı oluyor.",
      },

      { h2: "Kiracı çıkışında" },
      {
        p: "Çıkış anında teslim tutanağı ile mevcut durum karşılaştırılıyor. Normal kullanım yıpranması ile hasar arasındaki ayrım burada yapılıyor.",
      },
      {
        p: "Bu ayrım en çok tartışılan konu. Duvarda solmuş boya normal yıpranma sayılıyor; kırılmış bir lavabo hasar. Tutanaktaki fotoğraflar bu ayrımı tartışmasız hâle getiriyor.",
      },

      { h2: "İki kiracı arasında" },
      {
        p: "Kiracı değişimi, evi elden geçirmek için en uygun zaman. Boya, temizlik ve küçük onarımlar bu aralıkta yapılıyor.",
      },
      {
        p: "Malatya'da tipik bir kiralık hazırlığı; boya, ıslak hacim temizliği, küçük onarımlar ve aydınlatma dahil birkaç iş gününde bitiyor. Zemin değişimi gerekiyorsa birkaç gün daha ekleniyor. Uzaktaki ev sahibi için bu kısa aralık, tek bir çağrıyla yönetilebilen bir iş.",
      },

      { h2: "Kirayı etkileyen kalemler" },
      {
        p: "Aynı büyüklükteki iki daire arasında kira farkı yaratan şeyler bellidir ve çoğu büyük yatırım gerektirmiyor.",
      },
      {
        table: {
          head: ["Kalem", "Kiraya etkisi"],
          rows: [
            ["Temiz ve aydınlık ıslak hacim", "Yüksek"],
            ["Isıtma sistemi (kombi, yerden ısıtma)", "Yüksek"],
            ["Otopark ve asansör", "Yüksek"],
            ["Mutfak dolabı ve tezgâh", "Orta"],
            ["Zemin kaplaması", "Orta"],
            ["Duvar rengi", "Düşük ama ilk izlenimde etkili"],
          ],
        },
      },
      {
        p: "Isıtma sistemi kiracıların en çok sorduğu başlıklardan biri. Kombisi olmayan ya da eski bir sistemle ısınan dairelerde kira ve kiracı bulma süresi ikisi birden etkileniyor.",
      },

      { h2: "Boş kalma süresini kısaltmak" },
      {
        p: "Uzaktaki ev sahibi için kiracı arayışının uzaması ayrı bir maliyet. Bunu kısaltan iki şey var: doğru fiyatlama ve iyi fotoğraf.",
      },
      {
        p: "İlan fotoğrafları temizlik sonrası, gündüz ve boş dairede çekildiğinde çok daha iyi sonuç veriyor. Karanlıkta ya da eşyalıyken çekilmiş fotoğraflar ilgiyi düşürüyor.",
      },
      {
        p: "Fotoğrafları biz de çekip gönderiyoruz; hazırlık işi biterken aynı gün yapılan bir çekim, ilanın hemen yayına girmesini sağlıyor.",
      },

      { h2: "Kısa süreli kiralama" },
      {
        p: "Bazı ev sahipleri evi yıl boyunca kiraya vermek yerine, kendi kullanmadığı dönemlerde kısa süreli değerlendirmeyi düşünüyor.",
      },
      {
        p: "Bu düzen daha çok yönetim istiyor: her giriş çıkışta temizlik, anahtar teslimi ve kontrol gerekiyor. Uzaktan yürütülecekse mutlaka yerel bir muhatap gerekiyor.",
      },
      {
        p: "Karşılığında yılın birkaç haftasını kendiniz kullanabiliyorsunuz. Uzun dönem kirada bu esneklik yok; karar tamamen sizin kullanım planınıza bağlı.",
      },

      { h2: "Eşyaların durumu" },
      {
        p: "Boş duran evlerde aile eşyaları bulunuyor ve kiraya verirken bunların ne olacağı konuşuluyor. Bir odayı kilitli tutmak mümkün ama kiracıya bunu baştan söylemek gerekiyor.",
      },
      {
        p: "Pratikte daha rahat olan, eşyaları başka bir yere taşımak ya da depoya vermek. Kilitli oda hem kiracıyı rahatsız ediyor hem eşyanın nem ve bakımsızlıktan zarar görmesini engellemiyor.",
      },
      {
        p: "Hatıra değeri olan parçaların listesi ve fotoğrafı çıkarılıyor. Taşınırken kaybolma ya da karışma ihtimali böylece ortadan kalkıyor.",
      },

      { h2: "Vergi ve bildirim" },
      {
        p: "Kira geliri elde edildiğinde bildirim yükümlülüğü doğuyor ve yurt dışında yaşayanlar için bu konu ayrı bir başlık.",
      },
      {
        p: "Bu, bir mali müşavire sorulacak bir konu; biz uygulama tarafındayız. Ama kira ödemelerinin banka üzerinden yapılması, hangi düzen seçilirse seçilsin işi kolaylaştırıyor.",
      },

      { h2: "Kiracı seçimi" },
      {
        p: "Uzaktan yönetilen bir evde kiracı seçimi normalden daha önemli. Sorun çıktığında hemen müdahale edemiyorsunuz.",
      },
      {
        p: "Yerel muhatabınızın kiracı adayıyla yüz yüze görüşmesi, referans alınması ve sözleşmenin düzgün yapılması bu riski büyük ölçüde azaltıyor. Aceleyle yapılan bir kiralama, boş kalan birkaç aydan daha pahalıya mal olabiliyor.",
      },

      { h2: "Sigortayı unutmayın" },
      {
        p: "Kiraya verilen evde de konut sigortası yararlı. Yapıyı ilgilendiren hasarlarda ev sahibinin sorumluluğu devam ediyor.",
      },
      {
        p: "Poliçe yaptırırken evin kirada olduğunun belirtilmesi gerekiyor. Kiracının eşyaları ayrı bir konu ve onun kendi sorumluluğunda kalıyor.",
      },

      { h2: "Uzun vadeli bakım planı" },
      {
        p: "Kiralık bir daire de zamanla yıpranıyor. Beş–on yıllık bir bakım planı yapmak, büyük masrafları öngörülebilir hâle getiriyor.",
      },
      {
        table: {
          head: ["Kalem", "Tipik yenileme"],
          rows: [
            ["Boya", "Her kiracı değişiminde"],
            ["Silikon ve derz", "3–5 yıl"],
            ["Musluk ve rezervuar iç takımı", "5–8 yıl"],
            ["Kombi bakımı", "Yılda bir"],
            ["Kombi değişimi", "12–15 yıl"],
            ["Zemin kaplaması", "10–15 yıl"],
          ],
        },
      },
      {
        p: "Bu takvim önceden bilindiğinde harcamalar sürpriz olmaktan çıkıyor. Kiracı değişim aralıkları da bu planla örtüştürüldüğünde, ev boş kalmadan yenilenmiş oluyor.",
      },

      { h2: "Kiraya vermek mi, boş tutmak mı?" },
      {
        p: "Bu karar sadece gelir meselesi değil. Kullanılan bir ev daha iyi korunuyor: tesisat çalışıyor, nem birikmiyor, sorunlar erken fark ediliyor.",
      },
      {
        p: "Boş tutmanın da bir maliyeti var ve çoğu zaman görünmüyor. Yılda bir patlayan boru, kuruyan sifon, rutubetlenen duvar; bunların toplamı kira gelirinden bağımsız bir yük oluşturuyor.",
      },
      {
        p: "Yılın birkaç haftasını kendiniz kullanmak istiyorsanız karar zorlaşıyor. O durumda ya kısa süreli kiralama ya da boş tutup düzenli bakım yaptırmak arasında seçim yapılıyor.",
      },

      { h2: "Malatya'da kira talebi" },
      {
        p: "Merkez ilçelerde, özellikle üniversite ve hastane çevresinde kiralık daireye talep sürekli. Bu bölgelerde boş kalma süresi kısa oluyor.",
      },
      {
        p: "Uzak mahallelerde ve kırsalda tablo farklı; orada kiracı bulmak zaman alabiliyor. Bu durumda hazırlığa yapılan yatırımın da ölçüsü değişiyor.",
      },
      {
        p: "Deprem sonrası dönemde talep yapısı da değişti. Hangi bölgede ne aranıyor, bu bilgi kararı doğrudan etkiliyor; kiraya vermeden önce bölgedeki durumu sormak yararlı oluyor.",
      },
    ],
    faqs: [
      {
        q: "Kiraya vermeden önce neye yatırım yapmalıyım?",
        a: "Önce görünmeyen tarafa: tesisat, elektrik panosu, kombi bakımı, gider hatları. Sonra dayanıklı yüzeyler, en son görsel iyileştirme. Sıra tersine döndüğünde ilk kışta arıza çağrılarıyla uğraşıyorsunuz.",
      },
      {
        q: "Eşyalı mı vermeliyim?",
        a: "Eşyalı kiraya vermek kirayı artırıyor ama bozulan her cihaz sizin işiniz oluyor. Uzaktan yönetiliyorsa eşyasız ya da yalnızca ankastre fırın ve ocakla vermek daha rahat. Bölgedeki talebi de hesaba katmak gerekiyor.",
      },
      {
        q: "Teslim tutanağı neden önemli?",
        a: "Çıkışta yaşanan tartışmaların neredeyse tamamı, teslim anında ne olduğunun bilinmemesinden çıkıyor. Her odanın fotoğrafı, sayaç endeksleri, anahtar sayısı ve mevcut kusurlar yazıldığında karşılaştırma tartışmasız oluyor.",
      },
      {
        q: "Arıza çıkarsa kim ilgilenecek?",
        a: "Baştan bir düzen kurmak en rahatı: kiracı kime ulaşacağını biliyor, iş yapılıyor ve size raporlanıyor. Küçük arızaların hızlı çözülmesi kiracıyı da elde tutuyor; kiracı değişimi birkaç tamirden çok daha pahalı.",
      },
      {
        q: "Pahalı malzeme kirayı artırır mı?",
        a: "Genelde aynı oranda artırmıyor. Orta segment ve temiz bir uygulama, kira ile maliyet dengesi açısından daha iyi sonuç veriyor. Kiralıkta ölçüt güzellik değil, yıpranmaya dayanma ve kolay onarılma.",
      },
      {
        q: "Yılda bir kontrol yapabilir miyim?",
        a: "Kira sözleşmesinde belirtilmiş ve kiracıyla önceden konuşulmuşsa yapılabiliyor. Amaç denetim değil bakım; kombi bakımı ya da tesisat kontrolüyle birlikte yapıldığında kiracı için de faydalı oluyor.",
      },
      {
        q: "İki kiracı arasında ne kadar sürede hazırlanır?",
        a: "Boya, ıslak hacim temizliği, küçük onarımlar ve aydınlatma dahil birkaç iş gününde bitiyor. Zemin değişimi gerekiyorsa birkaç gün daha ekleniyor. Uzaktan tek çağrıyla yönetilebilen bir iş.",
      },
      {
        q: "Kiracıya ne anlatmalıyım?",
        a: "Ana vananın yeri, kombinin nasıl çalıştığı, sigortaların nerede olduğu ve uzun süre evden ayrılırken yapılacaklar. Kısa bir bilgi notu bırakmak, kış ortasında çıkabilecek pek çok sorunu önlüyor.",
      },
    ],
    related: ["kiralik-daire-hazirlama-rehberi", "uzun-sure-bos-duran-ev", "yurt-disindan-tadilat-yaptirmak"],
  },
];

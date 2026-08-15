// Ev arızaları: fatura, rezervuar, gider kokusu, kireç ve deprem sonrası
// tesisat kontrolü. Yüksek niyetli, doğrudan hizmete bağlanan başlıklar.

export const arizaPosts = [
  {
    slug: "su-faturasi-neden-yuksek",
    title: "Su faturası neden yüksek geldi?",
    category: "Sıhhi Tesisat",
    published: "2026-08-13",
    reading: 9,
    metaTitle: "Su Faturası Neden Yüksek Geldi? | Kaçak Testi",
    metaDesc:
      "Sayaç testiyle gizli kaçak nasıl bulunur? Rezervuar, bahçe hattı, kombi dolumu ve sayaç arızası. Faturayı yükselten nedenler ve kontrol sırası.",
    keywords: [
      "su faturası yüksek",
      "su kaçağı testi",
      "su sayacı dönüyor",
      "gizli su kaçağı",
      "rezervuar su kaçırıyor",
    ],
    excerpt:
      "Musluklar kapalıyken sayaç dönüyorsa hattınızda su gidiyor demektir. Bu testi yapmak beş dakika sürüyor ve faturadaki artışın nedenini çoğu zaman tek başına ortaya koyuyor.",
    services: ["su-kacagi-tespiti", "sihhi-tesisat", "bina-tesisat-yenileme"],
    intro:
      "Alışkanlıklarınız değişmediği hâlde fatura iki katına çıktıysa, suçlu genelde tarife değil tesisattır. İyi haber şu: kaçağın olup olmadığını anlamak için ustaya gerek yok; sayacınız zaten bunu size söylüyor. Kötü haber ise gizli kaçakların çoğunun aylarca fark edilmemesi.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Evdeki tüm muslukları kapatın ve su sayacını okuyun. Yarım saat sonra tekrar okuduğunuzda değer değişmişse hattınızda su gidiyor demektir.</strong> Bu test, gizli kaçağı olan bir tesisatı gözle görülmeden ortaya çıkarır.",
      },
      {
        p: "Sayaç dönmüyor ama fatura yine de yüksekse; kaçak yok, tüketim gerçekten artmıştır. O durumda bahçe sulaması, rezervuar dolumu, kombi su takviyesi ve ortak sayaç paylaşımı sırayla incelenir.",
      },

      { h2: "Sayaç testi: adım adım" },
      {
        ol: [
          "Evdeki bütün muslukları, duşları ve bahçe vanalarını kapatın.",
          "Çamaşır ve bulaşık makinesinin çalışmadığından emin olun.",
          "Sayacın üzerindeki tüm rakamları ve varsa küçük ibreyi not edin.",
          "Otuz dakika boyunca hiç su kullanmayın.",
          "Sayacı tekrar okuyun; değer değişmişse kaçak vardır.",
          "Şüpheliyseniz süreyi iki saate uzatın; küçük kaçaklar kısa sürede belli olmaz.",
        ],
      },
      {
        p: "Birçok sayacın üzerinde, çok küçük debilerde bile dönen bir yıldız veya ibre bulunur. Bu ibre kıpırdıyorsa, ana rakam değişmese bile su gidiyor demektir; damla düzeyindeki kaçakları yakalamanın en hızlı yolu odur.",
      },

      { h2: "Kaçak varsa: daire içi mi, giriş hattı mı?" },
      {
        p: "Sayaç dönüyorsa ikinci adım kaçağın yerini daraltmak. Daire girişindeki ana vanayı kapatın ve sayacı tekrar izleyin.",
      },
      {
        table: {
          head: ["Ana vana kapalıyken", "Anlamı", "Sonraki adım"],
          rows: [
            ["Sayaç durdu", "Kaçak daire içinde", "Daire içi hatlar ve armatürler"],
            ["Sayaç dönmeye devam ediyor", "Kaçak vana ile sayaç arasında", "Giriş hattı, bahçe kolu, bina hattı"],
            ["Ana vana tam kapanmıyor", "Vana arızalı", "Vana değişimi, sonra test tekrarı"],
          ],
        },
      },
      {
        p: "Bu ayrım, aranacak alanı bir anda daraltır. Daire içindeki bir kaçak için duvar açmak gerekebilir; giriş hattındaki bir kaçak ise genelde bahçede veya bodrumda, çok daha erişilebilir bir noktadadır.",
      },

      { h2: "En sessiz suçlu: klozet rezervuarı" },
      {
        p: "Rezervuardan hazneye sızan su, doğrudan gidere aktığı için hiç ses çıkarmaz ve gözle fark edilmez. Buna rağmen sürekli akan bir rezervuar, tek başına faturayı ciddi biçimde büyütebilir.",
      },
      {
        p: "Testi basit: rezervuara birkaç damla gıda boyası veya renkli bir sıvı damlatın ve sifonu çekmeden yarım saat bekleyin. Klozetin haznesinde renk görünüyorsa klape sızdırıyor demektir.",
      },
      {
        p: "Çözüm genelde bir conta veya klape değişimidir; kısa ve ucuz bir müdahale. Ertelendiğinde ise her ay faturaya yansımaya devam eder.",
      },

      { h2: "Bahçe ve sulama hattı" },
      {
        p: "Bahçeli evlerde faturanın mevsimsel yükselmesi normaldir; ama artış beklenenin üzerindeyse hatta kaçak olabilir. Toprak altındaki bir kırık, yüzeyde iz vermeden aylarca su kaybettirir.",
      },
      {
        ul: [
          "Toprağın belirli bir noktasının sürekli ıslak kalması.",
          "O bölgedeki bitkilerin çevresine göre koyu yeşil kalması.",
          "Sulama yapılmadığı hâlde hattın basıncının düşmesi.",
          "Sezon dışında kapatılmayan bahçe vanası.",
        ],
      },
      {
        p: "Sezon sonunda bahçe kolunu ayrı bir vanayla kapatmak hem donma riskini hem bu tür sessiz kayıpları ortadan kaldırıyor.",
      },

      { h2: "Isıtma tarafından gelen tüketim" },
      {
        p: "Kombili sistemlerde tesisat basıncı düştükçe su takviyesi yapılır. Isıtma devresinde bir kaçak varsa bu takviye sürekli hâle gelir ve harcanan su faturaya yansır. Belirtisi tanıdıktır: kombi basıncı birkaç günde bir düşer ve tekrar su eklemek gerekir. Kaçak; petek vanalarında, gömme borularda veya kombi içindeki bir contada olabilir.",
      },
      {
        p: "Böyle bir durumda su faturasından önce dikkat edilmesi gereken şey ısıtma sisteminin kendisidir; sürekli taze su alan bir tesisatta kireçlenme ve korozyon hızlanır.",
      },

      { h2: "Apartmanda ortak sayaç payı" },
      {
        p: "Bazı binalarda daire sayaçlarının toplamı ile ana sayacın okuması arasındaki fark, dairelere paylaştırılır. Ortak alanda veya bina giriş hattında bir kaçak varsa, siz hiç fazla su kullanmadığınız hâlde payınız artar.",
      },
      {
        p: "Böyle bir şüphe varsa yönetimden ana sayaç ile daire sayaçları toplamının karşılaştırılmasını istemek doğru adımdır. Aradaki fark büyük ve süreklilik kazanmışsa, sorun bir dairede değil ortak hattadır.",
      },
      {
        p: "Bina hattındaki kaçaklar genelde bodrum, kolon dibi ve bahçe sulama kolunda çıkıyor. Yerinde yapılan bir kontrol, aylardır paylaştırılan farkın kaynağını çoğunlukla aynı gün buluyor.",
      },

      { h2: "Sayacın kendisi arızalı olabilir mi?" },
      {
        p: "Nadiren de olsa olur. Mekanik sayaçlar zamanla yanlış okuma yapabilir; genelde eksik ölçerler, ama arızalı bir sayaç fazla da gösterebilir.",
      },
      {
        p: "Sayaç arızasından şüpheleniyorsanız izlenecek yol bellidir: önce yukarıdaki testlerle tesisatta kaçak olmadığını kanıtlayın, sonra ilgili idareye başvurup sayacın kontrolünü talep edin.",
      },
      {
        p: "Testleri yapmadan sayacı suçlamak zaman kaybettiriyor; başvuru sonucunda sayaç sağlam çıkarsa kaçak aramaya baştan başlamak gerekiyor.",
      },

      { h2: "Gizli kaçak nasıl bulunur?" },
      {
        p: "Sayaç kaçağı doğruladı ama yerini bulamıyorsanız, duvarı rastgele kırmak yerine tespit yöntemleri kullanılır. Amaç, tek bir noktayı açıp işi bitirmek.",
      },
      {
        table: {
          head: ["Yöntem", "Neyi bulur", "Uygun olduğu yer"],
          rows: [
            ["Akustik dinleme", "Basınçlı hattaki su sesini", "Temiz su hattı, gömme boru"],
            ["Termal kamera", "Sıcak su kaçağının ısı izini", "Yerden ısıtma, sıcak su hattı"],
            ["Basınç testi", "Hangi kolun sızdırdığını", "Kol kol ayırarak daraltma"],
            ["Gaz (izleyici) yöntemi", "Çok küçük kaçakları", "Zemin altı, erişimi zor hatlar"],
            ["Nem ölçer", "Duvardaki nem yayılımını", "Görünür lekenin kaynağını bulmada"],
          ],
        },
      },
      {
        p: "Doğru yöntem, kaçağın soğuk mu sıcak hatta olduğuna ve zemin yapısına göre seçilir. Birden fazla yöntemin birlikte kullanılması, tek nokta açıp çözme oranını epeyce artırıyor.",
      },

      { h2: "Havuz, araç yıkama ve mevsimsel kullanım" },
      {
        p: "Faturadaki artış her zaman arıza demek değil. Bahçe sulamasının başladığı ilk ay, şişme havuz doldurmak, araç yıkamak ve misafir yoğunluğu tüketimi epeyce yükseltir. Bu kalemleri elemek için kendi kullanımınızı hatırlamak yeterli. Geçen yılın aynı dönemine göre benzer bir kullanım varsa ve fatura yine de yüksekse, sıra teknik nedenlere gelir.",
      },
      {
        p: "Kısa bir not tutmak da yardımcı oluyor: havuz doldurulan gün, sulamanın başladığı hafta. Ertesi yıl karşılaştırma yaparken bu notlar tahmini ortadan kaldırıyor.",
      },

      { h2: "Damlayan musluk ne kadar su harcar?" },
      {
        p: "Tek tek bakıldığında önemsiz görünen sızıntılar, ay sonunda toplanınca fark ediliyor. Saniyede bir damla ile akan bir musluk, gün boyunca kesintisiz çalıştığında litrelerle ölçülen bir kayıp yaratır.",
      },
      {
        ul: [
          "Damlayan musluk: genelde salmastra veya kartuş değişimiyle çözülür.",
          "Sızdıran duş bataryası: kartuş veya conta.",
          "Akan rezervuar: klape ve conta.",
          "Damlayan bahçe musluğu: sezon boyunca en çok göz ardı edilen kalem.",
          "Su ısıtıcısının emniyet ventilinden damlama: basınç veya ventil sorunu.",
        ],
      },
      {
        p: "Bu kalemlerin hepsi küçük onarımlar. Aynı ziyarette toplu olarak yapıldığında hem maliyet düşüyor hem faturadaki artış tek seferde duruyor.",
      },

      { h2: "Su ısıtıcısı ve emniyet ventili" },
      {
        p: "Termosifon ve boylerlerde bir emniyet ventili bulunur. Su ısındıkça genleşir ve basınç yükselir; ventil bu fazlalığı tahliye ederek sistemi korur.",
      },
      {
        p: "Ventilden ara sıra birkaç damla gelmesi normaldir. Sürekli akıyorsa iki ihtimal vardır: şebeke basıncı çok yüksektir ya da ventil yorulmuştur. İkisinde de akan su doğrudan gidere gider ve faturaya yazılır.",
      },
      {
        p: "Bu damlama genelde bir bodrumda veya dolap içinde olduğu için aylarca fark edilmez. Kontrolü kolay: ventilin tahliye ağzına bakmak yeterli.",
      },

      { h2: "Faturayı doğru okumak" },
      {
        p: "Karşılaştırma yaparken aynı dönemleri kıyaslayın: yaz faturasını kışla kıyaslamak yanıltır. Ayrıca faturadaki tüketim metreküp cinsindendir; tutar tarifeye ve kademelere göre değişir.",
      },
      {
        p: "Anlamlı gösterge, metreküp cinsinden tüketimin geçen yılın aynı dönemine göre nasıl değiştiğidir. Tutar artmış ama metreküp aynıysa neden tarifededir, tesisatta değil.",
      },
      {
        p: "Tahmini okuma yapılan dönemlerde de sıçrama görülebilir: birkaç dönem düşük tahmin edilip sonra gerçek okuma yapıldığında fark tek faturaya biner. Faturada tahmini/gerçek okuma bilgisi genelde yazılıdır.",
      },

      { h2: "Sayaç eşleşmesi doğru mu?" },
      {
        p: "Çok daireli binalarda sayaçlar aynı bölmede sıralanır ve montaj sırasında karışabilir. Sizin sayacınız komşunun hattını ölçüyorsa, kendi tüketiminizle açıklanamayan bir fatura alırsınız. Kontrolü basit: dairenizde bir musluğu açık bırakın, birinin sayaç bölmesinde hangi sayacın döndüğünü izlemesini isteyin. Dönen sayaç sizin numaranız değilse eşleşme hatalıdır.",
      },
      {
        p: "Uzun süredir devam eden bir karışıklıkta düzeltme, idare ve yönetimle birlikte yürütülür. Testin sonucunu fotoğraflı olarak kayda almak süreci hızlandırıyor.",
      },

      { h2: "Kaçak bulunduktan sonra" },
      {
        p: "Onarım bittiğinde sayaç testini tekrarlayın. Musluklar kapalıyken sayaç tamamen durmuyorsa ikinci bir kaçak daha vardır; bu, eski tesisatlarda sık karşılaşılan bir durum.",
      },
      {
        p: "Onarılan noktanın fotoğrafı ve tarihi kaydedilmeli. Aynı hatta tekrar eden kaçaklar, artık nokta onarımının değil hat yenilemesinin zamanı geldiğini gösterir.",
      },
      {
        p: "Bazı idareler, tespit edilip belgelenen gizli kaçak durumlarında fatura düzeltmesi değerlendirebiliyor. Onarım belgesini ve kaçak tespit raporunu saklamak bunun için işe yarıyor.",
      },

      { h2: "Yıllık kontrol takvimi" },
      {
        p: "Kaçakların çoğu ani değil, yavaş başlar. Yılda bir kez yapılan kısa bir kontrol, faturaya yansımadan yakalanmalarını sağlıyor.",
      },
      {
        ol: [
          "Sayaç testini yapın: musluklar kapalıyken sayaç dönüyor mu?",
          "Rezervuarlara renkli su testi uygulayın.",
          "Tüm musluk ve bataryaları damlama açısından kontrol edin.",
          "Esnek bağlantı hortumlarının yaşını ve durumunu gözden geçirin.",
          "Bahçe ve dış musluk hattını sezon sonunda kapatın.",
          "Su ısıtıcısının emniyet ventilini gözle kontrol edin.",
          "Sonucu ve tarihi bir yere not edin.",
        ],
      },
      {
        p: "Bu liste on beş dakika sürüyor. Yılda bir tekrarlandığında, açıklanamayan fatura artışlarının neredeyse tamamını daha başlarken görünür hâle getiriyor.",
      },

      { h2: "Malatya'da sık gördüğümüz üç neden" },
      {
        p: "Bölgede kaçak çağrılarının önemli bölümü şu üç başlıktan çıkıyor: kış donunun zayıflattığı bir ek yerinin baharda sızdırmaya başlaması, kireçlenmiş rezervuar klapesi ve sezon sonunda kapatılmayan bahçe hattı.",
      },
      {
        p: "Üçü de küçük müdahalelerle çözülüyor ama üçü de geç fark ediliyor. Yılda bir kez yapılan sayaç testi, bu üç kalemi de erken yakalıyor.",
      },
      {
        p: "Suyun sert olduğu bölgelerde armatür ve klape contalarının ömrü kısalır. Kireç birikimi sızdırmazlık yüzeylerini bozduğu için, aynı parça birkaç yılda bir yenilenmek zorunda kalabiliyor.",
      },
    ],
    faqs: [
      {
        q: "Su kaçağı olup olmadığını nasıl anlarım?",
        a: "Tüm muslukları kapatın, makineleri durdurun ve sayacı okuyun. Yarım saat–iki saat sonra değer değişmişse kaçak vardır. Birçok sayaçta çok küçük debilerde dönen bir ibre bulunur; ana rakam sabitken o ibre kıpırdıyorsa da su gidiyor demektir.",
      },
      {
        q: "Sayaç dönüyor ama hiçbir yerde ıslaklık yok. Nasıl olur?",
        a: "Gizli kaçakların çoğu gömme borularda veya zemin altındadır; su doğrudan toprağa ya da gidere sızdığı için yüzeyde iz bırakmaz. Bu durumda akustik dinleme, termal kamera ve basınç testi gibi yöntemlerle yer daraltılır ve tek nokta açılarak onarılır.",
      },
      {
        q: "Rezervuar kaçağını nasıl test ederim?",
        a: "Rezervuara birkaç damla gıda boyası damlatın ve sifonu çekmeden yarım saat bekleyin. Klozet haznesinde renk görünüyorsa klape sızdırıyordur. Bu kaçak ses çıkarmadığı için yıllarca fark edilmeyebilir; onarımı ise genelde tek bir conta veya klape değişimidir.",
      },
      {
        q: "Kombiye sık su eklemek faturayı etkiler mi?",
        a: "Evet, ısıtma devresine yapılan her takviye şebekeden su çeker. Basınç birkaç günde bir düşüyorsa devrede kaçak var demektir. Bu, faturadan daha önemli bir sorundur: sürekli taze su alan tesisatta kireçlenme ve korozyon hızlanır, radyatör ve kombi ömrü kısalır.",
      },
      {
        q: "Ana vanayı kapattığımda sayaç durmuyorsa ne anlama gelir?",
        a: "Kaçak, ana vana ile sayaç arasındaki bölümdedir; yani daire içinde değil, giriş hattında veya bahçe kolundadır. İyi haber, bu bölüm genelde bodrumda ya da bahçede olduğu için duvar açmadan erişilebilir. Ana vananın tam kapanmadığı ihtimali de kontrol edilmelidir.",
      },
      {
        q: "Apartmanda ortak sayaç farkı neden büyür?",
        a: "Bina giriş hattında, ortak alanda veya bahçe sulama kolunda bir kaçak varsa ana sayaç ile daire sayaçlarının toplamı arasındaki fark açılır ve dairelere paylaştırılır. Farkın sürekli büyümesi, sorunun tek bir dairede değil ortak hatta olduğunu gösterir.",
      },
      {
        q: "Sayacım arızalı olabilir mi?",
        a: "Nadiren olur; mekanik sayaçlar zamanla yanlış okuyabilir. Ancak önce tesisatta kaçak olmadığını testlerle kanıtlamak gerekir. Bunlar temiz çıkarsa ilgili idareye başvurup sayaç kontrolü talep edilebilir. Testler yapılmadan yapılan başvurular sıklıkla sonuçsuz kalıyor.",
      },
      {
        q: "Kaçak onarımından sonra ne yapmalıyım?",
        a: "Sayaç testini tekrarlayın. Musluklar kapalıyken sayaç hâlâ dönüyorsa ikinci bir kaçak vardır; eski tesisatlarda bu sık görülür. Onarımın tarihini ve fotoğrafını saklayın: aynı hatta tekrarlayan kaçaklar, nokta onarımı yerine hat yenileme zamanının geldiğini gösterir.",
      },
    ],
    related: ["su-kacagi-erken-belirtileri", "rezervuar-su-akitiyor", "ev-su-tesisati-yenileme"],
  },

  {
    slug: "rezervuar-su-akitiyor",
    title: "Klozet rezervuarı sürekli su akıtıyor: neden ve çözüm",
    category: "Sıhhi Tesisat",
    published: "2026-07-21",
    reading: 9,
    metaTitle: "Rezervuar Su Akıtıyor | Klape ve Şamandıra Ayarı",
    metaDesc:
      "Rezervuar neden sürekli akar? Klape kireçlenmesi, şamandıra ayarı, dolum valfi ve gömme rezervuarda onarım. Adım adım kontrol ve parça değişimi.",
    keywords: [
      "rezervuar su akıtıyor",
      "klozet sifon kaçırıyor",
      "rezervuar klapesi",
      "şamandıra ayarı",
      "gömme rezervuar tamiri",
    ],
    excerpt:
      "Ses çıkarmadan akan bir rezervuar, evdeki en pahalı sessizliktir. Neyse ki nedeni tek bir parçada ve değişimi yarım saat sürüyor.",
    services: ["vitrifiye-armatur-montaji", "sihhi-tesisat", "su-kacagi-tespiti"],
    intro:
      "Rezervuardan klozete sürekli ince bir su akıyorsa, o su doğrudan gidere gidiyor demektir. Kimse duymaz, kimse görmez; sadece fatura büyür. Bu yazıda hangi parçanın ne yaptığını, arızayı nasıl ayırt edeceğinizi ve neyi kendiniz değiştirebileceğinizi anlatıyoruz.",
    body: [
      {
        p: "Sürekli akan bir rezervuarda sorun neredeyse her zaman iki parçadan birindedir: hazneye açılan tahliye klapesi (sızdırıyor) veya suyu dolduran dolum valfi (kapanmıyor). Ayrımı yapmak kolay: su, taşma borusundan mı akıyor yoksa klapenin altından mı sızıyor? Taşma borusundan akıyorsa dolum valfi veya seviye ayarı, klapenin altından sızıyorsa klape suçludur.",
      },

      { h2: "Rezervuar nasıl çalışır?" },
      {
        p: "İçeride birbirinden bağımsız iki mekanizma vardır. Dolum valfi şebekeden su alır ve şamandıra belirlenen seviyeye ulaşınca suyu keser. Tahliye klapesi ise sifon basıldığında açılır, suyu hazneye boşaltır ve sonra kendi ağırlığıyla oturarak kapanır.",
      },
      {
        p: "Bir de emniyet elemanı vardır: taşma borusu. Dolum valfi kapanmazsa su, rezervuarın dışına taşmak yerine bu borudan klozete akar. Yani sürekli akan su bazen arızanın kendisi değil, arızanın kontrollü tahliyesidir.",
      },
      {
        p: "Bu üç parçanın hangisinin sorun çıkardığını anlamak, onarımın tamamını belirler. Kapağı açıp otuz saniye izlemek genelde yeterli oluyor.",
      },

      { h2: "Hangi parça arızalı? Ayırt etme" },
      {
        table: {
          head: ["Belirti", "Muhtemel neden", "Yapılacak"],
          rows: [
            ["Klozet haznesine ince, sürekli su iniyor", "Klape veya contası sızdırıyor", "Klape/conta temizliği ya da değişimi"],
            ["Taşma borusundan su akıyor", "Dolum valfi kapanmıyor veya seviye yüksek", "Seviye ayarı, valf değişimi"],
            ["Dolum bitmiyor, ıslık sesi sürüyor", "Dolum valfi arızalı", "Valf değişimi"],
            ["Sifon sonrası geç kapanıyor", "Klape ağırlığı/ayarı bozulmuş", "Klape ayarı"],
            ["Rezervuar dolmuyor veya çok yavaş doluyor", "Filtre tıkalı, ara musluk kısık", "Filtre temizliği, vana kontrolü"],
            ["Dışarıya, yere doğru sızıntı", "Rezervuar–klozet contası", "Conta değişimi"],
          ],
        },
      },
      {
        p: "Renkli su testi bu tabloyu doğrulamanın en hızlı yolu: rezervuara birkaç damla boya damlatın, yarım saat bekleyin. Hazneye renk iniyorsa klape sızdırıyordur.",
      },

      { h2: "Klape neden sızdırır?" },
      {
        p: "Klapenin sızdırmazlığı, lastik yüzeyin oturduğu yatağa tam temas etmesine bağlıdır. Bu yüzeyde biriken kireç, ince bir kanal açar ve su o kanaldan geçmeye başlar.",
      },
      {
        p: "İkinci neden lastiğin sertleşmesidir. Zamanla esnekliğini kaybeden conta yatağa uyum sağlayamaz; gözle bakıldığında sağlam görünse de sızdırır.",
      },
      {
        p: "Üçüncüsü mekaniktir: zincir veya tetik kolu kısa kaldığında klape tam oturamaz. Bu, montaj sonrası en sık karşılaşılan ve en kolay düzeltilen ayardır.",
      },

      { h2: "Şamandıra ve su seviyesi" },
      {
        p: "Rezervuardaki su seviyesi, taşma borusunun ağzından birkaç santim aşağıda olmalıdır. Seviye çok yükseğe ayarlanmışsa su sürekli taşma borusundan akar ve arıza sanılır.",
      },
      {
        ul: [
          "Şamandıra kollu tipse kol hafifçe aşağı bükülerek seviye düşürülür.",
          "Dikey şamandıralı valflerde ayar klipsi veya vidasıyla seviye belirlenir.",
          "Ayar sonrası sifon çekilip yeniden dolum izlenir.",
          "Seviye düşürüldüğünde sifonun yeterli gücü koruduğu kontrol edilmelidir.",
        ],
      },
      {
        p: "Seviyeyi gereğinden fazla düşürmek su tasarrufu gibi görünse de sifonun temizleme gücünü azaltır ve iki kez çekmek gerekir. Sonuçta daha çok su harcanır.",
      },

      { h2: "Dolum valfi arızası" },
      {
        p: "Dolum valfi, içindeki küçük bir membran veya piston ile suyu keser. Şebekeden gelen kum ve kireç parçacıkları bu yüzeye oturduğunda valf tam kapanmaz ve ince bir akış devam eder. Çoğu valfte girişte küçük bir süzgeç bulunur. Ara musluk kapatılıp valf sökülerek bu süzgecin temizlenmesi, arızayı parça değiştirmeden çözebiliyor.",
      },
      {
        p: "Temizlik sonrası akış devam ediyorsa valf değiştirilir. Değişim sırasında ara musluğun ve bağlantı hortumunun da yenilenmesi, birkaç yıl sonra aynı iş için tekrar gelinmesini önlüyor.",
      },

      { h2: "Kendiniz yapabileceğiniz onarım" },
      {
        ol: [
          "Rezervuarın ara musluğunu kapatın.",
          "Sifonu çekip rezervuarı boşaltın.",
          "Kapağı çıkarın; gömme rezervuarda servis kapağını sökün.",
          "Klapeyi çıkarıp lastik yüzeyini ve oturduğu yatağı temizleyin.",
          "Yüzeyde kireç varsa yumuşak bir bezle ovalayın; sert alet kullanmayın.",
          "Parçayı yerine takıp ara musluğu açın ve dolumu izleyin.",
          "Sızıntı sürüyorsa klape veya dolum valfini komple değiştirin.",
          "İşlem sonrası renkli su testini tekrarlayın.",
        ],
      },
      {
        p: "Yedek parça alırken markanın ve modelin fotoğrafını yanınızda bulundurun. Rezervuar iç takımları markadan markaya farklıdır; benzeyen parça çoğu zaman tam oturmuyor.",
      },

      { h2: "Gömme rezervuarda durum farklı" },
      {
        p: "Duvar içine alınan gömme rezervuarlarda tüm bakım, kumanda paneli çıkarılarak yapılır. Panel arkasındaki servis açıklığı, iç takıma erişim için özellikle bırakılmıştır.",
      },
      {
        p: "Bu sistemlerde klape ve dolum valfi çıkarılabilir tasarlanır; duvarı kırmak gerekmez. Buna karşılık parçalar markaya özgüdür, o yüzden montaj sırasında marka ve model bilgisinin kaydedilmesi büyük kolaylık sağlar.",
      },
      {
        p: "Yeni banyo yaparken bu noktayı özellikle kontrol ediyoruz: panelin sökülebilir olması, ilerideki her müdahaleyi yarım saatlik bir işe indiriyor.",
      },

      { h2: "Rezervuar dolmuyorsa" },
      {
        p: "Ters yöndeki şikâyet de sık gelir: rezervuar çok yavaş doluyor ya da hiç dolmuyor. Böyle olunca sorun genelde giriş tarafındadır.",
      },
      {
        p: "Sırasıyla bakılacaklar: ara musluk tam açık mı, bağlantı hortumu kıvrılmış mı, dolum valfinin girişindeki süzgeç tıkalı mı, dairenin genel su basıncı düşmüş mü? İlk üçü birkaç dakikada kontrol edilir.",
      },
      {
        p: "Süzgeç tıkanması, tesisat tadilatından sonraki ilk haftalarda çok yaygın: borularda kalan talaş ve tortu ilk kullanımda buraya oturuyor. Sökülüp yıkanması genelde yeterli oluyor.",
      },

      { h2: "Basıncın etkisi" },
      {
        p: "Şebeke basıncı yüksek olan binalarda dolum valfleri daha çok zorlanır ve daha erken sızdırır. Aynı şekilde yüksek basınç, klapenin kapanma anında titremesine ve ses yapmasına yol açabilir. Daire girişinde basınç düşürücü vana varsa ayarı gözden geçirilmeli. Basıncı makul aralığa çekmek, sadece rezervuarı değil tüm armatürlerin ömrünü uzatır.",
      },
      {
        p: "Basıncın çok düşük olduğu durumlarda ise rezervuar yavaş dolar ve dolum valfi uzun süre açık kalır. Bu da parçanın yorulmasını hızlandırır.",
      },

      { h2: "Çift kademeli sifon işe yarıyor mu?" },
      {
        p: "Çift kademeli rezervuarlarda küçük tuşla az, büyük tuşla tam hacim boşaltılır. Doğru kullanıldığında gerçek bir tasarruf sağlar; ama mekanizması klasik tipe göre biraz daha karmaşıktır.",
      },
      {
        p: "Bu sistemlerde en sık görülen arıza, iki kademeyi ayıran mekanizmanın ayarının kayması ve klapenin geç kapanmasıdır. Sonuç, her sifon çekilişinde beklenenden fazla su gitmesidir.",
      },
      {
        p: "Ayar genelde iç takım üzerindeki bir klips veya vidayla yapılır. Kullanıcıya küçük tuşun yeterli olduğu durumların gösterilmesi de tasarrufun görünür kısmını oluşturuyor.",
      },

      { h2: "Ses ve su darbesi" },
      {
        p: "Rezervuar dolarken duyulan uğultu ve dolum bitince gelen tok bir vuruş, yüksek basınç ve hızlı kapanan valfin işaretidir. Bu darbe zamanla bağlantıları yorar.",
      },
      {
        p: "Çözüm iki yönlü: dolum valfini yavaş kapanan tipe çevirmek veya daire girişinde basıncı makul aralığa çekmek. İkincisi tüm tesisatı birden rahatlattığı için daha kalıcı sonuç veriyor.",
      },
      {
        p: "Sessizliği önemseyen yapılarda gömme rezervuarların içine ses yalıtım bandı uygulanması da tercih ediliyor. Montaj aşamasında yapılırsa ek maliyeti neredeyse yok.",
      },

      { h2: "Onarım mı, komple değişim mi?" },
      {
        table: {
          head: ["Durum", "Öneri"],
          rows: [
            ["Tek parça sızdırıyor, sistem yeni", "Parça değişimi yeterli"],
            ["İç takım çok eski, parça bulunamıyor", "İç takım komple değişimi"],
            ["Rezervuar gövdesinde çatlak", "Rezervuar değişimi"],
            ["Sık tekrarlayan arıza, kireçli su", "İç takım yenileme + su sertliği değerlendirmesi"],
            ["Klozet yenilenecek zaten", "Takım hâlinde değişim daha ekonomik"],
          ],
        },
      },
      {
        p: "Kararı belirleyen genelde parça bulunabilirliği oluyor. Üretimi bitmiş bir iç takım için tek tek conta aramak yerine, uyumlu bir set takmak hem hızlı hem kalıcı çözüm sağlıyor.",
      },

      { h2: "Montajda belirleyici detaylar" },
      {
        p: "Yeni bir klozet veya gömme rezervuar takılırken alınan birkaç karar, sonraki on yılın bakım kolaylığını belirliyor.",
      },
      {
        ul: [
          "Ara musluk erişilebilir bir noktaya konmalı; rezervuarın arkasında sıkışmamalı.",
          "Gömme sistemlerde servis kapağı seramikle kapatılmamalı.",
          "Marka ve model bilgisi bir yere not edilmeli; iç takım parçaları markaya özgüdür.",
          "Bağlantı hortumu kaliteli seçilmeli; en sık patlayan parça odur.",
          "Rezervuar–klozet contası tek kullanımlıktır, ikinci montajda yenilenmeli.",
        ],
      },
      {
        p: "İkinci madde en pahalıya mal olanı: kapatılmış bir servis kapağı yüzünden basit bir conta değişimi, seramik sökümüyle birlikte günlük bir işe dönüşüyor.",
      },

      { h2: "Su tasarrufu tarafı" },
      {
        p: "Rezervuar, evdeki en büyük su tüketicilerinden biridir. Sızdıran bir klapenin onarımı, tek başına farkedilir bir tasarruf sağlar. Bunun ötesinde çift kademeli sistemler, doğru ayarlanmış su seviyesi ve zamanında değiştirilen contalar tüketimi düşürür. Hiçbiri konfordan ödün gerektirmiyor.",
      },
      {
        p: "Yapılmaması gereken tek şey, sifon gücünü zayıflatacak kadar seviyeyi düşürmek: iki kez çekmek gerektiğinde tasarruf tersine dönüyor.",
      },

      { h2: "Aynı ziyarette bakılacak diğer noktalar" },
      {
        p: "Rezervuar onarımı için gelinen bir evde, benzer sessiz kayıpların hepsine bakmak mantıklı. Çoğu birkaç dakikalık kontrol:",
      },
      {
        ul: [
          "Musluk ve duş bataryalarında damlama.",
          "Ara muslukların sıkışıp sıkışmadığı.",
          "Esnek bağlantı hortumlarının yaşı ve durumu.",
          "Sifon ve gider bağlantılarında sızıntı.",
          "Çamaşır makinesi musluğunun sızdırması.",
        ],
      },
      {
        p: "Esnek hortumlar özellikle dikkat ister: yıprandığında aniden patlar ve su baskınına yol açar. Görünür paslanma, şişme veya çatlak varsa beklemeden değiştirilmeli.",
      },

      { h2: "Ne zaman usta çağırmalı?" },
      {
        p: "Klape ve dolum valfi değişimi çoğu evde kendi yapılabilecek işlerdendir. Aşağıdaki durumlarda ise yerinde bakılması daha doğru olur:",
      },
      {
        ul: [
          "Gömme rezervuarda servis kapağına erişilemiyorsa.",
          "Ara musluk sıkışmış veya kapatıldığında sızdırıyorsa.",
          "Rezervuar gövdesinde çatlak ya da yerinde oynama varsa.",
          "Parça değişimine rağmen akış devam ediyorsa.",
          "Klozet tabanından yere doğru sızıntı varsa.",
        ],
      },
      {
        p: "Taban contası listenin en sinsi maddesi. Oradan sızan su seramiğin altına girer ve alt kata geçebilir. Görünen su miktarı az olsa bile ertelenmemesi gereken bir durum.",
      },

      { h2: "Kireçli suda ömür nasıl uzar?" },
      {
        p: "Malatya'nın birçok bölgesinde su serttir ve rezervuar iç takımları bundan doğrudan etkilenir. Kireç, sızdırmazlık yüzeylerinde biriktiği için klape ömrü kısalır.",
      },
      {
        p: "Yılda bir kez kapağı açıp klape yüzeyini temizlemek, çoğu durumda parça değişimini yıllarca erteliyor. Bu, beş dakikalık bir bakım.",
      },
      {
        p: "Suyun sertliği çok yüksekse merkezi bir yumuşatma çözümü değerlendirilebilir; bu karar yalnızca rezervuar için değil, kombi ve beyaz eşya ömrü için de anlamlı hâle geliyor.",
      },
    ],
    faqs: [
      {
        q: "Rezervuarın aktığını nasıl anlarım?",
        a: "Rezervuara birkaç damla gıda boyası damlatın ve sifonu çekmeden yarım saat bekleyin. Klozet haznesinde renk görünüyorsa klape sızdırıyordur. Hazne yüzeyinde sürekli ince bir su izi olması ya da klozetin ara ara kendi kendine dolma sesi çıkarması da tipik belirtilerdir.",
      },
      {
        q: "Taşma borusundan su akıyorsa sorun nedir?",
        a: "Bu, dolum valfinin tam kapanmadığını veya su seviyesinin çok yüksek ayarlandığını gösterir. Önce şamandıra ayarıyla seviye taşma borusunun birkaç santim altına indirilir. Akış sürüyorsa dolum valfinin süzgeci temizlenir, sonuç alınamazsa valf değiştirilir.",
      },
      {
        q: "Klapeyi kendim değiştirebilir miyim?",
        a: "Çoğu klasik rezervuarda evet: ara musluk kapatılır, rezervuar boşaltılır, klape çıkarılıp yenisi takılır. Zorluk parça uyumundadır; iç takımlar markaya göre farklıdır, bu yüzden mevcut parçanın fotoğrafını yanınızda bulundurun. Gömme sistemlerde panel sökümü gerekir.",
      },
      {
        q: "Gömme rezervuar tamiri için duvar kırılır mı?",
        a: "Hayır. Kumanda paneli çıkarıldığında iç takıma erişim için bırakılmış servis açıklığı vardır; klape ve dolum valfi oradan değiştirilir. Duvar kırma ihtiyacı yalnızca servis kapağı seramikle kapatılmışsa doğar, ki bu bir montaj hatasıdır.",
      },
      {
        q: "Rezervuar akıntısı faturayı ne kadar etkiler?",
        a: "Beklenenden çok daha fazla. Akış ince olsa bile kesintisiz sürdüğü için günlük kayıp yüzlerce litreye ulaşabilir. Ses çıkarmadığı ve gözle görülmediği için aylarca fark edilmez; su faturasındaki açıklanamayan artışların en yaygın nedenlerinden biridir.",
      },
      {
        q: "Su seviyesini düşürmek tasarruf sağlar mı?",
        a: "Bir noktaya kadar evet, ama gereğinden fazla düşürmek ters teper: sifon yeterince temizlemez ve iki kez çekmek gerekir, sonuçta daha çok su harcanır. Doğru seviye, taşma borusunun ağzından birkaç santim aşağıdır ve sifon gücü test edilerek belirlenir.",
      },
      {
        q: "Sık sık aynı arıza tekrar ediyor, neden?",
        a: "En yaygın sebep suyun sert olmasıdır; kireç sızdırmazlık yüzeylerinde birikerek klape ömrünü kısaltır. İkinci sebep yüksek şebeke basıncıdır. Yıllık basit bir temizlik ve gerekiyorsa basınç düşürücü vana ayarı, tekrar sıklığını epeyce azaltır.",
      },
      {
        q: "İç takım değişiminde marka uyumu şart mı?",
        a: "Sifon gövdesi ve klape genelde markaya özgü ölçüdedir; tutmayan bir takım klozet deliğine oturmaz ya da oturuyormuş gibi görünüp sızdırır. Gömme rezervuarda kural daha katıdır, çünkü kapak boşluğu ve buton mili aynı üreticinin ölçüsüne göre planlanmıştır. Markası okunmayan eski rezervuarlarda gövdeyi komple değiştirmek daha az uğraştırır.",
      },
      {
        q: "Onarım mı, iç takım değişimi mi daha mantıklı?",
        a: "Sistem yeni ve tek parça sızdırıyorsa parça değişimi yeterlidir. İç takım eskiyse ve parçası bulunamıyorsa uyumlu bir set takmak hem daha hızlı hem kalıcıdır. Gövdede çatlak varsa rezervuarın kendisi değişmelidir; onarım kalıcı olmaz.",
      },
    ],
    related: ["su-faturasi-neden-yuksek", "su-kacagi-erken-belirtileri", "kirecli-su-ne-yapmali"],
  },

  {
    slug: "gider-kokusu-neden-gelir",
    title: "Banyo ve mutfak giderinden koku neden gelir?",
    category: "Sıhhi Tesisat",
    published: "2026-07-22",
    reading: 9,
    metaTitle: "Giderden Koku Geliyor | Nedenleri ve Kalıcı Çözüm",
    metaDesc:
      "Kuruyan sifon, tıkalı havalandırma, yağ birikimi ve yanlış bağlantı. Banyo ve mutfak giderindeki kanalizasyon kokusunun nedenleri ve çözümü.",
    keywords: [
      "giderden koku geliyor",
      "kanalizasyon kokusu",
      "sifon kurudu",
      "banyo kokusu",
      "gider havalandırması",
    ],
    excerpt:
      "Kanalizasyon kokusu bir temizlik sorunu değil, bir tesisat sorunudur. Kokuyu tutan su kilidi bir yerde delinmiştir; iş, o yeri bulmakta.",
    services: ["tikali-gider-acma", "sihhi-tesisat", "bina-tesisat-yenileme"],
    intro:
      "Banyoyu ne kadar temizlerseniz temizleyin geçmeyen bir koku varsa, kaynağı yüzeyde değil. Kanalizasyon ile eviniz arasında suyla oluşan görünmez bir bariyer vardır; koku geliyorsa o bariyer bir noktada kalkmıştır. Bu yazıda nerede kalktığını nasıl bulacağınızı anlatıyoruz.",
    body: [
      { h2: "Dört olası kaynak" },
      {
        p: "Kanalizasyon kokusunun dört ana nedeni vardır: kuruyan sifon, sifonsuz veya yanlış bağlanmış gider, tıkalı gider havalandırması ve boru içinde biriken organik tabaka.",
      },
      {
        p: "En sık karşılaşılan ve en kolay çözüleni birincisidir: az kullanılan bir giderin sifonundaki su buharlaşır ve koku serbestçe içeri girer. Çözümü bir bardak su dökmektir.",
      },

      { h2: "Su kilidi nasıl çalışır?" },
      {
        p: "Her giderin altında U veya S biçiminde bir kıvrım bulunur. Bu kıvrımda sürekli bir miktar su kalır ve kanalizasyon gazının yukarı çıkmasını engeller. Buna su kilidi denir. Sistem basittir ama kırılgandır: kıvrımdaki su herhangi bir nedenle boşalırsa bariyer ortadan kalkar. Su buharlaşabilir, emilebilir veya basınç farkıyla dışarı itilebilir.",
      },
      {
        p: "O yüzden koku sorununda ilk soru hep aynı: hangi giderin su kilidi boşalmış? Cevabı bulmak, çözümün yarısını hallediyor.",
      },

      { h2: "1. Kuruyan sifon" },
      {
        p: "Az kullanılan bir yer süzgeci, misafir banyosu veya bodrum gideri haftalarca kullanılmadığında sifondaki su buharlaşır. Yaz aylarında ve kaloriferli ortamlarda bu süreç hızlanır.",
      },
      {
        ul: [
          "Kullanılmayan tüm giderlere ayda bir bardak su dökün.",
          "Uzun süre boş kalacak evlerde giderlere bir miktar sıvı yağ ekleyin; yağ buharlaşmayı yavaşlatır.",
          "Tatil dönüşünde ilk iş tüm giderleri akıtmaktır.",
          "Yer süzgeci kokusuz (kuru sifonlu) tipe çevrilebilir.",
        ],
      },
      {
        p: "Bu kadar basit bir nedenin bu kadar sık karşımıza çıkması şaşırtıcı olmuyor: koku geldiğinde akla ilk gelen şey tıkanıklık oluyor, oysa sorun tam tersidir. Hiç kullanılmayan bir gider.",
      },

      { h2: "2. Sifonu olmayan veya yanlış bağlanmış gider" },
      {
        p: "Bazı montajlarda çamaşır makinesi veya bulaşık makinesi tahliye hortumu doğrudan gider borusuna sokulur. Araya sifon konmadığında koku için açık bir yol kalır.",
      },
      {
        p: "Aynı hata duş teknesi ve yer süzgeci montajlarında da görülür. Görünürde her şey çalışır, su akar; ama kokuyu tutan bir kıvrım yoktur.",
      },
      {
        p: "Çözüm, hortumun sifonlu bir bağlantı ağzına takılmasıdır. Küçük bir parça, kalıcı bir sorunu tamamen bitiriyor.",
      },

      { h2: "3. Tıkalı gider havalandırması" },
      {
        p: "Pis su tesisatının çatıya çıkan bir havalandırma borusu vardır. Bir yerde su boşaldığında oluşan basınç farkını bu boru dengeler. Tıkandığında ise akan su, komşu giderlerin sifonundaki suyu emerek dışarı çeker.",
      },
      {
        p: "Belirtisi tipiktir: bir gider kullanıldığında başka bir giderden \"lok lok\" sesi gelir ve kısa süre sonra o giderden koku çıkar. Sifon boşaldığı için bariyer kalkmıştır.",
      },
      {
        p: "Çatıdaki havalandırma ağzı kuş yuvası, yaprak veya kar nedeniyle kapanabilir. Bina içinde ise tadilat sırasında kesilip kapatılmış olabilir; sık karşılaştığımız bir uygulama hatası.",
      },

      { h2: "4. Boru içindeki organik tabaka" },
      {
        p: "Mutfak giderinde yağ, banyo giderinde saç ve sabun kalıntısı boru cidarında yapışkan bir tabaka oluşturur. Bu tabaka zamanla kokar ve tıkanmanın da ilk aşamasıdır. Bu durumda koku sifon kurumasından farklıdır: kanalizasyon kokusundan çok, ekşimiş ve yağlı bir kokudur, gidere yaklaştıkça ağırlaşır.",
      },
      {
        p: "Çözüm mekanik temizliktir. Sifonun sökülüp elle temizlenmesi ekseriyetle yeterli olur; hat boyunca birikim varsa spiral veya basınçlı su ile temizlik gerekir.",
      },

      { h2: "Koku türünü tanımak" },
      {
        table: {
          head: ["Koku", "Muhtemel kaynak", "İlk kontrol"],
          rows: [
            ["Keskin kanalizasyon kokusu", "Boşalmış sifon veya sifonsuz bağlantı", "Giderlere su dökme testi"],
            ["Ekşi, yağlı koku", "Boru içi organik birikim", "Sifon söküp temizleme"],
            ["Küf, rutubet kokusu", "Sızıntı veya havalandırma yetersizliği", "Nem kontrolü, aspiratör"],
            ["Ara ara gelen, rüzgârlı havada artan", "Havalandırma borusu sorunu", "Çatı ağzı kontrolü"],
            ["Sadece makine çalışınca", "Makine tahliye bağlantısı", "Hortum ve sifon kontrolü"],
            ["Duş sırasında artan", "Yer süzgeci veya duş teknesi sifonu", "Süzgeç sökümü ve temizlik"],
          ],
        },
      },
      {
        p: "Kokunun ne zaman geldiği de bilgi verir. Sürekli varsa açık bir yol vardır; sadece belirli anlarda geliyorsa basınç kaynaklı bir emme söz konusudur.",
      },

      { h2: "Tespit yöntemleri" },
      {
        p: "Kaynağı bulamadığınız durumlarda birkaç pratik yöntem var. En basiti sırayla eleme: her giderin üzerini geçici olarak kapatıp kokunun devam edip etmediğine bakmak.",
      },
      {
        ol: [
          "Tüm giderlere bol su dökün, sifonları doldurun.",
          "Koku bir gün içinde geçtiyse neden kuruyan sifondur.",
          "Geçmediyse giderleri tek tek geçici olarak kapatın.",
          "Koku bir gideri kapatınca kesiliyorsa kaynak bulunmuştur.",
          "Hiçbiri sonuç vermezse havalandırma hattı ve gizli bağlantılar incelenir.",
          "Gerekirse duman testi veya kamera ile hat görüntülenir.",
        ],
      },
      {
        p: "Kamera ile görüntüleme, özellikle eski binalarda kırık boru ve ayrılmış ek yerlerini bulmak için etkili. Duvar açmadan sorunun yerini gösterdiği için gereksiz kırımı önlüyor.",
      },

      { h2: "Yeni yapılarda sık görülen hata" },
      {
        p: "Yeni binalarda kokuyu en çok yaratan şey, kullanılmayan giderlerin hiç su görmemesi. Daire teslim edildikten aylar sonra taşınıldığında, tüm sifonlar çoktan kurumuş oluyor.",
      },
      {
        p: "İkinci sık hata, tesisat testleri için konulan tapa ve tıkaçların sökülmemesi ya da tam tersi, geçici bırakılan bir bağlantının kalıcı hâle gelmesi.",
      },
      {
        p: "Taşınmadan önce tüm giderlere bol su dökmek ve her noktayı tek tek denemek, bu iki durumu da ilk gün ortaya çıkarıyor.",
      },

      { h2: "Kimyasal dökmek çözer mi?" },
      {
        p: "Kısa vadede kokuyu bastırabilir ama nedenini ortadan kaldırmaz. Kuruyan bir sifona veya tıkalı bir havalandırmaya kimyasalın hiçbir faydası olmaz.",
      },
      {
        p: "Ayrıca sık kullanılan güçlü kimyasallar, contaları ve bazı boru malzemelerini yıpratır. Tekrarlayan kullanım, birkaç yıl sonra sızdıran bir ek olarak geri dönebiliyor.",
      },
      {
        p: "Organik birikim varsa mekanik temizlik hem daha etkili hem daha güvenlidir. Kimyasal, en fazla bakım aralarında destek olarak düşünülmeli.",
      },

      { h2: "Duş teknesi ve gizli sifonlar" },
      {
        p: "Duş tekneleri ve küvetler, altlarına yerleştirilen gizli sifonlarla bağlanır. Bu sifonlar görünmediği için temizlik listesine hiç girmez; oysa saç ve sabun kalıntısının en çok biriktiği yer orasıdır. Çoğu modelde süzgeç kapağı çıkarıldığında sifonun iç kısmına erişilebilir. Erişilemeyen tasarımlarda ise temizlik için tekne altındaki servis kapağı gerekir; montaj sırasında bu kapağın bırakılmış olması önemlidir.",
      },
      {
        p: "Küvet ve duş teknesi montajlarında en sık gördüğümüz eksik bu: erişim bırakılmadığı için, basit bir tıkanıklık seramik sökümü gerektiren bir işe dönüşüyor.",
      },

      { h2: "Yer süzgeci seçimi" },
      {
        p: "Kokusuz yer süzgeçleri, su kilidine ek olarak mekanik bir kapak veya membran içerir. Sifondaki su buharlaşsa bile bu kapak kapalı kaldığı için koku geçmez.",
      },
      {
        p: "Az kullanılan banyolarda ve bodrum katlarında bu tip süzgeçler gözle görülür fark yaratıyor. Değişimi basittir; çoğu durumda mevcut süzgecin yerine takılabiliyor.",
      },
      {
        p: "Süzgeç seçerken temizlik kolaylığına da bakmak gerekir. Sökülüp temizlenemeyen bir süzgeç, birkaç ay içinde kendi başına koku kaynağına dönüşüyor.",
      },

      { h2: "Bodrum ve zemin katta durum" },
      {
        p: "Kanalizasyon gazı yukarı doğru hareket ettiği için bodrum ve zemin katlar kokuyu ilk hisseden yerlerdir. Bu katlarda az kullanılan bir yer süzgeci varsa sorun neredeyse kesindir.",
      },
      {
        p: "Ayrıca bu katlarda geri tepme riski de vardır: ana hat tıkandığında pis su, en alçak noktadan yani bodrum süzgecinden dışarı çıkar. Koku bunun ilk habercisi olabilir.",
      },
      {
        p: "Riskin yüksek olduğu yapılarda geri tepme (çekvalf) klapesi kullanılır. Bu eleman ana hattan gelen ters akışı keser; bodrum katı olan binalarda düşünülmesi gereken bir önlem.",
      },

      { h2: "Apartmanda ortak hat sorunu" },
      {
        p: "Koku birden fazla dairede aynı anda başladıysa neden daire içinde değildir. Ortak kolonda birikim, kırık ya da havalandırma tıkanıklığı söz konusudur. Öyle bir durumda tek tek dairelerde yapılan temizlikler sonuç vermez; kolon hattının kamerayla görüntülenmesi ve gerekiyorsa basınçlı su ile temizlenmesi gerekir.",
      },
      {
        p: "Maliyeti dairelere paylaştırıldığında küçük kalan bir iş, tek tek yapılan başarısız denemelerin toplamından çok daha ucuza geliyor.",
      },

      { h2: "Tadilat sırasında yapılacaklar" },
      {
        ul: [
          "Her gidere sifon konulduğundan emin olun; makine bağlantıları dâhil.",
          "Havalandırma hattını kapatmayın, kesmeyin.",
          "Boru eğimlerini kurala uygun verin; yetersiz eğim birikime yol açar.",
          "Ek yerlerini erişilebilir bırakın ve fotoğraflayın.",
          "Duş teknesi ve gizli sifonların temizlik erişimini planlayın.",
          "Zemin süzgecini kokusuz tipte seçin.",
        ],
      },
      {
        p: "Bu altı madde, tadilattan sonra ortaya çıkan koku şikâyetlerinin neredeyse tamamını baştan önlüyor. Sonradan çözmek ise çoğu zaman seramik sökmeyi gerektiriyor.",
      },

      { h2: "Koku ve sağlık" },
      {
        p: "Kanalizasyon gazı sadece rahatsız edici değildir; kapalı ve havalandırması zayıf ortamlarda baş ağrısı ve mide bulantısına yol açabilir. Bunun için koku sorunu ertelenmemeli.",
      },
      {
        p: "Özellikle bodrum katlarda ve penceresi olmayan banyolarda dikkat gerekir. Aspiratörün çalışır durumda olması hem kokuyu hem nemi kontrol altında tutar.",
      },
      {
        p: "Kokuyla birlikte baş dönmesi gibi belirtiler varsa ortam havalandırılmalı ve kaynak bulunana kadar o mekân kullanılmamalı.",
      },

      { h2: "Nem ve küf kokusunu ayırmak" },
      {
        p: "Her koku kanalizasyon kaynaklı değildir. Küf ve rutubet kokusu farklıdır: gidere yaklaşınca artmaz, duvara ve zemine yakın hissedilir, yağmurlu havalarda kuvvetlenir.",
      },
      {
        p: "Bu durumda aranacak şey sızıntı ve yalıtım sorunudur: duş teknesi altındaki nem, komşu daireden gelen kaçak veya dış duvardan çeken rutubet.",
      },
      {
        p: "Ayrımı yapmadan yapılan gider temizlikleri sonuç vermez. İlk adım, kokunun gidere yaklaşınca artıp artmadığını test etmek.",
      },

      { h2: "Rögar ve bahçe giderleri" },
      {
        p: "Müstakil evlerde koku kaynağı bazen bina içinde değil, bahçedeki rögar veya sifon kutusudur. Kapağı tam oturmayan bir rögar, özellikle rüzgârlı havalarda kokuyu eve taşır. Bahçe giderleri de yaprak ve toprakla dolduğunda su tutmaz hâle gelir. Bu giderler genelde hiç temizlenmediği için birikim yıllar içinde katılaşır.",
      },
      {
        p: "Yılda bir kez bahçedeki tüm gider ve rögar kapaklarını açıp kontrol etmek, hem koku hem yağmurlu havalarda su birikmesi sorununu birlikte çözüyor.",
      },

      { h2: "Ne zaman usta çağırmalı?" },
      {
        p: "Giderlere su döktükten sonra koku bir gün içinde geçtiyse sorun çözülmüştür. Aşağıdaki durumlarda ise yerinde bakılması gerekir:",
      },
      {
        p: "Koku birden fazla noktada birlikte ortaya çıkıyorsa, gider kullanımında gurultu sesi varsa, kokuyla birlikte yavaş akış da başlamışsa veya duvarda nem lekesi görülüyorsa hat tarafında bir sorun var demektir.",
      },
      {
        p: "Bu belirtiler tek başına tıkanıklığı değil, kırık boru veya ayrılmış ek ihtimalini de gündeme getirir. Erken bakıldığında nokta onarımıyla çözülüyor; beklendiğinde zemin altına yayılan bir neme dönüşebiliyor.",
      },
    ],
    faqs: [
      {
        q: "Giderden gelen kokunun en yaygın nedeni nedir?",
        a: "Kuruyan sifondur. Az kullanılan bir yer süzgeci veya misafir banyosunda su kilidindeki su buharlaşır ve kanalizasyon gazı serbestçe içeri girer. Çözümü bir bardak su dökmektir. Uzun süre boş kalacak evlerde suyun üzerine biraz sıvı yağ eklemek buharlaşmayı yavaşlatır.",
      },
      {
        q: "Klozet çekince lavabodan ses geliyor, normal mi?",
        a: "Değil. Bu ses, tesisatın havalandırmasının yetersiz olduğunu gösterir. Su boşalırken oluşan basınç farkı, komşu giderin sifonundaki suyu emer; bariyer kalkar ve koku başlar. Çatıdaki havalandırma ağzı veya bina içindeki havalandırma hattı kontrol edilmelidir.",
      },
      {
        q: "Çamaşır makinesi hortumunu doğrudan gidere takabilir miyim?",
        a: "Takılmamalıdır. Araya sifonlu bir bağlantı ağzı konmazsa koku için açık bir yol kalır; ayrıca pis suyun geri tepme riski doğar. Sifonlu bağlantı parçası küçük ve ucuzdur, kalıcı olarak sorunu bitirir.",
      },
      {
        q: "Koku sadece bazı günler geliyor, neden?",
        a: "Genelde basınç ve hava akışıyla ilgilidir. Rüzgârlı havalarda veya binada yoğun su kullanımı olduğunda basınç farkı artar, sifonlardaki su hareket eder ve koku geçer. Bu düzensiz tablo, havalandırma hattında bir sorun olduğuna işaret eder.",
      },
      {
        q: "Kokusuz yer süzgeci işe yarar mı?",
        a: "Evet, özellikle az kullanılan giderlerde. Su kilidine ek olarak mekanik bir kapak veya membran içerdikleri için sifondaki su buharlaşsa bile koku geçmez. Değişimi kolaydır; çoğu durumda mevcut süzgecin yerine takılabilir. Temizlik için sökülebilir olmasına dikkat edin.",
      },
      {
        q: "Tadilattan sonra koku başladıysa sebebi ne olabilir?",
        a: "En sık iki neden: bir gidere sifon konmaması ve havalandırma hattının kesilip kapatılması. İkisi de montaj sırasında görünmez, işletmede ortaya çıkar. Boru eğiminin yetersiz verilmesi de birikim yaparak koku ve yavaş akışa yol açar.",
      },
      {
        q: "Koku ile birlikte yavaş akış da varsa ne yapmalı?",
        a: "Bu ikili, hat tarafında bir sorun olduğunu gösterir: birikim, kırık boru veya ayrılmış ek. Yerinde bakılması gerekir; gerekirse kamera ile hat görüntülenir. Erken müdahalede nokta onarımıyla çözülür, beklendiğinde zemin altına yayılan neme dönüşebilir.",
      },
    ],
    related: ["lavabo-tikanikligi-neden-olur", "su-kacagi-erken-belirtileri", "banyo-tadilatinda-su-yalitimi"],
  },

  {
    slug: "kirecli-su-ne-yapmali",
    title: "Kireçli su tesisata ne yapar? Yumuşatma gerekir mi?",
    category: "Bakım",
    published: "2026-07-20",
    reading: 9,
    metaTitle: "Kireçli Su | Tesisata Etkisi ve Yumuşatma Kararı",
    metaDesc:
      "Kireç kombide, boylerde ve armatürlerde ne yapar? Su sertliği nasıl ölçülür, yumuşatma cihazı gerekli mi, hangi çözüm nereye uygun?",
    keywords: [
      "kireçli su",
      "su sertliği",
      "su yumuşatma cihazı",
      "kombi kireçlenmesi",
      "kireç çözücü",
    ],
    excerpt:
      "Kireç görünmez bir yalıtım malzemesi gibi çalışır: ısıtıcı yüzeye oturur, ısıyı geçirmez, faturayı büyütür. Sonra da cihazı bitirir.",
    services: ["kombi-bakim-ariza", "sihhi-tesisat", "petek-temizligi"],
    intro:
      "Duş başlığındaki beyaz kabuk, çaydanlığın dibindeki tabaka, birkaç yılda bir arızalanan kombi. Hepsinin ortak sebebi aynı: suyun sertliği. Kireç yavaş çalışır, bu sebeple fark edilmez; ama sistemin ömrünü belirleyen etkenlerin başında gelir.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Kireç, suda çözünmüş kalsiyum ve magnezyum tuzlarının ısınan yüzeylerde çökelmesiyle oluşur.</strong> En çok zararı ısıtıcı yüzeylerde verir: kombi eşanjörü, boyler direnci ve çamaşır makinesi rezistansı.",
      },
      {
        p: "Su çok sertse merkezi bir yumuşatma sistemi mantıklıdır. Sertlik ortaysa düzenli bakım ve nokta çözümleri yeterli olur.",
      },
      {
        p: "Karar, tahminle değil sertlik ölçümüyle verilmelidir.",
      },

      { h2: "Sertlik nedir, nasıl ölçülür?" },
      {
        p: "Suyun sertliği, içindeki kalsiyum ve magnezyum miktarını ifade eder. Yüksekse su \"sert\", düşükse \"yumuşak\" sayılır. Sertlik arttıkça sabun daha az köpürür ve ısınan yüzeylerde birikim hızlanır. Ölçüm için eczanelerde ve tesisat malzemecilerinde bulunan basit test kitleri kullanılabilir; birkaç damlayla sonuç verirler. Daha kesin sonuç için su analizi yaptırılır.",
      },
      {
        p: "İdarelerin yayımladığı su kalite raporlarında da bölgenizin sertlik değeri bulunabilir. Kuyu suyu kullanılıyorsa bu bilgi mevcut olmaz; ölçüm zorunlu hâle gelir.",
      },

      { h2: "Kireç nerelerde birikir?" },
      {
        table: {
          head: ["Yer", "Etkisi", "Belirtisi"],
          rows: [
            ["Kombi eşanjörü", "Isı transferi düşer, yakıt artar", "Sıcak su debisi ve sıcaklığı düşer"],
            ["Boyler / termosifon", "Direnç üstünde yalıtım tabakası", "Isınma süresi uzar"],
            ["Çamaşır–bulaşık makinesi", "Rezistans yanması", "Cihaz ömrü kısalır"],
            ["Duş başlığı ve perlatör", "Delikler tıkanır", "Su dağılımı bozulur"],
            ["Armatür ve rezervuar klapesi", "Sızdırmazlık bozulur", "Damlama, sürekli akış"],
            ["Damlatıcı ve sulama hattı", "Debi düşer, hat tıkanır", "Bitkilerde düzensiz gelişim"],
            ["Boru iç cidarı", "Kesit daralır", "Basınç yıllar içinde düşer"],
          ],
        },
      },
      {
        p: "Listedeki her kalem birbirinden bağımsız gibi görünse de kaynak aynı. kireç sorununa tek tek cihaz bazında değil, sistem bazında bakmak gerekiyor.",
      },

      { h2: "Isıtmada görünmeyen maliyet" },
      {
        p: "Kireç, ısı iletimini zayıflatan bir tabaka oluşturur. Isıtıcı yüzeyde biriken ince bir katman bile aynı sıcaklığı elde etmek için daha fazla yakıt harcanmasına yol açar.",
      },
      {
        p: "Bu maliyet faturaya yayıldığı için fark edilmez. Kullanıcı genelde sorunu ancak sıcak su debisi epeyce düştüğünde veya kombi arıza verdiğinde anlar.",
      },
      {
        p: "Aynı tabaka, ısıtıcı yüzeyin aşırı ısınmasına da yol açar. Rezistans ve eşanjör arızalarının önemli bölümü doğrudan bu nedene bağlanabiliyor.",
      },

      { h2: "Çözüm seçenekleri" },
      {
        table: {
          head: ["Çözüm", "Ne yapar", "Nereye uygun"],
          rows: [
            ["İyon değişimli yumuşatıcı", "Sertlik iyonlarını gerçekten alır", "Tüm ev veya ısıtma girişi"],
            ["Polifosfat dozajlayıcı", "Kirecin yüzeye yapışmasını zorlaştırır", "Kombi girişi gibi nokta koruma"],
            ["Ters ozmoz", "İçme suyunda mineral ve tuzları ayırır", "Mutfak, içme suyu hattı"],
            ["Filtre (tortu)", "Katı parçacıkları tutar", "Her sistemin girişi"],
            ["Periyodik kireç sökme", "Birikmiş tabakayı temizler", "Kombi, boyler, duş başlığı"],
          ],
        },
      },
      {
        p: "Manyetik ve elektronik olarak tanıtılan bazı cihazların kireç üzerindeki etkisi tartışmalıdır; bağımsız ölçümlerle desteklenen sonuçlar sınırlıdır. merkezi bir çözüm ararken iyon değişimli sistemler öne çıkıyor.",
      },
      {
        p: "Doğru yaklaşım, sertlik değerine ve korunacak cihaza göre seçim yapmak. Sadece kombiyi korumak isteyen bir evde tüm eve yumuşatıcı kurmak gereksiz olabiliyor.",
      },

      { h2: "Yumuşatıcı nasıl çalışır?" },
      {
        p: "İyon değişimli yumuşatıcılarda su, reçine dolu bir tanktan geçer. Reçine, sertliğe yol açan kalsiyum ve magnezyumu tutar ve yerine sodyum verir. Reçine doyduğunda tuzlu suyla yıkanarak yenilenir; buna rejenerasyon denir.",
      },
      {
        ul: [
          "Cihazın tuz haznesi düzenli kontrol edilmeli; tuz bitince yumuşatma durur.",
          "Rejenerasyon sıklığı su tüketimine ve sertliğe göre ayarlanır.",
          "Reçine zamanla yorulur; yıllar içinde değişimi gerekir.",
          "Cihaz çıkışında sertlik ölçümü yapılarak çalıştığı doğrulanmalıdır.",
          "Bahçe ve dış musluk hattının yumuşatıcıdan geçmesi gerekmez.",
        ],
      },
      {
        p: "Sondaki kalem işletme maliyetini düşüren pratik bir detay: sulama suyunun yumuşatılmasına gerek yoktur, hat ayrımı yapıldığında hem tuz hem su tasarrufu sağlanır.",
      },

      { h2: "İçme suyu tarafı" },
      {
        p: "Yumuşatılmış suyun sodyum içeriği bir miktar artar. Bu yüzden mutfaktaki içme–kullanma musluğunu yumuşatıcının öncesinden beslemek yaygın bir uygulamadır. İçme suyu için ayrı bir arıtma isteniyorsa ters ozmoz sistemleri tercih edilir. Bu cihazlar tezgâh altına kurulur ve yalnızca tek bir musluğu besler.",
      },
      {
        p: "Sağlıkla ilgili bir beklenti varsa karar, suyun analiz sonucuna göre verilmeli. Hangi cihazın alınacağına suyun içeriği karar verir.",
      },

      { h2: "Cihaz kapasitesi nasıl belirlenir?" },
      {
        p: "Yumuşatıcı seçiminde iki değer belirleyicidir: suyun sertliği ve hanenin günlük su tüketimi. İkisi birlikte, cihazın ne sıklıkla rejenerasyon yapacağını belirler.",
      },
      {
        p: "Küçük seçilen bir cihaz çok sık rejenerasyon yapar; tuz tüketimi ve su kullanımı artar, reçine çabuk yorulur. Gereğinden büyük seçilen cihazda ise su reçine içinde uzun süre bekler.",
      },
      {
        p: "Doğru seçim için kişi sayısı, banyo adedi ve varsa bahçe kullanımı birlikte değerlendirilir. Bahçe hattının yumuşatıcı dışında bırakılması, bir kademe küçük cihazı yeterli hâle getirebiliyor.",
      },

      { h2: "Isıtma devresinde kireç" },
      {
        p: "Kalorifer tesisatı kapalı bir devredir; içindeki su sürekli dolaşır ve normalde yenilenmez. kireç sorunu, ancak devreye sık su takviyesi yapıldığında büyür.",
      },
      {
        p: "Yani ısıtma tarafında kireci besleyen şey kaçaktır. Basıncı sürekli düşen bir sistemde her takviye, devreye yeni kireç ve oksijen taşır; petekler ve eşanjör iki kat hızlı yıpranır.",
      },
      {
        p: "O nedenle ısıtmada önce kaçak aranır. Kaçak giderildiğinde devre kendi suyuyla çalışmaya devam eder ve kireç sorunu kendiliğinden durur.",
      },

      { h2: "Mevcut kireci temizlemek" },
      {
        p: "Yumuşatma, gelecekteki birikimi önler; halihazırda oluşmuş tabakayı çözmez. Onun için ayrı bir temizlik gerekir. Sıralama da bellidir: önce mevcut kireç sökülür, sonra cihaz devreye alınır. Tersi yapıldığında yumuşak su eski tabakayı parça parça koparır ve bu parçalar süzgeçleri tıkar.",
      },
      {
        ol: [
          "Kombi ve boylerde: yetkili servis tarafından uygun kimyasalla eşanjör temizliği yapılır.",
          "Duş başlığı ve perlatörde: sökülüp sirke veya kireç çözücüde bekletilir.",
          "Rezervuar klapesinde: yüzey yumuşak bezle temizlenir.",
          "Sulama hattında: sezon sonunda uygun asit yıkaması yapılır.",
          "Çaydanlık ve kettle'da: ev tipi kireç çözücüler yeterlidir.",
        ],
      },
      {
        p: "Cihaz içi kimyasal temizliklerde doz ve süre üreticinin talimatına göre uygulanmalı. Aşırı dozda kimyasal, kirecin yanında metal yüzeyleri de aşındırıyor.",
      },

      { h2: "Kireç mi, başka bir birikinti mi?" },
      {
        p: "Beyaz ve pütürlü birikinti genelde kireçtir; ama her birikinti kireç değildir. Kırmızı–kahve renkli iz demir, siyah lekeler manganez, kaygan yeşilimsi tabaka ise organik gelişim işareti olabilir. Ayrım önemli çünkü çözümleri farklıdır: kireç için yumuşatma, demir için özel filtre, organik yük için dezenfeksiyon ve depo temizliği gerekir.",
      },
      {
        p: "Yanlış teşhis, alınan cihazın işe yaramamasına yol açar.",
      },
      {
        p: "Basit bir ayrım yöntemi: birikintiyi sirkeye koyun. Kireç köpürerek çözünür, demir oksit ve organik kalıntılar aynı tepkiyi vermez. Kesin sonuç için su analizi gerekir.",
      },

      { h2: "Sulama sistemlerinde kireç" },
      {
        p: "Damlama sulamada kireç, damlatıcıların içinde birikerek debiyi düşürür. Filtre bu birikimi engellemez; çünkü kireç suda çözünmüş hâldedir ve filtreden geçer.",
      },
      {
        p: "O yüzden sert su kullanılan sistemlerde sezon sonu asit yıkaması standart bakımın parçasıdır. İşlem sonrası hattın bol temiz suyla yıkanması gerekir.",
      },
      {
        p: "Tarımsal sistemlerde suyun sertliği aynı zamanda gübreleme programını da ilgilendirir; bazı gübrelerle birlikte çökelme riski artar. Analiz sonucuna göre planlamak bu riski azaltıyor.",
      },

      { h2: "Bakım takvimi" },
      {
        table: {
          head: ["İşlem", "Sıklık"],
          rows: [
            ["Duş başlığı ve perlatör temizliği", "3–6 ayda bir"],
            ["Kombi bakımı (eşanjör dâhil)", "Yılda bir"],
            ["Rezervuar klapesi kontrolü", "Yılda bir"],
            ["Yumuşatıcı tuz kontrolü", "Ayda bir"],
            ["Yumuşatıcı çıkış sertliği ölçümü", "6 ayda bir"],
            ["Sulama hattı asit yıkaması", "Sezon sonunda"],
          ],
        },
      },
      {
        p: "Bu takvim, kireç kaynaklı arızaların büyük bölümünü ortadan kaldırıyor. Hiçbiri uzun sürmüyor; asıl mesele düzenli tekrarlanması.",
      },

      { h2: "Yatırım kararını nasıl vermeli?" },
      {
        p: "Yumuşatma sistemi bir konfor ürünü değil, ekipman koruma yatırımıdır. Karar verirken korunacak cihazların değerini ve beklenen ömürlerini birlikte düşünmek gerekir.",
      },
      {
        ul: [
          "Kombi, boyler, çamaşır ve bulaşık makinesi: kireçten en çok etkilenenler.",
          "Yerden ısıtmalı sistemler: devre suyunun kalitesi ekstra önemli.",
          "Çok banyolu ve kalabalık haneler: tüketim yüksek, kazanç büyük.",
          "Az kullanılan yazlık veya bağ evi: nokta çözümler daha mantıklı.",
        ],
      },
      {
        p: "Sertlik ölçümü olmadan bu değerlendirme yapılamaz. Ölçüm birkaç dakikalık bir iş; onsuz alınan cihaz kararlarının büyük bölümü ya gereksiz ya yetersiz çıkıyor.",
      },

      { h2: "Belirtilerden sertliği anlamak" },
      {
        p: "Ölçüm yapmadan önce bile fikir veren işaretler var:",
      },
      {
        ul: [
          "Sabun ve şampuan zor köpürüyor, cilt kuruyor.",
          "Duş camında ve armatürlerde beyaz leke kalıyor.",
          "Çaydanlık dibinde hızla tabaka oluşuyor.",
          "Duş başlığının delikleri kısa sürede tıkanıyor.",
          "Beyaz eşyada kireç çözücü ihtiyacı sık doğuyor.",
        ],
      },
      {
        p: "Bu belirtiler birkaçı bir aradaysa sertlik yüksek demektir ve ölçüm yaptırmanın zamanı gelmiştir. Ölçüm olmadan cihaz seçmek, gereğinden büyük veya gereksiz bir yatırıma yol açabiliyor.",
      },

      { h2: "Beyaz eşya tarafı" },
      {
        p: "Çamaşır ve bulaşık makineleri, kireçten en hızlı etkilenen cihazlar arasında. Rezistans üzerinde biriken tabaka hem enerji tüketimini artırır hem arıza riskini yükseltir.",
      },
      {
        p: "Merkezi bir yumuşatma yoksa, bu cihazlar için üretilen kireç önleyici ürünler ve düzenli temizlik programları kısmi koruma sağlar. Bulaşık makinelerinde ayrıca kendi tuz haznesi bulunur; o hazne boş kalmamalı.",
      },
      {
        p: "Cihazların su giriş hortumundaki küçük süzgeçler de düzenli temizlenmeli. Tıkanan süzgeç, cihazın su almasını yavaşlatıyor ve zamanla arıza kodu olarak karşınıza çıkıyor.",
      },

      { h2: "Kombi ve boylerde kireç sökme zamanı" },
      {
        p: "Kireç sökme işlemi, cihaz tamamen verim kaybetmeden yapılmalı. Sıcak su debisi iyice düştüğünde ya da ısınma süresi uzadığında zaten geç kalınmış olur. Doğru yaklaşım yıllık bakımı aksatmamak: her bakımda eşanjörün durumu değerlendirilir ve gerekiyorsa temizlik o sırada yapılır. Ayrı bir müdahale gerekmez.",
      },
      {
        p: "Boylerlerde ise magnezyum anot çubuğu da kontrol edilmeli. Bu çubuk korozyona karşı feda edilen parçadır; tükendiğinde tankın kendisi korozyona açık kalıyor.",
      },

      { h2: "Malatya'da durum" },
      {
        p: "Bölgede su sertliği yerleşime göre değişiyor; bazı mahallelerde fark edilir biçimde yüksek. Bunun için \"Malatya suyu şöyledir\" gibi genel bir cümle kurmak doğru olmuyor, kendi adresinizin değerine bakmak gerekiyor.",
      },
      {
        p: "Kuyu suyu kullanılan bahçe ve bağ evlerinde tablo daha da değişken. Aynı bölgedeki iki kuyunun sertliği farklı çıkabiliyor; karar her zaman analizle veriliyor.",
      },
      {
        p: "Pratik yaklaşımımız şu: önce ölçüm, sonra korunacak cihazların listesi, en sonunda çözüm. Bu sırayla ilerlendiğinde hem gereksiz cihaz alınmıyor hem korunması gereken ekipman açıkta kalmıyor.",
      },
    ],
    faqs: [
      {
        q: "Suyumun sert olup olmadığını nasıl anlarım?",
        a: "Basit test kitleriyle birkaç damlada ölçülebilir; kesin sonuç için su analizi yaptırılır. Belirtiler de fikir verir: sabunun zor köpürmesi, armatürlerde beyaz leke, çaydanlıkta hızlı tabaka oluşumu ve duş başlığı deliklerinin kısa sürede tıkanması yüksek sertliğe işaret eder.",
      },
      {
        q: "Su yumuşatma cihazı şart mı?",
        a: "Sertlik çok yüksekse ve korunacak cihaz sayısı fazlaysa yatırım kendini savunur. Orta sertlikte düzenli bakım ve nokta çözümleri yeterli olabilir. Karar ölçümle verilmelidir; ölçüm yapılmadan alınan cihaz ya gereksiz ya da yanlış kapasitede oluyor.",
      },
      {
        q: "Manyetik kireç önleyiciler işe yarıyor mu?",
        a: "Bu cihazların etkisi tartışmalıdır; bağımsız ölçümlerle desteklenen sonuçlar sınırlıdır. Sertliği gerçekten düşüren yöntem iyon değişimli yumuşatmadır. Nokta koruma için polifosfat dozajlayıcılar, kirecin yüzeye yapışmasını zorlaştırarak kısmi fayda sağlar.",
      },
      {
        q: "Yumuşatılmış su içilir mi?",
        a: "Yumuşatma sırasında suyun sodyum içeriği bir miktar artar. Bu nedenle mutfaktaki içme suyu musluğunu yumuşatıcının öncesinden beslemek yaygın uygulamadır. İçme suyu için ayrı arıtma isteniyorsa tezgâh altı ters ozmoz sistemleri tercih edilir.",
      },
      {
        q: "Kombi kireçlenmesi nasıl anlaşılır?",
        a: "Sıcak su debisinin ve sıcaklığının düşmesi, ısınma süresinin uzaması ve kombiden gelen kaynama benzeri sesler tipik belirtilerdir. Eşanjördeki kireç, ısı transferini zayıflattığı için aynı sıcaklık için daha fazla yakıt harcanır. Temizlik yetkili servis tarafından yapılmalıdır.",
      },
      {
        q: "Yumuşatıcı taktırırsam mevcut kireç çözülür mü?",
        a: "Hayır. Yumuşatma yeni birikimi önler, oluşmuş tabakayı çözmez. Kombi ve boylerde uygun kimyasalla temizlik, duş başlığı ve perlatörde sökerek kireç çözücüde bekletme gerekir. İki işlem birlikte planlandığında sonuç kalıcı olur.",
      },
      {
        q: "Sulama sisteminde kireç filtreyle tutulur mu?",
        a: "Tutulmaz. Filtre suda asılı katı parçacıkları tutar; kireç ise çözünmüş hâldedir ve filtreden geçerek damlatıcı içinde birikir. Sert su kullanılan sistemlerde sezon sonu asit yıkaması standart bakımın parçasıdır ve ardından hat bol suyla yıkanır.",
      },
      {
        q: "Yumuşatıcının bakımı nedir?",
        a: "Tuz haznesinin düzenli kontrolü en önemlisidir; tuz bittiğinde yumuşatma durur. Rejenerasyon sıklığı tüketime ve sertliğe göre ayarlanır. Reçine yıllar içinde yorulur ve değişmesi gerekir. Cihaz çıkışında sertlik ölçümü yaparak çalıştığını doğrulamakta fayda var.",
      },
    ],
    related: ["kombi-bakimi-neden-gerekli", "depo-suyu-kokuyor", "rezervuar-su-akitiyor"],
  },

  {
    slug: "deprem-sonrasi-tesisat-kontrolu",
    title: "Deprem sonrası elektrik ve su tesisatı nasıl kontrol edilir?",
    category: "Tadilat",
    published: "2026-07-15",
    reading: 9,
    metaTitle: "Deprem Sonrası Tesisat Kontrolü | Elektrik, Su, Gaz",
    metaDesc:
      "Depremden sonra gaz, elektrik ve su tesisatında hangi sırayla ne kontrol edilir? Görünmeyen hasarlar, kontrol listesi ve onarım–yenileme kararı.",
    keywords: [
      "deprem sonrası tesisat",
      "deprem sonrası elektrik kontrolü",
      "gaz kokusu ne yapmalı",
      "gizli boru hasarı",
      "deprem sonrası tadilat",
    ],
    excerpt:
      "Depremden sonra gözle görülen çatlaklar konuşulur; asıl riskli olan ise duvarın içinde kalan hatlardır. Kontrolün doğru sırası, güvenliği de maliyeti de belirliyor.",
    services: ["deprem-sonrasi-tadilat", "elektrik-tesisati", "bina-tesisat-yenileme"],
    intro:
      "Sarsıntı bittikten sonra yapılan ilk kontrol, çoğunlukla gözle görülen hasara odaklanır. Oysa tesisat hasarı sinsi ilerler: gaz hattındaki küçük bir gevşeme, elektrik panosunda oynayan bir bağlantı, gömme borudaki ince bir çatlak. Bu yazı, neye hangi sırayla bakılacağını anlatıyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Sıra şudur: önce gaz, sonra elektrik, sonra su.</strong> Gaz kokusu varsa hiçbir elektrikli düğmeye dokunmadan vana kapatılır, ortam havalandırılır ve dışarı çıkılarak ilgili kuruma haber verilir.",
      },
      {
        p: "Görünür bir sorun yoksa bile kontrol atlanmamalıdır. Tesisat hasarlarının önemli bölümü ilk günlerde belirti vermez; haftalar sonra sızıntı, koku veya arıza olarak ortaya çıkar.",
      },

      { h2: "İlk dakikalar: neyi kapatmalı?" },
      {
        ol: [
          "Gaz kokusu alıyorsanız: ışık açmayın, priz kullanmayın, çakmak yakmayın. Doğalgaz vanasını kapatın, pencereleri açın, binayı terk edin ve ilgili kuruma bildirin.",
          "Koku yoksa da yapıda ciddi hasar varsa doğalgaz vanasını kapatın.",
          "Elektrikte yanık kokusu, kıvılcım veya su teması varsa ana şalteri indirin.",
          "Su akışı, tavandan damlama veya duvarda hızla yayılan nem varsa ana su vanasını kapatın.",
          "Bina boşaltıldıysa üç hattı da kapalı bırakın.",
        ],
      },
      {
        p: "Bu adımlar sıralamayı belirler: gaz her zaman ilk sırada, çünkü diğer iki hattaki müdahale kıvılcım riski taşır. Sıralama bozulduğunda küçük bir kaçak büyük bir olaya dönüşebiliyor.",
      },

      { h2: "Doğalgaz tarafı" },
      {
        p: "Doğalgaz iç tesisatı, esnek bağlantıları ve vidalı ekleriyle sarsıntıdan etkilenebilir. Sayaç bağlantısı, kombi girişi ve ocak bağlantısı en çok zorlanan noktalardır. Sızdırmazlık kontrolü köpük testiyle yapılır; asla alevle aranmaz.",
      },
      {
        p: "Bu kontrolün yetkili kişilerce yapılması gerekir, çünkü sonuç sadece koku ile değil ölçümle doğrulanır.",
      },
      {
        p: "Yapıda gözle görülür hasar varsa gaz, kontrol tamamlanana kadar kapalı tutulmalı. Isınma ihtiyacı bu kararın önüne geçmemeli; kontrolsüz açılan bir hat, en yüksek riski taşıyan seçenek.",
      },

      { h2: "Elektrik tesisatı" },
      {
        p: "Elektrikte iki tür risk vardır: doğrudan hasar ve gizli hasar. Doğrudan hasar görülebilir: kopmuş kablo, düşmüş armatür, kırılmış priz. Gizli hasar ise duvar içindeki bağlantıların gevşemesi veya kablonun zorlanmasıdır.",
      },
      {
        ul: [
          "Panoyu gözle inceleyin: kararma, is izi, yanık kokusu var mı?",
          "Kaçak akım rölesinin test butonuna basın; devreyi kesmiyorsa röle görevini yapmıyordur.",
          "Prizlerde ısınma, kararma veya kıvılcım olup olmadığını kontrol edin.",
          "Aydınlatma armatürlerinin bağlantılarını gözle kontrol edin.",
          "Su temas etmiş bölümlerde hat, kurutulup ölçülmeden enerjilendirilmemeli.",
          "Topraklama sürekliliği ölçümle doğrulanmalı.",
        ],
      },
      {
        p: "Su ile elektriğin bir arada olduğu durumlar en tehlikelisi. Tavandan sızan su bir buata ulaştıysa, kurumasını beklemek yeterli değildir; yalıtım direnci ölçülmeden o hat devreye alınmamalı.",
      },

      { h2: "Su tesisatı" },
      {
        p: "Su tarafında ilk kontrol görünür sızıntılardır: kolon dibi, sayaç bağlantısı, kombi çevresi, banyo ve mutfak altları. Ardından gizli kaçak testi gelir.",
      },
      {
        p: "Test basittir: tüm musluklar kapatılır ve sayaç izlenir. Yarım saat sonra değer değişmişse hatta su gidiyor demektir. Deprem sonrası bu test, gözle görülmeyen boru hasarını ortaya çıkaran en pratik yöntem.",
      },
      {
        p: "Bir de basınç testi vardır: hat izole edilip belirli bir basınçta bekletilir. Düşüş varsa hasar vardır. Bu yöntem, hangi kolun sorunlu olduğunu daraltmak için kullanılıyor.",
      },

      { h2: "Görünmeyen hasarlar" },
      {
        table: {
          head: ["Nerede", "Ne olur", "Nasıl fark edilir"],
          rows: [
            ["Gömme temiz su borusu", "Ek yerinde ince çatlak", "Sayaç testi, duvarda nem"],
            ["Pis su hattı", "Ek ayrılması, eğim kaybı", "Koku, yavaş akış"],
            ["Elektrik buatı", "Bağlantı gevşemesi", "Isınma, kesinti, ark sesi"],
            ["Kolon hattı", "Askı ve kelepçe hasarı", "Ses, titreşim, sızıntı"],
            ["Su deposu bağlantısı", "Rakor gevşemesi", "Depo altında nem"],
            ["Hidrofor bağlantıları", "Esnek bağlantı yorulması", "Titreşim artışı, sızıntı"],
          ],
        },
      },
      {
        p: "Bu hasarların ortak özelliği, hemen belirti vermemeleri. deprem sonrası kontrolü tek seferlik bir iş olarak değil, birkaç hafta sürecek bir gözlem dönemi olarak düşünmek gerekiyor.",
      },

      { h2: "Duvar çatlağı ile tesisat ilişkisi" },
      {
        p: "Bir duvarda çatlak varsa ve o duvarın içinden boru veya kablo geçiyorsa, hattın da zorlanmış olma ihtimali yüksektir. Özellikle ıslak hacim duvarları bu açıdan öncelikli.",
      },
      {
        p: "Çatlağın onarımı sırasında hattın kontrol edilmesi, aynı duvarı iki kez açmayı önler. Sıva kapatıldıktan sonra ortaya çıkan bir sızıntı, yapılan işin bir bölümünü baştan yaptırır.",
      },
      {
        p: "Yapısal hasar değerlendirmesi ayrı bir uzmanlık alanıdır ve yetkili kişilerce yapılmalıdır. Tesisat kontrolü, o değerlendirmenin yerine geçmez; onunla birlikte yürütülür.",
      },

      { h2: "Depo, hidrofor ve mekanik hacimler" },
      {
        p: "Su deposu ve hidrofor grubu, ağırlıkları nedeniyle sarsıntıda yer değiştirebilir. Bağlantı rakorları zorlanır, esnek bağlantılar yorulur, kaide sabitlemesi gevşer. Kontrolde şunlara bakılır: deponun kaidesi üzerinde oturuşu, giriş–çıkış bağlantılarında sızıntı, pompa kaidesinin sabitliği, pano bağlantılarının durumu.",
      },
      {
        p: "Bu hacimler genelde bodrumda ve gözden uzak olduğu için kontrol atlanabiliyor. Oysa buradaki küçük bir sızıntı, günlerce fark edilmeden ciddi bir su kaybına dönüşüyor.",
      },

      { h2: "Su ve elektrik bir aradaysa" },
      {
        p: "Deprem sonrası en riskli tablo, bir su kaçağının elektrik tesisatına ulaşmasıdır. Tavandan sızan su bir buata veya armatüre girdiğinde, hat normal çalışıyor görünse bile tehlikelidir.",
      },
      {
        ol: [
          "Su temas eden bölümün enerjisini kesin.",
          "Su kaynağını bulup durdurun.",
          "Bölümü kurumaya bırakın; süre birkaç günü bulabilir.",
          "Yalıtım direncini ölçtürmeden hattı devreye almayın.",
          "Ölçüm düşük çıkarsa ilgili bölümdeki kablo ve bağlantılar yenilenmelidir.",
        ],
      },
      {
        p: "Bu sıralama tartışmaya açık değil. Kurumuş göründüğü için enerjilendirilen hatlarda, yalıtımı bozulmuş bir nokta hem yangın hem çarpılma riski taşıyor.",
      },

      { h2: "Onarım mı, yenileme mi?" },
      {
        p: "Karar, hasarın dağılımına bağlı. Tek bir noktada sorun varsa nokta onarımı doğru seçimdir. Birden fazla noktada belirti çıkıyorsa, hattın bütünü değerlendirilmelidir.",
      },
      {
        ul: [
          "Tek noktada sızıntı, hat yeni: nokta onarımı.",
          "Birden fazla noktada sızıntı: kol veya hat yenileme.",
          "Tesisat zaten eski ve tadilat planlanıyor: komple yenileme mantıklı.",
          "Elektrikte topraklama yok veya kaçak akım rölesi bulunmuyor: yenileme fırsatı.",
          "Duvarlar tadilat için zaten açılacak: tesisat kararı öne alınmalı.",
        ],
      },
      {
        p: "Tadilat planlanan bir dairede tesisat kararını sonraya bırakmak en pahalı yol. Kırım yapılmışken alınan karar, ikinci bir kırımı ortadan kaldırıyor.",
      },

      { h2: "Isıtma sistemi kontrolü" },
      {
        p: "Kombi, sarsıntıda duvar askısı üzerinde oynayabilir. Baca bağlantısının yerinden çıkması, gaz ve su bağlantılarının zorlanması ve genleşme tankının darbe alması olası sonuçlardır.",
      },
      {
        ul: [
          "Kombinin askı üzerinde sağlam durduğu kontrol edilir.",
          "Baca bağlantısının tam oturduğu doğrulanır; bu bir güvenlik konusudur.",
          "Tesisat basıncı okunur ve birkaç gün izlenir; düşüyorsa kaçak vardır.",
          "Petek vanaları ve rakorlarda sızıntı aranır.",
          "Yerden ısıtmalı sistemlerde kolektör dolabı kontrol edilir.",
        ],
      },
      {
        p: "Baca bağlantısı özellikle önemli: gözle bakıldığında yerinde duruyormuş gibi görünen bir boru, birkaç milimetre kaymış olabilir. Yetkili servis kontrolü bu nedenle erteleme kaldırmıyor.",
      },

      { h2: "Bina ortak tesisatı" },
      {
        p: "Daire içi kontrol tamamlansa bile bina ortak hatları ayrı bir başlık. Kolonlar, su deposu, hidrofor grubu, ortak alan aydınlatması ve pano bu kapsamda.",
      },
      {
        p: "Ortak alanlarda hasar tespiti yönetim tarafından toplu yaptırıldığında hem maliyet düşer hem kayıt bütünlüğü sağlanır. Tek tek yapılan kontroller, kolon gibi paylaşılan hatlarda sonuç vermez.",
      },
      {
        p: "Sığınak, otopark ve çatı gibi seyrek girilen bölümler listeye mutlaka eklenmeli. Buralardaki bir sızıntı, aylarca fark edilmeden yapının kendisine zarar verebiliyor.",
      },

      { h2: "Kiralık ve boş dairelerde" },
      {
        p: "Boş duran veya kiraya verilmiş dairelerde deprem sonrası kontrol daha da kritik. İçeride kimse olmadığı için bir sızıntı günlerce, bazen haftalarca fark edilmiyor.",
      },
      {
        p: "Boş daire uzun süre kullanılmayacaksa ana su vanasının kapatılması en basit önlem. Elektrik tarafında ise kullanılmayan devrelerin kapatılması, olası bir sorunun büyümesini engelliyor.",
      },
      {
        p: "Kontrol yapıldığında sonucun yazılı ve fotoğraflı olarak kayda alınması, daire kullanımdayken ortaya çıkacak sorunlarda neyin ne zaman tespit edildiğini gösteren tek dayanak oluyor.",
      },

      { h2: "Kayıt tutmak" },
      {
        p: "Kontrol sırasında gördüklerinizi fotoğraflayın ve tarih atın. Hangi noktada ne bulunduğu, ne yapıldığı ve kim tarafından kontrol edildiği yazılı olmalı. Bu kayıt iki işe yarar: ilerleyen haftalarda yeni bir belirti çıktığında karşılaştırma imkânı verir ve sigorta ya da yönetim süreçlerinde dayanak oluşturur.",
      },
      {
        p: "Apartmanlarda ortak alanlara ait kontrollerin yönetim tarafından toplu yaptırılması hem maliyeti düşürüyor hem kayıt bütünlüğü sağlıyor.",
      },

      { h2: "Kontrol listesi" },
      {
        table: {
          head: ["Alan", "Bakılacak", "Kim yapmalı"],
          rows: [
            ["Doğalgaz", "Koku, bağlantı sızdırmazlığı, baca", "Yetkili servis"],
            ["Elektrik panosu", "Yanık izi, gevşek bağlantı, kaçak akım testi", "Yetkili elektrikçi"],
            ["Prizler ve armatürler", "Isınma, kararma, kıvılcım", "Gözle + yetkili kontrol"],
            ["Temiz su hattı", "Sayaç testi, görünür sızıntı", "Kullanıcı + tesisatçı"],
            ["Pis su hattı", "Koku, yavaş akış, gurultu", "Tesisatçı"],
            ["Depo ve hidrofor", "Kaide, rakor, esnek bağlantı", "Tesisatçı"],
            ["Isıtma", "Basınç düşüşü, baca, askı", "Yetkili servis"],
          ],
        },
      },
      {
        p: "Listenin sağ sütunu önemli: gaz ve elektrik tarafındaki kontroller yetkili kişilerce yapılmalı. Kullanıcının yapabileceği kısım gözlem ve sayaç testiyle sınırlı, ama o kısım da sonucu belirleyecek kadar değerli.",
      },

      { h2: "Sigorta ve hasar kaydı" },
      {
        p: "Deprem sonrası tesisat hasarları, konut sigortası kapsamında değerlendirilebilir. Bunun için hasarın ne zaman ve nasıl tespit edildiğinin kayıtlı olması gerekir.",
      },
      {
        p: "Onarımdan önce fotoğraf çekmek, yapılan işin faturasını ve raporunu saklamak bu süreçte belirleyici oluyor. Onarım tamamlandıktan sonra geriye dönük belgelemek çok daha zor.",
      },
      {
        p: "Poliçe kapsamının ne olduğu şirkete göre değişir; o yüzden işlem başlamadan önce sigortacıya bilgi vermek en pratik yol. Süreç, tespit sırasına göre ilerlediğinde tartışma çıkmıyor.",
      },

      { h2: "Sonraki haftalarda izlenecekler" },
      {
        p: "İlk kontrol temiz çıksa bile birkaç hafta boyunca şu belirtiler takip edilmeli: duvarda büyüyen nem lekesi, açıklanamayan su faturası artışı, giderden gelen yeni koku, sigortaların sık atması, prizlerde ısınma.",
      },
      {
        p: "Bunlardan biri ortaya çıkarsa kontrol tekrarlanmalı. Deprem sonrası hasarların bir bölümü, sistem normal çalışmaya devam ettikçe yavaş yavaş büyüyerek belirti veriyor.",
      },
      {
        p: "Malatya'daki yapı stoğunda deprem sonrası yenilemeler sürüyor. Bu işlerde en çok değer yaratan yaklaşım, görünür onarımla birlikte tesisatı da kayıt altına almak: bir sonraki müdahalede neyin nerede olduğu biliniyor.",
      },
    ],
    faqs: [
      {
        q: "Depremden sonra ilk neyi kontrol etmeliyim?",
        a: "Sıra gaz, elektrik, su şeklindedir. Gaz kokusu varsa hiçbir elektrikli düğmeye dokunmadan vanayı kapatın, pencereleri açın, binayı terk edin ve ilgili kuruma haber verin. Elektrikte yanık kokusu veya su teması varsa ana şalteri indirin, sonra su tarafına bakın.",
      },
      {
        q: "Gözle hasar görünmüyorsa kontrol gerekir mi?",
        a: "Gerekir. Tesisat hasarlarının önemli bölümü ilk günlerde belirti vermez; gömme borudaki ince bir çatlak veya gevşemiş bir elektrik bağlantısı haftalar sonra sızıntı, koku ya da arıza olarak ortaya çıkar. Sayaç testi ve pano kontrolü kısa sürer, riski büyük ölçüde azaltır.",
      },
      {
        q: "Gizli su kaçağını nasıl anlarım?",
        a: "Tüm muslukları kapatıp sayacı okuyun; yarım saat sonra değer değişmişse hatta su gidiyordur. Daha kesin sonuç için hat izole edilip basınç testi yapılır: basınç düşüyorsa hasar vardır ve hangi kolda olduğu daraltılarak bulunur.",
      },
      {
        q: "Su temas etmiş elektrik hattı kuruyunca kullanılabilir mi?",
        a: "Kurumasını beklemek yeterli değildir. Yalıtım direnci ölçülmeden o hat devreye alınmamalıdır; suyun ulaştığı buat ve bağlantılarda yalıtım kalıcı olarak bozulmuş olabilir. Ölçüm ve gerekiyorsa bağlantı yenilemesi yetkili kişilerce yapılmalıdır.",
      },
      {
        q: "Kaçak akım rölesini nasıl test ederim?",
        a: "Üzerindeki test butonuna basmanız yeterlidir; röle devreyi anında kesmelidir. Kesmiyorsa görevini yapmıyor demektir ve değiştirilmelidir. Bu test deprem sonrası mutlaka yapılmalı, sonrasında da altı ayda bir tekrarlanmalıdır.",
      },
      {
        q: "Duvar çatlağı varsa içindeki boru da hasarlı mıdır?",
        a: "Kesin değil ama ihtimal yüksektir; özellikle ıslak hacim duvarlarında. Çatlak onarılırken hattın da kontrol edilmesi, aynı duvarı iki kez açmayı önler. Sıva kapatıldıktan sonra çıkan bir sızıntı, yapılan işin bir bölümünü baştan yaptırır.",
      },
      {
        q: "Nokta onarımı mı, komple yenileme mi?",
        a: "Tek noktada sorun varsa ve hat yeniyse nokta onarımı yeterlidir. Birden fazla noktada belirti çıkıyorsa hattın bütünü değerlendirilmelidir. Tadilat zaten planlanıyorsa ve duvarlar açılacaksa, tesisat kararını öne almak ikinci bir kırımı ortadan kaldırır.",
      },
      {
        q: "Kontrolün hangi kısmını kendim yapabilirim?",
        a: "Gözle bakılan kısmı ev sahibi yapabilir: gaz kokusu, tavan ve duvarda ıslaklık, priz ile anahtarlarda kararma, kimse su kullanmazken sayacın dönüp dönmediği. Ölçüm isteyen her şey ustalık işidir. Topraklama ve izolasyon ölçümü, gaz hattı sızdırmazlık testi ve gizli kaçak tespiti cihazla yapılır; bu üçünde tahminle karar verilmez.",
      },
      {
        q: "Kontrol sonrası neleri takip etmeliyim?",
        a: "Birkaç hafta boyunca şunlara dikkat edin: duvarda büyüyen nem lekesi, açıklanamayan su faturası artışı, giderden gelen yeni koku, sigortaların sık atması ve prizlerde ısınma. Bunlardan biri ortaya çıkarsa kontrol tekrarlanmalıdır.",
      },
    ],
    related: ["deprem-sonrasi-ic-mekan-yenileme", "su-faturasi-neden-yuksek", "elektrik-tesisati-yenileme-belirtileri"],
  },
];

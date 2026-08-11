// Kuyu ve dalgıç pompa yazıları.
// Arama verisinde ikinci en güçlü küme: dalgıç pompa arızaları, kablo kesiti,
// kuyudan çıkarma, kuru çalışma ve kumlu su.

export const kuyuPosts = [
  {
    slug: "dalgic-pompa-kablo-kesiti",
    title: "Dalgıç pompada kablo kesiti nasıl seçilir?",
    category: "Pompa",
    published: "2026-08-09",
    reading: 9,
    metaTitle: "Dalgıç Pompa Kablo Kesiti | Gerilim Düşümü Hesabı",
    metaDesc:
      "Kuyu derinliği, motor gücü ve gerilim düşümüne göre dalgıç pompa kablosu nasıl seçilir? Hesap yöntemi, yaklaşık kesit tablosu ve ek yapma kuralları.",
    keywords: [
      "dalgıç pompa kablo kesiti",
      "gerilim düşümü hesabı",
      "kuyu pompası kablosu",
      "dalgıç kablo eki",
      "motor besleme kablosu",
    ],
    excerpt:
      "Kablodan yapılan tasarruf, ilk yıl içinde motor sarımı olarak geri dönüyor. Kesit hesabı aslında tek satırlık bir formül; asıl mesele hangi değerlerin kullanıldığı.",
    services: ["hidrofor-pompa-sistemleri", "elektrik-panosu", "tarimsal-sulama-sistemleri"],
    intro:
      "Derin kuyularda kablo uzunluğu yüz metreyi rahatlıkla geçiyor. Bu mesafede kablonun kendi direnci üzerinde kaybolan gerilim, motora düşük gerilim olarak yansıyor; motor daha fazla akım çekiyor ve zamanla sargı yanıyor. Kesit seçimi bu yüzden bir tercih değil, hesap işi.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Kablo kesiti; motorun etiket akımı, kablonun toplam uzunluğu ve kabul edilen gerilim düşümü üzerinden hesaplanır.</strong> Uygulamada motor besleme hatlarında gerilim düşümü %3–5 aralığında tutulur; hesap sonucu çıkan değer bir üst standart kesite yuvarlanır.",
      },
      {
        p: "Pratik kural: aynı motor için kablo uzunluğu iki katına çıktığında kesit de kabaca iki katına çıkar. Tek fazlı motorlar, aynı güçte üç fazlıya göre çok daha yüksek akım çektiği için belirgin şekilde kalın kablo ister.",
      },

      { h2: "Gerilim düşümü neden bu kadar önemli?" },
      {
        p: "Motor, etiketinde yazan gerilimin belirli bir toleransı içinde çalışmak üzere tasarlanır. Gerilim düştüğünde motorun ürettiği moment azalır; aynı işi yapabilmek için daha fazla akım çeker. Akım arttıkça sargı ısınır ve yalıtım ömrü kısalır.",
      },
      {
        p: "Isınmanın yalıtım üzerindeki etkisi doğrusal değildir. Sargı sıcaklığındaki sürekli birkaç derecelik artış bile ömrü belirgin biçimde kısaltır. Dolayısıyla \"biraz ince kablo çektik, çalışıyor işte\" durumu, arızayı ortadan kaldırmaz; sadece ertelenmiş hâle getirir.",
      },
      {
        p: "İkinci etki kalkışta ortaya çıkar. Motor kalkarken nominal akımın birkaç katını çeker ve o anda gerilim düşümü de aynı oranda büyür. Zaten sınırda olan bir hatta motor kalkamaz, uğuldar ve termik atar.",
      },

      { h2: "Hesap nasıl yapılır?" },
      {
        p: "Üç fazlı bir sistemde kabaca şu ilişki kullanılır: gerilim düşümü, kök üç çarpı akım çarpı uzunluk çarpı iletken direnci bölü kesit. Bunu kesit için düzenlediğimizde, ihtiyacınız olan minimum kesiti veren bir bağıntı elde edilir.",
      },
      {
        ul: [
          "Akım (I): motorun etiketinde yazan nominal akım; tahmin edilmez, okunur.",
          "Uzunluk (L): panodan motora kadar olan gerçek kablo boyu, kuyu içindeki bölüm dâhil.",
          "Kabul edilen düşüm: motor hatlarında genellikle %3–5 arası.",
          "İletken cinsi: bakır tercih edilir; alüminyum aynı kesitte daha yüksek direnç gösterir.",
          "Ortam: dalgıç kablo su içinde soğur, ancak hesap yine gerilim düşümüne göre yapılır.",
        ],
      },
      {
        p: "Hesabı yapmadan önce bir nokta daha var: pano ile kuyu ağzı arasındaki mesafe de toplam uzunluğa dâhildir. Sahada en sık atlanan kalem bu; kuyu 80 metre derinse ama pano tarladan 120 metre uzaktaysa hesaplanacak uzunluk 200 metredir.",
      },

      { h2: "Yaklaşık kesit tablosu" },
      {
        p: "Aşağıdaki tablo, 400 volt üç fazlı besleme ve yaklaşık %3 gerilim düşümü kabulüyle hazırlanmış <strong>yol gösterici</strong> değerler içerir. Kesin seçim; üretici tablosu, yol verme yöntemi ve proje koşullarına göre yapılır.",
      },
      {
        table: {
          head: ["Motor gücü", "50 m", "100 m", "150 m", "200 m"],
          rows: [
            ["1,5 kW", "2,5 mm²", "2,5 mm²", "2,5 mm²", "4 mm²"],
            ["2,2 kW", "2,5 mm²", "2,5 mm²", "2,5 mm²", "4 mm²"],
            ["4 kW", "2,5 mm²", "2,5 mm²", "4 mm²", "6 mm²"],
            ["5,5 kW", "2,5 mm²", "4 mm²", "6 mm²", "6 mm²"],
            ["7,5 kW", "2,5 mm²", "6 mm²", "6 mm²", "10 mm²"],
            ["11 kW", "4 mm²", "6 mm²", "10 mm²", "16 mm²"],
          ],
        },
      },
      {
        p: "Tek fazlı motorlarda aynı güç için akım yaklaşık üç katına çıkar; bu nedenle tabloya göre bir–iki kademe kalın kesit gerekir. Tek fazlı derin kuyu uygulamalarında kablo maliyeti, üç fazlı çözüme geçmeyi çoğu zaman mantıklı kılar.",
      },
      {
        p: "Yumuşak yol verici veya frekans sürücü kullanılıyorsa kalkış akımı düştüğü için koşullar rahatlar; buna karşılık sürücülerde ekranlı kablo ve topraklama düzeni ayrı bir gereklilik hâline gelir.",
      },

      { h2: "Hangi kablo tipi kullanılmalı?" },
      {
        p: "Kuyu içinde kullanılan kablo, sürekli su altında kalmaya uygun olmalıdır. Sıradan bir kablo birkaç ay içinde su alır ve izolasyon direnci düşer; bu da motorun yanmasına giden yolun başlangıcıdır.",
      },
      {
        ul: [
          "Dalgıç pompa için üretilmiş, su altı kullanımına uygun yassı veya yuvarlak kablo tercih edilir.",
          "Kablo, boruya kelepçelerle sabitlenir; serbest bırakılan kablo kuyu cidarına sürterek yıpranır.",
          "Kelepçe aralığı genelde iki–üç metredir, boru eklerinde ayrıca sabitlenir.",
          "Kablonun kuyu ağzından çıktığı nokta keskin kenarlarla temas etmemeli.",
          "Toprak iletkeni kesinlikle çekilmeli; kuyu sistemlerinde topraklama isteğe bağlı değildir.",
        ],
      },
      {
        p: "Kablo seçiminde en yaygın hata, kısa vadeli maliyete bakarak standart bina kablosu kullanmak. Bu kablolar su altında uzun süre görev yapacak şekilde üretilmez; kısa sürede izolasyon değerleri düşer.",
      },

      { h2: "Ek yeri: en zayıf halka" },
      {
        p: "Kuyu içindeki kablo ekleri, arızaların sessiz kaynağıdır. Su, en küçük boşluktan içeri girer ve kılcal yolla iletken boyunca ilerler. Yalıtım direnci düştüğünde kaçak akım rölesi atar veya motor toprağa kaçak yapar.",
      },
      {
        p: "Mümkünse kuyu içinde hiç ek yapılmaz, kablo tek parça çekilir. Ek zorunluysa reçineli veya ısıyla daralan özel dalgıç ek kiti kullanılır; bant, makaron veya sıradan buat kesinlikle yeterli değildir.",
      },
      {
        quote:
          "Kuyudan çıkardığımız yanmış motorların bir bölümünde asıl suçlu motor değil, iki yıl önce bantla yapılmış bir kablo ekiydi.",
      },
      {
        p: "Ek yapıldığında kaydını tutmak da faydalı: hangi derinlikte, hangi tarihte ek yapıldığı bilinirse, ileride sorun çıktığında arama süresi kısalır.",
      },

      { h2: "Pano nerede durmalı?" },
      {
        p: "Panonun yeri, kablo hesabını doğrudan etkiler. Kuyuya yakın konumlandırılan bir pano toplam kablo boyunu kısaltır; hem kesit küçülür hem maliyet düşer. Buna karşılık pano açık alanda, güneşte ve yağmurda kalacaksa uygun koruma sınıfında bir kabin gerekir.",
      },
      {
        p: "Uygulamada tercih edilen çözüm, panoyu kuyu ağzına yakın bir gölgelikte veya küçük bir kabinde konumlandırmak ve besleme hattını daha kalın kesitle uzaktan getirmektir. Böylece motor hattı kısa kalır, uzun mesafedeki kayıp ise besleme tarafında yönetilir.",
      },
      {
        p: "Pano yerini belirlerken bakım erişimini de düşünmek gerekiyor. Sulama sezonunda gece yarısı müdahale gerektiğinde, aracın yanaşabildiği ve aydınlatması olan bir konum ciddi fark yaratıyor.",
      },

      { h2: "Yol verme yöntemi kesiti etkiler mi?" },
      {
        p: "Evet, dolaylı olarak etkiler. Doğrudan yol vermede (direkt kalkış) motor, nominal akımının birkaç katını bir anda çeker. Bu ani akım, hat üzerinde geçici ama büyük bir gerilim düşümü yaratır ve zaten sınırda seçilmiş bir kablo bu anda yetersiz kalır.",
      },
      {
        table: {
          head: ["Yol verme", "Kalkış akımı", "Hat üzerindeki etkisi"],
          rows: [
            ["Doğrudan (DOL)", "Yüksek", "Ani gerilim çökmesi, kesit payı gerekir"],
            ["Yıldız–üçgen", "Orta", "Kalkış yumuşar, hat rahatlar"],
            ["Yumuşak yol verici", "Düşük", "Kontrollü kalkış, mekanik zorlanma azalır"],
            ["Frekans sürücü", "En düşük", "Kalkış sorunsuz, ekranlı kablo gerekir"],
          ],
        },
      },
      {
        p: "Uzun hatlarda yumuşak yol verici veya sürücü kullanmak, sadece kabloyu değil pompanın mekanik parçalarını ve boru hattını da rahatlatır. Ani kalkışta oluşan tork darbesi kaplinleri ve boru eklerini yorar.",
      },

      { h2: "Kablo alırken nelere bakılır?" },
      {
        ul: [
          "Etiket üzerindeki kesit değeri ile gerçek iletken kesiti uyuşuyor mu?",
          "Kablo su altı kullanımına uygun tipte mi?",
          "Bakır iletken tam kesit mi, yoksa dolgulu mu?",
          "Dış kılıf esnek mi; soğukta çatlama yapıyor mu?",
          "Üretim yılı ve saklama koşulları uygun mu?",
          "Metraj gerçek mi? Kısa gelen makaralar sahada sık karşılaşılan bir durum.",
        ],
      },
      {
        p: "Kesit farkını anlamanın pratik yolu, kablonun ucundan bir kesit alıp ölçmektir. Etiketinde yazandan ince çıkan kablo, hesaplanan gerilim düşümünü tutturamaz ve yapılan tüm hesabı geçersiz kılar.",
      },
      {
        p: "Kuyu sistemlerinde kablo, sonradan değiştirilmesi en zahmetli parçadır; pompanın çıkarılmasını gerektirir. Bu yüzden ilk kurulumda kaliteden ödün vermemek, sonraki yıllarda zamandan ve paradan tasarruf sağlar.",
      },

      { h2: "İzolasyon ölçümü ile erken teşhis" },
      {
        p: "Motor sargısının toprağa karşı yalıtım direnci, megger adı verilen cihazla ölçülür. Bu ölçüm, henüz arıza çıkmadan sorunu görmenin en güvenilir yolu. Değer zamanla düşüyorsa motor veya kablo su alıyor demektir.",
      },
      {
        p: "Ölçümü yıllık bakımın parçası hâline getirmek, özellikle tarımsal sulamada büyük fark yaratıyor. Sezon ortasında beklenmedik şekilde duran bir pompa, sadece tamir maliyeti değil; sulanamayan günler anlamına da geliyor.",
      },
      {
        p: "Ölçüm sonuçlarını yıl yıl kaydetmek, tek seferlik ölçümden çok daha değerli. Mutlak değerden çok, değerin nasıl değiştiği bilgi verir.",
      },

      { h2: "Panodaki koruma elemanları" },
      {
        p: "Doğru kablo, doğru korumayla anlam kazanır. Kuyu panosunda bulunması gereken elemanlar hem motoru hem kabloyu korur:",
      },
      {
        table: {
          head: ["Eleman", "Görevi", "Neden gerekli"],
          rows: [
            ["Termik röle", "Aşırı akımda durdurur", "Mekanik zorlanma ve aşırı yükte koruma"],
            ["Faz koruma rölesi", "Faz kaybı ve sırasında keser", "İki fazla çalışan motor kısa sürede yanar"],
            ["Kuru çalışma koruması", "Susuz çalışmayı engeller", "En sık görülen pompa arızası nedeni"],
            ["Kaçak akım rölesi", "İzolasyon bozulmasında keser", "Can güvenliği ve erken uyarı"],
            ["Kontaktör", "Kumanda devresini taşır", "Doğru boyutlandırılmalı"],
          ],
        },
      },
      {
        p: "Termik rölenin ayarı motorun etiket akımına göre yapılır. \"Sürekli atıyor\" diye ayarı yukarı çekmek, korumayı devre dışı bırakmakla aynı şey; atmanın nedeni bulunmadan ayar değiştirilmez.",
      },

      { h2: "Tarımsal hatlarda gerilim sorunu" },
      {
        p: "Kırsal besleme hatlarında gerilim, özellikle sulama sezonunda belirgin şekilde düşer. Aynı trafodan beslenen çok sayıda pompa aynı saatlerde çalıştığında, hattın sonundaki abonede gerilim nominal değerin altına iner.",
      },
      {
        p: "Bu durumda kablo kesiti doğru seçilmiş olsa bile motor düşük gerilimle çalışır. Çözüm iki yönlüdür: pano tarafında gerilim koruma rölesi kullanmak ve mümkünse çalışma saatlerini yoğun olmayan zamanlara kaydırmak.",
      },
      {
        p: "Ölçüm yapılmadan yorum yapılmaz. Pompa çalışırken pano girişinde ölçülen gerilim, sorunun kaynağının hat mı yoksa kendi tesisatınız mı olduğunu doğrudan gösterir.",
      },

      { h2: "Malatya ve çevresinde sık gördüğümüz durum" },
      {
        p: "Bölgede kuyu sistemlerinin önemli bölümü kayısı bahçelerinde ve tarımsal sulamada çalışıyor. Kuyular derin, arazi hatları uzun ve pano çoğu zaman kuyudan hayli uzakta konumlanıyor.",
      },
      {
        p: "Bu üçlü bir araya geldiğinde hesap dışı gerilim düşümü kaçınılmaz oluyor. Kurulum sırasında iki kademe kalın seçilen bir kablo, sonradan yapılacak motor sarımlarının maliyetiyle kıyaslandığında küçük bir kalem olarak kalıyor.",
      },
      {
        p: "Sezon başlamadan yapılan basit bir kontrol; kablo ekleri, izolasyon direnci ve pano gerilimi üçlüsüne bakmak, sezon ortasındaki acil çağrıların çoğunu ortadan kaldırıyor.",
      },

      { h2: "Kesit seçiminde yapılan altı hata" },
      {
        ul: [
          "Toplam uzunluğa panodan kuyu ağzına kadar olan mesafeyi eklememek.",
          "Motorun etiket akımı yerine güç değerinden kabaca tahmin yürütmek.",
          "Kalkış akımını hiç hesaba katmamak.",
          "Kuyu içinde bant veya sıradan buatla ek yapmak.",
          "Toprak iletkenini çekmemek veya kesitini gereğinden ince bırakmak.",
          "Kabloyu boruya sabitlemeden serbest bırakmak.",
        ],
      },
      {
        p: "Bu altı maddenin her biri, tek başına motorun ömrünü kısaltmaya yeter. Birkaçı bir arada olduğunda ise arıza sorusu \"olur mu\" değil, \"ne zaman\" hâline gelir.",
      },
    ],
    faqs: [
      {
        q: "Dalgıç pompa kablosunda gerilim düşümü ne kadar olmalı?",
        a: "Motor besleme hatlarında genellikle %3–5 aralığı kabul edilir. Hesap %3 üzerinden yapıldığında kalkış anındaki ek düşüm için pay kalmış olur. Sınırda kalan bir seçim, motor kalkarken gerilimin çok düşmesine ve termik atmasına yol açabilir.",
      },
      {
        q: "Kablo uzunluğuna kuyu derinliği mi yoksa toplam mesafe mi yazılır?",
        a: "Toplam mesafe yazılır: panodan kuyu ağzına kadar olan yatay mesafe artı kuyu içindeki dikey uzunluk. Sahada en sık yapılan hata, sadece kuyu derinliğinin hesaba katılmasıdır. Pano tarlanın öbür ucundaysa bu fark kesiti iki kademe değiştirebilir.",
      },
      {
        q: "Tek fazlı dalgıç pompa için kablo daha mı kalın olmalı?",
        a: "Evet. Tek fazlı motorlar aynı güç için çok daha yüksek akım çeker, dolayısıyla aynı uzunlukta belirgin kalın kesit gerekir. Derin kuyularda bu fark maliyeti hızla büyütür; bu nedenle uygun altyapı varsa üç fazlı çözüm hem teknik hem ekonomik olarak öne çıkar.",
      },
      {
        q: "Kuyu içinde kablo eki yapılabilir mi?",
        a: "Mümkünse yapılmamalıdır. Zorunlu hâllerde su altı kullanımı için üretilmiş reçineli veya ısıyla daralan ek kitleri kullanılır. Bant, makaron veya standart buat kısa sürede su alır; izolasyon direnci düşer ve kaçak akım rölesi atmaya başlar. Ek yapılan derinlik not edilmelidir.",
      },
      {
        q: "Alüminyum kablo kullanılabilir mi?",
        a: "Uzun arazi hatlarında maliyet nedeniyle tercih edilebilir, ancak aynı kesitte bakırdan daha yüksek direnç gösterdiği için kesitin büyütülmesi gerekir. Ayrıca bağlantı noktalarında oksitlenmeye karşı uygun klemens ve macun kullanılmalıdır. Kuyu içi bölümde bakır dalgıç kablo tercih edilir.",
      },
      {
        q: "Motor sık sık termikten atıyor, kablo mu suçlu?",
        a: "Olabilir ama tek başına karar verilmez. Önce termik ayarının etiket akımına uygunluğu kontrol edilir. Ayar doğruysa nedenler şunlardır: gerilim düşümü, faz dengesizliği, mekanik sıkışma veya pompanın çalışma noktası dışında zorlanması. Pano girişinde gerilim ölçümü ayrımı hızlıca yapar.",
      },
      {
        q: "İzolasyon direnci kaçın altına düşerse müdahale gerekir?",
        a: "Mutlak eşikten çok eğilim önemlidir. Yıllık ölçümlerde değer sürekli düşüyorsa, kablo veya motor su almaya başlamıştır. Ani ve büyük düşüşler ise acil müdahale gerektirir. Ölçüm sonuçlarının kaydedilmesi, arızayı oluşmadan görmenin en pratik yoludur.",
      },
      {
        q: "Frekans sürücü kullanınca kablo seçimi değişir mi?",
        a: "Evet. Kalkış akımı düştüğü için gerilim düşümü açısından koşullar rahatlar, ancak sürücü çıkışında ekranlı kablo ve doğru topraklama gerekir. Uzun motor kablolarında ayrıca çıkış filtresi gerekebilir. Bu detaylar atlandığında parazit ve yalıtım zorlanması sorunları ortaya çıkar.",
      },
    ],
    related: ["dalgic-pompa-calismiyor", "kuru-calisma-korumasi", "kuyu-pompasi-basinc-sorunu"],
  },

  {
    slug: "dalgic-pompa-kuyudan-cikarma",
    title: "Dalgıç pompa kuyudan nasıl çıkarılır?",
    category: "Pompa",
    published: "2026-08-05",
    reading: 9,
    metaTitle: "Dalgıç Pompa Kuyudan Çıkarma | Sıra ve Güvenlik",
    metaDesc:
      "Pompayı çıkarmadan önce hangi kontroller yapılır, çıkarma nasıl planlanır, hangi ekipman gerekir? Güvenlik kuralları ve yeniden indirme adımları.",
    keywords: [
      "dalgıç pompa çıkarma",
      "kuyu pompası sökme",
      "pompa askı halatı",
      "kuyu bakımı",
      "pompa yeniden indirme",
    ],
    excerpt:
      "Pompayı kuyudan çıkarmak, arıza aramanın ilk adımı değil son adımı olmalı. Doğru sırayla yapıldığında çoğu zaman hiç çıkarmaya gerek kalmıyor.",
    services: ["hidrofor-pompa-sistemleri", "tarimsal-sulama-sistemleri", "elektrik-panosu"],
    intro:
      "Kuyudan pompa çıkarmak; vinç, ekip ve zaman isteyen pahalı bir işlem. Buna rağmen arıza anında ilk akla gelen çözüm oluyor. Halbuki sahada gördüğümüz arızaların önemli bölümü elektriksel ve pompa hiç çıkarılmadan çözülüyor. Bu yazıda hem çıkarma öncesi kontrol sırasını hem de çıkarma gerektiğinde izlenecek yolu anlatıyoruz.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Pompa çıkarılmadan önce enerji, koruma elemanları, kumanda devresi ve motor izolasyon direnci sırayla kontrol edilir.</strong> Bu dört adım temiz çıkarsa arıza mekaniktir ve çıkarma gerekir; aksi hâlde sorun kuyunun dışındadır.",
      },
      {
        p: "Çıkarma işlemi en az iki kişiyle, uygun kaldırma ekipmanıyla ve kuyu ağzı güvenliği sağlanarak yapılır. Elle çekmeye çalışmak hem tehlikeli hem de boru ve kablonun zarar görmesine yol açar.",
      },

      { h2: "Önce çıkarmayı gerektirmeyen kontroller" },
      {
        ol: [
          "Panoya gelen gerilim ölçülür; üç fazın da olduğu doğrulanır.",
          "Sigorta, termik, faz koruma ve kuru çalışma koruması incelenir.",
          "Kumanda devresi test edilir; kontaktör çekiyor mu bakılır.",
          "Kontaktör çıkışında motora giden gerilim ölçülür.",
          "Motor sargı dirençleri ve toprağa karşı izolasyon direnci ölçülür.",
          "Kuyu su seviyesi kontrol edilir; seviye pompanın altına düşmüş olabilir.",
        ],
      },
      {
        p: "Bu altı adım genelde bir saatten kısa sürer ve çağrıların önemli bölümünü çözer. Sargı dirençleri dengesizse veya izolasyon direnci düşükse, arızanın motorda olduğu çıkarma öncesinde bilinir; bu da yedek parçayı yanında getirmeyi sağlar.",
      },

      { h2: "Çıkarma kararını veren belirtiler" },
      {
        table: {
          head: ["Bulgu", "Anlamı", "Çıkarma gerekir mi?"],
          rows: [
            ["İzolasyon direnci çok düşük", "Motor veya kablo su almış", "Evet"],
            ["Sargı dirençleri dengesiz", "Sargı arızası", "Evet"],
            ["Motor dönüyor, su gelmiyor", "Çark aşınmış veya kırılmış", "Evet"],
            ["Termik ısrarla atıyor, elektrik temiz", "Mekanik sıkışma", "Evet"],
            ["Koruma rölesi atmış", "Kuru çalışma veya faz sorunu", "Hayır"],
            ["Kontaktör çekmiyor", "Kumanda devresi arızası", "Hayır"],
            ["Su seviyesi düşmüş", "Kuyu verimi veya kuraklık", "Genelde hayır"],
          ],
        },
      },
      {
        p: "Tablonun alt üç satırı, sahada en sık gereksiz yere pompa çıkarılan durumlar. Kuyu başında yapılan yarım saatlik ölçüm, günlük bir işi ve ciddi bir maliyeti ortadan kaldırıyor.",
      },

      { h2: "Çıkarmadan önce hazırlık" },
      {
        ul: [
          "Enerji kesilir ve pano kilitlenir; başkasının yanlışlıkla devreye almasına engel olunur.",
          "Kuyu ağzı çevresi temizlenir, kayma yaratacak çamur ve su tahliye edilir.",
          "Kaldırma için üç ayak (tripod), vinç veya uygun kapasitede caraskal hazırlanır.",
          "Çıkacak borunun sıralanacağı düz bir alan ayrılır.",
          "Boru anahtarı, kelepçe, kesici, yedek conta ve ek malzemeleri hazır bulundurulur.",
          "Kuyu ağzına düşme önleyici kapak veya bariyer konur.",
        ],
      },
      {
        p: "Kuyu ağzı, saha güvenliği açısından ciddiye alınması gereken bir açıklıktır. Çıkarma sırasında bir parçanın kuyuya düşmesi, işi bambaşka bir sorunla büyütür; düşen parçayı çıkarmak çoğu zaman pompayı çıkarmaktan zordur.",
      },

      { h2: "Çıkarma sırası" },
      {
        ol: [
          "Kuyu ağzındaki bağlantı ve çıkış hattı sökülür.",
          "Kaldırma ekipmanı boruya bağlanır, yük kontrollü şekilde alınır.",
          "Boru yavaşça yukarı çekilir; kelepçeler açıldıkça kablo serbest bırakılır.",
          "Her boru boyunda ek sökülür ve boru düzenli şekilde sıraya dizilir.",
          "Kablo hiçbir aşamada gergin bırakılmaz; pompanın ağırlığını kablo taşımaz.",
          "Pompa yaklaşırken hız düşürülür, kuyu ağzından çıkarken destek verilir.",
          "Çıkan pompa yatay konumda, temiz bir zemine alınır.",
        ],
      },
      {
        p: "Boruların çıkış sırasıyla dizilmesi, geri indirmede zaman kazandırır ve aynı derinliğe geri inilmesini sağlar. Karışan borular, geri montajda hem süreyi uzatıyor hem hata riskini artırıyor.",
      },

      { h2: "Pompa çıktığında neye bakılır?" },
      {
        p: "Kuyudan çıkan pompa, kuyu hakkında da bilgi verir. Yüzeydeki izler çoğu zaman arızanın neden oluştuğunu anlatır:",
      },
      {
        ul: [
          "Gövde üzerinde kalın kireç tabakası: suyun sertliği yüksek, verim düşmüş olabilir.",
          "Çarkta oyulma ve aşınma: kum çekimi veya kavitasyon.",
          "Emiş süzgecinde tıkanıklık: kuyu temizliği gerekiyor.",
          "Kablo dış kılıfında sürtme izleri: kelepçe eksikliği.",
          "Motor gövdesinde şişme veya yanık izi: aşırı ısınma yaşanmış.",
          "Boru eklerinde pas ve incelme: hat yenileme gerekebilir.",
        ],
      },
      {
        p: "Bu gözlemler kaydedilmezse, aynı arıza birkaç yıl sonra tekrar eder. Örneğin kum aşındırması tespit edildiği hâlde kuyu tarafında önlem alınmazsa, yeni pompa da aynı ömrü yaşar.",
      },

      { h2: "Yeniden indirmede kritik kararlar" },
      {
        p: "Pompanın hangi derinliğe indirileceği, sistemin sonraki yıllarını belirler. Çok yukarıda kalırsa dinamik seviye düştüğünde susuz kalır; çok aşağı inerse kuyu dibindeki tortu ve kumu çeker.",
      },
      {
        p: "Genel uygulama, pompayı kuyu dibinden birkaç metre yukarıda konumlandırmaktır. Kuyu logu ve filtre borusunun yeri biliniyorsa karar çok daha isabetli verilir; bu belgeler saklanmalıdır.",
      },
      {
        quote:
          "Kuyu logu olan bir sahada pompa kotu bir hesap işidir; log yoksa tahmin işine dönüşür ve tahminin bedelini genelde pompa öder.",
      },
      {
        p: "İndirme sırasında paslanmaz emniyet halatı kullanmak, boru eki koptuğunda pompanın kuyu dibine düşmesini önler. Küçük bir maliyet kalemi, kurtarma operasyonu gerektiren büyük bir sorunu engelliyor.",
      },

      { h2: "Çıkarma sırasında en sık yapılan hatalar" },
      {
        ul: [
          "Enerjiyi kesmeden veya panoyu kilitlemeden işe başlamak.",
          "Kaldırma yükünü kablo üzerinden almak.",
          "Boruları karışık şekilde yere bırakmak; geri montajda sıra bozulur.",
          "Kuyu ağzını açık bırakmak; alet veya parça düşme riski doğar.",
          "Emniyet halatı kullanmadan indirip çıkarmak.",
          "Sıkışan pompayı sert kuvvetle zorlamak.",
          "Çıkan pompayı incelemeden doğrudan tamire göndermek.",
        ],
      },
      {
        p: "Bu hataların ortak özelliği, hepsinin zaman kazanmak için yapılıyor olması. Uygulamada ise her biri işi uzatan, bazen tamamen kurtarma operasyonuna çeviren sonuçlar doğuruyor.",
      },
      {
        p: "İşe başlamadan önce beş dakikalık bir plan yapmak; kimin neyi kontrol edeceği, yükün nereden alınacağı ve boruların nereye dizileceği konuşulduğunda, çıkarma işlemi belirgin şekilde hızlanıyor.",
      },

      { h2: "Boru ve bağlantı seçimi" },
      {
        table: {
          head: ["Boru tipi", "Avantaj", "Dikkat"],
          rows: [
            ["Galvaniz çelik", "Dayanıklı, yüke güçlü", "Ağır, korozyona açık, montaj zahmetli"],
            ["Polietilen (PE)", "Hafif, korozyona dayanıklı", "Yük sınırı var, ek kalitesi kritik"],
            ["Paslanmaz", "En uzun ömür", "Maliyeti yüksek"],
          ],
        },
      },
      {
        p: "Derinlik arttıkça borunun kendi ağırlığı belirleyici olur. Yüzeye yakın kuyularda hafif ve pratik çözümler öne çıkarken, derin kuyularda taşıma kapasitesi ilk kriter hâline gelir.",
      },
      {
        p: "Ek noktalarında sızdırmazlık kadar mekanik dayanım da önemlidir. Sızdıran bir ek yalnızca verim kaybı yaratmaz; zamanla genişleyerek kopmaya kadar gidebilir.",
      },

      { h2: "Kaldırma kapasitesi nasıl hesaplanır?" },
      {
        p: "Kuyudan çekilecek toplam yük; pompanın ağırlığı, boru hattının ağırlığı, boru içindeki suyun ağırlığı ve kablonun ağırlığından oluşur. Derinlik arttıkça bu kalemler içinde en hızlı büyüyeni boru ve içindeki sudur.",
      },
      {
        p: "Galvaniz borulu derin kuyularda toplam yük yüzlerce kiloya ulaşabilir. Bu nedenle kaldırma ekipmanı seçilirken hesaplanan yükün üzerine güvenlik payı eklenir; sınırda çalışan bir ekipman, çamurlu bir zeminde ya da sıkışma anında yetersiz kalır.",
      },
      {
        p: "Pompa kuyu cidarına sıkışmışsa yük bir anda katlanabilir. Böyle bir durumda kuvvetle çekmek yerine, hafif sağa–sola döndürerek gevşetmek denenir. Zorlama, borunun kopmasına ve pompanın kuyu dibine düşmesine yol açar.",
      },

      { h2: "Ne zaman çıkarmalı?" },
      {
        p: "Zamanlama, işin maliyetini ve riskini belirleyen sessiz bir faktör. Tarımsal sistemlerde sezon ortasında yapılan çıkarma, sulanamayan günler anlamına gelir; aynı işi sezon dışında planlamak hem daha ucuz hem daha rahat olur.",
      },
      {
        ul: [
          "Sezon öncesi kontrol: izolasyon ölçümü ve akım ölçümü yapılır, gerekiyorsa çıkarma planlanır.",
          "Sezon içi acil çıkarma: kaçınılmazsa yedek pompa hazır bulundurulur.",
          "Kış aylarında çıkarma: donma riski nedeniyle hat tahliyesi gerekir.",
          "Yağışlı havada çıkarma: kuyu ağzı çevresi kayganlaşır, ertelenmesi daha güvenlidir.",
        ],
      },
      {
        p: "Yedek pompa bulundurmak, ilk bakışta gereksiz bir yatırım gibi görünse de yoğun kullanılan işletmelerde kendini hızla amorti ediyor. Arıza günü, tamir süresini beklemek yerine sistem birkaç saatte tekrar çalışır hâle geliyor.",
      },

      { h2: "Maliyeti belirleyen kalemler" },
      {
        table: {
          head: ["Kalem", "Etkisi"],
          rows: [
            ["Kuyu derinliği", "Boru sayısı, süre ve ekipman kapasitesi"],
            ["Boru tipi", "Ağırlık, sökme kolaylığı, ek sayısı"],
            ["Erişim", "Aracın kuyuya yanaşabilmesi"],
            ["Sıkışma durumu", "Ek süre ve özel ekipman"],
            ["Yenilenecek parçalar", "Kablo, boru eki, çekvalf, halat"],
            ["Zamanlama", "Sezon içi acil müdahale daha maliyetli"],
          ],
        },
      },
      {
        p: "Bu kalemlerin çoğu keşif sırasında belli olur. Kuyu derinliği, boru tipi ve erişim bilgisi önceden paylaşıldığında, sahaya doğru ekipmanla gelinir ve iş tek günde tamamlanır.",
      },

      { h2: "Kendiniz yapmalı mısınız?" },
      {
        p: "Sığ kuyularda, hafif PE borulu ve küçük güçlü sistemlerde çıkarma işlemi deneyimli bir kişi için yapılabilir. Ancak derin kuyularda toplam yük yüzlerce kiloyu bulur ve kontrolsüz bir kayma ciddi yaralanmaya yol açar.",
      },
      {
        p: "Karar verirken üç soruya bakın: toplam yükü güvenle kaldıracak ekipmanınız var mı, kuyu ağzı güvenliğini sağlayabiliyor musunuz ve bir parça düştüğünde ne yapacağınızı biliyor musunuz? Üçünden birine \"hayır\" diyorsanız iş profesyonele bırakılmalıdır.",
      },
      {
        p: "Elektriksel kontrolleri ise kendiniz yaptırıp sonucu paylaşmanız işi hızlandırır. Arızanın elektriksel mi mekanik mi olduğu önceden bilindiğinde, sahaya gelen ekip doğru ekipmanla gelir ve iş tek seferde biter.",
      },

      { h2: "Yedek parça hazırlığı" },
      {
        p: "Çıkarma öncesi yapılan ölçümler, hangi parçaların gerekeceğini büyük ölçüde belli eder. Bu bilgi olmadan sahaya gidildiğinde iş genelde ikiye bölünür: pompa çıkarılır, parça alınmaya gidilir, ertesi gün geri dönülür.",
      },
      {
        ul: [
          "İzolasyon direnci düşükse: motor veya kablo değişimi ihtimali yüksektir.",
          "Basınç düşüşü varsa: çark ve difüzör takımı hazırlanır.",
          "Boru ekleri paslanmışsa: yedek rakor ve conta bulundurulur.",
          "Kablo kelepçeleri yıpranmışsa: yeni kelepçe hazırlanır.",
          "Emniyet halatı yoksa: bu fırsatta eklenmesi planlanır.",
          "Çekvalf uzun süredir değişmediyse: yedeği getirilir.",
        ],
      },
      {
        p: "Bu hazırlık, tek günlük bir işi iki güne çıkaran gecikmeleri ortadan kaldırıyor. Özellikle sulama sezonunda kaybedilen bir gün, tamir maliyetinin çok üzerinde bir bedele denk geliyor.",
      },

      { h2: "Çıkarma sonrası yapılması gerekenler" },
      {
        ol: [
          "Motor ve kablo izolasyon değerleri kaydedilir.",
          "Çark, difüzör ve süzgeç durumu fotoğraflanır.",
          "Kuyu su seviyesi ve varsa kuyu logu güncellenir.",
          "Pompanın indirildiği yeni derinlik yazılı olarak not edilir.",
          "Kablo ekleri ve kelepçe aralıkları kayda geçirilir.",
          "Bir sonraki kontrol tarihi belirlenir.",
        ],
      },
      {
        p: "Bu kayıtlar bir sonraki arızada teşhis süresini kısaltır. Özellikle tarımsal işletmelerde, sezon içinde kaybedilen her gün doğrudan verime yansıdığı için hazırlıklı olmak somut kazanç sağlıyor.",
      },
    ],
    faqs: [
      {
        q: "Pompayı çıkarmadan arızayı anlamak mümkün mü?",
        a: "Çoğu zaman evet. Pano gerilimi, koruma elemanları, kumanda devresi, sargı dirençleri ve izolasyon direnci ölçüldüğünde arızanın elektriksel mi mekanik mi olduğu netleşir. Bu ölçümler bir saatten kısa sürer ve gereksiz çıkarma işlemlerinin önemli bölümünü ortadan kaldırır.",
      },
      {
        q: "Dalgıç pompayı kaç kişiyle çıkarmak gerekir?",
        a: "En az iki kişi gerekir: biri kaldırma ekipmanını kontrol eder, diğeri boru ve kabloyu yönlendirir. Derin kuyularda toplam yük yüzlerce kiloya çıkabildiği için uygun kapasitede vinç veya caraskal şarttır. Elle çekmek hem tehlikelidir hem boru ve kabloya zarar verir.",
      },
      {
        q: "Pompa kuyu dibinden ne kadar yukarıda olmalı?",
        a: "Genel uygulama kuyu dibinden birkaç metre yukarıdır. Çok aşağıda konumlanan pompa tortu ve kum çeker, çok yukarıda kalan pompa ise dinamik seviye düştüğünde susuz kalır. Kuyu logu ve filtre borusu bilgisi varsa kot kararı tahmine değil veriye dayanır.",
      },
      {
        q: "Emniyet halatı gerçekten gerekli mi?",
        a: "Evet. Boru eki koptuğunda pompanın kuyu dibine düşmesini önleyen tek şey odur. Düşen bir pompayı kuyudan çıkarmak, normal bir çıkarma işleminden çok daha zor ve pahalıdır; bazı durumlarda kuyunun kullanılamaz hâle gelmesine bile yol açar. Paslanmaz halat tercih edilir.",
      },
      {
        q: "Çıkarma sırasında kabloya asılabilir miyim?",
        a: "Hayır. Kablo hiçbir aşamada taşıyıcı eleman olarak kullanılmaz. Kablonun gerilmesi iletkenin kopmasına veya izolasyonun zarar görmesine yol açar; bu hasar hemen görünmez, aylar sonra kaçak akım olarak ortaya çıkar. Yük her zaman boru ve emniyet halatı üzerinden alınır.",
      },
      {
        q: "Pompa çıktıktan sonra ne kadar sürede geri indirilmeli?",
        a: "Onarım veya değişim tamamlandıktan hemen sonra indirilmesi en iyisidir. Kuyu uzun süre açık kaldığında içine yabancı madde düşme riski artar. Zorunlu bekleme varsa kuyu ağzı sızdırmaz bir kapakla kapatılmalı ve çevresi güvenliğe alınmalıdır.",
      },
      {
        q: "Çıkardığım pompa tamir mi edilmeli yenisi mi alınmalı?",
        a: "Karar; motorun durumu, çark aşınması ve pompanın yaşına bağlıdır. Sargı yanmış ama gövde ve hidrolik kısım sağlamsa sarım mantıklı olabilir. Çark ciddi aşınmışsa sarım sonrası performans yine düşük kalır. Ölçüm sonuçları ikisi arasındaki farkı net biçimde gösterir.",
      },
      {
        q: "Kuyu logu nedir, neden saklanmalı?",
        a: "Kuyu açılırken hangi derinlikte hangi zeminin geçildiğini, filtre borusunun konumunu ve statik su seviyesini gösteren kayıttır. Pompa kotu, çekilebilecek debi ve kum riski bu belgeyle çok daha isabetli belirlenir. Kaybedilmesi hâlinde her karar tahmine dayanmak zorunda kalır.",
      },
    ],
    related: ["dalgic-pompa-calismiyor", "kuyu-suyu-kumlu-geliyor", "dalgic-pompa-kablo-kesiti"],
  },

  {
    slug: "kuru-calisma-korumasi",
    title: "Kuru çalışma koruması: pompayı yakan hatayı önleyen elemanlar",
    category: "Pompa",
    published: "2026-07-29",
    reading: 9,
    metaTitle: "Kuru Çalışma Koruması Nedir? Seçim ve Kurulum",
    metaDesc:
      "Seviye elektrodu, şamandıra, basınç ve akım izlemeli koruma: hangisi nerede kullanılır? Kuru çalışmanın pompaya verdiği zarar ve önleme yöntemleri.",
    keywords: [
      "kuru çalışma koruması",
      "seviye elektrodu",
      "şamandıra şalteri",
      "pompa koruma rölesi",
      "susuz çalışma",
    ],
    excerpt:
      "En sık gördüğümüz pompa arızası kuru çalışma, en kolay önlenen arıza da yine o. Pompanın maliyetinin küçük bir yüzdesi, bu riski tamamen ortadan kaldırıyor.",
    services: ["hidrofor-pompa-sistemleri", "elektrik-panosu", "tarimsal-sulama-sistemleri"],
    intro:
      "Bir pompa için su, taşıdığı akışkandan ibaret değil; aynı zamanda soğutucu ve yağlayıcı. Su kesildiğinde salmastra birkaç dakika içinde zarar görür, çark ısınır ve motor sargısı yanabilir. İşin acı tarafı, bunu önleyen elemanların hepsi pompanın maliyetinin çok küçük bir bölümünü oluşturuyor.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Kuru çalışma koruması, emişte su kalmadığında pompayı otomatik olarak durduran elemandır.</strong> Depolu sistemlerde seviye elektrodu veya şamandıra, kuyularda akım izlemeli koruma ve seviye probu, hat sistemlerinde düşük basınç anahtarı kullanılır.",
      },
      {
        p: "Termik röle bu görevi yapmaz. Pompa susuz çalışırken yük azaldığı için akım da düşer; termik hiçbir şey algılamaz ve müdahale etmez. Bu ayrım, sahada en çok yanlış bilinen konulardan biri.",
      },

      { h2: "Susuz çalışan pompaya ne olur?" },
      {
        p: "Mekanik salmastra, iki hassas yüzeyin arasında ince bir su filmiyle çalışır. Su kesildiğinde bu film kaybolur, yüzeyler kuru sürtünmeye geçer ve saniyeler içinde ısınır. Isınan yüzey çatlar; salmastra bir daha eski sızdırmazlığını sağlayamaz.",
      },
      {
        p: "Aynı anda motor da soğutmasını kaybeder. Dalgıç motorlar çevrelerindeki suyla soğur; su seviyesi motorun altına düştüğünde sıcaklık hızla yükselir ve sargı yalıtımı bozulur.",
      },
      {
        p: "Plastik parçalar bulunan pompalarda hasar daha da hızlı olur. Difüzör ve fan gibi elemanlar deforme olur; pompa suya kavuştuğunda bile eski verimini bir daha vermez.",
      },

      { h2: "Hangi koruma nerede kullanılır?" },
      {
        table: {
          head: ["Koruma tipi", "Nerede", "Nasıl çalışır"],
          rows: [
            ["Seviye elektrodu", "Depo, sarnıç", "Su iletkenliğiyle seviye algılar"],
            ["Şamandıra şalteri", "Depo, kuyu ağzı", "Mekanik olarak seviyeyle hareket eder"],
            ["Düşük basınç anahtarı", "Emiş hattı, şebeke bağlantısı", "Basınç eşiğin altına inince keser"],
            ["Akım izlemeli röle", "Kuyu, dalgıç pompa", "Akım düşüşünden susuz çalışmayı anlar"],
            ["Sürücü içi koruma", "İnvertörlü sistemler", "Parametre ile eşik tanımlanır"],
            ["Seviye probu", "Derin kuyu", "Belirli kotta su yoksa durdurur"],
          ],
        },
      },
      {
        p: "Çoğu sistemde tek bir eleman yeterlidir, ancak kritik uygulamalarda iki farklı yöntem birlikte kullanılır. Örneğin depolu bir apartman sisteminde hem elektrot hem düşük basınç anahtarı bulunması, birinin arızalanması durumunda yedek koruma sağlar.",
      },

      { h2: "Seviye elektrodu nasıl kurulur?" },
      {
        p: "Elektrotlu sistemde depoya farklı boylarda üç iletken sarkıtılır: ortak, alt seviye ve üst seviye. Kontrol rölesi bu elektrotlar arasındaki iletkenliği ölçerek suyun varlığını anlar.",
      },
      {
        ul: [
          "Alt elektrot, emiş ağzının üzerinde kalacak kotta konumlandırılır.",
          "Elektrotlar birbirine ve depo cidarına temas etmemelidir.",
          "Elektrot uçları zamanla kireçlenir; yıllık temizlik gerekir.",
          "Çok yumuşak sularda iletkenlik düşük olabilir, röle hassasiyeti ayarlanır.",
          "Kablolar depo dışında, neme dayanıklı bir kutuda toplanır.",
        ],
      },
      {
        p: "Yanlış konumlandırılmış bir elektrot, korumanın hiç olmamasından daha kötü sonuç verebilir: sistem kendini korunmuş sanır ve düzenli kontrol yapılmaz.",
      },

      { h2: "Şamandıra mı, elektrot mu?" },
      {
        p: "Şamandıra mekaniktir; suyla birlikte yükselip alçalan bir yüzücü içindeki kontağı açar veya kapatır. Basit ve ucuzdur, elektriksel iletkenliğe bağlı değildir. Buna karşılık hareketli parçası vardır ve zamanla takılabilir.",
      },
      {
        p: "Elektrotta hareketli parça yoktur, arıza olasılığı düşüktür; ancak kireç ve suyun iletkenliği performansını etkiler. Depoda köpük veya yağ tabakası varsa yanlış okuma yapabilir.",
      },
      {
        p: "Uygulamada seçim depo tipine göre yapılır: küçük ve kolay erişilen depolarda şamandıra pratiktir; büyük, kapalı ve erişimi zor depolarda elektrot daha az bakım ister.",
      },

      { h2: "Kuyularda akım izlemeli koruma" },
      {
        p: "Dalgıç pompalarda seviye ölçmek her zaman kolay değildir. Bu nedenle yaygın yöntem, motorun çektiği akımı izlemektir. Pompa susuz kaldığında yük azalır, akım belirgin biçimde düşer; röle bunu algılayıp pompayı durdurur.",
      },
      {
        p: "Ayar, pompanın normal çalışma akımı ölçülerek yapılır. Eşik çok yakın seçilirse gereksiz duruşlar olur; çok uzak seçilirse koruma geç devreye girer. Devreye alma sırasında yapılan doğru ayar, sonraki yılların sorunsuz geçmesini sağlar.",
      },
      {
        p: "Bu korumaların çoğunda bir de bekleme süresi bulunur. Pompa durduktan sonra kuyunun kendini toplaması için belirli bir süre beklenir ve ardından otomatik olarak tekrar denenir. Süre çok kısa tutulursa pompa aç–kapa döngüsüne girer.",
      },

      { h2: "Kuru çalışma neden başlar?" },
      {
        ul: [
          "Şebeke kesintisinde deponun boşalması ve kimsenin fark etmemesi.",
          "Kuyuda dinamik su seviyesinin çekim nedeniyle pompanın altına inmesi.",
          "Emiş hattında hava sızdıran bir bağlantı bulunması.",
          "Dip klepesinin (ayak vanası) tutmaması ve hattın boşalması.",
          "Pislik tutucunun tıkanarak emişi kesmesi.",
          "Sulama sisteminde ana vananın kapalı unutulması.",
        ],
      },
      {
        p: "Bu nedenlerin çoğu tesadüf değil, tekrar eden durumlar. Kesintinin sık yaşandığı bölgelerde koruma ihtiyacı çok daha belirgin; çünkü depo boşaldığında sistem kendi başına yanlış bir şey yapmaya devam eder.",
      },

      { h2: "Depolu sistemde koruma zinciri" },
      {
        p: "Depolu bir binada koruma tek bir elemandan ibaret değildir; birbirini tamamlayan küçük bir zincir kurulur. Zincirin her halkası farklı bir senaryoya karşı görev yapar.",
      },
      {
        ol: [
          "Depo giriş şamandırası: şebekeden dolumu yönetir, taşmayı önler.",
          "Alt seviye elektrodu: depo boşaldığında pompayı durdurur.",
          "Düşük basınç anahtarı: emiş hattı boşaldığında yedek koruma sağlar.",
          "Kuru çalışma rölesi: pompanın akımını izleyerek son çare olarak devreye girer.",
          "Sesli veya ışıklı uyarı: durumu görünür kılar, sorun fark edilmeden büyümez.",
        ],
      },
      {
        p: "Uyarı elemanı çoğu kurulumda atlanıyor ama işlevi büyük. Pompa durduğunda kimse fark etmezse, bina susuz kalır ve arıza çağrısı ancak saatler sonra gelir. Pano üzerindeki basit bir ikaz lambası bu gecikmeyi ortadan kaldırıyor.",
      },

      { h2: "Sulama sistemlerinde kuru çalışma" },
      {
        p: "Sulamada kuru çalışma riski, konut sistemlerinden daha yüksektir. Sistem çoğu zaman programlıdır ve kimsenin başında olmadığı saatlerde çalışır. Kaynak kuruduğunda ya da ana vana kapalı kaldığında pompa saatlerce boşa çalışabilir.",
      },
      {
        p: "Bu nedenle otomatik sulama sistemlerinde koruma, kontrol ünitesiyle birlikte kurgulanır. Pompa rölesi, koruma devresi üzerinden beslenir; koruma attığında hem pompa durur hem program iptal olur.",
      },
      {
        p: "İkinci bir önlem, sulama programını gündüz saatlerine almak. Gece yapılan sulamanın buharlaşma açısından avantajı var; ancak arızanın fark edilmesi açısından dezavantajlı. İkisi arasındaki denge, sistemin izlenebilirliğine göre kurulur.",
      },

      { h2: "Elektrik kesintisinden sonra ne olmalı?" },
      {
        p: "Kesinti sonrası enerji geldiğinde sistemin ne yapacağı önceden belirlenmelidir. Otomatik devreye girme, kullanıcı açısından konforludur; fakat depo hâlâ boşsa pompa yine susuz çalışmaya başlar.",
      },
      {
        p: "Doğru kurgu, korumanın enerji geldiğinde de aktif olması ve pompanın ancak yeterli su varken çalışmasıdır. Bunun için koruma rölesinin kendi kendini sıfırlamayan tipte seçilmesi ya da gecikmeli yeniden başlatma ayarı yapılması gerekir.",
      },
      {
        p: "Şebeke kesintisinin sık yaşandığı bölgelerde bu detay belirleyici. Kesinti sırasında boşalan bir depo, enerji geldiği anda korumasız bir sistemi doğrudan arızaya sürüklüyor.",
      },

      { h2: "Yeni kurulumda planlama" },
      {
        p: "Koruma, sisteme sonradan eklenen bir aksesuar değil; tasarımın parçası olarak planlanır. Pompa seçilirken hangi koruma tipinin kullanılacağı, nereye konumlanacağı ve nasıl besleneceği birlikte kararlaştırılır.",
      },
      {
        p: "Bu yaklaşım hem maliyeti düşürür hem montajı kolaylaştırır. Pano kurulurken bırakılan bir modül yeri, sonradan yapılacak ilaveyi birkaç dakikalık işe indiriyor.",
      },
      {
        p: "Devreye alma sırasında korumanın çalıştığının test edilip kayda geçirilmesi de kurulumun son adımı olmalı. Test edilmemiş bir koruma, takılmış ama devrede olmayan bir koruma olabilir.",
      },

      { h2: "Korumanın test edilmesi" },
      {
        p: "Takılı olan bir koruma, çalıştığı doğrulanmadıkça koruma sayılmaz. Yıllık bakımda basit bir test yapılır: elektrot veya şamandıra devresi kontrollü olarak açılır ve pompanın durduğu gözlenir.",
      },
      {
        ol: [
          "Sistemi normal çalışma konumuna getirin.",
          "Koruma devresini üretici talimatına uygun şekilde simüle edin.",
          "Pompanın kaç saniye içinde durduğunu ölçün.",
          "Bekleme süresi sonunda otomatik yeniden denemeyi gözleyin.",
          "Sonucu bakım kaydına yazın.",
        ],
      },
      {
        p: "Test sırasında pompanın durmadığı görülürse, sorun genelde elektrot kireçlenmesi, kopmuş bir kumanda kablosu veya devre dışı bırakılmış bir köprüdür. Sonuncusu özellikle dikkat çekicidir: gereksiz duruşlardan bunalan biri, korumayı köprüleyerek devre dışı bırakabiliyor.",
      },

      { h2: "Hidrofor sistemlerinde kuru çalışma" },
      {
        p: "Kuru çalışma yalnızca kuyu sistemlerinin sorunu değil. Şebekeden doğrudan beslenen bir hidroforda su kesildiğinde pompa aynı şekilde susuz çalışır ve aynı hasarı görür.",
      },
      {
        p: "Bu nedenle şebeke kesintisinin sık yaşandığı bölgelerde hidrofor emişine düşük basınç anahtarı konulması öneriliyor. Basınç belirlenen eşiğin altına indiğinde pompa durur ve su geldiğinde tekrar devreye girer.",
      },
      {
        p: "Depolu sistemlerde ise koruma deponun içindedir. Depo boşaldığında pompayı durduran seviye kontrolü, bu sistemlerde en kritik güvenlik elemanı; kesintide boşalan depo, korumasız bir pompayı birkaç saat içinde bitirir.",
      },

      { h2: "Gereksiz duruşlar yaşanıyorsa" },
      {
        p: "Koruma sık sık boş yere devreye giriyorsa çözüm onu iptal etmek değil, nedenini bulmaktır. En sık karşılaşılan üç neden şunlar:",
      },
      {
        table: {
          head: ["Belirti", "Muhtemel neden", "Çözüm"],
          rows: [
            ["Sulama saatlerinde sık duruş", "Kuyu verimi aşılıyor", "Debiyi düşür, çalışma programını böl"],
            ["Sabaha karşı duruş", "Şebeke gerilimi veya seviye düşüşü", "Gerilim ölçümü, seviye kontrolü"],
            ["Dolu depoda duruş", "Elektrot kireçlenmesi", "Elektrot temizliği, hassasiyet ayarı"],
            ["Yeniden başlamıyor", "Bekleme süresi çok uzun ayarlı", "Parametre düzeltmesi"],
          ],
        },
      },
      {
        quote:
          "Korumayı köprüleyerek çözülen her gereksiz duruş, birkaç ay sonra çok daha pahalı bir motor arızası olarak geri geliyor.",
      },

      { h2: "Koruma varken pompa neden yandı?" },
      {
        p: "Koruma takılı olduğu hâlde arıza yaşanan sistemlerde neden genelde dört başlıktan birinde çıkıyor. Hepsi kurulum veya bakım kaynaklı; ürünün kendisiyle ilgisi yok.",
      },
      {
        table: {
          head: ["Neden", "Nasıl anlaşılır"],
          rows: [
            ["Koruma köprülenmiş", "Kumanda devresinde kısa devre köprüsü görülür"],
            ["Elektrot yanlış kotta", "Depo boşalırken koruma geç devreye girer"],
            ["Eşik yanlış ayarlanmış", "Akım düşüşüne rağmen röle çekmez"],
            ["Kumanda kablosu kopuk", "Koruma devresi sürekli kapalı görünür"],
          ],
        },
      },
      {
        p: "Bu dördü, yıllık testle kolayca yakalanır. Testin atlanması, korumanın varlığına güvenip riski görünmez hâle getiriyor; sistem korunuyor sanılırken aslında yıllardır açıkta çalışıyor olabiliyor.",
      },

      { h2: "Maliyet karşılaştırması" },
      {
        p: "Kuru çalışma koruması, bir pompa sisteminin en ucuz bileşenlerinden biridir. Buna karşılık önlediği arıza; motor sarımı, salmastra değişimi, pompanın kuyudan çıkarılması ve kaybedilen kullanım günleri anlamına gelir.",
      },
      {
        p: "Tarımsal sulamada hesap daha da netleşir. Sezon ortasında üç gün duran bir sulama, sadece tamir masrafı değil; verim kaybı olarak da geri döner. Koruma elemanının bedeli bu tablonun yanında ihmal edilebilir kalıyor.",
      },
      {
        p: "Bu yüzden yeni kurulumlarda kuru çalışma korumasını pazarlık konusu yapmıyoruz. Sistem tasarımının bir parçası olarak, seviye kontrolü ve gerilim koruması ile birlikte planlanıyor.",
      },
    ],
    faqs: [
      {
        q: "Termik röle kuru çalışmayı algılar mı?",
        a: "Hayır. Pompa susuz çalışırken yük azalır ve motorun çektiği akım düşer; termik röle ise aşırı akımda devreye girer. Dolayısıyla kuru çalışma sırasında termik hiçbir şey algılamaz. Bu iki koruma farklı arızalara karşıdır ve birbirinin yerine geçmez.",
      },
      {
        q: "Hangi koruma tipi en güvenilir?",
        a: "Uygulamaya bağlıdır. Depolu sistemlerde seviye elektrodu, kuyularda akım izlemeli koruma yaygın ve güvenilirdir. Kritik sistemlerde iki farklı yöntemin birlikte kullanılması tercih edilir; biri arızalandığında diğeri devreye girer ve tek nokta arızası riski ortadan kalkar.",
      },
      {
        q: "Koruma sık sık boş yere atıyor, iptal edebilir miyim?",
        a: "İptal etmek en riskli çözümdür. Sık atmanın nedeni genelde elektrot kireçlenmesi, yanlış eşik ayarı veya kuyu veriminin aşılmasıdır. Bunlar düzeltildiğinde gereksiz duruşlar biter. Korumayı köprülemek, birkaç ay sonra motor arızası olarak çok daha pahalıya mal olur.",
      },
      {
        q: "Kuyuda su seviyesi nasıl izlenir?",
        a: "Seviye probu veya elektrot ile doğrudan ölçüm yapılabilir; alternatif olarak motorun akımı izlenerek dolaylı tespit yapılır. Akım izlemeli yöntem daha yaygındır çünkü kuyu içine ek donanım indirmeyi gerektirmez. Doğru eşik, devreye alma sırasında ölçümle belirlenir.",
      },
      {
        q: "Bekleme süresi ne kadar olmalı?",
        a: "Kuyunun kendini toplama hızına göre belirlenir. Verimi düşük kuyularda süre uzun tutulur; hızlı beslenen kuyularda kısa süre yeterlidir. Süre çok kısa ayarlandığında pompa aç–kapa döngüsüne girer ve her denemede yeniden zorlanır. Devreye alma sırasında gözlemle ayarlanmalıdır.",
      },
      {
        q: "Depo dolu olduğu hâlde koruma neden atıyor?",
        a: "En sık neden elektrot uçlarının kireçlenmesidir; iletkenlik ölçülemez hâle gelir ve röle suyu göremez. İkinci neden suyun iletkenliğinin çok düşük olmasıdır. Elektrot temizliği ve röle hassasiyet ayarı çoğu durumda sorunu çözer. Kablo kopukluğu da kontrol edilmelidir.",
      },
      {
        q: "İnvertörlü sistemlerde ayrı koruma gerekir mi?",
        a: "Çoğu sürücü akım izlemeli kuru çalışma koruması içerir ve doğru parametrelendiğinde yeterlidir. Ancak depolu sistemlerde seviye şalteriyle desteklemek daha güvenlidir. Sürücü parametresi yalnızca elektriksel bir eşik izler; deponun gerçekten boş olup olmadığını doğrudan görmez.",
      },
      {
        q: "Koruma çalışıyor mu, nasıl anlarım?",
        a: "Yıllık bakımda test edilmelidir. Koruma devresi üretici talimatına uygun şekilde simüle edilir ve pompanın durduğu gözlenir. Durmuyorsa elektrot kirlenmesi, kopuk kumanda kablosu veya devre dışı bırakılmış bir köprü aranır. Test sonucu bakım kaydına yazılmalıdır.",
      },
    ],
    related: ["dalgic-pompa-calismiyor", "su-deposu-hidrofor-birlikte", "dalgic-pompa-kablo-kesiti"],
  },

  {
    slug: "kuyu-suyu-kumlu-geliyor",
    title: "Kuyu suyu neden kumlu gelir?",
    category: "Pompa",
    published: "2026-07-31",
    reading: 9,
    metaTitle: "Kuyu Suyu Kumlu Geliyor | Nedenleri ve Çözümü",
    metaDesc:
      "Kuyudan kum gelmesinin nedenleri: pompa kotu, aşırı çekim, filtre borusu ve kuyu geliştirme. Kum ayırıcı seçimi ve tesisata verdiği zararlar.",
    keywords: [
      "kuyu suyu kumlu",
      "kuyudan kum geliyor",
      "kum ayırıcı",
      "kuyu geliştirme",
      "pompa aşınması",
    ],
    excerpt:
      "Kumlu su sadece bulanık akan bir su değil; çarkı, armatürleri ve damlatıcıları içeriden aşındıran sessiz bir masraf kalemi.",
    services: ["hidrofor-pompa-sistemleri", "tarimsal-sulama-sistemleri", "su-deposu-temizligi"],
    intro:
      "Kuyudan gelen suda kum görmek çoğu kişiye normal gelir; \"kuyu suyu böyle olur\" denip geçilir. Halbuki sağlıklı çalışan bir kuyudan sürekli kum gelmez. Kum, kuyunun ya da pompanın bir şeyi yanlış yaptığını söyler ve bunun bedelini önce pompa, sonra tesisat öder.",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "<strong>Sürekli kum gelmesinin başlıca nedenleri şunlardır: pompanın kuyu dibine fazla yakın konumlandırılması, kuyunun verebileceğinden fazla su çekilmesi, filtre borusu ve çakıl zarfındaki eksiklik ve kuyu geliştirmesinin yetersiz yapılmış olması.</strong>",
      },
      {
        p: "Yeni açılan bir kuyudan ilk günlerde kum gelmesi beklenir ve zamanla azalır. Aylar sonra hâlâ kum geliyorsa bu artık normal değil; kuyu veya pompa tarafında müdahale gerekir.",
      },

      { h2: "Kum nereden geliyor?" },
      {
        p: "Kuyu, çevresindeki zeminden su çeker. Suyun geçtiği noktada filtre borusu ve etrafındaki çakıl zarfı, ince taneleri tutup suyu geçirecek şekilde tasarlanır. Bu tasarım doğru yapılmadığında ince taneler suyla birlikte kuyuya taşınır.",
      },
      {
        p: "İkinci kaynak kuyu dibinde biriken tortudur. Pompa çok aşağıda konumlandırılmışsa, emiş bu birikintiyi doğrudan çeker. Bu durumda kuyunun kendisi sağlam olsa bile su kumlu gelir.",
      },
      {
        p: "Üçüncü kaynak kaplama borusundaki hasardır. Korozyon veya deformasyonla açılan bir noktadan zemin malzemesi kuyuya dolabilir. Bu, en zor düzeltilen durumdur ve genelde kuyu içi kamera incelemesiyle tespit edilir.",
      },

      { h2: "Aşırı çekimin rolü" },
      {
        p: "Her kuyunun bir verimi vardır: birim zamanda güvenle çekilebilecek su miktarı. Bu sınır aşıldığında kuyu çevresindeki akış hızlanır ve normalde yerinde kalan ince taneler suyla birlikte sürüklenir.",
      },
      {
        p: "Belirtisi tipiktir: pompa çalışmaya başladıktan bir süre sonra su bulanıklaşır, durunca berraklaşır. Sulama sezonunda kumun artması, kışın azalması da aynı nedene işaret eder.",
      },
      {
        p: "Çözüm çoğu zaman daha güçlü pompa değil, daha ölçülü çekimdir. Debinin düşürülmesi veya sulamanın gün içinde bölünmesi, kum sorununu tek başına belirgin biçimde azaltabiliyor.",
      },

      { h2: "Pompa kotu doğru mu?" },
      {
        table: {
          head: ["Durum", "Sonuç"],
          rows: [
            ["Pompa kuyu dibine çok yakın", "Tortu ve kum çekilir, çark hızla aşınır"],
            ["Pompa filtre borusunun altında", "Motor soğutması ve akış düzeni bozulur"],
            ["Pompa çok yukarıda", "Dinamik seviye düşünce susuz kalır"],
            ["Pompa doğru kotta", "Kum minimum, soğutma yeterli"],
          ],
        },
      },
      {
        p: "Doğru kot kararı kuyu logu ile verilir. Log yoksa, dinamik seviye ölçümü yapılarak güvenli bir aralık belirlenir. Pompanın birkaç metre yukarı alınması, bazı kuyularda kum sorununu tek başına çözüyor.",
      },
      {
        p: "Kot değişikliği pompanın çıkarılmasını gerektirdiği için, aynı işlemde emniyet halatı, kablo kelepçeleri ve boru ekleri de gözden geçirilmelidir. Tek seferde yapılan iş, ayrı ayrı yapılan işlerden hem ucuz hem hızlı olur.",
      },

      { h2: "Kuyu geliştirme nedir?" },
      {
        p: "Kuyu açıldıktan sonra yapılan geliştirme işlemi, filtre çevresindeki ince malzemeyi kontrollü şekilde dışarı almayı amaçlar. Doğru yapıldığında kuyu temiz su verir ve verimi artar; eksik yapıldığında ince taneler yıllarca gelmeye devam eder.",
      },
      {
        p: "Geliştirme yetersizse sonradan da yapılabilir. Uygulanan yönteme göre kuyu içinde basınçlı hava, mekanik fırçalama veya kontrollü pompaj kullanılır. İşlem sonrası su berraklığı belirgin şekilde iyileşir.",
      },
      {
        p: "Bu işlemi yaptırmadan pompa değiştirmek çoğu zaman para kaybı. Kum kaynağı yerinde durduğu sürece yeni pompa da aynı şekilde aşınır.",
      },

      { h2: "Kum ne kadar zarar veriyor?" },
      {
        ul: [
          "Pompa çarkı ve difüzörü aşınır; basınç zamanla düşer.",
          "Mekanik salmastra çizilir, sızdırma başlar.",
          "Çekvalf ve vanalar tam kapanmaz.",
          "Damlama sulamada damlatıcılar tıkanır.",
          "Armatür ve batarya süzgeçleri sürekli tıkanır.",
          "Depoda tortu birikir, temizlik sıklığı artar.",
          "Beyaz eşya ve kombi gibi cihazların ömrü kısalır.",
        ],
      },
      {
        p: "Bu kalemlerin hiçbiri tek başına dikkat çekmez; hepsi birlikte, birkaç yıla yayılmış sessiz bir maliyet oluşturur. Kumu kaynağında azaltmak, bu listenin tamamını aynı anda hafifletir.",
      },

      { h2: "Müdahale sırası" },
      {
        p: "Kum sorununda doğru sıra, en ucuz ve en hızlı adımdan başlar. Pahalı müdahaleye geçmeden önce basit nedenlerin elenmesi, çoğu sistemde sorunu zaten çözüyor.",
      },
      {
        ol: [
          "Kum miktarı ölçülür ve kayda geçirilir; gerçekten arttı mı, yoksa hep bu seviyede miydi?",
          "Çekim debisi düşürülüp sonuç gözlenir; kum azalıyorsa aşırı çekim vardır.",
          "Dinamik su seviyesi ölçülür, pompanın kotu değerlendirilir.",
          "Kuyu çıkışına kum ayırıcı takılarak tesisat korunur.",
          "Kuyu geliştirme veya temizlik yapılır.",
          "Sonuç alınamazsa kuyu içi kamera incelemesi planlanır.",
        ],
      },
      {
        p: "İlk üç adım genelde bir gün içinde tamamlanır ve maliyet gerektirmez. Doğrudan altıncı adımdan başlamak, çoğu zaman gereksiz bir masraf olarak kalıyor.",
      },

      { h2: "Kum ayırıcı ve filtre seçenekleri" },
      {
        table: {
          head: ["Çözüm", "Nerede", "Not"],
          rows: [
            ["Siklon (santrifüj) kum ayırıcı", "Kuyu çıkışı", "Ağır taneleri ayırır, basınç kaybı düşük"],
            ["Elek filtre", "Hat üzerinde", "İnce tanede tıkanır, sık temizlik ister"],
            ["Disk filtre", "Sulama hattı", "Daha büyük tutma kapasitesi"],
            ["Kum–çakıl filtresi", "Yüksek debili sistemler", "Organik yük ve ince tanede etkili"],
            ["Çökeltme havuzu / depo", "Sulama sistemleri", "Basit ve etkili, alan ister"],
          ],
        },
      },
      {
        p: "Kuyu çıkışına konan siklon ayırıcı, en yaygın ve pratik çözümdür. Ağır taneleri suyun dönüş hareketiyle ayırır ve altındaki hazneye biriktirir. Haznenin düzenli boşaltılması, işin devamlılığı için şart.",
      },
      {
        p: "Filtre seçimi tek başına yeterli değildir; nereye konulduğu da önemlidir. Pompadan sonra konan filtre pompayı korumaz, sadece tesisatı korur. Pompayı korumanın yolu kuyu tarafındaki nedeni gidermekten geçer.",
      },

      { h2: "Ne kadar kum normal?" },
      {
        p: "Pratik bir kontrol yöntemi var: temiz bir kap suyla doldurulup birkaç dakika bekletilir. Kabın dibinde gözle görülür bir tabaka oluşuyorsa miktar yüksektir. Berrak kalan suda ise sorun yoktur.",
      },
      {
        p: "Kontrolü sezon boyunca aynı noktada, aynı yöntemle tekrarlamak daha anlamlı. Mutlak miktardan çok, miktarın artması veya azalması bilgi verir; artış varsa kuyu tarafında bir şey değişiyor demektir.",
      },
      {
        p: "Sulama sistemlerinde ikinci bir gösterge damlatıcılar: aynı hatta düzensiz akış başladıysa ve filtre daha sık tıkanıyorsa, kum miktarı artmış olabilir.",
      },

      { h2: "Kuyu içi kamera incelemesi" },
      {
        p: "Kum kaynağı yüzeyden anlaşılamıyorsa, kuyu içi kamera ile inceleme yapılır. Kamera; kaplama borusundaki hasarı, filtre borusunun durumunu ve dipteki tortu seviyesini doğrudan gösterir.",
      },
      {
        p: "Bu inceleme özellikle tekrar eden kum sorunlarında zaman kazandırır. Pompayı çıkarıp indirerek deneme yapmak yerine, sorunun hangi derinlikte olduğu görülür ve müdahale doğrudan oraya yapılır.",
      },
      {
        p: "İnceleme kayıtları saklanmalı. Birkaç yıl sonra yapılan ikinci çekim, ilkiyle karşılaştırıldığında kuyunun nasıl değiştiğini gösterir; tortu birikme hızı ve boru durumundaki değişim böylece izlenebilir hâle gelir.",
      },

      { h2: "Kumlu suda pompa seçimi" },
      {
        p: "Kum tamamen ortadan kaldırılamıyorsa, pompa tarafında da tedbir alınır. Aşınmaya dayanıklı malzemeden üretilmiş çark ve difüzör kullanan modeller, kumlu sularda belirgin şekilde uzun ömür gösterir.",
      },
      {
        ul: [
          "Paslanmaz veya teknik plastik çarklı modeller aşınmaya daha dayanıklıdır.",
          "Kum toleransı üretici kataloglarında belirtilir; seçim buna göre yapılır.",
          "Pompanın çalışma noktası, katalogdaki verimli bölgede tutulmalıdır.",
          "Emiş süzgeci uygun göz açıklığında seçilir.",
          "Yıllık kontrol aralığı, temiz su çeken sistemlere göre kısaltılır.",
        ],
      },
      {
        p: "Bu seçimler kum sorununu çözmez, etkisini hafifletir. Kalıcı çözüm her zaman kaynakta: kuyu geliştirme, doğru pompa kotu ve ölçülü çekim üçlüsü.",
      },

      { h2: "Ölçüm ve kayıt tutmak" },
      {
        table: {
          head: ["Ne ölçülür", "Ne sıklıkla", "Ne işe yarar"],
          rows: [
            ["Kap testiyle kum miktarı", "Ayda bir", "Artış eğilimini gösterir"],
            ["Statik ve dinamik su seviyesi", "Sezon başı ve sonu", "Aşırı çekimi ortaya çıkarır"],
            ["Pompa çıkış basıncı", "Sezon başı", "Çark aşınmasını erken yakalar"],
            ["Motor akımı", "Sezon başı", "Mekanik zorlanmayı gösterir"],
            ["Filtre temizlik sıklığı", "Sürekli", "Kum yükündeki değişimi yansıtır"],
          ],
        },
      },
      {
        p: "Bu beş satırlık kayıt, birkaç yıl tutulduğunda kuyunun karakterini ortaya koyar. Sorun büyümeden önce eğilimi görmek, acil müdahaleyi planlı bakıma çevirmenin en pratik yolu.",
      },

      { h2: "Kum tesisata girdiyse" },
      {
        p: "Kaynakta önlem alınana kadar tesisata giren kumun temizlenmesi gerekir. Aksi hâlde birikinti hatta kalır ve önlem alındıktan sonra bile musluklardan gelmeye devam eder.",
      },
      {
        ul: [
          "Musluk perlatörleri sökülüp temizlenir.",
          "Armatür ve batarya süzgeçleri kontrol edilir.",
          "Ana filtre kartuşu değiştirilir.",
          "Depo varsa tabanı temizlenir.",
          "Hatlar uçlardan bir süre akıtılarak yıkanır.",
          "Sulama sistemlerinde lateral uçları açılıp basınçla temizlenir.",
        ],
      },
      {
        p: "Bu temizlik yapılmadan \"kum sorunu çözüldü mü\" sorusuna cevap verilemez. Hattaki eski birikinti, yeni gelen kumla karışır ve müdahalenin işe yarayıp yaramadığı anlaşılamaz.",
      },

      { h2: "Depolu sistemlerde ne yapılmalı?" },
      {
        p: "Kuyudan gelen su doğrudan kullanılmıyor, önce depoya alınıyorsa deponun kendisi bir çökeltme havuzu gibi çalışır. Ağır taneler dibe çöker ve tesisata daha temiz su gider.",
      },
      {
        p: "Bunun bedeli deponun daha sık temizlenmesidir. Emiş ağzının depo tabanından birkaç santim yukarıda olması, çöken tortunun tekrar emilmesini engeller; bu küçük detay depolu sistemlerde en çok fark yaratan uygulamalardan biri.",
      },
      {
        p: "Depo temizliği ihmal edildiğinde biriken tortu zamanla emiş seviyesine yaklaşır ve sistem yeniden kumlu su basmaya başlar. Yıllık temizlik takvimi bu yüzden önemli.",
      },

      { h2: "Kum mu, kireç mi, tortu mu?" },
      {
        p: "Suyla gelen her katı madde kum değildir ve çözümleri de aynı değil. Ayrımı yapmak, doğru müdahaleyi seçmenin ilk adımı.",
      },
      {
        table: {
          head: ["Görünüm", "Muhtemel madde", "Kaynağı"],
          rows: [
            ["Sert, taneli, dibe hızlı çöken", "Kum", "Kuyu, filtre borusu, dip tortusu"],
            ["Beyaz, pütürlü, kaynatınca artan", "Kireç", "Suyun sertliği"],
            ["Kırmızı–kahve renkli", "Demir oksit", "Boru korozyonu veya suyun demir içeriği"],
            ["Yeşilimsi, kaygan", "Alg ve organik yük", "Açık depo, güneş alan hat"],
            ["Siyah, yumuşak", "Manganez veya biyofilm", "Su kalitesi, durgun hat"],
          ],
        },
      },
      {
        p: "Kesin ayrım için su analizi yaptırmak en doğrusu. Analiz sonucu; hem filtre seçimini hem gerekirse yumuşatma veya arıtma kararını sağlam bir zemine oturtur.",
      },

      { h2: "Malatya'daki kuyularda sık karşılaştığımız tablo" },
      {
        p: "Bölgedeki tarımsal kuyularda kum sorunu genelde iki nedenden çıkıyor: sulama sezonunda kuyunun verebileceğinden fazla su çekilmesi ve pompanın zamanla kuyu dibine yakın kotta kalması.",
      },
      {
        p: "İkincisi ilk bakışta tuhaf gelir ama sık yaşanıyor: yıllar içinde kuyu dibinde tortu birikiyor, pompanın kotu değişmediği hâlde tortuya olan mesafe azalıyor. Kuyu temizliği yapılmadığında bu mesafe her yıl biraz daha kısalıyor.",
      },
      {
        p: "Sezon öncesi yapılan bir kuyu kontrolü, dinamik seviye ölçümü ve gerekiyorsa pompa kotunun yeniden ayarlanması; hem kum miktarını hem sezon içi arıza riskini belirgin şekilde düşürüyor.",
      },
    ],
    faqs: [
      {
        q: "Yeni açılan kuyudan kum gelmesi normal mi?",
        a: "İlk günlerde normaldir ve zamanla azalması beklenir. Bu süreç kuyu geliştirme işlemiyle hızlandırılır. Aylar geçtiği hâlde kum gelmeye devam ediyorsa geliştirme yetersiz yapılmış, pompa kotu yanlış seçilmiş veya kuyudan kapasitesinin üzerinde su çekiliyor olabilir.",
      },
      {
        q: "Kum ayırıcı pompayı korur mu?",
        a: "Kuyu çıkışına, pompadan sonra takılan ayırıcı tesisatı korur ama pompanın kendisini korumaz; kum zaten çarktan geçmiştir. Pompayı korumanın yolu kaynaktaki nedeni gidermektir: pompa kotunun düzeltilmesi, çekimin azaltılması veya kuyunun geliştirilmesi.",
      },
      {
        q: "Kumlu su içilebilir mi?",
        a: "Kumun kendisi görsel ve mekanik bir sorundur, ancak suyun içilebilirliği ayrı bir konudur ve laboratuvar analiziyle belirlenir. Kum gelmesi, kuyuya dışarıdan malzeme girdiğini gösterebileceği için mikrobiyolojik risk açısından da analiz yaptırmak doğru olur.",
      },
      {
        q: "Pompayı yukarı almak kum sorununu çözer mi?",
        a: "Kum kaynağı kuyu dibindeki tortuysa büyük ölçüde çözer. Kaynak filtre borusu veya çakıl zarfındaki bir eksiklikse kot değişikliği yalnızca kısmi fayda sağlar. Bu yüzden karar öncesi dinamik seviye ölçümü yapılması ve mümkünse kuyu logunun incelenmesi gerekir.",
      },
      {
        q: "Sulama sezonunda kum artıyor, neden?",
        a: "Sezonda hem çekim süresi hem debi artar; kuyu çevresindeki akış hızlanır ve ince taneler sürüklenir. Ayrıca bölgesel su seviyesi düştüğü için pompa daha zorlu koşullarda çalışır. Sulamayı gün içinde bölmek ve debiyi düşürmek çoğu zaman gözle görülür fark yaratır.",
      },
      {
        q: "Damlatıcılarım sürekli tıkanıyor, kum yüzünden mi?",
        a: "Kum yaygın nedenlerden biridir, ancak tek neden değildir. Kireç, alg ve organik tortu da damlatıcı tıkar. Ayrım, filtreden çıkan malzemeye bakılarak yapılır: sert ve taneli birikinti kum, beyaz ve pütürlü birikinti kireç, yeşilimsi ve kaygan tabaka ise organik yüktür.",
      },
      {
        q: "Kuyu temizliği ne sıklıkla yapılmalı?",
        a: "Kullanım yoğunluğuna ve zemin yapısına bağlıdır. Yoğun kullanılan tarımsal kuyularda birkaç yılda bir kontrol yerinde olur. Kum miktarında artış, debide düşüş veya pompanın daha sık kum çekmesi, temizlik zamanının geldiğini gösteren en net işaretlerdir.",
      },
      {
        q: "Çökeltme deposu işe yarar mı?",
        a: "Evet, özellikle sulama sistemlerinde etkilidir. Kuyudan gelen su depoda bir süre bekletildiğinde ağır taneler dibe çöker ve hatta daha temiz su gider. Karşılığında deponun düzenli temizlenmesi gerekir; emiş ağzının tabandan birkaç santim yukarıda olması da şarttır.",
      },
    ],
    related: ["kuyu-pompasi-basinc-sorunu", "dalgic-pompa-kuyudan-cikarma", "sulama-filtresi-secimi"],
  },
];

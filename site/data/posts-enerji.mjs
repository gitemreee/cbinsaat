// Bahçe zemini, çit, güç artırımı, elektrik faturası ve sıcak su hattı yazıları.

export const enerjiPosts = [
  {
    slug: "bahce-zemininde-kilit-tasi-mi-beton-mu",
    title: "Bahçe zemininde kilit taşı mı, beton mu?",
    category: "Bahçe ve Çevre",
    published: "2026-08-16",
    reading: 10,
    metaTitle: "Kilit Taşı mı Beton mu? | Bahçe ve Avlu Zemini",
    metaDesc:
      "Bahçe yolu, avlu ve otopark zemininde kilit taşı ile beton karşılaştırması: alt yapı, drenaj, maliyet, onarım kolaylığı ve hangi durumda hangisi.",
    keywords: [
      "kilit taşı",
      "bahçe zemini",
      "beton zemin",
      "avlu döşemesi",
      "parke taşı altyapısı",
    ],
    excerpt:
      "Bahçe zemininde asıl karar görünen taşta değil, altındaki yirmi santimde veriliyor. Aynı taş, doğru hazırlanmış bir tabanda yirmi yıl, kötü hazırlanmış tabanda iki yıl gidiyor.",
    services: ["bahce-cevre-duzenleme", "kaba-insaat", "sap-zemin-hazirligi"],
    intro:
      "Bahçe düzenlemesinde zemin kararı çoğunlukla görsel bir tercih gibi ele alınıyor: hangi renk taş, hangi desen. Oysa asıl fark kullanımda çıkıyor. Araç girip çıkacak mı, su nereye akacak, altından boru geçiyor mu, birkaç yıl sonra bir yeri sökmek gerekirse ne olacak? Bu sorular cevaplanınca karar da kendiliğinden netleşiyor.",
    body: [
      { h2: "İki yüzeyin temel farkı" },
      {
        p: "Beton tek parça bir plaka gibi davranıyor; yük bütün yüzeye yayılıyor. Kilit taşı ise birbirine geçmiş küçük parçalardan oluşuyor ve yükü parçadan parçaya aktarıyor.",
      },
      {
        p: "Bu fark iki sonuç doğuruyor. Betonda zemin oturursa çatlak çıkıyor ve onarımı yamalı görünüyor. Kilit taşında oturma olursa taşlar sökülüp taban düzeltiliyor, aynı taşlar geri diziliyor ve iz kalmıyor.",
      },

      { h2: "Yan yana karşılaştırma" },
      {
        table: {
          head: ["Konu", "Kilit taşı", "Beton"],
          rows: [
            ["Su geçirgenliği", "Derzlerden sızar", "Geçirmez"],
            ["Onarım", "Sökülüp geri dizilir", "Kesme ve yama"],
            ["Altındaki boruya erişim", "Kolay", "Kırım gerekir"],
            ["Zemin oturmasına tepki", "Uyum sağlar", "Çatlar"],
            ["İlk maliyet", "Orta", "Düşük–orta"],
            ["Yüzey düzgünlüğü", "Hafif dokulu", "Tam düz"],
            ["Ot ve derz bakımı", "Gerekir", "Gerekmez"],
          ],
        },
      },
      {
        p: "Tablonun üçüncü satırı bahçelerde çoğu kararı belirliyor. Sulama borusu, elektrik hattı ya da su hattı zeminin altından geçiyorsa kilit taşı ileride başınızı ağrıtmıyor.",
      },

      { h2: "Altyapı: işin asıl kısmı" },
      {
        p: "Kilit taşının ömrünü belirleyen şey taşın kendisi değil, altındaki katmanlar. Sıralama şöyle: sıkıştırılmış doğal zemin, üzerine kırma taş dolgu, onun üzerine ince kum yatak, en üstte taş.",
      },
      {
        ol: [
          "Bitkisel toprak sıyrılır; kök ve organik madde bırakılmaz.",
          "Zemin silindir ya da vibrasyonlu tokmakla sıkıştırılır.",
          "Kırma taş serilir; yaya alanında 10–15 cm, araç alanında 20–30 cm.",
          "Dolgu kat kat sıkıştırılır, tek seferde serilmez.",
          "3–5 cm ince kum yatak serilir, sıkıştırılmadan tesviye edilir.",
          "Taşlar dizilir, kenar bordürü betonla sabitlenir.",
          "Derz kumu süpürülerek doldurulur, yüzey tokmaklanır.",
        ],
      },
      {
        p: "Dördüncü madde en çok atlanan yer. Otuz santim dolguyu tek seferde serip üstünden geçmek, sıkıştırma sayılmıyor; birkaç ay sonra tekerlek izleri çöküyor.",
      },

      { h2: "Kenar bordürü neden şart?" },
      {
        p: "Kilit taşı yanlardan tutulmazsa zamanla açılıyor. Kenardaki taşlar dışa kayıyor, derzler genişliyor ve sistem gevşiyor.",
      },
      {
        p: "Bordür betona alınarak sabitleniyor. Bahçe yollarında görünmesi istenmeyen yerlerde gömme bordür kullanılıyor; toprak altında kalıyor ama işini yapıyor.",
      },

      { h2: "Suyun nereye gideceği" },
      {
        p: "Zemin döşemeden önce cevaplanması gereken ilk soru bu. Beton su geçirmediği için yağmur suyu tamamen yüzeyden akıyor; eğim yoksa göllenme oluyor.",
      },
      {
        p: "Kilit taşı derzlerden bir miktar su geçiriyor ama bunu bir drenaj sistemi saymak yanlış. Yoğun yağışta su yine yüzeyden akıyor. Her iki yüzeyde de yüzde bir–iki eğim veriliyor ve su binadan uzağa yönlendiriliyor.",
      },
      {
        p: "Bina duvarına doğru eğimli bırakılan bir avlu, birkaç yıl içinde bodrum rutubetine dönüşüyor. Eğim yönü, taş dizilmeden önce iple kontrol edilir.",
      },

      { h2: "Araç girecekse" },
      {
        p: "Otopark ve araç yolu, yaya alanından tamamen farklı bir hesap istiyor. Taş kalınlığı 8 santime çıkıyor, dolgu kalınlığı artıyor ve sıkıştırma daha titiz yapılıyor.",
      },
      {
        p: "Dönüş yapılan noktalarda tekerlek taşları yatay olarak zorluyor; burada birbirine daha çok kenetlenen desenler tercih ediliyor. Balık sırtı desen, düz sıra dizilime göre bu zorlamaya epeyce dayanıklı.",
      },

      { h2: "Beton nerede daha doğru?" },
      {
        p: "Beton, altından hiçbir tesisat geçmeyen, düz ve temizlenmesi kolay bir yüzey istenen yerlerde iyi iş görüyor: ahır ve depo önü, makine konan alanlar, yıkama yapılan zeminler.",
      },
      {
        p: "Bu tür yerlerde kilit taşının derzleri kir ve yağ tutuyor, temizlik zorlaşıyor. Betonun tek parça olması avantaja dönüşüyor. Yüzeye helikopter perdahı yapıldığında da toz kalkması azalıyor.",
      },

      { h2: "Betonun çatlamaması için" },
      {
        ul: [
          "Derz kesimi yapılır; beton nereye çatlayacağını kendisi seçmesin.",
          "Hasır çelik ya da lif takviyesi kullanılır.",
          "Kalınlık yaya alanında 10 cm, araç alanında 15 cm'den az olmaz.",
          "Dökümden sonra kür yapılır; ilk günlerde yüzey ıslak tutulur.",
          "Sıcak ve rüzgârlı günde döküm sabaha alınır.",
        ],
      },
      {
        p: "Kür maddesi çoğu bahçe işinde atlanıyor ve yüzey çatlaklarının en yaygın sebebi bu oluyor. Malatya'nın kuru yaz havasında beton çok hızlı su kaybediyor.",
      },

      { h2: "Karma çözüm" },
      {
        p: "İkisini bir arada kullanmak çoğu bahçede en akıllı düzen. Araç yolu ve yürüme yolları kilit taşı, ahır ya da depo önü beton olabiliyor.",
      },
      {
        p: "Bir de şu var: sulama ve elektrik hattı geçen güzergâhlar kilit taşı bırakılıyor, geri kalan alan betona alınıyor. İleride bir arıza çıktığında yalnızca o şerit sökülüyor.",
      },

      { h2: "Sıra: önce boru, sonra taş" },
      {
        p: "Bahçe düzenlemesinde en pahalı hatalardan biri, zemin bittikten sonra sulama ya da aydınlatma hattı ihtiyacının fark edilmesi.",
      },
      {
        p: "Zemin kapanmadan önce şunlar geçirilir: sulama ana hattı, bahçe aydınlatması boru güzergâhı, varsa havuz ve kamera hatları. Bugün kullanılmayacak olsa bile boş bir koruge boru bırakmak, ileride kazı yapmaktan çok daha ucuz.",
      },

      { h2: "Ot ve derz bakımı" },
      {
        p: "Kilit taşının bilinen tek dezavantajı derzlerden ot çıkması. Bunu azaltmanın yolu derzlerin dolu kalması; boşalan derz hem ot davet ediyor hem taşların kenetlenmesini zayıflatıyor.",
      },
      {
        p: "Yılda bir derz kumunu tazelemek yeterli oluyor. Polimer derz dolgusu kullanılan uygulamalarda ot sorunu neredeyse bitiyor ama maliyeti daha yüksek ve uygulaması kuru havada yapılmalı.",
      },

      { h2: "Renk ve desen" },
      {
        p: "Açık renk taş yazın daha az ısınıyor; koyu renk kiri daha az gösteriyor. Malatya yazında geniş avlularda açık renk gözle görülür bir konfor farkı yaratıyor.",
      },
      {
        p: "Desende ise iki şey işe yarıyor: araç geçen yerlerde kenetlenmesi güçlü desenler, yaya alanlarında istenen her düzen. Çok karmaşık desenler kesim atığını artırıyor; bu da metrekare maliyetine yansıyor.",
      },

      { h2: "Kaç günde bitiyor?" },
      {
        table: {
          head: ["İş", "Alan", "Tipik süre"],
          rows: [
            ["Bahçe yolu, kilit taşı", "30 m²", "1–2 gün"],
            ["Avlu, kilit taşı", "100 m²", "3–4 gün"],
            ["Otopark, kilit taşı", "150 m²", "5–6 gün"],
            ["Beton zemin", "100 m²", "2 gün + kür"],
            ["Kazı ve altyapı dahil", "100 m²", "5–7 gün"],
          ],
        },
      },
      {
        p: "Beton dökümü hızlı bitiyor ama üzerine basılabilmesi için beklemek gerekiyor. Kilit taşında yüzey işi biter bitmez kullanılabiliyor; bu, iş yeri ve avlu gibi kullanımın durmaması gereken yerlerde önemli oluyor.",
      },

      { h2: "Kışın davranış" },
      {
        p: "Donma–çözülme döngüsü her iki yüzeyi de zorluyor. Suyun altta birikmediği, drenajı çalışan bir zeminde bu döngü zarar vermiyor.",
      },
      {
        p: "Tuzlama betona zamanla zarar veriyor; yüzeyde pul pul kalkma başlıyor. Kilit taşında tuz taşa değil derze etki ediyor ve etkisi daha sınırlı kalıyor. Kışın çok tuz kullanılan girişlerde bu fark hesaba katılıyor.",
      },

      { h2: "Malatya'da ne uyguluyoruz?" },
      {
        p: "Müstakil ev bahçelerinde en sık kurduğumuz düzen, araç yolu ve avluda kilit taşı, ahır ya da depo önünde beton. Kırsal mahallelerde traktör giren avlularda dolgu kalınlığını artırıyoruz; standart yaya kalınlığı bu yükü taşımıyor.",
      },
      {
        p: "Kayısı bahçelerinde ise depo ve pompa çevresi betona alınıyor, geri kalan yollarda kilit taşı ya da doğal zemin bırakılıyor. Sulama hattı geçen güzergâhın taş bırakılması, sezon içinde çıkan arızalarda büyük kolaylık sağlıyor.",
      },

      { h2: "Taş kalitesi nasıl anlaşılır?" },
      {
        p: "Aynı görünen iki taş arasında ciddi dayanım farkı olabiliyor. Basınç dayanımı, su emme oranı ve aşınma direnci üç temel değer; ciddi üreticiler bunları belgeliyor.",
      },
      {
        p: "Sahada da birkaç işaret var. Kenarları keskin ve düzgün olan, elde tartıldığında ağır gelen, kırıldığında içi homojen görünen taşlar genelde iyi presleniyor. Yüzeyi tozlu, kenarı ufalanan taşlar birkaç kışta yıpranıyor.",
      },
      {
        p: "Renk katmanı da önemli. Bazı taşlarda renk yalnızca yüzeydeki ince bir tabakada; aşınınca altındaki gri çıkıyor. Araç geçen alanlarda tüm gövdesi renkli taşlar daha uzun süre aynı görünüyor.",
      },

      { h2: "Kum yatak kalınlığı" },
      {
        p: "Kum yatak, taşları hizalamak için var; taşıyıcı bir katman değil. Kalın bırakıldığında yük altında hareket ediyor ve yüzeyde dalgalanma başlıyor.",
      },
      {
        p: "Üç–beş santim doğru aralık. Zemindeki çukurları kumla doldurup düzeltmeye çalışmak en sık yapılan hata; o çukurlar kırma taş dolguda kapatılır, kum yatak her yerde aynı kalınlıkta olur.",
      },

      { h2: "Su tahliye noktaları" },
      {
        p: "Geniş avlularda eğim tek başına yetmeyebiliyor. Suyun toplandığı noktalara ızgara ve gizli dere konarak yağmur suyu bahçe dışına ya da emici kuyuya yönlendiriliyor.",
      },
      {
        p: "Izgaraların temizlenebilir olması gerekiyor. Yaprak ve toprak birkaç sezonda tıkıyor; sepetli modeller bu bakımı basit bir işe indiriyor.",
      },
      {
        p: "Bina çevresinde ayrıca bir çakıl şeridi bırakmak, sıçrayan yağmurun duvarı ıslatmasını azaltıyor. Küçük bir ayrıntı ama cephe boyasının ömrüne doğrudan etki ediyor.",
      },

      { h2: "Ağaç köklerine dikkat" },
      {
        p: "Zemin döşerken yakındaki ağaçların kökleri hesaba katılmıyorsa birkaç yıl içinde taşlar kabarmaya başlıyor. Kavak, dut ve söğüt gibi yüzeye yakın kök yapan türler bu konuda öne çıkıyor.",
      },
      {
        p: "Çözüm ya ağacın çevresinde geniş bir toprak alan bırakmak ya kök bariyeri kullanmak. Kilit taşının avantajı burada da ortaya çıkıyor: kabaran bölüm sökülüp taban düzeltilebiliyor, beton olsaydı kırılması gerekirdi.",
      },

      { h2: "Yağmur suyunu değerlendirmek" },
      {
        p: "Avludan toplanan yağmur suyunu bahçeye vermek ya da bir depoda biriktirmek, zemin yapılırken kolayca kurulabilen bir düzen. Izgaralardan gelen su tek bir borudan depoya iniyor.",
      },
      {
        p: "Sulama için kullanılacaksa depo girişine basit bir süzgeç konuyor; yaprak ve toprak içeri girmiyor. Bahçesi büyük olan evlerde bu depo, sezon boyunca hatırı sayılır bir su tasarrufu sağlıyor.",
      },
      {
        p: "Zemin bittikten sonra bu düzeni kurmak, yeni kanal açmak demek. Döşeme öncesi bir boru bırakmak ise neredeyse hiçbir ek işçilik getirmiyor.",
      },

      { h2: "Kar ve buz" },
      {
        p: "Kilit taşı, buzlu havada betondan biraz daha tutunma veriyor; yüzeyi tam düz olmadığı için. Yine de eğimli girişlerde ayrıca önlem gerekiyor.",
      },
      {
        p: "Kar küreme sırasında kürek ağzının taşları kaldırmaması için derzlerin dolu olması önemli. Boşalmış derzli bir yüzeyde kürek taşın kenarına takılıp yerinden oynatıyor.",
      },
      {
        p: "Eğimli araç girişlerinde bazı evlerde zemin ısıtma kablosu kullanılıyor. Karar tamamen eğime ve girişin kuzeye bakıp bakmadığına göre veriliyor; gölgede kalan girişler günlerce buzlu kalabiliyor.",
      },
    ],
    faqs: [
      {
        q: "Kilit taşı altına beton dökülür mü?",
        a: "Gerekmiyor ve çoğu durumda zarar veriyor. Kilit taşının çalışma mantığı, kum yatak üzerinde hafif hareket edebilmesi. Beton üzerine döşendiğinde bu esneklik kayboluyor ve taşlar kırılmaya başlıyor. Doğru taban kırma taş ve kum.",
      },
      {
        q: "Araç girecek yerde taş kalınlığı ne olmalı?",
        a: "Yaya alanında 6 cm yeterli, araç geçen yerde 8 cm kullanılıyor. Kalınlık kadar önemli olan altyapı: araç alanında kırma taş dolgu 20–30 cm ve kat kat sıkıştırılmış olmalı.",
      },
      {
        q: "Beton zemin neden çatlıyor?",
        a: "En sık üç sebep: derz kesilmemesi, kürün yapılmaması ve dolgunun yetersiz sıkıştırılması. Beton her hâlükârda çekiyor; derz kesilmezse nereye çatlayacağına kendisi karar veriyor.",
      },
      {
        q: "Kilit taşı sökülüp yeniden kullanılabilir mi?",
        a: "Kullanılabiliyor ve en büyük avantajı bu. Altındaki boruya müdahale gerektiğinde taşlar sökülüp kenara diziliyor, iş bitince aynı taşlar geri konuyor. Kaybolan birkaç taş için sipariş verirken renk tonu farkı çıkabiliyor.",
      },
      {
        q: "Derzlerden ot çıkmasını nasıl engellerim?",
        a: "Derzlerin dolu kalması en etkili yol; yılda bir derz kumu tazelenir. Polimer derz dolgusu otu neredeyse tamamen bitiriyor ama daha pahalı ve kuru havada uygulanması gerekiyor.",
      },
      {
        q: "Zemin yaparken hangi hatlar geçirilmeli?",
        a: "Sulama ana hattı, bahçe aydınlatması, varsa kamera ve havuz hatları. Bugün ihtiyaç olmasa bile boş bir koruge boru bırakmak, ileride kazı yapmanın maliyetinin çok altında kalıyor.",
      },
      {
        q: "Ne kadar eğim vermeli?",
        a: "Yüzde bir ile iki arası yeterli; su binadan uzağa akacak şekilde yönlendirilir. Eğim yönü taş dizilmeden önce ipli kontrolle görülür, göllenen bir avluyu sonradan düzeltmek zor oluyor.",
      },
      {
        q: "Kaç yıl dayanır?",
        a: "Doğru altyapıyla döşenmiş kilit taşı yirmi yılı rahat görüyor; taşın kendisi çok daha uzun ömürlü. Erken bozulan uygulamalarda sorun neredeyse her zaman dolgunun yetersiz sıkıştırılması ya da kenar bordürünün eksikliği.",
      },
      {
        q: "Yakınında ağaç varsa ne yapmalı?",
        a: "Yüzeye yakın kök yapan türlerde birkaç yıl içinde taşlar kabarabiliyor. Ağacın çevresinde geniş bir toprak alan bırakmak ya da kök bariyeri kullanmak çözüyor. Kabaran bölüm sökülüp taban düzeltilebiliyor, iz kalmıyor.",
      },
    ],
    related: ["bahce-duzenlemesinde-sira", "istinat-duvari-neden-catlar", "bahce-aydinlatmasi-nasil-planlanir"],
  },

  {
    slug: "bahce-duvari-mi-cit-mi",
    title: "Bahçe duvarı mı, çit mi?",
    category: "Bahçe ve Çevre",
    published: "2026-08-16",
    reading: 9,
    metaTitle: "Bahçe Duvarı mı Çit mi? | Seçim ve Maliyet Rehberi",
    metaDesc:
      "Betonarme duvar, briket duvar, panel çit ve tel örgü karşılaştırması. Temel derinliği, rüzgâr yükü, mahremiyet, maliyet ve bakım farkları.",
    keywords: [
      "bahçe duvarı",
      "panel çit",
      "tel örgü",
      "bahçe çiti maliyeti",
      "duvar temeli",
    ],
    excerpt:
      "Bahçe sınırı için verilen karar, çoğu durumda bütçeyle başlıyor ama arazinin eğimiyle bitiyor. Eğimli bir arazide ucuz görünen çözüm, iki yıl sonra en pahalısı olabiliyor.",
    services: ["bahce-cevre-duzenleme", "duvar-orme", "demir-korkuluk"],
    intro:
      "Bahçe sınırını kapatmanın birkaç yolu var ve hepsi farklı bir işi çözüyor. Kimi mahremiyet istiyor, kimi sadece hayvan girmesin diyor, kiminin derdi eğimli arazide toprağı tutmak. Bu yazıda seçenekleri yan yana koyup hangi durumda hangisinin doğru olduğunu anlattık.",
    body: [
      { h2: "Seçenekler" },
      {
        table: {
          head: ["Tip", "Ne sağlar", "Uygun olduğu yer"],
          rows: [
            ["Betonarme duvar", "Tam kapatma, toprak tutma", "Eğimli arazi, yola cepheli sınır"],
            ["Briket ya da bims duvar", "Tam kapatma", "Düz arazi, komşu sınırı"],
            ["Taş duvar", "Görünüm + kapatma", "Köy evi, bağ evi"],
            ["Panel çit", "Sınır belirleme", "Geniş arazi, tarla ve bahçe"],
            ["Tel örgü", "Hayvan girişini engelleme", "Bağ, bahçe, mera sınırı"],
            ["Duvar + üstü ferforje", "Kapatma + görünüm", "Villa ve müstakil ev"],
          ],
        },
      },
      {
        p: "Son satır konutlarda en sık tercih edilen düzen: alt kısım duvar, üstü demir. Hem mahremiyet oluyor hem duvar yüksekliği rüzgâr yükünü artırmıyor.",
      },

      { h2: "Önce arazinin eğimine bakılır" },
      {
        p: "Sınır boyunca kot farkı varsa mesele artık bir çit meselesi olmaktan çıkıyor. Yüksek taraftaki toprak alçak tarafa doğru itiyor ve bu itmeyi karşılayacak bir yapı gerekiyor.",
      },
      {
        p: "Böyle bir yerde panel çit dikmek toprağı tutmuyor; ilk yoğun yağıştan sonra çitin altı oyuluyor. Kot farkı yarım metreyi geçtiğinde istinat duvarı gündeme geliyor ve bu artık hesap isteyen bir iş.",
      },

      { h2: "Duvar temeli" },
      {
        p: "Bahçe duvarı, göründüğünden daha çok yük taşıyan bir yapı. Kendi ağırlığı, rüzgâr yükü ve arkasındaki toprağın itmesi hepsi temele iniyor.",
      },
      {
        ol: [
          "Temel donma derinliğinin altına iner; Malatya'da sıklıkla 60–80 cm.",
          "Temel genişliği duvar yüksekliğine göre hesaplanır.",
          "Zemin zayıfsa temel genişletilir ya da donatı artırılır.",
          "Duvar boyunca belli aralıklarla dilatasyon bırakılır.",
          "Arka tarafta drenaj ve su tahliyesi planlanır.",
        ],
      },
      {
        p: "Beşinci madde çatlayan bahçe duvarlarının bir numaralı sebebi. Arkada biriken su hem donunca genişliyor hem sürekli itiyor. Duvarın dibine bırakılan barbakan delikleri bu suyu dışarı alıyor.",
      },

      { h2: "Panel çit" },
      {
        p: "Kaynaklı tel panellerden oluşan çitler, geniş araziyi hızlı ve düzgün biçimde kapatıyor. Direkler betona alınıyor, paneller kelepçeyle bağlanıyor.",
      },
      {
        p: "Avantajı hız ve maliyet; dezavantajı mahremiyet vermemesi. Bahçenin içi dışarıdan görünüyor. Bazı uygulamalarda panellerin arasına çubuk geçirilerek kısmi kapatma yapılıyor ama bu rüzgâr yükünü artırıyor ve direklerin daha sağlam olmasını gerektiriyor.",
      },

      { h2: "Rüzgâr yükünü unutmayın" },
      {
        p: "Kapalı bir yüzey rüzgârı kesiyor ve bütün yükü kendi üzerine alıyor. Yüksek ve tamamen kapalı bir bahçe duvarı, rüzgârlı bir arazide ciddi bir yatay yük taşıyor.",
      },
      {
        p: "Bunun için yüksek duvarlarda belli aralıklarla payanda ya da kolon yapılıyor. Kapalı panelli çitlerde de direk aralığı sıklaştırılıyor. Açık tel örgüde bu sorun neredeyse hiç yok.",
      },

      { h2: "Komşu sınırında" },
      {
        p: "Sınır duvarı iki tarafı da ilgilendirdiği için önceden konuşulması hem ilişki hem sonradan çıkacak tartışma açısından iyi oluyor. Sınırın tam yeri konusunda tereddüt varsa kadastro çapı bakılır.",
      },
      {
        p: "Duvarın hangi tarafa ne kadar taştığı, temelin komşu tarafa geçip geçmediği ve yağmur suyunun nereye aktığı üç somut konu. Bunlar iş başlamadan konuşulduğunda sonra sorun çıkmıyor.",
      },

      { h2: "Kapı ve giriş" },
      {
        p: "Bahçe kapısı, sınırın en çok kullanılan ve en çok yıpranan parçası. Genişlik seçilirken araç girişi düşünülüyor; üç metre çoğu araç için rahat, traktör girecekse dört metreye çıkılıyor.",
      },
      {
        p: "Sürgülü kapı yer kazandırıyor ama düzgün bir ray ve zemin istiyor. Kanatlı kapı daha basit ama açılma yönünde boşluk gerekiyor. Eğimli girişlerde kanatlı kapı zemine sürtüyor; bu detay ölçü alınırken görülüyor.",
      },

      { h2: "Otomatik kapı" },
      {
        p: "Bahçe kapısına motor takılacaksa elektrik hattı, duvar örülürken geçiriliyor. Sonradan çekmek, yeni açılan bir kanal ve yamalı bir duvar demek.",
      },
      {
        p: "Aynı kanaldan interkom ve kamera kablosunu da geçirmek, ileride her iki sistemi de eklenebilir kılıyor. Kullanılmasa bile boş boru bırakmak neredeyse hiçbir şeye mal olmuyor.",
      },

      { h2: "Maliyeti belirleyen kalemler" },
      {
        ul: [
          "Sınırın toplam uzunluğu.",
          "Arazinin eğimi ve kot farkı; istinat gerekip gerekmediği.",
          "Duvar yüksekliği ve malzemesi.",
          "Temel derinliği ve zeminin durumu.",
          "Kapı sayısı, genişliği ve otomatik olup olmaması.",
          "Sıva, boya ya da kaplama yapılıp yapılmayacağı.",
        ],
      },
      {
        p: "Bu listede en çok oynayan ikinci madde. Düz bir arazide metre başına maliyet öngörülebilirken, eğimli arazide istinat gerektiği anda tablo değişiyor.",
      },

      { h2: "Karma çözümler" },
      {
        p: "Bütün sınırı aynı şekilde kapatmak zorunda değilsiniz. Yola bakan cephe duvar, komşu sınırı panel çit, arka taraf tel örgü olabiliyor.",
      },
      {
        p: "Bu düzen hem maliyeti hem görünümü dengeliyor. Görünen cepheye yatırım yapılıyor, geri kalan sınır işlevini görecek kadar kapatılıyor.",
      },

      { h2: "Bitki ile birlikte" },
      {
        p: "Tel örgü ya da panel çit üzerine sarılan bitkiler, birkaç sezonda yeşil bir perde oluşturuyor. Mahremiyet isteyip duvar maliyetini istemeyenler için işe yarayan bir çözüm.",
      },
      {
        p: "Ama bitkinin ağırlığı ve rüzgârda tuttuğu yük hesaba katılmalı; ince direkli bir çit birkaç yıl sonra eğilmeye başlıyor. Bitki düşünülüyorsa direkler baştan daha sağlam seçiliyor.",
      },

      { h2: "Bakım" },
      {
        table: {
          head: ["Tip", "Bakım", "Sıklık"],
          rows: [
            ["Betonarme duvar", "Çatlak kontrolü, boya", "3–5 yıl"],
            ["Briket duvar", "Sıva ve boya", "3–5 yıl"],
            ["Panel çit", "Kelepçe kontrolü", "Yılda bir"],
            ["Tel örgü", "Gerginlik ve pas", "Yılda bir"],
            ["Ferforje", "Pas ve boya", "2–3 yıl"],
            ["Kapı", "Menteşe, ray, motor", "Yılda bir"],
          ],
        },
      },
      {
        p: "Demir işlerinde bakımı erteledikçe maliyet büyüyor. Yüzeysel pası zamanında almak boyayla çözülüyor; kesiti yiyen pas ise parça değişimi demek.",
      },

      { h2: "Sık yapılan hatalar" },
      {
        ol: [
          "Temeli donma derinliğinin üstünde bırakmak; kışın duvar kalkıp çatlıyor.",
          "Arka drenajı ve barbakanı atlamak.",
          "Eğimli arazide istinat hesabı yapmadan duvar örmek.",
          "Kapı genişliğini araca göre değil, göze göre seçmek.",
          "Elektrik ve kamera borusunu duvar örüldükten sonra hatırlamak.",
        ],
      },
      {
        p: "Beşinci madde en çok pişman olunan kalem. Yirmi metre kanal açmak ile duvar örülürken bir boru geçirmek arasındaki fark, hem para hem görünüm açısından büyük.",
      },

      { h2: "Malatya'da tipik durum" },
      {
        p: "Merkez ve çevresinde müstakil ev bahçelerinde en çok yaptığımız düzen, yola bakan cephede alt kısmı duvar üstü ferforje, yan sınırlarda panel çit. Bu düzen mahremiyet ile maliyeti dengeliyor.",
      },
      {
        p: "Kırsal mahallelerde ve bağ evlerinde ise arazi eğimli olduğu için iş sıklıkla istinat duvarına dönüşüyor. Pütürge, Doğanyol ve Arapgir gibi engebeli ilçelerde sınırı kapatmadan önce toprağı tutmak gerekiyor; bu iki işi ayrı ayrı değil birlikte planlıyoruz.",
      },

      { h2: "Duvar malzemesi seçimi" },
      {
        table: {
          head: ["Malzeme", "Güçlü yanı", "Dikkat"],
          rows: [
            ["Betonarme", "Toprak tutar, uzun ömürlü", "Maliyet ve kalıp işçiliği"],
            ["Briket", "Hızlı, ekonomik", "Toprak tutmaz, sıva ister"],
            ["Bims", "Hafif, yalıtımlı", "Dış etkiye karşı sıva şart"],
            ["Doğal taş", "Görünüm, uzun ömür", "Usta işçiliği ve süre"],
            ["Gabion", "Drenajlı, esnek", "Görünüm herkese uymuyor"],
          ],
        },
      },
      {
        p: "Gabion, yani tel kafes içine doldurulmuş taş, eğimli arazide az bilinen ama işe yarayan bir çözüm. Suyu geçirdiği için arkasında basınç birikmiyor ve zemin oturmalarına uyum sağlıyor.",
      },

      { h2: "Duvar yüksekliği" },
      {
        p: "Mahremiyet için çoğu kez 1,8–2 metre yeterli oluyor. Daha yükseği hem rüzgâr yükünü hem maliyeti artırıyor, üstelik bahçeyi kuyu gibi gösterebiliyor.",
      },
      {
        p: "Yola cepheli tarafta yükseklik biraz artabiliyor. Komşu sınırında ise iki tarafın da güneş ve manzarasını kapattığı için ölçülü kalmak hem ilişki hem sonuç açısından iyi oluyor.",
      },
      {
        p: "Alt kısmı 90 santim duvar, üstü 90 santim ferforje olan düzen bu dengeyi iyi kuruyor: alt taraf bakışları keserken üst taraf hem hafif duruyor hem rüzgârı geçiriyor.",
      },

      { h2: "Sıva ve kaplama" },
      {
        p: "Briket ve bims duvarlar dış etkilere açık; sıvasız bırakıldığında birkaç kışta yüzey dökülmeye başlıyor. Dış cephe sıvası ve üzerine dış mekân boyası standart uygulama.",
      },
      {
        p: "Taş kaplama daha kalıcı ama duvarın taşıyabileceği ek ağırlığa göre planlanıyor. İnce doğal taş ya da kültür taşı, betonarme duvarda sorunsuz; briket duvarda ankraj gerekiyor.",
      },
      {
        p: "Duvarın üst kotuna harpuşta yapmak da ömrü uzatıyor. Üstten giren su, duvarın içine işleyip kışın donarak en hızlı yıpratan etken.",
      },

      { h2: "Aydınlatma" },
      {
        p: "Bahçe duvarı, aydınlatma için hazır bir yüzey. Duvar üstüne konan düşük yükseklikli armatürler yolu aydınlatıyor, göze de vurmuyor.",
      },
      {
        p: "Kabloyu duvar örülürken içine almak, sonradan yüzeyden boru çekmekten hem daha temiz hem daha ucuz. Bugün armatür konmayacaksa bile boru ve buat yeri bırakmak yeterli.",
      },

      { h2: "Süre ve mevsim" },
      {
        p: "Elli metrelik bir bahçe duvarı, temel kazısıyla birlikte genelde bir–iki haftada bitiyor. Panel çit aynı mesafede iki–üç güne iniyor.",
      },
      {
        p: "Mevsim betonarme işlerde belirleyici. Donun olduğu günlerde beton dökülmüyor; çok sıcak günlerde de döküm sabaha alınıp kür yapılıyor. Malatya'da ilkbahar ve sonbahar bu işler için en rahat dönemler.",
      },

      { h2: "Hayvan girişini engellemek" },
      {
        p: "Bağ ve bahçelerde çitin asıl işi çoğunlukla domuz, köpek ve tavşan girişini engellemek. Bu durumda önemli olan yükseklik değil, alt kısmın kapalı olması.",
      },
      {
        p: "Panel çitin altında on santimlik bir boşluk kalması, küçük hayvanlar için açık kapı demek. Alt kenarı toprağa gömmek ya da bir bordür şeridi geçirmek bu boşluğu kapatıyor.",
      },
      {
        p: "Domuz sorunu olan arazilerde tel örgü tek başına yetmiyor; altına gömme tel ya da beton kaide yapılıyor. Bunun sebebi hayvanın çiti aşmaya değil, altını kazmaya çalışması.",
      },

      { h2: "Bakım takvimi" },
      {
        p: "Bahçe sınırı için yılda bir yapılacak kontrol yeterli. Bahar başında, kışın açtığı hasarın görülebildiği dönemde yapmak en verimlisi.",
      },
      {
        p: "Bakılacaklar sade: duvarda yeni çatlak var mı, barbakanlar tıkalı mı, çit direkleri dipten pas yapmış mı, kapı menteşesi düşmüş mü. Dördü de erken görüldüğünde küçük işlerle çözülüyor. Ömür farkı da buradan çıkıyor: doğru temelli betonarme duvar en uzun gideni, panel çit galvaniz ve boyalı kaldığı sürece yıllarca dayanıyor, tel örgü ise en önce yenilenen oluyor.",
      },

      { h2: "Çatlak gördüğünüzde" },
      {
        p: "Bahçe duvarındaki her çatlak tehlike anlamına gelmiyor. Sıvada oluşan ince kılcal çatlaklar yüzeysel; boya öncesi macunla kapanıyor.",
      },
      {
        p: "Dikkat edilecek olanlar duvarın gövdesini kesen, aşağı doğru genişleyen ve iki yanı arasında kot farkı oluşan çatlaklar. Bunlar temel oturmasını ya da arkadaki toprak itmesini gösteriyor. Böyle bir çatlak görüldüğünde önce sebebi bulunuyor; yalnızca yüzeyi kapatmak birkaç ay sonra aynı yerde tekrar açılıyor.",
      },
      {
        p: "Çatlağın hareket edip etmediğini anlamanın basit yolu var: iki tarafına alçıdan küçük bir köprü yapılır. Birkaç hafta içinde kırılıyorsa hareket sürüyor demektir.",
      },
      {
        p: "Duvarın arkasındaki drenaj çalışmıyorsa hareket de durmuyor. Böyle bir durumda önce barbakanlar açılıyor, gerekiyorsa duvar dibine bir drenaj borusu ve çakıl dolgu ekleniyor; onarım ondan sonra anlam kazanıyor.",
      },
      {
        p: "Onarım kararı da çatlağın tipine göre değişiyor. Yüzeysel olanlar sıva ve boyayla kapanıyor; gövdeyi kesen çatlaklarda ise ya bölüm yeniden örülüyor ya duvar arkasına destek yapılıyor.",
      },
    ],
    faqs: [
      {
        q: "Bahçe duvarı temeli ne kadar derin olmalı?",
        a: "Donma derinliğinin altına inmeli; Malatya koşullarında çoğu durumda 60–80 cm yeterli oluyor. Zemin zayıfsa ya da duvar yüksekse temel genişletiliyor. Sığ temelli duvarlar kışın kalkıp çatlıyor.",
      },
      {
        q: "Eğimli arazide panel çit olur mu?",
        a: "Kot farkı azsa olur; direk boyları kademeli ayarlanıyor. Yarım metreyi geçen kot farkında toprağın itmesi devreye giriyor ve önce istinat duvarı gerekiyor. Çit onun üstüne kuruluyor.",
      },
      {
        q: "Barbakan deliği ne işe yarıyor?",
        a: "Duvarın arkasında biriken suyu dışarı alıyor. Bu su hem sürekli itiyor hem kışın donunca genişliyor. Barbakan bırakılmayan bahçe duvarlarında çatlak neredeyse kaçınılmaz oluyor.",
      },
      {
        q: "Bahçe kapısı ne kadar geniş olmalı?",
        a: "Binek araç için üç metre rahat. Traktör, kamyonet ya da inşaat aracı girecekse dört metreye çıkılıyor. Genişliği sonradan artırmak kolon ve kapı kanadı değişimi demek, baştan doğru ölçmek daha ucuz.",
      },
      {
        q: "Duvar örerken hangi borular geçirilmeli?",
        a: "Bahçe kapısı motoru için elektrik, interkom kablosu, kamera hattı ve gerekiyorsa aydınlatma. Kullanılmayacak olsa bile boş bir koruge boru bırakmak, sonradan kanal açmanın maliyetinin çok altında.",
      },
      {
        q: "Komşu sınırına duvar örerken izin gerekir mi?",
        a: "Sınırın tam yeri ve temelin nereye taştığı iki tarafı da ilgilendiriyor. Tereddüt varsa kadastro çapına bakmak en net yol. İş başlamadan konuşulduğunda sonradan sorun çıkmıyor.",
      },
      {
        q: "Yüksek duvar rüzgârda sorun çıkarır mı?",
        a: "Kapalı yüzey rüzgârın tamamını üzerine alıyor. Yüksek duvarlarda belli aralıklarla kolon veya payanda yapılıyor. Üst kısmı ferforje bırakmak hem yükü azaltıyor hem görünümü hafifletiyor.",
      },
    ],
    related: ["istinat-duvari-neden-catlar", "bahce-duzenlemesinde-sira", "demir-isleri-neden-paslanir"],
  },

  {
    slug: "is-yeri-guc-artirimi",
    title: "İş yerinde güç artırımı: ne zaman gerekir?",
    category: "Sanayi Elektriği",
    published: "2026-08-16",
    reading: 10,
    metaTitle: "İş Yeri Güç Artırımı | Abonelik, Pano ve Trafo",
    metaDesc:
      "Sigorta atıyor, makine kalkmıyor. Güç artırımı ne zaman gerekir, mevcut abonelikle ne yapılır, pano ve kolon hattı nasıl değişir, trafo ne zaman gündeme gelir?",
    keywords: [
      "güç artırımı",
      "iş yeri elektrik aboneliği",
      "kolon hattı",
      "trafo",
      "sanayi elektriği",
    ],
    excerpt:
      "Makine kalkarken ışıklar kısılıyorsa sorun genelde makinede değil. Tesisin çektiği güç ile hattın taşıdığı güç arasındaki fark, kendini önce böyle gösteriyor.",
    services: ["fabrika-elektrik-tesisati", "elektrik-panosu", "kompanzasyon-panosu"],
    intro:
      "İş yerlerinde elektrik sorunları çoğu kez yeni bir makine alındıktan sonra başlıyor. Sigorta atıyor, motor zor kalkıyor, ışıklar titriyor. Bu noktada akla ilk gelen çözüm sigortayı büyütmek oluyor ama asıl soru başka: tesisin ihtiyacı ile abonelik gücü ve hattın kapasitesi birbirini tutuyor mu?",
    body: [
      { h2: "Kısa cevap" },
      {
        p: "Güç artırımı, çekilen toplam gücün abonelik gücüne yaklaştığı ya da onu aştığı noktada gerekiyor. Sigortayı büyütmek bu sorunu çözmüyor; yalnızca korumayı kaldırıp kabloyu riske atıyor.",
      },
      {
        p: "İşin sırası şu: önce gerçek ihtiyaç hesaplanır, sonra mevcut kolon ve pano kapasitesi ölçülür, gerekiyorsa abonelik gücü artırılır. Trafo ise ancak belli bir güç seviyesinin üzerinde gündeme geliyor.",
      },

      { h2: "Belirtiler" },
      {
        ul: [
          "Büyük bir motor kalkarken aydınlatma kısa süre kısılıyor.",
          "Ana sigorta belli saatlerde, hep aynı işlemler sırasında atıyor.",
          "Kablolar ve pano içi normalden sıcak.",
          "Motorlar zor kalkıyor, termik koruma sık atıyor.",
          "Yeni bir makine eklenince başka bir hat çalışmaz oluyor.",
        ],
      },
      {
        p: "Birinci madde en açık işaret. Işıkların kısılması, hattaki gerilimin anlık düştüğünü gösteriyor; bu da hattın o akımı taşımakta zorlandığı anlamına geliyor.",
      },

      { h2: "Önce gerçek ihtiyaç hesaplanır" },
      {
        p: "Bütün cihazların etiket gücünü toplayıp o rakamı istemek, gereğinden büyük bir abonelik demek. Çünkü hiçbir tesiste tüm makineler aynı anda tam yükte çalışmıyor.",
      },
      {
        p: "Hesapta eşzamanlılık katsayısı kullanılıyor: hangi makinelerin aynı anda çalıştığı gerçekçi biçimde belirleniyor. Buna motorların kalkış akımı ve ileride eklenecek yükler için bir pay ekleniyor.",
      },
      {
        table: {
          head: ["Adım", "Ne yapılır"],
          rows: [
            ["Yük listesi", "Her cihazın gücü ve çalışma saati yazılır"],
            ["Eşzamanlılık", "Aynı anda çalışanlar belirlenir"],
            ["Kalkış akımı", "Büyük motorlar için pay eklenir"],
            ["Büyüme payı", "Gelecek yatırım için yüzde eklenir"],
            ["Sonuç", "Talep edilecek güç ortaya çıkar"],
          ],
        },
      },
      {
        p: "Dördüncü satır uzun vadede en çok para kazandıran adım. İki yıl sonra tekrar artırım yapmak, baştan biraz geniş almaktan çok daha pahalı.",
      },

      { h2: "Ölçüm yapmadan karar verilmiyor" },
      {
        p: "Hesap kâğıt üzerinde bir tahmin veriyor; gerçeği görmek için ölçüm gerekiyor. Pano girişine takılan bir analizör, birkaç gün boyunca çekilen akımı, gerilimi ve tepe yükleri kaydediyor.",
      },
      {
        p: "Bu kayıt üç şeyi birden gösteriyor: gerçek tepe güç, gerilim düşümünün ne kadar olduğu ve fazlar arası dengesizlik. Üçü de artırım kararını doğrudan etkiliyor.",
      },

      { h2: "Faz dengesizliği" },
      {
        p: "Bazı tesislerde sorun toplam güçte değil, yükün fazlara eşit dağılmamasında. Bir faz doluyken diğer ikisi boş kalıyor ve dolu faz sürekli zorlanıyor.",
      },
      {
        p: "Bu durumda güç artırımına gerek kalmadan yükleri yeniden dağıtmak sorunu çözebiliyor. Pano üzerinde yapılan birkaç saatlik bir düzenleme, koca bir yatırımın yerine geçiyor. Ölçüm bu ihtimali baştan görmeyi sağlıyor.",
      },

      { h2: "Kompanzasyon tarafı" },
      {
        p: "Motorların çektiği reaktif güç, hattı meşgul ediyor ama iş üretmiyor. Kompanzasyon panosu bu reaktif gücü yerinde karşılayarak hattı rahatlatıyor.",
      },
      {
        p: "Sınıra dayanmış bir tesiste kompanzasyonu düzeltmek, bazen güç artırımına gerek bırakmıyor. Üstelik reaktif ceza kalemini de ortadan kaldırıyor. Artırım düşünülüyorsa önce buraya bakılması mantıklı oluyor.",
      },

      { h2: "Kolon hattı yeterli mi?" },
      {
        p: "Abonelik gücü artırılsa bile kablo aynı kalıyorsa sorun sürüyor. Kolon hattının kesiti, yeni güce ve mesafeye göre yeniden hesaplanıyor.",
      },
      {
        p: "Uzun kolon hatlarında gerilim düşümü belirleyici oluyor. Sayaçtan panoya yüz metre giden bir hatta kesit, akıma değil gerilim düşümüne göre seçiliyor; aksi hâlde makine panoda yeterli gerilimi bulamıyor.",
      },

      { h2: "Pano değişimi" },
      {
        p: "Eski panolar çoğunlukla yeni gücü kaldıramıyor. Ana şalter, baralar ve sigortalar yeni akıma göre seçiliyor; pano hacmi de ısınmayı karşılayacak kadar olmalı.",
      },
      {
        ul: [
          "Ana kesici yeni akıma göre seçilir.",
          "Bara kesiti ve bağlantı noktaları yenilenir.",
          "Kaçak akım koruması hat bazında planlanır.",
          "Pano içi havalandırma hesaba katılır.",
          "Yedek yer bırakılır; sonraki eklemeler için.",
          "Etiketleme ve tek hat şeması teslimde bırakılır.",
        ],
      },
      {
        p: "Son iki madde bir–iki yıl sonra çıkan arızada işi kısaltıyor. Etiketsiz bir panoda hangi sigortanın nereye gittiğini bulmak saatler alıyor.",
      },

      { h2: "Trafo ne zaman gündeme gelir?" },
      {
        p: "Alçak gerilim aboneliğinin bir sınırı var. Bu sınırın üzerindeki tesisler orta gerilimden beslenip kendi trafosunu kuruyor.",
      },
      {
        p: "Trafolu sisteme geçmek yalnızca bir cihaz almak değil: trafo binası ya da köşkü, orta gerilim hücreleri, koruma röleleri ve topraklama tesisi gerekiyor. Proje, onay ve kabul süreçleri de var. Dolayısıyla karar, ihtiyacın gerçekten o seviyeye ulaştığı durumlarda veriliyor.",
      },

      { h2: "Süreç nasıl işliyor?" },
      {
        ol: [
          "Yük listesi ve ölçümle gerçek ihtiyaç belirlenir.",
          "Kompanzasyon ve faz dengesi kontrol edilir.",
          "Gerekli güç netleşince proje hazırlanır.",
          "Dağıtım şirketine başvuru yapılır.",
          "Onay sonrası kolon, pano ve topraklama yenilenir.",
          "Kabul ve devreye alma yapılır.",
        ],
      },
      {
        p: "Sürenin çoğu üçüncü ve dördüncü adımda geçiyor. Uygulama tarafı sıklıkla birkaç günlük iş; bekleme onay tarafında oluyor. O yüzden yeni makine siparişi verilirken süreç aynı anda başlatılıyor.",
      },

      { h2: "Geçici çözümler" },
      {
        p: "Onay beklenirken üretimin durmaması için yapılabilecekler var. Büyük motorların kalkışını yumuşak yol vericiyle almak, tepe akımı epeyce düşürüyor.",
      },
      {
        p: "Bir diğeri de yük kaydırma: yüksek çekişli işlemleri farklı saatlere dağıtmak. Fırın, kompresör ve pres gibi cihazların aynı anda kalkmaması, mevcut hattı rahatlatıyor.",
      },

      { h2: "Jeneratör bir çözüm mü?" },
      {
        p: "Jeneratör, kesinti sorununu çözüyor; kapasite sorununu çözmüyor. Şebekeden yeterli güç çekilemiyorsa jeneratör kurmak bunu düzeltmiyor, yalnızca elektrik kesildiğinde üretimin sürmesini sağlıyor.",
      },
      {
        p: "İkisi karıştırıldığında yanlış yatırım yapılıyor. Doğru sıralama şu: önce kapasite düzeltilir, kesinti bir sorunsa jeneratör ayrıca değerlendirilir.",
      },

      { h2: "Topraklama unutulmasın" },
      {
        p: "Güç arttıkça topraklama tesisinin de büyümesi gerekiyor. Eski, tek çubuklu bir topraklama yeni yükte yeterli olmuyor ve ölçüm değerleri sınırın üstüne çıkıyor.",
      },
      {
        p: "Artırım işlerinde topraklama ölçümü baştan yapılıyor, gerekiyorsa ek elektrot ekleniyor. Kabul aşamasında da bu ölçüm isteniyor; sonradan uğraşmamak için işin başında halledilmesi rahat oluyor.",
      },

      { h2: "Malatya'da tipik tablo" },
      {
        p: "OSB'lerdeki tesislerde en sık karşılaştığımız durum, üretim büyüdükçe kolon hattının geride kalması. Abonelik gücü yeterli görünüyor ama panoya giden kablo eski kapasiteye göre çekilmiş.",
      },
      {
        p: "Merkezdeki dükkân ve kafelerde ise sorun çoğu kez tek fazlı aboneliğin sınıra dayanması oluyor. Fırın, klima ve mutfak ekipmanı aynı anda çalıştığında hat yetmiyor; üç faza geçiş çoğu durumda doğru adım. Kırsalda ise sulama pompaları için yapılan artırımlar öne çıkıyor; orada kolon hattının uzunluğu belirleyici oluyor. Tarladaki panoya giden hat bazen yüzlerce metre buluyor ve kesit seçimi akıma değil gerilim düşümüne göre yapılıyor.",
      },

      { h2: "Tek fazdan üç faza geçiş" },
      {
        p: "Küçük iş yerlerinde en sık yapılan artırım bu. Tek fazlı bir abonelikte çekilebilecek güç sınırlı; üç faza geçildiğinde aynı kablo kesitiyle çok daha fazla güç taşınabiliyor.",
      },
      {
        p: "Geçiş, sayaç değişimi ve pano düzenlemesi gerektiriyor. Mevcut tek fazlı cihazlar çalışmaya devam ediyor; yalnızca fazlara dengeli dağıtılmaları gerekiyor.",
      },
      {
        p: "Üç fazlı motorlu makine alınacaksa bu geçiş zaten zorunlu. Fırın, kompresör, asansör ve büyük soğutma gruplarının çoğu üç fazlı çalışıyor.",
      },

      { h2: "Motor kalkış akımı" },
      {
        p: "Bir motor kalkarken normal çalışma akımının birkaç katını çekiyor. Bu kısa süreli tepe, hattı zorlayan ve ışıkları kısan asıl etken.",
      },
      {
        ul: [
          "Yıldız–üçgen yol verme: kalkış akımını düşürür, klasik ve ucuz yöntem.",
          "Yumuşak yol verici: kalkışı kademeli yapar, mekanik zorlamayı da azaltır.",
          "Frekans sürücü: hem kalkışı hem çalışma devrini kontrol eder.",
          "Kalkışları sıraya koymak: büyük motorların aynı anda kalkmaması sağlanır.",
        ],
      },
      {
        p: "Üçüncü seçenek en pahalısı ama değişken yükte çalışan makinelerde enerji tarafında da kazandırıyor. Sabit devirde çalışan bir motorda yumuşak yol verici genelde yeterli oluyor.",
      },

      { h2: "Sayaç ve ölçü devresi" },
      {
        p: "Güç arttıkça sayaç doğrudan ölçüm yapamıyor; araya akım trafoları giriyor. Bu trafoların oranı, ölçülen değerin doğruluğunu belirliyor.",
      },
      {
        p: "Yanlış seçilmiş bir akım trafosu, faturayı olduğundan farklı gösterebiliyor. Artırım sonrasında ilk faturayı kendi ölçümünüzle karşılaştırmak, bu tür bir hatayı erken yakalıyor.",
      },

      { h2: "Enerji izleme" },
      {
        p: "Artırım yapılan tesislerde panoya bir enerji analizörü koymak, sonraki bütün kararları kolaylaştırıyor. Hangi hattın ne çektiği, tepe yükün ne zaman oluştuğu ve güç katsayısının nasıl seyrettiği sürekli görünür oluyor.",
      },
      {
        p: "Bu veri iki işe yarıyor: bir sonraki büyümede hesap tahmine değil kayda dayanıyor, ve tüketimi düşürecek noktalar rakamla ortaya çıkıyor.",
      },

      { h2: "Yatırımı sıraya koymak" },
      {
        ol: [
          "Ölçüm yapılır, gerçek tablo görülür.",
          "Faz dengesi ve kompanzasyon düzeltilir; sıklıkla en ucuz kazanç burada.",
          "Motor kalkışları yumuşatılır.",
          "Kolon hattı ve pano gözden geçirilir.",
          "Gerekiyorsa abonelik gücü artırılır.",
          "Sınır aşılıyorsa trafolu sistem değerlendirilir.",
        ],
      },
      {
        p: "Bu sıra takip edildiğinde tesislerin bir kısmı üçüncü adımda duruyor; artırıma hiç gerek kalmıyor. Sırayı tersten kurmak ise en pahalı yatırımı en başa alıyor.",
      },

      { h2: "Kesintisiz çalışması gereken hatlar" },
      {
        p: "Güç artırımı yapılırken hangi hatların kesintiye tahammülü olmadığı da belirleniyor. Soğuk hava deposu, sunucu odası, güvenlik sistemi ve bazı üretim hatları bu gruba giriyor.",
      },
      {
        p: "Bu hatlar panoda ayrı gruplanıyor ve gerekiyorsa kesintisiz güç kaynağına ya da jeneratöre bağlanıyor. Ayrım baştan yapılmazsa sonradan kablo çekmek gerekiyor.",
      },
      {
        p: "Ayrıca bu grupların ayrı sigorta altında olması, arıza aramasını da kısaltıyor. Bir hat attığında bütün tesis durmuyor.",
      },

      { h2: "Belgeler ve teslim" },
      {
        ul: [
          "Tek hat şeması, güncel hâliyle panoda asılı.",
          "Pano etiketleri; hangi sigorta nereye gidiyor.",
          "Topraklama ölçüm raporu.",
          "Kullanılan kablo kesitleri ve güzergâh krokisi.",
          "Kompanzasyon kademeleri ve ayar değerleri.",
          "Ölçüm kaydı; artırım öncesi ve sonrası.",
        ],
      },
      {
        p: "Bu altı belge, ileride yapılacak her müdahalede işi kısaltıyor. Elde şema olmayan tesislerde küçük bir ekleme bile önce keşif gerektiriyor.",
      },

      { h2: "Artırım sonrası izlenecekler" },
      {
        p: "Yeni düzen devreye alındıktan sonra ilk birkaç hafta gözlem dönemi. Pano sıcaklığı, sigortaların davranışı ve fatura üzerindeki reaktif kalemi bu dönemde takip ediliyor.",
      },
      {
        p: "Kompanzasyon panosu da yeni yüke göre ayarlanıyor. Eski kademeler yeni tesise göre yetersiz ya da fazla kalabiliyor; ikisi de faturaya yansıyor.",
      },
      {
        p: "Termal kamerayla yapılan bir kontrol, gevşek kalmış bağlantıları daha ısınma büyümeden gösteriyor. Yeni kurulan panolarda ilk ay içinde bir kez bakmak, sonraki yıllarda çıkabilecek arızaların çoğunu baştan kesiyor.",
      },
      {
        p: "Bir de bağlantı tork kontrolü var. Yeni yapılan panolarda klemensler ilk ısınma çevrimlerinden sonra bir miktar gevşiyor; ilk ay sonunda tekrar sıkılması standart bir uygulama.",
      },
      {
        p: "Sonrasında yıllık bakım yeterli oluyor. Termal tarama, sıkma kontrolü ve topraklama ölçümü; üçü birlikte yarım günde bitiyor ve tesisin en pahalı duruşlarını önlüyor.",
      },
    ],
    faqs: [
      {
        q: "Sigortayı büyütsem yeterli olmaz mı?",
        a: "Olmuyor ve tehlikeli. Sigorta kabloyu koruyor; büyütünce kablo aynı kalıyor ama koruma kalkıyor. Kablo ısınır, yalıtım bozulur. Doğru yol kabloyu ve gerekiyorsa aboneliği güce göre yeniden boyutlandırmak.",
      },
      {
        q: "Ne kadar güç istemeliyim?",
        a: "Cihazların etiket toplamı değil, eşzamanlılık hesabıyla bulunan değer esas alınıyor. Buna motor kalkış akımı ve gelecekteki büyüme için bir pay ekleniyor. Birkaç günlük ölçüm bu hesabı çok daha isabetli hale getiriyor.",
      },
      {
        q: "Artırım yapmadan sorunu çözmenin yolu var mı?",
        a: "Bazen var. Faz dengesizliğini gidermek, kompanzasyonu düzeltmek ve büyük motorlara yumuşak yol verici takmak mevcut hattı gözle görülür ölçüde rahatlatıyor. Ölçüm bu ihtimalleri baştan gösteriyor.",
      },
      {
        q: "Trafo kurmak zorunda mıyım?",
        a: "Alçak gerilim aboneliğinin sınırı aşılmadıkça gerekmiyor. Trafolu sisteme geçmek köşk, orta gerilim hücresi, koruma ve topraklama tesisi demek. Bu karar ancak ihtiyaç gerçekten o seviyeye çıktığında veriliyor.",
      },
      {
        q: "Kolon hattı da değişecek mi?",
        a: "Genelde evet. Yeni güce ve mesafeye göre kesit yeniden hesaplanıyor. Uzun hatlarda seçim akıma değil gerilim düşümüne göre yapılıyor; kablo eski kalırsa artırım kâğıt üzerinde kalıyor.",
      },
      {
        q: "İşlem ne kadar sürüyor?",
        a: "Uygulama tarafı birkaç gün; süre esas olarak proje onayı ve dağıtım şirketi sürecinde geçiyor. Bunun için yeni makine siparişi verilirken başvuru da aynı anda başlatılıyor.",
      },
      {
        q: "Tek fazdan üç faza geçmek zor mu?",
        a: "Sayaç değişimi ve pano düzenlemesi gerekiyor, uygulama tarafı kısa. Mevcut tek fazlı cihazlar çalışmaya devam ediyor; yalnızca fazlara dengeli dağıtılmaları gerekiyor. Üç fazlı makine alınacaksa bu geçiş zaten şart.",
      },
      {
        q: "Jeneratör alsam güç sorunu çözülür mü?",
        a: "Çözülmüyor. Jeneratör kesintide üretimin sürmesini sağlıyor, şebekeden çekilebilecek gücü artırmıyor. Önce kapasite düzeltilir, kesinti ayrı bir sorunsa jeneratör ayrıca değerlendirilir.",
      },
    ],
    related: ["isyeri-elektrik-gucu-hesabi", "kompanzasyon-panosu-nedir", "fabrika-elektrik-tesisati-planlama"],
  },

  {
    slug: "elektrik-faturasi-neden-yuksek",
    title: "Elektrik faturası neden yüksek geldi?",
    category: "Enerji",
    published: "2026-08-16",
    reading: 10,
    metaTitle: "Elektrik Faturası Neden Yüksek? | Sırayla Kontrol",
    metaDesc:
      "Fatura birden arttıysa nereden başlamalı? Sayaç okuma, kaçak kontrolü, cihaz tüketimi, kombi ve termosifon, ortak sayaç ve bekleme tüketimi.",
    keywords: [
      "elektrik faturası yüksek",
      "elektrik tüketimi",
      "sayaç kontrolü",
      "kaçak akım",
      "elektrik tasarrufu",
    ],
    excerpt:
      "Fatura iki katına çıktığında ilk akla gelen sayaç oluyor. Oysa vakaların çoğunda sebep, evde sessizce çalışmaya başlamış bir cihaz.",
    services: ["elektrik-ariza", "elektrik-tesisati", "elektrik-panosu"],
    intro:
      "Elektrik faturasının beklenmedik biçimde yükselmesi, çoğu evde önce bir hata aramayla başlıyor. Sayaç mı yanlış okundu, komşuya mı kaçıyor, tarife mi değişti? Bunların hepsi mümkün ama pratikte sebep çoğunlukla daha sade oluyor. Bu yazıda faturayı adım adım nasıl daraltacağınızı anlattık; sırayla giderseniz çoğu durumda sebebi kendiniz buluyorsunuz.",
    body: [
      { h2: "Önce sayacı kendiniz okuyun" },
      {
        p: "İlk adım her zaman aynı: sayaç değerini not edin, bir hafta sonra tekrar okuyun. Aradaki fark haftalık gerçek tüketiminizi veriyor.",
      },
      {
        p: "Faturadaki dönem tüketimiyle bu ölçümü karşılaştırın. İkisi tutuyorsa fatura doğru, sorun tüketimde. Tutmuyorsa okuma ya da tarife tarafına bakmak gerekiyor.",
      },

      { h2: "Kaçak var mı?" },
      {
        p: "İkinci adım daha da basit. Evdeki bütün cihazları kapatın, buzdolabı dahil fişleri çekin, sonra sayaca bakın. Sayaç hâlâ dönüyorsa bir yerde tüketim sürüyor demektir.",
      },
      {
        p: "Bu tabloda iki ihtimal var: unutulan bir cihaz ya da tesisatta kaçak. Sigortaları tek tek kapatıp hangisinde sayacın durduğunu görmek, sorunu hangi hattın taşıdığını gösteriyor.",
      },

      { h2: "Isıtma ve su ısıtma" },
      {
        p: "Elektrikli ısıtıcı, termosifon ve klima; faturayı en hızlı büyüten üç kalem. Bir ısıtıcı, evdeki bütün aydınlatmanın toplamından kat kat fazla çekiyor.",
      },
      {
        table: {
          head: ["Cihaz", "Tipik güç", "Günde 4 saatte"],
          rows: [
            ["Elektrikli ısıtıcı", "2000 W", "8 kWh"],
            ["Termosifon", "1500–2000 W", "6–8 kWh"],
            ["Klima (ısıtma)", "1000–1500 W", "4–6 kWh"],
            ["Bulaşık makinesi", "1200 W", "1,5 kWh (bir program)"],
            ["Buzdolabı", "100–200 W", "1–2 kWh (gün boyu)"],
            ["LED aydınlatma", "10 W", "0,04 kWh"],
          ],
        },
      },
      {
        p: "Tablodan çıkan sonuç şu: ışıkları söndürmek doğru bir alışkanlık ama faturada büyük fark yaratmıyor. Isıtma ve su ısıtma kalemine dokunmadan tasarruf zor.",
      },

      { h2: "Termosifon sürekli mi açık?" },
      {
        p: "Termosifonun günün her saati sıcak su hazır tutması, en sessiz tüketim kalemlerinden biri. Kimse kullanmasa bile su soğudukça rezistans devreye giriyor.",
      },
      {
        p: "Kullanım saatinden bir–iki saat önce açıp sonra kapatmak, çoğu evde gözle görülür fark yaratıyor. Zaman saati takmak bu işi otomatikleştiriyor ve alışkanlığa bağlı kalmıyor.",
      },

      { h2: "Kombinin elektrik tarafı" },
      {
        p: "Kombi doğalgazla ısıtıyor ama pompası, fanı ve elektroniği elektrikle çalışıyor. Sürekli çalışan bir sirkülasyon pompası, ayda hatırı sayılır bir tüketim yapıyor.",
      },
      {
        p: "Eski tip sabit devirli pompalar, yeni frekans kontrollü pompalara göre epeyce fazla çekiyor. Kombi değişiminde bu kalem çoğu durumda konuşulmuyor ama fark faturada görülüyor.",
      },

      { h2: "Bekleme tüketimi" },
      {
        p: "Kapalı görünen cihazların çoğu tam kapanmıyor. Televizyon, modem, şarj adaptörü, mikrodalga saati, uydu alıcısı; hepsi birkaç watt çekiyor.",
      },
      {
        p: "Tek başına küçük ama toplandığında ve yılın her saatiyle çarpıldığında görünür bir kaleme dönüşüyor. Anahtarlı priz kullanmak, bu grubu tek hareketle kesiyor.",
      },

      { h2: "Ortak sayaç ve komşu" },
      {
        p: "Apartmanlarda dairenin sayacına ortak alan yükünün karıştığı durumlar oluyor. Merdiven aydınlatması, hidrofor ya da asansör, yanlış bağlanmışsa bir dairenin sayacından geçebiliyor.",
      },
      {
        p: "Anlamanın yolu şu: daire içindeki tüm sigortaları kapatıp sayaca bakmak. Sayaç hâlâ dönüyorsa o hatta daire dışından bir yük bağlı demektir. Bu, panoda yapılan bir kontrolle ortaya çıkıyor.",
      },

      { h2: "Sayaç doğru çalışıyor mu?" },
      {
        p: "Sayaç arızası nadir ama imkânsız değil. Şüphe varsa bilinen güçte bir cihazla test yapılabiliyor: 2000 W bir ısıtıcı bir saat çalıştığında sayaç yaklaşık 2 kWh artmalı.",
      },
      {
        p: "Fark büyükse sayaç kontrolü için dağıtım şirketine başvuruluyor. Bu başvuru bir hakkınız ve ölçüm sonucunda sayaç hatalı çıkarsa fatura düzeltiliyor.",
      },

      { h2: "Tarife ve dönem" },
      {
        p: "Bazen tüketim aynı, fatura farklı. Sebebi okuma dönemi uzun gelmiş olabiliyor; otuz gün yerine kırk gün okunan bir dönem faturayı doğal olarak büyütüyor.",
      },
      {
        p: "Faturanın üstündeki okuma tarihlerine bakmak bunu hemen gösteriyor. Kademeli tarife uygulanan aylarda da üst kademeye geçiş faturayı beklenenden fazla artırabiliyor.",
      },

      { h2: "Mevsimsel etki" },
      {
        p: "Yazın klima, kışın ısıtıcı ve termosifon; iki uçta da tüketim yükseliyor. Faturayı geçen ayla değil, geçen yılın aynı ayıyla karşılaştırmak daha doğru bir okuma veriyor.",
      },
      {
        p: "Geçen yılın aynı dönemine göre gözle görülür bir artış varsa, o zaman aramaya değer. Yoksa fark mevsimden geliyor olabilir.",
      },

      { h2: "Cihaz yaşlanması" },
      {
        p: "Eskiyen cihazlar aynı işi daha çok elektrikle yapıyor. Kireçlenmiş bir termosifon rezistansı, kirli bir klima filtresi ve contası bozulmuş bir buzdolabı bunun en sık örnekleri.",
      },
      {
        p: "Buzdolabı contası kolayca test ediliyor: kapağın arasına bir kâğıt sıkıştırın, kolayca çekiliyorsa conta kaçırıyor demektir. Motor sürekli çalışıyor ve tüketim artıyor.",
      },

      { h2: "Sırayla daraltma" },
      {
        ol: [
          "Sayacı bir hafta arayla okuyun, gerçek tüketimi bulun.",
          "Her şeyi kapatıp sayacın durup durmadığına bakın.",
          "Sigortaları tek tek kapatıp hangi hattın çektiğini bulun.",
          "Isıtıcı, termosifon ve klimanın çalışma saatlerini yazın.",
          "Bekleme yüklerini anahtarlı prizle kesin, farkı ölçün.",
          "Geçen yılın aynı dönemiyle karşılaştırın.",
        ],
      },
      {
        p: "Bu altı adım evde yapılabiliyor ve çoğu vakada sebebi buluyor. Sayaç kapalıyken dönmeye devam ediyorsa iş elektrikçiye kalıyor; orada kaçak akım ölçümü gerekiyor.",
      },

      { h2: "Kaçak akım ölçümü" },
      {
        p: "Tesisattan toprağa sızan akım hem faturayı büyütüyor hem tehlike oluşturuyor. Nemli duvardan geçen eski kablolar, banyoda ıslanmış bir buat ya da yaşlanmış bir cihaz sık sebepler.",
      },
      {
        p: "Ölçüm izolasyon direnci ölçen cihazla yapılıyor ve hat hat ilerleniyor. Bulunan noktada kablo ya da cihaz yenileniyor. Kaçak akım rölesi sık atıyorsa bu ölçüm zaten yapılmalı; röle bir uyarı veriyor.",
      },

      { h2: "Faturayı kalıcı düşüren şeyler" },
      {
        ul: [
          "Termosifonu zaman saatine bağlamak.",
          "Aydınlatmayı LED'e çevirmek, ortak alanda sensör kullanmak.",
          "Klima filtrelerini temiz tutmak, dış ünitenin önünü açmak.",
          "Eski buzdolabı contasını yenilemek.",
          "Bekleme yüklerini anahtarlı prizde toplamak.",
          "Kombi pompasını frekans kontrollü tiple değiştirmek.",
        ],
      },
      {
        p: "Bu altı maddenin hiçbiri büyük bir yatırım değil ama toplamı faturada hissediliyor. En hızlı geri dönen kalem genelde birincisi oluyor.",
      },

      { h2: "Malatya'da ne görüyoruz?" },
      {
        p: "Kışın gelen yüksek fatura şikâyetlerinin büyük kısmında sebep elektrikli ısıtıcı çıkıyor. Bir odayı ısıtmak için kullanılan tek bir ısıtıcı bile aylık tüketimi görünür biçimde değiştiriyor.",
      },
      {
        p: "Yazın ise klima öne geçiyor; özellikle dış ünitesi güneşte duran ya da filtresi yıllardır temizlenmemiş cihazlarda tüketim epeyce yükseliyor. Kırsal mahallelerde ve bağ evlerinde sulama pompası ayrı bir kalem; pompanın çalışma saatini kaydetmek, faturayı anlamanın en kestirme yolu oluyor.",
      },

      { h2: "Priz ölçerle cihaz cihaz bakmak" },
      {
        p: "Tahmin yürütmek yerine ölçmek çok daha hızlı sonuç veriyor. Priz arasına takılan küçük bir ölçer, o cihazın ne çektiğini ve gün boyunca ne harcadığını gösteriyor.",
      },
      {
        p: "Şüphelenilen cihazı bir gün boyunca ölçerde bırakmak yeterli. Buzdolabı, derin dondurucu ve elektrikli ısıtıcı en çok sürpriz çıkan üç cihaz; özellikle yaşlı buzdolapları etiketinde yazandan çok daha fazla çekebiliyor.",
      },
      {
        p: "Ölçer aynı zamanda bekleme tüketimini de gösteriyor. Kapalı sanılan bir televizyonun ya da uydu alıcısının kaç watt çektiğini görmek, anahtarlı priz kararını kolaylaştırıyor.",
      },

      { h2: "Sulama pompası olan evlerde" },
      {
        p: "Bahçe ve arazi sulaması yapan hanelerde pompa, faturanın en büyük kalemi hâline gelebiliyor. Bir buçuk kilovatlık bir pompa günde altı saat çalıştığında aylık tüketimi tek başına ikiye katlayabiliyor.",
      },
      {
        p: "Burada iki şeye bakılıyor: pompa doğru boyutta mı ve gereğinden uzun mu çalışıyor. Kuru çalışma korumasız bir sistemde pompa su bittikten sonra da dönmeye devam ediyor; bu hem elektrik hem pompa ömrü demek.",
      },
      {
        p: "Otomasyon eklendiğinde tüketim sıklıkla düşüyor, çünkü sulama süresi ihtiyaca göre kısalıyor ve pompa boşuna dönmüyor.",
      },

      { h2: "Kaçak akım rölesi ne söylüyor?" },
      {
        p: "Röle atmıyor diye kaçak yok demek değil. Röle belli bir eşiğin üzerindeki kaçağı görüyor; eşiğin altındaki sızıntı hem sayaçta okunuyor hem fark edilmiyor.",
      },
      {
        p: "Röle sık atıyorsa ise zaten bir sorun var demektir ve ölçüm gecikmemeli. Nemli banyo duvarından geçen eski kablo, dış aydınlatma hattı ve su almış bir buat en sık çıkan üç nokta.",
      },

      { h2: "Faturayı okumayı öğrenmek" },
      {
        ul: [
          "Okuma tarihleri: dönem kaç gün sürmüş?",
          "İlk ve son endeks: aradaki fark tüketiminiz.",
          "Birim fiyat ve kademe: üst kademeye geçilmiş mi?",
          "Dağıtım bedeli ve vergiler: tüketimden bağımsız kalemler.",
          "Geçen yılın aynı dönemi: karşılaştırma için doğru referans.",
        ],
      },
      {
        p: "Bu beş satır faturanın hikâyesini anlatıyor. Çoğu kişi yalnızca toplam tutara bakıyor; oysa artışın nereden geldiği bu satırlarda yazıyor.",
      },

      { h2: "Klimayı doğru kullanmak" },
      {
        p: "Klima, yazın en büyük kalem olduğu için küçük alışkanlıklar burada büyük fark yaratıyor. Sıcaklığı gereğinden düşük ayarlamak, cihazı sürekli tam güçte çalıştırıyor.",
      },
      {
        p: "Dış ünitenin gölgede ve önü açık olması da verimi doğrudan etkiliyor. Güneş altında, duvara sıkışmış bir dış ünite aynı soğutmayı açıkça fazla elektrikle yapıyor.",
      },
      {
        p: "Filtre temizliği ise yılda iki kez yapılan, on dakikalık ama tüketimde hissedilen bir bakım. Tıkalı filtre hava geçişini kısıyor, cihaz daha uzun çalışıyor.",
      },

      { h2: "Yeni cihaz almaya değer mi?" },
      {
        p: "Eski bir buzdolabı ya da klima değişimi, karar verilirken tek bir hesaba bakılarak yapılıyor: yıllık tüketim farkı ile cihaz bedeli arasındaki oran.",
      },
      {
        p: "Priz ölçerle mevcut cihazın gerçek tüketimini bulmak bu hesabı sağlam yapıyor. On beş yıllık bir buzdolabı çoğu kez etiketinde yazandan çok fazla çekiyor ve değişim birkaç yılda kendini ödüyor.",
      },
      {
        p: "Buna karşılık beş yaşındaki bir cihazı değiştirmek genelde anlamlı çıkmıyor; oradaki kazanç bakım ve doğru kullanımda.",
      },

      { h2: "Aydınlatmayı yenilemek" },
      {
        p: "Evde LED'e geçiş büyük bir kalem değil ama ortak alanlarda tablo değişiyor. Gece boyunca yanan bir apartman merdiveninde eski armatürler ciddi bir yük oluşturuyor.",
      },
      {
        p: "LED armatür ve sensörlü düzen birlikte yapıldığında ortak gider gözle görülür ölçüde düşüyor. Aynı iş sırasında armatürlerin temizlenmesi ve arızalı olanların değişmesi de hallediliyor.",
      },
      {
        p: "Ev içinde ise en çok kullanılan üç–dört noktayı değiştirmek yeterli oluyor. Yılda birkaç saat yanan bir kilerdeki ampulü değiştirmenin geri dönüşü yok; salon, mutfak ve koridor asıl fark yaratılan yerler.",
      },
      {
        p: "Değişirken renk sıcaklığını eskisiyle eşleştirmek de iyi oluyor. Aynı odada farklı tonda iki ampul, tasarruftan çok göze batan bir uyumsuzluk bırakıyor.",
      },

      { h2: "Bir ay boyunca not tutmak" },
      {
        p: "Faturanın sebebini bulmanın en kesin yolu, bir ay boyunca haftalık sayaç okuması yapmak. Dört ölçüm, tüketimin hangi haftalarda yükseldiğini gösteriyor.",
      },
      {
        p: "Yanına o hafta ne olduğunu yazmak yeterli: misafir geldi, ısıtıcı çalıştı, çamaşır makinesi çok döndü. Bu basit kayıt, tahminle uğraşmayı bitiriyor ve hangi alışkanlığın faturayı büyüttüğünü ortaya koyuyor. Dört haftanın sonunda elinizde faturadan çok daha ayrıntılı bir tablo oluyor; bir sonraki dönemde neyi değiştireceğiniz de kendiliğinden çıkıyor.",
      },
    ],
    faqs: [
      {
        q: "Fatura yüksek geldi, ilk ne yapmalıyım?",
        a: "Sayacı okuyup bir hafta sonra tekrar okuyun. Aradaki fark gerçek tüketiminizi verir ve faturayla tutup tutmadığını gösterir. Tutuyorsa sorun tüketimde, tutmuyorsa okuma veya tarife tarafında.",
      },
      {
        q: "Kaçak olup olmadığını nasıl anlarım?",
        a: "Bütün cihazları kapatıp fişleri çekin, sonra sayaca bakın. Sayaç dönmeye devam ediyorsa ya unutulan bir cihaz var ya tesisatta kaçak. Sigortaları tek tek kapatarak hangi hat olduğunu daraltabilirsiniz.",
      },
      {
        q: "En çok hangi cihaz harcıyor?",
        a: "Isı üreten cihazlar: elektrikli ısıtıcı, termosifon, klima, ütü, su ısıtıcı. Bir ısıtıcı dört saatte 8 kWh çekerken bir LED ampul aynı sürede 0,04 kWh çekiyor. Tasarruf bu kalemde aranır.",
      },
      {
        q: "Termosifonu sürekli açık bırakmak zararlı mı?",
        a: "Su soğudukça rezistans tekrar devreye giriyor, yani kimse kullanmasa bile tüketim sürüyor. Kullanımdan bir–iki saat önce açmak yeterli. Zaman saati bu işi otomatik hale getiriyor.",
      },
      {
        q: "Sayacın bozuk olduğunu nasıl kanıtlarım?",
        a: "Bilinen güçte bir cihazla test yapılabiliyor: 2000 W bir ısıtıcı bir saatte yaklaşık 2 kWh yazmalı. Belirgin fark varsa dağıtım şirketinden sayaç kontrolü isteyebilirsiniz; hatalı çıkarsa fatura düzeltiliyor.",
      },
      {
        q: "Komşuya kaçıyor olabilir mi?",
        a: "Nadir ama mümkün. Daire içindeki tüm sigortaları kapatın; sayaç hâlâ dönüyorsa o hatta daire dışından bir yük bağlı demektir. Panoda yapılacak bir kontrol bunu ortaya çıkarıyor.",
      },
      {
        q: "Kaçak akım rölesi atıyor, faturayla ilgisi var mı?",
        a: "Olabilir. Toprağa sızan akım hem rölenin atmasına yol açıyor hem sayaçta okunuyor. İzolasyon ölçümüyle hat hat aranır; bulunan noktada kablo ya da cihaz yenilenir.",
      },
      {
        q: "Geçen aya göre mi, geçen yıla göre mi bakmalıyım?",
        a: "Geçen yılın aynı ayına bakmak daha doğru. Mevsim değiştiğinde tüketim doğal olarak değişiyor; asıl anlamlı karşılaştırma aynı mevsimdeki geçmiş dönemle yapılan.",
      },
    ],
    related: ["dogalgaz-faturasi-neden-yuksek", "kacak-akim-rolesi-neden-atar", "priz-neden-isinir"],
  },

  {
    slug: "sicak-su-gec-geliyor",
    title: "Muslukta sıcak su neden geç geliyor?",
    category: "Sıhhi Tesisat",
    published: "2026-08-16",
    reading: 9,
    metaTitle: "Sıcak Su Geç Geliyor | Sebepleri ve Çözümü",
    metaDesc:
      "Musluğu açınca sıcak suyu beklemek neden gerekiyor? Hat uzunluğu, boru çapı, yalıtım ve sirkülasyon hattı ile çözümün maliyeti.",
    keywords: [
      "sıcak su geç geliyor",
      "sirkülasyon hattı",
      "sıcak su bekleme",
      "boru yalıtımı",
      "kombi sıcak su",
    ],
    excerpt:
      "Musluğu açıp sıcak suyu beklerken akıp giden su, yılda bir küvet dolusundan çok fazla. Sebebi kombide değil, kombiyle musluk arasındaki mesafede.",
    services: ["sihhi-tesisat", "kombi-bakim-ariza", "bina-tesisat-yenileme"],
    intro:
      "Musluğu açtığınızda sıcak suyun gelmesi için on beş–yirmi saniye beklemek çoğu evde normal karşılanıyor. Oysa bu bekleme hem boşa akan su hem de her seferinde yeniden ısıtılan bir boru dolusu demek. Sebebi anlamak kolay, çözmek de çoğu durumda düşünüldüğü kadar zor değil.",
    body: [
      { h2: "Neden bekliyoruz?" },
      {
        p: "Kombi ya da termosifon suyu ısıttığında, o su musluğa ulaşmak için borudaki soğumuş suyu önüne katıp itmek zorunda. Musluktan ilk akan su, borunun içinde bekleyen soğuk su.",
      },
      {
        p: "Bekleme süresi iki şeye bağlı: hattın uzunluğu ve borunun içindeki hacim. Kombi mutfakta, banyo koridorun ucundaysa o mesafedeki bütün su boşa akıyor.",
      },

      { h2: "Ne kadar su gidiyor?" },
      {
        table: {
          head: ["Boru çapı", "Metrede su", "10 metrede"],
          rows: [
            ["16 mm PEX", "~0,11 litre", "1,1 litre"],
            ["20 mm PPRC", "~0,20 litre", "2,0 litre"],
            ["25 mm PPRC", "~0,32 litre", "3,2 litre"],
            ["32 mm PPRC", "~0,53 litre", "5,3 litre"],
          ],
        },
      },
      {
        p: "Günde on kez sıcak su açılan bir evde, on metrelik 25 mm hatta günde otuz litreye yakın su akıp gidiyor. Bu suyun bir kısmı da ısıtılmış su olduğu için kayıp iki katlı oluyor.",
      },

      { h2: "Boru çapı büyükse süre uzuyor" },
      {
        p: "Sıcak su hattında kalın boru bir avantaj değil. İçinde daha çok su tuttuğu için hem bekleme süresi uzuyor hem daha fazla ısı kaybı oluyor.",
      },
      {
        p: "Dolayısıyla sıcak su hatları, gereken debiyi karşılayacak en küçük çapla çekiliyor. Kolektörlü sistemlerde her musluğa ayrı ince boru gitmesi, tam olarak bu sebeple avantaj sağlıyor.",
      },

      { h2: "Kolektörlü sistem ne değiştiriyor?" },
      {
        p: "Kolektörlü düzende her armatüre kendi ince borusu gidiyor. Boru ince olduğu için içindeki su az; sıcak su daha çabuk ulaşıyor.",
      },
      {
        p: "Ancak mesafe uzunsa bu tek başına yetmiyor. Kolektör ile en uzak musluk arası on beş metreyi geçtiğinde bekleme yine hissediliyor. Asıl çözüm o noktada sirkülasyon hattına dönüyor.",
      },

      { h2: "Sirkülasyon hattı nedir?" },
      {
        p: "Sirkülasyon hattı, sıcak suyun hatta sürekli dolaşmasını sağlayan ikinci bir boru. Su, kombiden çıkıp musluklara gidiyor ve kullanılmayan kısmı geri dönüyor. Böylece boruda her zaman sıcak su bulunuyor.",
      },
      {
        p: "Sonuç: musluk açıldığı anda sıcak su geliyor. Otel ve hastanelerde standart olan bu düzen, büyük konutlarda ve villalarda da giderek yaygınlaşıyor.",
      },

      { h2: "Sirkülasyonun bedeli" },
      {
        p: "Karşılığında iki maliyet var: küçük bir pompa sürekli çalışıyor ve boru sürekli sıcak durduğu için ısı kaybı oluyor.",
      },
      {
        p: "İkisi de yönetilebiliyor. Pompa zaman saatine bağlanarak yalnızca kullanım saatlerinde çalıştırılıyor; sabah ve akşam açık, gece kapalı. Boruların yalıtılması ise ısı kaybını büyük ölçüde kesiyor.",
      },
      {
        p: "Daha ileri bir düzen, musluğun yanına konan bir butonla pompayı tetiklemek: butona basılıyor, birkaç saniyede sıcak su geliyor ve pompa duruyor. Sürekli çalışmanın maliyeti böylece ortadan kalkıyor.",
      },

      { h2: "Yalıtım tek başına ne yapar?" },
      {
        p: "Boru yalıtımı bekleme süresini kısaltmıyor; borudaki suyu hacmi kadar yine boşaltmanız gerekiyor. Ama iki faydası var: hattaki su daha uzun süre sıcak kalıyor ve peş peşe kullanımda bekleme hissedilir ölçüde azalıyor.",
      },
      {
        p: "Duştan çıkıp on dakika sonra musluğu açtığınızda hâlâ sıcak su geliyorsa bunun sebebi yalıtım. Yalıtımsız bir hatta aynı su on dakikada soğumuş oluyor.",
      },

      { h2: "Kombiden mi kaynaklanıyor?" },
      {
        p: "Bekleme süresi uzunsa sebep çoğunlukla hat. Ama kombi tarafında da birkaç ihtimal var: eşanjörün kireçlenmesi, akış anahtarının geç tepki vermesi ya da ekonomi modunun kapalı olması.",
      },
      {
        p: "Ayırt etmenin yolu basit: kombiye en yakın musluğu açın. Orada da bekliyorsanız kombi tarafına bakılır; orada hemen geliyorsa mesele mesafede.",
      },

      { h2: "Termosifonlu evlerde" },
      {
        p: "Termosifon, kullanılan noktaya yakın konduğunda bekleme neredeyse sıfırlanıyor. Banyodaki termosifon banyo musluğuna anında sıcak su veriyor ama mutfağa aynı hızda ulaşmıyor.",
      },
      {
        p: "O yüzden bazı evlerde mutfağa küçük bir ani su ısıtıcısı konuyor. Küçük bir cihaz, tek noktaya hizmet ederek uzun hattın bütün sorununu ortadan kaldırıyor.",
      },

      { h2: "Tadilat sırasında yapılacaklar" },
      {
        ol: [
          "Kombi ya da boyler, en çok kullanılan noktaya mümkün olduğunca yakın konumlandırılır.",
          "Sıcak su hattı en kısa güzergâhtan çekilir.",
          "Çap, gereken debiyi karşılayan en küçük değerde seçilir.",
          "Bütün sıcak su hattı yalıtılır; gömme kısımlar dahil.",
          "Uzun hatlarda sirkülasyon borusu bırakılır, bugün kullanılmasa bile.",
        ],
      },
      {
        p: "Beşinci madde, tadilat sırasında neredeyse hiçbir şeye mal olmayan ama sonradan yapılması çok pahalı olan bir hazırlık.",
      },

      { h2: "Mevcut evde ne yapılabilir?" },
      {
        table: {
          head: ["Durum", "Yapılabilecek"],
          rows: [
            ["Kısa hat, uzun bekleme", "Kombi ayarı ve kireç kontrolü"],
            ["Uzun hat, gömme boru", "Sirkülasyon veya nokta ısıtıcı"],
            ["Görünen boru var", "Yalıtım ekleme"],
            ["Tadilat planlanıyor", "Kolektörlü sistem + sirkülasyon"],
            ["Tek nokta sorunlu", "Ani su ısıtıcısı"],
          ],
        },
      },
      {
        p: "Gömme borulu evlerde kırım yapmadan yapılabilecekler sınırlı; o yüzden çözüm çoğu durumda nokta ısıtıcı ya da sirkülasyon pompasının mevcut dönüş hattına eklenmesi oluyor.",
      },

      { h2: "Su israfını ölçmek" },
      {
        p: "Ne kadar su gittiğini görmek isterseniz basit bir deneme yeterli: musluğu açın, sıcak su gelene kadar akan suyu bir kovada toplayın.",
      },
      {
        p: "Çıkan miktarı günlük kullanım sayısıyla çarpın. Çoğu evde bu hesap, sirkülasyon ya da nokta ısıtıcı yatırımını kendiliğinden anlamlı kılıyor.",
      },

      { h2: "Kireç etkisi" },
      {
        p: "Malatya suyunun sertliği yüksek olduğu için kombi eşanjörü ve termosifon rezistansı zamanla kireçleniyor. Kireç, ısının suya geçmesini zorlaştırıyor ve sıcak su hem geç geliyor hem daha az sıcak oluyor.",
      },
      {
        p: "Düzenli bakımda eşanjör temizliği yapılıyor. Kireç sorunu süreklilik kazanmışsa su yumuşatma tarafına bakmak gerekiyor; bu hem cihaz ömrünü hem sıcak su konforunu değiştiriyor.",
      },

      { h2: "Malatya'da tipik tablo" },
      {
        p: "Merkezdeki dairelerde en sık gördüğümüz durum, kombinin balkonda, banyonun ise koridorun ucunda olması. Aradaki mesafe on–on beş metreyi buluyor ve bekleme kaçınılmaz hâle geliyor.",
      },
      {
        p: "Bu dairelerde yalıtım ve nokta ısıtıcı iyi sonuç veriyor. Villa ve dubleks yapılarda ise mesafe daha da uzun; oralarda tadilat sırasında sirkülasyon hattı bırakmak en kalıcı çözüm oluyor. Kışın dış duvara yakın geçen sıcak su hatlarında yalıtım ayrıca donmaya karşı da koruma sağlıyor.",
      },

      { h2: "Yalıtım malzemesi ve kalınlığı" },
      {
        p: "Sıcak su borusu yalıtımında en yaygın malzeme kauçuk esaslı boru kılıfı. Kalınlık, boru çapına göre seçiliyor; ince boruda 9 mm, kalın boruda 13 mm ve üzeri kullanılıyor.",
      },
      {
        p: "Uygulamada en çok atlanan yer ekler ve dirsekler. Düz kısımlar giydirilip dirsekler açık bırakıldığında ısı kaybının önemli bir bölümü oradan devam ediyor. Dirsek parçaları ayrı satılıyor ve maliyeti düşük.",
      },
      {
        p: "Gömme borularda yalıtım, sıva altına girmeden takılıyor. Sonradan eklemek mümkün olmadığı için tadilat sırasında bu adım atlanmamalı.",
      },

      { h2: "Armatür tarafı" },
      {
        p: "Bazı durumlarda bekleme süresi hattan değil, armatürden geliyor. Termostatik bataryalar suyu karıştırırken bir miktar gecikme yaratıyor; bu normal ve birkaç saniyeyle sınırlı.",
      },
      {
        p: "Perlatörün tıkanması da akışı yavaşlattığı için beklemeyi uzatıyor: borudaki soğuk su daha uzun sürede boşalıyor. Sıcak su geç geliyorsa önce perlatörü söküp bakmak, birkaç dakikalık ama şaşırtıcı biçimde sık sonuç veren bir kontrol.",
      },

      { h2: "Ortak kazanlı binalarda" },
      {
        p: "Merkezi sistemli binalarda sıcak su kazandan geliyor ve dairelere ortak hat üzerinden dağıtılıyor. Bu binalarda sirkülasyon hattı genelde zaten var; sorun çıkıyorsa sebebi pompanın çalışmaması ya da dengeleme vanalarının ayarsız olması.",
      },
      {
        p: "Dengeleme yapılmamış bir sistemde kazana yakın daireler anında sıcak su alırken uzak daireler bekliyor. Ayar, hattın her kolundaki debiyi eşitleyerek yapılıyor ve daire içinde hiçbir işlem gerektirmiyor.",
      },
      {
        p: "Bunun için merkezi sistemli binalarda şikâyet bir dairede değil, birden çok üst katta toplanıyorsa iş bina tesisatında aranıyor.",
      },

      { h2: "Su tasarrufu tarafı" },
      {
        p: "Bekleme sırasında akan suyu bir kovaya alıp bahçe sulamasında ya da temizlikte kullanmak, çözüm gelene kadar işe yarayan basit bir alışkanlık.",
      },
      {
        p: "Kalıcı çözümler arasında en hızlı geri döneni ise düşük debili başlık ve perlatör kullanmak. Hem bekleme sırasında akan su azalıyor hem duş boyunca tüketim düşüyor; sıcaklık hissi ise değişmiyor.",
      },

      { h2: "Karar sırası" },
      {
        ol: [
          "Kombiye en yakın muslukta bekleme var mı, bakılır.",
          "Varsa cihaz tarafı kontrol edilir: kireç, akış anahtarı, ayarlar.",
          "Yoksa hat uzunluğu ve boru çapı hesaplanır.",
          "Görünen borular yalıtılır.",
          "Uzun hatta sirkülasyon ya da nokta ısıtıcı değerlendirilir.",
          "Tadilat gündemdeyse kolektörlü sistem ve sirkülasyon borusu planlanır.",
        ],
      },
      {
        p: "Bu sıra takip edildiğinde çoğu evde çözüm ilk dört adımda çıkıyor. Beşinci ve altıncı adım, mesafenin gerçekten uzun olduğu yapılar için.",
      },

      { h2: "Boyler kullanan evlerde" },
      {
        p: "Kombiye bağlı boyleri olan evlerde sıcak su hazır bekliyor, dolayısıyla cihaz tarafında bekleme olmuyor. Musluktaki gecikme yine hattan geliyor.",
      },
      {
        p: "Boylerin konumu bu yüzden önemli. Banyoya yakın konan bir boyler, mutfaktan uzak kalıyorsa mutfakta bekleme sürüyor. Evin planına göre boyler ortada bir noktaya alınıyor ya da uzak kalan nokta için ayrı çözüm düşünülüyor.",
      },
      {
        p: "Boylerin kendi yalıtımı da kontrol edilmeli. Yalıtımı zayıflamış bir boyler, kimse su kullanmasa bile sürekli ısıtma yapıyor.",
      },

      { h2: "Yerden ısıtmayla karışmasın" },
      {
        p: "Yerden ısıtması olan evlerde bazen kullanım suyu ile ısıtma devresi karıştırılıyor. İkisi ayrı devreler; yerden ısıtmanın sürekli sıcak olması, musluktaki suyun hemen gelmesi anlamına gelmiyor.",
      },
      {
        p: "Kullanım suyu hattı ayrıca planlanıyor ve yalıtılıyor. Bazı uygulamalarda sıcak su borusunun yerden ısıtma şapı içinden geçirilmesi işe yarıyor ama bu bilinçli bir tasarım kararı olmalı; rastgele yapıldığında kontrolsüz ısı alışverişi oluyor.",
      },

      { h2: "Sıcaklık ayarı" },
      {
        p: "Kombi ya da boylerdeki kullanım suyu sıcaklığını gereğinden yüksek tutmak iki sorun yaratıyor: kireçlenme hızlanıyor ve haşlanma riski doğuyor.",
      },
      {
        p: "Elli–elli beş derece çoğu ev için yeterli. Bu aralık hem kireç oluşumunu yavaşlatıyor hem musluğa gelen suyun soğuk suyla fazla karıştırılmasını gerektirmiyor.",
      },
      {
        p: "Çocuklu evlerde termostatik batarya kullanmak ayrıca koruma sağlıyor; ayarlanan sıcaklığın üstüne çıkmıyor. Basınç dengesizliğinde ani sıcak su gelmesini de engelliyor.",
      },
      {
        p: "Boylerli sistemlerde ise sıcaklığı çok düşürmemek gerekiyor; depolanan suyun uzun süre ılık kalması bakteri üremesi açısından uygun bir ortam yaratıyor. Depolu sistemlerde altmış derece civarı, hem bu riski hem kireci dengeleyen bir aralık oluyor.",
      },
      {
        p: "Uzun süre kullanılmayan bir boylerde ilk açılışta suyu bir süre akıtmak da iyi bir alışkanlık. Tatil dönüşlerinde ya da boş kalan dairelerde bu basit adım, durgun suyun tesisatta kalmasını önlüyor.",
      },

      { h2: "Ne kadara mal oluyor?" },
      {
        p: "Yalıtım en ucuz kalem; görünen boruların giydirilmesi birkaç saatlik iş. Nokta ısıtıcı orta bir yatırım ve tek bir musluğu çözüyor.",
      },
      {
        p: "Sirkülasyon hattı ise iki duruma göre ayrılıyor. Tadilat sırasında bırakılan bir dönüş borusu neredeyse maliyetsiz; mevcut gömme tesisata sonradan eklemek ise kırım demek. Dolayısıyla kararın verileceği doğru an, tadilat planlanırken.",
      },
    ],
    faqs: [
      {
        q: "Sıcak su kaç saniyede gelmeli?",
        a: "Hattın uzunluğuna bağlı. Kombiye yakın bir muslukta birkaç saniye normal. On metreden uzak bir hatta yirmi saniyeyi bulabiliyor. Kombiye en yakın muslukta da bekliyorsanız sorun mesafede değil cihazda.",
      },
      {
        q: "Boru yalıtımı bekleme süresini kısaltır mı?",
        a: "İlk açılışta kısaltmıyor; borudaki suyu yine boşaltmanız gerekiyor. Faydası peş peşe kullanımda ortaya çıkıyor: yalıtımlı hatta su uzun süre sıcak kalıyor, on dakika sonra açtığınızda beklemiyorsunuz.",
      },
      {
        q: "Sirkülasyon pompası çok elektrik harcar mı?",
        a: "Küçük bir pompa, sürekli çalışsa bile mütevazı bir tüketim yapıyor. Yine de zaman saatine bağlamak ya da butonla tetiklemek hem tüketimi hem boru üzerinden ısı kaybını azaltıyor.",
      },
      {
        q: "Mevcut evime sirkülasyon eklenebilir mi?",
        a: "Dönüş hattı yoksa yeni boru çekmek gerekiyor; gömme tesisatta bu kırım demek. Bazı sistemlerde soğuk su hattı dönüş olarak kullanılabiliyor ama her tesisata uygun değil, yerinde bakılması gerekiyor.",
      },
      {
        q: "Kalın boru daha çok su verir, iyi değil mi?",
        a: "Debi için iyi, bekleme için kötü. Kalın boru içinde daha çok su tutuyor ve o suyun tamamı boşa akıyor. Sıcak su hattı, gereken debiyi karşılayan en küçük çapla çekiliyor.",
      },
      {
        q: "Mutfağa ayrı küçük ısıtıcı mantıklı mı?",
        a: "Uzun hattın ucundaki tek bir nokta için çoğu kez en pratik çözüm. Küçük bir ani ısıtıcı, kırım yapmadan o noktadaki beklemeyi tamamen bitiriyor.",
      },
      {
        q: "Apartmanda üst katlarda sıcak su geç geliyor, sebebi ne?",
        a: "Merkezi sistemli binalarda sıklıkla dengeleme vanalarının ayarsız olması. Kazana yakın daireler anında alırken uzak daireler bekliyor. Ayar bina tesisatında yapılıyor, daire içinde işlem gerekmiyor.",
      },
    ],
    related: ["evde-su-basinci-dusuk", "pprc-mi-pex-mi", "kirecli-su-ne-yapmali"],
  },
];

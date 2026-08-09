// Uzaktan kumanda ve otomasyon sistemleri.
// İnternetli (GSM/WiFi) ve internetsiz (RF telsiz kumanda) çözümler.

export const otomasyonServices = [
  {
    slug: "uzaktan-kumanda-otomasyon",
    title: "Uzaktan Kumanda ve Otomasyon",
    group: "Elektrik",
    icon: "antenna",
    featured: true,
    core: true,
    priced: false,
    short: "Motor, pompa, dalgıç, vinç, sulama ve aydınlatmanın telefondan veya kumandayla çalıştırılması.",
    metaTitle: "Malatya Uzaktan Pompa ve Motor Kumandası | GSM ve Telsiz",
    metaDesc:
      "Malatya'da uzaktan kumanda ve otomasyon: dalgıç pompa, motor, vinç, sulama ve aydınlatma kontrolü. İnternetli (GSM/WiFi) ve internetsiz telsiz sistemler.",
    keywords: ["uzaktan pompa çalıştırma", "GSM pompa kumandası", "telsiz kumanda sistemi", "sulama otomasyonu", "Malatya otomasyon", "dalgıç pompa uzaktan kontrol"],
    intro:
      "Kuyunun başına gidip pompayı elle çalıştırmak, arazi uzaksa günde bir saatinizi alıyor. Uzaktan kumanda sistemleriyle pompayı, motoru ya da sulama vanasını bulunduğunuz yerden çalıştırıp durdurabiliyorsunuz. İnternet çekmeyen arazilerde de çalışan çözümler var.",
    symptoms: [
      { title: "Pompayı çalıştırmak için araziye gidiyorsunuz", text: "Her sulama için yol demek; uzak arazilerde günde saatler kaybediliyor." },
      { title: "Sulamanın bittiğini bilmiyorsunuz", text: "Boşuna çalışan pompa hem elektrik hem kuyu seviyesi açısından sorun." },
      { title: "Arazide internet çekmiyor", text: "GSM sinyali zayıfsa telsiz (RF) kumanda ile çözülür, internete gerek yok." },
      { title: "Elektrik kesintisinde ne olduğunu bilmiyorsunuz", text: "GSM sistemler kesinti ve arıza durumunda bildirim gönderebiliyor." },
    ],
    scope: [
      "Dalgıç ve derin kuyu pompası uzaktan çalıştırma",
      "Yüzey pompası ve hidrofor kontrolü",
      "Elektrik motoru ve vinç kumandası",
      "Sulama vanası ve zon otomasyonu",
      "Bahçe, cephe ve ortak alan aydınlatma kontrolü",
      "GSM (SIM kartlı) kumanda: internetsiz bölgelerde çağrı/SMS ile",
      "WiFi ve mobil uygulama ile kontrol",
      "Telsiz (RF) uzun mesafe kumanda, internetsiz çalışma",
      "Kuru çalışma, faz koruma ve seviye kontrolü entegrasyonu",
      "Arıza ve kesinti bildirimi",
    ],
    body: [
      { h2: "İnternetli mi, internetsiz mi?" },
      { p: "Arazinizin konumu hangi sistemin uygun olduğunu belirliyor. Üç yaygın çözüm var ve üçü de farklı ihtiyaca cevap veriyor." },
      {
        table: {
          head: ["Sistem", "Nasıl çalışır", "Uygun olduğu yer"],
          rows: [
            ["Telsiz (RF) kumanda", "Cep kumandası ile doğrudan, internet ve şebeke gerekmez", "İnternetin hiç çekmediği araziler, 500 m–3 km mesafe"],
            ["GSM kumanda", "SIM kart takılır, çağrı veya SMS ile çalıştırılır", "GSM sinyali olan ama internet olmayan yerler, sınırsız mesafe"],
            ["WiFi / mobil uygulama", "İnternet üzerinden telefondan yönetilir", "İnternet bulunan sera, bahçe ve işletmeler"],
          ],
        },
      },
      { p: "Telsiz kumandanın avantajı hiçbir abonelik gerektirmemesi; dezavantajı menzil sınırı. GSM'de mesafe sınırı yok ama SIM kart hattı gerekiyor. WiFi ise en çok özelliği veriyor: durum takibi, program, geçmiş kayıt." },

      { h2: "Neyi kontrol edebilirsiniz?" },
      { ul: [
        "Dalgıç pompa: çalıştır–durdur, çalışma süresi, kuru çalışma koruması",
        "Hidrofor ve yüzey pompası: uzaktan devreye alma",
        "Sulama zonları: sırayla ve programlı çalıştırma",
        "Elektrik motoru ve vinç: kumandalı çalıştırma ve durdurma",
        "Bahçe ve cephe aydınlatması: zaman veya fotoselle birlikte uzaktan",
        "Sera fanı, perde motoru ve ısıtma kumandası",
      ] },
      { p: "Sistemin en değerli tarafı sadece çalıştırmak değil, durumu görebilmek. Pompanın çalışıp çalışmadığını, ne kadar süredir çalıştığını ve bir koruma devreye girdiyse hangisinin girdiğini uzaktan öğrenebiliyorsunuz." },

      { h2: "Korumalarla birlikte kurulmalı" },
      { p: "Uzaktan çalıştırma tek başına risk de yaratabiliyor: pompayı çalıştırdınız ama kuyu seviyesi düşmüşse, orada olmadığınız için fark etmezsiniz ve motor yanar." },
      { p: "Bu yüzden uzaktan kumandayı her zaman korumalarla birlikte kuruyoruz: kuru çalışma koruması, faz koruma rölesi, termik ve gerekiyorsa seviye elektrodu. Bir koruma devreye girdiğinde sistem duruyor ve GSM'li kurulumlarda size bildirim gidiyor." },
      { quote: "Uzaktan kumanda, korumasız bir pompada arızayı hızlandırır. Koruma olmadan kurulum yapmıyoruz." },

      { h2: "Arazi koşulları" },
      { p: "Arazi panolarında koruma sınıfı ve yıldırım koruması ayrıca önemli. Açık alandaki bir pano, şebeke kaynaklı ani gerilim yükselmelerine ve yıldırıma şehir içinden çok daha açık." },
      { ul: [
        "Pano en az IP54, tercihen IP65",
        "Parafudr ve topraklama zorunlu kabul edilmeli",
        "Anten konumu sinyal alacak şekilde seçilmeli",
        "GSM sistemlerde hat bakiyesi ve kapsama önceden test edilmeli",
        "Kablo kesiti mesafeye göre hesaplanmalı",
      ] },

      { h2: "Mevcut sisteme eklenebilir mi?" },
      { p: "Çoğu durumda evet. Mevcut pompa panonuza kumanda modülü ilave edilerek uzaktan kontrol kazandırılabiliyor; pompayı veya panoyu komple değiştirmek gerekmiyor." },
      { p: "Panonun durumu ve mevcut korumalar inceleniyor. Koruma yoksa önce onlar ekleniyor, sonra kumanda modülü devreye alınıyor. Keşifte mevcut panoya bakıp neyin gerektiğini net söylüyoruz." },
    ],
    priceFactors: [
      "Kontrol edilecek ekipman sayısı ve gücü",
      "Sistem tipi (telsiz, GSM, WiFi)",
      "Mevcut panoya ilave mi, yeni pano mu",
      "Koruma ekipmanlarının mevcut olup olmadığı",
      "Mesafe ve anten/sinyal koşulları",
      "Bildirim ve durum takibi isteniyor mu",
    ],
    faqs: [
      { q: "Arazimde internet çekmiyor, yine de olur mu?", a: "Olur. Telsiz (RF) kumanda internete de GSM'e de ihtiyaç duymuyor; cep kumandasıyla doğrudan çalışıyor. Menzil arazi yapısına göre 500 metre ile birkaç kilometre arasında değişiyor. GSM sinyali varsa SMS/çağrı ile çalışan sistem mesafe sınırı olmadan iş görüyor." },
      { q: "Aylık ücret ödeyecek miyim?", a: "Telsiz kumandada hiçbir abonelik yok. GSM sistemlerde SIM kart hattı gerekiyor; en düşük tarifeli bir hat yeterli oluyor. WiFi sistemlerde mevcut internetinizi kullanıyorsunuz, ek abonelik olmuyor." },
      { q: "Pompa yanarsa sorumluluk kimde?", a: "Korumaları eksiksiz kurup devreye aldığımız sistemlerde kuru çalışma ve faz kaynaklı yanma riski ortadan kalkıyor. Korumasız bir sisteme sadece kumanda takmıyoruz; bunu baştan söylüyoruz çünkü sorumluluğu paylaşmak yerine riski kaldırmayı tercih ediyoruz." },
      { q: "Elektrik kesilirse ne oluyor?", a: "Kesinti sonrası sistem kendiliğinden çalışmıyor; bu kasıtlı bir tercih. Siz bilmeden pompanın devreye girmesi istenmeyen durumlar yaratıyor. GSM'li kurulumlarda kesinti ve geri gelme bildirimi gönderilebiliyor." },
      { q: "Vinç ve motorlarda da kullanılıyor mu?", a: "Evet. Atölye vinçleri, sanayi motorları ve konveyörlerde telsiz kumanda yaygın. Bu uygulamalarda acil stop ve güvenlik kilitleri ayrıca önem taşıyor; mevzuata uygun kurulum yapıyoruz." },
    ],
    localAngle: "merkeze uzak tarım arazilerinde kuyu pompasına her seferinde gitme zorunluluğu ve GSM sinyalinin zayıf olduğu bölgeler",
    related: ["anahtar-teslim-sulama-sistemi", "hidrofor-pompa-sistemleri", "kayisi-bahcesi-sulama", "elektrik-panosu"],
  },
];

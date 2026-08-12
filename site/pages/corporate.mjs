// Kurumsal sayfalar: hakkımızda, iletişim, teklif, S.S.S., gizlilik, 404.
import { site, waLink, differentiators, processSteps, trustPoints } from "../data/site.mjs";
import { services, serviceGroups, byGroup } from "../data/services.mjs";
import { districts } from "../data/districts.mjs";
import { localities } from "../data/localities.mjs";
import { posts } from "../data/posts.mjs";
import { page } from "../lib/layout.mjs";
import { esc, icon } from "../lib/html.mjs";
import { faqSchema, organization } from "../lib/schema.mjs";
import {
  ctaBlock, secHead, faqBlock, pageHead, statsBlock,
  processBlock, contactAside, asideLinks, chips, linkList,
} from "../lib/blocks.mjs";

/* ============================================================ /hakkimizda/ */
export function aboutPage(ctx) {
  const body = `
${pageHead({
  eyebrow: "Hakkımızda",
  title: `Bir yapının her işi,<br><em class="hl">tek ekipte.</em>`,
  lead: `${site.founded}'ten beri Malatya'da elektrik, su ve mekanik iş yapıyoruz. Kurulduğumuzdan beri değişmeyen tek kuralımız var: işi bölmüyoruz.`,
  meta: [
    { icon: "calendar", text: `${new Date().getFullYear() - site.founded}+ yıl saha tecrübesi` },
    { icon: "pin", text: "13 ilçede hizmet" },
    { icon: "users", text: "Sabit ekip, taşeron yok" },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div class="prose" style="max-width:none">
      <h2>Neden tek ekip?</h2>
      <p>Tadilat yaptıranların çoğu şunu yaşıyor: elektrikçi gelir işini yapar gider, sıvacı gelir üzerini kapatır, iki gün sonra unutulan bir priz için elektrikçi tekrar çağrılır ve yeni sıva kırılır. Her kalemi ayrı ustaya verdiğinizde aradaki koordinasyon size kalıyor. Bir aksaklık çıktığında da sorumluluk havada kalıyor.</p>
      <p>Bizde elektrik, su ve mekanik aynı ekipte. Faydası sadece hız değil: bir kalemde çıkan sorunun diğerini nasıl etkileyeceğini baştan görüyoruz. Aynı duvar iki kez kırılmıyor.</p>
      <p>Anahtar teslim işlerde de muhatabınız tek kişi. Kim ne zaman gelecek, hangi iş neyi bekliyor; bunları takip etmek size düşmüyor.</p>

      <h2>Nasıl çalışıyoruz?</h2>
      <p>Telefonda kesin rakam vermiyoruz. Versek yanıltıcı olur; aynı işin maliyeti binanın durumuna göre iki katına çıkabiliyor. Yerinde bakıyor, malzeme ve işçiliği ayrı ayrı yazdığımız teklifi elinize veriyoruz.</p>
      <p>Teklifte "onu sonra konuşuruz" dediğimiz kalem bırakmıyoruz. İş sırasında gizli bir sorun çıkarsa (çürük boru, ıslanmış duvar, alüminyum kablo) işi durduruyor, fotoğrafını gönderiyor, ek maliyeti yazılı olarak bildiriyoruz. Onayınızı almadan devam etmiyoruz.</p>

      <h2>Yaptığımız işi belgeliyoruz</h2>
      <p>Kapanacak her hattı fotoğraflıyoruz, panoyu etiketliyoruz, boru ve kablo güzergâhını size bırakıyoruz. Bunların bize ek maliyeti yok; buna karşılık yıllar sonra duvara raf takarken hattın nereden geçtiğini bilirsiniz.</p>
      <p>Yaptığımız testleri de gösteriyoruz: su hattında basınç testi, banyoda su testi, panoda ölçüm değerleri. Hepsi iş bitiminde yazılı olarak size teslim ediliyor.</p>

      <h2>Malatya'nın tamamı</h2>
      <p>Merkezin yanında Darende, Hekimhan, Arapgir, Pütürge dahil ${districts.length} ilçenin hepsine gidiyoruz. Kırsal mahallelere de aynı ekip gidiyor; başka firmaya havale etmiyoruz. Uzak ilçelerde işleri toplu planlıyoruz; aynı bölgeden birden fazla iş çıktığında hem randevu günü çabuk ayarlanıyor hem yol payı düşüyor.</p>
      <p>Her ilçenin iş profili farklı. Akçadağ ve Yazıhan'da sulama, Yeşilyurt OSB'lerinde sanayi elektriği, Battalgazi'nin eski mahallelerinde tesisat yenileme, Kuluncak ve Hekimhan'da kışın donan borular. Hangi ilçede ne çıktığını bölge sayfalarında tek tek yazdık.</p>

      <h2>Neyi yapmıyoruz?</h2>
      <p>İşimiz elektrik ve mekanik. Teknik tarafı ağır olan işlerde fark yaratıyoruz. Tamamen dekorasyon ağırlıklı işlerde ise çok fark yaratamayacağımızı baştan söylüyoruz.</p>
      <p>Ruhsat isteyen yeni yapılarda proje ve statik işini müellifler yürütür, biz uygulama ve koordinasyon tarafındayız. Bu ayrımı işin başında netleştiriyoruz ki sonradan kapsam tartışması çıkmasın.</p>
    </div>

    <aside>
      ${contactAside()}
      ${asideLinks("Hizmet grupları", serviceGroups.map((g) => ({ label: `${g} (${byGroup(g).length})`, href: "/hizmetler/" })))}
      ${asideLinks("Bölgeler", districts.slice(0, 8).map((d) => ({ label: d.name, href: `/bolgeler/${d.slug}/` })))}
    </aside>
  </div>
</section>

${statsBlock()}

<section class="section section--dark">
  <div class="wrap">
    ${secHead("İlkelerimiz", "Dört şeyden şaşmıyoruz", "Bunlar reklam cümlesi değil. Böyle yapmadığımızda ne olduğunu gördüğümüz için koyduğumuz kurallar.")}
    <div class="points">
      ${differentiators
        .map(
          (d) => `<div>
        <span class="tick">${icon("check")}</span>
        <div><h4>${esc(d.title)}</h4><p>${esc(d.text)}</p></div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>

${processBlock()}

${ctaBlock({ title: "Bir işiniz için görüşelim", text: "Gelip bakıyoruz, kalem kalem teklif hazırlıyoruz. Merkez ilçelerde keşif ücretsiz." })}
`;

  return page({
    title: `Hakkımızda | ${site.name} Malatya`,
    description: `${site.founded}'ten beri Malatya'da elektrik, sıhhi tesisat, mekanik ve yapı işleri. Tek ekip, yazılı teklif, kayıt altında teslim. 13 ilçede hizmet.`,
    path: "/hakkimizda/",
    ctx,
    crumbs: [{ label: "Hakkımızda", href: "/hakkimizda/" }],
    schemas: [organization(districts.map((d) => `${d.name}, Malatya`))],
    body,
  });
}

/* ============================================================== /iletisim/ */
export function contactPage(ctx) {
  const body = `
${pageHead({
  eyebrow: "İletişim",
  title: `Bize <em class="hl">ulaşın</em>`,
  lead: "Arayın, WhatsApp'tan yazın ya da formu doldurun. Durumu anlattığınız anda aynı gün gelip gelemeyeceğimizi net olarak söylüyoruz.",
  meta: [
    { icon: "clock", text: site.hoursText },
    { icon: "pin", text: "Malatya geneli · 13 ilçe" },
  ],
})}

<section class="section">
  <div class="wrap">
    <div class="grid g-3">
      <a class="card" href="tel:${site.phoneHref}"><div class="card-body">
        <span style="color:var(--amber-dark)">${icon("phone")}</span>
        <h3>Telefon</h3>
        <p style="font-family:var(--f-display);font-size:1.6rem;color:var(--ink);flex:none">${esc(site.phoneDisplay)}</p>
        <p>${esc(site.hoursText)}. Acil arızalarda mesai dışında da ulaşabilirsiniz.</p>
      </div></a>

      <a class="card" href="${waLink()}" target="_blank" rel="noopener nofollow"><div class="card-body">
        <span style="color:var(--wa)">${icon("wa")}</span>
        <h3>WhatsApp</h3>
        <p style="font-family:var(--f-display);font-size:1.6rem;color:var(--ink);flex:none">Yazın</p>
        <p>Arızanın fotoğrafını gönderdiğinizde ilk değerlendirmeyi çoğu zaman aynı gün yapabiliyoruz.</p>
      </div></a>

      <a class="card" href="mailto:${site.email}"><div class="card-body">
        <span style="color:var(--amber-dark)">${icon("mail")}</span>
        <h3>E-posta</h3>
        <p style="font-family:var(--f-display);font-size:1.4rem;color:var(--ink);flex:none">${esc(site.email)}</p>
        <p>Proje, keşif talebi ve kurumsal işler için. Genelde bir iş günü içinde dönüş yapıyoruz.</p>
      </div></a>
    </div>

    ${
      site.social.instagram || site.social.facebook || site.social.youtube
        ? `<div class="chips mt-l">
      ${site.social.instagram ? `<a href="${site.social.instagram}" target="_blank" rel="noopener">${icon("instagram")} Instagram</a>` : ""}
      ${site.social.facebook ? `<a href="${site.social.facebook}" target="_blank" rel="noopener">${icon("facebook")} Facebook</a>` : ""}
      ${site.social.youtube ? `<a href="${site.social.youtube}" target="_blank" rel="noopener">${icon("youtube")} YouTube</a>` : ""}
    </div>
    <p class="text-muted mt-s" style="font-size:.92rem">Tamamladığımız işlerin fotoğraflarını sosyal hesaplarımızda paylaşıyoruz.</p>`
        : ""
    }

    <div class="grid g-2 mt-l">
      <div class="aside-box">
        <h3>Çalışma saatleri</h3>
        <ul class="fact-list">
          <li><span>Pazartesi – Cumartesi</span><b>08.00 – 20.00</b></li>
          <li><span>Pazar</span><b>09.00 – 18.00</b></li>
          <li><span>Acil arıza</span><b>Mesai dışı da mümkün</b></li>
        </ul>
        <p class="mt-s" style="font-size:.92rem;color:var(--muted)">${esc(site.emergencyText)}</p>
      </div>
      <div class="aside-box">
        <h3>Hizmet bölgesi</h3>
        <p style="font-size:.94rem;color:var(--muted)">Malatya'nın 13 ilçesinin tamamı ve ${localities.length} mahalle. Merkez ilçelerde (Battalgazi, Yeşilyurt) keşif ücretsiz; diğer ilçelerde yol mesafesine göre keşif bedeli oluşabilir.</p>
        <div class="mt-s">${chips(districts.map((d) => ({ label: d.name, href: `/bolgeler/${d.slug}/` })))}</div>
      </div>
    </div>
  </div>
</section>

${faqBlock(
  [
    { q: "Aramadan önce ne hazırlamalıyım?", a: "İşin türü, adres (mahalle ve ilçe), aciliyet durumu ve mümkünse birkaç fotoğraf. Arıza işlerinde hangi cihaz çalışırken sorun çıktığı ve panoda hangi elemanın attığı bilgisi tespiti hızlandırıyor." },
    { q: "Hangi saatlerde arayabilirim?", a: `${site.hoursText}. Acil durumlarda (yanık kokusu, kıvılcım, su baskını, tüm dairenin enerjisiz kalması) mesai dışında da arayabilirsiniz.` },
    { q: "Teklif ne kadar sürede geliyor?", a: "Küçük işlerde keşif sırasında yazılı olarak veriyoruz. Kapsamlı tadilat ve anahtar teslim işlerde metraj çıkarılması gerektiği için 2–3 iş günü sürüyor." },
    { q: "Fatura kesiyor musunuz?", a: "Evet, tüm işlerde fatura düzenleniyor. Kurumsal müşteriler için ödeme ve belge süreçlerini şirket prosedürünüze göre yürütebiliyoruz." },
  ],
  "İletişim hakkında sık sorulanlar"
)}

${ctaBlock({ title: "Formu doldurun, biz arayalım", text: "Teklif formunu doldurduğunuzda işin türüne göre size dönüş yapıyor ve keşif randevusu veriyoruz." })}
`;

  return page({
    title: `İletişim | ${site.name} Malatya, ${site.phoneDisplay}`,
    description: `CB İnşaat Malatya: ${site.phoneDisplay}, ${site.email}. 13 ilçede elektrik, tesisat ve tadilat. ${site.hoursText}.`,
    path: "/iletisim/",
    ctx,
    crumbs: [{ label: "İletişim", href: "/iletisim/" }],
    schemas: [organization(districts.map((d) => `${d.name}, Malatya`))],
    body,
  });
}

/* ================================================================ /teklif/ */
export function quotePage(ctx) {
  const body = `
${pageHead({
  eyebrow: "Ücretsiz keşif",
  title: `Teklif <em class="hl">alın</em>`,
  lead: "Formu doldurun, biz arayalım. Yerinde bakıyor; malzeme, işçilik ve süreyi ayrı ayrı yazdığımız teklifi elinize veriyoruz. Siz onaylamadan iş başlamıyor.",
  meta: [
    { icon: "check", text: "Merkez ilçelerde keşif ücretsiz" },
    { icon: "doc", text: "Kalem kalem yazılı teklif" },
    { icon: "clock", text: "24 saat içinde dönüş" },
  ],
})}

<section class="section">
  <div class="wrap with-aside">
    <div>
      <form class="form" name="teklif" method="POST" data-netlify="true" netlify-honeypot="website" enctype="multipart/form-data" action="/tesekkurler/">
        <input type="hidden" name="form-name" value="teklif">
        <p style="display:none"><label>Bu alanı boş bırakın <input name="website"></label></p>

        <h2 style="font-size:1.7rem;margin-bottom:6px">Keşif ve teklif formu</h2>
        <p class="text-muted" style="font-size:.94rem">Yıldızlı alanlar zorunludur, kalanlar isteğe bağlı. Doldurduğunuz her alan keşfe gelmeden önce hazırlığımızı kolaylaştırıyor. Bilgileriniz yalnızca size dönüş yapmak için kullanılır.</p>

        <div class="form-grid mt-m">
          <div class="form-sec">
            <h3>1. Sizi nasıl arayalım</h3>
            <p>Telefonla dönüş yapıyoruz. Ulaşamazsak WhatsApp'tan yazıyoruz.</p>
          </div>
          <div class="field">
            <label for="ad">Ad soyad *</label>
            <input id="ad" name="ad" type="text" required autocomplete="name" placeholder="Adınız ve soyadınız">
          </div>
          <div class="field">
            <label for="tel">Telefon *</label>
            <input id="tel" name="telefon" type="tel" required autocomplete="tel" placeholder="05xx xxx xx xx" inputmode="tel">
          </div>
          <div class="field full">
            <label for="eposta">E-posta</label>
            <input id="eposta" name="eposta" type="email" autocomplete="email" placeholder="Yazılı teklifi e-postayla da isterseniz">
          </div>

          <div class="form-sec">
            <h3>2. İşin yeri</h3>
            <p>Keşif rotasını planlayabilmemiz için mahalle yeterli. Açık adresi telefonda da verebilirsiniz.</p>
          </div>
          <div class="field">
            <label for="ilce">İlçe *</label>
            <select id="ilce" name="ilce" required>
              <option value="">Seçiniz</option>
              ${districts.map((d) => `<option value="${esc(d.name)}">${esc(d.name)}</option>`).join("")}
              <option value="Diğer">Malatya dışı / diğer</option>
            </select>
          </div>
          <div class="field">
            <label for="mahalle">Mahalle</label>
            <input id="mahalle" name="mahalle" type="text" placeholder="Mahalle adı">
          </div>
          <div class="field full">
            <label for="adres">Açık adres / tarif</label>
            <input id="adres" name="adres" type="text" placeholder="Cadde, site adı, kat — dilerseniz boş bırakın">
          </div>

          <div class="form-sec">
            <h3>3. Ne yaptırmak istiyorsunuz</h3>
            <p>Emin değilseniz "siz yönlendirin" seçeneğini işaretleyin, telefonda konuşalım.</p>
          </div>
          <div class="field">
            <label for="hizmet">Hizmet *</label>
            <select id="hizmet" name="hizmet" required>
              <option value="">Seçiniz</option>
              ${serviceGroups
                .map(
                  (g) => `<optgroup label="${esc(g)}">${byGroup(g)
                    .map((s) => `<option value="${esc(s.title)}">${esc(s.title)}</option>`)
                    .join("")}</optgroup>`
                )
                .join("")}
              <option value="Emin değilim">Emin değilim, siz yönlendirin</option>
            </select>
          </div>
          <div class="field">
            <label for="aciliyet">Aciliyet *</label>
            <select id="aciliyet" name="aciliyet" required>
              <option value="">Seçiniz</option>
              <option value="Acil - bugün">Acil, bugün gelinmeli</option>
              <option value="Bu hafta">Bu hafta içinde</option>
              <option value="Planlı">Planlı, tarih esnek</option>
              <option value="Sadece fiyat">Şimdilik sadece fiyat öğrenmek istiyorum</option>
            </select>
          </div>

          <div class="form-sec">
            <h3>4. Yapı bilgisi</h3>
            <p>Tadilat ve tesisat yenilemede maliyeti en çok bu üç bilgi belirliyor: yapının yaşı, büyüklüğü ve tipi.</p>
          </div>
          <div class="field">
            <label for="yapi">Yapı tipi</label>
            <select id="yapi" name="yapi">
              <option value="">Seçiniz</option>
              <option value="Daire">Daire</option>
              <option value="Müstakil ev / villa">Müstakil ev / villa / dubleks</option>
              <option value="Apartman ortak alan">Apartman / site ortak alan</option>
              <option value="Dükkan / ofis">Dükkân / ofis / mağaza</option>
              <option value="Kafe / restoran">Kafe / restoran</option>
              <option value="Fabrika / atölye">Fabrika / atölye / depo</option>
              <option value="Tarımsal alan">Bahçe / tarla / sera</option>
            </select>
          </div>
          <div class="field">
            <label for="metrekare">Brüt metrekare</label>
            <input id="metrekare" name="metrekare" type="number" min="1" max="100000" inputmode="numeric" placeholder="Örn. 135">
          </div>
          <div class="field">
            <label for="bina_yasi">Bina yaşı</label>
            <select id="bina_yasi" name="bina_yasi">
              <option value="">Seçiniz</option>
              <option value="0-5 yıl">0 - 5 yıl (yeni)</option>
              <option value="5-15 yıl">5 - 15 yıl</option>
              <option value="15-30 yıl">15 - 30 yıl</option>
              <option value="30 yıl üzeri">30 yıl ve üzeri</option>
              <option value="Bilmiyorum">Bilmiyorum</option>
            </select>
          </div>
          <div class="field">
            <label for="oda">Oda sayısı</label>
            <select id="oda" name="oda">
              <option value="">Seçiniz</option>
              <option value="1+0 / stüdyo">1+0 / stüdyo</option>
              <option value="1+1">1+1</option>
              <option value="2+1">2+1</option>
              <option value="3+1">3+1</option>
              <option value="4+1">4+1</option>
              <option value="5+1 ve üzeri">5+1 ve üzeri</option>
              <option value="Konut değil">Konut değil</option>
            </select>
          </div>

          <div class="form-sec">
            <h3>5. Kapsam</h3>
            <p>Hangi kalemleri düşünüyorsunuz? Birden fazla seçebilirsiniz; kesinleşmemiş olması sorun değil.</p>
          </div>
          <div class="opts">
            ${[
              "Mutfak yenilenecek",
              "Banyo yenilenecek",
              "Elektrik tesisatı yenilenecek",
              "Su ve atık su tesisatı yenilenecek",
              "Isıtma / kombi / petek",
              "Zemin (parke, seramik, laminat)",
              "Boya ve alçı",
              "Tavan / alçıpan / aydınlatma",
              "Kapı ve pencere",
              "Duvar örme / kırım",
              "Sulama sistemi / pompa",
              "Otomasyon ve uzaktan kumanda",
            ]
              .map(
                (k, i) => `<label class="check"><input type="checkbox" name="kapsam" value="${esc(k)}" id="kapsam-${i}"><span>${esc(k)}</span></label>`
              )
              .join("")}
          </div>

          <div class="form-sec">
            <h3>6. Planlama</h3>
            <p>Bütçe aralığı zorunlu değil ama söylerseniz teklifi ona göre kurgulayabiliyoruz; gereksiz kalemle şişirmiyoruz.</p>
          </div>
          <div class="field">
            <label for="baslangic">Ne zaman başlansın</label>
            <select id="baslangic" name="baslangic">
              <option value="">Seçiniz</option>
              <option value="Hemen">En kısa sürede</option>
              <option value="2-4 hafta">2 - 4 hafta içinde</option>
              <option value="1-3 ay">1 - 3 ay içinde</option>
              <option value="3 aydan sonra">3 aydan sonra</option>
              <option value="Belirsiz">Henüz net değil</option>
            </select>
          </div>
          <div class="field">
            <label for="butce">Düşündüğünüz bütçe</label>
            <select id="butce" name="butce">
              <option value="">Belirtmek istemiyorum</option>
              <option value="100 bin altı">100.000 ₺ altı</option>
              <option value="100-250 bin">100.000 - 250.000 ₺</option>
              <option value="250-500 bin">250.000 - 500.000 ₺</option>
              <option value="500 bin - 1 milyon">500.000 ₺ - 1.000.000 ₺</option>
              <option value="1 milyon üzeri">1.000.000 ₺ üzeri</option>
              <option value="Fikrim yok">Fikrim yok, siz söyleyin</option>
            </select>
          </div>

          <div class="form-sec">
            <h3>7. Detay ve fotoğraf</h3>
            <p>Fotoğraf, keşiften önce neyle karşılaşacağımızı görmemizi sağlıyor. Yüklemek zahmetliyse WhatsApp'tan da gönderebilirsiniz.</p>
          </div>
          <div class="field full">
            <label for="detay">İşin detayı *</label>
            <textarea id="detay" name="detay" required placeholder="Ne yaptırmak istediğinizi, varsa belirtileri ve yaklaşık büyüklüğü yazın. Örnek: 1998 yapımı 3+1 dairede banyo ve mutfak komple yenilenecek, elektrik tesisatı da değişecek. Alt komşuya sızıntı var."></textarea>
            <small>Ne kadar detay verirseniz teklif o kadar isabetli olur.</small>
          </div>
          <div class="field full">
            <label for="foto">Fotoğraf veya video</label>
            <input id="foto" name="foto" type="file" accept="image/*,video/*" multiple>
            <small>En fazla birkaç dosya, toplam 8 MB'a kadar. Daha fazlası için WhatsApp daha rahat.</small>
          </div>
        </div>

        <label class="check">
          <input type="checkbox" name="onay" required>
          <span>Bilgilerimin bu talep kapsamında iletişim amacıyla işlenmesini kabul ediyorum. <a href="/gizlilik/" style="text-decoration:underline">Aydınlatma metni</a></span>
        </label>

        <div class="btn-row mt-m">
          <button class="btn btn--primary" type="submit">${icon("doc")} Teklif talebini gönder</button>
          <a class="btn btn--wa" href="${waLink("Merhaba, bir iş için teklif almak istiyorum.")}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp'tan yazayım</a>
        </div>
      </form>
    </div>

    <aside>
      ${contactAside()}
      <div class="aside-box">
        <h3>Sonrasında ne oluyor?</h3>
        <ol class="prose" style="padding:0;margin:0">
          ${processSteps
            .map((s) => `<li style="padding-left:28px;margin-bottom:12px"><strong>${esc(s.title)}</strong><br><span style="font-size:.9rem;color:var(--muted)">${esc(s.text)}</span></li>`)
            .join("")}
        </ol>
      </div>
    </aside>
  </div>
</section>

${faqBlock(
  [
    { q: "Formu doldurunca ne kadar sürede dönüş yapıyorsunuz?", a: "Çalışma saatleri içinde genelde birkaç saat içinde, en geç 24 saat içinde arıyoruz. Acil işaretlediyseniz öncelikli olarak dönüş yapıyoruz." },
    { q: "Keşif ücretli mi?", a: "Battalgazi ve Yeşilyurt'ta ilk keşif ücretsizdir. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabilir; iş tarafımızca yapıldığında bu bedel toplam tutardan düşülür. Rakamı gelmeden önce söylüyoruz." },
    { q: "Telefonda fiyat verebilir misiniz?", a: "Standart kalemlerde (priz değişimi, gider açma, petek temizliği gibi) bir aralık verebiliyoruz. Tesisat yenileme ve tadilat gibi işlerde ise yapının durumu maliyeti iki katına kadar değiştirebildiği için yerinde bakmadan rakam vermiyoruz." },
    { q: "Bütçemi yazarsam teklifi ona göre mi şişirirsiniz?", a: "Tam tersi. Bütçe aralığını bilirsek teklifi o çerçevede kurguluyoruz: hangi kalem bu bütçeye sığar, hangisi ikinci etaba kalır, bunu baştan söylüyoruz. Bütçenizin altında kalan bir çözüm varsa onu da yazıyoruz. Yazmak istemezseniz de sorun değil, alan zorunlu değil." },
    { q: "Formu tamamen doldurmam şart mı?", a: "Hayır. Ad, telefon, ilçe, hizmet ve kısa bir açıklama yeterli. Metrekare, bina yaşı ve kapsam gibi alanlar keşfe gelmeden önce hazırlık yapmamızı sağlıyor; bilmiyorsanız boş bırakın, yerinde birlikte netleştiririz." },
    { q: "Bilgilerim ne için kullanılıyor?", a: "Yalnızca talebinize dönüş yapmak ve keşif planlamak için. Üçüncü kişilerle paylaşılmıyor, pazarlama amaçlı kullanılmıyor. Detaylar aydınlatma metninde." },
  ],
  "Teklif süreci hakkında"
)}
`;

  return page({
    title: `Ücretsiz Keşif ve Teklif | ${site.name} Malatya`,
    description: "Malatya'da elektrik, tesisat, pompa ve tadilat işleri için ücretsiz keşif ve yazılı teklif alın. Formu doldurun, 24 saat içinde dönüş yapalım.",
    path: "/teklif/",
    ctx,
    crumbs: [{ label: "Teklif al", href: "/teklif/" }],
    body,
  });
}

/* ========================================================== /tesekkurler/ */
export function thanksPage(ctx) {
  const body = `
<section class="section">
  <div class="wrap nf">
    <span style="color:var(--amber);display:inline-block">${icon("check")}</span>
    <h1 style="margin-top:20px">Talebiniz bize ulaştı</h1>
    <p class="lead" style="max-width:44rem;margin:20px auto 0">En kısa sürede, çalışma saatleri içinde genelde birkaç saat içinde, sizi arayacağız. Acil bir durumsa telefonla ulaşmanız daha hızlı olur.</p>
    <div class="btn-row mt-l" style="justify-content:center">
      <a class="btn btn--primary" href="tel:${site.phoneHref}">${icon("phone")} ${esc(site.phoneDisplay)}</a>
      <a class="btn btn--wa" href="${waLink()}" target="_blank" rel="noopener nofollow">${icon("wa")} WhatsApp</a>
      <a class="btn btn--ghost" href="/">Ana sayfaya dön</a>
    </div>
  </div>
</section>

<section class="section section--paper2">
  <div class="wrap">
    ${secHead("Bu arada", "Okumak isteyebileceğiniz yazılar", "")}
    <div class="grid g-3">
      ${posts.slice(0, 3).map((p) => `<a class="card" href="/blog/${p.slug}/"><div class="card-body">
        <span class="badge">${esc(p.category)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
      </div></a>`).join("")}
    </div>
  </div>
</section>
`;
  return page({
    title: "Teşekkürler, talebiniz alındı",
    description: "Teklif talebiniz bize ulaştı. En kısa sürede dönüş yapacağız.",
    path: "/tesekkurler/",
    ctx,
    noindex: true,
    body,
  });
}

/* ==================================================================== /sss/ */
export function faqPage(ctx) {
  const groups = [
    {
      title: "Genel",
      faqs: [
        { q: "Malatya'nın hangi ilçelerine geliyorsunuz?", a: `13 ilçenin tamamına gidiyoruz: ${districts.map((d) => d.name).join(", ")}. Battalgazi ve Yeşilyurt'ta aynı gün, diğer ilçelerde program durumuna göre aynı gün veya ertesi gün randevu veriyoruz.` },
        { q: "Keşif ücretli mi?", a: "Merkez ilçelerde (Battalgazi, Yeşilyurt) ilk keşif ücretsizdir. Diğer ilçelerde yol mesafesine göre bir keşif bedeli oluşabilir; iş tarafımızca yapıldığında bu bedel toplam tutardan düşülür. Rakamı gelmeden önce söylüyoruz." },
        { q: "Telefonda fiyat verebilir misiniz?", a: "Standart kalemlerde bir aralık verebiliyoruz. Tesisat yenileme ve tadilat gibi işlerde ise yapının durumu maliyeti epey değiştirdiği için yerinde bakmadan rakam vermiyoruz. Yanıltıcı düşük rakam vermektense net konuşmayı tercih ediyoruz." },
        { q: "Fatura kesiyor musunuz?", a: "Evet, tüm işlerde fatura düzenleniyor. Kurumsal müşteriler için ödeme ve belge süreçlerini şirket prosedürünüze göre yürütebiliyoruz." },
        { q: "Ödeme nasıl yapılıyor?", a: "Küçük işlerde iş sonunda; kapsamlı tadilat ve anahtar teslim işlerde hakediş esaslı, aşamalara bağlı ödeme yapılıyor. Peşin toplu ödeme istemiyoruz. Ödeme planı sözleşmede tanımlanıyor." },
      ],
    },
    {
      title: "Teklif ve süreç",
      faqs: [
        { q: "Teklif ne kadar sürede geliyor?", a: "Küçük işlerde keşif sırasında yazılı olarak veriyoruz. Kapsamlı tadilat ve anahtar teslim işlerde metraj çıkarılması gerektiği için 2–3 iş günü sürüyor." },
        { q: "İş sırasında ek iş çıkarsa ne oluyor?", a: "Söküm sonrası görünen gizli sorunlar (çürük boru, ıslanmış duvar, alüminyum iletken) olabilir. Bu durumda işi durdurup fotoğrafla bildiriyor, ek kalem ve maliyeti yazılı sunuyoruz. Onayınız olmadan devam etmiyoruz." },
        { q: "Sözleşme yapıyor musunuz?", a: "Kapsamlı işlerde evet. İş kalemleri, metrajlar, malzeme sınıfı, süre, ödeme planı ve teslim şartları yazılı sözleşmeye bağlanıyor. Sonradan çıkan işler için ek protokol düzenleniyor." },
        { q: "Malzemeyi kendim alabilir miyim?", a: "Alabilirsiniz. Seramik, vitrifiye, armatür, avize gibi kalemleri kendiniz seçip almanız yaygın. Bu durumda teklifte sadece işçilik ve sarf malzeme yer alır; ölçü ve miktar listesini biz çıkarıp size veriyoruz." },
        { q: "Şehir dışındayım, işi takip edebilir miyim?", a: "Haftalık fotoğraflı ilerleme raporu gönderiyoruz. Kritik aşamalarda (tesisat kapanmadan önce, yalıtım öncesi) ayrıca detaylı görüntü paylaşıyoruz. İsterseniz kamera ile canlı takip de kurulabiliyor." },
      ],
    },
    {
      title: "Acil durumlar",
      faqs: [
        { q: "Acil arızada aynı gün gelebiliyor musunuz?", a: "Yanık kokusu, kıvılcım, su teması, tüm dairenin enerjisiz kalması veya su baskını gibi durumlarda merkez ilçelerde aynı gün müdahale ediyoruz. Diğer ilçelerde gün içi program durumuna göre değerlendiriyoruz." },
        { q: "Hangi durumlar acil sayılır?", a: "Yanık kokusu, kıvılcım veya duman, ısınan pano, su temas etmiş elektrik hattı, tüm dairenin enerjisiz kalması, su baskını ve birden fazla daireyi etkileyen gider tıkanıklığı. Tek bir prizin çalışmaması veya arada bir atan sigorta ise planlı randevu ile çözülebilir." },
        { q: "Gece veya hafta sonu geliyor musunuz?", a: "Gerçek acil durumlarda mesai dışında da müdahale ediyoruz. Acil dışı işleri normal çalışma saatlerine planlıyoruz." },
        { q: "Acil ücreti alıyor musunuz?", a: "Mesai dışı acil müdahalelerde bir fark uygulanıyor ve bu farkı telefonda söylüyoruz. Aciliyeti birlikte değerlendiriyoruz; beklemesi mümkün bir işte gereksiz acil ücreti çıkarmıyoruz." },
      ],
    },
    {
      title: "Garanti ve teslim",
      faqs: [
        { q: "Yaptığınız iş için garanti veriyor musunuz?", a: "İşçilik garantisi veriyoruz; süresi ve kapsamı teklifte yazılı. Malzemelerde üretici garantisi geçerli ve garanti belgeleri teslimde size veriliyor." },
        { q: "İş bitiminde ne teslim ediyorsunuz?", a: "Yapılan işin kalemleri, kullanılan malzeme markaları, pano etiket şeması, test sonuçları (basınç, su testi, ölçüm değerleri) ve kapatılmadan önce çekilen hat güzergâh fotoğrafları." },
        { q: "Hat güzergâh fotoğrafları ne işe yarıyor?", a: "İleride bir raf takarken, klima montajı yaptırırken veya tadilat yaparken kablonun ve borunun nerede olduğunu gösterir. Delme kazalarını önler ve sonraki tadilatta kırım yapmadan işe başlamayı sağlar." },
        { q: "Garanti kapsamında sorun çıkarsa ne yapmalıyım?", a: "Doğrudan arayın. Garanti kapsamındaki işçilik sorunlarında ek ücret almadan geliyoruz. Sorunun kaynağı yapılan işin dışındaysa (örneğin başka bir müdahale) durumu açıkça belirtiyoruz." },
      ],
    },
  ];

  const allFaqs = groups.flatMap((g) => g.faqs);

  const body = `
${pageHead({
  eyebrow: "S.S.S.",
  title: `Sık sorulan <em class="hl">sorular</em>`,
  lead: "Telefonda en çok sorulanları buraya topladık. Aradığınızı bulamazsanız arayın, telefonda ayrıntısıyla konuşalım.",
  meta: [{ icon: "phone", text: site.phoneDisplay }, { icon: "clock", text: site.hoursText }],
})}

${groups
  .map(
    (g, i) => `<section class="section${i % 2 ? "" : " section--white"}">
  <div class="wrap">
    <p class="eyebrow">${esc(g.title)}</p>
    <h2>${esc(g.title)} hakkında</h2>
    <div class="faq mt-m">
      ${g.faqs.map((f) => `<details><summary>${esc(f.q)}</summary><div class="faq-body"><p>${f.a}</p></div></details>`).join("")}
    </div>
  </div>
</section>`
  )
  .join("")}

<section class="section section--paper2">
  <div class="wrap">
    ${secHead("Hizmete özel sorular", "Her hizmetin kendi S.S.S. bölümü var", "Aradığınız cevap belirli bir hizmete özelse, o hizmetin sayfasındaki sık sorulanlar bölümüne bakabilirsiniz.")}
    ${chips(services.map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })))}
  </div>
</section>

${ctaBlock({ title: "Cevabını bulamadınız mı?", text: "Arayın veya WhatsApp'tan yazın. Durumu anlattığınızda ne yapılması gerektiğini söyleyelim." })}
`;

  return page({
    title: `Sık Sorulan Sorular | ${site.name} Malatya`,
    description: "Keşif ücreti, teklif süreci, garanti, acil müdahale ve ödeme hakkında sık sorulan sorular ve cevapları.",
    path: "/sss/",
    ctx,
    crumbs: [{ label: "S.S.S.", href: "/sss/" }],
    schemas: [faqSchema(allFaqs)],
    body,
  });
}

/* ============================================================== /gizlilik/ */
export function privacyPage(ctx) {
  const body = `
${pageHead({
  eyebrow: "KVKK",
  title: "Gizlilik ve aydınlatma metni",
  lead: "Bu sitede toplanan kişisel verilerin hangi amaçla işlendiği, ne kadar süre saklandığı ve haklarınız.",
})}

<section class="section">
  <div class="wrap">
    <div class="prose">
      <h2>Veri sorumlusu</h2>
      <p>${esc(site.legalName)} (${esc(site.name)}), ${esc(site.address.district)} / ${esc(site.address.city)}. İletişim: <a href="mailto:${site.email}">${esc(site.email)}</a>, ${esc(site.phoneDisplay)}.</p>

      <h2>Hangi veriler toplanıyor?</h2>
      <p>Bu sitede yalnızca teklif formu üzerinden ilettiğiniz bilgiler toplanır:</p>
      <ul>
        <li>Ad soyad</li>
        <li>Telefon numarası</li>
        <li>İlçe ve mahalle bilgisi</li>
        <li>Talep ettiğiniz hizmet ve iş detayı</li>
      </ul>
      <p>Sitede reklam veya profilleme amaçlı üçüncü taraf takip çerezi kullanılmaz.</p>

      <h2>İşleme amacı</h2>
      <p>Verileriniz yalnızca şu amaçlarla işlenir: talebinize dönüş yapmak, keşif randevusu planlamak, teklif hazırlamak ve iş süresince iletişimi sürdürmek. Pazarlama amaçlı kullanılmaz ve üçüncü kişilerle paylaşılmaz.</p>

      <h2>Saklama süresi</h2>
      <p>Talebiniz bir işe dönüşmezse iletişim bilgileriniz en fazla 12 ay içinde silinir. İşe dönüşen taleplerde, ilgili mevzuatın öngördüğü ticari ve mali kayıt saklama süreleri uygulanır.</p>

      <h2>Haklarınız</h2>
      <p>KVKK kapsamında; verilerinize erişme, düzeltilmesini isteme, silinmesini talep etme ve işlenmesine itiraz etme hakkına sahipsiniz. Bu taleplerinizi <a href="mailto:${site.email}">${esc(site.email)}</a> adresine iletebilirsiniz.</p>

      <h2>Çerezler</h2>
      <p>Site, çalışması için gerekli olmayan hiçbir çerez kullanmaz. Sayfa görüntüleme istatistiği toplanmaz ve tarayıcınızda kalıcı tanımlayıcı bırakılmaz.</p>

      <h2>Kamera sistemleri hakkında</h2>
      <p>Kamera sistemi kurulumu hizmetimiz kapsamında, kurulum yapılan alanda toplanan görüntü kayıtlarının veri sorumlusu, sistemi kurduran kişi veya kurumdur. Kurulum sırasında görüş alanlarının komşu mülkleri ve kamusal alanı gereksiz biçimde kapsamaması konusunda öneride bulunuyor, bilgilendirme levhası konumlarını belirtiyoruz.</p>

      <h2>Güncelleme</h2>
      <p>Bu metin gerektiğinde güncellenir. Son güncelleme: ${new Date().getFullYear()}.</p>
    </div>
  </div>
</section>
`;
  return page({
    title: "Gizlilik ve KVKK Aydınlatma Metni",
    description: "CB İnşaat gizlilik politikası ve KVKK aydınlatma metni. Toplanan veriler, işleme amacı, saklama süresi ve haklarınız.",
    path: "/gizlilik/",
    ctx,
    crumbs: [{ label: "Gizlilik & KVKK", href: "/gizlilik/" }],
    body,
  });
}

/* =================================================================== /404 */
export function notFoundPage(ctx) {
  const body = `
<section class="section">
  <div class="wrap nf">
    <strong>404</strong>
    <h1 style="margin-top:12px">Aradığınız sayfa bulunamadı</h1>
    <p class="lead" style="max-width:40rem;margin:20px auto 0">Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Aşağıdaki bölümlerden devam edebilirsiniz.</p>
    <div class="btn-row mt-l" style="justify-content:center">
      <a class="btn btn--primary" href="/">Ana sayfa</a>
      <a class="btn btn--ghost" href="/hizmetler/">Hizmetler</a>
      <a class="btn btn--ghost" href="/bolgeler/">Bölgeler</a>
      <a class="btn btn--ghost" href="/blog/">Blog</a>
    </div>
  </div>
</section>

<section class="section section--white">
  <div class="wrap">
    ${secHead("En çok bakılanlar", "Popüler hizmetler", "")}
    <div class="grid g-3">
      ${linkList(services.filter((s) => s.featured).slice(0, 4).map((s) => ({ label: s.title, href: `/hizmetler/${s.slug}/` })))}
      ${linkList(districts.slice(0, 4).map((d) => ({ label: d.name, href: `/bolgeler/${d.slug}/` })))}
      ${linkList(posts.slice(0, 4).map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })))}
    </div>
  </div>
</section>
`;
  return page({
    title: "Sayfa bulunamadı (404)",
    description: "Aradığınız sayfa bulunamadı.",
    path: "/404.html",
    ctx,
    noindex: true,
    body,
  });
}

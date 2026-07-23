import type {Metadata} from "next";
import {districts,services} from "../site-data";
import {SimpleHeader} from "../hizmetler/[slug]/page";

export const metadata:Metadata={title:"Projenizi Anlatın, Teklif Alın",description:"Elektrik, sıhhi tesisat, hidrofor, priz tamiri, mekanik ve inşaat projenizi anlatın. CB İnşaat Malatya keşif ve teklif formu.",alternates:{canonical:"/teklif"}};

export default function QuotePage(){
  return <main className="inner quote-page"><SimpleHeader/>
    <section className="quote-hero"><div><p className="eyebrow">KEŞİF & TEKLİF FORMU</p><h1>Projenizi anlatın,<br/><mark>birlikte planlayalım.</mark></h1><p>Arıza, montaj, tadilat veya sıfırdan yapım… İhtiyacınızı ne kadar ayrıntılı anlatırsanız ön değerlendirmeyi o kadar doğru yapabiliriz.</p></div><ol><li><b>01</b><span>Formu doldurun<small>İşinizi ve konumunuzu anlatın.</small></span></li><li><b>02</b><span>Ön değerlendirme<small>Uygun çözüm ve keşif ihtiyacını belirleyelim.</small></span></li><li><b>03</b><span>Keşif ve teklif<small>İş kalemlerini netleştirip planlayalım.</small></span></li></ol></section>
    <section className="project-form-wrap">
      <form className="project-form" action="mailto:info@cbinsaat.com" method="post" encType="text/plain">
        <div className="form-title"><span>01</span><div><h2>İletişim bilgileriniz</h2><p>Teklif ve keşif planlaması için size ulaşabileceğimiz bilgileri yazın.</p></div></div>
        <div className="form-grid"><label>ADINIZ SOYADINIZ<input name="ad_soyad" required placeholder="Adınız Soyadınız"/></label><label>TELEFON NUMARANIZ<input name="telefon" required inputMode="tel" placeholder="05__ ___ __ __"/></label><label>E-POSTA<input type="email" name="eposta" placeholder="ornek@email.com"/></label><label>İLÇE<select name="ilce" required defaultValue=""><option value="" disabled>İlçe seçin</option>{districts.map(d=><option key={d.slug} value={d.name}>{d.name}</option>)}</select></label></div>
        <div className="form-title"><span>02</span><div><h2>İşin kapsamı</h2><p>Hangi hizmete ihtiyacınız olduğunu ve yapının türünü belirtin.</p></div></div>
        <div className="form-grid"><label>HİZMET<select name="hizmet" required defaultValue=""><option value="" disabled>Hizmet seçin</option>{services.map(s=><option key={s.slug} value={s.title}>{s.title}</option>)}</select></label><label>YAPI TÜRÜ<select name="yapi_turu" defaultValue=""><option value="" disabled>Yapı türü seçin</option><option>Daire / Ev</option><option>Apartman / Site</option><option>İş yeri / Mağaza</option><option>Fabrika / Atölye</option><option>Şantiye / Yeni yapı</option><option>Diğer</option></select></label><label>İŞİN ACİLİYETİ<select name="aciliyet" defaultValue="Planlanabilir"><option>Acil arıza</option><option>Birkaç gün içinde</option><option>Planlanabilir</option><option>Fiyat araştırıyorum</option></select></label><label>TAHMİNİ BAŞLAMA ZAMANI<input name="baslama" placeholder="Örn. Ağustos ayı"/></label></div>
        <div className="form-title"><span>03</span><div><h2>Projenizi anlatın</h2><p>Mevcut sorun, yapılmasını istediğiniz işler, yaklaşık ölçü ve bildiğiniz diğer ayrıntıları paylaşın.</p></div></div>
        <label>PROJE / ARIZA AÇIKLAMASI<textarea name="proje_detayi" required rows={8} placeholder="Örn. Yeşilyurt’ta 3+1 dairenin eski elektrik tesisatı yenilenecek. Pano değişimi, yeni priz hatları ve spot aydınlatma düşünüyoruz..."/></label>
        <label className="consent"><input type="checkbox" required/> Verdiğim bilgilerin yalnızca talebime dönüş yapılması amacıyla kullanılmasını kabul ediyorum.</label>
        <button className="btn yellow">PROJEMİ GÖNDER <span>↗</span></button><small className="form-note">Form, cihazınızdaki e-posta uygulamasını açarak talebinizi info@cbinsaat.com adresine hazırlar.</small>
      </form>
      <aside><h3>Teklif öncesi faydalı bilgiler</h3><p>Şunları yazmanız değerlendirmeyi hızlandırır:</p><ul><li>İşin yapılacağı mahalle veya köy</li><li>Yapının yaklaşık büyüklüğü</li><li>Mevcut arızanın belirtileri</li><li>İstenen malzeme veya ürün türü</li><li>İşe başlanması gereken tarih</li></ul><div><b>Doğrudan iletişim</b><a href="mailto:info@cbinsaat.com">info@cbinsaat.com</a></div></aside>
    </section>
  </main>
}

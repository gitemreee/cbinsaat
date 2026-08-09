# CB İnşaat — çalışma kuralları

## Yayına alma: her değişiklik canlıya gitmeli

Site Netlify'da `cbinsaat` projesinde ve **`main` dalına git ile bağlı**.
`main`'e push edildikten ~2 saniye sonra Netlify build'i başlıyor ve yaklaşık
40 saniyede <https://cbinsaat.com> güncelleniyor (ölçüldü: push 18:10:01,
yayın 18:10:43). Netlify sadece değişen sayfaları yüklüyor; ilk kurulum
build'i birkaç dakika sürebilir. Build komutu ve publish klasörü kökteki
`netlify.toml` içinde tanımlı; elle deploy, sürükle-bırak veya zip yükleme
gerekmiyor.

**Kural:** Bir değişiklik `main`'e ulaşmadıkça yayında değildir. Yan dalda
duran iş, kullanıcı için "yapılmamış" demektir.

Bu yüzden her iş şu şekilde bitirilir:

1. Kaynağı `site/` altında değiştir (asla `dist-site/` içini elle düzenleme —
   o klasör build çıktısı, her build'de sıfırdan üretiliyor).
2. `npm run build` çalıştır, çıktının doğru üretildiğini `dist-site/` içinden
   doğrula.
3. Commit'le ve `main`'e merge edip push et.
4. Netlify deploy'unun `ready` olduğunu teyit et, sonra kullanıcıya bildir.

Kullanıcı "her yaptığım değişiklik otomatik olarak yayınlansın" dedi; ayrıca
sorman gerekmiyor, iş bitince doğrudan `main`'e gönder. Sadece geri alması zor
bir şey (alan adı, DNS, toplu içerik silme, fiyat rakamları) söz konusuysa önce
sor.

## Proje hakkında

Bağımlılıksız statik site jeneratörü. `site/build.mjs` çalışıyor, `dist-site/`
üretiyor — 8200'den fazla sayfa (hizmet × ilçe × mahalle kombinasyonları).

| Klasör | İçerik |
| --- | --- |
| `site/data/` | İçerik kaynağı: hizmetler, ilçeler, mahalleler, yazılar, site bilgisi |
| `site/pages/` | Sayfa şablonları |
| `site/lib/` | Layout, bloklar, schema.org, HTML yardımcıları |
| `public/` | Fotoğraflar ve statik dosyalar |
| `dist-site/` | Build çıktısı — elle dokunulmaz |

Kurum bilgisi (kuruluş yılı, telefon, e-posta, sosyal hesaplar) tek yerde:
`site/data/site.mjs`. Metinlerde yıl, tecrübe süresi gibi değerler oradan
şablonla geliyor; sabit yazma.

## Dil

Site metinleri Türkçe. Yazım kurallarına dikkat: ek uyumu rakamın **okunuşuna**
göre belirlenir — "2005" → "iki bin be**ş**" → sert ünsüzle bittiği için
`2005'ten beri` (`2005'dan`/`2005'den` değil).

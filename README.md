# CB İnşaat — cbinsaat.com

Malatya'da elektrik, sıhhi tesisat, mekanik tesisat ve yapı işleri yapan CB İnşaat'ın
web sitesi. SEO odaklı, statik olarak üretilen 297 sayfa.

## Hızlı kullanım

```bash
node site/build.mjs     # siteyi üret  → dist-site/
node site/serve.mjs     # yerel önizleme → http://localhost:4321
node site/check.mjs     # kırık link + SEO kontrolü
```

`npm run build`, `npm run preview`, `npm run check` kısayolları da var.

## Yayına alma

`dist-site` klasörünü (veya `cb-insaat-netlify.zip` dosyasını)
<https://app.netlify.com/drop> adresine sürükleyin.

Git ile bağlamak isterseniz kök dizindeki `netlify.toml` build komutunu ve publish
klasörünü zaten tanımlıyor; ek ayar gerekmez.

## Ne nerede?

| Klasör | İçerik |
|---|---|
| `site/data/` | **İçerik.** Telefon, hizmetler, ilçeler, mahalleler, blog yazıları |
| `site/lib/` | Tasarım sistemi, sayfa kabuğu, ikonlar, kapak üreticisi, JSON-LD |
| `site/pages/` | Sayfa şablonları (ana sayfa, hizmet, bölge, blog, kurumsal) |
| `public/` | Kaynak görseller. `public/photos/<slug>.jpg` koyarsanız kapak yerine kullanılır |
| `dist-site/` | Build çıktısı. Elle düzenlemeyin, her build'de silinip yeniden yazılır |

Ayrıntılı geliştirme notları: [site/README.md](site/README.md)

## Sayfa yapısı

| URL | Adet |
|---|---|
| `/hizmetler/<hizmet>/` | 74 |
| `/hizmetler/<hizmet>/<ilce>/` | 962 |
| `/bolgeler/<ilce>/` | 13 |
| `/bolgeler/<ilce>/<mahalle>/` | 768 |
| `/bolgeler/<ilce>/<mahalle>/<etiket>/` | 6144 |
| `/blog/<yazi>/` | 100 |
| `/fiyatlar/`, `/projeler/`, niyet sayfaları | 127 |
| Kurumsal | 7 |
| **Toplam** | **8227** |

## İçerik güncelleme

- Telefon, e-posta, çalışma saati → `site/data/site.mjs`
- Yeni mahalle → `site/data/localities.mjs` (resmî liste `localities-extra.mjs` içinde otomatik)
- Yeni mahalle etiketi (elektrikçi, sucu…) → `site/data/local-tags.mjs`
- Yeni blog yazısı → `site/data/posts-*.mjs`
- Yeni hizmet → `site/data/services-*.mjs`

Değişiklikten sonra `node site/build.mjs && node site/check.mjs` çalıştırın.
`check` komutu kırık link, tekrar eden başlık/açıklama ve ince içerik kontrolü yapar.

## Bağımlılık

Tek bağımlılık `sharp` (görsel sıkıştırma). Kurulu değilse build yine çalışır,
sadece görseller sıkıştırılmadan kopyalanır.

```bash
npm install
```

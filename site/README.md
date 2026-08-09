# CB İnşaat — statik site

SEO odaklı, sıfır bağımlılıklı statik site jeneratörü. Çıktı `dist-site/` klasörüne yazılır
ve doğrudan Netlify'a sürükle-bırak ile yüklenebilir.

## Komutlar

```bash
node site/build.mjs     # siteyi üret  → dist-site/
node site/serve.mjs     # yerel önizleme → http://localhost:4321
node site/check.mjs     # kırık link + SEO kontrolü
```

`npm run build`, `npm run preview`, `npm run check` kısayolları da tanımlı.

## Klasör yapısı

```
site/
  build.mjs              Jeneratör — tüm sayfaları üretir, sitemap/robots yazar
  serve.mjs              Bağımlılıksız yerel önizleme sunucusu
  check.mjs              Yayın öncesi kontrol (link, tekrar eden meta, ince içerik)

  data/                  ← İÇERİK BURADA. Kod bilmeden düzenlenebilir.
    site.mjs             Marka, telefon, e-posta, çalışma saatleri, menü
    services.mjs         Hizmetleri birleştirir
    services-*.mjs       74 hizmetin uzun içerikleri (13 grup)
    service-extra*.mjs   Her hizmet için ek derinlik blokları
    districts.mjs        13 ilçe + ilçeye özel metinler
    localities.mjs       Öne çıkan 121 mahalle (menülerde bunlar listelenir)
    localities-extra.mjs Resmî listedeki kalan 647 mahalle (otomatik üretilir)
    local-tags.mjs       Mahalle × hizmet etiketleri (elektrikçi, sucu, doğalgazcı…)
    posts.mjs            Blog yazılarını birleştirir
    posts-*.mjs          100 blog yazısının tam gövdesi

  lib/
    styles.mjs           Tasarım sistemi (tek CSS dosyası olarak yazılır)
    layout.mjs           <head>, üst şerit, menü, kırıntı yolu, alt bilgi
    html.mjs             Kaçış, ikonlar, Türkçe ek üretimi (-da/-de, -a/-e, -ın/-in)
    schema.mjs           JSON-LD üreticileri
    blocks.mjs           Yeniden kullanılabilir bölümler (kart, SSS, CTA…)

  pages/
    home.mjs             Ana sayfa
    services.mjs         /hizmetler/, hizmet detay, hizmet × ilçe
    regions.mjs          /bolgeler/, ilçe, mahalle
    local-tag.mjs        /bolgeler/<ilce>/<mahalle>/<etiket>/
    blog.mjs             /blog/, yazı
    corporate.mjs        Hakkımızda, iletişim, teklif, SSS, gizlilik, 404
```

## Üretilen sayfa yapısı

| URL | Adet | Amaç |
|---|---|---|
| `/` | 1 | Ana sayfa |
| `/hizmetler/` + alan sayfaları | 14 | Hizmet listesi + 13 hizmet grubu hub'ı |
| `/hizmetler/<hizmet>/` | 74 | Hizmet detay (uzun içerik + SSS) |
| `/hizmetler/<hizmet>/<ilce>/` | 962 | Hizmet × ilçe (74 hizmet × 13 ilçe) |
| `/bolgeler/` | 1 | Bölge rehberi |
| `/bolgeler/<ilce>/` | 13 | İlçe sayfası |
| `/bolgeler/<ilce>/<mahalle>/` | 768 | Mahalle sayfası (resmî 719 mahalle + TOKİ/OSB) |
| `/bolgeler/<ilce>/<mahalle>/<etiket>/` | 6144 | Mahalle × hizmet etiketi (8 etiket) |
| `/blog/` + yazılar + kategoriler | 116 | Rehber içerikler |
| `/<niyet>/` + ilçeleri | 84 | "acil elektrikçi", "en yakın tesisatçı" vb. |
| `/fiyatlar/` + hizmet fiyat sayfaları | 42 | Fiyat rehberi |
| `/projeler/` | 1 | Tamamlanan projeler |
| Kurumsal | 7 | Hakkımızda, iletişim, teklif, SSS, gizlilik, teşekkürler, 404 |
| **Toplam** | **8227** | |

### Mahalle × hizmet etiketleri

`data/local-tags.mjs` içindeki her etiket, her mahalle için ayrı bir URL üretir:

```
/bolgeler/battalgazi/hatunsuyu/elektrikci/
/bolgeler/battalgazi/hatunsuyu/su-tesisatcisi/
/bolgeler/battalgazi/hatunsuyu/dogalgazci/   …
```

Amaç, "hatunsuyu elektrikçi" / "orduzu sucu" gibi mahalle + meslek aramalarına
karşılık üretmek. Yeni etiket eklemek için `localTags` dizisine bir kayıt ekleyin;
`service` ve `also` alanlarındaki slug'lar `data/services-*.mjs` içinde var olmalı.
Etiket sayısı × mahalle sayısı kadar sayfa üretildiği için yeni etiket eklemeden
önce toplam sayfa sayısını gözden geçirin.

## İçerik nasıl güncellenir?

**Telefon / e-posta / çalışma saati** → `data/site.mjs`. Tüm site otomatik güncellenir.

**Yeni mahalle eklemek** → `data/localities.mjs` içindeki `rows` dizisine satır ekleyin.
Bu dosyadaki kayıtlar "öne çıkan" mahallelerdir; menülerde ve bölge sayfalarının üst
bloklarında bunlar listelenir. Resmî listedeki kalan mahalleler `localities-extra.mjs`
içinde otomatik üretilir (`node scripts/gen-localities.mjs`), elle düzenlenmez.

```js
["Mahalle Adı", "mahalle-adi", "ilce-slug", "mahalle", "Bu mahalleye özgü 1–2 cümle."],
```

Not alanı boş bırakılmamalı — sayfanın özgün içeriği oradan gelir. Ad iyelik ekiyle
bitiyorsa (…başı, …oğlu, …suyu) slug'ı `possessiveNames` kümesine de ekleyin ki
"Orduzu'nda" gibi ekler doğru üretilsin.

**Yeni blog yazısı** → `data/posts-*.mjs` dosyalarından birine ekleyin. `body` dizisi
`{h2}`, `{p}`, `{ul}`, `{ol}`, `{table}`, `{quote}` bloklarından oluşur.

**Yeni hizmet** → `data/services-*.mjs`. `core: true` verirseniz 13 ilçe için ayrı
sayfa da üretilir.

Her değişiklikten sonra:

```bash
node site/build.mjs && node site/check.mjs
```

## SEO notları

- Her sayfada tekil title, description, H1 (297 sayfada tekrar yok — `check.mjs` doğrular)
- JSON-LD: GeneralContractor, WebSite, Service, BreadcrumbList, FAQPage, BlogPosting, ItemList
- `sitemap.xml` ve `robots.txt` otomatik üretilir
- Görseller `sharp` ile yeniden boyutlandırılıp WebP + JPEG olarak yazılır
- Harici JavaScript yok; menü ve SSS saf CSS/HTML ile çalışır

## Netlify

**Sürükle-bırak:** `dist-site` klasörünü <https://app.netlify.com/drop> adresine bırakın.

**Git bağlantısı:** kök dizindeki `netlify.toml` build komutunu ve publish klasörünü
tanımlar; ek ayar gerekmez.

Teklif formu Netlify Forms ile çalışır (`data-netlify="true"`). Gönderimler Netlify
panelinde **Forms → teklif** altında görünür; bildirim e-postasını oradan tanımlayın.

Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Stop'

$scriptDirectory = if ([string]::IsNullOrWhiteSpace($PSScriptRoot)) {
  Join-Path (Get-Location).Path 'scripts'
} else {
  $PSScriptRoot
}
$projectRoot = Split-Path -Parent $scriptDirectory
$outputRoot = Join-Path $projectRoot 'outputs\seo-yerel\malatya-yerlesim-listeleri'
New-Item -ItemType Directory -Path $outputRoot -Force | Out-Null

$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$utf8Bom = New-Object System.Text.UTF8Encoding($true)
$turkishCulture = [System.Globalization.CultureInfo]::GetCultureInfo('tr-TR')

function Write-Utf8NoBom([string]$path, [string]$content) {
  [System.IO.File]::WriteAllText($path, $content, $utf8NoBom)
}

function Write-CsvUtf8([string]$path, [object[]]$rows) {
  $csv = @($rows | ConvertTo-Csv -NoTypeInformation -Delimiter ';') -join [Environment]::NewLine
  [System.IO.File]::WriteAllText($path, $csv + [Environment]::NewLine, $utf8Bom)
}

function Get-CleanText([string]$htmlFragment) {
  $text = [regex]::Replace($htmlFragment, '(?is)<[^>]+>', ' ')
  $text = [System.Net.WebUtility]::HtmlDecode($text)
  return (($text -replace [char]0xA0, ' ') -replace '\s+', ' ').Trim()
}

function Repair-Utf8Mojibake([string]$value) {
  if ([string]::IsNullOrWhiteSpace($value)) { return $null }
  return [System.Text.Encoding]::UTF8.GetString(
    [System.Text.Encoding]::GetEncoding(28591).GetBytes($value)
  )
}

function Get-Slug([string]$value) {
  $slug = $value.ToLower($turkishCulture)
  $slug = $slug.Replace('ı','i').Replace('ğ','g').Replace('ü','u').Replace('ş','s').Replace('ö','o').Replace('ç','c')
  $slug = [regex]::Replace($slug, '[^a-z0-9]+', '-')
  return $slug.Trim('-')
}

$districts = @(
  'Akçadağ', 'Arapgir', 'Arguvan', 'Battalgazi', 'Darende', 'Doğanşehir',
  'Doğanyol', 'Hekimhan', 'Kale', 'Kuluncak', 'Pütürge', 'Yazıhan', 'Yeşilyurt'
)

# Güncel mahalleler: Malatya Valiliği muhtarlık kayıtları.
$valilikUrl = 'https://malatya.gov.tr/muhtarliklarimiz'
$valilikHtml = (Invoke-WebRequest -UseBasicParsing -Uri $valilikUrl -TimeoutSec 120).Content
$currentRows = New-Object System.Collections.ArrayList

for ($i = 0; $i -lt $districts.Count; $i++) {
  $district = $districts[$i]
  $heading = $district + ' İlçesi Mahalle Muhtarlıkları'
  $start = $valilikHtml.IndexOf($heading)
  if ($start -lt 0) { throw "Valilik sayfasında ilçe başlığı bulunamadı: $district" }

  if ($i -lt ($districts.Count - 1)) {
    $nextHeading = $districts[$i + 1] + ' İlçesi Mahalle Muhtarlıkları'
    $end = $valilikHtml.IndexOf($nextHeading, $start + 1)
  } else {
    $end = $valilikHtml.Length
  }
  if ($end -le $start) { throw "Valilik sayfasında ilçe bölümü ayrıştırılamadı: $district" }

  $section = $valilikHtml.Substring($start, $end - $start)
  foreach ($rowMatch in [regex]::Matches($section, '(?is)<tr[^>]*>.*?</tr>')) {
    $cells = @(
      [regex]::Matches($rowMatch.Value, '(?is)<td[^>]*>(.*?)</td>') |
        ForEach-Object { Get-CleanText $_.Groups[1].Value }
    )
    if ($cells.Count -ge 2 -and $cells[0] -match '^\d+$' -and $cells[1]) {
      $neighborhood = $cells[1]
      [void]$currentRows.Add([pscustomobject]@{
        Ilce = $district
        Mahalle = $neighborhood
        GuncelStatu = 'Mahalle'
        SeoKonumIfadesi = "$neighborhood Mahallesi $district Malatya"
        Slug = (Get-Slug "$district-$neighborhood-mahallesi")
      })
    }
  }
}

$currentRows = @($currentRows | Sort-Object @{Expression={ [array]::IndexOf($districts, $_.Ilce) }}, Mahalle)
if ($currentRows.Count -ne 719) {
  throw "Beklenen 719 güncel mahalle yerine $($currentRows.Count) kayıt bulundu. Kaynak yapısı değişmiş olabilir."
}

# Güncel belediyeler: bir büyükşehir ve 13 büyükşehir ilçe belediyesi.
$currentMunicipalities = @(
  [pscustomobject]@{ Belediye='Malatya Büyükşehir Belediyesi'; Tur='Büyükşehir Belediyesi' }
)
$currentMunicipalities += $districts | ForEach-Object {
  [pscustomobject]@{ Belediye="$_ Belediyesi"; Tur='Büyükşehir İlçe Belediyesi' }
}

# 6360 sayılı Kanun öncesindeki 39 belde/kasaba belediyesi.
$formerBeldes = @(
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Beydağı'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Dilek'; BugunkuIlce='Yeşilyurt' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Erenli'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Hanımınçiftliği'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Orduzu'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Topsöğüt'; BugunkuIlce='Yeşilyurt' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Şahnahan'; BugunkuIlce='Yeşilyurt' },
  [pscustomobject]@{ EskiBaglilik='Merkez'; Belde='Yaygın'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Akçadağ'; Belde='Bahri'; BugunkuIlce='Akçadağ' },
  [pscustomobject]@{ EskiBaglilik='Akçadağ'; Belde='Kozluca'; BugunkuIlce='Akçadağ' },
  [pscustomobject]@{ EskiBaglilik='Akçadağ'; Belde='Ören'; BugunkuIlce='Akçadağ' },
  [pscustomobject]@{ EskiBaglilik='Battalgazi'; Belde='Hasırcılar'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Battalgazi'; Belde='Hatunsuyu'; BugunkuIlce='Battalgazi' },
  [pscustomobject]@{ EskiBaglilik='Darende'; Belde='Ağılbaşı'; BugunkuIlce='Darende' },
  [pscustomobject]@{ EskiBaglilik='Darende'; Belde='Aşağı Ulupınar'; BugunkuIlce='Darende' },
  [pscustomobject]@{ EskiBaglilik='Darende'; Belde='Ayvalı'; BugunkuIlce='Darende' },
  [pscustomobject]@{ EskiBaglilik='Darende'; Belde='Balaban'; BugunkuIlce='Darende' },
  [pscustomobject]@{ EskiBaglilik='Darende'; Belde='Ilıca'; BugunkuIlce='Darende' },
  [pscustomobject]@{ EskiBaglilik='Darende'; Belde='Yenice'; BugunkuIlce='Darende' },
  [pscustomobject]@{ EskiBaglilik='Doğanşehir'; Belde='Erkenek'; BugunkuIlce='Doğanşehir' },
  [pscustomobject]@{ EskiBaglilik='Doğanşehir'; Belde='Gövdeli'; BugunkuIlce='Doğanşehir' },
  [pscustomobject]@{ EskiBaglilik='Doğanşehir'; Belde='Polat'; BugunkuIlce='Doğanşehir' },
  [pscustomobject]@{ EskiBaglilik='Doğanşehir'; Belde='Söğüt'; BugunkuIlce='Doğanşehir' },
  [pscustomobject]@{ EskiBaglilik='Doğanşehir'; Belde='Sürgü'; BugunkuIlce='Doğanşehir' },
  [pscustomobject]@{ EskiBaglilik='Doğanşehir'; Belde='Kurucaova'; BugunkuIlce='Doğanşehir' },
  [pscustomobject]@{ EskiBaglilik='Doğanyol'; Belde='Gökçe'; BugunkuIlce='Doğanyol' },
  [pscustomobject]@{ EskiBaglilik='Hekimhan'; Belde='Güzelyurt'; BugunkuIlce='Hekimhan' },
  [pscustomobject]@{ EskiBaglilik='Hekimhan'; Belde='Hasançelebi'; BugunkuIlce='Hekimhan' },
  [pscustomobject]@{ EskiBaglilik='Hekimhan'; Belde='Kocaözü'; BugunkuIlce='Hekimhan' },
  [pscustomobject]@{ EskiBaglilik='Hekimhan'; Belde='Kurşunlu'; BugunkuIlce='Hekimhan' },
  [pscustomobject]@{ EskiBaglilik='Hekimhan'; Belde='Girmana'; BugunkuIlce='Hekimhan' },
  [pscustomobject]@{ EskiBaglilik='Kuluncak'; Belde='Sofular'; BugunkuIlce='Kuluncak' },
  [pscustomobject]@{ EskiBaglilik='Pütürge'; Belde='Nohutlu'; BugunkuIlce='Pütürge' },
  [pscustomobject]@{ EskiBaglilik='Pütürge'; Belde='Tepehan'; BugunkuIlce='Pütürge' },
  [pscustomobject]@{ EskiBaglilik='Yazıhan'; Belde='Durucasu'; BugunkuIlce='Yazıhan' },
  [pscustomobject]@{ EskiBaglilik='Yazıhan'; Belde='Fethiye'; BugunkuIlce='Yazıhan' },
  [pscustomobject]@{ EskiBaglilik='Yeşilyurt'; Belde='Bostanbaşı'; BugunkuIlce='Yeşilyurt' },
  [pscustomobject]@{ EskiBaglilik='Yeşilyurt'; Belde='Gündüzbey'; BugunkuIlce='Yeşilyurt' },
  [pscustomobject]@{ EskiBaglilik='Yeşilyurt'; Belde='Yakınca'; BugunkuIlce='Yeşilyurt' }
) | ForEach-Object {
  $_ | Add-Member -NotePropertyName TarihiStatu -NotePropertyValue 'Eski belde/kasaba belediyesi' -PassThru |
    Add-Member -NotePropertyName SeoKonumIfadesi -NotePropertyValue "$($_.Belde) $($_.BugunkuIlce) Malatya" -PassThru
}

if ($formerBeldes.Count -ne 39) { throw "Eski belde listesi 39 kayıt olmalıdır." }

# 6360 sayılı Kanunun (9) ve (10) sayılı listelerinde eski Merkez ilçeden aktarılan köyler.
$centerToYesilyurt = @(
  'Bindal','Duranlar','Duruldu','Fatih','Göktarla','Karahan','Kendirli','Kırkpınar',
  'Mahmutlu','Özal','Samanköy','Suluköy','Sütlüce','Tepeköy','Tohma','Topraktepe'
)
$centerToBattalgazi = @(
  'Bağtepe','Bulgurlu','Çamurlu','Fırıncı','Göller','Hacıhaliloğluçiftliği','Karagöz',
  'Karakaşçiftliği','Karaköy','Üzümlü','Alhanuşağı','Bulutlu','Çolaklı','Düzyol',
  'Gülümuşağı','Hacıyusuflar','Hisartepe','Kamıştaş','Kapıkaya','Karatepe','Merdivenler',
  'Pelitli','Selvidağ','Tanışık','Tokluca','Uluköy','Yenice','Yeniköy'
)
$formerCenterVillages = @()
$formerCenterVillages += $centerToYesilyurt | ForEach-Object {
  [pscustomobject]@{ EskiBaglilik='Malatya Merkez'; EskiStatu='Köy'; Yerlesim=$_; BugunkuIlce='Yeşilyurt'; SeoKonumIfadesi="$_ Yeşilyurt Malatya" }
}
$formerCenterVillages += $centerToBattalgazi | ForEach-Object {
  [pscustomobject]@{ EskiBaglilik='Malatya Merkez'; EskiStatu='Köy'; Yerlesim=$_; BugunkuIlce='Battalgazi'; SeoKonumIfadesi="$_ Battalgazi Malatya" }
}
if ($formerCenterVillages.Count -ne 44) { throw "Eski Merkez köy listesi 44 kayıt olmalıdır." }

# OpenStreetMap'te 9 Ağustos 2026 tarihinde place=hamlet olarak haritalanmış,
# adı bulunan mezra/bağlı yerleşim adayları. İsimsiz ve yalnızca "mezra" yazan
# kayıtlar çıkarılmış, aynı ilçe/ad tekrarları birleştirilmiştir.
# Bu bölüm resmî ve eksiksiz bir idari liste değildir.
$mappedHamletSeed = @(
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Aduşağı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Ağaç'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Alanli'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Aydoğdu'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Bahçeler'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Ballıca'; KayitSayisi=2 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Beygirli'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Bulgurlu'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Dilo'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Dişterik'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Hacı Uşağı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Haraç'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Harpuzik'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='İlyas Kâhya'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='İn'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Kalınharman'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Kayalısu Çiftliği'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Kebir Uşağı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Kozer Çiftliği'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Levenge'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Mehmetuşağı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Rutop'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Suceyin'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Tanışa'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Tosunlu'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Üçtepe'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Yayla'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Yenibağ'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Yıldız'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arapgir'; Yerlesim='Yoluklu'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Aşağıkonak'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Çiftlik'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Dalhançer'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Gecekondu'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Güvercinlik'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Hacılar'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Hacımusa'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Horumhan'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Karakaya'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Kınık'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Sedefuşağı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Arguvan'; Yerlesim='Uru'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Doğanşehir'; Yerlesim='Çay'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Doğanşehir'; Yerlesim='Sarıdanışma'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Aliağalar'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Bağyolu'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Çeki'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Çobanpınarı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Darıyeri'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Karamukça'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Kaymak'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Kurbağalı'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Hekimhan'; Yerlesim='Seydimehmet'; KayitSayisi=1 },
  [pscustomobject]@{ Ilce='Pütürge'; Yerlesim='Köklükaya'; KayitSayisi=1 }
)
$mappedHamlets = @(
  $mappedHamletSeed | ForEach-Object {
    [pscustomobject]@{
      Ilce = $_.Ilce
      Yerlesim = $_.Yerlesim
      HaritaStatu = 'Mezra/hamlet adayı'
      KayitSayisi = $_.KayitSayisi
      SeoKonumIfadesi = "$($_.Yerlesim) $($_.Ilce) Malatya"
      Dogrulama = 'Resmî olmayan harita kaydı; yerel doğrulama gerekli'
    }
  } | Sort-Object Ilce, Yerlesim
)

$districtCounts = @(
  $currentRows | Group-Object Ilce | ForEach-Object {
    [pscustomobject]@{ Ilce=$_.Name; MahalleSayisi=$_.Count }
  }
)

Write-CsvUtf8 (Join-Path $outputRoot '01-malatya-guncel-ilce-mahalleleri.csv') $currentRows
Write-CsvUtf8 (Join-Path $outputRoot '02-malatya-guncel-belediyeler.csv') $currentMunicipalities
Write-CsvUtf8 (Join-Path $outputRoot '03-malatya-eski-belde-kasaba-belediyeleri.csv') $formerBeldes
Write-CsvUtf8 (Join-Path $outputRoot '04-malatya-merkeze-bagli-eski-koyler.csv') $formerCenterVillages
Write-CsvUtf8 (Join-Path $outputRoot '05-malatya-harita-tabanli-mezra-adaylari.csv') $mappedHamlets

$md = New-Object System.Text.StringBuilder
[void]$md.AppendLine('# Malatya İlçeleri ve Güncel Mahalleleri')
[void]$md.AppendLine('')
[void]$md.AppendLine("Güncelleme tarihi: 9 Ağustos 2026  ")
[void]$md.AppendLine("Toplam: **13 ilçe, $($currentRows.Count) güncel mahalle**")
[void]$md.AppendLine('')
[void]$md.AppendLine('> Malatya büyükşehir olduğu için köy ve belde belediyelerinin tüzel kişilikleri kaldırılmış, yerleşimler mahalle statüsüne dönüştürülmüştür. Aşağıdaki ana liste güncel mahalle adlarını gösterir.')
[void]$md.AppendLine('')

foreach ($district in $districts) {
  $rows = @($currentRows | Where-Object Ilce -eq $district)
  [void]$md.AppendLine("## $district ($($rows.Count) mahalle)")
  [void]$md.AppendLine('')
  foreach ($row in $rows) { [void]$md.AppendLine("- $($row.Mahalle) Mahallesi") }
  [void]$md.AppendLine('')
}
Write-Utf8NoBom (Join-Path $outputRoot 'malatya-tum-ilce-ve-mahalleler.md') $md.ToString()

$flat = New-Object System.Text.StringBuilder
[void]$flat.AppendLine('MALATYA GÜNCEL İLÇE VE MAHALLELERİ')
[void]$flat.AppendLine('=================================')
foreach ($district in $districts) {
  [void]$flat.AppendLine('')
  [void]$flat.AppendLine("[$district]")
  foreach ($row in @($currentRows | Where-Object Ilce -eq $district)) {
    [void]$flat.AppendLine("$($row.Mahalle) Mahallesi, $district, Malatya")
  }
}
[void]$flat.AppendLine('')
[void]$flat.AppendLine('ESKİ BELDE / KASABA BELEDİYELERİ (39)')
[void]$flat.AppendLine('======================================')
foreach ($row in $formerBeldes) { [void]$flat.AppendLine("$($row.Belde) — eski bağlılık: $($row.EskiBaglilik); bugünkü ilçe: $($row.BugunkuIlce)") }
[void]$flat.AppendLine('')
[void]$flat.AppendLine('ESKİ MALATYA MERKEZ KÖYLERİ (44)')
[void]$flat.AppendLine('================================')
foreach ($row in $formerCenterVillages) { [void]$flat.AppendLine("$($row.Yerlesim) — bugün: $($row.BugunkuIlce)") }
[void]$flat.AppendLine('')
[void]$flat.AppendLine("HARİTA TABANLI MEZRA ADAYLARI ($($mappedHamlets.Count))")
[void]$flat.AppendLine('Not: Bu bölüm resmî ve eksiksiz değildir; yerel doğrulama gerekir.')
foreach ($row in $mappedHamlets) { [void]$flat.AppendLine("$($row.Yerlesim) — $($row.Ilce), Malatya") }
Write-Utf8NoBom (Join-Path $outputRoot 'malatya-tum-yerlesim-adlari.txt') $flat.ToString()

$data = [ordered]@{
  generated_at = '2026-08-09'
  province = 'Malatya'
  counts = [ordered]@{
    districts = $districts.Count
    current_neighborhoods = $currentRows.Count
    current_municipalities = $currentMunicipalities.Count
    former_belde_municipalities = $formerBeldes.Count
    former_center_villages = $formerCenterVillages.Count
    mapped_hamlet_candidates = $mappedHamlets.Count
  }
  district_counts = $districtCounts
  current_neighborhoods = $currentRows
  current_municipalities = $currentMunicipalities
  former_belde_municipalities = $formerBeldes
  former_center_villages = $formerCenterVillages
  mapped_hamlet_candidates = $mappedHamlets
}
Write-Utf8NoBom (Join-Path $outputRoot 'malatya-yerlesim-verisi.json') ($data | ConvertTo-Json -Depth 8)

$readme = @"
# Malatya Yerleşim Listeleri

Bu klasörde CB İnşaat'ın yerel SEO çalışmaları için hazırlanmış Malatya yerleşim verileri bulunur.

## Özet

- 13 ilçe
- $($currentRows.Count) güncel mahalle
- 14 güncel belediye: 1 büyükşehir + 13 ilçe belediyesi
- 39 eski belde/kasaba belediyesi
- 44 eski Malatya Merkez köyü
- $($mappedHamlets.Count) adı bulunan harita-tabanlı mezra/hamlet adayı

## Önemli statü notu

Malatya büyükşehir statüsündedir. 6360 sayılı Kanun sonrasında il sınırları içindeki köyler ve belde belediyeleri mahalleye dönüştürülmüştür. Bu nedenle güncel ve resmî SEO konum sayfalarında **mahalle** statüsü kullanılmalıdır. “Köy”, “belde” ve “kasaba” ifadeleri tarihî veya halk arasındaki kullanım olarak ayrıca değerlendirilebilir.

Mezra dosyası OpenStreetMap'te `place=hamlet` olarak haritalanmış, adı bulunan kayıtları içerir. Bu veri resmî değildir ve Malatya'daki bütün mezraları kapsadığı garanti edilemez. Mezra adına özel sayfa açmadan önce muhtarlık, belediye veya saha bilgisiyle doğrulama yapılmalıdır.

## Kaynaklar

- Malatya Valiliği Muhtarlıklarımız: https://malatya.gov.tr/muhtarliklarimiz
- 6360 sayılı Kanun ve Malatya için (9)–(10) sayılı listeler: https://cdn.tbmm.gov.tr/KKBSPublicFile/D24/Y3/T1/KanunMetni/6fd1dca0-c56a-40ef-bc98-fb463d9ac578.html
- Eski 39 belde belediyesi kontrol listesi: https://malatyahaber.com/haber/39-belediye-tarih-oluyor
- Güncel belediye sistemi: https://www.belediye.gov.tr/belediyeler
- Mezra adayları: OpenStreetMap / Overpass API, ODbL

## Dosya kullanımı

- 01-malatya-guncel-ilce-mahalleleri.csv: SEO sayfa üretiminde esas alınacak güncel liste.
- malatya-tum-ilce-ve-mahalleler.md: İnsan tarafından okunabilir tam liste.
- malatya-tum-yerlesim-adlari.txt: Tek dosyada tüm kategoriler.
- malatya-yerlesim-verisi.json: Siteye veya içerik üretim sistemine aktarılabilir yapılandırılmış veri.
"@
Write-Utf8NoBom (Join-Path $outputRoot 'README.md') $readme

[pscustomobject]@{
  Output = $outputRoot
  Districts = $districts.Count
  CurrentNeighborhoods = $currentRows.Count
  FormerBeldes = $formerBeldes.Count
  FormerCenterVillages = $formerCenterVillages.Count
  MappedHamlets = $mappedHamlets.Count
}

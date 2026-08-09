Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$sourceDir = Join-Path $root 'outputs\sosyal-medya-yapim-insaat\kaynaklar'
$outputDir = Join-Path $root 'outputs\sosyal-medya-yapim-insaat\paylasima-hazir'
$logoPath = Join-Path $root 'outputs\branding\cb-insaat-logo-v1.png'
New-Item -ItemType Directory -Path $outputDir -Force | Out-Null

function Convert-UnicodeText([string]$value) {
  return [System.Text.RegularExpressions.Regex]::Unescape($value)
}

# Unicode escape sequences keep Turkish text reliable in Windows PowerShell 5.
$items = @(
  @{ File='01-anahtar-teslim-yapim'; Line1='ANAHTAR TESL\u0130M'; Line2='YAPIM'; Sub='Ke\u015fiften temiz teslime'; Color='#B73535' },
  @{ File='02-komple-ev-tadilati'; Line1='KOMPLE EV'; Line2='TAD\u0130LATI'; Sub='Elektrik \u2022 Su \u2022 Dekorasyon'; Color='#6D8B57' },
  @{ File='03-mutfak-banyo'; Line1='MUTFAK & BANYO'; Line2='TAD\u0130LATI'; Sub='Tesisat \u2022 Seramik \u2022 Montaj'; Color='#C36B4B' },
  @{ File='04-ofis-is-yeri'; Line1='OF\u0130S & \u0130\u015e YER\u0130'; Line2='TAD\u0130LATI'; Sub='Anahtar teslim ticari alanlar'; Color='#D56B2D' },
  @{ File='05-kaba-insaat'; Line1='KABA \u0130N\u015eAAT'; Line2='UYGULAMALARI'; Sub='Kal\u0131p \u2022 Demir \u2022 Beton \u2022 Duvar'; Color='#E06C28' },
  @{ File='06-ince-insaat'; Line1='\u0130NCE \u0130N\u015eAAT'; Line2='\u0130\u015eLER\u0130'; Sub='Al\u00e7\u0131 \u2022 Boya \u2022 Zemin \u2022 Tavan'; Color='#7E9365' },
  @{ File='07-cati-dis-cephe'; Line1='\u00c7ATI & DI\u015e CEPHE'; Line2='YEN\u0130LEME'; Sub='Yal\u0131t\u0131m \u2022 Mantolama \u2022 Onar\u0131m'; Color='#B54436' },
  @{ File='08-bahce-cevre'; Line1='BAH\u00c7E & \u00c7EVRE'; Line2='D\u00dcZENLEME'; Sub='Duvar \u2022 Ta\u015f \u2022 Sulama \u2022 Ayd\u0131nlatma'; Color='#3F7A4A' },
  @{ File='09-elektrik-mekanik'; Line1='ELEKTR\u0130K & MEKAN\u0130K'; Line2='TES\u0130SAT'; Sub='Tek ekipten koordineli uygulama'; Color='#287FB8' },
  @{ File='10-proje-yonetimi'; Line1='PROJE & UYGULAMA'; Line2='Y\u00d6NET\u0130M\u0130'; Sub='Ke\u015fif \u2022 Metraj \u2022 \u0130\u015f program\u0131'; Color='#B6953C' }
)

$logo = [System.Drawing.Image]::FromFile($logoPath)
$jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$quality = New-Object System.Drawing.Imaging.EncoderParameters 1
$quality.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 94L)

foreach ($item in $items) {
  $sourcePath = Join-Path $sourceDir ($item.File + '-bg.png')
  $source = [System.Drawing.Image]::FromFile($sourcePath)
  $canvas = New-Object System.Drawing.Bitmap 1080,1080
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
  $g.DrawImage($source,0,0,1080,1080)

  $panelBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(202,8,10,12))
  $panel = New-Object System.Drawing.Drawing2D.GraphicsPath
  $panel.AddPolygon([System.Drawing.Point[]]@(
    (New-Object System.Drawing.Point 0,735),
    (New-Object System.Drawing.Point 675,735),
    (New-Object System.Drawing.Point 735,980),
    (New-Object System.Drawing.Point 0,980)
  ))
  $g.FillPath($panelBrush,$panel)

  $accent = [System.Drawing.ColorTranslator]::FromHtml($item.Color)
  $accentBrush = New-Object System.Drawing.SolidBrush $accent
  $g.FillRectangle($accentBrush,46,780,7,140)
  $g.FillRectangle($accentBrush,0,735,675,5)

  $logoBack = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(214,4,4,4))
  $g.FillRectangle($logoBack,30,28,152,152)
  $g.DrawImage($logo,38,36,136,136)

  $white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
  $softWhite = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(228,255,255,255))
  $titleFont = New-Object System.Drawing.Font('Arial',38,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel)
  $titleFont2 = New-Object System.Drawing.Font('Arial',34,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel)
  $subFont = New-Object System.Drawing.Font('Arial',21,[System.Drawing.FontStyle]::Regular,[System.Drawing.GraphicsUnit]::Pixel)
  $footerFont = New-Object System.Drawing.Font('Arial',22,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel)
  $smallFont = New-Object System.Drawing.Font('Arial',18,[System.Drawing.FontStyle]::Bold,[System.Drawing.GraphicsUnit]::Pixel)

  $g.DrawString((Convert-UnicodeText $item.Line1),$titleFont,$white,72,775)
  $g.DrawString((Convert-UnicodeText $item.Line2),$titleFont2,$accentBrush,72,820)
  $g.DrawString((Convert-UnicodeText $item.Sub),$subFont,$softWhite,72,875)

  $footerBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(225,6,7,9))
  $g.FillRectangle($footerBrush,0,1000,1080,80)
  $g.FillRectangle($accentBrush,0,1000,1080,4)
  $g.DrawString('WhatsApp 0530 734 60 00',$footerFont,$white,38,1025)
  $g.DrawString('MALATYA',$smallFont,$accentBrush,906,1028)

  $outputPath = Join-Path $outputDir ($item.File + '.jpg')
  $canvas.Save($outputPath,$jpeg,$quality)

  $smallFont.Dispose(); $footerFont.Dispose(); $subFont.Dispose(); $titleFont2.Dispose(); $titleFont.Dispose()
  $footerBrush.Dispose(); $softWhite.Dispose(); $white.Dispose(); $logoBack.Dispose(); $accentBrush.Dispose()
  $panel.Dispose(); $panelBrush.Dispose(); $g.Dispose(); $canvas.Dispose(); $source.Dispose()
}

$quality.Dispose()
$logo.Dispose()

#!/usr/bin/env bash
# Yazı tiplerini yeniden üretir → public/fonts/*.woff2
#
# Normalde çalıştırmanıza gerek yok: üretilmiş dosyalar depoda duruyor ve
# build sırasında olduğu gibi /assets/fonts/ altına kopyalanıyor. Bu betik
# yalnızca yazı tipi, ağırlık veya karakter kümesi değişince gerekir.
#
# Gereken: python3 + fonttools + brotli
#   pip install fonttools brotli
#
# Ne yapıyor:
#   1. Özgün fontları google/fonts deposundan indirir (tam, alt kümelenmemiş).
#   2. Inter'in kullanılmayan opsz eksenini sabitler, ağırlık aralığını 400–800
#      olarak bırakır; Caveat'ı 700'e sabitler (sitede tek ağırlık kullanılıyor).
#   3. Sitede geçen karakterlere indirger ve woff2 olarak yazar.
#
# Karakter kümesi: temel Latin + Latin-1 + Latin Ext-A (Türkçe ğ ı İ ş dâhil),
# tipografik noktalama, para birimleri (₺), oklar ve birkaç matematik işareti.
# Sitedeki gerçek karakterleri saymak için:
#   node -e "…" (bkz. README) — 112 farklı karakter kullanılıyor.

set -euo pipefail
cd "$(dirname "$0")/.."

SRC="$(mktemp -d)"
RAW="https://raw.githubusercontent.com/google/fonts/main"
UNI='U+0020-007E,U+00A0-00FF,U+0100-017F,U+0192,U+0391-03C9,U+2010-2027,U+2030-205E,U+20A0-20BF,U+2190-2193,U+2212,U+2248,U+2713-2714,U+FEFF'
# Caveat yalnızca logo altındaki el yazısı sloganda kullanılıyor; harf ve
# rakamlar yeterli, tüm noktalama gereksiz yere yer kaplıyor.
UNI_HAND='U+0020,U+0027,U+002C-002E,U+0030-0039,U+0041-005A,U+0061-007A,U+00C7,U+00D6,U+00DC,U+00E2,U+00E7,U+00EE,U+00F6,U+00FC,U+011E,U+011F,U+0130,U+0131,U+015E,U+015F,U+2013,U+2014,U+2019,U+2026,U+20BA'

echo "Özgün fontlar indiriliyor…"
curl -sSfo "$SRC/Inter.ttf"        "$RAW/ofl/inter/Inter%5Bopsz,wght%5D.ttf"
curl -sSfo "$SRC/Caveat.ttf"       "$RAW/ofl/caveat/Caveat%5Bwght%5D.ttf"
curl -sSfo "$SRC/BC-600.ttf"       "$RAW/ofl/barlowcondensed/BarlowCondensed-SemiBold.ttf"
curl -sSfo "$SRC/BC-700.ttf"       "$RAW/ofl/barlowcondensed/BarlowCondensed-Bold.ttf"
curl -sSfo "$SRC/BC-800.ttf"       "$RAW/ofl/barlowcondensed/BarlowCondensed-ExtraBold.ttf"

echo "Kullanılmayan eksenler sabitleniyor…"
python3 -m fontTools.varLib.instancer "$SRC/Inter.ttf"  opsz=14 wght=400:800 -o "$SRC/inter-var.ttf" >/dev/null
python3 -m fontTools.varLib.instancer "$SRC/Caveat.ttf" wght=700             -o "$SRC/caveat-700.ttf" >/dev/null

sub() { # sub <kaynak> <hedef> <unicode-listesi>
  python3 -m fontTools.subset "$1" --unicodes="$3" --flavor=woff2 \
    --layout-features='*' --no-hinting --desubroutinize --output-file="public/fonts/$2" >/dev/null
  printf '  %-30s %s\n' "$2" "$(du -h "public/fonts/$2" | cut -f1)"
}

echo "Alt kümeleniyor…"
mkdir -p public/fonts
sub "$SRC/inter-var.ttf"  inter.woff2                "$UNI"
sub "$SRC/BC-600.ttf"     barlow-condensed-600.woff2 "$UNI"
sub "$SRC/BC-700.ttf"     barlow-condensed-700.woff2 "$UNI"
sub "$SRC/BC-800.ttf"     barlow-condensed-800.woff2 "$UNI"
sub "$SRC/caveat-700.ttf" caveat-700.woff2           "$UNI_HAND"

rm -rf "$SRC"
echo
echo "Bitti. Lisans metni public/fonts/OFL.txt içinde — silmeyin, OFL gereği."

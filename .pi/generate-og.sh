#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/assets/og-image.png"
TMP="$ROOT/.pi"
FONT_DIR="$TMP/fonts"

NS_REG="$FONT_DIR/NunitoSans-Regular.ttf"
NS_BOLD="$FONT_DIR/NunitoSans-Bold.ttf"
NS_XBOLD="$FONT_DIR/NunitoSans-ExtraBold.ttf"
VARELA="$FONT_DIR/VarelaRound-Regular.ttf"

WIDTH=1200
HEIGHT=630

# Base canvas with a soft diagonal gradient and a subtle circle.
convert -size "${WIDTH}x${HEIGHT}" \
  -define gradient:angle=135 \
  gradient:'#E5F1FB-#FAD2E1' \
  -fill 'rgba(255,255,255,0.35)' -draw "circle 980,315 1120,315" \
  -fill 'rgba(255,255,255,0.25)' -draw "circle 150,520 280,520" \
  "$OUT"

# Small top label.
convert "$OUT" \
  -font "$NS_REG" -pointsize 18 -fill '#64748B' \
  -gravity NorthWest -annotate +80+110 'PORTFOLIO VIDEO EDITOR' \
  "$OUT"

# Title line 1: Shimazaki.
convert "$OUT" \
  -font "$VARELA" -pointsize 90 -fill '#1E2A4A' \
  -gravity NorthWest -annotate +80+160 'Shimazaki' \
  "$OUT"

# Miyu pill.
MIYU_LABEL='Miyu'
MIYU_SIZE=$(convert -background none -fill black -font "$VARELA" -pointsize 90 label:"$MIYU_LABEL" -format '%w %h' info:)
MIYU_W=$(echo "$MIYU_SIZE" | cut -d' ' -f1)
MIYU_H=$(echo "$MIYU_SIZE" | cut -d' ' -f2)
PILL_PAD_X=32
PILL_PAD_Y=16
PILL_W=$((MIYU_W + PILL_PAD_X * 2))
PILL_H=$((MIYU_H + PILL_PAD_Y * 2))
PILL_R=28

convert -size "${PILL_W}x${PILL_H}" xc:none \
  -fill '#FAD2E1' -draw "roundrectangle 0,0 $((PILL_W-1)),$((PILL_H-1)) $PILL_R,$PILL_R" \
  -font "$VARELA" -pointsize 90 -fill '#1E2A4A' \
  -gravity center -annotate +0+0 "$MIYU_LABEL" \
  "$TMP/miyu-pill.png"

PILL_X=80
PILL_Y=270
convert "$OUT" "$TMP/miyu-pill.png" -gravity NorthWest -geometry +${PILL_X}+${PILL_Y} -composite "$OUT"

# Description text (wrapped to avoid overflow).
DESC="Mengubah footage mentah menjadi cerita visual yang menarik dan dreamy — Kecantikan, F&B, & Gaya Hidup dengan estetika K-vibe / Jepang."
convert -background none -font "$NS_REG" -pointsize 22 -fill '#334155' \
  -size 540x caption:"$DESC" \
  "$TMP/desc.png"

DESC_Y=$((PILL_Y + PILL_H + 30))
convert "$OUT" "$TMP/desc.png" -gravity NorthWest -geometry +80+${DESC_Y} -composite "$OUT"

# CTA button.
BTN_TEXT='Lihat Harga & Portofolio'
BTN_SIZE=$(convert -background none -fill black -font "$NS_BOLD" -pointsize 20 label:"$BTN_TEXT" -format '%w %h' info:)
BTN_W=$(echo "$BTN_SIZE" | cut -d' ' -f1)
BTN_H=$(echo "$BTN_SIZE" | cut -d' ' -f2)
BTN_PAD_X=28
BTN_PAD_Y=14
BTN_BG_W=$((BTN_W + BTN_PAD_X * 2))
BTN_BG_H=$((BTN_H + BTN_PAD_Y * 2))
BTN_R=28

convert -size "${BTN_BG_W}x${BTN_BG_H}" xc:none \
  -fill '#1E2A4A' -draw "roundrectangle 0,0 $((BTN_BG_W-1)),$((BTN_BG_H-1)) $BTN_R,$BTN_R" \
  -font "$NS_BOLD" -pointsize 20 -fill '#FFFFFF' \
  -gravity center -annotate +0+0 "$BTN_TEXT" \
  "$TMP/btn.png"

BTN_Y=$((DESC_Y + 120))
convert "$OUT" "$TMP/btn.png" -gravity NorthWest -geometry +80+${BTN_Y} -composite "$OUT"

# Wordmark bottom-right.
convert "$OUT" \
  -font "$VARELA" -pointsize 24 -fill '#1E2A4A' \
  -gravity SouthEast -annotate +80+55 'Yuphi' \
  "$OUT"

rm -f "$TMP/miyu-pill.png" "$TMP/desc.png" "$TMP/btn.png"
echo "Generated $OUT"

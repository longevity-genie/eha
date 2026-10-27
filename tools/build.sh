#!/usr/bin/env bash
# Build site/index.html from src/eha.html: the source has no document skeleton (it is also published as a
# claude.ai artifact), so wrap it in <html>/<head>/<body> for static hosting.
set -euo pipefail
repo="$(cd "$(dirname "$0")/.." && pwd)"
src="$repo/src/eha.html"
out="$repo/site/index.html"
{
  printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
  printf '<meta property="og:type" content="website">\n'
  printf '<meta property="og:url" content="https://www.eha-heales.org/">\n'
  printf '<meta property="og:title" content="EHA 2026 · 8th Eurosymposium on Healthy Ageing and Longevity">\n'
  printf '<meta property="og:description" content="5–6 November 2026, Muntpunt, Brussels, and online. Organised by Heales. Free registration.">\n'
  printf '<meta property="og:image" content="https://www.eha-heales.org/img/og-card.png">\n'
  printf '<meta name="twitter:card" content="summary_large_image">\n'
  printf '<link rel="icon" href="img/brand/favicon.png">\n'
  # Umami analytics, only on the hosted site (not in the claude.ai artifact built from the same source)
  printf '<script defer src="https://umami.glucosedao.org/script.js" data-website-id="51d71eb2-e2ec-40a0-9b74-4c21a6291a18"></script>\n'
  printf '<style>:root{padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>\n'
  # title, metas, font links and the stylesheet (everything up to the first </style>) belong in <head>
  awk '{print} /<\/style>/{exit}' "$src" | grep -v 'claude:viewport-fit-sides'
  printf '</head>\n<body>\n'
  awk 'f{print} /<\/style>/{f=1}' "$src"
  printf '\n</body>\n</html>\n'
} > "$out"
echo "built $out"

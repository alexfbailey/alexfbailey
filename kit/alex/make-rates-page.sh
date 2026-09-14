#!/bin/sh
# Builds kit/alex/rates/index.html (the version WITH the Rates tab) from kit/alex/index.html.
cd "$(dirname "$0")" && mkdir -p rates && sed 's|<meta charset="utf-8">|<meta charset="utf-8">\
<base href="/kit/alex/">\
<script>window.KIT_WITH_RATES=true</script>|' index.html > rates/index.html

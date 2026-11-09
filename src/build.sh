#!/bin/sh
# Rebuild assets/app.[hash].js and index.html from src/ (run from repo root).
set -e
cd "$(dirname "$0")"
[ -d node_modules ] || npm i --no-audit --no-fund three@0.170.0 esbuild@0.24
rm -rf out && npx esbuild app.src.js --bundle --format=esm --minify --target=es2022 --legal-comments=eof --outdir=out --entry-names=app.[hash]
F=$(ls out)
rm -f ../assets/app.*.js && mkdir -p ../assets && cp "out/$F" ../assets/
sed -e "s#<!--PRELOAD-->#<link rel=\"modulepreload\" href=\"assets/$F\">#" -e "s#<!--APP-->#<script type=\"module\" src=\"assets/$F\"></script>#" shell.html > ../index.html
echo "built assets/$F"

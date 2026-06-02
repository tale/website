#!/usr/bin/env bash
set -euo pipefail

RECIPIENT="age1ym2m7q2sj8suhge46xkj36jvarewuh7rwc334q693jcszenp9fsq93crz3"
FILES=(
  "public/fonts/berkeley-regular.woff2"
  "public/fonts/berkeley-bold.woff2"
  "public/fonts/berkeley-italic.woff2"
  "public/fonts/berkeley-bold-italic.woff2"
  "src/assets/berkeley.ttf"
)

cd "$(dirname "$0")/.."

for f in "${FILES[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "missing: $f" >&2
    exit 1
  fi
  rage -r "$RECIPIENT" -o "${f}.age" "$f"
  echo "encrypted: ${f}.age"
done

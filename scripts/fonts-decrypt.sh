#!/usr/bin/env bash
set -euo pipefail

FILES=(
  "public/fonts/berkeley-regular.woff2"
  "public/fonts/berkeley-bold.woff2"
  "public/fonts/berkeley-italic.woff2"
  "public/fonts/berkeley-bold-italic.woff2"
  "src/assets/berkeley.ttf"
)

cd "$(dirname "$0")/.."

IDENTITY_ARGS=()
if [[ $# -ge 1 ]]; then
  IDENTITY_ARGS=(-i "$1")
fi

for f in "${FILES[@]}"; do
  if [[ ! -f "${f}.age" ]]; then
    echo "missing: ${f}.age" >&2
    exit 1
  fi
  rage -d "${IDENTITY_ARGS[@]}" -o "$f" "${f}.age"
  echo "decrypted: $f"
done

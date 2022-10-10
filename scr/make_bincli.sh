#!/usr/bin/env bash
# make_bincli.sh

cd $(dirname $0)/..

#if [[ ! -f build/locapoc.js ]]; then
#  echo "ERR049: Error, the file build/locapoc.js doesn't exist!"
#  echo "first run : npm run build"
#  exit -1
#fi

npx esbuild src/locapoc.ts \
  --bundle \
  --platform=node \
  --banner:js="#! /usr/bin/env node" \
  --outfile=dist/bin/bincli.cjs

### copy files
#mkdir -p dist/bin
cp -a webui dist/bin/
ls -l dist/bin


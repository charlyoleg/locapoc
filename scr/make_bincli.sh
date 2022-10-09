#!/usr/bin/env bash
# make_bincli.sh

cd $(dirname $0)/..

if [[ ! -f dist/bundle/locapoc.cjs ]]; then
  echo "ERR045: Error, the file dist/bundle/locapoc.cjs doesn't exist!"
  echo "first run : npm run dist:bundle"
  exit -1
fi


### copy files
mkdir -p dist/bin
cd dist
cp -a ../webui bin/
cp ../scr/bincli.cjs bin/
cat ../dist/bundle/locapoc.cjs >> bin/bincli.cjs
ls -l bin


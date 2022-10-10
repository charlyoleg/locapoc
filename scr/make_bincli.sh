#!/usr/bin/env bash
# make_bincli.sh

cd $(dirname $0)/..

#if [[ ! -f dist/build/locapoc.js ]]; then
#  echo "ERR049: Error, the file dist/build/locapoc.js doesn't exist!"
#  echo "first run : npm run build"
#  exit -1
#fi

npx esbuild src/locapoc.ts \
  --bundle \
  --platform=node \
  --outfile=dist/bin/tmp_bincli.cjs

cat <<SCREOF > dist/bin/bincli.cjs
#! /usr/bin/env node
const process = require("process");
if( process.argv.length < 4 ){
  process.argv.push(\`--directory=\${__dirname}/webui\`);
}
//console.log(process.argv);
//console.log(process.env);
SCREOF

cat dist/bin/tmp_bincli.cjs >> dist/bin/bincli.cjs

### copy files
#mkdir -p dist/bin
cp -a webui dist/bin/
ls -l dist/bin


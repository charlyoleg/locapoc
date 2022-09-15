#!/usr/bin/env bash
# zip_package.sh

cd $(dirname $0)/..

if [[ ! -f dist/locapoc.cjs ]]; then
  echo "ERR045: Error, the file dist/locapoc.cjs doesn't exist!"
  echo "first run : npm run build"
  exit -1
fi

TIMESTAMP=$(date +"%Y")
ZIPNAME="locapoc_v1.2.3.9_${TIMESTAMP}"

### copy files
mkdir -p tmp/${ZIPNAME}
cd tmp
cp -a ../tests/webui ${ZIPNAME}/
cp ../dist/locapoc.cjs ${ZIPNAME}/
cp ../scr/linux_runs_locapoc.sh ${ZIPNAME}/
cp ../scr/windows_runs_locapoc.cmd ${ZIPNAME}/

### fingerprint
echo "Fingerprint of ${ZIPNAME}" > ${ZIPNAME}/webui/
echo "timestamp: ${TIMESTAMP}" >> ${ZIPNAME}/webui/

### packaging
zip -r ${ZIPNAME}.zip ${ZIPNAME}
ls -l ${ZIPNAME}.zip


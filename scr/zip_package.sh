#!/usr/bin/env bash
# zip_package.sh

cd $(dirname $0)/..

if [[ ! -f dist/server/locapoc.cjs ]]; then
  echo "ERR045: Error, the file dist/server/locapoc.cjs doesn't exist!"
  echo "first run : npm run build"
  exit -1
fi

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ZIPNAME="locapoc_v1.2.3.9_${TIMESTAMP}"

### copy files
mkdir -p dist/${ZIPNAME}
cd dist
cp -a ../webui ${ZIPNAME}/
cp ../dist/bundle/locapoc.cjs ${ZIPNAME}/
cp ../scr/linux_runs_locapoc.sh ${ZIPNAME}/
cp ../scr/windows_runs_locapoc.cmd ${ZIPNAME}/

### fingerprint
cat << EOF > ${ZIPNAME}/webui/locapoc_fingerprint.txt
> Fingerprint of ${ZIPNAME}
> timestamp: ${TIMESTAMP}
> git-remote-url: $(git remote get-url origin)
> git-branch: $(git rev-parse --abbrev-ref HEAD)
> git-last-hash: $(git rev-parse HEAD)
> git-last-commit: $(git log -1)
EOF

### packaging
zip -r ${ZIPNAME}.zip ${ZIPNAME}
ls -l ${ZIPNAME}.zip


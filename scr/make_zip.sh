#!/usr/bin/env bash
# make_zip.sh

cd $(dirname $0)/..

if [[ ! -f dist/bundle/locapoc.cjs ]]; then
  echo "ERR045: Error, the file dist/bundle/locapoc.cjs doesn't exist!"
  echo "first run : npm run dist:bundle"
  exit -1
fi

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
ZIPNAME="locapoc_v1.2.3.9_${TIMESTAMP}"
NODEAPP="${ZIPNAME}/locapoc"

### copy files
mkdir -p dist/${NODEAPP}
cd dist
cp -a ../webui ${NODEAPP}/
cp ../dist/bundle/locapoc.cjs ${NODEAPP}/
cp ../scr/linux_runs_locapoc.sh ${ZIPNAME}/
cp ../scr/windows_runs_locapoc.cmd ${ZIPNAME}/
cp ../scr/locapoc_icon.svg ${ZIPNAME}/
cp ../scr/install_ubuntu_desktop_icon.sh ${ZIPNAME}/

### fingerprint
cat << EOF > ${NODEAPP}/webui/locapoc_fingerprint.txt
Fingerprint of ${ZIPNAME}
timestamp: ${TIMESTAMP}
git-remote-url: $(git remote get-url origin)
git-branch: $(git rev-parse --abbrev-ref HEAD)
git-last-hash: $(git rev-parse HEAD)
git-last-commit: $(git log -1)
EOF

### packaging
zip -r ${ZIPNAME}.zip ${ZIPNAME}
ls -l ${ZIPNAME}.zip


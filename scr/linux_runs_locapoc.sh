#!/usr/bin/env bash
# linux_runs_locapoc.sh

### check if node-js is installed
node -v
if [ $? -ne 0 ]; then
  echo "ERR787: Error, node-js is not installed"
  echo "Please, install node-js v16 or above"
  exit 1
fi

### kill the old remaining process
OLDPROCESS=$(ps aux | grep node | grep locapoc)
for iproc in ${OLDPROCESS}; do
  echo "Kill process ${iproc}"
  kill ${iproc}
done
sleep 1
OLDPROCESS=$(ps aux | grep node | grep locapoc)
if [ "ABC${OLDPROCESS}" = "ABC" ]; then
  echo "No remaining old process"
else
  echo "ERR287: Error, some remaining locapoc process are still running!"
  exit 1
fi

### bash settings
set -e
set -x

### check installed versions
uname -a
#bash --version
node -v
npm -v

### start the node-app
cd $(dirname $0)
pwd
node locapoc/locapoc.cjs --directory=locapoc/webui --browser=true


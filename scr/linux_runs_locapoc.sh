#!/usr/bin/env bash
# linux_runs_locapoc.sh

set -e
set -x

uname -a
bash --version
node -v
npm -v

cd $(dirname $0)
pwd
node locapoc.cjs --directory webui --browser


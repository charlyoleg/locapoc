#!/usr/bin/env bash
# test_locapoc.sh

set -e
set -x

#cd $(dirname $0)

curl -i localhost:2022/index.html
curl -i localhost:2022/api/myrest/greet?name=toto
curl -X POST -i localhost:2022/api/quit



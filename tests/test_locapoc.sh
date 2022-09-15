#!/usr/bin/env bash
# test_locapoc.sh

#cd $(dirname $0)

curl localhost:2022/index.html
curl localhost:2022/api/myrest/greet?name=toto



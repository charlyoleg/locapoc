#! /usr/bin/env bash
# make_snap.sh

cd $(dirname $0)/../

mkdir -p dist/tmp/snapcraft/locapoc
cp scr/snapcraft.yaml dist/tmp/snapcraft/locapoc/
cd dist/tmp/snapcraft/locapoc
snapcraft


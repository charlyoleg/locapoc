#!/usr/bin/env bash
# install_ubuntu_desktop_icon_for_locapoc.sh

cd $(dirname $0)
SCRIPTDIR=$(pwd)
echo ${SCRIPTDIR}

cat <<SCREOF > locapoc.desktop
#! /usr/bin/env node
[Desktop Entry]
Encoding=UTF-8
Version=0.1.6
Name=locapoc
Comment=Proof-of-Concept for local app
Exec=${SCRIPTDIR}/linux_runs_locapoc.sh
Icon=${SCRIPTDIR}/locapoc_icon.svg
Terminal=true
Type=Application
Categories=Development
SCREOF



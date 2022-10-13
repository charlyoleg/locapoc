#!/usr/bin/env bash
# install_ubuntu_desktop_icon_for_locapoc.sh

cd $(dirname $0)
SCRIPTDIR=$(pwd)
echo ${SCRIPTDIR}

cat <<SCREOF > locapoc.desktop
[Desktop Entry]
Encoding=UTF-8
Version=1.0
Name=locapoc
Comment=Proof-of-Concept for local app
Exec=${SCRIPTDIR}/linux_runs_locapoc.sh
Icon=${SCRIPTDIR}/locapoc_icon.svg
Terminal=true
Type=Application
Categories=Development
SCREOF

#desktop-file-install --dir=${HOME}/.local/share/applications ./locapoc.desktop
desktop-file-install --dir=${HOME}/Desktop ./locapoc.desktop

echo "INFO392: The Ubuntu desktop icon for locapoc has been installed!"


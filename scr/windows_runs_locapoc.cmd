@ECHO OFF

:: windows_runs_locapoc.cmd
:: It launchs locapoc.cjs

ECHO Hello from windows_runs_locapoc.cmd


systeminfo
node -v
npm -v

cd %~dp0
pwd
node locapoc.cjs --directory=webui --browser=true



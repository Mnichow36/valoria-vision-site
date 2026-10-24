@echo off
REM Ouvre le site Valoria Vision sur cet ordinateur (http://localhost:4321)
cd /d "%~dp0"
if not exist node_modules (
  echo Installation des outils, premiere fois seulement...
  call npm install
)
start "" http://localhost:4321
call npm run dev

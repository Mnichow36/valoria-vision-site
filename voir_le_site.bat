@echo off
REM Ouvre le site Valoria Vision sur cet ordinateur (http://localhost:4321)
cd /d "%~dp0"
if not exist node_modules (
  echo Installation des outils, premiere fois seulement...
  call npm install
)
echo Le site s'ouvrira dans le navigateur des qu'il sera pret. Laissez cette fenetre ouverte.
call npm run dev -- --open
echo.
echo Le site s'est arrete. Copiez le message ci-dessus si une erreur est affichee.
pause

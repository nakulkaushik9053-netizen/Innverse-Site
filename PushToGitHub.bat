@echo off
echo ===================================================
echo   Pushing Innverse Site to GitHub...
echo ===================================================
set PATH=%~dp0mingit\cmd;%PATH%
git push -u origin main
echo ===================================================
echo   Done! Press any key to close.
echo ===================================================
pause

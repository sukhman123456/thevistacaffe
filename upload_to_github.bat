@echo off
chcp 65001 >nul
echo ======================================================
echo   The Vista Cafe - GitHub Upload Script
echo ======================================================
echo.

cd /d "%~dp0"

echo 1. Adding all missing files (src, public, .lovable)...
git add src public .lovable

echo.
echo 2. Committing changes...
git commit -m "Upload complete project: src components, assets, animations, and social buttons"

echo.
echo 3. Pushing files to GitHub (origin main)...
git push -u origin main

echo.
echo ======================================================
echo   Upload complete! Check your repository:
echo   https://github.com/sukhman123456/thevistacaffe
echo ======================================================
echo.


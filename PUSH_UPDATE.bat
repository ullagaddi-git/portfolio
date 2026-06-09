@echo off
cd /d "%~dp0"
echo ================================================
echo   Portfolio - Fix Git and Push Update
echo ================================================
echo.
echo [1/6] Removing the broken local git folder...
rmdir /s /q .git 2>nul
echo Done.
echo.
echo [2/6] Creating a fresh git repo...
git init
git branch -M main
git config user.email "ullagaddi@gmail.com"
git config user.name "Suresh Ullagaddi"
echo.
echo [3/6] Connecting to your GitHub repo...
git remote add origin https://github.com/ullagaddi-git/portfolio.git
echo.
echo [4/6] Downloading current GitHub history (so nothing is lost)...
git fetch origin
echo.
echo [5/6] Saving your updated files on top of it...
git reset --soft origin/main
git add .
git commit -m "Update portfolio: 22+ yrs, $1M P&L, experience timeline, email + vercel URL"
echo.
echo [6/6] Pushing to GitHub  (SIGN IN if a GitHub window/box appears)...
git push origin main
echo.
echo ================================================
echo  SUCCESS LOOKS LIKE: a line ending with  "main -^> main"
echo  Then Vercel auto-redeploys in ~1-2 minutes.
echo  If you see an error instead, tell Claude what it says.
echo ================================================
echo.
pause

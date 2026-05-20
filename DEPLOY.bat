@echo off
echo ================================================
echo  Suresh Portfolio - GitHub + Vercel Deploy
echo ================================================
echo.

:: Step 1 — Init git and commit
echo [1/4] Initialising git repo...
git init
git config user.email "ku@kohlex.com"
git config user.name "Suresh Ullagaddi"
git checkout -b main 2>nul || git checkout main 2>nul
git add .
git commit -m "Initial commit: Suresh Ullagaddi portfolio site"
echo Done.
echo.

:: Step 2 — Add remote
echo [2/4] Connecting to GitHub repo...
git remote remove origin 2>nul
git remote add origin https://github.com/ullagaddi-git/portfolio.git
echo Done.
echo.

:: Step 3 — Push
echo [3/4] Pushing to GitHub...
echo (A browser window or credential prompt may appear — sign in with your GitHub account)
echo.
git push -u origin main
echo.

:: Step 4 — Done
echo [4/4] All done!
echo.
echo ================================================
echo  NEXT STEP — Connect to Vercel:
echo.
echo  1. Go to: https://vercel.com/sureshs-projects-1e5725e3
echo  2. Click "Add New Project"
echo  3. Import: ullagaddi-git/portfolio
echo  4. Click Deploy (zero config needed)
echo ================================================
echo.
pause

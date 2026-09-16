@echo off
title HIMKIV Healthcare - Backend & Admin Console
cd /d "%~dp0"
echo ========================================================
echo   HIMKIV HEALTHCARE - BACKEND & ADMIN CONSOLE LAUNCHER
echo   Founder: Himanshu Sharma
echo ========================================================
echo.
echo Starting Node.js Express server on Port 5000...
echo Admin Console will open automatically at http://localhost:5000/admin/
echo.
timeout /t 2 /nobreak >nul
start "" "http://localhost:5000/admin/"
"C:\Users\sharm\AppData\Local\Programs\nodejs\node.exe" backend/server.js
pause

@echo off
title A&R Admin Boot Camp - Local Server
cd /d "%~dp0"
echo Starting MkDocs server...
python -m mkdocs serve
if errorlevel 1 (
    echo.
    echo ERROR: Failed to start server. Make sure Python is installed.
    pause
)

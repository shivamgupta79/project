@echo off
REM Start Development Environment for India Data Platform (Windows)

echo Starting India Data Platform...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed. Please install Python 3.9+
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Please install Node.js 18+
    exit /b 1
)

echo Prerequisites check passed
echo.

REM Install frontend dependencies if needed
if not exist "node_modules" (
    echo Installing frontend dependencies...
    call npm install
)

REM Install backend dependencies if needed
if not exist "backend\venv" (
    echo Setting up Python virtual environment...
    cd backend
    python -m venv venv
    call venv\Scripts\activate
    pip install -r requirements.txt
    cd ..
)

REM Create .env files if they don't exist
if not exist ".env.local" (
    echo Creating frontend .env.local...
    echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
)

if not exist "backend\.env" (
    echo Creating backend .env...
    copy backend\.env.example backend\.env
)

echo.
echo Setup complete!
echo.
echo Starting services...
echo   - Frontend: http://localhost:3000
echo   - Backend API: http://localhost:8000
echo   - API Docs: http://localhost:8000/docs
echo.

REM Start both services
call npm run dev:all

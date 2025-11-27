# 🚀 Quick Start Guide

Get your India Data Platform running in 5 minutes!

## ✅ Prerequisites

- **Node.js 18+** (Already installed ✓)
- **Python 3.9+** (Check: `python --version`)
- **npm** (Already installed ✓)

## 🎯 Option 1: Automatic Setup (Recommended)

### Windows:
```cmd
start-dev.bat
```

### Linux/Mac:
```bash
chmod +x start-dev.sh
./start-dev.sh
```

This will:
1. Install all dependencies
2. Create environment files
3. Start both frontend and backend
4. Open your browser automatically

## 🎯 Option 2: Manual Setup

### Step 1: Install Dependencies

```bash
# Frontend
npm install

# Backend
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
cd ..
```

### Step 2: Configure Environment

```bash
# Frontend - Create .env.local
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local

# Backend - Copy example env
copy backend\.env.example backend\.env  # Windows
# cp backend/.env.example backend/.env  # Linux/Mac
```

### Step 3: Start Services

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend/src
python -m uvicorn main:app --reload --port 8000
```

## 🌐 Access Your Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

## 🧪 Test the Integration

1. Open http://localhost:3000
2. Navigate to **Marketplace** - Should show 6 datasets
3. Try the **Search** feature
4. Click on **Filter** buttons
5. Navigate to **Labeling** page
6. Try **Upload** page

## 🐛 Troubleshooting

### Frontend won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Backend won't start
```bash
# Check Python version
python --version  # Should be 3.9+

# Reinstall dependencies
cd backend
pip install -r requirements.txt --force-reinstall
```

### Port already in use
```bash
# Frontend (3000)
netstat -ano | findstr :3000  # Windows
# lsof -ti:3000 | xargs kill  # Linux/Mac

# Backend (8000)
netstat -ano | findstr :8000  # Windows
# lsof -ti:8000 | xargs kill  # Linux/Mac
```

### API connection error
1. Check backend is running: http://localhost:8000/health
2. Verify .env.local has: `NEXT_PUBLIC_API_URL=http://localhost:8000`
3. Restart both services

## 📚 Next Steps

1. **Explore the Marketplace** - Browse datasets
2. **Try Labeling** - Earn rewards by labeling data
3. **Upload Data** - Share your datasets
4. **Check Subscriptions** - View pricing plans
5. **Read API Docs** - http://localhost:8000/docs

## 🎨 Features to Try

- ✅ Search datasets by name/category
- ✅ Filter by trust score, synthetic, etc.
- ✅ View dataset details
- ✅ Complete labeling tasks
- ✅ Check leaderboards
- ✅ Upload new datasets
- ✅ Browse subscription plans

## 💡 Tips

- Frontend auto-reloads on file changes
- Backend auto-reloads with `--reload` flag
- Check browser console for errors
- Check terminal for backend logs
- Use API docs for testing endpoints

## 🆘 Need Help?

- Check README.md for detailed documentation
- Review backend/src/routes/ for API endpoints
- Check lib/api.ts for frontend API calls
- Open an issue on GitHub

---

Happy coding! 🎉

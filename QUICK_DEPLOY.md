# ⚡ Quick Vercel Deployment Guide

## ✅ Backend Already Deployed!

**Backend URL**: https://server-five-cyan-29.vercel.app

---

## 🔐 Step 1: Add Environment Variables to Backend

### Option A: Via Vercel Dashboard (Recommended - Easiest!)

1. **Open this link**: https://vercel.com/ajays-projects-3ca3c9c8/server/settings/environment-variables

2. **Click "Add New" and add these 7 variables:**

| Key | Value | Sensitive |
|-----|-------|-----------|
| `MONGODB_URI` | `mongodb+srv://ajay:t26hNRpiYmTIQF6v@cluster0.e2pdn0y.mongodb.net/streamflix?retryWrites=true&w=majority` | ✅ Yes |
| `JWT_SECRET` | `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6` | ✅ Yes |
| `JWT_EXPIRE` | `7d` | ❌ No |
| `TMDB_API_KEY` | `69c6f86056d2b7f3bc8474c8c266dac6` | ✅ Yes |
| `TMDB_BASE_URL` | `https://api.themoviedb.org/3` | ❌ No |
| `CLIENT_URL` | `*` | ❌ No |
| `NODE_ENV` | `production` | ❌ No |

3. **For each variable:**
   - Click "Add New"
   - Enter the Key name
   - Paste the Value
   - Select all environments (Production, Preview, Development)
   - Check "Sensitive" if marked above
   - Click "Save"

4. **After adding all variables, redeploy:**
   - Go to: https://vercel.com/ajays-projects-3ca3c9c8/server
   - Click "Deployments" tab
   - Click the three dots (...) on the latest deployment
   - Click "Redeploy"

### Option B: Via Terminal (Alternative)

Run this in PowerShell (in the server directory):

```powershell
cd server

# You'll need to enter each value when prompted
vercel env add MONGODB_URI production
# Paste: mongodb+srv://ajay:t26hNRpiYmTIQF6v@cluster0.e2pdn0y.mongodb.net/streamflix?retryWrites=true&w=majority

vercel env add JWT_SECRET production
# Paste: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6

vercel env add JWT_EXPIRE production
# Enter: 7d

vercel env add TMDB_API_KEY production
# Paste: 69c6f86056d2b7f3bc8474c8c266dac6

vercel env add TMDB_BASE_URL production
# Enter: https://api.themoviedb.org/3

vercel env add CLIENT_URL production
# Enter: *

vercel env add NODE_ENV production
# Enter: production

# Redeploy
vercel --prod
```

---

## 🧪 Step 2: Test Backend

After redeploying, test the backend:

```bash
curl https://server-five-cyan-29.vercel.app/api/health
```

**Expected response:**
```json
{
  "status": "success",
  "message": "StreamFlix API is running",
  "timestamp": "2026-05-24T..."
}
```

Or open in browser: https://server-five-cyan-29.vercel.app/api/health

---

## 🎨 Step 3: Deploy Frontend

Once backend is working, deploy the frontend:

```bash
cd client
vercel --prod
```

Follow the prompts:
- Project name: **streamflix-app** (or your choice)
- Directory: Press Enter (current directory)
- Override settings: **N**

**Save the frontend URL** (something like: `https://streamflix-app-xxx.vercel.app`)

---

## 🔧 Step 4: Add Frontend Environment Variable

### Via Dashboard:
1. Go to your frontend project settings
2. Add environment variable:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://server-five-cyan-29.vercel.app/api`
   - **Environments**: All
3. Redeploy frontend

### Via Terminal:
```bash
cd client
vercel env add REACT_APP_API_URL production
# Enter: https://server-five-cyan-29.vercel.app/api

vercel --prod
```

---

## 🔄 Step 5: Update Backend CORS (Optional)

After frontend is deployed, update the `CLIENT_URL` in backend:

1. Go to: https://vercel.com/ajays-projects-3ca3c9c8/server/settings/environment-variables
2. Find `CLIENT_URL`
3. Click "Edit"
4. Change from `*` to your frontend URL: `https://your-frontend-url.vercel.app`
5. Save
6. Redeploy backend

---

## ✅ Step 6: Test Everything!

1. Open your frontend URL
2. Register a new account
3. Login
4. Browse movies
5. Add to watchlist
6. View My List

---

## 📊 Your Deployment URLs

- **Backend**: https://server-five-cyan-29.vercel.app
- **Backend API**: https://server-five-cyan-29.vercel.app/api
- **Frontend**: (will be generated after deployment)

---

## 🐛 Troubleshooting

### Backend shows "FUNCTION_INVOCATION_FAILED"
- Environment variables not set → Add them via dashboard
- MongoDB connection failed → Check MongoDB Atlas IP whitelist (add 0.0.0.0/0)

### Frontend can't connect to backend
- Check `REACT_APP_API_URL` is set correctly
- Make sure backend is deployed and working
- Test backend URL directly in browser

### CORS errors
- Update `CLIENT_URL` in backend to match frontend URL
- Redeploy backend after updating

---

## 🎉 After Successful Deployment

Update your README.md with live URLs:

```markdown
## 🌟 Live Demo

**Live App**: https://your-frontend-url.vercel.app
**API**: https://server-five-cyan-29.vercel.app/api

## 🚀 Deployed On
- Frontend: Vercel
- Backend: Vercel Serverless Functions
- Database: MongoDB Atlas
```

---

## 📞 Quick Links

- **Backend Dashboard**: https://vercel.com/ajays-projects-3ca3c9c8/server
- **Backend Env Vars**: https://vercel.com/ajays-projects-3ca3c9c8/server/settings/environment-variables
- **Backend URL**: https://server-five-cyan-29.vercel.app
- **Vercel Dashboard**: https://vercel.com/dashboard

---

**Ready to deploy? Start with Step 1! 🚀**


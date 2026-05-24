# 🚀 Deploy StreamFlix to Vercel - Step by Step

## ✅ Prerequisites Done
- ✅ Code pushed to GitHub
- ✅ Vercel account logged in
- ✅ Serverless configuration ready

---

## 📦 STEP 1: Deploy Backend

### 1.1 Open Vercel Import Page
**Click this link**: https://vercel.com/new

### 1.2 Import Repository
1. Click **"Import Git Repository"**
2. Find and select: **`raizel7738-creator/streamflix-app`**
3. Click **"Import"**

### 1.3 Configure Backend Project
Fill in these settings:

**Project Name**: `streamflix-backend`

**Framework Preset**: Other

**Root Directory**: 
- Click **"Edit"** button
- Select **`server`** from dropdown
- Click **"Continue"**

**Build Settings** (leave as default):
- Build Command: (empty)
- Output Directory: (empty)
- Install Command: `npm install`

### 1.4 Add Environment Variables
Click **"Environment Variables"** section and add these **7 variables**:

| Name | Value |
|------|-------|
| `MONGODB_URI` | `mongodb+srv://ajay:t26hNRpiYmTIQF6v@cluster0.e2pdn0y.mongodb.net/streamflix?retryWrites=true&w=majority` |
| `JWT_SECRET` | `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6` |
| `JWT_EXPIRE` | `7d` |
| `TMDB_API_KEY` | `69c6f86056d2b7f3bc8474c8c266dac6` |
| `TMDB_BASE_URL` | `https://api.themoviedb.org/3` |
| `CLIENT_URL` | `*` |
| `NODE_ENV` | `production` |

**For each variable:**
- Paste the Name
- Paste the Value
- Select all environments (Production, Preview, Development)
- Click "Add"

### 1.5 Deploy
Click **"Deploy"** button

⏳ **Wait 1-2 minutes** for deployment to complete...

### 1.6 Get Backend URL
After deployment succeeds, you'll see:
```
🎉 Congratulations! Your project has been deployed.
```

**Copy your backend URL** (something like):
```
https://streamflix-backend-xxx.vercel.app
```

### 1.7 Test Backend
Open in browser:
```
https://your-backend-url.vercel.app/api/health
```

**Expected response:**
```json
{
  "status": "success",
  "message": "StreamFlix API is running",
  "timestamp": "2026-05-24T..."
}
```

✅ **Backend is working!**

---

## 🎨 STEP 2: Deploy Frontend

### 2.1 Open Vercel Import Page Again
**Click this link**: https://vercel.com/new

### 2.2 Import Same Repository
1. Click **"Import Git Repository"**
2. Find and select: **`raizel7738-creator/streamflix-app`** (same repo)
3. Click **"Import"**

### 2.3 Configure Frontend Project
Fill in these settings:

**Project Name**: `streamflix-app`

**Framework Preset**: Create React App

**Root Directory**: 
- Click **"Edit"** button
- Select **`client`** from dropdown
- Click **"Continue"**

**Build Settings** (should auto-fill):
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

### 2.4 Add Environment Variable
Click **"Environment Variables"** section and add **1 variable**:

| Name | Value |
|------|-------|
| `REACT_APP_API_URL` | `https://your-backend-url.vercel.app/api` |

**Replace** `your-backend-url` with the actual backend URL from Step 1.6

Example:
```
REACT_APP_API_URL = https://streamflix-backend-abc123.vercel.app/api
```

### 2.5 Deploy
Click **"Deploy"** button

⏳ **Wait 2-3 minutes** for deployment to complete...

### 2.6 Get Frontend URL
After deployment succeeds, **copy your frontend URL**:
```
https://streamflix-app-xxx.vercel.app
```

✅ **Frontend is deployed!**

---

## 🔄 STEP 3: Update Backend CORS

### 3.1 Update CLIENT_URL
1. Go to backend project: https://vercel.com/dashboard
2. Click on **`streamflix-backend`** project
3. Go to **Settings** → **Environment Variables**
4. Find **`CLIENT_URL`**
5. Click **"Edit"**
6. Change value from `*` to your frontend URL:
   ```
   https://streamflix-app-xxx.vercel.app
   ```
7. Click **"Save"**

### 3.2 Redeploy Backend
1. Go to **Deployments** tab
2. Click the three dots (...) on the latest deployment
3. Click **"Redeploy"**
4. Wait for redeployment to complete

✅ **CORS configured!**

---

## 🧪 STEP 4: Test Everything

### 4.1 Open Your App
Open your frontend URL in browser:
```
https://streamflix-app-xxx.vercel.app
```

### 4.2 Test Features
1. ✅ Landing page loads
2. ✅ Click "Sign In" button
3. ✅ Register a new account
4. ✅ Login works
5. ✅ Movies load on home screen
6. ✅ Add movie to watchlist (+ button)
7. ✅ Click "My List" in navigation
8. ✅ See your saved movies
9. ✅ Remove from list works
10. ✅ Logout works

---

## 🎉 SUCCESS!

Your app is now live on Vercel!

**Your URLs:**
- **Frontend**: https://streamflix-app-xxx.vercel.app
- **Backend**: https://streamflix-backend-xxx.vercel.app/api

---

## 📝 Update README

Add these URLs to your GitHub README.md:

```markdown
## 🌟 Live Demo

**Live App**: https://streamflix-app-xxx.vercel.app
**API**: https://streamflix-backend-xxx.vercel.app/api

## 🚀 Deployed On
- Frontend: Vercel
- Backend: Vercel Serverless Functions
- Database: MongoDB Atlas
```

---

## 🔧 Troubleshooting

### Backend shows 500 error
- Check environment variables are added correctly
- Check MongoDB Atlas IP whitelist (add 0.0.0.0/0)
- Check logs in Vercel dashboard

### Frontend shows blank page
- Check browser console for errors
- Verify `REACT_APP_API_URL` is set correctly
- Make sure backend is working first

### CORS errors
- Update `CLIENT_URL` in backend to match frontend URL
- Redeploy backend after updating

### Movies not loading
- Check TMDB_API_KEY is correct
- Test backend `/api/movies/trending` endpoint directly

---

## 🎯 Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/raizel7738-creator/streamflix-app
- **MongoDB Atlas**: https://cloud.mongodb.com

---

## 🔄 Future Deployments

After making code changes:

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. Vercel will **automatically redeploy** both frontend and backend!

---

**Start with STEP 1 now! 🚀**


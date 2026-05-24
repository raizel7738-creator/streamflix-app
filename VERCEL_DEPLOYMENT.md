# 🚀 Vercel Deployment Guide

## Quick Deployment Steps

### Prerequisites
- Vercel account (sign up at https://vercel.com)
- Vercel CLI installed globally

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

---

## 🎯 Deployment Strategy

We'll deploy both frontend and backend to Vercel:
1. **Backend** → Vercel Serverless Functions
2. **Frontend** → Vercel Static Hosting

---

## 📦 Deploy Backend First

### 1. Navigate to Server Directory
```bash
cd server
```

### 2. Deploy to Vercel
```bash
vercel --prod
```

### 3. Follow the Prompts
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **streamflix-api** (or your choice)
- Directory? **./server** (or just press Enter)
- Override settings? **N**

### 4. Set Environment Variables
After deployment, add environment variables:

```bash
# Using Vercel CLI
vercel env add MONGODB_URI
# Paste your MongoDB connection string

vercel env add JWT_SECRET
# Paste your JWT secret

vercel env add TMDB_API_KEY
# Paste your TMDB API key

vercel env add TMDB_BASE_URL
# Enter: https://api.themoviedb.org/3

vercel env add CLIENT_URL
# Enter: https://your-frontend-url.vercel.app (we'll update this later)
```

**Or add via Vercel Dashboard:**
1. Go to https://vercel.com/dashboard
2. Select your project (streamflix-api)
3. Go to Settings → Environment Variables
4. Add each variable:
   - `MONGODB_URI` = `mongodb+srv://ajay:t26hNRpiYmTIQF6v@cluster0.e2pdn0y.mongodb.net/streamflix?retryWrites=true&w=majority`
   - `JWT_SECRET` = `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`
   - `JWT_EXPIRE` = `7d`
   - `TMDB_API_KEY` = `69c6f86056d2b7f3bc8474c8c266dac6`
   - `TMDB_BASE_URL` = `https://api.themoviedb.org/3`
   - `CLIENT_URL` = `*` (or your frontend URL after deployment)
   - `NODE_ENV` = `production`

### 5. Note Your Backend URL
After deployment, you'll get a URL like:
```
https://streamflix-api.vercel.app
```
**Save this URL!** You'll need it for the frontend.

### 6. Redeploy Backend (if needed)
```bash
vercel --prod
```

---

## 🎨 Deploy Frontend

### 1. Update Frontend Environment Variable
```bash
cd ../client
```

Edit `.env` or create `.env.production`:
```env
REACT_APP_API_URL=https://your-backend-url.vercel.app/api
```

### 2. Deploy to Vercel
```bash
vercel --prod
```

### 3. Follow the Prompts
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? **streamflix-app** (or your choice)
- Directory? **./client** (or just press Enter)
- Override settings? **N**

### 4. Set Environment Variable in Vercel
```bash
vercel env add REACT_APP_API_URL
# Enter: https://your-backend-url.vercel.app/api
```

**Or via Dashboard:**
1. Go to https://vercel.com/dashboard
2. Select your project (streamflix-app)
3. Go to Settings → Environment Variables
4. Add: `REACT_APP_API_URL` = `https://your-backend-url.vercel.app/api`

### 5. Redeploy Frontend
```bash
vercel --prod
```

---

## 🔄 Update Backend CORS

After frontend deployment, update backend `CLIENT_URL`:

1. Go to Vercel Dashboard → streamflix-api → Settings → Environment Variables
2. Update `CLIENT_URL` to your frontend URL: `https://streamflix-app.vercel.app`
3. Redeploy backend:
```bash
cd server
vercel --prod
```

---

## ✅ Verify Deployment

### Test Backend
```bash
curl https://your-backend-url.vercel.app/api/health
```

### Test Frontend
Open your browser:
```
https://your-frontend-url.vercel.app
```

### Test Full Flow
1. Register a new user
2. Login
3. Browse movies
4. Add to watchlist
5. View My List

---

## 🎯 Alternative: Deploy from GitHub

### 1. Push to GitHub (Already Done!)
```bash
# Already completed
```

### 2. Import to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repo: `streamflix-app`
4. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
5. Add Environment Variables (same as above)
6. Click "Deploy"

### 3. Deploy Backend Separately
Repeat for backend:
1. Import same repo again
2. Configure:
   - **Root Directory**: `server`
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
3. Add Environment Variables
4. Click "Deploy"

---

## 🔧 Troubleshooting

### Issue: "Module not found"
**Solution**: Make sure all dependencies are in `package.json`, not just `devDependencies`

### Issue: "Environment variables not working"
**Solution**: 
- Redeploy after adding env variables
- Check variable names match exactly (case-sensitive)
- For React, variables must start with `REACT_APP_`

### Issue: "CORS errors"
**Solution**: 
- Update `CLIENT_URL` in backend env variables
- Make sure it matches your frontend URL exactly
- Redeploy backend after updating

### Issue: "MongoDB connection failed"
**Solution**:
- Check MongoDB Atlas IP whitelist (add 0.0.0.0/0 for Vercel)
- Verify connection string is correct
- Check MongoDB Atlas cluster is running

### Issue: "API calls failing"
**Solution**:
- Verify `REACT_APP_API_URL` is set correctly
- Check backend is deployed and running
- Test backend URL directly in browser

---

## 📊 Deployment Checklist

### Backend
- [ ] Deployed to Vercel
- [ ] Environment variables added
- [ ] MongoDB connection working
- [ ] TMDB API working
- [ ] Health endpoint responding
- [ ] CORS configured

### Frontend
- [ ] Deployed to Vercel
- [ ] Environment variable added (REACT_APP_API_URL)
- [ ] Can access landing page
- [ ] Can register/login
- [ ] Can browse movies
- [ ] Can add to watchlist

### Post-Deployment
- [ ] Update README.md with live URLs
- [ ] Update GitHub repo description
- [ ] Test all features
- [ ] Add custom domain (optional)
- [ ] Set up monitoring (optional)

---

## 🌐 Custom Domain (Optional)

### Add Custom Domain to Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for DNS propagation (up to 48 hours)

---

## 📈 Monitoring

### Vercel Analytics
- Automatically enabled
- View in Vercel Dashboard → Analytics

### Error Tracking
Consider adding:
- Sentry (https://sentry.io)
- LogRocket (https://logrocket.com)

---

## 💰 Vercel Pricing

**Free Tier Includes:**
- Unlimited deployments
- 100 GB bandwidth/month
- Serverless function execution
- Automatic HTTPS
- Perfect for portfolio projects!

**Pro Tier** ($20/month):
- More bandwidth
- More function execution time
- Team collaboration
- Advanced analytics

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Docs**: https://vercel.com/docs
- **Vercel CLI Docs**: https://vercel.com/docs/cli

---

## 📝 After Deployment

Update your README.md:
```markdown
## 🌟 Live Demo

**Frontend**: https://streamflix-app.vercel.app
**Backend API**: https://streamflix-api.vercel.app

## 🚀 Deployed On
- Frontend: Vercel
- Backend: Vercel Serverless Functions
- Database: MongoDB Atlas
```

---

**Your app is now live on Vercel! 🎉**


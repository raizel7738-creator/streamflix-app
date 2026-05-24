# 🔐 Vercel Environment Variables Setup

## Backend Environment Variables

Your backend is deployed at: **https://server-five-cyan-29.vercel.app**

### Add Environment Variables via Vercel Dashboard

1. **Go to Vercel Dashboard**
   - Open: https://vercel.com/ajays-projects-3ca3c9c8/server/settings/environment-variables

2. **Add Each Variable**

Click "Add New" for each variable:

#### Variable 1: MONGODB_URI
- **Key**: `MONGODB_URI`
- **Value**: `mongodb+srv://ajay:t26hNRpiYmTIQF6v@cluster0.e2pdn0y.mongodb.net/streamflix?retryWrites=true&w=majority`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ✅ Yes

#### Variable 2: JWT_SECRET
- **Key**: `JWT_SECRET`
- **Value**: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ✅ Yes

#### Variable 3: JWT_EXPIRE
- **Key**: `JWT_EXPIRE`
- **Value**: `7d`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ❌ No

#### Variable 4: TMDB_API_KEY
- **Key**: `TMDB_API_KEY`
- **Value**: `69c6f86056d2b7f3bc8474c8c266dac6`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ✅ Yes

#### Variable 5: TMDB_BASE_URL
- **Key**: `TMDB_BASE_URL`
- **Value**: `https://api.themoviedb.org/3`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ❌ No

#### Variable 6: CLIENT_URL
- **Key**: `CLIENT_URL`
- **Value**: `*` (we'll update this after frontend deployment)
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ❌ No

#### Variable 7: NODE_ENV
- **Key**: `NODE_ENV`
- **Value**: `production`
- **Environment**: Production only
- **Sensitive**: ❌ No

#### Variable 8: PORT
- **Key**: `PORT`
- **Value**: `5000`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ❌ No

3. **Save All Variables**

4. **Redeploy Backend**
   - Go to: https://vercel.com/ajays-projects-3ca3c9c8/server
   - Click "Deployments" tab
   - Click the three dots (...) on the latest deployment
   - Click "Redeploy"
   - Or run in terminal:
   ```bash
   cd server
   vercel --prod
   ```

---

## Frontend Environment Variables

After backend is working, deploy frontend and add:

### Variable 1: REACT_APP_API_URL
- **Key**: `REACT_APP_API_URL`
- **Value**: `https://server-five-cyan-29.vercel.app/api`
- **Environment**: Production, Preview, Development (select all)
- **Sensitive**: ❌ No

---

## Quick Links

- **Backend Dashboard**: https://vercel.com/ajays-projects-3ca3c9c8/server
- **Backend Settings**: https://vercel.com/ajays-projects-3ca3c9c8/server/settings/environment-variables
- **Backend URL**: https://server-five-cyan-29.vercel.app

---

## Test Backend After Setup

```bash
# Test health endpoint
curl https://server-five-cyan-29.vercel.app/api/health

# Expected response:
# {"status":"success","message":"StreamFlix API is running","timestamp":"..."}
```

---

## Next Steps

1. ✅ Add all environment variables above
2. ✅ Redeploy backend
3. ✅ Test backend health endpoint
4. ✅ Deploy frontend
5. ✅ Update CLIENT_URL in backend
6. ✅ Test full application


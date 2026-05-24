@echo off
echo ========================================
echo Setting up Vercel Environment Variables
echo ========================================
echo.

cd server

echo Adding MONGODB_URI...
echo mongodb+srv://ajay:t26hNRpiYmTIQF6v@cluster0.e2pdn0y.mongodb.net/streamflix?retryWrites=true^&w=majority | vercel env add MONGODB_URI production

echo.
echo Adding JWT_SECRET...
echo a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6 | vercel env add JWT_SECRET production

echo.
echo Adding JWT_EXPIRE...
echo 7d | vercel env add JWT_EXPIRE production

echo.
echo Adding TMDB_API_KEY...
echo 69c6f86056d2b7f3bc8474c8c266dac6 | vercel env add TMDB_API_KEY production

echo.
echo Adding TMDB_BASE_URL...
echo https://api.themoviedb.org/3 | vercel env add TMDB_BASE_URL production

echo.
echo Adding CLIENT_URL...
echo * | vercel env add CLIENT_URL production

echo.
echo Adding NODE_ENV...
echo production | vercel env add NODE_ENV production

echo.
echo ========================================
echo Environment variables added!
echo Now redeploying backend...
echo ========================================
echo.

vercel --prod

echo.
echo ========================================
echo Done! Backend is deployed with env vars
echo ========================================
pause

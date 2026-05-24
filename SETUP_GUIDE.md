# 🚀 StreamFlix Full-Stack Setup Guide

Complete guide to set up and run the StreamFlix MERN stack application.

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- ✅ **MongoDB** - Choose one:
  - Local MongoDB - [Download](https://www.mongodb.com/try/download/community)
  - MongoDB Atlas (Cloud) - [Sign up free](https://www.mongodb.com/cloud/atlas/register)
- ✅ **Git** - [Download](https://git-scm.com/)
- ✅ **Code Editor** (VS Code recommended)
- ✅ **TMDB API Key** - [Get free key](https://www.themoviedb.org/settings/api)

## 🔧 Installation Steps

### Step 1: Install MongoDB

#### Option A: Local MongoDB (Windows)
```bash
# Download and install MongoDB Community Server
# Start MongoDB service
net start MongoDB
```

#### Option B: MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Create a free account
3. Create a new cluster (Free tier M0)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password

### Step 2: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
copy .env.example .env

# Edit .env file with your configuration
notepad .env
```

**Configure your `.env` file:**
```env
PORT=5000
NODE_ENV=development

# For Local MongoDB:
MONGODB_URI=mongodb://localhost:27017/streamflix

# For MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/streamflix?retryWrites=true&w=majority

JWT_SECRET=your_super_secret_jwt_key_change_this_to_something_random
JWT_EXPIRE=7d

TMDB_API_KEY=your_tmdb_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3

CLIENT_URL=http://localhost:3000
```

**Generate a secure JWT_SECRET:**
```bash
# In Node.js console
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 3: Frontend Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# The .env file is already created with:
# REACT_APP_API_URL=http://localhost:5000/api
```

### Step 4: Get TMDB API Key

1. Go to [TMDB](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Request an API key (choose "Developer")
5. Fill out the form (use "Educational" or "Personal" project)
6. Copy your API key
7. Add it to `server/.env` file

## ▶️ Running the Application

### Method 1: Run Separately (Recommended for Development)

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
You should see:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
📍 Environment: development
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```
The app will open at `http://localhost:3000`

### Method 2: Run Concurrently (Optional)

You can install `concurrently` to run both at once:

```bash
# In root directory
npm install -g concurrently

# Create a script to run both
concurrently "cd server && npm run dev" "cd client && npm start"
```

## 🧪 Testing the Setup

### 1. Test Backend API

Open your browser or Postman and test:

**Health Check:**
```
GET http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "success",
  "message": "StreamFlix API is running",
  "timestamp": "2024-05-24T..."
}
```

**Get Trending Movies:**
```
GET http://localhost:5000/api/movies/trending
```

### 2. Test Frontend

1. Open `http://localhost:3000`
2. You should see the Netflix landing page
3. Click "Sign In" button
4. Try registering a new account

### 3. Test Full Authentication Flow

**Register a new user:**
```bash
# Using curl
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"
```

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error: "MongoNetworkError"**
```bash
# Check if MongoDB is running
# For local MongoDB:
net start MongoDB

# For Atlas: Check your connection string and network access
```

**Error: "Authentication failed"**
- Verify your MongoDB Atlas password
- Check IP whitelist (add 0.0.0.0/0 for development)

### Port Already in Use

**Backend (Port 5000):**
```bash
# Windows - Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**Frontend (Port 3000):**
```bash
# React will ask to use another port automatically
# Or kill the process:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### CORS Errors

Make sure `CLIENT_URL` in `server/.env` matches your frontend URL:
```env
CLIENT_URL=http://localhost:3000
```

### TMDB API Errors

**Error: "Invalid API key"**
- Verify your API key in `server/.env`
- Make sure there are no extra spaces
- Check if your API key is activated (may take a few minutes)

## 📱 Using the Application

### 1. Register/Login
- Click "Sign In" on landing page
- Register with name, email, and password
- Or login if you already have an account

### 2. Browse Movies
- Scroll through different categories
- Click on movies to see details (coming soon)

### 3. Manage Watchlist
- Click the "+" button on any movie to add to watchlist
- Go to "My List" to see your saved movies
- Click "-" to remove from watchlist

### 4. Search Movies
- Use the search icon in navigation
- Type movie name
- Browse results

## 🔐 Default Admin Account (Optional)

To create an admin account, register normally then update in MongoDB:

```javascript
// In MongoDB Compass or Shell
db.users.updateOne(
  { email: "admin@streamflix.com" },
  { $set: { role: "admin" } }
)
```

## 📊 MongoDB GUI Tools (Optional)

**MongoDB Compass** (Recommended):
- [Download](https://www.mongodb.com/try/download/compass)
- Connect with your MongoDB URI
- Visual interface to view/edit data

**Studio 3T**:
- [Download](https://studio3t.com/download/)
- Free for non-commercial use

## 🚀 Next Steps

1. ✅ Complete the authentication integration in frontend
2. ✅ Add watchlist functionality to UI
3. ✅ Implement search feature
4. ✅ Add user profile page
5. ✅ Create movie details page
6. ✅ Add video player
7. ✅ Implement recommendations

## 📚 Useful Commands

```bash
# Backend
cd server
npm run dev          # Start development server
npm start            # Start production server

# Frontend
cd client
npm start            # Start development server
npm run build        # Build for production

# MongoDB
mongod               # Start MongoDB (local)
mongo                # Open MongoDB shell

# Check versions
node --version
npm --version
mongo --version
```

## 🆘 Getting Help

If you encounter issues:

1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure MongoDB is running
4. Check that ports 3000 and 5000 are available
5. Review the troubleshooting section above

## 📖 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [React Documentation](https://react.dev/)
- [TMDB API Docs](https://developers.themoviedb.org/3)
- [JWT Introduction](https://jwt.io/introduction)

---

**Happy Coding! 🎉**

For questions or issues, please create an issue in the repository.

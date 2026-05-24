# 🎬 StreamFlix - Full Stack MERN Netflix Clone

A production-ready, full-stack Netflix clone built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, movie browsing, and watchlist management.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Express](https://img.shields.io/badge/Express-4.18-blue)
![React](https://img.shields.io/badge/React-19.1-blue)
![Node](https://img.shields.io/badge/Node-14+-green)

## 🌟 Live Demo

[View Live Demo](#) | [Video Walkthrough](#)

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing.png)

### Browse Movies
![Browse Movies](screenshots/browse.png)

### My List
![My List](screenshots/mylist.png)

## ✨ Features

### 🔐 Authentication
- User registration with email validation
- Secure login with JWT tokens
- Password hashing with bcrypt
- Persistent sessions with localStorage
- Protected routes and API endpoints

### 🎬 Movie Browsing
- Browse movies by categories (Trending, Top Rated, Genres)
- Netflix Originals section
- Action, Comedy, Horror movie categories
- Hero banner with featured content
- Horizontal scrolling movie rows
- Responsive movie posters with hover effects

### ⭐ Watchlist Management
- Add movies to personal watchlist
- Remove movies from watchlist
- Visual indicators for saved movies
- Dedicated "My List" page
- Grid layout with movie details
- Persistent storage in MongoDB

### 🎨 UI/UX
- Netflix-inspired modern design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Loading states and error handling
- Empty state messages
- Modal dialogs

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library with Hooks
- **Context API** - Global state management
- **Axios** - HTTP client with interceptors
- **PropTypes** - Runtime type checking
- **CSS3** - Custom styling

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **JWT** - Token-based authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **cors** - Cross-origin resource sharing
- **express-rate-limit** - API rate limiting

### External APIs
- **TMDB API** - Movie database

## 📁 Project Structure

```
streamflix-fullstack/
├── client/                      # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── context/            # Context API (Auth)
│   │   ├── services/           # API service layer
│   │   ├── styles/             # CSS files
│   │   └── utils/              # Utility functions
│   └── package.json
│
├── server/                      # Node.js Backend
│   ├── controllers/            # Route controllers
│   ├── models/                 # Mongoose models
│   ├── routes/                 # API routes
│   ├── middleware/             # Custom middleware
│   ├── config/                 # Configuration
│   ├── utils/                  # Utilities
│   ├── server.js               # Entry point
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (free tier)
- TMDB API key (free)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/raizel7738-creator/streamflix-app.git
cd streamflix-app
```

2. **Install dependencies**
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. **Configure environment variables**

**Backend** (`server/.env`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
TMDB_API_KEY=your_tmdb_api_key
TMDB_BASE_URL=https://api.themoviedb.org/3
CLIENT_URL=http://localhost:3000
```

**Frontend** (`client/.env`):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

4. **Get API Keys**

**MongoDB Atlas:**
- Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a free cluster
- Get your connection string
- Add to `MONGODB_URI` in server/.env

**TMDB API:**
- Sign up at [TMDB](https://www.themoviedb.org/)
- Go to Settings → API
- Request an API key
- Add to `TMDB_API_KEY` in server/.env

5. **Run the application**

**Option 1: Run both together (from root)**
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm start
```

**Option 2: Using concurrently (optional)**
```bash
npm install -g concurrently
concurrently "cd server && npm run dev" "cd client && npm start"
```

6. **Open your browser**
```
http://localhost:3000
```

## 🔑 API Endpoints

### Authentication
```
POST   /api/auth/register      - Register new user
POST   /api/auth/login         - Login user
GET    /api/auth/me            - Get current user (Protected)
PUT    /api/auth/updatepassword - Update password (Protected)
```

### Movies
```
GET    /api/movies/trending           - Get trending movies
GET    /api/movies/netflix-originals  - Get Netflix originals
GET    /api/movies/top-rated          - Get top rated movies
GET    /api/movies/genre/:genreId     - Get movies by genre
GET    /api/movies/search?query=      - Search movies
GET    /api/movies/:id                - Get movie details
```

### Watchlist (Protected)
```
GET    /api/watchlist                 - Get user watchlist
POST   /api/watchlist                 - Add to watchlist
DELETE /api/watchlist/:movieId        - Remove from watchlist
GET    /api/watchlist/check/:movieId  - Check if in watchlist
```

### Users (Protected)
```
GET    /api/users/profile      - Get user profile
PUT    /api/users/profile      - Update profile
GET    /api/users/history      - Get watch history
POST   /api/users/history      - Add to watch history
```

## 🎯 Usage

### Register/Login
1. Click "Sign In" button
2. Click "Sign Up Now" to register
3. Fill in name, email, and password
4. Or login with existing credentials

### Browse Movies
1. Scroll through different categories
2. Hover over movies to see watchlist button
3. Click on movies for more details (coming soon)

### Manage Watchlist
1. Hover over any movie
2. Click **+** button to add to My List
3. Button changes to **✓** when added
4. Click "My List" in navigation to view saved movies
5. Click "Remove from List" to delete

### Logout
1. Click "Logout" button in navigation
2. Confirm logout

## 🔒 Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token authentication
- Protected API routes with middleware
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Security headers with Helmet
- Input validation with express-validator
- MongoDB injection prevention
- Token expiration (7 days)
- Secure password requirements (min 6 characters)

## 🗄️ Database Schema

### Users Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  avatar: String,
  role: String (user/admin),
  subscription: Object,
  preferences: Object,
  watchHistory: Array,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Watchlists Collection
```javascript
{
  user: ObjectId (ref: User),
  movies: [{
    movieId: Number,
    title: String,
    poster_path: String,
    overview: String,
    vote_average: Number,
    addedAt: Date
  }],
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:5000/api/health

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🚧 Roadmap

### Phase 1: Core Features ✅
- [x] User authentication
- [x] Movie browsing
- [x] Watchlist management
- [x] My List page

### Phase 2: Enhanced Features 🚧
- [ ] Movie details page with trailer
- [ ] Video player integration
- [ ] Advanced search with filters
- [ ] User ratings and reviews
- [ ] Continue watching section

### Phase 3: Advanced Features 📋
- [ ] Real-time notifications (Socket.io)
- [ ] Payment integration (Stripe)
- [ ] Email verification
- [ ] Password reset
- [ ] Social authentication (Google, Facebook)
- [ ] Content recommendations algorithm
- [ ] Admin dashboard
- [ ] Multi-language support

### Phase 4: DevOps 📋
- [ ] Unit tests (Jest)
- [ ] Integration tests
- [ ] E2E tests (Cypress)
- [ ] Docker containerization
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Performance optimization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ajay**

- GitHub: [@raizel7738-creator](https://github.com/raizel7738-creator)
- LinkedIn: [Your LinkedIn](#)
- Portfolio: [Your Portfolio](#)

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie database API
- [Netflix](https://www.netflix.com/) for design inspiration
- React and Node.js communities
- MongoDB Atlas for cloud database hosting

## 📧 Contact

For questions or feedback:
- Create an issue in this repository
- Email: your.email@example.com

---

**⭐ If you found this project helpful, please give it a star!**

**Note:** This is a portfolio/educational project and is not affiliated with Netflix.

---

Made with ❤️ using MERN Stack

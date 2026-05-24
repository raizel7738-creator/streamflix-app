# 🚀 Deployment Guide

## Quick Deploy Commands

### Push to GitHub
```bash
git push -u origin main
```

### Deploy Backend (Heroku Example)
```bash
cd server
heroku create streamflix-api
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set TMDB_API_KEY=your_tmdb_key
git subtree push --prefix server heroku main
```

### Deploy Frontend (Vercel Example)
```bash
cd client
vercel --prod
# Set environment variable: REACT_APP_API_URL=https://your-api.herokuapp.com/api
```

## Environment Variables for Production

### Backend
- `NODE_ENV=production`
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `JWT_SECRET` - Strong random secret (use crypto.randomBytes)
- `TMDB_API_KEY` - Your TMDB API key
- `CLIENT_URL` - Your frontend URL (for CORS)

### Frontend
- `REACT_APP_API_URL` - Your backend API URL

## Security Checklist

- [ ] Change JWT_SECRET to a strong random value
- [ ] Use MongoDB Atlas with strong password
- [ ] Enable MongoDB IP whitelist in production
- [ ] Set NODE_ENV=production
- [ ] Enable HTTPS for both frontend and backend
- [ ] Review CORS settings
- [ ] Enable rate limiting
- [ ] Set secure cookie flags
- [ ] Review all environment variables

## Recommended Hosting Platforms

### Backend
- **Heroku** - Easy deployment, free tier available
- **Railway** - Modern platform, great DX
- **Render** - Free tier, auto-deploy from GitHub
- **AWS EC2** - Full control, scalable
- **DigitalOcean** - VPS hosting

### Frontend
- **Vercel** - Best for React, auto-deploy
- **Netlify** - Easy setup, great features
- **GitHub Pages** - Free, simple
- **AWS S3 + CloudFront** - Scalable, fast

### Database
- **MongoDB Atlas** - Managed MongoDB, free tier
- **AWS DocumentDB** - MongoDB-compatible
- **DigitalOcean Managed MongoDB** - Simple setup

## Performance Optimization

### Backend
- Enable compression middleware
- Add Redis for caching
- Use PM2 for process management
- Enable gzip compression
- Optimize database queries
- Add database indexes

### Frontend
- Run `npm run build` for production
- Enable code splitting
- Optimize images
- Use lazy loading
- Enable service workers
- Add CDN for static assets

## Monitoring

### Recommended Tools
- **Backend**: PM2, New Relic, Datadog
- **Frontend**: Google Analytics, Sentry
- **Database**: MongoDB Atlas monitoring
- **Uptime**: UptimeRobot, Pingdom

## CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy Backend
        run: |
          cd server
          npm install
          npm test
      - name: Deploy Frontend
        run: |
          cd client
          npm install
          npm run build
```

## Backup Strategy

- Enable MongoDB Atlas automated backups
- Export environment variables regularly
- Keep local backup of .env files (securely)
- Document all configuration changes
- Version control everything except secrets

## Post-Deployment

1. Test all API endpoints
2. Test authentication flow
3. Test watchlist functionality
4. Check error logging
5. Monitor performance
6. Set up alerts
7. Document API endpoints
8. Create user documentation

---

For detailed deployment instructions for specific platforms, check their official documentation.

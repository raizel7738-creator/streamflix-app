const express = require('express');
const router = express.Router();
const {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
  checkInWatchlist
} = require('../controllers/watchlist.controller');
const { protect } = require('../middleware/auth.middleware');

// All watchlist routes require authentication
router.use(protect);

router.get('/', getWatchlist);
router.post('/', addToWatchlist);
router.delete('/:movieId', removeFromWatchlist);
router.get('/check/:movieId', checkInWatchlist);

module.exports = router;

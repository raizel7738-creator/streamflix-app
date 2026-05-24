const express = require('express');
const router = express.Router();
const {
  getTrending,
  getNetflixOriginals,
  getTopRated,
  getByGenre,
  searchMovies,
  getMovieDetails
} = require('../controllers/movie.controller');

// All routes are public (no authentication required for browsing)
router.get('/trending', getTrending);
router.get('/netflix-originals', getNetflixOriginals);
router.get('/top-rated', getTopRated);
router.get('/genre/:genreId', getByGenre);
router.get('/search', searchMovies);
router.get('/:id', getMovieDetails);

module.exports = router;

const axios = require('axios');

const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

// Create axios instance for TMDB
const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY
  }
});

// @desc    Get trending movies
// @route   GET /api/movies/trending
// @access  Public
exports.getTrending = async (req, res) => {
  try {
    const response = await tmdbApi.get('/trending/all/week', {
      params: {
        language: req.query.language || 'en-US'
      }
    });

    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    console.error('Get trending error:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching trending movies'
    });
  }
};

// @desc    Get Netflix Originals
// @route   GET /api/movies/netflix-originals
// @access  Public
exports.getNetflixOriginals = async (req, res) => {
  try {
    const response = await tmdbApi.get('/discover/tv', {
      params: {
        with_networks: 213,
        language: req.query.language || 'en-US'
      }
    });

    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    console.error('Get Netflix originals error:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching Netflix originals'
    });
  }
};

// @desc    Get top rated movies
// @route   GET /api/movies/top-rated
// @access  Public
exports.getTopRated = async (req, res) => {
  try {
    const response = await tmdbApi.get('/movie/top_rated', {
      params: {
        language: req.query.language || 'en-US'
      }
    });

    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    console.error('Get top rated error:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching top rated movies'
    });
  }
};

// @desc    Get movies by genre
// @route   GET /api/movies/genre/:genreId
// @access  Public
exports.getByGenre = async (req, res) => {
  try {
    const { genreId } = req.params;

    const response = await tmdbApi.get('/discover/movie', {
      params: {
        with_genres: genreId,
        language: req.query.language || 'en-US'
      }
    });

    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    console.error('Get by genre error:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching movies by genre'
    });
  }
};

// @desc    Search movies
// @route   GET /api/movies/search
// @access  Public
exports.searchMovies = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        status: 'error',
        message: 'Search query is required'
      });
    }

    const response = await tmdbApi.get('/search/multi', {
      params: {
        query,
        language: req.query.language || 'en-US'
      }
    });

    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    console.error('Search movies error:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error searching movies'
    });
  }
};

// @desc    Get movie details
// @route   GET /api/movies/:id
// @access  Public
exports.getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await tmdbApi.get(`/movie/${id}`, {
      params: {
        language: req.query.language || 'en-US',
        append_to_response: 'videos,credits,similar'
      }
    });

    res.status(200).json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    console.error('Get movie details error:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching movie details'
    });
  }
};

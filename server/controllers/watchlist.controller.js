const Watchlist = require('../models/Watchlist.model');

// @desc    Get user's watchlist
// @route   GET /api/watchlist
// @access  Private
exports.getWatchlist = async (req, res) => {
  try {
    let watchlist = await Watchlist.findOne({ user: req.user.id });

    if (!watchlist) {
      watchlist = await Watchlist.create({ user: req.user.id, movies: [] });
    }

    res.status(200).json({
      status: 'success',
      data: {
        watchlist
      }
    });
  } catch (error) {
    console.error('Get watchlist error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error fetching watchlist',
      error: error.message
    });
  }
};

// @desc    Add movie to watchlist
// @route   POST /api/watchlist
// @access  Private
exports.addToWatchlist = async (req, res) => {
  try {
    const { movieId, title, poster_path, backdrop_path, overview, release_date, vote_average } = req.body;

    if (!movieId || !title) {
      return res.status(400).json({
        status: 'error',
        message: 'Movie ID and title are required'
      });
    }

    let watchlist = await Watchlist.findOne({ user: req.user.id });

    if (!watchlist) {
      watchlist = await Watchlist.create({ 
        user: req.user.id, 
        movies: [] 
      });
    }

    // Check if movie already exists
    const exists = watchlist.movies.some(m => m.movieId === movieId);
    if (exists) {
      return res.status(400).json({
        status: 'error',
        message: 'Movie already in watchlist'
      });
    }

    await watchlist.addMovie({
      movieId,
      title,
      poster_path,
      backdrop_path,
      overview,
      release_date,
      vote_average
    });

    res.status(200).json({
      status: 'success',
      message: 'Movie added to watchlist',
      data: {
        watchlist
      }
    });
  } catch (error) {
    console.error('Add to watchlist error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error adding movie to watchlist',
      error: error.message
    });
  }
};

// @desc    Remove movie from watchlist
// @route   DELETE /api/watchlist/:movieId
// @access  Private
exports.removeFromWatchlist = async (req, res) => {
  try {
    const { movieId } = req.params;

    const watchlist = await Watchlist.findOne({ user: req.user.id });

    if (!watchlist) {
      return res.status(404).json({
        status: 'error',
        message: 'Watchlist not found'
      });
    }

    await watchlist.removeMovie(parseInt(movieId));

    res.status(200).json({
      status: 'success',
      message: 'Movie removed from watchlist',
      data: {
        watchlist
      }
    });
  } catch (error) {
    console.error('Remove from watchlist error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error removing movie from watchlist',
      error: error.message
    });
  }
};

// @desc    Check if movie is in watchlist
// @route   GET /api/watchlist/check/:movieId
// @access  Private
exports.checkInWatchlist = async (req, res) => {
  try {
    const { movieId } = req.params;

    const watchlist = await Watchlist.findOne({ user: req.user.id });

    if (!watchlist) {
      return res.status(200).json({
        status: 'success',
        data: {
          inWatchlist: false
        }
      });
    }

    const inWatchlist = watchlist.movies.some(m => m.movieId === parseInt(movieId));

    res.status(200).json({
      status: 'success',
      data: {
        inWatchlist
      }
    });
  } catch (error) {
    console.error('Check watchlist error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Error checking watchlist',
      error: error.message
    });
  }
};

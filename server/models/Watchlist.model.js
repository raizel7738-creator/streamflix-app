const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movies: [{
    movieId: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    poster_path: String,
    backdrop_path: String,
    overview: String,
    release_date: String,
    vote_average: Number,
    addedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Ensure one watchlist per user
watchlistSchema.index({ user: 1 }, { unique: true });

// Method to add movie to watchlist
watchlistSchema.methods.addMovie = function(movie) {
  const exists = this.movies.some(m => m.movieId === movie.movieId);
  if (!exists) {
    this.movies.unshift(movie);
  }
  return this.save();
};

// Method to remove movie from watchlist
watchlistSchema.methods.removeMovie = function(movieId) {
  this.movies = this.movies.filter(m => m.movieId !== movieId);
  return this.save();
};

module.exports = mongoose.model('Watchlist', watchlistSchema);

import api from './api';

export const watchlistService = {
  // Get user's watchlist
  getWatchlist: async () => {
    const response = await api.get('/watchlist');
    return response.data.watchlist;
  },

  // Add movie to watchlist
  addToWatchlist: async (movie) => {
    const response = await api.post('/watchlist', movie);
    return response.data.watchlist;
  },

  // Remove movie from watchlist
  removeFromWatchlist: async (movieId) => {
    const response = await api.delete(`/watchlist/${movieId}`);
    return response.data.watchlist;
  },

  // Check if movie is in watchlist
  checkInWatchlist: async (movieId) => {
    const response = await api.get(`/watchlist/check/${movieId}`);
    return response.data.inWatchlist;
  }
};

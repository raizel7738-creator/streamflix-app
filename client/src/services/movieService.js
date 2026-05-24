import api from './api';

export const movieService = {
  // Get trending movies
  getTrending: async () => {
    const response = await api.get('/movies/trending');
    return response.data;
  },

  // Get Netflix originals
  getNetflixOriginals: async () => {
    const response = await api.get('/movies/netflix-originals');
    return response.data;
  },

  // Get top rated movies
  getTopRated: async () => {
    const response = await api.get('/movies/top-rated');
    return response.data;
  },

  // Get movies by genre
  getByGenre: async (genreId) => {
    const response = await api.get(`/movies/genre/${genreId}`);
    return response.data;
  },

  // Search movies
  searchMovies: async (query) => {
    const response = await api.get(`/movies/search?query=${encodeURIComponent(query)}`);
    return response.data;
  },

  // Get movie details
  getMovieDetails: async (id) => {
    const response = await api.get(`/movies/${id}`);
    return response.data;
  }
};

import axios from 'axios';

/**
 * Create a pre-configured instance of axios for the TMDB API.
 */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;

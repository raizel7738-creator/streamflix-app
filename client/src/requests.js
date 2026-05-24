/**
 * Backend API endpoints (proxied through our server)
 */
const requests = {
    fetchTrending: `/movies/trending`,
    fetchNetflixOriginals: `/movies/netflix-originals`,
    fetchTopRated: `/movies/top-rated`,
    fetchActionMovies: `/movies/genre/28`,
    fetchComedyMovies: `/movies/genre/35`,
    fetchHorrorMovies: `/movies/genre/27`,
    fetchRomanceMovies: `/movies/genre/10749`,
    fetchDocumentaries: `/movies/genre/99`,
};

export default requests;

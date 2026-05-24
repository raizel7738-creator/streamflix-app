import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../axios';
import { watchlistService } from '../services/watchlistService';
import { useAuth } from '../context/AuthContext';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/w500/";

function Row({ title, fetchUrl, isLargeRow = false, isNumbered = false }) {
    const [movies, setMovies] = useState([]);
    const [inWatchlist, setInWatchlist] = useState({});
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                const results = request.data?.data?.results || request.data?.results || [];
                
                // For the numbered row, we only need the top 5
                const moviesToShow = isNumbered 
                    ? results.slice(0, 5) 
                    : results;
                setMovies(moviesToShow);

                // Check watchlist status for authenticated users
                if (isAuthenticated && moviesToShow.length > 0) {
                    checkWatchlistStatus(moviesToShow);
                }
            } catch (error) {
                console.error("Error fetching row data:", error);
            }
        }
        fetchData();
    }, [fetchUrl, isNumbered, isAuthenticated]);

    const checkWatchlistStatus = async (moviesList) => {
        try {
            const watchlist = await watchlistService.getWatchlist();
            const watchlistMap = {};
            watchlist.movies.forEach(movie => {
                watchlistMap[movie.movieId] = true;
            });
            setInWatchlist(watchlistMap);
        } catch (error) {
            console.error("Error checking watchlist:", error);
        }
    };

    const handleWatchlistToggle = async (movie, e) => {
        e.stopPropagation();
        
        if (!isAuthenticated) {
            alert('Please sign in to add movies to your watchlist');
            return;
        }

        try {
            const movieId = movie.id;
            
            if (inWatchlist[movieId]) {
                // Remove from watchlist
                await watchlistService.removeFromWatchlist(movieId);
                setInWatchlist(prev => ({ ...prev, [movieId]: false }));
                alert('Removed from My List');
            } else {
                // Add to watchlist
                await watchlistService.addToWatchlist({
                    movieId: movie.id,
                    title: movie.title || movie.name || movie.original_name,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    overview: movie.overview,
                    release_date: movie.release_date || movie.first_air_date,
                    vote_average: movie.vote_average
                });
                setInWatchlist(prev => ({ ...prev, [movieId]: true }));
                alert('Added to My List');
            }
        } catch (error) {
            console.error("Error toggling watchlist:", error);
            alert('Failed to update watchlist. Please try again.');
        }
    };

    return (
        <div className={`row ${isNumbered ? 'row__numbered' : ''}`}>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie, index) => (
                   // Ensure we have a valid image to display
                   (movie.poster_path || movie.backdrop_path) && (
                        <div key={movie.id} className="row_poster_container">
                            {isNumbered ? (
                                <div className="row_poster_numbered_container">
                                    <div className="poster_number">{index + 1}</div>
                                    <img
                                        className="row_poster_numbered"
                                        src={`${base_url}${movie.poster_path}`}
                                        alt={movie.name || movie.title}
                                    />
                                </div>
                            ) : (
                                <>
                                    <img
                                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                        alt={movie.name || movie.title}
                                    />
                                    {isAuthenticated && (
                                        <button 
                                            className={`watchlist_button ${inWatchlist[movie.id] ? 'in_watchlist' : ''}`}
                                            onClick={(e) => handleWatchlistToggle(movie, e)}
                                            title={inWatchlist[movie.id] ? 'Remove from My List' : 'Add to My List'}
                                        >
                                            {inWatchlist[movie.id] ? '✓' : '+'}
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                   )
                ))}
            </div>
        </div>
    );
}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    isLargeRow: PropTypes.bool,
    isNumbered: PropTypes.bool,
};

export default Row;

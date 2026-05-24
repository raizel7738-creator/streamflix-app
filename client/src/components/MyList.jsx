import React, { useState, useEffect } from 'react';
import { watchlistService } from '../services/watchlistService';
import './MyList.css';

const base_url = "https://image.tmdb.org/t/p/w500/";

function MyList() {
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWatchlist();
    }, []);

    const fetchWatchlist = async () => {
        try {
            const data = await watchlistService.getWatchlist();
            setWatchlist(data.movies || []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching watchlist:", error);
            setLoading(false);
        }
    };

    const handleRemove = async (movieId) => {
        try {
            await watchlistService.removeFromWatchlist(movieId);
            setWatchlist(watchlist.filter(movie => movie.movieId !== movieId));
            alert('Removed from My List');
        } catch (error) {
            console.error("Error removing from watchlist:", error);
            alert('Failed to remove. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="mylist">
                <h1>My List</h1>
                <p className="loading">Loading your list...</p>
            </div>
        );
    }

    if (watchlist.length === 0) {
        return (
            <div className="mylist">
                <h1>My List</h1>
                <div className="empty_list">
                    <p>Your list is empty</p>
                    <p className="empty_subtitle">Add movies and shows to your list to watch them later</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mylist">
            <h1>My List</h1>
            <div className="mylist_grid">
                {watchlist.map((movie) => (
                    <div key={movie.movieId} className="mylist_item">
                        <img
                            src={`${base_url}${movie.poster_path}`}
                            alt={movie.title}
                            className="mylist_poster"
                        />
                        <div className="mylist_info">
                            <h3>{movie.title}</h3>
                            <p className="mylist_rating">⭐ {movie.vote_average?.toFixed(1)}</p>
                            <p className="mylist_overview">{movie.overview}</p>
                            <button 
                                className="mylist_remove"
                                onClick={() => handleRemove(movie.movieId)}
                            >
                                Remove from List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyList;

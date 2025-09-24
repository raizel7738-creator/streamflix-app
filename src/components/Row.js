import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/w500/"; // Use a specific width for better performance

function Row({ title, fetchUrl, isLargeRow = false, isNumbered = false }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                // For the numbered row, we only need the top 5
                const moviesToShow = isNumbered 
                    ? request.data.results.slice(0, 5) 
                    : request.data.results;
                setMovies(moviesToShow);
            } catch (error) {
                console.error("Error fetching row data:", error);
            }
        }
        fetchData();
    }, [fetchUrl, isNumbered]);

    return (
        <div className={`row ${isNumbered ? 'row__numbered' : ''}`}>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie, index) => (
                   // Ensure we have a valid image to display
                   (movie.poster_path && movie.backdrop_path) && (
                        isNumbered ? (
                            <div key={movie.id} className="row_poster_numbered_container">
                                <div className="poster_number">{index + 1}</div>
                                <img
                                    className="row_poster_numbered"
                                    src={`${base_url}${movie.poster_path}`}
                                    alt={movie.name}
                                />
                            </div>
                        ) : (
                            <img
                                key={movie.id}
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                   )
                ))}
            </div>
        </div>
    );
}

export default Row;

import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const results = request.data.results;
                if (results?.length > 0) {
                    // Select a random movie from the fetched results
                    setMovie(results[Math.floor(Math.random() * results.length)]);
                }
            } catch (error) {
                console.error("Error fetching banner data:", error);
            }
        }
        fetchData();
    }, []);

    // Function to truncate long descriptions
    const truncate = (str, n) => str?.length > n ? str.substr(0, n - 1) + "..." : str;

    // Display a loading placeholder while fetching data
    if (!movie) return <div className="banner-loading"></div>;

    return (
        <header className="banner" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}>
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <p className="banner_description">{truncate(movie?.overview, 150)}</p>
                <div className="banner_buttons">
                    <button className="banner_button play_button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5V19L19 12L8 5Z" /></svg>
                        Play
                    </button>
                    <button className="banner_button info_button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 17H13V11H11V17ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"/></svg>
                        More Info
                    </button>
                </div>
            </div>
            <div className="banner_rating">
                <span>19+</span>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    );
}

export default Banner;

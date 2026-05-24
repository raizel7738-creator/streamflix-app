import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
import './Nav.css';

function Nav({ isHomePage = false, onNavigate }) {
    const [show, handleShow] = useState(false);
    const { logout } = useAuth();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            logout();
        }
    };

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img
                    className="nav_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt="Netflix Logo"
                    onClick={() => onNavigate && onNavigate('home')}
                    style={{ cursor: 'pointer' }}
                />
                
                {isHomePage && (
                    <div className="nav_links">
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('mylist'); }}>My List</a>
                    </div>
                )}

                <div className="nav_actions">
                    {isHomePage && (
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="nav_icon">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                    <img
                        className="nav_avatar"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Netflix Avatar"
                    />
                    {isHomePage && (
                        <button className="nav_logout" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

Nav.propTypes = {
    isHomePage: PropTypes.bool,
    onNavigate: PropTypes.func,
};

export default Nav;

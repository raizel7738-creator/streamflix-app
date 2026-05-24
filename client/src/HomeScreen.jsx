import React, { useState } from 'react';
import './HomeScreen.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import MyList from './components/MyList';
import requests from './requests';

function HomeScreen() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="homeScreen">
      <Nav isHomePage={true} onNavigate={handleNavigate} />
      
      {currentView === 'home' ? (
        <>
          <Banner />
          
          <Row title="Popular Movies" fetchUrl={requests.fetchTrending} isLargeRow />
          <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        </>
      ) : (
        <MyList />
      )}
    </div>
  );
}

export default HomeScreen;

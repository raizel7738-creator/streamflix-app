import React from 'react';
import './HomeScreen.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Pass isHomePage prop to render the correct navigation */}
      <Nav isHomePage={true} />
      
      <Banner />
      
      <Row title="Popular Movies" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default HomeScreen;

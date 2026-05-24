import React, { useState } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import NetflixLanding from './components/NetflixLanding';

/**
 * The main component that handles application state (signed in or not).
 */
function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <div className="app">
      {!user ? (
        <NetflixLanding onLogin={handleLogin} />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import NetflixLanding from './components/NetflixLanding';
import { useAuth } from './context/AuthContext';

/**
 * The main component that handles application state (signed in or not).
 */
function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      {!user ? (
        <NetflixLanding />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
}

export default App;

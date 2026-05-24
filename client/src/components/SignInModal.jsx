import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';

const SignInModal = ({ onClose, initialEmail = '' }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        // Register
        if (!name.trim()) {
          setError('Please enter your name');
          setLoading(false);
          return;
        }
        await register(name, email, password);
        alert('Registration successful! Welcome to StreamFlix!');
        onClose();
      } else {
        // Login
        await login(email, password);
        alert('Login successful! Welcome back!');
        onClose();
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="sign-in-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form className="sign-in-form" onSubmit={handleSubmit}>
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
            />
          )}
          
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={loading}
          />
          
          <button type="submit" className="sign-in-submit" disabled={loading}>
            {loading ? 'Please wait...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="form-switch">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button 
                type="button" 
                onClick={() => {
                  setIsSignUp(false);
                  setError('');
                }}
                className="switch-button"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              New to StreamFlix?{' '}
              <button 
                type="button" 
                onClick={() => {
                  setIsSignUp(true);
                  setError('');
                }}
                className="switch-button"
              >
                Sign Up Now
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

SignInModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  initialEmail: PropTypes.string,
};

export default SignInModal;

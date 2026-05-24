import React, { useState } from 'react';

const SignInModal = ({ onClose, onLogin, initialEmail = '' }) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin({ email });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="sign-in-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Sign In</h2>
        <form className="sign-in-form" onSubmit={handleSignIn}>
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="sign-in-submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;

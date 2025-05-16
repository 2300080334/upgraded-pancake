import React, { useState } from 'react';
import './signup.css';

function Signup({ onSignupSuccess, onLoginClick }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address');
      return;
    }

    setError('');
    // Simulate successful signup
    alert('Signup successful!');
    onSignupSuccess();
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSignup}>
        <div className="input-field">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>

        <div className="input-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className="input-field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <button type="button" onClick={onLoginClick} className="link-button">
        Already have an account? Login
      </button>
    </div>
  );
}

export default Signup;
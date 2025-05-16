import React, { useState, useRef, useEffect } from 'react';
import './components/login.css';

function Login({ onLogin, onSignupClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);
  const [captchaText, setCaptchaText] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaText(captcha);
    setUserCaptcha('');
    setCaptchaVerified(false);
    drawCaptcha(captcha);
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    ctx.font = '24px Arial';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';

    for (let i = 0; i < text.length; i++) {
      ctx.save();
      ctx.translate(30 + (i * 20), 30);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setError('Please verify the CAPTCHA');
      return;
    }

    if (username.trim() === '2300080334' && password.trim() === '123') {
      setError('');
      onLogin(username, password);
    } else {
      setError('Invalid username or password');
      generateCaptcha();
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgotPasswordPopup(true);
    setTimeout(() => {
      setShowForgotPasswordPopup(false);
    }, 3000);
  };

  const verifyCaptcha = () => {
    if (userCaptcha.toLowerCase() === captchaText.toLowerCase()) {
      setCaptchaVerified(true);
      setError('');
    } else {
      setError('CAPTCHA verification failed');
      setCaptchaVerified(false);
      generateCaptcha();
    }
  };

  return (
    <div className="login-page">
      {showForgotPasswordPopup && (
        <div className="forgot-password-popup">
          <p>Reset link has been sent to your registered email ID</p>
        </div>
      )}

      <div className="login-left">
        <img src="/logo.jpg" alt="HomeServe Logo" className="login-logo" />
        <h1>HOMESERVE</h1>
        <p className="tagline">Where Service Meets Comfort</p>
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            HomeServe is your trusted partner for all home services,
            connecting customers with quality professionals.
          </p>
        </div>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="captcha-container">
            <label>CAPTCHA Verification</label>
            <div className="captcha-display">
              <canvas
                ref={canvasRef}
                width="150"
                height="50"
                title="CAPTCHA Image"
              />
              <button
                type="button"
                className="refresh-captcha"
                onClick={generateCaptcha}
                aria-label="Refresh CAPTCHA"
              >
                ↻
              </button>
            </div>
            <div className="captcha-input-group">
              <input
                type="text"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                placeholder="Enter CAPTCHA"
                required
                className="captcha-input"
              />
              <button
                type="button"
                className="verify-button"
                onClick={verifyCaptcha}
              >
                Verify
              </button>
            </div>
            {captchaVerified && (
              <p className="captcha-success">✓ CAPTCHA verified</p>
            )}
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            type="submit"
            className={`login-button ${!captchaVerified ? 'disabled' : ''}`}
            disabled={!captchaVerified}
          >
            Login
          </button>

          <div className="login-links">
            <button
              type="button"
              className="forgot-password-button"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>

            <p className="dont-have-account">Don't have an account?</p>
            <button
              type="button"
              className="signup-link-button"
              onClick={onSignupClick}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

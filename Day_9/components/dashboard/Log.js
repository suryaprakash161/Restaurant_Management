import React, { useState } from 'react';
import './log.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

const Log = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Handle login logic here
    console.log('Logging in with email:', email, 'and password:', password);

    // Navigate to the home page upon successful login
    navigate('/Home');
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        {error && <div className="error">{error}</div>}
    
        <nav>
      
          <button type="submit" className="login-button">Login</button>
          
          {/* <Link to="/home" className="home-link">Home</Link> */}
        </nav>
      </form>
    </div>
  );
};

export default Log;
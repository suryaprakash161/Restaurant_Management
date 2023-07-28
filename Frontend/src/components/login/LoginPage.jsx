import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './login.css';


const LoginPage = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const LoginPage = async() => {
    try{


        const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
            email,
            password,
            });

let token = response.data.token;
let user = response.data.userResponse;
localStorage.setItem('token', token);
localStorage.setItem('user', JSON.stringify(user));
// dispatch(loginSuccess(email));
        navigate('/Home');
    }
    catch(e){
        setError(e.message);
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Perform login logic here
    // ...

    // Redirect to homepage after successful login
    navigate('/Hm');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      
        
      </form>

      <p><center>Don't have an account?</center><nav> <Link to="/Sign"><center>
        sign up
        </center>
        </Link>
        
        </nav></p>
    </div>
  );
};
    

export default LoginPage;

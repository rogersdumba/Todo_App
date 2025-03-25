import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import for v6+
import './styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate replaces useHistory

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login check
    if (username == "Dumba" && password == "rogers8@256" ) {
      navigate('/todo'); // Corrected navigation
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

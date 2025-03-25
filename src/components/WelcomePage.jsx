import React from 'react';
import { Link } from 'react-router-dom';
import './styles/WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">Welcome to Todo App!</h1>
      <p className="welcome-text">Manage your tasks with ease.</p>
      <div className="button-container">
        <Link to="/login" className="welcome-button">Login</Link>
        <Link to="/todo" className="welcome-button">Go to Todo App</Link>
      </div>
    </div>
  );
};

export default WelcomePage;

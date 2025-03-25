import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Todo App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/login" className="navbar-link">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

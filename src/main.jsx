import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Note the change here
import App from './App';
import './components/styles/Navbar.css';
import './components/styles/WelcomePage.css';
import './components/styles/LoginPage.css';
import './components/styles/TodoApp.css';

// ✅ React 18 way to render the root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import TodoApp from './components/TodoApp.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todo" element={<TodoApp />} />
        {/* Add a "catch-all" route for undefined paths */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

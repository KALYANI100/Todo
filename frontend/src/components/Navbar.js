import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="app-navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>📋 TaskBoard</h1>
      </Link>
      <nav>
        {token ? (
          <>
            <Link to="/tasks">Board</Link>
            <Link to="/history">History</Link>
            <button type="button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;

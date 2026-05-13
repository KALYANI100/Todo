import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/tasks');
    } catch (err) {
      alert('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="auth-page">
      <div className="page-card auth-card">
        <div className="auth-header">
          <h2>Welcome back</h2>
          <p className="hero-text">Login to access your tasks and keep your day organized.</p>
        </div>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button className="primary" type="submit">Login</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import History from './components/History';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><Landing /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<><Navbar /><TaskList /></>} />
          <Route path="/history" element={<><Navbar /><History /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
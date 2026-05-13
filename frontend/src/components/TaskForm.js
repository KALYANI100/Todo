import React, { useState } from 'react';
import axios from 'axios';
import { API_CONFIG } from '../config';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_CONFIG.TASKS, { title, description }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      addTask(res.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      alert('Failed to add task');
    }
  };

  return (
    <form onSubmit={onSubmit} className="auth-card">
      <input type="text" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
      <button className="primary" type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
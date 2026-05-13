import React, { useState } from 'react';
import axios from 'axios';
import { API_CONFIG } from '../config';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);
  const token = localStorage.getItem('token');

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${API_CONFIG.TASKS}/${task._id}`, { title, description, completed }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      updateTask(res.data);
      setIsEditing(false);
    } catch (err) {
      alert('Failed to update task');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_CONFIG.TASKS}/${task._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      deleteTask(task._id);
    } catch (err) {
      alert('Failed to delete task');
    }
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <div className="auth-card">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" />
          <label>
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            Mark complete
          </label>
          <div className="button-row">
            <button className="primary" type="button" onClick={handleUpdate}>Save</button>
            <button className="secondary" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="button-row task-card-header">
            <div>
              <h3>{task.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#5f4a7e', margin: '8px 0 0' }}>{task.description || 'No description yet'}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className={`status-pill ${task.completed ? 'completed' : 'pending'}`}>
                {task.completed ? 'Completed' : 'Pending'}
              </span>
              <p className="task-meta">
                Added {task.createdAt ? new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'unknown'}
              </p>
            </div>
          </div>
          <div className="task-actions">
            <button className="secondary" type="button" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="secondary" type="button" onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
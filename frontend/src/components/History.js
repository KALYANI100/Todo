import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { API_CONFIG } from '../config';

const History = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await axios.get(API_CONFIG.TASKS_HISTORY, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHistory();
  }, [token, navigate]);

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <main className="main-content">
      <div className="dashboard-shell">
        <div className="dashboard-header">
          <div>
            <h2>Task history</h2>
            <p className="dashboard-summary">See all completed and pending tasks sorted by date.</p>
          </div>
          <div className="button-row">
            <Link to="/tasks" className="secondary secondary-link">Back to board</Link>
          </div>
        </div>

        <div className="history-grid">
          <section className="history-section">
            <div className="history-summary">
              <h3>Completed</h3>
              <span>{completedTasks.length} task{completedTasks.length === 1 ? '' : 's'}</span>
            </div>
            {completedTasks.length === 0 ? (
              <p>No completed tasks yet.</p>
            ) : (
              completedTasks.map(task => (
                <div key={task._id} className="task-card">
                  <div className="button-row" style={{ justifyContent: 'space-between', gap: '16px' }}>
                    <div>
                      <h3>{task.title}</h3>
                      <p>{task.description || 'No description'}</p>
                    </div>
                    <span className="status-pill completed">Completed</span>
                  </div>
                  <p className="task-meta">Added {task.createdAt ? new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'unknown'}</p>
                </div>
              ))
            )}
          </section>

          <section className="history-section">
            <div className="history-summary">
              <h3>Pending</h3>
              <span>{pendingTasks.length} task{pendingTasks.length === 1 ? '' : 's'}</span>
            </div>
            {pendingTasks.length === 0 ? (
              <p>No pending tasks. Nice work!</p>
            ) : (
              pendingTasks.map(task => (
                <div key={task._id} className="task-card">
                  <div className="button-row" style={{ justifyContent: 'space-between', gap: '16px' }}>
                    <div>
                      <h3>{task.title}</h3>
                      <p>{task.description || 'No description'}</p>
                    </div>
                    <span className="status-pill pending">Pending</span>
                  </div>
                  <p className="task-meta">Added {task.createdAt ? new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'unknown'}</p>
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default History;

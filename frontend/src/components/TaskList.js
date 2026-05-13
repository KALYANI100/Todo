import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, [token, navigate]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <main className="main-content">
      <div className="dashboard-shell">
        <div className="dashboard-header">
          <div>
            <h2>Your task board</h2>
            <p className="dashboard-summary">Manage {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} in one polished place.</p>
          </div>

          <div className="button-row">
            <button className="secondary" type="button" onClick={() => navigate('/history')}>History</button>
            <button className="secondary logout-button" type="button" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div className="dashboard-grid">
          <section className="panel">
            <h3>Add a new task</h3>
            <TaskForm addTask={addTask} />
          </section>
          <section className="panel">
            <h3>Task list</h3>
            <div className="task-list">
              {tasks.length === 0 ? (
                <div className="task-card">
                  <p>No tasks yet. Add one to get started.</p>
                </div>
              ) : (
                tasks.map(task => (
                  <TaskItem key={task._id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TaskList;
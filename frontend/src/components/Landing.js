import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="main-content">
      <div className="hero-panel">
        <section className="hero-copy">
          <span className="eyebrow">Task Manager</span>
          <h1 className="hero-title">A polished purple task board for every day.</h1>
          <p className="hero-text">
            Track pending and completed tasks, view history, and manage your workflow in a clean light purple and pink experience.
          </p>
          <div className="hero-actions">
            <Link to="/register" className="primary">Get started</Link>
            <Link to="/login" className="secondary secondary-link">Login</Link>
          </div>
        </section>

        <section className="hero-features">
          <div className="feature-card">
            <h3>Stay organized</h3>
            <p>Tasks are sorted by date so you always see the newest items first.</p>
          </div>
          <div className="feature-card">
            <h3>View history</h3>
            <p>See completed and pending tasks in a separate history view.</p>
          </div>
          <div className="feature-card">
            <h3>Fast auth</h3>
            <p>Login and register with a simple, secure flow.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Landing;
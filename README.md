# MERN Todo App

A task management system built with MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User registration and login
- Create, read, update, and delete tasks
- JWT-based authentication
- Responsive frontend

## Setup

### Prerequisites

- Node.js
- MongoDB (local or cloud)

### Installation

1. Clone the repository.

2. Install backend dependencies:

   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:

   ```
   cd ../frontend
   npm install
   ```

4. Set up environment variables:
   - In `backend/.env`, update `MONGO_URI` and `JWT_SECRET`.

5. Start MongoDB.

6. Start the backend:

   ```
   cd backend
   npm start
   ```

7. Start the frontend:
   ```
   cd frontend
   npm start
   ```

The app will be running at `http://localhost:3000` for frontend and `http://localhost:5000` for backend.

## API Endpoints

### Auth

- POST /api/auth/register
- POST /api/auth/login

### Tasks

- GET /api/tasks (authenticated)
- POST /api/tasks (authenticated)
- PUT /api/tasks/:id (authenticated)
- DELETE /api/tasks/:id (authenticated)

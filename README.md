# Task Tracker App

An internal task tracking web application built with React and FastAPI.

## Tech Stack

- **Frontend:** React + Vite
- **Backend:** FastAPI (Python)
- **Database:** SQLite

## Features

- Create tasks with title, description and status
- View all tasks organized by status (Open, In Progress, Completed)
- View task details
- Update task status
- Delete tasks

## How to Run Locally

### Backend

1. Navigate to the backend folder:
cd backend

2. Create and activate a virtual environment:
python -m venv .venv
.venv\Scripts\activate

3. Install dependencies:
pip install fastapi uvicorn sqlalchemy

4. Start the backend server:
uvicorn main:app --reload

Backend runs at: http://127.0.0.1:8000  
API docs available at: http://127.0.0.1:8000/docs

### Frontend

1. Navigate to the frontend folder:
cd frontend

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

Frontend runs at: http://localhost:5173

## How to Run with Docker

Coming soon — Docker setup will be added shortly.

## Design Choices

- SQLite was chosen over in-memory storage for data persistence across server restarts
- Tasks are organized into three columns (Open, In Progress, Completed) for a clear visual overview
- REST API follows standard conventions with GET, POST, PUT and DELETE endpoints
- CORS is enabled to allow communication between frontend and backend during local development
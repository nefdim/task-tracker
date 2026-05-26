🗂️ Task Tracker App

A full-stack task tracking application built with React (Vite), FastAPI, and SQLite, fully containerized using Docker & Docker Compose.

✨ Features
➕ Create tasks with title and description
📋 View tasks by status (Open, In Progress, Completed)
✏️ Update task status
🗑️ Delete tasks
⚡ Fast REST API backend
🎨 Simple, responsive UI
🧱 Tech Stack
Layer	Technology
Frontend	React (Vite)
Backend	FastAPI (Python)
Database	SQLite
ORM	SQLAlchemy
DevOps	Docker, Docker Compose
🏗️ Architecture

The app is split into two services:

🖥️ Backend (FastAPI)
REST API built with FastAPI
SQLAlchemy ORM for database handling
SQLite database (tasks.db)
Runs on http://localhost:8000
🌐 Frontend (React + Vite)
Modern React UI
Fetches data from backend via REST API
Runs on http://localhost:5173
🐳 Docker Compose
Runs frontend + backend together
Handles networking between services
One-command setup
📸 Screenshots

Add your screenshots in a /screenshots folder.

🏠 Main Dashboard

➕ Create Task

📋 Task List by Status

🚀 Getting Started
📦 Prerequisites
Node.js (v16+ recommended)
Python 3.10+
Docker Desktop (optional, for containerized setup)
🖥️ Run Locally (Without Docker)
🔧 Backend Setup
cd backend
python -m venv .venv

Activate virtual environment:

Windows:

.venv\Scripts\activate

Mac/Linux:

source .venv/bin/activate

Install dependencies:

pip install fastapi uvicorn sqlalchemy

Run backend:

uvicorn main:app --reload

Backend available at:
http://127.0.0.1:8000

API docs:
http://127.0.0.1:8000/docs

🎨 Frontend Setup
cd frontend
npm install
npm run dev

Frontend available at:
http://localhost:5173

🐳 Run with Docker
Start the app
docker compose up --build
Stop the app
docker compose down
🌐 App URLs
Service	URL
Frontend	http://localhost:5173
Backend	http://localhost:8000
API Docs	http://localhost:8000/docs
📁 Project Structure
task-tracker-app/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   └── tasks.db
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
├── docker-compose.yml
└── README.md
🔮 Future Improvements
Authentication (JWT login system)
Drag & drop task board (Kanban style)
PostgreSQL support instead of SQLite
Task due dates & reminders
Deployment (AWS / Render / Fly.io)
📄 License

This project is licensed under the MIT License.

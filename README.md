# Task Tracker App

A full-stack task tracking application built with:

- Frontend: React (Vite)
- Backend: FastAPI (Python)
- Database: SQLite
- Containerization: Docker + Docker Compose

---

# 🚀 Features

- Create tasks (title, description)
- View tasks by status (Open, In Progress, Completed)
- Update task status
- Delete tasks
- REST API backend
- Simple and clean UI

---

# 🧠 Architecture

The application is split into two services:

### Backend (FastAPI)
- Handles REST API
- Uses SQLAlchemy ORM
- Stores data in SQLite (`tasks.db`)
- Runs on port `8000`

### Frontend (React + Vite)
- Provides user interface
- Communicates with backend via HTTP
- Runs on port `5173`

### Docker Compose
- Runs both services together
- Handles networking between frontend and backend

---
## 🖥️ Run Locally (Without Docker)

### Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install fastapi uvicorn sqlalchemy
uvicorn main:app --reload

Backend runs at:
http://127.0.0.1:8000

API docs:
http://127.0.0.1:8000/docs

Frontend
cd frontend
npm install
npm run dev

Frontend runs at:
http://localhost:5173

🐳 Run with Docker
Prerequisites
Docker Desktop installed
Start the application

From the project root:

docker compose up --build
🌐 Access the App

Frontend:
http://localhost:5173

Backend:
http://localhost:8000

API Docs:
http://localhost:8000/docs

⛔ Stop the application
docker compose down

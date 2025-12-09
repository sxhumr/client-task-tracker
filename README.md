📌 Overview

This is a full-stack Task Manager application built as a portfolio project using the MERN stack.
It includes a Node.js/Express backend with MongoDB for data storage, and a React frontend that allows users to create, edit, update, and delete tasks.

It demonstrates your ability to build a complete production-ready CRUD application with API routing, state management, and UI/UX integration.

🚀 Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

CORS

dotenv

Frontend

React

Axios

React Hooks

CSS (or Tailwind if you choose to upgrade)

📂 Project Structure
Backend (Tasks_backend/)
Tasks_backend/
 ┣ controllers/
 ┣ models/
 ┃ ┗ Task.js
 ┣ routes/
 ┃ ┗ tasks.js
 ┣ server.js
 ┣ package.json

Frontend (Tasks_frontend/)
Tasks_frontend/
 ┣ src/
 ┃ ┣ components/
 ┃ ┣ App.js
 ┃ ┣ index.js
 ┣ package.json

🔌 API Endpoints
Base URL: http://localhost:4000/api/tasks
Method	Endpoint	Description
GET	/	Get all tasks
POST	/	Create a new task
GET	/:id	Get a specific task
PUT	/:id	Update a task
DELETE	/:id	Delete a task

🏁 Running the Project
1️⃣ Backend
cd Tasks_backend
npm install
npm start


Environment variables (.env):

MONGO_URI=your_mongodb_connection_string
PORT=4000

2️⃣ Frontend
cd Tasks_frontend
npm install
npm start


Make sure the frontend points to:

http://localhost:4000/api/tasks

🖥️ Features

Create, Read, Update, Delete (CRUD) tasks

Responsive UI

Error handling

Organized backend architecture (Models → Controllers → Routes → Server)

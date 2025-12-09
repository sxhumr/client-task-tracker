Task Manager (MERN Stack)
📌 Overview

This is a full-stack Task Manager application built as a portfolio project using the MERN stack.
It includes a Node.js/Express backend with MongoDB for data storage, and a React frontend that allows users to create, edit, update, and delete tasks.


💡 Background

The idea for this app came from a real problem I observed in a previous workplace, where the entire team relied on one shared Excel spreadsheet to manage tasks.
This caused issues such as:

Frequent data overwrites

No real-time collaboration

Difficulty tracking task ownership

No user interface for filtering or management

Manual errors and inconsistent formatting

This Task Manager was designed as a modern solution — a simple, clean web app that replaces error-prone spreadsheets with a scalable, database-driven system.

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

CSS (or Tailwind, if upgraded later)

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
Base URL
http://localhost:4000/api/tasks

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


Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=4000

2️⃣ Frontend
cd Tasks_frontend
npm install
npm start


Ensure the frontend points to the backend API:

http://localhost:4000/api/tasks

🖥️ Features

Full CRUD functionality

Clean and responsive UI

Error handling (frontend + backend)

Organized backend structure (Models → Controllers → Routes → Server)

Easy to extend with user accounts, priority levels, or deadlines

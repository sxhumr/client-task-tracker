# Task Manager (MERN Stack)

## Overview

This is a full-stack Task Manager application built as a portfolio project using the MERN stack. The application consists of a Node.js and Express backend with MongoDB for persistent storage, and a React frontend that allows users to create, view, update, and delete tasks through a clean web interface.

The project demonstrates practical full-stack development skills, including RESTful API design, database modelling, and frontend–backend integration.

---

## Background and Motivation

The idea for this application came from a real problem I observed in a previous workplace, where the entire team relied on a shared Excel spreadsheet to manage tasks.

This approach resulted in frequent data overwrites, no clear task ownership, limited visibility into task status, manual formatting errors, and poor scalability as the team grew. There was no structured system to manage tasks reliably or efficiently.

This Task Manager was designed as a modern alternative to spreadsheet-based task tracking. It provides a structured, database-driven solution that improves reliability, consistency, and maintainability while remaining simple and easy to extend.

---

## Tech Stack

### Backend

Node.js  
Express.js  
MongoDB  
Mongoose  
dotenv  
CORS  

### Frontend

React  
Axios  
React Hooks  
CSS  

---

## Project Structure

### Backend (Tasks_backend)

Tasks_backend/
├── controllers/
├── models/
│ └── Task.js
├── routes/
│ └── tasks.js
├── server.js
└── package.json


### Frontend (Tasks_frontend)

Tasks_frontend/
├── src/
│ ├── components/
│ ├── App.js
│ └── index.js
└── package.json


---

## API Endpoints

Base URL:  
http://localhost:4000/api/tasks

| Method | Endpoint | Description |
|------|---------|------------|
| GET | / | Retrieve all tasks |
| POST | / | Create a new task |
| GET | /:id | Retrieve a specific task |
| PUT | /:id | Update a task |
| DELETE | /:id | Delete a task |

---

## Running the Project Locally

### Backend Setup

cd Tasks_backend
npm install
npm start


Create a `.env` file inside the Tasks_backend directory:

MONGO_URI=your_mongodb_connection_string
PORT=4000


---

### Frontend Setup


cd Tasks_frontend
npm install
npm start


Ensure the frontend communicates with the backend API at:

http://localhost:4000/api/tasks


---

## Features

The application provides full CRUD functionality for managing tasks, includes a clean and responsive user interface, handles errors on both the frontend and backend, and uses a well-organised backend architecture that is easy to maintain and extend.

---

## Future Improvements

The system was intentionally kept focused, but it is designed to support future enhancements such as user authentication, task ownership and assignment, priority levels, deadlines, advanced filtering, and real-time updates.

---

## Why This Project Matters

This project demonstrates my ability to identify real operational problems, design practical software solutions, and implement a complete full-stack system from backend to frontend. It reflects the type of internal tooling used by real teams rather than a purely academic or tutorial-based project.

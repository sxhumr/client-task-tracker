import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tasksRouter from "./routes/taskRoutes.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", tasksRouter);

// Test route
app.get("/", (req, res) => {
  res.send("Task Manager Backend is running 🚀");
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

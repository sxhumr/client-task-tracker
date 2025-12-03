import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

function AddTask({ onTaskAdded }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await axios.post(API_URL, { title });
      onTaskAdded(res.data);
      setTitle("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Enter new task…"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;

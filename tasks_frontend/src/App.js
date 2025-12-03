import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

const PRIORITY_RANK = { low: 1, medium: 2, high: 3 };

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all"); // all | pending | completed
  const [sortOption, setSortOption] = useState("none"); // none | priority-desc | priority-asc

  // Load tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create or update task
  const handleSubmitTask = async (data) => {
    try {
      if (editingTask) {
        const res = await axios.put(`${API_URL}/${editingTask._id}`, data);
        setTasks((prev) =>
          prev.map((t) => (t._id === res.data._id ? res.data : t))
        );
        setEditingTask(null);
      } else {
        const res = await axios.post(API_URL, data);
        setTasks((prev) => [res.data, ...prev]);
      }
    } catch (err) {
      console.error("Error saving task:", err.response?.data || err.message);
      alert("Error saving task. Check console for details.");
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err.response?.data || err.message);
      alert("Error deleting task. Check console for details.");
    }
  };

  // Mark task as done
  const handleMarkDone = async (task) => {
    try {
      const updated = {
        title: task.title,
        client: task.client,
        owner: task.owner,
        importance: task.importance || "medium",
        timeframe: task.timeframe || "",
        status: "done",
        notes: task.notes || "",
      };

      const res = await axios.put(`${API_URL}/${task._id}`, updated);
      setTasks((prev) =>
        prev.map((t) => (t._id === res.data._id ? res.data : t))
      );
    } catch (err) {
      console.error("Error marking task done:", err.response?.data || err.message);
      alert("Error marking task as done. Check console for details.");
    }
  };

  const startEditing = (task) => setEditingTask(task);
  const cancelEditing = () => setEditingTask(null);

  // Apply filter + sort for display
  let visibleTasks = tasks;

  if (filterStatus === "pending") {
    visibleTasks = visibleTasks.filter((t) => t.status !== "done");
  } else if (filterStatus === "completed") {
    visibleTasks = visibleTasks.filter((t) => t.status === "done");
  }

  if (sortOption === "priority-desc") {
    visibleTasks = [...visibleTasks].sort(
      (a, b) =>
        (PRIORITY_RANK[b.importance || "medium"] ?? 0) -
        (PRIORITY_RANK[a.importance || "medium"] ?? 0)
    );
  } else if (sortOption === "priority-asc") {
    visibleTasks = [...visibleTasks].sort(
      (a, b) =>
        (PRIORITY_RANK[a.importance || "medium"] ?? 0) -
        (PRIORITY_RANK[b.importance || "medium"] ?? 0)
    );
  }

  return (
    <div className="app-root">
      <div className="app-card">
        <header className="app-header">
          <h1>Client Task Tracker</h1>
          <p>Track client work by importance, owner, and timeframe.</p>
        </header>

        {/* Toolbar: load + summary + filters */}
        <div className="toolbar">
          <div className="toolbar-left">
            <button className="btn btn-ghost" onClick={fetchTasks}>
              Load tasks
            </button>
            <span className="toolbar-summary">
              {visibleTasks.length} of {tasks.length} task
              {tasks.length === 1 ? "" : "s"} visible
            </span>
          </div>

          <div className="filter-bar">
            <div className="filter-group">
              <span className="filter-label">Status</span>
              <select
                className="input select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="filter-group">
              <span className="filter-label">Sort by</span>
              <select
                className="input select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="none">Default</option>
                <option value="priority-desc">Priority: High → Low</option>
                <option value="priority-asc">Priority: Low → High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-header">
          <h2>{editingTask ? "Edit task" : "Add new client task"}</h2>
          {editingTask && (
            <button className="btn btn-ghost" onClick={cancelEditing}>
              Cancel edit
            </button>
          )}
        </div>

        {/* Create / Edit form */}
        <TaskForm
          onSubmit={handleSubmitTask}
          initialValues={editingTask}
          mode={editingTask ? "edit" : "create"}
        />

        {/* Task list */}
        <div className="task-list-wrapper">
          {visibleTasks.length === 0 ? (
            <p className="task-empty">
              No tasks match this filter. Try changing the status or sort.
            </p>
          ) : (
            <ul className="task-list">
              {visibleTasks.map((task) => (
                <li key={task._id} className="task-item">
                  <div className="task-main">
                    <div className="task-header-row">
                      <span className="task-title">{task.title}</span>
                      <span
                        className={`badge badge-${
                          task.importance || "medium"
                        }`}
                      >
                        {task.importance || "medium"}
                      </span>
                    </div>

                    <div className="task-meta-row">
                      <span className="chip chip-client">
                        Client: {task.client || "N/A"}
                      </span>
                      <span className="chip chip-owner">
                        Owner: {task.owner || "Unassigned"}
                      </span>
                      {task.timeframe && (
                        <span className="chip chip-timeframe">
                          {task.timeframe}
                        </span>
                      )}
                    </div>

                    <div className="task-status-row">
                      <span
                        className={`status-pill status-${
                          task.status || "todo"
                        }`}
                      >
                        {task.status || "todo"}
                      </span>
                    </div>

                    {task.notes && (
                      <p className="task-notes">
                        {task.notes.length > 120
                          ? task.notes.slice(0, 120) + "…"
                          : task.notes}
                      </p>
                    )}
                  </div>

                  <div className="task-actions">
                    {task.status !== "done" && (
                      <button
                        className="btn btn-success"
                        onClick={() => handleMarkDone(task)}
                      >
                        Mark done
                      </button>
                    )}
                    <button
                      className="btn btn-secondary"
                      onClick={() => startEditing(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

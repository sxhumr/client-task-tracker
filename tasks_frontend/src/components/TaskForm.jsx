import React, { useEffect, useState } from "react";

const initialTask = {
  title: "",
  client: "",
  owner: "",
  importance: "medium",
  timeframe: "",
  status: "todo",
  notes: "",
};

function TaskForm({ onSubmit, initialValues, mode = "create" }) {
  const [form, setForm] = useState(initialTask);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialValues) {
      setForm({
        title: initialValues.title || "",
        client: initialValues.client || "",
        owner: initialValues.owner || "",
        importance: initialValues.importance || "medium",
        timeframe: initialValues.timeframe || "",
        status: initialValues.status || "todo",
        notes: initialValues.notes || "",
      });
    } else {
      setForm(initialTask);
    }
    setError("");
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.client.trim() || !form.owner.trim()) {
      setError("Title, client, and owner are required.");
      return;
    }

    setError("");
    onSubmit(form);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-row">
        <input
          name="title"
          className="input"
          placeholder="Task title"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="task-form-row">
        <input
          name="client"
          className="input"
          placeholder="Client name"
          value={form.client}
          onChange={handleChange}
        />
        <input
          name="owner"
          className="input"
          placeholder="Owner / assignee"
          value={form.owner}
          onChange={handleChange}
        />
      </div>

      <div className="task-form-row">
        <select
          name="importance"
          className="input select"
          value={form.importance}
          onChange={handleChange}
        >
          <option value="low">Low importance</option>
          <option value="medium">Medium importance</option>
          <option value="high">High importance</option>
        </select>

        <select
          name="status"
          className="input select"
          value={form.status}
          onChange={handleChange}
        >
          <option value="todo">To do</option>
          <option value="in-progress">In progress</option>
          <option value="blocked">Blocked</option>
          <option value="done">Done</option>
        </select>

        <input
          name="timeframe"
          className="input"
          placeholder="Timeframe (e.g. This week)"
          value={form.timeframe}
          onChange={handleChange}
        />
      </div>

      <div className="task-form-row">
        <textarea
          name="notes"
          className="input textarea"
          placeholder="Additional notes (optional)"
          value={form.notes}
          onChange={handleChange}
          rows={2}
        />
      </div>

      {error && <p style={{ color: "#f97373", fontSize: "0.8rem" }}>{error}</p>}

      <div className="task-form-actions">
        <button type="submit" className="btn btn-primary">
          {mode === "edit" ? "Save changes" : "Add task"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;

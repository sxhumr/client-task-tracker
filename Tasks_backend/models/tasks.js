const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    client: { type: String },
    owner: { type: String },
    importance: { type: String, default: "medium" },
    timeframe: { type: String },
    status: { type: String, default: "todo" },
    notes: { type: String }
  },
  {
    timestamps: true,
    collection: "tasks" 
  }
);

module.exports = mongoose.model("Task", taskSchema);

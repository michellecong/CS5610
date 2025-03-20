import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  function addTask() {
    onAdd({ title, date });
    setTitle("");
    setDate("");
  }

  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

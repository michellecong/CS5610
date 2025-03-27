import React, { useState } from "react";

export default function AddTask({ onAdd = () => {} }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title) {
      alert("Please add a task title");
      return;
    }

    // Check if onAdd is a function before calling it
    if (typeof onAdd === "function") {
      // Let the parent component handle the API call
      onAdd({ title, date });

      // Clear form after submission
      setTitle("");
      setDate("");
    } else {
      console.error("onAdd prop is not a function");
      alert("Something went wrong. Cannot add task.");
    }
  }

  return (
    <form className="add-task-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="task-date">Task Date</label>
        <input
          id="task-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
}

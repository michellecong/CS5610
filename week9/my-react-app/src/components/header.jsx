import React from "react";

export default function Header({ myAppName, onAddTask, showForm }) {
  return (
    <div>
      <header className="head-container">
        <h1>Welcome to {myAppName}</h1>
        <button onClick={onAddTask}>{showForm ? "Close" : "Add a Task"}</button>
      </header>
    </div>
  );
}

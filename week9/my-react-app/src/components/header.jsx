import React from "react";

export default function Header({ myAppName }) {
  return (
    <div>
      <header className="head-container">
        <h1>Welcome to {myAppName}</h1>
        <button>Add a task</button>
      </header>
    </div>
  );
}

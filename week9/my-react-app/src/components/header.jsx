import React from "react";
export default function Header({ myAppName }) {
  console.log(myAppName);
  return (
    <div>
      <header className="head-container">
        <h1>Welcom to {myAppName}</h1>
        <button>Add a task</button>
      </header>
    </div>
  );
}

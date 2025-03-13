import React from "react";
import Header from "./components/header";
import TasksList from "./components/TasksList";
("./components/TasksList");

export default function App() {
  const appName = "My Awesome App";

  return (
    <div className="App-container">
      <Header myAppName={appName} />
      <TasksList />
    </div>
  );
}

import React, { use } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  async function fetchData() {
    try {
      const response = fetch("http://localhost:3001/tasks");

      if (response.ok) {
        const data = await response.json();
        setTasksFromServer(data);
        console.log(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const appName = "My Awesome App";

  return (
    <div className="App-container">
      <Header myAppName={appName} />
      <AddTask />
      <TasksList tasks={tasksFromServer} />
    </div>
  );
}

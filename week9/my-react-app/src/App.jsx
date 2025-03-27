import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/tasks");

      if (response.ok) {
        const data = await response.json();
        setTasksFromServer(data);
        console.log(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Add a task
  const addTask = async (task) => {
    try {
      // Add task to UI immediately for better UX
      const newTask = { ...task, id: Date.now() };
      setTasksFromServer([...tasksFromServer, newTask]);

      // Then sync with server
      await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      // Refresh data from server to get the server-assigned ID
      fetchData();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });

      setTasksFromServer(tasksFromServer.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const appName = "My Awesome App";

  return (
    <div className="App-container">
      <Header myAppName={appName} />
      <AddTask onAdd={addTask} />
      <TasksList tasks={tasksFromServer} onDelete={deleteTask} />
    </div>
  );
}

import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router";
import TaskDetail from "./components/TaskDetail";

export default function App() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const controller = new AbortController();

  async function fetchData() {
    setIsLoading(true);
    try {
      const signal = controller.signal;
      const response = await fetch("http://localhost:3001/tasks", { signal });

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
    return () => {
      console.log("Cleanup");
      controller.abort();
    };
  }, []);

  // Add a task
  const addTask = async (task) => {
    try {
      const nextId =
        tasksFromServer.length > 0
          ? Math.max(...tasksFromServer.map((t) => t.id)) + 1
          : 1;
      // Add task to UI immediately for better UX
      const newTask = { ...task, id: nextId };
      setTasksFromServer([...tasksFromServer, newTask]);
      let savedTask = {};
      // Then sync with server
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (response.ok) {
        const savedTask = await response.json();
      }

      // Refresh data from server to get the server-assigned ID
      fetchData();
      return savedTask.id || nextId;
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
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header myAppName={appName} />
              <AddTask onAdd={addTask} />
            </>
          }
        />
        <Route
          path="tasks"
          element={<TasksList tasks={tasksFromServer} onDelete={deleteTask} />}
        >
          <Route path=":id" element={<TaskDetail />} />
        </Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

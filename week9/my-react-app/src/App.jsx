import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router";
import TaskDetail from "./components/TaskDetail";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => {
    setShowForm(!showForm);
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
              <Header
                myAppName={appName}
                showForm={showForm}
                onAddTask={toggleShowForm}
              />
              {showForm && <AddTask />}
            </>
          }
        />
        <Route path="tasks" element={<TasksList />}>
          <Route path=":taskId" element={<TaskDetail />} />
        </Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

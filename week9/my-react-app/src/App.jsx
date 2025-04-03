import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom"; // Fixed import
import TaskDetail from "./components/TaskDetail";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton"; // Added LogoutButton
import { useAuth0 } from "@auth0/auth0-react"; // Added useAuth0 hook

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const appName = "My Awesome App";

  // Added Auth0 status check
  const { isAuthenticated, isLoading } = useAuth0();

  // If loading, show loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App-container">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
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
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

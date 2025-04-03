import React from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile"; // Import the Profile component
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const appName = "My Awesome App";

  // Use useAuth0 hook to get authentication and loading state
  const { isAuthenticated, isLoading } = useAuth0();

  // If loading, display the Auth0 loading image
  if (isLoading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <div className="App-container">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        {/* Add profile link */}
        <NavLink to="/profile">Profile</NavLink>

        {/* Conditionally render login and logout buttons */}
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
        {/* Add profile route */}
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route
          path="/profile"
          element={<ProtectedRoute component={Profile} />}
        />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
}

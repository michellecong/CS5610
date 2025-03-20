import React, { use } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

export default function App() {
  useEffect(() => {
    console.log("App component is mounted");
  }, []);
  const appName = "My Awesome App";

  return (
    <div className="App-container">
      <Header myAppName={appName} />
      <AddTask />
      <TasksList />
    </div>
  );
}

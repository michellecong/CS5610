import React, { use } from "react";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

export default function App() {
  async function fetchData() {
    try {
      const response = fetch("http://localhost:3001/tasks");
      const data = await response.json();
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
      <TasksList />
    </div>
  );
}

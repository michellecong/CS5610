import React from "react";
import Header from "./components/header";
const tasks = [
  {
    id: 1,
    title: "Review week 9 material",
    date: "June 4th at 1 pm",
  },
  {
    id: 2,
    title: "Do quiz 9",
    date: "June 4th at 6 pm",
  },
  {
    id: 3,
    title: "Work on assignment 2",
    date: "June 5th at 8 am",
  },
];
export default function App() {
  const appName = "My Awesome App";

  return (
    <div className="App-container">
      <Header myAppName={appName} />
      <ul>
        {tasks.map((task) => (
          <li>
            <p>{task.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

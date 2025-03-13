import React, { use } from "react";
import Task from "./Task";
import { useState } from "react";

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

export default function TasksList() {
  const [tasks, setTasks] = useState([
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
  ]);
  // setTasks([]);
  console.log(tasks);
  return (
    <>
      <ul className="tasks-list">
        {tasks.map((task) => {
          return <Task key={task.id} taskObj={task} />;
        })}
      </ul>
    </>
  );
}

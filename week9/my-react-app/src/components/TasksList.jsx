import React from "react";
import Task from "./Task";

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
  return (
    <>
      <ul>
        {tasks.map((task) => {
          return <Task taskObj={task} />;
        })}
      </ul>
    </>
  );
}

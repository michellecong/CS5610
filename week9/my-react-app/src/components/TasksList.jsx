import React from "react";
import Task from "./Task";

export default function TasksList({ tasks, onDelete }) {
  return (
    <>
      <ul className="tasks-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task key={task.id} taskObj={task} onDelete={onDelete} />
          ))
        ) : (
          <li className="no-tasks">No tasks to show</li>
        )}
      </ul>
    </>
  );
}

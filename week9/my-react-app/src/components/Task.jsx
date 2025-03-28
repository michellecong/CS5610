import React from "react";
import { IoTrashSharp } from "react-icons/io5";
import { NavLink } from "react-router";

export default function Task({ taskObj, onDelete }) {
  function deletePressed() {
    onDelete(taskObj.id);
  }

  return (
    <li>
      <div className="task-container">
        <div className="taskTitleIconContainer">
          <NavLink to={`/tasks/${taskObj.id}`}>{taskObj.title}</NavLink>
          <IoTrashSharp onClick={deletePressed} />
        </div>

        <p>{taskObj.date}</p>
      </div>
    </li>
  );
}

import React from "react";
import { IoTrashSharp } from "react-icons/io5";

export default function Task({ taskObj, onDelete }) {
  function deletePressed() {
    onDelete(taskObj.id);
  }

  return (
    <li>
      <div className="task-container">
        <div className="taskTitleIconContainer">
          <p>{taskObj.title}</p>
          <IoTrashSharp onClick={deletePressed} style={{ cursor: "pointer" }} />
        </div>

        <p>{taskObj.date}</p>
      </div>
    </li>
  );
}

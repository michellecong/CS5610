import React from "react";

export default function Task({ taskObj }) {
  return (
    <li className="task">
      <div>
        <p>{taskObj.title}</p>
        <p>{taskObj.date}</p>
      </div>
    </li>
  );
}

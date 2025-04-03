import React from "react";
import { useParams } from "react-router";
export default function TaskDetails() {
  const { taskId } = useParams();

  return <div>TaskDetails of task with id:{taskId}</div>;
}

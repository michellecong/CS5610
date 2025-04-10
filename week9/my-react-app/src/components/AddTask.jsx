import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
export default function AddTask({}) {
  useAuth0();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title: title, date: date };
    console.log("new task is ", newTask);
    setDate("");
    setTitle("");
    try {
      if (isAuthenticated) {
        let token = "";
        token = await getAccessTokenSilently();
        console.log("token is ", token);
      }
      //send a post request to the server
      const response = await fetch("http://localhost:5001/api/tasks/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        if (response.status === 401) {
          alert("Unauthorized to add a task");
        }
        return;
      }
      const data = await response.json();
      console.log(data);
      if (data.acknowledged) {
        navigate(`tasks/${data.insertedId}`);
      }
      //
    } catch (err) {
      console.log("submitHandler", err);
    }
  }

  return (
    <form className="add-task-container" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task-title">Task Title</label>
        <input
          id="task-title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="task-date">Task Date</label>
        <input
          id="task-date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save Task
      </button>
    </form>
  );
}

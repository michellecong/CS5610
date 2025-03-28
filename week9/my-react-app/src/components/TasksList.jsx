import React from "react";
import Task from "./Task";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function TasksList() {
  const [tasksFromServer, setTasksFromServer] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        //fetch data from json server
        const response = await fetch("http://localhost:5001/api/tasks", {
          signal,
        });
        // if the response is 404 or 500, fetch will not throw an error
        if (response.ok) {
          const data = await response.json();
          setTasksFromServer(data);
          setIsLoading(false);
          console.log("fetchData ", data);
        } else {
          throw new Error("fetch failed");
        }
      } catch (err) {
        console.log("fetchData ", err);
      }
    }
    fetchData();
    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);
  // const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  async function deleteTask(deletedId) {
    // update the array
    console.log("delete pressed from taskslist ", deletedId);
    // const newArray = tasks.filter((task) => {
    //   return task.id !== deletedId;
    // });
    // setTasks(newArray);
    try {
      //delete from server
      const response = await fetch(
        "http://localhost:5001/api/tasks/" + deletedId,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const newArray = tasksFromServer.filter((task) => {
          return task._id !== deletedId;
        });
        setTasksFromServer(newArray);
        navigate("/tasks");
      }
    } catch (err) {
      console.log("deleteTask ", err);
    }
  }
  return (
    <>
      {isLoading ? (
        <p> Loading</p>
      ) : tasksFromServer.length === 0 ? (
        <p>No tasks left</p>
      ) : (
        <ul className="tasks-list">
          {tasksFromServer.map((task) => {
            return <Task key={task._id} taskObj={task} onDelete={deleteTask} />;
          })}
        </ul>
      )}
      <Outlet />
    </>
  );
}

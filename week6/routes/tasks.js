const express = require("express");
const router = express.Router();
const axios = require("axios");

const db = require("../db");

router.get(
  "/",
  async (req, res) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      console.log(response.data);
      res.json(response.data);
    } catch (error) {
      res.json({ message: error.message });
    }
  }

  // const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
  // promise.then((response) => {
  //   // console.log(response.data);
  //   res.json(response.data);
  // }).catch((error) => {
  //   console.log(error.message);
  // }
  // res.send("<h1>List of all the Tasks </h1>");
);

router.get("/:taskId", async (req, res) => {
  // res.send(`<h1>You are viewing Task: ${req.params.taskId} </h1>`);
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`
    );

    res.render("task", {
      id: req.params.taskId,
      title: response.data.title,
      completed: response.data.completed,
    });
    // res.json(response.data);
  } catch (error) {
    res.json({ message: error.message });
  }

  // res.render("task", { id: req.params.taskId });
});

router.get("/newtask", (req, res) => {
  res.render("taskForm");
});

router.post("/", async (req, res) => {
  try {
    console.log("Headers:", req.headers);
    console.log("Content-Type:", req.headers["content-type"]);

    console.log("req.body", req.body);
    await db.addToDB(req.body);
    // res.redirect("/tasks");
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;

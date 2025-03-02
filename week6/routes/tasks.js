const express = require("express");
const router = express.Router();
const axios = require("axios");

const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );

    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/newtask", (req, res) => {
  try {
    res.render("taskForm");
  } catch (error) {
    res.json({ message: error.message });
  }
});

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

router.post("/", async (req, res) => {
  try {
    console.log("req.body", req.body);
    await db.addToDB(req.body);
    res.redirect("/tasks");
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;

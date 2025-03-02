const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");
const axios = require("axios");

const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const cursor = await db.find();
    const tasks = await cursor.toArray();

    res.render("allTasks", { tasks });
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
    const task = await db.findOne({ _id: new ObjectId(req.params.taskId) });

    if (!task) {
      res.status(404).send("Task not found");
    }
    res.json(task);
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

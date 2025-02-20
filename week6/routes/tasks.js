const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  const promise = axios.get("https://jsonplaceholder.typicode.com/todos/");
  promise.then((response) => {
    // console.log(response.data);
    res.json(response.data);
  });
  // res.send("<h1>List of all the Tasks </h1>");
});

router.get("/:taskId", (req, res) => {
  // res.send(`<h1>You are viewing Task: ${req.params.taskId} </h1>`);

  res.render("task", { id: req.params.taskId });
});

module.exports = router;

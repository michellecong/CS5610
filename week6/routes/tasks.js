const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>List of all the Tasks </h1>");
});

router.get("/:taskId", (req, res) => {
  // res.send(`<h1>You are viewing Task: ${req.params.taskId} </h1>`);

  res.render("task", { id: req.params.taskId });
});

module.exports = router;

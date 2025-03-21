const express = require("express");
const router = express.Router();
const axios = require("axios");

module.exports = router;

router.get("/", async (req, res) => {
  // try {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos/"
  //   );
  //   console.log(response.data);
  //   res.json(response.data);
  // } catch (error) {
  //   res.json({ message: error.message });
  // }
});

router.get("/:taskId", async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`
    );

    const response2 = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${req.params.taskId}`
    );

    // res.json({
    //   id: req.params.taskId,
    //   title: response.data.title,
    //   completed: response.data.completed,
    //   name: response2.data.name,
    // });
    res.render("task", {
      id: req.params.taskId,
      title: response.data.title,
      completed: response.data.completed,
      name: response2.data.name,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

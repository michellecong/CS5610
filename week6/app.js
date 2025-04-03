// use write file
const fs = require("fs");
const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const taskRouter = require("./routes/tasks.js");

console.log(db.connect());

app.use(express.static("public"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/tasks", taskRouter);
app.get("/", (req, res) => {
  //res is responsible to send data/files
  res.send("Hello and welcome to my site");
});

const port = 5001;
app.listen(port, () => {
  db.connect();
  console.log(`Server is running on http://localhost:${port}`);
});

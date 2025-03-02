// use write file
const fs = require("fs");
const express = require("express");
const app = express();
const db = require("./db");

console.log(db.connect());

app.use(express.static("public"));
const taskRouter = require("./routes/tasks.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tasks", taskRouter);
app.set("view engine", "pug");
app.set("views", "./views");

const port = 3000;
app.listen(port, () => {
  db.connect();
  console.log(`Server is running on http://localhost:${port}`);
});

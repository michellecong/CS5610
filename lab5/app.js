const express = require("express");
const app = express();
app.use(express.static("public"));

const taskRouter = require("./routes/tasks.js");

app.use("/tasks", taskRouter);
app.set("view engine", "pug");
app.set("views", "./views");

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

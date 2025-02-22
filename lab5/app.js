const express = require("express");
const app = express();
app.use(express.static("public"));

const taskRouter = require("./routes/tasks.js");

app.use("/tasks", taskRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

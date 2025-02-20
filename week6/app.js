// use write file
const fs = require("fs");
// console.log(fs); // { writeFileSync: [Function: writeFileSync], ... }

// function writeCB() {
//   console.log("write file done");
// // }
// fs.writeFileSync("data.txt", "Hello, World!", (err) => {
//   if (err) {
//     console.log("write failed");
//   } else {
//     console.log("write file done");
//     fs.readFile("data.txt", "utf8", (err, data) => {
//       if (err) {
//         console.log("read failed");
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// const logger = require("./logger.js");
// // console.log(logger);
// logger.log();

const express = require("express");
// console.log(express);
const app = express();
console.log(app);

app.get("/", (req, res) => {
  // req: request, res: response
  console.log(req);
  res.send("Hello, Welcome to my site!");
});

app.get("/tasks", (req, res) => {
  res.send("<h1>List of all the Tasks </h1>");
  console.log(req.query);
});

app.get("/tasks/:taskId", (req, res) => {
  res.send(`<h1>You are viewing Task: ${req.params.taskId} </h1>`);
  // console.log(req.params.taskId);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

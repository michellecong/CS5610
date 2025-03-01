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
const db = require("./db");
console.log(db.connect());
// console.log(db.addToDB());

app.use(express.static("public"));

const taskRouter = require("./routes/tasks.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", taskRouter);

app.set("view engine", "pug");
app.set("views", "./views");

// console.log(app);

app.get("/", (req, res) => {
  // req: request, res: response
  console.log(req);
  res.send("Hello, Welcome to my site!");
});

const port = 3000;

app.listen(port, () => {
  db.connect();
  console.log(`Server is running on http://localhost:${port}`);
});

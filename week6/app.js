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

const logger = require("./logger.js");
// console.log(logger);
logger.log();

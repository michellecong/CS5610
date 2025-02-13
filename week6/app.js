// use write file
const fs = require("fs");
// console.log(fs); // { writeFileSync: [Function: writeFileSync], ... }

function writeCB() {
  console.log("write file done");
}
fs.writeFileSync("data.txt", "Hello, World!", (err) => {
  if (err) {
    console.log("write failed");
  } else {
    console.log("write file done");
  }
});

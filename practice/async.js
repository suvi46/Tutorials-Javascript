//--------------------async example-------------------
console.log("start asynchronus behaviuor check");
setTimeout(() => {
  for (let i = 0; i <= 3; i++) {
    console.log("execute for loop" + i);
  }
}, 5000);
console.log("end Async behaviuor check");

//async example to read file
const fs = require("fs");
fs.readFile(
  "E:/Tutorials-Javascript/practice/suvi.txt",
  "utf-8",
  (error, data) => {
    console.log(data);
  }
);
console.log("suwarna");

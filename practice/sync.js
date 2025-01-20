console.log("start synchronus behaviuor check");
for (let i = 0; i <= 3; i++) {
  console.log("execute for loop" + i);
}
console.log("end sync behaviuor check");

//sync example to read file
const fs = require("fs");

const data = fs.readFileSync(
  "E:/Tutorials-Javascript/practice/suvi.txt",
  "utf-8"
);
console.log(data);
console.log("end of file read");

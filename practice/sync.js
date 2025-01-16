console.log("start synchronus behaviuor check");
for (let i = 0; i <= 3; i++) {
  console.log("execute for loop" + i);
}
console.log("end sync behaviuor check");

console.log("start asynchronus behaviuor check");
setTimeout(() => {
  for (let i = 0; i <= 3; i++) {
    console.log("execute for loop" + i);
  }
}, 5000);
console.log("end Async behaviuor check");

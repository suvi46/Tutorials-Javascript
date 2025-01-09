function checkScope() {
  for (var i = 0; i < 3; i++) {
    console.log(`check inside loop ${i}`);
  }
  console.log(`check outside loop ${i}`);
}
checkScope();
for (let j = 0; j < 2; j++) {
  console.log(`check j inside loop ${j}`);
}
//console.log(`check j outside loop ${j}`); //throws error as let is block scoped variable

//--------for below loop it will throw error as reassignment is not allowed for const variable
// for (const k = 0; k < 2; k++) {
//   console.log(`check k inside loop ${j}`);
// }

//-----------hoisting-----TDZ----
console.log(a);
var a = 10;
// console.log(a);
// let a = 10;
// console.log(b);
// const b = 20;

let myBestMeal = function () {
  console.log(bestFood);
  var bestFood = "Vegetable Fried Rice"; //for let and const it will throw reference error that cannot access befor init
  console.log(bestFood);
};
myBestMeal();

console.log("4" * 3);

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); //output: 3  3  3 // as var is function scoped and not block scoped 
}

for (let s = 0; s < 3; s++) {
  setTimeout(() => console.log(s), 1000); //output: 0  1  2
}
const a1 = 10;
let b1 = 20;
{
  const a1 = 30;
  let b1 = 40;
  console.log(a1, b1); //30,40
}
console.log(a1, b1); //10,20

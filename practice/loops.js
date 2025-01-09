//repetative work
//for loop :
// 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("print 1 to 10: " + i);
}

console.log("now let's check for of loop");
//for..... of loop;
const array = [1, 2, 3, 4, 5, 6];
for (const e of array) {
  console.log("read array values: " + e);
}
console.log("now let's check array with simple for loop");
for (let i = 0; i < array.length; i++) {
  console.log("read array with simple for loop" + array[i]);
}

//note: for......of loop is simple and is mostly used

//while loop
console.log("now let's check while loop");
//print odd numbers from 10 to 20

let x = 11;
while (x <= 20) {
  console.log("odd numbers: " + x);
  x = x + 2;
}
//print 30 to 35
let y = 30;
while (y <= 35) {
  console.log(y);
  y++; //++y or y=y+1
}
//d0-while loop
console.log("now let's check do-while loop");

let p = 4;
do {
  console.log(p);
  p++;
} while (p <= 10);

console.log("break condition in whileloop");

let num = 3;
while (num <= 50) {
  console.log(num);
  if (num % 6 == 0) {
    console.log("this number is multiplied by 6");
    break; //break the while loop once we get first multiplied number by 6 and if we remove break it will check till num=50
  }
  num++;
}

//
console.log("break condition in for-of loop");

const browser = ["chrome", "firefox", "edge", "IE"];
for (const r of browser) {
  console.log("browser is: " + r);
  if (r == "edge") {
    console.log("launch this browser: " + r);
    break; //break the for loop once the condition get fulfilled
  }
}

console.log("for in loop an iterate object");
const user = {
  name: "Suvi",
  city: "Pune",
  age: "28",
};
for (const eg in user) {
  console.log(eg + ": " + user[eg]);
}

console.log("for in loop an iterate simple array");

const browser1 = ["chrome", "firefox", "edge", "IE"];
for (const br in browser1) {
  console.log("value is: " + browser1[br]); // if we just print br then it will return index value of array like 0, 1,...So in for-in loop array[br] need to return
  console.log(br + "th value is: " + browser1[br]);
}

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

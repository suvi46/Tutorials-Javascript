// map-----filter-----reduce

//1. map: creates new array by manipulating first array
let m1 = [2, 3, 4, 5, 6, 7];
let m2 = m1.map((e) => (e = e * 2));
console.log(m2);
//F to Celsius : F-32*5/9
let tempFah = [32, 68, 104, 212, 68];
function fahToCels(fah) {
  return (fah - 32) * (5 / 9);
}
let tempCels = tempFah.map(fahToCels);
console.log(tempCels);

//2. filter: filter data from array
let n1 = [1, 2, 6, 8, 10, 3, 4, 5, 7, 9];
let evenNums = n1.filter((e) => e % 2 === 0);
console.log(evenNums);

//
let employee = [
  {
    name: "a",
    age: "25",
    gender: "M",
  },
  {
    name: "b",
    age: "26",
    gender: "F",
  },
  {
    name: "c",
    age: "20",
    gender: "F",
  },
  {
    name: "d",
    age: "33",
    gender: "F",
  },
  {
    name: "e",
    age: "35",
    gender: "M",
  },
  {
    name: "f",
    age: "38",
    gender: "M",
  },
];
let femaleEmp = employee.filter((emp) => {
  return emp.gender === "F" && emp.age > 25;
});
console.log(femaleEmp);
//3.Reduce.
let temp = [2, 4];
let reducedResult = temp.reduce((acc, num) => acc * num, 3);
let reducedResult1 = temp.reduce((acc, num) => acc * num);
let reducedResult2 = temp.reduce((acc, a) => acc + a);

console.log(reducedResult);
console.log(reducedResult1); //initial value for acc not set. soit will take 1st value from array and start reduction process from 2nd
console.log(reducedResult2);

//max number find in array

let findMaxNums = [2, 5, 8, 99, 77, 66, 55, 44, 33, 22, 123, 133];
let maxNum = findMaxNums.reduce((initialNum, arrayNum) => {
  if (arrayNum > initialNum) {
    return arrayNum;
  } else {
    return initialNum;
  }
}, findMaxNums[0]);

console.log(maxNum);
let minNum = findMaxNums.reduce((initialNum, arrayNum) => {
  if (arrayNum < initialNum) {
    return arrayNum;
  } else {
    return initialNum;
  }
}, findMaxNums[0]);

console.log(minNum);

// calculate cart total price for all available items in cart

let cart = [
  { product: "shoes", price: 20 },
  { product: "shirt", price: 25 },
  { product: "dress", price: 200 },
  { product: "hoodie", price: 2000 },
  { product: "accessory", price: 180 },
];
let totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice);

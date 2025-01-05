/**
 *  Array & 10 Important Arrays Functions in JavaScript
 */

//declaration of array
let myArray = []; //empty array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

let lang = ["Java", "Python", "JS"];
//1. push: it will add mentioned values in the end of array
lang.push("Ruby");
console.log(lang);
// muliple values
lang.push("C#", "html");
console.log(lang);

//2.Pop: removed last element from the array.
let s1 = numbers.pop();
console.log(numbers);
console.log("removed number: " + s1);

//3. SHift: removes first element from the array
let s2 = fruits.shift();
console.log(fruits + " .Removed fruit: " + s2);

//4. Unshift: insert new elements at the start of array
let colors = ["red", "blue", "yellow"];
console.log(colors.length);
colors.unshift("black", "pink");
console.log(colors);
console.log(colors.length);

//5. splice: remove and replace specific index element from array
let animals = ["dog", "cat", "tiger"];
console.log(animals);
animals.splice(1, 2); //only removed specific index values (starting from 1 index and total 2 values deleted)
console.log(animals);

// now remove and add more values
let terms = ["automation", "test", "qa", "bug", "case", "scenario"];
terms.splice(2, 3, "regression", "sanity", "api", "logs");
console.log(terms);

//6. slice: returns new array from original array based on specified start index and end index will not be incluede
let math = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(math);
let newMath = math.slice(4, 6);
console.log(newMath);
let newMath1 = math.slice();
console.log(newMath1);

//7.concat: combine 2 or more arrays and create new array
let array1 = ["a1", "a2", "a3", "a4"];
let array2 = [99, 10, 33];
let combinedArray1 = array1.concat(array2);
console.log(combinedArray1);
let combinedArray2 = array2.concat(array1);
console.log(combinedArray2);

//8. indexOf: finds index of specified element from the array

let test = [9, 10, 11, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test1 = ["blue", "red", "pink", "black", "red", "orange"];
let index = test.indexOf(88); //it will return -1 as 88 is not there in test array
console.log(index);

let indexFind = test.indexOf(8); //it will returns index number of 8 which will occured 1st in array
let indexFind1 = test1.indexOf("red"); //it will returns index number of Red which will occured 1st in array
console.log(indexFind);
console.log(indexFind1);
//now let's find the index number on 2nd occurance
let indexFind2 = test.indexOf(8, 4); // start finding index number for 8 after index 4
let indexFind3 = test.indexOf(8, test.indexOf(8) + 1); // start finding index for 8 after +index of 1st occurance
console.log(indexFind2);
console.log(indexFind3);

//9. includes:
let students = ["a", "b", "c", "d", "e"];
let flag = students.includes("c"); // find whether this value exists in array or not: returns boolean value
console.log(flag);
let flag1 = students.includes("c", 3); // find whether this value exists in array after 3rd index or not: returns boolean value
console.log(flag1);

//10: forEach: it calls a function for each element in an array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach((e) => {
  console.log(e); //it will print 1 to 10 from nums array
  console.log(e * 5); //it will multiply each element with 5 from nums array
});

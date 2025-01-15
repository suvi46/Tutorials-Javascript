//1.find unique values in an array
const array_1 = [1, 2, 3, 4, 1, 3, 4, 2, 1, 2, 4, 6, 7, 8, 8, 7, 9, 4, 1];
const uniqueArray = [...new Set(array_1)]; //spread operator:allows us to quickly copy all or part of an existing array or object into another array or object.
console.log("unique values from array" + uniqueArray);

//with spread operator we can combine 2 arrays or objects also:
const array_2 = [10, 11, 12];
const array_3 = [...new Set(array_1), ...array_2]; // JavaScript Set is a collection of unique values
const array_4 = [...array_2, "av", "bn", ...array_2];
console.log("combined array3: " + array_3);
console.log("combined array4: " + array_4);
console.table(array_4);

console.log("min number from array1: " + Math.min(...array_1));

//2. int to string
const num = 18;
console.log("before num to string add 18+20: " + num + 20); //it will add both nums // before conversion to string

const numStr = num + "";
console.log("num to string: " + numStr);
console.log(numStr + 20); //it will print both numbers instead of addition as numStr is in string

//Or
const num1 = 18;
const numStr1 = num1.toString();
const numStr2 = String(num1);
console.log(numStr1 + 11);
console.log(numStr2 + 13);

// 3. float to int
const floatnum = 3.99;
const floatnum1 = 3.49;
const floatConv = parseFloat(num1);
const intnum = parseInt(floatnum);
console.log("converted to float: " + floatConv); //18
console.log("converted to int from float: " + intnum); //3

// rounding of to nearest number
const rondofnum = Math.round(floatnum);
const rondofnum2 = Math.round(floatnum1);

console.log("rounding of float num: " + rondofnum + " and num2: " + rondofnum2); //4 and 3

// 4. check if it is a number
const a = 10;
const astr = "b";
if (a.valueOf === "number" && !isNaN(a)) {
  console.log("it is a number");
} else {
  console.log("it is not a number");
}

// 5. swap variable values
let a1 = 10;
let b1 = 20;
[b1, a1] = [a1, b1];
console.log(a1, b1);
//6. checkif object has a property
const person = {
  name: "suvi",
  age: "25",
};
if (person.hasOwnProperty("age")) {
  console.log("yes it has age property");
} else {
  console.log("no it does not have age property");
}
//7.remove falsy values from the array
const array1 = [
  1,
  2,
  3,
  0,
  null,
  false,
  1,
  2,
  3,
  NaN,
  undefined,
  44,
  false,
  0,
  null,
];
const falsyRem = array1.filter(Boolean);
console.log("rmeoved falsy values: " + falsyRem);
//8. string: uppercase,lowercase
const strng1 = "Hello World";
const u1 = strng1.toUpperCase();
console.log("uppercase :" + u1);
const L1 = strng1.toLowerCase();
console.log("lowercase :" + L1);

//9. check if array contains a value
const lang1 = ["js", "java", "python"];
if (lang1.includes("java")) {
  console.log("yes it contains java value");
} else {
  console.group("no it doesn't contains java value");
}

//10.check if specific array is empty or not
const emptyArray = [];

if (emptyArray.lenght === 0) {
  console.log("array is empty");
}

//11. generate random number between 10 to 100
const min = 10;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log("random number between 10 to 100: " + randomNumber);

//12. int to string
const strNum = "12.0";
const numint = parseFloat(strNum);
console.log(numint);

//13.join array elements into string
const words = ["hello", "suvi"];
const joinedWords = words.join(", ");
console.log(joinedWords);
//14.get object property
const person1 = {
  name: "suvi",
  age: "25",
};
console.log(person1.name);
console.log(person1["name"]);

//15.clone an array or object
const marks = [19, 33, 20, 25, 30];
const copyMarksArray = [...marks];
console.log(copyMarksArray);
console.log({ ...person1 });

//16. convert object to array
const person2 = {
  name: "suvi2",
  age: "25",
};

//a array of keys
const keys = Object.keys(person2);
console.log(keys);
//b. array of values
const values = Object.values(person2);
console.log(values);
//17.get current date and time

const currentDate = new Date(); //create object of new date
console.log(currentDate.toLocaleString());
console.log(currentDate.toLocaleDateString());
//18.check if variable is defined or not
let i;
if (typeof i === "undefined") {
  console.log("variable is not defined/initialized");
}
console.log(i);

//19.truncate ean array
const testing = [0, 1, 2, 3, 4];
console.log(testing.length);
testing.length = 2;
console.log(testing.length);

//20 find last item in array
const pop = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const n1 = pop.slice(-1);
console.log(n1);
console.log(pop.splice(-1));

console.log(pop.pop(0));

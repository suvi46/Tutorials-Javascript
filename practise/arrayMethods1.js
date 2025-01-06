// 1. every()
// 2. some()
// 3. find()
// 4. indexOf()
// 5. lastIndexOf()
// 6. reverse()
// 7. sort()

//1. every: returns true if all elements matches condition defined in function / returns false if any element fails the condition
let checkEachEle = [1, 2, 3, 4, 5];
let checkEachEle1 = [11, 22, 33, 4, 55];
let res1 = checkEachEle.every((e) => e < 10);
let res2 = checkEachEle1.every((e) => e > 10);
console.log("1st res: " + res1 + "------2nd res: " + res2);

//2. some: atleast 1 element should satisfies the condition-> true and false : if no element satisfies the condition
let checkSome1 = [22, 1, 2, 30, 22, 44, 33];
let checkSome2 = [22, 33, 44, 5];
let res11 = checkSome1.some((e) => (e = 1));
let res22 = checkSome2.some((e) => e % 2 === 0);
console.log("1st res: " + res11 + "------2nd res: " + res22);

//3. find: gives the 1st element from array which satisfies the condition

let findEle = [22, 1, 2, 30, 22, 44, 33];

let res31 = findEle.find((e) => e % 2 === 0);
console.log(res31);
let res32 = findEle.find((e) => e > 40);
console.log(res32);

// 4.indexOf
let fruits = ["apple", "banana", "orange"];
let res41 = fruits.indexOf("banana");
console.log(res41);

//5.lastIndexOf : returns last index of elements
let fruits1 = [
  "apple",
  "banana",
  "orange",
  "apple",
  "strawberry",
  "peer",
  "muskmelon",
  "apple",
  "s",
  "t",
];
let res51 = fruits1.lastIndexOf("apple");
console.log(res51);

//6. reverse
let fruits2 = [
  "apple",
  "banana",
  "orange",
  "apple",
  "strawberry",
  "peer",
  "muskmelon",
];
let res61 = fruits2.reverse("apple");
console.log(res61);
//7.sort
let assets = [
  "mac",
  "win",
  "iphone",
  "android",
  "m1air",
  "12stest",
  "Mac",
  "Win",
  "MAC",
  "CAT"
];
let res71 = assets.sort();
console.log(res71);

let numbers = [9, 22, 11, 2, 3, 4, 5];
let nums = [5, 6, 3, 7, 8, 9, 1, 4, 1.1];
let res72 = numbers.sort();
console.log(res72);
let res73 = nums.sort();
console.log(res73);
// note: numbers 1st then capital letters ,then small letters

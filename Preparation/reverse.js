// case1: reverse a num : 1234 ,4321

//way 1: without using built in methods of js
function reversenum(num) {
  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log(reversenum(245));
console.log(reversenum(2485));

//way 2: using built-in methods
function reversenum2(number) {
  let reversedStringNum = number.toString().split("").reverse().join("");
  console.log(reversedStringNum);
  let finalReversed = parseInt(reversedStringNum);
  console.log(finalReversed);
}

reversenum2(123456);

//case 2: reverse a string
// way1: using built in methods
function reverseStr(str) {
  let reversed = str.split("").reverse().join("");
  return reversed;
}
console.log(reverseStr("hello"));

//way2: without using built in

function reverseStr1(str1) {
  let reversedStr1 = "";
  for (i = str1.length - 1; i >= 0; i--) {
    reversedStr1 += str1[i];
  }
  return reversedStr1;
}
console.log(reverseStr1("coffee"));


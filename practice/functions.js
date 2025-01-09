//ways of declaring functions:
//1. Function expression:
function add(a, b) {
  return a + b;
}
const sum = add(3, 6);
console.log(sum);

// only print
function print() {
  console.log("hi suvi here");
}
print();

//2. function expression: call function with variable name

const multiply = function (c, d) {
  return c * d;
};
const mult = multiply(2, 3);
console.log(mult);

// 3. arrow function:
const divide = (e, f) => e / f;
const div = divide(4, 2);
console.log(div);

const multiplication = (g, h) => g * h;
const multiRes = multiplication(4, 6);
console.log(multiRes);

// 4. Function Constructor:
const subsctraction = new Function("a", "b", "return a-b;");
const res1 = subsctraction(20, 11);
console.log(res1);

//5. IIFE (Immediately invoke Function Expression)
(function () {
  console.log("server is running on port 3000");
})();
//function will self invoke .no nee dto callfunction seperately

//6.Generator Function:
function* generateNumberSeq() {
  yield "Helow";
  yield "1";
  yield "2";
  yield "Done";
}

const generate = generateNumberSeq();
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);

//7. Annonymous function:
//no specific name
const numbers = [1, 2, 3, 4, 5, 6];

const squareOfNum = numbers.map((e) => {
  return e * e;
});
console.log(squareOfNum); //returns square of each number in array

//8. recursive function: function call itself while execution

//factorial of number: 4 = 4*3*2*1=24

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(10));

//9. Higher order function:
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}

function operate(funcName, a, b) {
  return funcName(a, b);
}
console.log(operate(mul, 2, 3));
console.log(operate(sub, 2, 3));
console.log(operate(add, 2, 3));

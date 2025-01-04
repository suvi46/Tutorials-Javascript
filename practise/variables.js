/**
 * Demonstrating `var`:
 * 1. Scope: Function-scoped or global-scoped.
 * 2. Redeclaration and reinitialization are allowed.
 * 3. Default value is `undefined`.
 * 4. Issues with block scope.
 */

console.log("Starting validations for `var` variables:");

var x = 10; // Global scope
function test() {
  var y = 20; // Function-scoped
  console.log(y); // 20
}
test();
console.log(x); // 10
// console.log(y); // Error: `y` is not defined outside the function.

var pop = "hi pop";
function rel() {
  var top = "hello top"; // Function-scoped
  console.log(top); // "hello top"
}
rel();
console.log(pop); // "hi pop"

// Redeclaration of variables
var browser = "firefox";
var browser = "chrome"; // Allowed
console.log(browser); // "chrome"

// Reinitialization of variables
var g = "hi g";
g = "hi g again"; // Allowed
console.log(g); // "hi g again"

// Default value when not defined
var flag;
console.log(flag); // undefined

// Issues with block scope
var discount = 10;
if (discount > 9) {
  var discount = 30; // Redeclaration in the same scope
  console.log(discount); // 30
}
console.log(discount); // 30 (block-scoped `discount` overrides the global one)

/**
 * Demonstrating `let`:
 * 1. Scope: Block-scoped, global, or inside functions.
 * 2. Cannot be redeclared in the same scope.
 * 3. Can be reinitialized.
 */

console.log("Starting validations for `let` variables:");

let a = 90;
console.log(a); // 90

// `let` inside a function
function test1() {
  let b = 88; // Block-scoped to this function
  console.log(b); // 88
}
test1();

let msg = 55; // Global scope
console.log(msg); // 55

// Block scope example
if (msg < 60) {
  let msg = 77; // New block-scoped variable
  console.log(msg); // 77
  let msg1 = 88; // Another block-scoped variable
  console.log(msg1); // 88
}

console.log(msg); // 55 (global `msg`)

// Default value when not defined
let flag2;
console.log(flag2); // undefined

//reinitialize variable
let n = "start";
console.log("initial: " + n);
n = "start new";
console.log("Reinitial: " + n);

/**
 * Demonstrating `const`:
 * 1. Scope: Block-scoped, global, or inside functions.
 * 2. declarations must be initialized
 * 3. Cannot be redeclared
 * 4. Cannot be reinitialized.
 */

console.log("Starting validations for `let` variables:");

// Default value when not defined
const flag1 = 55;
console.log(flag1); // undefined
function test() {
  const flag1 = 56;
  console.log(flag1);
}
test();
console.log(flag1);

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(typeof a);
      return a + b;
    case "-":
      return a - b;
    case "/":
      return b !== 0 ? a / b : "can not divide by 0";
    case "%":
      return a % b;
    case "**":
      return a ** b;
    case "++":
      return a++;
    default:
      console.log("ivalid operator");
  }
}
console.log(calculator(2, 3, "+"));
console.log(calculator(2, 0, "/"));
console.log(calculator(13, 11, "%"));
console.log(calculator(11, 2, "**")); //square of 11 : i.e., 2 exponential of 11
console.log(calculator(1, 22, "++"));

const name = "suvi";

console.log(`my name is ${name}`);

const a = 11;
const b = 22;
const result = `addition of ${a} and ${b} is ${a + b}`;

console.log(result);

//real time example
function getXpath(name) {
  return `//input[@id='${name}']`;
}
console.log(getXpath("suvi"));

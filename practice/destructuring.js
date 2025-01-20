const marks = [1, 2, 3];
const [a, b, c] = marks;
console.log(a);
const user = { name: "s", age: 22 };
const { name, age, city = "pune" } = user;
console.log(name);
console.log(age);
console.log(city);

//without destructuring
function printUserName(person) {
  console.log(person.name + " " + person.lastName);
}

const person = { name: "test1", lastName: "b" };
printUserName(person);

//with destructuring:
function printUserName1({ lastName }) {
  console.log(name + " " + lastName);
}

const person1 = { name: "test11", lastName: "bn" };
printUserName1(person1);

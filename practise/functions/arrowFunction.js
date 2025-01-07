const square = (num) => num * num;
const result = square(4);
console.log(result);

//msg
const msg = () => "hello";
console.log(msg());

//sum
const sum = (a, b) => a + b;
console.log(sum(2, 3));

const getFullName = (person) => `${person.firstName} ${person.lastName}`;
const userDetails = { firstName: "suvii", lastName: "g" };
const fullName = getFullName(userDetails);
console.log(fullName);

const example1 = ((username = "guest"), (age = 1)) => 'hello, ${username} . you are ${age} old';
const g1= example1();
console.log(g1);
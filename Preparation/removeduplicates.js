const numbers = [
  23, 21, 22, 24, 45, 1, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 4, 5, 2, 21, 20,
];
const names = [
  "suvi",
  "test",
  "suvi",
  "jiya",
  "priya",
  "tina",
  "jiya",
  "suvi",
  "test",
  "inu",
];

const uniquenumbers = [...new Set(numbers)];
console.log(uniquenumbers);
 const uniqueNames =[...new Set(names)]
 console.log(uniqueNames);

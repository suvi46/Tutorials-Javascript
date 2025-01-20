//log
console.log("can log message ");

//table
user = [
  {
    name: "suvi",
    age: "30",
  },
  {
    name: "s",
    age: "20",
  },
];
console.table(user);
//grouping
console.group("group created");
console.log("redirected to login screen");
console.log("entered all login details");
console.log("login initiated");
console.log("login successful");
console.groupEnd();
//timer
console.time("time required to print 1 to N");
for (let i = 0; i <= 10; i++) {
  console.log("print: " + i);
}
console.timeEnd("time required to print 1 to N");
//clear
//console.clear();
//assert
console.log("let's check assert");
console.assert(10 == 100, "error message for failure");
//trace
console.trace()
//color,font
console.log(
  "%c I love javascript coding",
  "color:red; background-color:lightblue; border:solid"
);

console.log(
  "%c I love JavaScript coding!",
  "color: white; background-color: darkblue; border: solid 2px white; padding: 5px; font-size: 16px; border-radius: 4px;"
);

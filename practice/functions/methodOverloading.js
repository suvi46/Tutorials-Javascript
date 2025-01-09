//Overloading is not supported in JavaScript, but we can implement the function Overloading on our own, which is pretty much complex when it comes to more numbers and more types of arguments

function print() {
  console.log("function1");
}
function print(arg1) {
  console.log("function2");
}
function print(arg1, arg2) {
  console.log("function3");
}

print(); //it will overwrite 1st 2 functions

//------------so overloading is not supported in JS. We can use below way to implement function overloading

function browser1(browser, browserVersion, remoteExecution) {
  if (
    typeof browser === "string" &&
    typeof browserVersion === "number" &&
    typeof remoteExecution === "boolean"
  ) {
    console.log(
      `browsername test:${browser}, vers:${browserVersion},remoteexe:${remoteExecution},`
    );
  } else if (
    typeof browser === "string" &&
    typeof browserVersion === "number"
  ) {
    console.log(`browsername test:${browser}, vers:${browserVersion}`);
  } else {
    console.log(`browsername test:${browser}`);
  }
}
browser1("2");
browser1("chromw", 2);
browser1("chromw", 2, false);

//async function wihout await:

async function f1() {
  console.log("this is async function1 ");
  return 44;
}
f1().then((result) => {
  console.log(result);
});

async function f2() {
  console.log("this is async function2 ");
  throw new Error("this is error for function2");
}
f2().catch((error) => {
  console.log(`error for function2 is: ${error}`);
});

function getInfo() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    setTimeout(() => {
      console.log("this is promise function function3 ");

      if (randomNum < 0.5) {
        resolve(42);
      } else {
        reject(new Error("wrong number and does not meet condition"));
      }
    }, 2000);
  });
}
//getInfo();

async function getNumberInfo() {
  try {
    const result = await getInfo();
    console.log("getinfo result: ", result);
  } catch (error) {
    console.log("error:", error);
  }
}
getNumberInfo();

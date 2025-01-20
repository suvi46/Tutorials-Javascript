// const randomNumberPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const randomNum = Math.random();
//     if (randomNum > 0.5) {
//       resolve(randomNum);
//     } else {
//       reject(new Error("number is smaller than 0.5"));
//     }
//   }, 2000);
// });
// randomNumberPromise
//   .then((result) => {
//     console.log("promise is fulfilled with: ", result);
//   })
//   .catch((error) => {
//     console.error("promise is rejected with error: ", error);
//   });

//-----another example

const count = true;
let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("success");
  } else {
    reject("reject");
  }
});
console.log(countValue);

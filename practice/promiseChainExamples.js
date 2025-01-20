function getEvenNum(value, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (value % 2 == 0) {
        resolve(value);
      } else {
        reject(new Error("it is not a even number"));
      }
    }, delay);
  });
}
//promise chain
getEvenNum(22, 2000)
  .then((result) => {
    console.log("step1: getting the even result: ", result);
    return getEvenNum(7, 2000);
  })
  .then((result) => {
    console.log("step2: getting the even result: ", result);
  })
  .catch((error) => {
    console.log("not a even num", error.message);
  });

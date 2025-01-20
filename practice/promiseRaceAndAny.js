//case: 1 function resolve and 1 is rejected

const getData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getData1 result data for fun2");
    }, 2000);
  });
};
const getData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getData2 result data for fun2");
    }, 1000);
  });
};
const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error :geterror2 result data for fun2");
    }, 1000);
  });
};
Promise.race([getData1(), getError()])
  .then((getdataresult) => {
    console.log("success ", getdataresult);
  })
  .catch((error) => {
    console.error("now error1 returning", error);
  });

Promise.any([getData2(), getError(), getData1()])
  .then((getdataresult) => {
    console.log("success ", getdataresult);
  })
  .catch((errors) => {
    console.error("all the promises rejected", errors);
  });

//Promise.any() also returns the fastest promise but it returns the fastest fulfilled promise
//Promise.race() returns the fastest settled promise, doesn’t matter whether any of the promises is rejected or resolved. And if all promises are rejected it will still return the fastest rejected promise

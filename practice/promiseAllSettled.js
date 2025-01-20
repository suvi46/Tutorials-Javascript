//case: 1 function resolve and 1 is rejected

const getData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getData1 result data for fun2");
    }, 2000);
  });
};
const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error :geterror2 result data for fun2");
    }, 2000);
  });
};

Promise.allSettled([getData1(), getError()]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("fulfilled", result.value);
    } else {
      console.error("reason for rejected", result.reason);
    }
  });
});

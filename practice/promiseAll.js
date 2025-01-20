//Case 1: all functions resolved

const function1 = () => {
  return new Promise((resolve, reject) => {
    //resolve("function1: data for fun1");
    const data = [1, 2, 3];
    resolve(data);
  });
};
const function2 = () => {
  return new Promise((resolve, reject) => {
    resolve("function2 result data for fun2");
  });
};
Promise.all([function1(), function2()])
  .then((dataArray) => {
    console.log("successfully resolved", dataArray);
  })
  .catch((error) => {
    console.error("rejected", error);
  });

//case2: 1 function resolve and 1 is rejected

const getData1 = () => {
  return new Promise((resolve, reject) => {
    resolve("getData1 result data for fun2");
  });
};
const getError = () => {
  return new Promise((resolve, reject) => {
    reject("geterror2 result data for fun2");
  });
};

Promise.all([getData1(), getError()])
  .then((getdataresult) => {
    console.log("success for case2", getdataresult);
  })
  .catch((error) => {
    console.error("now error1 returning", error);
  });

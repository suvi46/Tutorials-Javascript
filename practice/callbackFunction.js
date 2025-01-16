function test(name, callback) {
  console.log(name + "  using callback function in test ");
  callback();
}
function welcome() {
  console.log("welcome to javascript tutorial");
}
test("Hi Suvi", welcome);

function test1(name, callback) {
  //async func
  setTimeout(() => {
    console.log("using callback function in test1: display msg for " + name);
    callback("passing msg in callback func display the msg");
    //callback();
  }, 3000); //delay of 3sec (3000ms)
}
function display(msg) {
  //msg = "msg test"; //passing msg hardcoded in callback func
  console.log(msg);
}
test1("suwarna", display);

function fetchUserData(userID, callback) {
  //async function
  setTimeout(function () {
    const usersData = {
      1: { id: 1, name: "suvi" },
      2: { id: 2, name: "test" },
    };
    const user = usersData[userID];
    if (user) {
      handleUserData(null, user);
    } else {
      handleUserData("user not found", null);
    }
  }, 5000);
}

//create callback function for fetchUserData
function handleUserData(error, user) {
  if (error) {
    console.error("error", error);
  } else {
    console.log("user data", user); //with , it will concatenate
  }
}

fetchUserData(1, handleUserData);
fetchUserData(3, handleUserData);

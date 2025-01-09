function checkDayOfWeek(dayNumber) {
  let day;
  switch (dayNumber) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Invalid");
      break;
  }
  return day;
}
console.log(checkDayOfWeek(5));
console.log(checkDayOfWeek(0));
console.log(checkDayOfWeek(1));
console.log(checkDayOfWeek(30));

// another example

let browser = "chrome";
switch (browser) {
  case "chrome":
    console.log("launch chrome");
    break;
  case "firefox":
    console.log("launch firefox");
    break;
  case "edge":
    console.log("launch edge");
    break;
  default:
    console.log("please pass the right browser");
    break;
}

// we can use to setup mulitpe env : dev,qa ,stage,uat
function playGame(playerChoice) {
  switch (playerChoice) {
    case "rock":
      console.log("winner is rock");
    case "paper":
      console.log("winner is paper");
    case "m":
      console.log("winner is m");
  }
}
playGame("rock");

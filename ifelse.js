//simple if else
function checkAge(age) {
  if (age >= 18) {
    console.log("You are eligible for voting");
  } else {
    console.log("Sorry,You are not eligible for voting");
  }
}
checkAge(10);
checkAge(18);
checkAge(20);
checkAge(0);

//multiple conditions

function checkNumber(number) {
  if (number > 0) {
    console.log("number is +ve");
  } else if (number < 0) {
    console.log("number is -ve");
  } else {
    console.log("0 number found");
  }
}

checkNumber(10);
checkNumber(0);
checkNumber(-1);

//nested if else
function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
    console.log("A grade acquired");
  } else {
    if (score >= 80) {
      grade = "B";
      console.log("B grade acquired");
    } else {
      if (score >= 70) {
        grade = "C";
        console.log("C grade acquired");
      } else {
        grade = "D";
        console.log("D grade acquired");
      }
    }
  }
  console.log(grade);
}
checkGrade(91);
checkGrade(85);
checkGrade(71);
checkGrade(60);
checkGrade(37);

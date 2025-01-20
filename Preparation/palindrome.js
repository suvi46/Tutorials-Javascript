//check if the given string is palindrome

//way1 : using built in functions:

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  if (reversed === str) {
    console.log("string is palindrome");
  } else {
    console.log("string is not palindrome");
  }
}

isPalindrome("mom");
isPalindrome("hello");

//way2: without using function2



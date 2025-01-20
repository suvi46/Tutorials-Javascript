//check if 2 strings are anagram or not
// example: Tea and Eat

//way1: using built in methods
function checkAnagram(str1, str2) {
  //step1: make string to lowercase an dremove spaces,tabs,etc
  str1 = str1.toLowerCase();
  console.log(str1);
  str1 = str1.replace(/\s+/g, ""); //\s: replaces space, tab,new line; +: 1 or more consecutive space should treat as 1 match . g: global flag,it means expression applicable for complete string rather than stopping after 1st match
  console.log(str1);

  str2 = str2.replaceAll(/\s+/g, "").toLowerCase();

  //step2: check length of string
  if (str1.length !== str2.length) {
    console.log(
      "strings are not anagrams.enght is diff :" +
        str1.length +
        " and " +
        str2.length
    );
    return false;
  }
  //step 3: if length is same then sort both string arra alphabetically
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  if (sortedStr1 === sortedStr2) {
    console.log("strings are anagrams: " + sortedStr1 + " " + sortedStr2);

    return true;
  } else {
    console.log("strings are not anagrams: " + sortedStr1 + " " + sortedStr2);
    return false;
  }
}

checkAnagram("E  a  t1", "Tea");

//way 2: without using built in methods
function isAnagram1(str1, str2) {
  //remove space and convert tolowercase
  function processStr(str) {
    let processedStr = "";
    for (let char of str) {
      if (char !== "");
      {
        processedStr += char.toLowerCase();
      }
    }
    return processedStr;
  }
  //count frequency of char in word
  function countCharFreq() {
    let frequency={};
  }
}

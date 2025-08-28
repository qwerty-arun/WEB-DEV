// Write a function to reverse a string

// Method-1
function reverseString(str) {
  let rev = str.split("").reverse().join("");
  return rev;
}

let str = "computer";
console.log(str);
console.log(reverseString(str));

// Method-2: using recursion
function reverseString1(str) {
  if (str === "") return "";
  return reverseString1(str.substr(1)) + str[0];
}
let str1 = reverseString1(str);
console.log(str1);

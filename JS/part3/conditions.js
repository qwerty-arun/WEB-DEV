// Checking if a number is greater than another number
let num1 = 5;
let num2 = 8;

console.log("I am regular upper code");
if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num2 is greater than num1");
}
console.log("I am regular bottom code");

// Check if two strings are equal

let username = "arun";
let anotherUsername = "arun";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// Check if a variable is a number or not
let score = 1;
if (typeof score === "number") {
  console.log("yes");
} else console.log("no");

// Check if a boolean value is true or false

let isTeaReady = false
if(isTeaReady)
{
    console.log("Tea is ready");
}
else
    console.log("Tea is NOT ready");
   
// Check if an array is empty or not
let items = []
console.log(items.length);

if(items.length === 0){
    console.log("Empty");
}
else
    console.log("Not Empty");
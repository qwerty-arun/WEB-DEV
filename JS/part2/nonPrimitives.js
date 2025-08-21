const username = {
    firstname: "arun",
    "first name": "arun",
    isLoggedin: true,
};

username.firstname = "hitesh";
username.lastname = "choudhary";
// console.log(username);
// console.log(typeof username);

// console.log(username["first name"]);
// console.log(username.lastname);
// console.log(username);

let today = new Date()
// console.log(today.getDate());

// Array

let names = ["raj", "hitesh", "elon", true, 1]
console.log(names);
console.log(names[4]);
console.log(names[5]);

// Type Conversion

console.log('1' + 1);
let isValue = "1"
console.log(Number(isValue));
console.log(typeof Number(isValue));

let trial = "2abc"
console.log(Number(trial));
console.log(typeof Number(trial));
console.log(Number(null));
console.log(Number(undefined));
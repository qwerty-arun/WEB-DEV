// Number

let number = 500;
let balance = new Number(500);

console.log(number);
console.log(balance);
console.log(balance.valueOf());
console.log(typeof number);
console.log(typeof balance);

//boolean
let isActive = true;
let isReallyActive = new Boolean(true); //don't do this

// null and undefined
let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//string

let myString = "hello";
let string1 = "hola";
let username = "hitesh";

let oldGreet = myString + " hitesh";
console.log(oldGreet);

let greetMessage = `Hello ${username} !`; //string interpolation
let demoOne = `Value is ${2 * 2}`;
console.log(greetMessage);

//Symbol
let sm1 = Symbol("hitesh")
let sm2 = Symbol("hitesh")
console.log(sm1 == sm2);
console.log(sm1);

/*
1. Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like "Making green tea" when called with "green tea". Store the result in a variable name 'teaOrder'.
*/

function greet(name) {
  console.log(`Hello ${name}`);
}

function makeTea(typeOfTea) {
  teaOrder = `Making ${typeOfTea}`;
  return teaOrder;
}
let order = makeTea("Lemon Tea");
// console.log(order);

/*
2. Create a function named 'orderTea' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message like "Order confirmed for chai" .
Call 'confirmOrder' from within 'orderTea' and return the result.
*/

function orderTea() {
  function confirmOrder() {
    return "Order confirmed for chai";
  }
  return confirmOrder();
}

/*
3. Write an arrow function named 'calculateTotal' that takes two parameters: 'price' and 'quantity'. The function should return the total cost by multiplying the 'price' and 'quantity'. Store the result in a variable named 'totalCost'.
*/

function greet() {}
const greet1 = () => {};
// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(200, 10);
// console.log(totalCost);

function testOne() {
  console.log(this);
}
// testOne()

const testTwo = () => {
  console.log(this);
};
// testTwo()

/*
4. Write a function named 'processTeaOrder' that takes another function, 'makeTea', as a parameter and calls it with the argument "earl grey". Return the result of calling 'makeTea'.
*/

function makeTea(typeOfTea) {
  return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFn) {
  return teaFn("earl grey");
}

let order1 = processTeaOrder(makeTea);
// console.log(order1);

/*
5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType', and return a message like 'Making green tea'.
Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMake = createTeaMaker(); //teaMake holds a function definition
// console.log(teaMake);
// console.log(teaMake());
console.log(teaMake("Masala Chai"));

// access to variables
function createTeaMaker1(name) {
  let bill = 100;
  return function (teaType) {
    return `Making ${teaType} for ${name} and the bill is ${bill}`;
  };
}

let teaMake1 = createTeaMaker1("arun"); //teaMake holds a function definition
console.log(teaMake1("Masala Chai"));

hello();
function hello() {
  console.log("Hello World");
}

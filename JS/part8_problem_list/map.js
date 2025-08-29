// map() creates a new array by applying a function to each element of the original array.
// It does not modify the original array.

array.map((currentValue, index, array) => {
   return newValue;
});

/*
currentValue → current element being processed.
index → index of the current element.
array → the original array.
Always returns a new array with the transformed values.
*/

// 1. Multiply each number by 2

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]


// 2. Extract specific property from objects

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Sara" }
];
const names = users.map(user => user.name);
console.log(names); // ["Arun", "Sara"]


// 3. Convert Strings to uppercase

const words = ["hello", "world"];
const upper = words.map(w => w.toUpperCase());
console.log(upper); // ["HELLO", "WORLD"]


// 4. Add index to each element

const arr = ["a", "b", "c"];
const withIndex = arr.map((val, i) => `${i}: ${val}`);
console.log(withIndex); // ["0: a", "1: b", "2: c"]


//5. Convert Array of numbers to boolean

const nums = [0, 1, 2, "", 5];
const truthy = nums.map(Boolean);
console.log(truthy); // [false, true, true, false, true]

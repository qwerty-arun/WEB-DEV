// reduce() executes a callback function on each element of an array and reduces it to a single value (which could be a number, string, object, or even another array).

array.reduce((accumulator, currentValue, index, array) => {
   // return updated accumulator
}, initialValue);

/*
accumulator → the running total (starts as initialValue if provided).
currentValue → current element being processed.
index → index of the current element.
array → the original array.
initialValue → optional starting value of accumulator.
*/

// 1. Sum of numbers

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15


// 2. Find maximum

const nums = [4, 9, 2, 44, 7];
const max = nums.reduce((acc, num) => num > acc ? num : acc, nums[0]);
console.log(max); // 44


// 3. Flatten an array (1-level)

const arr = [1, 2, [3, 4]];
const flat = arr.reduce((acc, val) => acc.concat(val), []);
console.log(flat); // [1, 2, 3, 4]


// 4. Count Word occurances

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, orange: 1 }


// 5. Build an object from array

const people = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Sara" }
];
const peopleMap = people.reduce((acc, person) => {
  acc[person.id] = person.name;
  return acc;
}, {});
console.log(peopleMap);
// { 1: "Arun", 2: "Sara" }
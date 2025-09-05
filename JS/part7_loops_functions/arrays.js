// Arrays and Methods
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:


// Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr) {
  return arr.filter(item => typeof item == 'number');
}


// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr) {
  return arr.reverse();
}


// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
  return Math.max(...arr);
}
/*
Significance of ... (spread operator):
- The spread operator expands an iterable (like an array or string) into individual elements.
- In this case, ...arr takes all elements from the array arr and passes them as separate arguments to the Math.max() function.
- Without the spread operator, passing the array directly like Math.max(arr) would not work, because Math.max expects a list of numbers, not an array.
*/

// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array

function flattenArray(arr) {
  return arr.flat(Infinity);
}
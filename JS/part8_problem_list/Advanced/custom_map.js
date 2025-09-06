// Implement a custom `map` function on the `Array.prototype`.

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let result = [];
  let arr = this; // the array calling myMap

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
  }

  return result;
};

const numbers = [1, 2, 3, 4];
const doubled = numbers.myMap(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

/*
🔎 Line by Line Explanation

1. Array.prototype.myMap = function(callback, thisArg) { ... }
    - We’re attaching a new method called myMap to the Array.prototype, so every array can use it.
    - It takes two arguments:
        * callback: the function to run on every element.
        * thisArg: optional, lets you set what this refers to inside the callback.

2. if (typeof callback !== "function") { ... }
    - Before doing anything, we check if the callback is actually a function.
    - If not, we throw an error (just like the native map would).

3. let result = [];
    - We’ll store the transformed elements here.
    - map always returns a new array, not the original one.

4. let arr = this;

    - In this context, this is the array on which we call .myMap().
    - Example: [1,2,3].myMap(...) → here this is [1,2,3].

5. for (let i = 0; i < arr.length; i++) { ... }
    - We loop over each index of the array.

6. if (i in arr) { ... }
    - This checks if the index actually exists in the array.
    - Example: let arr = [1, , 3]; //sparse array, missing index 1

7. result.push(callback.call(thisArg, arr[i], i, arr));
    - We execute the callback for the current element.
    - .call(thisArg, ...) ensures the callback runs with the correct this context if provided.
    - We pass the standard map arguments:
        * arr[i] → current element
        * i → current index
        * arr → the whole array
    - Whatever the callback returns, we push into result. 
*/
// Write a function to curry any given function.

/* What is Currying?

Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking one argument.

In other words:
- Instead of writing a function like f(a, b, c),
- You write it as f(a)(b)(c).
Both eventually produce the same result, but the "curried" version allows you to pass arguments one at a time.

Example without currying:
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

Example with currying:
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
console.log(curriedAdd(2)(3)); // 5
*/

function curry(fn) {
  return function curried(...args) {
    // If enough arguments are provided, call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return a function that collects more arguments
    else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));   // 6
console.log(curriedSum(1, 2)(3));   // 6
console.log(curriedSum(1)(2, 3));   // 6

/* 🔹 Explanation
- fn.length → gives the number of parameters the original function expects.
- If we already have enough arguments (args.length >= fn.length), we just call the original function.
- Otherwise, we return another function to collect more arguments, until we reach the required count.
*/

// Infinite Currying: no. of arguments isn't fixed in advance

function infiniteCurry(fn) {
  return function curried(...args) {
    return function next(...nextArgs) {
      if (nextArgs.length === 0) {
        // when no more args, evaluate the result
        return fn(...args);
      }
      // keep collecting arguments
      return curried(...args, ...nextArgs);
    };
  };
}

// Example: sum of numbers
const sum1 = (...nums) => nums.reduce((a, b) => a + b, 0);

const curriedSum1 = infiniteCurry(sum1);

console.log(curriedSum1(1)(2)(3)(4)()); // 10
console.log(curriedSum1(5)(10)(15)());  // 30

/* 🔎 How It Works
- curried starts the chain by accepting some arguments.
- next keeps accepting more arguments.
- When the user finally calls () with no arguments, we evaluate the function using all collected arguments.
*/
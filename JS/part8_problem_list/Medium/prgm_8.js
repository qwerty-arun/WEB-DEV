// Implement a function that memoizes another function.

/* 🔑 Concept

When a function is called with some input, it computes a result.
👉 If the same input is used again, instead of recomputing, we just return the stored result from memory (cache).

This avoids redundant work and speeds up the program.
*/

/* Real Use Cases: 

- Expensive recursive calls (like Fibonacci).
- Heavy calculations (like factorial, prime checks).
- Avoiding repeated API/database calls with the same input.
*/


function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function slowSquare(n) {
  console.log("Computing...");
  return n * n;
}

const fastSquare = memoize(slowSquare);

console.log(fastSquare(5)); // "Computing..." → 25
console.log(fastSquare(5)); // returns 25 immediately (no "Computing...")


// Example: Fibonacci with memoization
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];   // return cached
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(40)); // much faster than plain recursion
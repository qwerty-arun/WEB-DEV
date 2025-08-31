/*🔹 Memoization
- A specific form of caching.
- Focused on storing function results based on inputs.
- Typically used in pure functions (functions that always return the same output for the same input).
- Works best for expensive computations (e.g., recursion, math operations).
*/

function memoise(fn) {
  const cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    let result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const factorial = memoise(function f(n) {
  return n <= 1 ? 1 : n * f(n - 1);
});

console.log(factorial(5)); // calculates
console.log(factorial(5)); // returns cached result

/*🔹 Caching
- A broader concept: storing data so it can be retrieved faster in the future.
- Not limited to function calls — can cache API responses, database queries, files, or web pages.
- Can have expiration policies (e.g., "cache this API result for 5 minutes").
- Example: Browser caches CSS, JS, and images so websites load faster.
*/

// Example: Simple API Caching

const cache = {};

async function fetchData(url) {
  if (cache[url]) {
    console.log("From cache");
    return cache[url];
  }

  let response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");

  let data = await response.json();
  cache[url] = data;
  return data;
}

(async () => {
  let data1 = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log("First fetch:", data1);

  let data2 = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log("Second fetch:", data2); // comes from cache
})();


/*
✅ Key Difference:
- Memoization → a type of caching, specifically for function calls.
- Caching → a general concept, can be applied anywhere (databases, web servers, APIs, OS, etc.)
*/
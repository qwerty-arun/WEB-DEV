// Implement a function that retries a promise-returning function up to `n` times.

/*
👉 This means you are given a function that returns a Promise (an async function, like fetching from an API).
Sometimes the promise may fail (reject). Instead of giving up immediately, you want to retry it a few times before finally failing.
*/

// Example: Suppose you have an API
/*
function unstableApi() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.7) {
      resolve("✅ Success!");
    } else {
      reject("❌ Failed!");
    }
  });
}
*/

/*
- This function succeeds only 30% of the time.
- If we call it once, there’s a high chance it fails. But if we retry a few times, the chance of success increases.
*/

/*
📌 What You Need to Implement

A wrapper function, e.g. retry(fn, n), where:
- fn → a function returning a promise (like unstableApi)
- n → maximum number of retries

It should:
1. Try calling fn().
2. If it resolves → return the result immediately.
3. If it rejects → try again until retries run out.
4. If it still fails after all retries → reject with the last error.
*/

/*
💡 Why This Question Is Asked

This is a real-world pattern in JavaScript:
- Retrying API calls when the network is unstable
- Retrying database queries if there’s a temporary failure
- Implementing fault-tolerant systems

It tests your knowledge of:
- Promises
- Async/await
- Control flow in async code
*/

function fn() {
  return Math.random();
//   return Promise.resolve(Math.random()); // returns a Promise
}
// fn() just has to be a function that returns a Promise

// Do we need 'await' in retryPromise?
// Yes, if 'fn' is asynchronous. Because calling fn() gives a promise, you need to wait for it to settle.

/*
const r = fn();   // r is a Promise
console.log(r > 0.5); // ❌ Always false, comparing object with number
*/

async function retryPromise(fn, n) {
  for (let i = 0; i <= n; i++) {
    try {
      const result = await fn(); // wait for async result
      if (result > 0.5) {
        return "Success!"; //return immediattely on success
      }
    } catch (err) {
      console.error(err);
    }
  }
  throw "Failure!";
}

retryPromise(fn, 2).then(console.log).catch(console.error);

// Second Implementation: Cleaner Version (with delay between retries)
/*
async function retryPromise(fn, n, delay = 500) {
  for (let i = 0; i <= n; i++) {
    const result = await fn();
    if (result > 0.5) return "Success!";
    if (i < n) await new Promise(r => setTimeout(r, delay)); // wait before retry
  }
  throw "Failure!";
}

*/

// Third Implementation
/*
// Example promise-returning function that randomly fails or succeeds
function fn() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.7; // 30% chance to fail
    setTimeout(() => {
      if (success) {
        resolve("Success!");
      } else {
        reject(new Error("Failed"));
      }
    }, 100);
  });
}

// Retry function
function retryPromise(fn, retries) {
  return new Promise((resolve, reject) => {
    function attempt(remaining) {
      fn()
        .then(resolve)
        .catch(err => {
          if (remaining === 0) {
            reject(err);
          } else {
            console.log(`Retrying... attempts left: ${remaining}`);
            attempt(remaining - 1);
          }
        });
    }
    attempt(retries);
  });
}

// Usage example
retryPromise(fn, 5)
  .then(result => console.log("Final result:", result))
  .catch(error => console.error("All retries failed:", error.message));
*/
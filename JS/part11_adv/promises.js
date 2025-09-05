function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

//normal
// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//Promise Chaining
fetchData()
  .then((data) => {
    console.log(data);
    return `arun`;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));

// 1. Basic Promise Example
/*
let myPromise = new Promise(function(resolve, reject) {
  let success = true; // Simulate a condition

  if(success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise.then(
  function(value) { console.log(value); },   // Success handler
  function(error) { console.log(error); }    // Error handler
);
*/

// 2. Promise with timeout (Simulating async wait)
/*
  let waitPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("Waited 3 seconds!");
    }, 3000);
  });

  waitPromise.then(function(message) {
    console.log(message); // Outputs after 3 seconds
  });
*/

// 3. Chaining promises
/*
  new Promise((resolve, reject) => {
    resolve(1);
  })
  .then(result => {
    console.log(result); // 1
    return result + 1;
  })
  .then(result => {
    console.log(result); // 2
  });
*/

// 4. Using Promise.all to wait for multiple promises:
/*
  let p1 = Promise.resolve("First");
  let p2 = Promise.resolve("Second");
  let p3 = Promise.resolve("Third");

  Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // ["First", "Second", "Third"]
  });
*/

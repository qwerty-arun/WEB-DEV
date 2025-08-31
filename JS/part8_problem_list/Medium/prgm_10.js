// Implement a function to deep clone an object.

// Shallow Copy
function deepClone(obj) {
  let clone = { ...obj };
  return clone;
}

let obj = {
  name: "hitesh",
  roll: "20",
};

let deepClonedObj = deepClone(obj);
console.log(deepClonedObj);

obj.name = "arun";
console.log(deepClonedObj); //changes don't reflect

// ---------------------------------------------------------------------------------------
// Here is where the above logic fails:
let obj1 = {
  name: "hitesh",
  roll: "20",
  address: { city: "Bangalore", pin: 560059 },
};

let clone = { ...obj1 };
obj1.address.city = "Delhi";

console.log(clone.address.city); // ❌ "Delhi" (changed in clone too)

/*
- { ...obj } (spread operator) copies only the first level of properties.
- If obj contains nested objects or arrays, they are copied by reference.
- So modifying nested structures will also affect the "clone".
*/

// -------------------------------------------------------------------------------------------
// Deep Clone using Recursion
function deepClone2(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone2(item));
  }

  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone2(obj[key]);
    }
  }
  return clone;
}

let obj2 = {
  name: "hitesh",
  roll: "20",
  address: { city: "Bangalore", pin: 560059 },
};

let deepClonedObj2 = deepClone2(obj2);
obj2.address.city = "Delhi";

console.log(deepClonedObj2.address.city); // ✅ "Bangalore"

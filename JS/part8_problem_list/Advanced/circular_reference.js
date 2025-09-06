// Write a function that checks if an object has circular references
/*
A function to check if an object has a circular reference in JavaScript can be written by recursively traversing the object and tracking seen objects using a WeakSet. If any object is encountered more than once during traversal, a circular reference exists.
*/

function hasCircularReference(obj) {
  const seen = new WeakSet();
  function detect(current) {
    if (typeof current === "object" && current !== null) {
      if (seen.has(current)) {
        return true;
      }
      seen.add(current);
      for (const key in current) {
        if (Object.prototype.hasOwnProperty.call(current, key)) {
          if (detect(current[key])) {
            return true;
          }
        }
      }
    }
    return false;
  }
  return detect(obj);
}

let obj = {};
obj.a = { b: obj };
console.log(hasCircularReference(obj)); // true

let obj2 = { a: { b: 2 } };
console.log(hasCircularReference(obj2)); // false

/*
How It Works
- Recursion: The function traverses nested objects and arrays by recursively checking properties.
- WeakSet: Tracks all seen object references to spot cycles efficiently.
- Detection: If the same object is visited twice, a circular reference is detected.
*/
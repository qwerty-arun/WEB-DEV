// Implement a deep flatten function (handles multi-level nested arrays).

// Recursive
function deepFlatten(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...deepFlatten(item)); // recurse if nested
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(deepFlatten([1, [2, [3, [4, 5]]], 6])); // [1, 2, 3, 4, 5, 6]

// Reduce

function deepFlattenReduce(arr) {
  return arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? deepFlattenReduce(val) : val), []);
}

console.log(deepFlattenReduce([1, [2, [3, [4, 5]]], 6])); // [1, 2, 3, 4, 5, 6]

// Modern JS
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4, 5]]], 6])); // [1, 2, 3, 4, 5, 6]
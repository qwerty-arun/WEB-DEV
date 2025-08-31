// Write a function that returns the intersection of two arrays.
// [1, 2, 3, 4] and [3, 4, 5, 6] intersect at [3, 4]

// Brute force
function intersection(arr1, arr2) {
  let intersect = [];
  for (element of arr1) {
    if (arr2.includes(element)) {
      intersect.push(element);
    }
  }
  return intersect;
}


console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));


// filter + includes 
function intersection2(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

console.log(intersection2([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// Sets
function intersection3(arr1, arr2) {
  let set2 = new Set(arr2);
  return arr1.filter(value => set2.has(value));
}

console.log(intersection3([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]


// Unique intersection (no duplicates)
function intersection4(arr1, arr2) {
  return [...new Set(arr1)].filter(value => arr2.includes(value));
}

console.log(intersection4([1, 2, 2, 3], [2, 3, 3, 4])); // [2, 3]
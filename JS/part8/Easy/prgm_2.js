// Find the largest number in an array

// Method-1: using sort()
function max(arr) {
  arr.sort();
  return arr[arr.length - 1];
}

let arr = [4, 9, 44, 1, 2];
console.log(max(arr)); //will print 9, not 44
// .sort() in JavaScript sorts lexicographically (as strings) by default, not numerically.
// So [4, 9, 44, 1, 2] becomes [1, 2, 4, 44, 9] (notice 9 comes after 44)

// Method-2: using Math.max()
function max1(arr) {
  return Math.max(...arr);
}
console.log(max1(arr)); //will print 44 
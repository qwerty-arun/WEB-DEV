// Build a function that generates all subsets of a given array.

// There must be 2^n total subsets, where 'n' is the length of the original array

// Solution-1: Backtracking
function subsets1(arr) {
  let result = [];
  
  function backtrack(start, path) {
    result.push([...path]); // include current subset
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);      // choose
      backtrack(i + 1, path); // explore
      path.pop();             // un-choose
    }
  }
  
  backtrack(0, []);
  return result;
}

console.log(subsets1([1, 2, 3]));

// Solution-2: Iterative Expansion
function subsets2(arr) {
  let result = [[]];
  for (let num of arr) {
    let newSubsets = result.map(subset => [...subset, num]);
    result.push(...newSubsets);
  }
  return result;
}

console.log(subsets2([1, 2, 3]));

// Solution-3: Bitmasking (using binary representation)
function subsets3(arr) {
  let result = [];
  let n = arr.length;
  let total = 1 << n; // 2^n
  
  for (let mask = 0; mask < total; mask++) {
    let subset = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(arr[i]);
      }
    }
    result.push(subset);
  }
  return result;
}

console.log(subsets3([1, 2, 3]));

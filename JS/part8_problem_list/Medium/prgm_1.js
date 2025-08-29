// Implement a function findLongestWord(arr) using reduce()

const findLongestWord = (arr) => 
  arr.reduce((longest, current) => 
    current.length > longest.length ? current : longest, ""
  );

console.log(findLongestWord(['1', '12', '123']));

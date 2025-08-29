// Find the longest word in a sentence

function longestWordLength1(sentence) {
  const wordList = sentence.split(" ");
  let longestLength = 0;
  for (const word of wordList) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }
  return longestLength;
}

function longestWordLength2(sentence) {
  return sentence
    .split(" ")
    .reduce((max, word) => Math.max(max, word.length), 0);
}

function longestWordLength3(sentence) {
  return Math.max(...sentence.split(" ").map((word) => word.length));
}

console.log(longestWordLength1("I am the greatest scientist"));
console.log(longestWordLength2("I am the greatest scientist"));
console.log(longestWordLength3("I am the greatest scientist"));

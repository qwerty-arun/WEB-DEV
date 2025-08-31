// Create a function that checks if two strings are anagrams.

function anagrams(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(anagrams("silent", "listen"));

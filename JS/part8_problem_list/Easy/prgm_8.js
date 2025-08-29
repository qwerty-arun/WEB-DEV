// Check if a string is palindrome

function palindrome(str) {
  const rev = str.split("").reverse().join("");
  if (rev === str) {
    return true;
  } else {
    return false;
  }
}

if (palindrome("madame")) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

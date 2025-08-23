const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}
function check() {
  const value = input.value;
  const reverse = reverseString(value);
  //   alert(reverse) //Use this to check on the spot
  if (value === reverse) {
    alert("Palindrome");
  } else {
    alert("Not Palindrome");
  }
  input.value = "";
}

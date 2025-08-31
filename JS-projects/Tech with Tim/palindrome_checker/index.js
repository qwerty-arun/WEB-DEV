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

// Another method

/*
// Remember to change the class of button to "button"
document.getElementById("button").addEventListener('click', function() {
  const input = document.querySelector("input");
  const value = input.value;
  const reverse = value.split("").reverse().join("");

  if (value === reverse)
    alert("Palindrome");
  else
    alert("NAHHHHHH!");

  input.value = "";
});
*/
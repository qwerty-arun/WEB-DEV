// Implement a debounce function

/*
Debouncing in JavaScript is a technique used to control the rate at which a function is executed, particularly in response to events that can fire rapidly and repeatedly, such as user input (typing), window resizing, or scrolling. The core idea is to delay the execution of a function until a certain amount of time has passed since the last time it was invoked. If the function is called again within that delay period, the timer is reset. This ensures the function only runs after a period of inactivity.
*/

// Implementation
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer); // reset the timer if function is called again
    timer = setTimeout(() => {
      func.apply(this, args); // call func after delay
    }, delay);
  };
}

// Example usage
const input = document.querySelector("input");

function handleInput(event) {
  console.log("API call with:", event.target.value);
}

const debouncedInput = debounce(handleInput, 500);

input.addEventListener("input", debouncedInput);
/*
Now if you type “hello” quickly:

- Without debounce → logs 5 times.

- With debounce (500ms) → logs once after you stop typing.
*/

/*
Why is it useful?

Search boxes → prevent hitting the API on every keystroke.

Window resize → update layout only once after resizing stops.

Form validation → wait until the user finishes typing.
*/

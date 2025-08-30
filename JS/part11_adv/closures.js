function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer(); //holds the function, still remembers counter variable
console.log(increment());
console.log(increment());
console.log(increment());
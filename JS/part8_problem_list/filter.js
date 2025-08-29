// filter() creates a new array with only the elements that pass a given condition (i.e., return true in the callback).

array.filter((currentValue, index, array) => {
   return condition;
});

// currentValue → the element being processed.
// index → index of that element.
// array → the original array.
// Must return true (keep element) or false (discard element).


// 1. Get only even numbers

const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]

// 2. Filter objects by property

const users = [
  { id: 1, name: "Arun", active: true },
  { id: 2, name: "Sara", active: false },
  { id: 3, name: "John", active: true },
];
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);
// [ { id: 1, name: "Arun", active: true }, { id: 3, name: "John", active: true } ]

// 3. Remove falsy values

const arr = [0, 1, false, 2, "", 3, null, "hello"];
const truthy = arr.filter(Boolean);
console.log(truthy); // [1, 2, 3, "hello"]


// 4. Strings Longer than 5 characters

const words = ["cat", "tiger", "elephant", "dog"];
const longWords = words.filter((w) => w.length > 5);
console.log(longWords); // ["elephant"]


// 5. Prime Numbers only

const nums = [2, 3, 4, 5, 6, 7, 8];
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primes = nums.filter(isPrime);
console.log(primes); // [2, 3, 5, 7]

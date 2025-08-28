// Check if a number is prime.

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return `${num} is Prime`;
  }
  else{
    return `${num} is not Prime`;
  }
}

console.log(isPrime(7));
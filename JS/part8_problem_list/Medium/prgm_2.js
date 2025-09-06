// Write a recursive function to compute the Fibonnaci sequence

// O(2^n)
function fibonacci(n) {
  if (n == 1) {
    return 0; // Base cases: F(0) = 0, F(1) = 1
  }
  if (n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// Example usage:
console.log(fibonacci(6)); // Output: 8

// Optimized approach using memoization, O(n)
function fibonacci1(n, memo = {}) {
  if (n in memo) return memo[n]; // Return cached result
  if (n <= 1) return n; // Base cases

  memo[n] = fibonacci1(n - 1, memo) + fibonacci1(n - 2, memo); // Store result
  return memo[n];
}

// Example usage:
console.log(fibonacci1(50)); // Output: 12586269025 (runs fast!)

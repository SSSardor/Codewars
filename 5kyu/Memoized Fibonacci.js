var memo = [];
function fibonacci(n) {
  if (memo[n]) {
    return memo[n];
  }
  if (n >= 2) {
    return (memo[n] = fibonacci(n - 2) + fibonacci(n - 1));
  }
  return n;
}

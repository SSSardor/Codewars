function squareSum(numbers) {
  return numbers.map((i) => i ** 2).reduce((pre, cur) => pre + cur, 0);
}

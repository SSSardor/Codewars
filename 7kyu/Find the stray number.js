function stray(numbers) {
  return +numbers.filter((i) => i !== numbers[1])[0];
}

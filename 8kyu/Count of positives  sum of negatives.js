function countPositivesSumNegatives(input) {
  if (input == 0 || input == null) {
    return [];
  } else {
    return [
      input.filter((i) => i > 0).length,
      input.filter((i) => i < 0).reduce((cur, pre) => cur + pre, 0),
    ];
  }
}

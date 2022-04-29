function positiveSum(arr) {
  return arr.filter((i) => i >= 0).reduce((pre, cur) => pre + cur, 0);
}

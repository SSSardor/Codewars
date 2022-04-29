function SeriesSum(n) {
  // Happy Coding ^_^
  var res = 0;
  for (i = 0; i < n; i++) {
    res += 1 / (i * 3 + 1);
  }
  return res.toFixed(2);
}

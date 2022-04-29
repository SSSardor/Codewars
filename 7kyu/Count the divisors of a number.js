function getDivisorsCnt(n) {
  var res = [];
  for (i = 0; i <= n; i++) {
    if (n % i == 0) {
      res.push(i);
    }
  }
  return res.length;
}

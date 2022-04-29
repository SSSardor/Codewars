function divisors(integer) {
  var res = [];
  for (i = 2; i < integer; i++) {
    if (integer % i === 0) {
      res.push(i);
    }
  }
  return res.length ? res : integer + ' is prime';
}

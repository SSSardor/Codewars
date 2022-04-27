function descendingOrder(n) {
  var a = n + '';
  res = [];
  for (i = 0; i < a.length; i++) {
    res.unshift(a[i]);
  }
  return +res.sort((a, b) => b - a).join('');
}
console.log(descendingOrder(1021));

function squareDigits(num) {
  var a = num + '';
  var res = '';
  for (i = 0; i < a.length; i++) {
    res += a[i] ** 2;
  }
  return +res;
}

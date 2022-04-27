function XO(str) {
  var a = str.match(/o/gi);
  var b = str.match(/x/gi);
  if (a == null && b == null) {
    return true;
  }
  if (a == null || b == null) {
    return false;
  }
  if (a.length == b.length) {
    return true;
  } else {
    return false;
  }
}
console.log(XO('zpzpzpp'));

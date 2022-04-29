function dontGiveMeFive(start, end) {
  var a = [];
  var s = [];
  for (i = start; i <= end; i++) {
    a.push(i);
  }
  for (i = 0; i < a.length; i++) {
    if (!a[i].toString().includes('5')) {
      s.push(+a[i]);
    }
  }
  return s.length;
}

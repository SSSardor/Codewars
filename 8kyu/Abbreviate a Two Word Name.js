function abbrevName(name) {
  var s = '';
  var a = name.split(' ');
  for (i = 0; i < a.length; i++) {
    s += a[i][0].toUpperCase();
  }
  return s.split('').join('.');
}

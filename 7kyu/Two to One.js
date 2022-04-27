function longest(s1, s2) {
  var a = s1 + s2;
  var res = '';

  for (i = 0; i < a.length; i++) {
    if (!res.includes(a[i])) {
      res += a[i];
    }
  }
  return res.split('').sort().join('');
}

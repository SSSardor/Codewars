function isIsogram(str) {
  var res = '';
  var a = str.toLowerCase().split('');
  for (i = 0; i < a.length; i++) {
    if (!res.includes(a[i])) {
      res += a[i];
    }
  }
  if (res == str.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

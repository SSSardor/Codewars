function isPangram(string) {
  var res = '';
  var a = 'abcdefghijklmnopqrstuvwxyz';
  var b = string.toLowerCase().split('').sort().join('').trim();
  console.log(b);

  for (i = 0; i < b.length; i++) {
    if (!res.includes(b[i])) {
      res += b[i];
    }
  }
  if (a == res.slice(-26)) {
    return true;
  } else {
    return false;
  }
}

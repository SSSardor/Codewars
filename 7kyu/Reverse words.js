function reverseWords(str) {
  var res = '';
  var a = str.split(' ');
  for (i = 0; i < a.length; i++) {
    res += a[i].split('').reverse().join('') + ' ';
  }
  return res.trim();
}

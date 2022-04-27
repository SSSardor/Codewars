function disemvowel(str) {
  var res = '';
  var str1 = 'aoueiAOUEI';
  for (i = 0; i < str.length; i++) {
    if (str1.includes(str[i])) {
      res += '';
    } else {
      res += str[i];
    }
  }
  return res;
}

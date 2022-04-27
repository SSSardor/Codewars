function zeroAndOne(s) {
  let a = 0;
  for (let i = 0; i < s.length; i++) {
    if ((s[i] == '0' && s[i + 1] == '1') || (s[i] == '1' && s[i + 1] == '0')) {
      i++;
    } else {
      a++;
    }
  }
  return a;
}
console.log(zeroAndOne('110110'));

function spinWords(string) {
  var res = [];
  var string1 = string.split(' ');
  for (i = 0; i < string1.length; i++) {
    var l = string1[i].length;
    if (l > 4) {
      res.push(string1[i].split('').reverse().join(''));
    } else {
      res.push(string1[i]);
    }
  }
  return res.join(' ');
}

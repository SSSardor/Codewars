function getMiddle(s) {
  var l = s.length;
  if (l % 2 == 1) {
    return s[Math.ceil(l / 2 - 1)];
  }
  if (l % 2 == 0) {
    return s[l / 2 - 1] + s[l / 2 - 1 + 1];
  }
}

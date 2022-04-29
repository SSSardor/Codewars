function duplicateEncode(word) {
  var l = '';
  var word1 = word.toLowerCase();
  for (var i = 0; i < word1.length; i++) {
    if (word1.lastIndexOf(word1[i]) == word1.indexOf(word1[i])) {
      l += '(';
    } else {
      l += ')';
    }
  }
  return l;
}

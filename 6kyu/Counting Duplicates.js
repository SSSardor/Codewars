function duplicateCount(text) {
  var rees = '';
  let l = text.toLowerCase().split('').sort();
  for (let i = 0; i < l.length; i++) {
    if (!rees.includes(l[i]) && l[i] === l[i + 1]) {
      rees += l[i];
    }
  }

  return rees.length;
}

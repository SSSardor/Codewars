function amountOfPages(summary) {
  var i = 0;
  var str = '';
  while (str.length < summary) {
    i++;
    str += i;
  }
  return i;
}

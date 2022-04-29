function oddOrEven(array) {
  var a = array.reduce((a, b) => a + b, 0);

  if (a % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

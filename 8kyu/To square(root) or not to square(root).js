function squareOrSquareRoot(array) {
  var a = [];
  for (i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) == Math.floor(Math.sqrt(array[i]))) {
      a.push(Math.sqrt(array[i]));
    } else {
      a.push(array[i] ** 2);
    }
  }
  return a;
}

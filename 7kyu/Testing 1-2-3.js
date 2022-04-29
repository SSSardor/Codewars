var number = function (array) {
  //your awesome code here
  var res = [];
  for (i = 0; i < array.length; i++) {
    res.push(`${i + 1}: ${array[i]}`);
  }
  return res;
};

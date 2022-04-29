var countBits = function (n) {
  var a = n.toString(2);
  if (n == 0) {
    return 0;
  } else {
    return a.toString().match(/1/g).length;
  }
};

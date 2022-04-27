var isAnagram = function (test, original) {
  var a = test.toLowerCase().split('').sort().join('');
  var b = original.toLowerCase().split('').sort().join('');
  if (a == b) {
    return true;
  } else {
    return false;
  }
};

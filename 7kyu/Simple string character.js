function solve(s) {
  var upper = s.match(/[A-Z]/g).length;
  var lower = s.match(/[a-z]/g).length;
  var number = s.match(/[0-9]/g).length;
  var special = s.length - (upper + lower + number);
  return [upper, lower, number, special];
}

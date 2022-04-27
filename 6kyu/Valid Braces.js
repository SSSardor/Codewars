function validBraces(braces) {
  let pattern = /\[\]|\(\)|\{\}/;
  while (pattern.test(braces)) {
    braces = braces.replace(pattern, '');
  }
  if (braces === '') {
    return true;
  } else {
    return false;
  }
}
console.log(validBraces('(){}[]'));

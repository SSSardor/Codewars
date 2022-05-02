function isValidIP(str) {
  var a = str.split('.');
  if (a.length !== 4) return false;
  a = a.map((i) => {
    if (+i >= 0 && +i <= 255 && i == String(+i)) {
      return true;
    } else {
      return false;
    }
  });
  return !a.includes(false);
}

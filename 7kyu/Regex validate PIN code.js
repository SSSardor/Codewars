function validatePIN(pin) {
  var n = pin.length;
  if (n != 4 && n != 6) return false;
  for (var i in pin) {
    if (pin[i] > '9' || pin[i] < '0' || pin[i] === '.') return false;
    else {
      return true;
    }
  }
}

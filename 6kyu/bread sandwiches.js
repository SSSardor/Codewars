function slicesToName(n) {
  var res=""
  var a = " sandwich"
  var b = "bread sandwich"
  if (n > 1 && n % 2 == 1) {
    res+= b+ a.repeat((n-3)/2)
  } if (n > 1 && n % 2 == 0) {
    res += a.repeat(n / 2);
  }
  if (n <= 1 || typeof n=="string") {
    return null;
  }
  return res.trimStart()
}

function nameToSlices(name) {
  var res = null;
  if (typeof name == 'number') {
    return null;
  }
  if (name.split(' ')[0] == 'bread' && !name.includes('bread', 1)) {
    res = (name.split(' ').length - 1) * 2 + 1;
  }
  if (name.split(' ').every((v) => v == 'sandwich')) {
    res = name.split(' ').length * 2;
  }
  if (name == "bread") {
    return null
  }
  if (name.includes('bread', 1) && name=="") {
    return null
  }
    return res;
}
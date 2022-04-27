function openOrSenior(data) {
  var res = [];
  for (i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      res.push('Senior');
    } else {
      res.push('Open');
    }
  }
  return res;
}
console.log(openOrSenior([[57,21],[15,2]]));
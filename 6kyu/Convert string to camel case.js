function toCamelCase(str) {
  var str1;
  if (str.includes('_')) {
    str1 = str.split('_');
  }
  if (str.includes('-')) {
    str1 = str.split('-');
  }
  var str2 = str1[0];
  for (i = 1; i < str1.length; i++) {
    var str3 = str1[i].substr(0, 1).toUpperCase() + str1[i].slice(1);
    str2 += str3;
  }
  return str2;
}
console.log(toCamelCase('the_stealth_warrior'));

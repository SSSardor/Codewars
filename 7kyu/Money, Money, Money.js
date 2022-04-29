function calculateYears(principal, interest, tax, desired) {
  var a = 0;
  for (i = principal; i < desired; i += i * interest * (1 - tax)) {
    a++;
  }
  return a;
}

function digital_root(n) {
  n = eval(n.toString().split('').join('+'));

  if (n > 9) {
    return digital_root(n);
  }

  return n;
}

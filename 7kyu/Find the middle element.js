function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }
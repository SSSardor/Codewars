function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    let name = names.slice(0);
    return `${name} likes this` ;
  }
  if (names.length > 3) {
    let test1 = names[0];
    let name1 = names[1];
    return `${test1}, ${name1} and ${names.length - 2} others like this`;
  }
  if (names.length > 2) {
    let test1 = names[0];
    let name1 = names[1];
    let test2 = names[2];
    return `${test1}, ${name1} and ${test2} like this`;
  }
  if (names.length === 2) {
    let test3 = names[0];
    let test4 = names[1];
    return `${test3} and ${test4} like this`;
  }
}
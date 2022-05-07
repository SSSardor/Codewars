function solution(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
      if (i === str.length - 1) {
        result.push(str.slice(i) + "_");
      } else {
        result.push(str.slice(i, i + 2));
      }
    }
    return result;
  }
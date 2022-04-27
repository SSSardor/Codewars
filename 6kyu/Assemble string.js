function assembleString(array) {
  
  if (!array.length)
    return '';
  
  let word = [ ...array[0] ];
  
  for (let i = 1; i < array.length; i++)
    for (let j = 0; j < array[i].length; j++)
      if (array[i][j] !== '*')
        word[j] = array[i][j];

  return word.join('').replace(/\*/g, '#');
  
}
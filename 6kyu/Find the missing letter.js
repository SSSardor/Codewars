const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    ''
  );
  const start = alphabet.indexOf(array[0]);
  return alphabet
    .slice(start, start + array.length)
    .find((a) => !array.includes(a));
};

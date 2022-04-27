function minUmbrellas(weather) {
  let home = 0;
  let office = 0;
  for (let i = 0; i < weather.length; i++) {
    if (['thunderstorms', 'rainy'].includes(weather[i])) {
      if (i % 2) {
        if (home) home--;
        office++;
      } else {
        if (office) office--;
        home++;
      }
    }
  }
  return home + office;
}

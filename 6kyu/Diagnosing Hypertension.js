
let hypertensive = function (patients) {
  let output = 0;
  patients.forEach((el, index) => {
    let listNum = el.map((measure) => [
      Number(measure.split('/')[0]),
      Number(measure.split('/')[1]),
    ]);
    let highPressure = listNum.some((e) => e[0] >= 180 && e[1] >= 110);
    let avgS =
      listNum.map((e) => e[0]).reduce((acc, e) => acc + e, 0) / el.length;
    let avgD =
      listNum.map((e) => e[1]).reduce((acc, e) => acc + e, 0) / el.length;
    if (highPressure || (el.length > 1 && (avgS >= 140 || avgD >= 90)))
      output++;
  });
  return output;
};

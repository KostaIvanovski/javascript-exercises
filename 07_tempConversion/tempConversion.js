const ftoc = function (fahrenheit) {
  let rezult = Math.round((((fahrenheit - 32) * 5) / 9) * 10) / 10;
  return rezult;
};

const ctof = function (celsius) {
  let rezult = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
  return rezult;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

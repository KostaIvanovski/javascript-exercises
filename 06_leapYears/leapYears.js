const leapYears = function (year) {
  let rezult = false;
  if (year % 4 === 0) rezult = true;
  if (year % 100 === 0) rezult = false;
  if (year % 400 === 0) rezult = true;

  return rezult;
};

// Do not edit below this line
module.exports = leapYears;

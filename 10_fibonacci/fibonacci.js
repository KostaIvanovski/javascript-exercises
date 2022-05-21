const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  let numPrev = 0;
  let numNext = 1;
  for (let i = 0; i < parseInt(num); i++) {
    let temp = numNext;
    numNext += numPrev;
    numPrev = temp;
  }

  return numPrev;
};

// Do not edit below this line
module.exports = fibonacci;

const repeatString = function (theString, theNumber) {
  let rezult = "";

  if (theNumber >= 0) {
    for (let i = 0; i < theNumber; i++) {
      rezult += theString;
    }
  } else {
    return "ERROR";
  }

  return rezult;
};

// Do not edit below this line
module.exports = repeatString;

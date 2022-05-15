const removeFromArray = function () {
  if (arguments.length === 0) return;

  let rezult = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    let index = rezult.findIndex((element) => element === arguments[i]);
    if (index >= 0) rezult.splice(index, 1);
  }

  return rezult;
};

// Do not edit below this line
module.exports = removeFromArray;

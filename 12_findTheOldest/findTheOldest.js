const findTheOldest = function (array) {
  let indexOfOldest = 0;

  for (let i = 0; i < array.length; i++) {
    if ("yearOfDeath" in array[i]) {
      if (array[i]["yearOfDeath"] > array[indexOfOldest]["yearOfDeath"]) {
        indexOfOldest = i;
      }
    } else if (array[i]["yearOfBirth"] < 1900) {
      indexOfOldest = i;
    }
    return array[indexOfOldest];
  }
};
// Do not edit below this line
module.exports = findTheOldest;

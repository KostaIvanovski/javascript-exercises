const findTheOldest = function (array) {
  let ageOfOldest = 0;
  let indexOfOldest;
  let date = new Date();
  let currentYear = date.getFullYear();
  for (let i = 0; i < array.length; i++) {
    let age;
    if (!array[i]["yearOfDeath"]) {
      age = currentYear - array[i]["yearOfBirth"];
    } else {
      age = array[i]["yearOfDeath"] - array[i]["yearOfBirth"];
    }
    if (age > ageOfOldest) {
      ageOfOldest = age;
      indexOfOldest = i;
    }
  }
  return array[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;

const palindromes = function (string) {
  let arr = string
    .toLowerCase()
    .split(/[^a-zA-Z]+/)
    .join("")
    .split("");
  let palindrome = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      palindrome = true;
    } else {
      palindrome = false;
      return palindrome;
    }
  }
  return palindrome;
};

// Do not edit below this line
module.exports = palindromes;

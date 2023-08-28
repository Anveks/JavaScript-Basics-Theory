
const hasPalindrome = str => {
  if (str.split("").reverse().join("") === str) return true;
};

console.log(hasPalindrome("carrace"));
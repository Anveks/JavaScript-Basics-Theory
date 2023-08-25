
var isValid = function(s) {

  if (s.length < 1) return false;

  const arr = [];

  const brackets = {
    '(':')',
    '{':'}',
    '[':']'
  };

  for (let i = 0; i < s.length; i++) {
    if (brackets.hasOwnProperty(s[i])) {
      arr.push(s[i]);
    } else {
      const key = Object.keys(brackets).find((elem) => brackets[elem] === s[i]);
      // const opposite = 

      if (arr[arr.length - 1] === key) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  console.log(arr);

  return arr.length === 0;
};

console.log(isValid('([}}])'));


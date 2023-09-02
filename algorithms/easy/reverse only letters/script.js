
// two pointer approach, 43ms (beats 95%), 42mb (beats 63%)
var reverseOnlyLetters = function(s) {

  const symbols = "[.,\/#!?@$%\^&\*;:{}=\-_`~()0123456789<>+']"; // probably a better approach is to change symbols with the alphabet and check next to it 
  let left = 0;
  let right = s.length - 1;
  const sArr = s.split("");

  while (left < right) {
    if (!symbols.includes(sArr[left]) && !symbols.includes(sArr[right])) {
      const tempVal = sArr[left];
      sArr[left] = sArr[right];
      sArr[right] = tempVal;
      left++;
      right--;
    } else if (symbols.includes(sArr[left])) {
      left++;
    } else if (symbols.includes(sArr[right])) {
      right--;
    }
  }

  return sArr.join("");
};

console.log(reverseOnlyLetters("z<*zj"));
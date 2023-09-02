// first solution (77ms, 48mb):
var reverseVowels = function(s) {

  const vowelsArr = [];
  const vowelsCheck = "aeiouAEIOU";

  for (let char of s) {
    if (vowelsCheck.includes(char)){
      vowelsArr.push(char);
    }
  }

  let decreasingIndex = vowelsArr.length - 1;
  const strArr = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowelsCheck.includes(strArr[i])) {
      strArr[i] = vowelsArr[decreasingIndex];
      decreasingIndex--;
    }
  }

  return strArr.join("");    
};

console.log(reverseVowels('leetcode'));

// two-pointer solution (65ms, 48mb):
const reverseVowels2 = s => {
  const vowelsCheck = "aeiouAEIOU";
  const sArr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) { // Use a while loop instead of a for loop
    if (vowelsCheck.includes(sArr[left]) && vowelsCheck.includes(sArr[right])) {
      const temp = sArr[left];
      sArr[left] = sArr[right];
      sArr[right] = temp;
      left++; // increment the left pointer
      right--; // decrement the right pointer
    } else if (!vowelsCheck.includes(sArr[left])) {
      left++;
    } else if (!vowelsCheck.includes(sArr[right])) {
      right--;
    }
  }

  return sArr.join("");
};

console.log('two pointer: ' + reverseVowels2("ai"));

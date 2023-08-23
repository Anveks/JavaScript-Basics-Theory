
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let hash = {};
  let startIndex = 0;
  const strLength = [];

  for (let i = 0; i < s.length; i ++){
    if (hash[s[i]] === undefined){
      hash[s[i]] = 1;
    } else {
      strLength.push(s.substring(startIndex, 1).length)
      startIndex = i;
      hash = {};
      hash[s[i]] = 1;
    }
  }

  return Math.max(...strLength);

};

console.log(lengthOfLongestSubstring('dvdf'));

// if (s.length === 0) return 0;

// let result = 1;
// let hash = {};

// for(let i = 0; i < s.length; i++) {
//   if (hash[s[i]] === undefined){
//     hash[s[i]] = 1;
//   } else {
//     result = Math.max(Object.keys(hash).length, result);
//     hash = {};
//     hash[s[i]] = 1;
//   }
// }

// return Math.max(Object.keys(hash).length, result);
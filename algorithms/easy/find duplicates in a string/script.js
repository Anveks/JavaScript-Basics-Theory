
var firstUniqChar = function(s) {
    // Not-so-optimized solution:
    const hash = {};

    let firstUnique = -1;

    for (const letter in s) {
      if (!hash.hasOwnProperty(s[letter])) {
        hash[s[letter]] = 1;
      } else {
        ++hash[s[letter]];
      }
    }

    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] === 1) {
        firstUnique = i;
        return firstUnique;
      }
    }

    return firstUnique;
};

console.log(firstUniqChar('loveleetcode'));


// -------------------------
// Optimized solution:

function findFirstUnique(s) {
    for (let idx = 0; idx < s.length; idx++){
      // If same...
      if(s.indexOf(s[idx]) === s.lastIndexOf(s[idx])){
          // return the index of that unique character
          return idx
      } else {
          // If no character appeared exactly once...
          return -1 
      }
  }
}
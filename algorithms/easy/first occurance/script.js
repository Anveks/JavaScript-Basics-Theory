// 🤡 solution:
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr('sadbutsad', 'sad'));

// a more sophisticated approach:
function findIfExists(haystack, needle) {

  for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (haystack.substr(i, needleLength) === needle) return i;
  }
  return -1;

}

console.log(findIfExists('sadbutsad', 'sad'));
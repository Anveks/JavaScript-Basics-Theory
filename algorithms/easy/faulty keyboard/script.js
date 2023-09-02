
var finalString = function(s) {
  const sArray = []; // preparing an empty arr

  for (char of s) {
    if (char !== 'i') {
      sArray.push(char); // in case char is NOT 'i' - push it to the sArr
    } else {
      sArray.reverse(); // in case it is - reverse the sArr
    }
  }
  
  return sArray.join('');
};

console.log(finalString("poiinter"));
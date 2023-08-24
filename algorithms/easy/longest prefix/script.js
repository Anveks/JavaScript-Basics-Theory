
var longestCommonPrefix = function(strs) {

  let prefix = strs[0]; // putting the whole word as a prefix
  let endIndex = strs[0].length; // figuring the end index

  for (i = 1; i < strs.length; i++) { // starting the for loop with 1, NOT 0

    while (!strs[i].startsWith(prefix)){ // untill all the words start with the prefix
      --endIndex; 
      prefix = strs[0].substring(0, endIndex); // substring it
    } 

    return prefix; // should return "" if no match found
  }


};

console.log(longestCommonPrefix(["caracal","carrallo","car"]));
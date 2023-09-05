
var gcdOfStrings = function(str1, str2) {
    if (str1 === str2) return str2;

    if (str2.length > str1.length) {
      gcdOfStrings(str2, str1);
    }

    const count = countInstances(str1, str2);

    if (count.instances === 0 && count.isClear) {
      return "";
    } else {
      let lastIndex = 0;
      let testStr = str2.slice(0, str2.length - lastIndex);

      while (testStr.length !== 0){
        if (countInstances(str1, testStr).instances !== 0 && countInstances(str1, testStr).isClear === true && countInstances(str2, testStr).instances !== 0 && countInstances(str2, testStr).isClear === true) {
          return testStr;
        } else {
          lastIndex += 1;
          testStr = str2.slice(0, str2.length - lastIndex);
        }
      }

      return "";
    }

};

console.log(gcdOfStrings("ABABCCABAB", "ABAB"));

function countInstances(string, word) {
  const instances = string.split(word).length - 1;
  const instancesList = string.split(word);
  const isClear = instancesList.every((elem) => elem === "");

  if (instancesList[instancesList.length-1] !== "" || instancesList[0] !== ""){
    return {instances, isClear: isClear};
  } else {
    return {instances, isClear: isClear};
  }
};




// 162ms, 63mb; beats 96%
var sortVowels = function(s) {
    const vowelsCheck = "aeiouAEIOU";
    const vowelsArr = [];
    const charArr = s.split("");

    for (let char of charArr){
      vowelsCheck.includes(char) ? vowelsArr.push(char) : "";
    }

    if (vowelsArr.length === 0) {
      return s;
    } else {
      vowelsArr.sort();
      let increasingIndex = 0;

      for (let i = 0; i < charArr.length; i++) {
        if (vowelsCheck.includes(charArr[i])) {
          charArr[i] = vowelsArr[increasingIndex];
          increasingIndex++;
        }
      }
    }

    return charArr.join("");
};

console.log(sortVowels("lEetcOde"));
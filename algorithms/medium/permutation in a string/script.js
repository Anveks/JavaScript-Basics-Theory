
var checkInclusion = function(s1, s2) {
    if (s1.length < 1) return;

    let startIndex = 0;
    const endIndex = s1.length;

    const hash = {};

    for(let i = 0; i < s1.length; i++){
      hash[s1[i]] = 1;
    }

    for(j = 0; j < s2.length; j++){
      const matches = [];

      const substrToCheck = s2.substr(startIndex, endIndex);
      // checking if there are matching properties
      for (const key in hash) {
        matches.push(substrToCheck.includes(key));
      }
      
      if (matches.every((elem) => elem === true)) {
        return true;
      } else {
        ++startIndex;
      }
    }

    return false;
};

const res = checkInclusion('hello', 'ooolleoooleh');

console.log(res);
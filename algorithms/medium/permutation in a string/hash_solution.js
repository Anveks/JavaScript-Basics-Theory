
var checkInclusion = function(s1, s2) {

  const endIndex = s1.length;

  const hash = {};

  for(i = 0; i < s1.length; i++){
    if (hash[s1[i]] === undefined) {
      hash[s1[i]] = 1;
    } else {
      ++hash[s1[i]];
    }
  }

  for(let j = 0; j < s2.length; j++) {

    let currentHash = {...hash};

    const substrToCheck = s2.substr(j, endIndex);

    for(let k = 0; k < substrToCheck.length; k++){

      if (currentHash.hasOwnProperty(substrToCheck[k])) {
        --currentHash[substrToCheck[k]];
      };

      if (Object.values(currentHash).every((elem) => elem === 0)){
        return true;
      }
    }

  }

  return false;

};

const res = checkInclusion('hello', 'ooolleoooleh');

console.log(res);

var repeatedCharacter = function(s) {

    const hash = {};

    let firstRepeating;

    for (let i = 0; i < s.length; i++){
      if (!hash.hasOwnProperty(s[i])) {
        hash[s[i]] = 1;
      } else if (hash[s[i]] === 1) { // getting the first one already present
        firstRepeating = s[i];
        return firstRepeating;
      }
    }

};

console.log(repeatedCharacter("abccbaacz"));
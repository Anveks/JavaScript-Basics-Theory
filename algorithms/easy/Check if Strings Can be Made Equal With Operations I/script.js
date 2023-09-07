
var canBeEqual = function(s1, s2) {

  for (let i = 0; i < s1; i++) {
    s1 = s1.split('');
    s2 = s2.split('');
    for (let i = 0; i < s1.length - 2; i++) {
       if (s1[i] !== s2[i]) {
          if (s1[i] === s2[i + 2]) {
             let tmp = s1[i + 2]
             s1[i + 2] = s1[i];
             s1[i] = tmp;
          }
       }
    }
     s1 = s1.join('')
    s2 = s2.join('')
    if (s1 === s2) return true;
    return false;
  }

};

console.log(canBeEqual("ascd", "cdab"));
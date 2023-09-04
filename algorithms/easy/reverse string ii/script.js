
// var reverseStr = function(s, k) {
//     const sArr = s.split("");
//     const rArr = [];
//     let reversePrevious = true;

//     for (let i = 0; i < sArr.length; i++) {
//       if (i !== k){
//         rArr.push(sArr[i]);
//       } else if (i === k && reversePrevious) {
//         rArr.reverse();
//         rArr.push(sArr[i]);
//         reversePrevious = false;
//       } else if (i % k === 0 && !reversePrevious) {
//         rArr.push(sArr.slice(i, i+k).reverse())
//       }
//     }
    
//     console.log(rArr);
//     return rArr.join("");
// };

// console.log(reverseStr("abcdefg", 2));

var reverseStr = function(s, k) {

  if (k > s.length) return s.split('').reverse().join('');

  for (let i = 0; i < s.length; i += 2 * k) {
      s = s.substring(0, i) + s.substr(i, k).split('').reverse().join('') + s.substring(i + k);
  }
  
  return s;
};

console.log(reverseStr("abcdefg", 2));
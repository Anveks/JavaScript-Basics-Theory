
function mostFrequentNum(nums) {
  let map = new Map();
  let maxOccurance = 0, element = -1;

  for (const num of nums) {
    if (num % 2 == 0) map.set(num, (map.get(num) || 0) + 1);

    if (num % 2 == 0 && maxOccurance <= map.get(num)) {
      if (maxOccurance == map.get(num)){
        element = Math.min(element, num);
      } else {
        element = num;
        maxOccurance = map.get(element);
      }
    }
    
  }

  return element;
}

console.log(mostFrequentNum([0,1,2,2,4,4,1]));

// let map = new Map();
// let max_freq = 0, element = -1;
// for(let num of nums){
//     if(num % 2 == 0)    map.set(num, (map.get(num) || 0) + 1);
//     if(num % 2 == 0 && max_freq <= map.get(num)){
//         if(max_freq == map.get(num)){
//             element = Math.min(element, num);
//         }else{
//             element = num;
//             max_freq = map.get(element);
//         }
//     }
// }
// return element;
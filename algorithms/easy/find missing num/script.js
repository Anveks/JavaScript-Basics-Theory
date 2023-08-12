
let arr = [1,2,3,4,5,6,7,8,10];

let missingNum;

for (let i = 0; i < arr.length - 1; i++){
  arr[i] + 1 !== arr[i + 1] 
    ? missingNum = arr[i] + 1 
    : ''
}

console.log('the missing num is: ' + missingNum);
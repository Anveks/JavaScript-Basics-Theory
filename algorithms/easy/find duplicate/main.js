
const arr = [1,2,3,4,5,6,7,7,8,6,10];

// solution for 1 duplication:
// const getDuplicates = arr => {
//   const obj = {};
//   for (let i = 0; i < arr.length - 1; i++){
//     if (obj[arr[i]]){
//       return arr[i]; // in case we already have this key in an object - return it
//     } else {
//       obj[arr[i]] = 1; // in case we dont = assign a 1 value to it
//     }
//   }
//   return false;
// }
// console.log(getDuplicates(arr));

// solution for 2 duplications:
const obj = {};

for (let i = 0; i < arr.length - 1; i++){
  obj[arr[i]] === undefined 
    ? obj[arr[i]] = 1 
    : obj[arr[i]] += 1;
}

const duplicates = [];

for (const [key, value] of Object.entries(obj)){
  value === 2 
    ? duplicates.push(key) 
    : '';
}

// duplicates here:
console.log(duplicates);
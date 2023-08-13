
const arr = [1,2,3,4,5,6,7,7,8,6,10];

// solution for 2 duplications:
// const obj = {};

// for (let i = 0; i < arr.length - 1; i++){
//   obj[arr[i]] === undefined 
//     ? obj[arr[i]] = 1 
//     : obj[arr[i]] += 1;
// }

// const duplicates = [];

// for (const [key, value] of Object.entries(obj)){
//   value === 2 
//     ? duplicates.push(key) 
//     : '';
// }

// // duplicates here:
// console.log(duplicates);

// more optimized solution:
const getDuplicates = arr => {
  const obj = {};
  const duplicates = []

  for (let i = 0; i < arr.length - 1; i++){
    if (obj[arr[i]]) {
      if (obj[arr[i]] === 1){
        duplicates.push(arr[i])
      }

      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  return duplicates;
}

console.log(getDuplicates(arr));
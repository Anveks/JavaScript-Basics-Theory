
const str1 = 'Mary'
const str2 = 'army'

// const isAnagram = (a, b) => {
//   const arr1 = a.toLowerCase().split("");
//   const arr2 = b.toLowerCase().split("");

//   const match = []

//   for (i in arr1){
//     match.push(arr2.includes(arr1[i]))
//   }

//   return match.every((i) => i === true);
// }

// console.log(isAnagram(str1, str2));

// OR:

const isAnagram2 = (a, b) => {
  const arr1 = a.toLowerCase().split("");
  const arr2 = b.toLowerCase().split("");

  return arr1.sort().join() === arr2.sort().join();
}

console.log(isAnagram2(str1, str2));
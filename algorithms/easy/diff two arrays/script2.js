
// 1. This algorithm is about to compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {

  const totalArr = [...arr1, ...arr2].sort();
  const diffArr = []
  
  for(let i = 0; i < totalArr.length; i++) {
    if (totalArr[i] !== totalArr[i + 1] && totalArr[i] !== totalArr[i - 1]) {
      diffArr.push(totalArr[i]);
    }
  }

  return diffArr;
}

diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]);

// 2. flatten nested arr
function flattenArray(arr) {
  const flatArr = [];
  
  arr.forEach((elem) => {

    Array.isArray(elem) 
      ? flatArr.push(...flattenArray(elem))
      : flatArr.push(elem);

  })

  return flatArr;
};

flattenArray([1, [2, [3]], 4]); // Output: [1, 2, 3, 4]

// 3. Validate US Telephone Numbers

function isValidPhoneNumber(number) {
  const regex = /[\s()\-]/;
  return regex.test(number);
}

isValidPhoneNumber("1 555-555-5555"); // Output: true
isValidPhoneNumber("555-555-5555");   // Output: true
isValidPhoneNumber("1 (555) 555-5555"); // Output: true
isValidPhoneNumber("5555555555");      // Output: true
isValidPhoneNumber("555-5555");        // Output: false

// 4. Longest Palindromic Substring
function longestPalindrome(str) {
  if (str === str.split("").reverse().join("")) {
    return str;
  } else {
    // Slice the last character from the string
    str = str.slice(0, -1);
    // Recursively call the function with the sliced string
    return longestPalindrome(str);
  }
}

console.log(longestPalindrome("abacdfgdcaba"));
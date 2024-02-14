
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
};

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

longestPalindrome("abacdfgdcaba");

// 5. add digits
const addDigits = function(num) {
  if (num < 10) return num;

  const digArr = num.toString().split("");
  let sum = 0;

  for (let i = 0; i < digArr.length; i++) {
    sum += Number(digArr[i]);
  }

  return addDigits(sum);
};

console.log(addDigits(32312));

  // const sum = digArr.reduce((acc, curr) => acc + Number(curr), 0);

  // if (String(sum).length !== 1) return addDigits(sum);
  // else return sum;

// 6. ugly number https://leetcode.com/problems/ugly-number/
var isUgly = function(n) {
    
};

// 7. fib sequence
function fib(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    if (i <= 1) {
      arr.push(i);
    } else {
      const sum = arr[i-1] + arr[i-2];
      arr.push(sum);
    }
  };

  return arr;
};

fib(5);

// 8. prime factors
function primerFactors(num) {
  let prime = 2;
  const factorsArr = [];

  while (num > 1) {
    if (num % prime === 0) {
      factorsArr.push(prime);
      num = num / prime;
    } else {
      prime++;
    }
  }

  return factorsArr;
};

console.log(primerFactors(600));

// 9. longest substring without repeating characters
const longestSubstring = str => {
  const hash = {};
  let substr = "";

  for (const letter of str) {
    if (!hash.hasOwnProperty(letter)) {
      hash[letter] = 1;
      substr = substr.concat(letter);
    } else {
      console.log(substr);
      return substr.length;
    }
  }

};

console.log(longestSubstring('bbb'));
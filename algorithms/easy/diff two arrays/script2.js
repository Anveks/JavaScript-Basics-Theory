"use strict"
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

console.log(this);


function displayThis() {
  console.log(this);
}

const displayThisArrow = () => {
  console.log(this);
}
displayThis(); // undefined because of the strict mode, otherwise window 
displayThisArrow(); // window because arrow functions get the context of the execution context

// max num
function findMax(arr) {
  return arr.sort((a,b) => a - b)[arr.length - 1];
}

console.log(findMax([3, 8, 1, 6, 2, 8, 10]));

// check if anagrams
function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  const hash = {};
  const strArr = s1.concat(s2).split("");
  for (const letter of strArr) {
    if (!hash.hasOwnProperty(letter)) {
      hash[letter] = 1;
    } else {
      ++hash[letter];
    }
  }

  return Object.values(hash).every((elem) => elem === 2);
}

areAnagrams('listen', 'silent'); // Output: true
areAnagrams('hello', 'world');   // Output: false

// Counting Valleys
// Given a string representing a hiker's path, where 'U' represents a step uphill and 'D' represents a step downhill, the task is to find and return the number of valleys the hiker traverses. A valley is defined as a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

function countValleys(track) {
  let seaLevel = 0;
  let valleys = 0;

  for (let step of track) {
    if (step === 'U') {
      seaLevel++;
      if (seaLevel === 0) {
        valleys++;
      }
    } else if (step === 'D') {
      seaLevel--;
    }
  }

  return valleys;
}

console.log(countValleys('UDDDUDUU')); // Output: 1

// Rotate Matrix
// Given an n x n 2D matrix representing an image, rotate the matrix by 90 degrees clockwise. You have to rotate the image in-place, meaning you have to modify the input matrix directly, instead of returning a new matrix.
console.log('-------------------------------');
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function rotateMatrix(matrix) {
  const n = matrix.length;
  
  // Create a new matrix to store the rotated values
  const rotatedMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  console.log(rotatedMatrix);

  // Loop through each row and column of the original matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Rotate the elements: matrix[i][j] goes to rotatedMatrix[j][n-1-i]
      rotatedMatrix[j][n - 1 - i] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}

console.log(rotateMatrix(matrix));
// After rotation, matrix should be:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// valid parenthesis 2
console.log('---------------------------');
function isValid(str) {
  const stack = [];
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const br of str) {
    if (br === '(' || br === '[' || br === '[') {
      stack.push(br);
    } else {
      const prevBr = stack.pop();
      if (prevBr !== brackets[br]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));      // Output: true

// next greater element
// given an array of integers find the next greater element for each element in the array, if no - add -1; should return a new array 
console.log('---------------------------');

function nextGreaterElement(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j] && i < j) {
        newArr.push(arr[j]);
        found = true;
        break;
      } 
    }

    if (!found) newArr.push(-1);

  }

  console.log(newArr);
};

console.log(nextGreaterElement([4, 5, 2, 10, 8])); // Output: [5, 10, 10, -1, -1]

// the same solution but using stack:
function nextGreaterElementStack(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1); // Initialize result array with -1

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
}

console.log(nextGreaterElementStack([4, 5, 2, 10, 8])); // Output: [5, 10, 10, -1, -1]

// Evaluate Reverse Polish Notation (RPN):
console.log('---------------------------');

function reversePolishNotation(tokens) {
  const stack = [];

for (const token of tokens) {
  if (!isNaN(Number(token))) {
    stack.push(+token);
  } else {
    const n1 = stack.shift(); // getting the first elems and removing them from the arr
    const n2 = stack.shift();
    
    if (token === '+') stack.push(n1 + n2);
    else if (token === '-') stack.push(n1 - n2);
    else if (token === '*') stack.push(n1 * n2);
    else if (token === '/') stack.push(Math.ceil(n1 / n2));
  }
}

  return stack.pop();
}

console.log(reversePolishNotation(["4", "13", "5", "/", "+"])); // Output: 3 (2 + 1);

// medium: LONGEST PALINDROME - if you read this then i hate this algorithm with all my heart and soul 
console.log('---------------------------');

function longestPalindromeMyAss(s) {
  if (s.length === 0) return -1; // Return -1 if input string is empty

  const isPalindrome = str => str.split("").reverse().join("") === str;

  const substrArr = [];
  for (let i = 1; i <= s.length; i++) {
      substrArr.push(s.substring(0, i)); // Substring from the beginning
      substrArr.push(s.substring(s.length - i)); // Substring from the end
  }

  const palindromeArr = substrArr.filter((s) => s.length > 1 && isPalindrome(s));

  if (palindromeArr.length > 0) {
      const lengths = palindromeArr.map((p) => p.length);
      const maxLength = Math.max(...lengths);
      const longestPalindromes = palindromeArr.filter((p) => p.length === maxLength);
      return longestPalindromes; // Return the longest palindrome(s)
  }

  return substrArr[0]; // Return the first character if no palindrome is found
}


console.log(longestPalindromeMyAss('banana'));

// longest substring without repeating characters
console.log('---------------------------');

function longestSubstringWithoutRepeat(str) {

  // 1️⃣ hash approach:
  // let hash = {};
  // let substr = "";

  // for (const letter of str) {
  //   if (!hash.hasOwnProperty(letter)) {
  //     hash[letter] = 1;
  //     substr += letter; // strings are immutable so you cant use the ""concat" here
  //   } else {
  //     hash = {};
  //     substr = "";
  //   }
  // }

  // return substr;

  //  2️⃣ set approach:
  let startIndex = 0;
  for (let i = 1; i < str.length; i++) {
    const substr = str.substr(startIndex, str.length);
    const uniqueStr = new Set(substr.split(""));

    if (substr.length === uniqueStr.size) return substr;
    else ++startIndex;
  }

}
console.log(longestSubstringWithoutRepeat("pwwkew"));

// valid sudoku
console.log('---------------------------');

function validSudoku(sudoku) {

  const checkRows = s => {
    s.forEach((row) => {
      row.forEach((elem) => {
        if (elem !== "." && elem >= 10) return false;
      })
    })
    return true;
  };

  const checkColumns = s => {
    for (let col = 0; col < s.length; col++) { // Iterate over columns
      console.log('row');
      for (let row = 0; row < s.length; row++) { // Iterate over rows
        if (s[row][col] !== '.' && s[row][col] >= 10) return false;
      }
    }
    return true;
  }
  
  const checkGrid = s => {
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
          const set = new Set();
          for (let i = row; i < row + 3; i++) {
              for (let j = col; j < col + 3; j++) {
                  const cell = s[i][j];
                  if (cell !== '.' && set.has(cell)) {
                      return false; // Duplicate value found in grid
                  }
                  set.add(cell);
              }
          }
      }
  }
    return true; // All grids are valid
  }

  checkColumns(sudoku);
  
  if (checkRows(sudoku) && checkColumns(sudoku) && checkGrid(sudoku)) return true;
  else return false;
};

const su = [  
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]

console.log(validSudoku(su));

console.log('___________________________');
// group the same anagrams
function groupAnagrams(ang) {
  const sortedAng = {};

  for (const word of ang) {
    const sortedWord = word.split("").sort().join("");

    if (!sortedAng.hasOwnProperty(sortedWord)) sortedAng[sortedWord] = [word];
    else sortedAng[sortedWord].push(word);
  };

  return Object.values(sortedAng);
}

const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(anagrams));

// array prototype last: add a new method to the prototype of arrays
Array.prototype.last = function() {
  if (this.length === 0) return -1;
  else return this[this.length - 1];
};
const nums = [];
console.log(nums.last()); // -1

// create counter:
var createCounter = function(n) { // thats a closuer and high order func at the same time

    return function() { // inner function remembers the "state" even after the outer function finishes execution
      n++; 
      return n;
  };
};
const counter = createCounter(10);
console.log(counter(), counter(), counter()); // 11, 12, 13 







const sortStr = str => {
  return str.split("").sort().join("")
}

var findAnagrams = function(s, p) {

    const anagramIndices = []; // empty arr for indices

    let startIndex = 0; // start index will be shifted
    let endIndex = p.length; // end index stays the same

    for (let i = 0; i <= s.length - 1; i++) {  
      const testString = s.substr(startIndex, endIndex); // on each iteration get test string
      
      if(sortStr(testString) === sortStr(p)) { // check it 
        anagramIndices.push(startIndex); // in case of match - push the start index
        ++startIndex; // increment the start index
      } else {
        ++startIndex;
      }
    }

    return anagramIndices;

};

console.log(findAnagrams("cbaebabacd", "abc"));


// a function that tests if a string is a literal or an object:

const testString = str => {
  if (typeof(str) === 'string') return 'literal string';
  if (str instanceof Object) return 'object';
}

const objStr = new String('hello')
console.log(testString(objStr));

// merging two objects dynamically:

var person = {
	name : 'John',
	age  : 24
}

var address = {
	addressLine1 : 'Some Location x',
	addressLine2 : 'Some Location y',
	city : 'NewYork'
} 

const merge = (toObj, fromObj) => Object.assign(toObj, fromObj);

console.log(merge(person, address));
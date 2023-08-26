
// find the first occurance of the duplicate and return it

const uniqueInOrder = (str) => {
  const firstElems = []; // prepare emty arr

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) { // in case first and last index match - the element is not duplicated;
      if (str[i] !== str[i + 1]) { // push only the element that is not followed by the same element (AAB will return only A);
        firstElems.push(str[i]);
      }
    }
  }

  return firstElems; // return the arr
};

console.log(uniqueInOrder("AAAABBBCCDAABB"));
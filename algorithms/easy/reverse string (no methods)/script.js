
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // swap characters at left and right pointers
    const temporarilySavedValue = s[left];
    s[left] = s[right];
    s[right] = temporarilySavedValue;

    left++;
    right--;
  }

};

console.log(reverseString('Hello'));



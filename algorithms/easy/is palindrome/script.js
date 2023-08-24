
// number
// var isPalindrome = function(x) {
//     if (x < 0) return false;
//     const reversed = `${x}`.split('').reverse().join('')

//     return `${x}` === reversed;
// };

// console.log(isPalindrome(121));

// string:
var isPalindromeStr = function(s) {
    const str = s.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()@"'\[\]]/g, "").replace(/ /g, '').replace(/]/, "");
    console.log(str);
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
};

console.log(isPalindromeStr("Live on evasions? No, I save no evil."));

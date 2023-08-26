
var repeatedSubstringPattern = function(s) {

    if (s.length === 1) return false;

    let index = 1; // set index as 1

    for (let i = 0; i < s.length; i++){
        const pattern = s.substr(i, index); // extract the pattern from the string

        if (pattern.repeat(s.length/pattern.length) !== s) { // if you repeat the pattern ant it is not equal to the string - open another block
            if (index <= s.length) { // if the index is less than the chars inside the string - increment the index
                ++index;
            } else { // if the index exceeds the num of chars - there is no pattern
                return false;
            }
        } else {
            return true; // in case the pattern.repeat matches with the original string
        }
    }

    return false; // just in case

};

console.log(repeatedSubstringPattern('dundundu'));
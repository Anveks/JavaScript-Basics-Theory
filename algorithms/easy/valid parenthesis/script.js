
var isValid = function(s) {
    const matches = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        switch(char){
            case '(': 
                matches.push(')')
                break;
            case '{': 
                matches.push('}')
                break;
            case '[': 
                matches.push(']')
                break;
            default:
                if (char !== matches.pop()){
                    return false;
                }              
        }
    }

    console.log(matches);
    return matches.length === 0;
};

console.log(isValid("()[]{}")); // should return true
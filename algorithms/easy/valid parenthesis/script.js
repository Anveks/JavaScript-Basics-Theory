
var isValid = function(s) {
    const hash = {'(': ")", '{': "}", '[': "]"}
    const stack = [];

    for (let character of s) {
        if (hash[character]) {
            stack.push(hash[character]);
        } else if (stack.length > 0 && stack[stack.length - 1] === character) {
            stack.pop()
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}}")); // should return true
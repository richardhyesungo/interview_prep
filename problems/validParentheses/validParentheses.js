function isValid(s) {
    // check if odd length, return false if so
    if (s.length % 2 === 1) {
        return false;
    }
    // add chars to a stack
    // if one of the closing brackets, pop the most recent char
    // from the stack. If not matching, return false
    // can use hash map to quickly determine if match
    var pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    var openingChars = ["(", "{", "["];
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        // push opening chars to stack
        if (openingChars.includes(char)) {
            stack.push(char);
        }
        else {
            // if not, is a closing char. Pop, check if char matches pair
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
//# sourceMappingURL=validParentheses.js.map
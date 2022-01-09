function isValid(s: string): boolean {
  // check if odd length, return false if so
  if (s.length % 2 === 1) {
    return false;
  }

  // add chars to a stack
  // if one of the closing brackets, pop the most recent char
  // from the stack. If not matching, return false
  // can use hash map to quickly determine if match

  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let openingChars = ["(", "{", "["];

  let stack = [];

  for (const char of s) {
    // push opening chars to stack
    if (openingChars.includes(char)) {
      stack.push(char);
    } else {
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

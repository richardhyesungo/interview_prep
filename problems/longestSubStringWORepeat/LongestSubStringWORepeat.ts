function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) {
    return s.length;
  }
  // two pointers
  // iterate through string
  // think this can be done in O(n) time and O(1) space

  let maxLength = 0;
  let left = 0;
  let right = 1;
  let curLength = 0;

  // check if left and right are the same
  // should i use a for loop or a while loop?
  // for loop would stop after the length of the string
  // while loop would stop when right is equal to the length of the string
  while (right < s.length) {
    let leftChar = s[left];
    let rightChar = s[right];

    // increment by 1 for non-duplicates

    // check if either left = right or right equal to prev char
    if (leftChar === rightChar || rightChar === s[right - 1]) {
      left = right;
      right += 1;
    } else {
      right += 1;
      curLength += 1;
    }

    maxLength = Math.max(maxLength, curLength);
  }

  return maxLength;
}

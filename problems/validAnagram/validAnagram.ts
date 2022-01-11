function isAnagram(s: string, t: string): boolean {
  // iterate through the first string and add to hash map
  // iterate through second string and subtract from hash map
  // if letter doesn't exist or zero, return false
  // if no trouble and all letters are zero, return true

  let tracker: { [key: string]: number } = {};
  let result = true;

  // add first string chars to tracker
  for (const char of s) {
    tracker[char] = tracker[char] + 1 || 1;
  }

  // subtract all chars of second string from tracker
  for (const char of t) {
    if (tracker[char] === undefined || tracker[char] === 0) {
      return false;
    } else {
      tracker[char] -= 1;
    }
  }

  // check if any properties are 1 or greater
  for (const [key, value] of Object.entries(tracker)) {
    if (value > 0) {
      return false;
    }
  }

  return result;
}

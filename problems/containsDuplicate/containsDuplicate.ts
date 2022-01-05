function containsDuplicate(nums: number[]) {
  // iterate through array
  // add each num to object
  // if object already exists, return true
  let tracker = {};
  for (const num of nums) {
    if (!tracker[num]) {
      tracker[num] = 1;
    } else {
      return true;
    }
  }
  return false;
}

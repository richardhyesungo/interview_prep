function missingNumber(nums: number[]): number {
  let xorResult: number = 0;

  for (let i = 0; i < nums.length; i++) {
    xorResult ^= nums[i];
  }

  for (let i = 0; i < nums.length + 1; i++) {
    xorResult ^= i;
  }

  return xorResult;
}

/*
  [9, 6, 4, 2, 3, 5, 7, 0, 1]
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [9, 7, 6, 1, 4, 0, 1, 7, 9, ]

  0  -> 0000
  1  -> 0001
  2  -> 0010
  3  -> 0011
  4  -> 0100
  5  -> 0101
  6  -> 0110
  7  -> 0111
  8  -> 1000
  9  -> 1001
  10 -> 1010

*/

function rob(nums: number[]): number {
  // [4, 1, 100, 100, 4]
  let rob1: number = 0;
  let rob2: number = 0;
  let newSum: number;

  for (const num of nums) {
    // 4 // 1
    // temp = Math.max(num + rob1, rob2); // 4 + 0, 0 = 4 // 1 + 0, 4
    // rob1 = rob2; // 0
    // rob2 = temp; // 4

    // alternate
    newSum = num + rob1; // 1. 4 + 0 // 2. 1 + 0 = 1 // 3. 100 + 4 = 104 // 4.
    rob1 = rob2; // assign to previous rob2 // 1. 0 // 2. 4 // 3. 4
    rob2 = Math.max(newSum, rob2); // 1. 4 or 0 = 4 // 2. 4 or 1 = 4 // 3. 4 or 104 = 104
  }

  return rob2;
}

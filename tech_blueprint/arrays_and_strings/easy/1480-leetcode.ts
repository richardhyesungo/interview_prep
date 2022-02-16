function runningSum(nums: number[]): number[] {
  let currentSum: number = 0;
  let runningSumArray: number[] = [];

  for (const num of nums) {
    currentSum += num;
    runningSumArray.push(currentSum);
  }

  return runningSumArray;
}

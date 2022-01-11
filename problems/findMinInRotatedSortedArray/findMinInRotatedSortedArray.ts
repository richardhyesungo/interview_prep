function findMin(nums: number[]): number {
  // check if already sorted
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let leftStart = 0;
  let leftEnd = Math.floor(nums.length - 1 / 2);

  let rightStart = leftEnd + 1;
  let rightEnd = nums.length - 1;

  // re-assign left or right start and end
  // once check if left or right is unsorted
  return 1; // COME BACK TO THIS!!
}

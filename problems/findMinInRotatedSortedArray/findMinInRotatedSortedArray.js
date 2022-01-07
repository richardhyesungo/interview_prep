function findMin(nums) {
    // check if already sorted
    if (nums[0] < nums[nums.length - 1]) {
        return nums[0];
    }
    var leftStart = 0;
    var leftEnd = Math.floor(nums.length - 1 / 2);
    var rightStart = leftEnd + 1;
    var rightEnd = nums.length - 1;
    // re-assign left or right start and end
    // once check if left or right is unsorted
}
//# sourceMappingURL=findMinInRotatedSortedArray.js.map
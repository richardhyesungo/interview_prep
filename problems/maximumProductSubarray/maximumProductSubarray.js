"use strict";
// function maxProduct(nums: number[]): number {
//   // think i could do the same as the last question but with products
//   // no.. if there's two negs, they turn to positive
//   // how to handle that?
//   //
//   let maxSub = nums[0];
//   let curProduct = 0;
//   let curProductNegs = 0;
//   // loop forwards then backwards
//   for (let i = 0; i < nums.length; i++) {
//     if (curProduct < 0) {
//       curProduct = 0
//     }
//     if (curProduct === 0 && nums[i] > 0) {
//       curProduct = nums[i]
//     }
//     if (curProductNegs === 0) {
//       curProductNegs = nums[i]
//     }
//     curProduct *= nums[i]
//     curProductNegs *= nums[i]
//     maxSub = Math.max(maxSub, curProduct, curProductNegs);
//   }
//   for (let i = nums.length - 1; i > -1; i--) {
//     maxSub = Math.max(maxSub, curProduct, curProductNegs);
//   }
//   return maxSub;
// }
// video solution
function maxProduct(nums) {
    let res = Math.max(...nums);
    let curMin = 1;
    let curMax = 1;
    for (const n of nums) {
        let temp = curMax * n;
        curMax = Math.max(temp, n * curMin, n);
        curMin = Math.min(temp, n * curMin, n);
        res = Math.max(res, curMax);
    }
    return res;
}
/*
  thoughts on video solution
  this works when at 0 because curMax and curMin would be reset to 0
  in an instance of [-1, 4, 0, -1, -5] at index 2
  res would be 4
  curMax would be 0
  curMin would be 0
  res would be 4

  then at index 3 (-1)
  res would be 4
  curMax would be 0
  curMin would -1
  res would be 4

  at index 4 (-5)
  res would be 4
  curMax would be 5 because -1 x -5 = 5
  curMin would be -5
  res would be 5 (res, curMax)

  so pattern is to get max of array first
  initialize curMax and curMin to 1
  set a temp variable to track curMax x n
  determine the max btwn curMax x n, curMin x n, and n
  determine the min btwn curMax x n, curMin x n, and n
  set res equal to the max between curMax and res
  return res

*/

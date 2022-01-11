"use strict";
function maxArea(height) {
    // [1,8,6,2,5,4,8,3,7]
    // tracking variables
    let max = 0;
    let currentArea = 0;
    let left = 0;
    let right = height.length - 1; // 9 - 1 = 8
    // iterate through array
    // assign max to the max between current area and max
    // compare left and right heights
    // increment lower height pointer
    while (left < right) {
        // left = 0, right = 8
        let leftHeight = height[left]; // 1
        let rightHeight = height[right]; // 7
        currentArea = Math.min(leftHeight, rightHeight) * (right - left); // 1 * 8 = 8
        max = Math.max(max, currentArea); // max = 8
        if (leftHeight < rightHeight) {
            // true
            left++; // left = 1
        }
        else {
            right--;
        }
    }
    return max;
}

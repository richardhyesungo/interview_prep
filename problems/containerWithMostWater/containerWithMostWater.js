function maxArea(height) {
    // [1,8,6,2,5,4,8,3,7]
    // tracking variables
    var max = 0;
    var currentArea = 0;
    var left = 0;
    var right = height.length - 1; // 9 - 1 = 8
    // iterate through array
    // assign max to the max between current area and max
    // compare left and right heights
    // increment lower height pointer
    while (left < right) {
        // left = 0, right = 8
        var leftHeight = height[left]; // 1
        var rightHeight = height[right]; // 7
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
//# sourceMappingURL=containerWithMostWater.js.map
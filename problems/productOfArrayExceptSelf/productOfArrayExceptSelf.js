function productExceptSelf(nums) {
    var results = [];
    // establish results array with value of 1
    for (var i = 1; i < nums.length; i++) {
        results.push(1);
    }
    // iterate through nums array forwards, keeping track of product
    for (var i = 1; i < nums.length; i++) {
        // multiply by i with product to assign to i + 1
        results[i] = nums[i - 1] * results[i - 1]; // nums[0] * results[0]
        // results[2] = nums[1] * results[1] = 1 x 5 = 5
        // results[3] = nums[2] * results[2] = 3 * 5 = 15
    }
    // iterate through nums array backwards, keeping track of product
    var postfix = 1;
    for (var i = nums.length - 1; i > -1; i--) {
        // multiply by i with product to assign to i - 1
        results[i] *= postfix;
        postfix *= nums[i];
    }
    return results;
}
//# sourceMappingURL=productOfArrayExceptSelf.js.map
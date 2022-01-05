function containsDuplicate(nums) {
    // iterate through array
    // add each num to object
    // if object already exists, return true
    var tracker = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (!tracker[num]) {
            tracker[num] = 1;
        }
        else {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=containsDuplicate.js.map
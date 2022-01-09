function isAnagram(s, t) {
    // iterate through the first string and add to hash map
    // iterate through second string and subtract from hash map
    // if letter doesn't exist or zero, return false
    // if no trouble and all letters are zero, return true
    var tracker = {};
    var result = true;
    // add first string chars to tracker
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        tracker[char] = tracker[char] + 1 || 1;
    }
    // subtract all chars of second string from tracker
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var char = t_1[_a];
        if (tracker[char] === undefined || tracker[char] === 0) {
            return false;
        }
        else {
            tracker[char] -= 1;
        }
    }
    // check if any properties are 1 or greater
    for (var _b = 0, _c = Object.entries(tracker); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (value > 0) {
            return false;
        }
    }
    return result;
}
//# sourceMappingURL=validAnagram.js.map
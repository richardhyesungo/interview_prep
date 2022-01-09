function isPalindrome(s) {
    // convert all letters to lowercase
    // remove all non-alphanumeric characters
    // includes both numbers and letters
    // can do this in O(n) time with O(1) space
    // iterate once, format
    s = s.replace(/[^A-Z0-9]/gi, "");
    // iterate again, compare from out to in, two pointers
    for (var i = 0; i < s.length; i++) {
        var left = s[i].toLowerCase();
        var right = s[s.length - 1 - i].toLowerCase();
        if (left !== right) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=validPalindrome.js.map
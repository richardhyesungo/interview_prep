"use strict";
function longestPalindrome(s) {
    let longestSubString = "";
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        // check odd
        let left = i;
        let right = i;
        // while palindrome
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                longestSubString = s.substring(left, right + 1);
                maxLength = right - left + 1;
            }
            left -= 1;
            right += 1;
        }
        // check even
        // while palindrome
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                longestSubString = s.substring(left, right + 1);
                maxLength = right - left + 1;
            }
            left -= 1;
            right += 1;
        }
    }
    return longestSubString;
}
/*

inputs: string
outputs: longest palindromic substring


time: O(n^2)

iterate through each character
see if there's a palindrome there, then compare length to maxLength

they want me to return the actual palindrome substring as well

can check if an even or odd by comparing current with next
if even, then it's an even palindrome
could save the start and end instead of the whole string
then iterate through start and end
could have a tuple [length, [start, end]]
start and end would just be the left and right pointer values




*/

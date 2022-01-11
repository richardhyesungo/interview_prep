"use strict";
function characterReplacement(s, k) {
    // iterate through string with two pointers, L & R
    // track char frequency
    // sliding window
    // increment char frequency
    let charTracker = {};
    let maxSubLength = 0;
    let left = 0;
    let maxCharFreq = 0;
    // use right when for loop
    for (let right = 0; right < s.length; right++) {
        // check current window size minus max freq against k
        // initialize each char in tracker based on the right pointer
        charTracker[s[right]] = charTracker[s[right]] + 1 || 1;
        // keep track of max char frequency by getting max btwn max & char max
        maxCharFreq = Math.max(maxCharFreq, charTracker[s[right]]);
        // check if valid window else decrement char at L in string and move L
        while (right - left + 1 - maxCharFreq > k) {
            charTracker[s[left]] -= 1;
            left += 1;
        }
        // max is either current max or current sliding window
        maxSubLength = Math.max(maxSubLength, right - left + 1);
    }
    return maxSubLength;
}
// string and integer
// choose any character of the string and change it
// so given a string
// try to get a higher number of repeating a character
// by changing up to k other characters
// given uppercase english letters
// so A-Z
// ('ABCD', 1) -> AACD -> 2 OR BBCD, ACCD, ABDD
//
// what about a hash table?
// what about an array?
// what about another string?
// need to find max so use Math.max()
// could do 2 pointers
// check each letter in the string
// go outwards and change the letters up to k times
// naive solution would be nested for loops?
// maybe not since k is s.length
// think i could do this in O(n^2)
// is there a way to do this faster?
// maybe could add letters up
/*

let string = "GBGDGEFGG", 3
let tracker = {
  "G": [0, 2, 4, 7, 8],
  "B": [1],
  "D": [3],
  "E": [5],
  "F": [6],
}
1 = yes
0 = no
[1, 0, 1, 0, 0, 0, 1, 1]


adding into object would be O(n)

so could start with G since it has highest length
Check the difference between each element in the array
then I could do the two sum thing? or similar
if element is equal to letter, skip
else increment count
if all elements the same - then just add 1 to the count


*/

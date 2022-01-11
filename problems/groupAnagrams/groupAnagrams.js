"use strict";
function groupAnagrams(strs) {
    let tracker = {};
    let result = [];
    for (const str of strs) {
        let trackerKeyArray = new Array(26).fill(0);
        for (const char of str) {
            trackerKeyArray[char.charCodeAt(0) - 97] += 1 || 1;
        }
        let trackerKeyString = trackerKeyArray.join("#");
        if (tracker[trackerKeyString]) {
            tracker[trackerKeyString].push(str);
        }
        else {
            tracker[trackerKeyString] = [str];
        }
    }
    for (const [key, value] of Object.entries(tracker)) {
        result.push(value);
    }
    return result;
}
/*

inputs: array of strings
output: array of arrays of grouped anagrams
constraints: string consists of lowercase english letters
edge cases: empty, no matching anagrams

iterate through
find groups of anagrams
add them into an array together and add to outer array
of all anagrams

think this will be O(n^2)
Need to iterate through each element
also need to iterate through each char in each element
to check if anagram

first, check if an element is an anagram of another
i would count the occurrence of each character

could sort each element so that their chars are in alphabetical order

iterate through each string
check if anagram of any
add to a separate array if not matched

what about sorting each word first
use object to hold sorted string as key, value as an array of indices
after, iterate through object and key value pairs to array of arrays
alphabetical sorting of one string would be O(n log n)
sorting all strings would be O(n^2 log n) i think

video solution is basically use an array as the key

Javascript doesn't allow this so maybe convert it to a string?
yes
initialize an empty array, 26 elements with value of 0
let compareArray = [1, 0, ... 0] -> 'a'
convert to character code using charCodeAt() - 97
'a'.charCodeAt() -> returns 97 - 97 = 0
'z'.charCodeAt() -> returns 122 - 97 = 25
convert compareArray to string
add string as key to the tracker object
if it doesn't already exist, initialize it with arrayString = [element]
if it does exist, push it into the array

*/

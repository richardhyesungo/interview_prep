"use strict";
/**
 * Encodes a list of strings to a single string.
 */
function encode(strs) {
    let encodedString = "";
    for (const str of strs) {
        encodedString += str.length + "#" + str;
    }
    return encodedString;
}
/**
 * Decodes a single string to a list of strings.
 */
function decode(s) {
    let decodedArrayOfStrings = [];
    let i = 0;
    while (i < s.length) {
        let j = i;
        while (s[j] !== "#") {
            j += 1;
        }
        // characters before pound sign indicate length of string
        // pound sign
        // string
        // 5#hello
        // 10#peppermint
        // need to convert string before poundsign into a number
        // from i to j would be the number length
        // j would be the pound sign
        // j + 1 would be the start of the word and (j - i + 1) would be end of word
        let length = parseInt(s.substring(i, j));
        let poundSign = s[j];
        let word = s.substring(j + 1, j + 1 + length);
        decodedArrayOfStrings.push(word);
        i = j + 1 + length;
    }
    return decodedArrayOfStrings;
}
/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
/*

2 functions - encode and decode

encode -> encodes a list of strings to a single string

decode -> decodes a stringle string to a list of strings

inputs: list of strings
outputs: encoded string
constraints:
edge cases: can't use any serialize methods (such as eval)


*/

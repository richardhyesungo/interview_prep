"use strict";
function reverseBits(n) {
    // oh my god this was torture
    let result = 0;
    let count = 32;
    while (count--) {
        // iterate through 32 bits
        result *= 2; //
        result += n & 1;
        n = n >> 1;
    }
    return result;
    /* let result = 0;
  
    for (let i = 0; i < 32; i++) {
      // find the last bit of n
      const lastBit = n & 1;
  
      // shift the last bit of n to the left
      const reversedLastBit = lastBit << (31 - i);
  
      // insert the reversed last bit of n into the result
      result |= reversedLastBit;
  
      console.log('n before', n)
  
      // the last bit of n is already taken care of, so we need to drop it
      n >>>= 1;
  
      console.log('n after', n)
      console.log(i, result, result.toString(2))
    }
  
    console.log('result', result.toString(2))
    console.log('', (result >>> 0).toString(2))
  
    // convert the result to an unsigned 32-bit integer
    return result >>> 0; */
}

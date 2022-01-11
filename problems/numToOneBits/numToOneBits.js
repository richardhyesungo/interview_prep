"use strict";
function hammingWeight(n) {
    // solution #1
    let count = 0;
    while (n) {
        // while n is not falsy aka 0
        count += n % 2; // adds either 1 or 0
        n = n >> 1;
    }
    return count;
    // solution #2
    /*  let count = 0;
    while (n) {
      console.log("n", n); //
      n &= n - 1;
      count += 1;
    }
    return count; */
}
/*
what happens in solution #1
uses the unsigned shift operator to shift to the left, which removes
the rightmost bit.
so in the case of 3110001 -> 1011110111010001110001
1011110111010001110001
101111011101000111000
10111101110100011100
...
10
1
0

what happens in solution #2:
    n     3110001 1011110111010001110001
    n - 1 3110000 1011110111010001110000

    n     3110000 1011110111010001110000
    n - 1 3109999 1011110111010001101111

    n     3109984 1011110111010001100000
    n - 1 3109983 1011110111010001011111

    n     3109952 1011110111010001000000
    n - 1 3109951 1011110111010000111111

    n     3109888 1011110111010000000000
    n - 1 3109887 1011110111001111111111

    n     3108864 1011110111000000000000
    n - 1 3108863 1011110110111111111111

    n     3104768 1011110110000000000000
    n - 1 3104767 1011110101111111111111

    n     3096576 1011110100000000000000
    n - 1 3096575 1011110011111111111111

    n     3080192 1011110000000000000000
    n - 1 3080191 1011101111111111111111

    n     3014656 1011100000000000000000
    n - 1 3014655 1011011111111111111111

    n     2883584 1011000000000000000000
    n - 1 2883583 1010111111111111111111

    n     2621440 1010000000000000000000
    n - 1 2621439 1001111111111111111111

    n     2097152 1000000000000000000000
    n - 1 2097151 0111111111111111111111


    the "bitwise" & or ampersand, is an operator that compares the
    binary representation of two numbers and returns the number of
    times the 1s intersect. for the final 2097152 and 2097151,
    there is no further 1's lining up in the binary, so it returns
    0 resulting in n to be assigned to the number 0

    the while loop then breaks because it is set to 0 which is a
    falsy value

    subtracting by 1 results in all of the 0's preceding the next 1
    to be 1, and the 1 to be turned to 0
    therefore, they will not be counted in the AND operator,
    and the result will be the common 1's that the two numbers have.


*/

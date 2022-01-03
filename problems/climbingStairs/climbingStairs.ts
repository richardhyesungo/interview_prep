function climbStairs(n: number) {
  let one = 1;
  let two = 1;
  let temp: number;

  for (let i = 0; i < n - 1; i++) {
    temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}

// dynamic programming
/*
  when visualizing, use the actual sum numbers to find patterns
  such as:
  n = 5
            1           2
          2   3       3   4
        3  4 4  5   4  5 5
      4 5 5 5     5
    5
  # ways = 8

  this used the bottom up dynamic programming approach
*/
module.exports = climbStairs;

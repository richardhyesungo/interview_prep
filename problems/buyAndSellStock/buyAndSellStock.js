function maxProfit(prices) {
    var profit = 0;
    var left = 0;
    var right = 1;
    // compare left and right
    // if left greater than right, that's our new day to buy
    // else keep iterating right
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            // compare profit to max profit
            var tempProfit = prices[right] - prices[left];
            profit = Math.max(tempProfit, profit);
        }
        else {
            left = right;
        }
        right += 1;
    }
    // solution works, but exceeds leetcode's time limit
    // let profit = 0;
    // for (let i = 0; i < prices.length; i++) {
    //   for (let j = i + 1; j < prices.length; j++) {
    //     let pointerOne = prices[i];
    //     let pointerTwo = prices[j];
    //     let difference = pointerTwo - pointerOne;
    //     if (difference > profit) {
    //       profit = difference;
    //     }
    //   }
    // }
    return profit;
}
/*
pseudocode
loop through prices i
  for each iteration,
  loop through prices i + 1
  compare pointer 1 to pointer 2
  if greater than profit, swap out

*/
//# sourceMappingURL=buyAndSellStock.js.map
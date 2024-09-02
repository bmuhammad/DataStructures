/** Stock Trading
 *
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

///notes. any question that ask for max or minimum we use pointers... while loop
//

const stocks = (prices) => {
  //set left pointer l to 0
  let l = 0;

  //set right pointer to 1
  let r = 1;

  //set maxprofit to 0
  let maxProfit = 0;

  //loop over every single price
  //  calculate the profit of the trade
  //      if profit > 0
  //      store it in maxprofit only if profit > maxprofit
  //else move left pointer to right pointer
  //increment r by 1
  //return max profit

  //better to use while loop
  //  for (let r = 1; r < prices.length; ++r) { //  changed for more optimizaaton for (let i = 1; i < prices.length; ++i) {

  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
    ++r;
    //remove this for more optimizaton  r++;
  }

  return maxProfit;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;

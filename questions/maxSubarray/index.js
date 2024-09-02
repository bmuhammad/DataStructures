/** Maximum Subarray
 *
 * Given an integer array `nums`, find the subarray which has the
 * largest sum and return the sum.
 *
 * @examples
 * maxSubArray([5, 4, -1, 7, 8]) = 23
 * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
 * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
 */

const maxSubArray = (nums) => {
  ///need linear solution o(n) time complexity top tech
  //pseudo code for linear solution
  //Set maxsum to first array element
  //set sum to 0
  //loop over every element in the array
  //    if sum is negative
  //    reset sum to zero
  //  add the current number onto sum
  //if maxsum is less than summ
  //  maxsum equals sum
  //return maxsum

  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; ++i) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    maxSum = Math.max(maxSum, sum); //better than if than
    //if (maxSum < sum) {// can make better
    //  maxSum = sum;
    // }
  }
  return maxSum;

  //overall better but it is still o(n2) double for loops are o(n2)
  //let maxSum = nums[0];
  // for (let i = 0; i < nums.length; ++i){  //o(n)
  // let sum = 0;
  // for (let j = i; j < nums.length; ++j ) { //o(n)  not storing values which made other one slow
  //  sum += nums[j];
  //  maxSum = Math.max(maxSum, sum);
  //}

  //}
  // return maxSum;

  //not the best very slow.
  //let maxSum = nums[0];
  // for (let i = 0; i < nums.length; ++i){ //
  // for (let j = i + 1; j <= nums.length; ++j) {
  //  const subarray = nums.slice(i, j);
  // const sum = subarray.reduce((acc, curr) => acc + curr);
  // maxSum = Math.max(maxSum, sum)
  //  if (maxSum < sum) {
  //    maxSum = sum;
  //  }
  //  }
  // }
  //  return maxSum;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;

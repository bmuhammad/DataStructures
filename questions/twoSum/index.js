/** Two Sum **
 * 
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 * 
 */
//use nested for loop to solve this. There will be duplicate checks on a basic double for loop
// to optimize we need to do the following
//1. in top for loop set range of interation to num.length -1 . The last iteration is duplicate checks
//2. in second loop change let j= 0 to let j = 1 . The loop is doing backward duplicate checks
//3. loops are checking against the same value. In 2nd loop change let j= i to j= i + 1
//

const twoSum = (nums, target) => {
  
//mid level solution because of time o(n2) instead of 0(n)
  //  for ( let i = 0; i < nums.length - 1; ++i) {
     //   for (let j = i + 1; j < nums.length; ++j){
            
    //        if(nums[i] + nums[j] === target){
    //            return [i, j]
    //        }
  //      }
 //   }

    

//top tech solution
//Create an empty map(map number we are looking for to current index)
//for each element in the array
//  if the current element exists in the map
 //       return the maps value and the current index
 //     store the number we are looking for in "difference"
 // set "difference" to the current index in map

let mapDifferenceToIndex = new Map();

for (let i = 0; i < nums.length; ++i) {
    if (mapDifferenceToIndex.has(nums[i])) {
       return  [mapDifferenceToIndex.get(nums[i]), i]
    }
    const difference = target - nums[i];
    mapDifferenceToIndex.set(difference, i)
}


   
}

module.exports = twoSum;

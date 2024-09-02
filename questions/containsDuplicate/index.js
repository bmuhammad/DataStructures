/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */


const containsDuplicate = (nums) => {

    //Brute force solution not the best because of time  o(n2) and space o(1)
//Double forloop 
//Loop i from 0 to n - 1
//  loop j from ? to ?
//      if elements at index i and j are equal
//      return true
// return false
//for ( let i = 0; i < nums.length - 1; ++i) {
//    for ( let j = i + 1; j < nums.length; ++j){
  //      if ( nums[i] === nums[j]){
  //          return true;
  //      }
       
 //   }
//}
//return false;



//top tech
//Sort the given array
//Loop from 0 to n - 1
//  if the current element is equal to its next element
//  return true
// return false

//const sortedArr = nums.sort((a, b) => a - b);  ///O(n) space | O(nlog(n)) time

//for (let i = 0; i < sortedArr.length - 1; ++i) {
   // if(sortedArr[i] === sortedArr[i + 1]) {
  //      return true;
   // }
    
//}
//return false;


///Even better top tech to remove the o(log(n)) time for sorting
//create and empty set
//For each element in the array
//  if the current element exist in the set
//      return true
//  add the current number inthe set
//return false
const set = new Set()   //can use map

for (let i = 0; i < nums.length; ++i){
    if(set.has(nums[i])){  //same here can use map
        return true;
    }
    set.add(nums[i])//same here can use map but will be map.set(nums[i], true) set better dont need key
}
return false;

}

module.exports = containsDuplicate;

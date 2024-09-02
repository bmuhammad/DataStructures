/** Binary Search **
 * 
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target. 
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 * 
 */

//binary search can search through a sorted array in O(n)
//pseudo code
// set left and right pointers
// while pointers dont overlap
// set mid pointer
// if num at mid is bigger than target
//  shift right pointer to the left of  mid
//if num at mid is smaller than target
// shift left pointer to the right of mid
// else
// return mid
const binarySearch = (nums, target) => {
let l = 0;
let r = nums.length -1;

while(l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] > target) {
        r = mid - 1
    }
    else if (nums[mid] < target) {
        l = mid + 1
    }
    else {
        return mid 
    }
}


}


//const binarySearch = (nums, target) => {
   
   // }

module.exports = binarySearch;
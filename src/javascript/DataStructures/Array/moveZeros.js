// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 
// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// ------------------------------------------------------------
// Solution 1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const result = nums.sort((a, b) => b - a);

    for (let i = 0; i < result.length; i++) {
        if (result[i] < result [i + 1]) {
            const temp = result[i];
            result[i] = result[i + 1];
            result[i + 1] = temp;
        }
    }
    return result;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));

// Time complexity: O(n^2)
// Space complexity: O(1)

// ------------------------------------------------------------
// Solution 2

function moveZeroes2(nums) {
    return nums.sort((a, b) => b - a);
}

console.log(moveZeroes2([0,1,0,3,12]));
console.log(moveZeroes2([0]));

// Time complexity: O(n log n)
// Space complexity: O(1)

// ------------------------------------------------------------
// Solution 3

function moveZeroes3(nums) {
    let nonZeroIndex = 0;
    
    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }
    
    // Sort the non-zero elements in descending order
    for (let i = 0; i < nonZeroIndex - 1; i++) {
        for (let j = 0; j < nonZeroIndex - i - 1; j++) {
            if (nums[j] < nums[j + 1]) {
                // Swap elements
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
}

console.log(moveZeroes3([0,1,0,3,12]));
console.log(moveZeroes3([0]));

// Time complexity: O(n^2)
// Space complexity: O(1)

// ------------------------------------------------------------

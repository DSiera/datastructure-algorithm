// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sumIndexes = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            const current = nums[i] + nums[j];
            if (current == target) {
                sumIndexes.push(i);
                sumIndexes.push(j);
                return sumIndexes;
            }
        }
    }
    return sumIndexes;
};

// Time complexity: O(n^2)
// Space complexity: O(1)

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

// Solution 2
function twoSum2(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        map.set(complement, i);
    }
    return [];
}

// Time complexity: O(n)
// Space complexity: O(n)

console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([3,2,4], 6));
console.log(twoSum2([3,3], 6));

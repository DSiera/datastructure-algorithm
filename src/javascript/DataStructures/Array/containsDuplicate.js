// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true


// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// ------------------------------------------------------------
// Solution 1
function containsDuplicate(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
}

console.log(containsDuplicate([1,2,3,0]));

// Time complexity: O(n)
// Space complexity: O(n)

// ------------------------------------------------------------
// Solution 2

function containsDuplicate2(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate2([1,2,3,1]));

// Time complexity: O(n^2)
// Space complexity: O(1)

// ------------------------------------------------------------
// Solution 3

function containsDuplicate3(nums) {
    return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate3([1,2,3,1]));

// Time complexity: O(n)
// Space complexity: O(n)

// ------------------------------------------------------------
// Solution 4

function containsDuplicate4(nums) {
    return nums.sort((a, b) => a - b).some((item, index, array) => item === array[index + 1]);
}

console.log(containsDuplicate4([1,2,3,1]));

// Time complexity: O(n log n)
// Space complexity: O(1)

// ------------------------------------------------------------
// Solution 5

function containsDuplicate5(nums) {
    return nums.some((item, index, array) => array.indexOf(item) !== index);
}

console.log(containsDuplicate5([1,2,3,0]));

// Time complexity: O(n^2)
// Space complexity: O(1)

// ------------------------------------------------------------
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
const arr = [1,2,3,4,5,6,7];
const k = 3;
function rotateArray1(arr, k) {
    if (arr.length === 0) {
        return "Invalid input";
    }
    if (k <= 0) {
        return "Invalid input";
    }

    // Create a result array
    let result = [];

    // find the start index to slice
    const breakIndex = arr.length - 1 - k; // 3
    const second = arr.slice(breakIndex + 1);
    const first = arr.slice(0, breakIndex + 1);

    // push the array returned from first slice & push the array return from the second slice
    result.push(second);
    result.push(first);
    return result.flat();
}

// Time complexity O(1)
// Space complexity O(1)
console.log(rotateArray1(arr, k));
console.log(rotateArray1([-1,-100,3,99], 2));
console.log(rotateArray1([], 1));
console.log(rotateArray1([-1,-100,3,99], 0));

function rotateArray2(arr, k) {
    if (arr.length === 0) {
        return "Invalid input";
    }
    if (k <= 0) {
        return "Invalid input";
    }
    let count = 1;
    while (count <= k) {
        arr.unshift(arr.pop());
        count++;
    }
    return arr;
}
//Time complexity O(n^2) exponential - Bad
console.log(rotateArray2(arr, k));
console.log(rotateArray2([-1,-100,3,99], 2));

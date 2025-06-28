const array = [1, 2, 3, 4, 5];
const sum = 5;

// Write a function that checks if there are any pairs of numbers in the array 
// that add up to the sum
function hasPairsWithSum(array, sum) {
    for(let i=0; i<array.length; i++) {
        for(let j=i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

// Time complexity: O(n^2) Quadratic time = bad
// space complexity: O(1) constant space = good

// solution 2
function hasPairsWithSum2(array, sum) {
    let map = {};
    for(let i=0; i<array.length; i++) {
        if(map[array[i]]) {
            return true;
        }
        map[sum - array[i]] = true;
    }
    return false;
}

// Time complexity: O(n) linear time = good
// space complexity: O(n) linear space = bad

// solution 3
function hasPairsWithSum3(array, sum) {
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        let currentSum = array[left] + array[right];
        if(currentSum === sum) {
            return true;
        } else if(currentSum < sum) {
            left++;
        } else {
            right--;
        }
    }
}

// Time complexity: O(n) linear time = good
// space complexity: O(1) constant space = good

console.log(hasPairsWithSum(array, sum));
console.log(hasPairsWithSum2(array, sum));
console.log(hasPairsWithSum3(array, sum));
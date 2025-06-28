// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

function firstRepeat(arr) {
    let map = new Map();
    // OR let map = {};
    for(let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            return arr[i];
        }
        map.set(arr[i], i);
    }
    return undefined;
}

console.log(firstRepeat([2,5,1,2,3,5,1,2,4]));
console.log(firstRepeat([2,1,1,2,3,5,1,2,4]));
console.log(firstRepeat([2,3,4,5]));

// Time complexity: O(n)
// Space complexity: O(n)

// ------------------------------------------------------------
// Solution 2 - Does not work for all cases

function firstRepeat2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            } else {
                if (arr[j] === arr[j + 1]) {
                    return arr[j];
                }
            }
        }
    }
    return undefined;
}

console.log(firstRepeat2([2,5,1,2,3,5,1,2,4]));
console.log(firstRepeat2([2,1,1,2,3,5,1,2,4]));
console.log(firstRepeat2([2,3,4,5]));

// Time complexity: O(n^2)
// Space complexity: O(1)

// ------------------------------------------------------------
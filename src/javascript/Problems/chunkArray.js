// Given an array and a size, split the array into many sub-arrays where 
// each sub-array is of length size

function chunkArray(array, size) {
    let chunked = [];
    for (let i = 0; i < array.length; i+=size) {
        chunked.push(array.slice(i, i+size));
    }
    return chunked;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15], 2));

// Solution 2:
function chunkArray2(array, size) {
    let chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];
        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15], 2));

// Solution 3:
function chunkArray3(array, size) {
    let chunked = [];
    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index+=size;
    }
    return chunked;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(chunkArray3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15], 2));
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

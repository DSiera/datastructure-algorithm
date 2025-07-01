// Implement Merge Sort
// Coding Exercise - MergeSort
// Given an array, sort it by using the merge sort algorithm and return the sorted array.

// Example

// bubbleSort([100, -40, 500, -124, 0, 21, 7]);
//     [-124, -40, 0, 7, 21, 100, 500];

function mergeSort(arr) {

    // base case
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merger(mergeSort(left), mergeSort(right));
}

// merge two sorted arrays
function merger(left, right) {
    let result = [];

    // loop through each array for as long as both of them still have items
        // Compare item [i] on array 1 with array 2:
        // pop from the array the smallest item and push to new array the smallest item
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // Push the remaining items on either array1 or array2 into the new array
    // return result
    return [...result, ...left, ...right];
}

console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));
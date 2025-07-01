// Merge two sorted arrays and return the merged array that is sorted
// Example:
// array1 = [-1, 5, 10] 
// array2 = [-22, 3, 7]
// Return [-22, -1, 3, 5, 7, 10]

function mergeAndSortTwoArrays(array1, array2) {
    let result = [];

    // loop through each array for as long as both of them still have items
        // Compare item [i] on array 1 with array 2:
        // pop from the array the smallest item and push to new array the smallest item
    while(array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            result.push(array1.shift());
        } else {
            result.push(array2.shift());
        }
    }

    // Push the remaining items on either array1 or array2 into the new array
    // return result
    return [...result, ...array1, ...array2];
}

// result = [7]
// array1 = [10, -1, 5]
// array2 = [3, -22]
console.log(mergeAndSortTwoArrays([-1, 5, 10], [-22, 3, 7]));
// merge two sorted arrays
// Example: mergeSortedArray([0,3,4,31], [4,6,30])
// should return [0,3,4,4,6,30,31]

// Solution 1
function mergeSortedArray1(array1, array2) {
    const mergedArray = [...array1, ...array2];
    return mergedArray.sort((a,b) => a - b);
    ;
}
console.log(mergeSortedArray1([0,3,4,31], [4,6,30]));

// Time complexity: O(n log n)
// Space complexity: O(n)

// Solution 2
function mergeSortedArray2(array1, array2) {
    return array1.concat(array2).sort((a,b) => a - b);
}
console.log(mergeSortedArray2([0,3,4,31], [4,6,30]));

// Time complexity: O(n log n)
// Space complexity: O(n)

// Solution 3
function mergeSortedArray3(array1, array2) {
    let mergedArray = [];
    mergedArray.push(array1);
    mergedArray.push(array2);
    return mergedArray.flat().sort((a,b) => a - b);
}
console.log(mergeSortedArray3([0,3,4,31], [4,6,30]));
// Time complexity: O(n log n)
// Space complexity: O(n)

// Solution 4
function mergeSortedArray4(array1, array2) {
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < array1.length || j < array2.length) {
        if (array1[i] === undefined) {
            mergedArray.push(array2[j]);
            j++;
        } else if (array2[j] === undefined) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            if (array1[i] < array2[j]) {
                mergedArray.push(array1[i]);
                i++;
            } else if (array1[i] == array2[j] ) {
                mergedArray.push(array1[i]);
                mergedArray.push(array2[j]);
                i++;
                j++;
            } else {
                mergedArray.push(array2[j]);
                j++;
            }
        }
        
    }
    return mergedArray;
}
console.log(mergeSortedArray4([0,3,4,31], []));
console.log(mergeSortedArray4([], [0,3,4,31]));
console.log(mergeSortedArray4([0,3,4,31], [4,6,30]));
console.log(mergeSortedArray4([0,3,4,31], [4,6,30,31]));
console.log(mergeSortedArray4([0,3,4,31], [0,3,4,31]));
console.log(mergeSortedArray4([0,3,4,31], [0,3,4,31,32]));
console.log(mergeSortedArray4([0,3,4,31], [0,3,4,31,32,33]));
console.log(mergeSortedArray4([0,3,4,31], [0,3,4,31,32,33,34]));
console.log(mergeSortedArray4([0,3,4,31], [0,3,4,31,32,33,34,35]));


// Time complexity: O(n)
// Space complexity: O(n)

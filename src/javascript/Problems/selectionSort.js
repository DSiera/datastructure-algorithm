// Coding Exercise - SelectionSort
// Given an array, sort it by using the selection sort algorithm and return the sorted array.

// Example

// bubbleSort([100, -40, 500, -124, 0, 21, 7]);
//     [-124, -40, 0, 7, 21, 100, 500];

function selectionSort(array) {
 
    for (let i = 0; i < array.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[smallest] > array[j]) {
                smallest = j;
            }
        }

        if (smallest !== i) {
            let temp = array[i];
            array[i] = array[smallest];
            array[smallest] = temp;
        }
    }

    return array;
}

console.log(selectionSort([100, -40, 500, -124, 0, 21, 7]));
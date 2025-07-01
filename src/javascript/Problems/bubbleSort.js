// Coding Exercise - BubbleSort
// Given an array, sort it by using the bubble sort algorithm and return the sorted array.

// Example

// bubbleSort([100, -40, 500, -124, 0, 21, 7]);
//     [-124, -40, 0, 7, 21, 100, 500];

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
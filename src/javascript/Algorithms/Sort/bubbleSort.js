// Bubble Sort
// Time Complexity: O(n^2)
// const array = [5, 3, 8, 4, 2, 15, 9, 10, 11, 20, 7];

function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            let temp = numbers[j];
            if (temp > numbers[j + 1]) {
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}

console.log(bubbleSort([5, 3, 8, 4, 2, 15, 9, 10, 11, 20, 7]));

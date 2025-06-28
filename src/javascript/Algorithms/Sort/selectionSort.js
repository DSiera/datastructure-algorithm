// Selection Sort
// Time Complexity: O(n^2)
// const array = [5, 3, 8, 4, 2, 15, 9, 10, 11, 20, 7];

function selectionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let smallest = numbers[i];  
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < smallest) {
                smallest = numbers[j];
            }
        }
        
    }
}

console.log(selectionSort([5, 3, 8, 4, 2, 15, 9, 10, 11, 20, 7]));
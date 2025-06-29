// Write a program that prints the numbers from 1 to 50. 
// But for multiples of three print "Fizz" instead of the 
// number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
// Example: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, etc...

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // if (i % 15 === 0)
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
fizzBuzz(50);
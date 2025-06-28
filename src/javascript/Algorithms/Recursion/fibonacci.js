// Fibonacci with iteration
function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
//
// time complexity: O(n)
// space complexity: O(n)
console.log(fibonacciIterative(8));



// Fibonacci with recursion
function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// time complexity: O(2^n) - Exponential time complexity
// space complexity: O(n)
console.log(fibonacciRecursive(8));

// Fibonacci with memoization
function fibonacciMemoization(n) {
    let cache = {};
    return function fib(n) {}
}
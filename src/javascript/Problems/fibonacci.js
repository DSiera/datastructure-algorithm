// Coding Exercise - Fibonacci Series
// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers 
// where each number is the sum of the preceeding two.

// For example, the sequence:

//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.

// Example

// fib(4) === 3;
 
// fib(7) === 13;

// solution 1: Iterative
function fib(n) {
    let result = [0, 1];

    if (n < 2) {
        return n;
    }
    for (let i = 2; i <= n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result[n];
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(4));
console.log(fib(7));
console.log(fib(10));

// solution 2: Recursive
function fib2(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

// Time complexity O(n^2) - Bad
// How can we improve time complexity of the recursive fib?
// The answer is "Memoization":
// Memoization: Store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed result,
// rather than running the function again.
console.log("======");
console.log(fib2(0));
console.log(fib2(1));
console.log(fib2(4));
console.log(fib2(7));
console.log(fib2(10));

// solution 3: Memoization
function memoize(fn) {
    let cache = {};
    return function(...args) {
        // check if this function has ever been used
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}
function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

const fib3 = memoize(slowFib);
// Time complexity O(n^2) - Bad
// How can we improve time complexity of the recursive fib?
// The answer is "Memoization":
// Memoization: Store the arguments of each function call along with the result.
// If the function is called again with the same arguments, return the precomputed result,
// rather than running the function again.
console.log("======");
console.log(fib3(0));
console.log(fib3(1));
console.log(fib3(4));
console.log(fib3(7));
console.log(fib3(10));
// Factorial with iteration
function findFactorialIterative(number) {
    let answer = 1;
    if (number === 1) {
        return 1;
    } else if (number === 2) {
        return 2;
    } else {
        for (let i = number; i > 0; i--) {
            answer = answer * i;
        }
    }
    return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialIterative(1));
console.log(findFactorialIterative(2));

// Factorial with iteration # 2 
function findFactorialIterative2(number) {
    let answer = 1;
    if (number === 2) {
        return 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

// time complexity: O(n)
// space complexity: O(1)

console.log(findFactorialIterative2(5));
console.log(findFactorialIterative2(1));
console.log(findFactorialIterative2(2));

// Factorial with recursion
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(2));

// time complexity: O(n)
// space complexity: O(n)

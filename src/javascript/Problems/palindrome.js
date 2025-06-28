// Given a string, return true if the string is a palindrome or false if it is not. 
// A palindrome is a string that reads the same forward and backward.

function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Time Complexity: O(n)
// Space Complexity: O(n)
console.log(palindrome("racecar"));
console.log(palindrome("hello"));

// Solution 2:
function palindrome2(str) {
    const arr = str.split(''); 
    const half = Math.floor(str.length / 2); 
    for (let i = 0; i < half; i++) {
        if (arr[i] !== arr[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Time complexity O(n/2) = O(n)

console.log(palindrome2('racecar'));
console.log(palindrome2('hello'));

function palindrome3(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - 1 - i];
    })
}

console.log(palindrome2('racecar'));
console.log(palindrome2('hello'));
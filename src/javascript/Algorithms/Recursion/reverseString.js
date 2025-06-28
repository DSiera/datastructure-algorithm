// Reverse String with recursion
function reverseString(str) {
    if (str.length === 1) {
        return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// time complexity: O(n)
// space complexity: O(n)
console.log(reverseString('yoyo master'));

// Reverse String with iteration
function reverseStringIterative(str) {
    let reversed = [];
    while(str.length > 0) {
        reversed.push(str[str.length - 1]);
        str = str.slice(0, -1);
    }
    return reversed.join('');
}

// time complexity: O(n)
// space complexity: O(n)
console.log(reverseStringIterative('yoyo master'));
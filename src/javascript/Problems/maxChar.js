// Given a string, return the character that is most commonly used in the string.
// Examples:
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Same solution for the following questions:
// What is the most common character in this string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str) {
    let charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
        // if (charMap[char]) {
        //     charMap[char]++;
        // } else {
        //     charMap[char] = 1;
        // }
    }

    let max = 0;
    let maxChar = '';

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
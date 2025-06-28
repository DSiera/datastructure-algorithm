// Given a string, return the character that is most commonly used in the string.
// Examples:
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Same solution for the following questions:
// What is the most common character in this string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

function maxChar(str) {
    let map = new Map();
    for (let char of str) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    const keys = Object.keys(map);
    let maxObject = {};
    for (let key of keys) {

    }
    return map;
}

console.log(maxChar("abcccccccd"));
console.log(maxChar("apple 1231111"));
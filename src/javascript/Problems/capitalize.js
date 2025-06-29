// Coding Exercise - Capitalization
// Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.

// Examples:

// capitalize('a short sentence') --> 'A Short Sentence'
// capitalize('a lazy fox') --> 'A Lazy Fox'
// capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const charArray = str.split(" "); // ["a", "short", "sentence"]
    let result = [];

    for (let word of charArray) {
        const str = word.split(""); // ["s", "h", "o", "r", "t"] 
        str[0] = str[0].toUpperCase();
        result.push(str.join("") + " "); // ["A ", "Short "]
    }
    return result.join("");
}
console.log(capitalize('a short sentence'));
console.log(capitalize('a lazy fox'));
console.log(capitalize('look, it is working!'));

// Solution 2:
function capitalize2(str) {
    let words = [];

    for (let word of str.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(" ");
}
console.log(capitalize2('a short sentence'));
console.log(capitalize2('a lazy fox'));
console.log(capitalize2('look, it is working!'));

// Solution 3:
function capitalize3(str) {
    let result = str[0].toUpperCase(); // A S
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}
console.log(capitalize3('a short sentence'));
console.log(capitalize3('a lazy fox'));
console.log(capitalize3('look, it is working!'));
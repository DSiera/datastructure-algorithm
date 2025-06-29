// Coding Exercise - Finding Vowels
// Write a function that returns the number of vowels used in a string.

// Vowels are the characters a, e, i, o, and u

// Examples

// vowels('Hi There!'); --> 3
// vowels('Why do you ask?'); --> 4
// vowels('Why?'); --> 0

// solution 1: Iterative
function vowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }

    return count;
}

console.log(vowels("Hi There!"));
console.log(vowels("Why do you ask?"));
console.log(vowels("Why?"));

// solution 2: Use String - Array is more preference than a string (Solution #1)
function vowels2(str) {
    const vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }

    return count;
}
console.log("=========");
console.log(vowels2("Hi There!"));
console.log(vowels2("Why do you ask?"));
console.log(vowels2("Why?"));

// solution 3: RegEx
function vowels2(str) {
    // If no match found, it returns null
    // If match found, it returns array of the characters matches
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log("=========");
console.log(vowels2("Hi There!"));
console.log(vowels2("Why do you ask?"));
console.log(vowels2("Why?"));
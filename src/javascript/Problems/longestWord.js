// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

// solution 1
function longestWord(sen) {
    const words = sen.match(/[a-zA-Z]+/gi);
    return words.sort()[words.length - 1];
}

console.log(longestWord("I love dogs"));
console.log(longestWord("Fun!! & Plays"));

// Solution 2
function longestWord2(sen) {
    const words = sen.match(/[a-zA-Z]+/gi);
    return words.sort((a,b) => b.length - a.length)[0];
}

console.log(longestWord2("I love dogs"));
console.log(longestWord2("Fun!! & Plays"));

// Solution 3
function longestWord3(sen) {
    const words = sen.match(/[a-zA-Z]+/gi);
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord3("I love dogs"));
console.log(longestWord3("Fun!! & Plays"));
// Anagram: Two strings that contain the same characters in the same quantity
// Case-insensitive
// Ignore spaces
// Ignore punctuation

// Solution 1:
function anagram(str1, str2) {
    let str1Map = {};
    let str2Map = {};
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();
    
    if (str1.length !== str2.length) {
        return false;
    }

    str1Map = buildCharMap(str1);
    str2Map = buildCharMap(str2);

    for (let char in str1Map) {
        if (str1Map[char] !== str2Map[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    let charMap = {};
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagram('hello', 'olleh'));
console.log(anagram('hello', 'olleh1'));
console.log(anagram('rail safety', 'fairy tales'));
console.log(anagram('RAIL! SAFETY!', 'fairy tales'));
console.log(anagram('Hi there', 'Bye there'));

// Solution 2:
function anagram2(str1, str2) {
    let str1Map = {};
    let str2Map = {};
    str1 = str1.replace(/[^\w]/g, "").toLowerCase();
    str2 = str2.replace(/[^\w]/g, "").toLowerCase();


    str1Map = buildCharMap(str1);
    str2Map = buildCharMap(str2);

    if (Object.keys(str1Map).length !== Object.keys(str2Map).length) {
        return false;
    }

    for (let char in str1Map) {
        if (str1Map[char] !== str2Map[char]) {
            return false;
        }
    }
    return true;
}

console.log(anagram2('hello', 'olleh'));
console.log(anagram2('hello', 'olleh1'));
console.log(anagram2('rail safety', 'fairy tales'));
console.log(anagram2('RAIL! SAFETY!', 'fairy tales'));
console.log(anagram2('Hi there', 'Bye there'));

// Solution 3:
function anagram3(str1, str2) {
    return cleanString(str1) === cleanString(str2);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagram3('hello', 'olleh'));
console.log(anagram3('hello', 'olleh1'));
console.log(anagram3('rail safety', 'fairy tales'));
console.log(anagram3('RAIL! SAFETY!', 'fairy tales'));
console.log(anagram3('Hi there', 'Bye there'));
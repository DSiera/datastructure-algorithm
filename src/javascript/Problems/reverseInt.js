// Given an integer, return an integer that is the reverse ordering of numbers
// Examples:
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

function reverseInt(num) {
    const strNum = num.toString();
    const reversed = strNum.split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}

console.log(reverseInt(15));
console.log(reverseInt(981));
console.log(reverseInt(500));
console.log(reverseInt(-15));
console.log(reverseInt(-90));
// reverse a string

function reverseString(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid input';
    }
    const backwards = [];
    for (let i = str.length -1; i >=0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

console.log(reverseString('Octopus'));

// Time complexity: O(n)
// Space complexity: O(n)

function reverseString2(str) {
    const strArray = str.split('');
    for (let i = 0; i < strArray.length / 2; i++) {
        if (i === strArray.length - i - 1) {
            return strArray.join('');
        }
        let temp = strArray[i];
        strArray[i] = strArray[strArray.length - i - 1];
        strArray[strArray.length - i - 1] = temp;
    }
    return strArray.join('');
}

console.log(reverseString2('Octopus'));

// Time complexity: O(n)
// Space complexity: O(n)

function reverseString3(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString3('Octopus'));

// Time complexity: O(n)
// Space complexity: O(n)

// ES6 solution
const reverseString4 = str => str.split('').reverse().join('');
const reverseString5 = str => [...str].reverse().join('');
console.log(reverseString4('Octopus'));
console.log(reverseString5('Octopus'));

// solution 6
function reverseString6(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;
}
reverseString5('Octopus');

// solution 7
function reverseString7(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '')
}
console.log(reverseString5('Octopus'));
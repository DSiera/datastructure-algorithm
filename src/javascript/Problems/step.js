// Coding Exercise - Steps
// Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!

// Examples

// steps(2);
//    '# '
//    '##'
 
// steps(3)
//    '#  '
//    '## '
//    '###'
 
// steps(4)
//    '#   '
//    '##  '
//    '### '
//    '####'

// Solution 1 - Iteration
function step(number) { // 4
    for (let row = 0; row < number; row++) { // 2
        let stair = "";
        for (let column = 0; column < number; column++) { // 3
            if (column <= row) {
                stair += "#";
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
} 

step(1);
console.log("=====");
step(2);
console.log("=====");
step(10);

// Solution 2 - Recursion
function step2(number, row = 0, stair = '') { // 4
    // base case for row
    if (number === row) {
        return;
    }

    // base case for column
    if (number === stair.length) {
        console.log(stair);
        return step2(number, row + 1);
    }

    if (stair.length <= row) {
        stair += "#";
    } else {
        stair += " ";
    }
    
    step2(number, row, stair);
} 

step2(1);
console.log("=====");
step2(2);
console.log("=====");
step2(10);
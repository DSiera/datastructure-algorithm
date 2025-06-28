const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

// Check if the tow arrays have any matching characters
// First solution
function hasMatchingCharacter(array1, array2) {
    for(let i=0; i<array1.length; i++) {
        for(let j=0; j<array2.length; j++) {
            if(array2[j] === array1[i]) {
                return true;
            }
        }
    }
    return false;
}

console.log(hasMatchingCharacter(array1, array2));

// Time complexity: O(a * b) Quadratic time = bad
// space complexity: O(1) constant space = good

// Second solution
function hasMatchingCharacter2(array1, array2) {
    let map = {};
    for( let i=0; i<array1.length; i++) {
        if(!map[array1[i]]) {
            map[array1[i]] = true;
        }
    }
    for( let j=0; j<array2.length; j++) {
        if(map[array2[j]]) {
            return true;
        }
    }
    return false;
}

console.log(hasMatchingCharacter2(array1, array2));

// Time complexity: O(a + b) linear time = good
// space complexity: O(a) linear space = bad

// Third solution
function hasMatchingCharacter3(array1, array2) {
    return array1.some(item => array2.includes(item));
}

console.log(hasMatchingCharacter3(array1, array2));

// Time complexity: O(a + b) linear time = good
// space complexity: O(1) constant space = good
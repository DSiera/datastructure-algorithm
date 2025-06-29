// Break down a number into its place values
// Examples: 5332 returns { thousands: 5, hundreds: 3, tens: 3, units: 2}
// Can assume that there can only be 4 digits

function decomposeNumber(value) { // 5
    let placeNames = {
        units: 0,
        tens: 0,
        hundreds: 0,
        thousands: 0,
        tenThousands: 0,
    };

    const placeMapping = [
        "units", "tens", "hundreds", "thousands", "tenThousands"
    ];

    const digits = value.toString().split('').reverse();
    digits.forEach((digit, index) => { // 5, 0
        placeNames[placeMapping[index]] = digit;
    })

    return placeNames;
}

console.log(decomposeNumber(5));
console.log(decomposeNumber(33));
console.log(decomposeNumber(777));
console.log(decomposeNumber(3452));
console.log(decomposeNumber(53232));
console.log(decomposeNumber(0));
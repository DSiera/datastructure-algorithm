// Break down a number into its place values
// Examples: 5332 returns { thousands: 5, hundreds: 3, tens: 3, units: 2}
// Can assume that there can only be 4 digits

function decomposeNumber(value) {
    let placeNames = {
        units: 0,
        tens: 0,
        hundreds: 0,
        thousands: 0,
        tenThousands: 0,
    };

    const digits = value.toString().split('').reverse();
    digits.forEach((digit, index) => {
        
    })
}
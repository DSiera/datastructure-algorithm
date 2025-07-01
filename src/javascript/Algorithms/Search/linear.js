// Linear search built in function for JavaScript
const arr = ["Grizzly", "Gorilla", "Kodiak", "Black", "Brown", "Polar", "Panda"]
function search1(arr) {
    return arr.indexOf("Grizzly");
}

function search2(arr) {
    return arr.find((item) => item === "Black");
}

function search3(arr) {
    return arr.includes("Polar");
}

function search4(arr) {
    return arr.findIndex((item) => item === "Polar");
}

// Time complexity of O(n); Best case is O(1)
console.log(search1(arr));
console.log(search2(arr));
console.log(search3(arr));
console.log(search4(arr));
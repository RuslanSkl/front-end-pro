const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function average(digits) {
    return digits.reduce((a, b) => (a + b)) / digits.length;
}

console.log (average(arr));

function power(x, n) {
    return Math.pow(x, n);
}
function doFunction(x, n, power) {
    return power(x, n);
}
console.log(doFunction(2, 3, power));
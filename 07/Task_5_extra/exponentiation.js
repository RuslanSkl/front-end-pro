function func(x, n) {
    return Math.pow(x, n);
}
function doFunction(x, n, func) {
    return func(x, n);
}
console.log(doFunction(2, 3, func));
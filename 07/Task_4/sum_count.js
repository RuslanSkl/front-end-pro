function sumDigits() {
    let sum = 0;
    return function (a) {
        sum += a;
        return sum;
    }
};
let addSum = sumDigits();
console.log(addSum(5));
console.log(addSum(7));
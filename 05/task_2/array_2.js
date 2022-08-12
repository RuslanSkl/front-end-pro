let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5];

let sumPosValues = 0;
arr.forEach(function(item) {
    if (item >= 0) {
       sumPosValues += item; 
    }
});
console.log ('Сумма положительных значений =' + ' ' + sumPosValues);

let amountPosElem = arr.filter(function(item) {
    return item >= 0;
}); 
console.log ('Количество положительных элементов =' + ' ' + amountPosElem.length);

const minElement = Math.min(...arr);
console.log ('Минимальный элемент массива =' + ' ' + minElement);
console.log ('Индекс минимального элемента массива =' + ' ' + arr.indexOf(minElement));

const maxElement = Math.max(...arr);
console.log ('Максимальный элемент массива =' + ' ' + maxElement);
console.log ('Индекс максимального элемента массива =' + ' ' + arr.indexOf(maxElement));

let amountNegElem = arr.filter(function(item) {
    return item < 0;
}); 
console.log ('Количество отрицательных элементов =' + ' ' + amountNegElem.length);

let amountOddPosElem = arr.filter(function(item) {
    return (item >= 0) && (item % 2 !== 0);
}); 
console.log ('Количество нечетных положительных элементов =' + ' ' + amountOddPosElem.length);

let sumEvenPosElem = 0 
arr.forEach(function(item) {
    if ((item >= 0) && (item % 2 === 0)) {
        sumEvenPosElem += item;
    }
}); 
console.log ('Сумма четных положительных элементов =' + ' ' + sumEvenPosElem);

let newArr = arr.filter(function(item) {
    return (item >= 0);
});
let multipPosElem = newArr.reduce(function(prev, value) {
    return prev * value;     
}, 1);
console.log ('Произведение положительных элементов =' + ' ' + multipPosElem);

const bigStayRestZeroing = arr.map(function(item) {
    if (item == maxElement){
        return item;
    } else {
        return 0;
    }
});
console.log (bigStayRestZeroing);






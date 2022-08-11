let arr = [];
while (true) {
    const arrData = prompt('Введите данные в массив:');
    if (arrData == null) {
        break;
    }
    arr.push(arrData);
}
console.log(arr);
arr.sort();
console.log(arr);
arr.splice(2, 3);
console.log(arr);



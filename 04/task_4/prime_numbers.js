const num = parseInt(prompt("Введите пожалуйста число"));
let numPrime = true;
if (num === 1) {
    console.log("1 не является простым числом");
}
else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            numPrime = false;
            break;
        }
    }
    if (numPrime) {
        console.log(`${num} является простым числом`);
    } else {
        console.log(`${num} не является простым числом`);
    }
}
else {
    console.log("Число не является простым");
}




const userNumber = parseInt(prompt('Введите пожалуйста трехзначное число!'));
const digit1 = userNumber % 10;
const digit2 = ((userNumber - digit1) / 10) % 10;
const digit3 = ((((userNumber - digit1) / 10) - digit2) / 10) % 10;
if (digit1 == digit2 && digit2 == digit3 && digit1 == digit3) {
    console.log("Все цифры одинаковые");
} 
else if  (digit1 == digit2 || digit2 == digit3 || digit1 == digit3) { 
    console.log("Есть одинаковые цифры"); 
}

else {
    console.log("Одинаковых цифр нет");
}
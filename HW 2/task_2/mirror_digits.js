const userNumber = parseInt(prompt('Введите пожалуйста шестизначное число!'));
const digit1 = userNumber % 10;
const digit2 = ((userNumber - digit1) / 10) % 10;
const digit3 = ((((userNumber - digit1) / 10) - digit2) / 10) % 10;
const digit4 = ((((((userNumber - digit1) / 10) - digit2) / 10) - digit3) / 10) % 10;
const digit5 = ((((((((userNumber - digit1) / 10) - digit2) / 10)- digit3) / 10)- digit4) / 10) % 10;
const digit6 = ((((((((((userNumber - digit1) / 10) - digit2) / 10)- digit3) / 10)- digit4) / 10)- digit5) / 10) % 10;
if (digit1 == digit6 && digit2 == digit5 && digit3 == digit4) {
    console.log("Введенное пользователем число является - зеркальным!");
} 
else { 
    console.log("Введенное пользователем число НЕ является - зеркальным!"); 
} 
const firstNum = parseInt(prompt("Введите пожалуйста первое число!"));
const secondNum = parseInt(prompt("Введите пожалуйста второе число!"));
const thirdNum = parseInt(prompt("Введите пожалуйста третье число!"));

if (firstNum>secondNum && firstNum>thirdNum) {
    console.log(firstNum);
}
else if  (secondNum>firstNum && secondNum>thirdNum) {
    console.log(secondNum);
}
else { (thirdNum>firstNum && thirdNum>secondNum) 
    console.log(thirdNum);
}
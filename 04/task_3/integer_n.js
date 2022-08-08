const num = Number(prompt("Введите целое число!"));
if (num !== num) {
    alert("ошибка!!");
}
for (let i = 1; i*i<num; i++) {
    if (i>100){
        break;
    }
console.log(i);
}
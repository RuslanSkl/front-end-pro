const userLogin = 'admin';
const userPassword = 'mySuperPassword';
const userInput = prompt('Для получения доступа в админ панель сайта введите логин');
if (userInput == userLogin) {
    const userInputPass = prompt('Введите пароль пользователя!');
    if (userInputPass == userPassword) {
        console.log('Доступ разрешен!');
    }
    else {
        console.log('Вы ввели неправильный пароль!');
    }
}    
else {
    console.log('Вы ввели неправильный логин!');
};




import "./styles/index.scss";
import $ from "jquery";
import * as bootstrap from "bootstrap"; // Я так понимаю данное подключение не работает и выдает ошибку поэтому я подключил модуль в html файле


const objPerson = {
    name: "Ruslan",
    age: "36",
};

const finalObj = {
    ...objPerson,
    language: 'JS',
    framework: "React",
};

$(".block").text("Hello from jquery");

console.log(finalObj);
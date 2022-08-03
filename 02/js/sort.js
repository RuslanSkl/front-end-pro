const varNumber1 = parseInt (prompt("Введите пожалуйста пятизначное число"));
const r1 = varNumber1 % 10;
const r2 = ((varNumber1 - r1) / 10) % 10;
const r3 = ((((varNumber1 - r1) / 10) - r2) / 10) % 10;
const r4 = (((((varNumber1 - r1) / 10) - r2) /10 - r3) /10) % 10;
const r5 = (((((((varNumber1 - r1) / 10) - r2) /10 - r3) / 10 - r4) / 10)); 
alert (r5 + ' ' + r4 + ' ' + r3 + ' ' + r2 + ' ' + r1);


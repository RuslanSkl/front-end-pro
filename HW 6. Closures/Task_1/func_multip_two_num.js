const apl = a => b => {
    return a * b;
}
console.log (apl(5)(2));

// Расширенная запись стрелочной функции каррирования
// const apl2 = function (a) {
//     return function(b) {
//         return a * b; 
//     }
// }
// console.log (apl2(5)(2));
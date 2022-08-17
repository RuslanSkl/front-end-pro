const words = 'hello world';
function func(str, [s1, s2]) {
    while (str.indexOf(s1) > -1) {
        str = str.replace(s1, '');
        while (str.indexOf(s2) > -1) {
            str = str.replace(s2, '');
        }
    }
    return str;
}   
console.log( func(words, ['l', 'd']));
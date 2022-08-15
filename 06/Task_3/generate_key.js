const characters = "abcdefghklmop12345678";
function generateKey(length, characters) {
    let result = '';
    const charLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random()*charLength));
   }
   return result;
}
const key = generateKey(17, characters);
console.log(key)



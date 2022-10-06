const deleteSymbol = (str, toDelete) =>
  str
    .split("")
    .filter((letter) => !toDelete.includes(letter))
    .join("");

console.log(deleteSymbol("hello world", ["l", "d"]));

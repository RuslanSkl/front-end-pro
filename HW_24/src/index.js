import "./styles/index.scss";

const objPerson = {
    name: "Ruslan",
    age: "36",
};

const finalObj = {
    ...objPerson,
    language: 'JS',
    framework: "React",
};

console.log(finalObj);
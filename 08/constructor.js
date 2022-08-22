function User (name, age) {
    this.name = name,
    this.age = age,
    this.info = function() {
        alert('Hi ' + this.name + ' \nYour age is: ' + this.age);
    }
};
let newUser;
do {
    newUser = prompt ("Enter owner name:");
} while (newUser === null);
let userAge;
do {
    userAge = +prompt ("Enter owner age:");
} while (userAge < 18);
const owner = new User (newUser, userAge);
owner.info();

function Automobile (model, year, mileage) {
    this.model = model,
    this.year = year,
    this.mileage = mileage,
    this.carInfo = function() {
        alert ('Car model is: ' + this.model + ' \nYear of production is: ' + this.year + ' \nMileage is: ' + this.mileage)
    }
};
let newCar 
do {
    newCar = prompt ("Enter a car model:");
} while (newCar === null); 
let newYearOfProduction;
do {
    newYearOfProduction = +prompt ("Enter a year of production:");
} while (newYearOfProduction === null);
let newMileage;
do {
    newMileage = +prompt ("Enter a car mileage:");
} while (newMileage === null);
const ownerCar = new Automobile (newCar, newYearOfProduction, newMileage);
ownerCar.carInfo();

ownerCar["newOwner"] = owner;
console.log(ownerCar);


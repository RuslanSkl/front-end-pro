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
} while (newUser === null || newUser === '');
let userAge;
do {
    userAge = +prompt ("Enter owner age:");
} while (userAge < 18 || userAge === null || userAge === '' || isNaN(userAge));

const owner = new User (newUser, userAge);
owner.info();

function Automobile (model, year, mileage) {
    this.model = model,
    this.year = year,
    this.mileage = mileage,
    this.carInfo = function() {
        alert ('Car model is: ' + this.model + ' \nYear of production is: ' + this.year + ' \nMileage is: ' + this.mileage)
    };
    this.updateOwner = function () {
        alert (`New owner of the car is: ${owner.name}`)
    };
};

let newCar 
do {
    newCar = prompt ("Enter a car model:");
} while (newCar === null || newCar === ''); 
let newYearOfProduction;
do {
    newYearOfProduction = +prompt ("Enter a year of production:");
} while (newYearOfProduction === null || newYearOfProduction === '' || isNaN(newYearOfProduction) || newYearOfProduction < 1900);
let newMileage;
do {
    newMileage = +prompt ("Enter a car mileage:");
} while (newMileage === null || newMileage === '' || isNaN(newMileage) || newMileage < 0);

const ownerCar = new Automobile (newCar, newYearOfProduction, newMileage);
ownerCar.carInfo();

ownerCar["newOwner"] = owner;
console.log(ownerCar);
ownerCar.updateOwner();
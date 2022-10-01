function User(name, age) {
  this.name = name;
  this.age = age;
  this.isValidName = isValidName(name);
  this.isValidAge = isValidAge(age);
  this.info = () => {
    if (this.isValidName && this.isValidAge)
      alert(`Hi ${this.name}; Your age is: ${this.age}`);
  };
  function isValidName(name) {
    return !!name;
  }
  if (!this.isValidName) alert("Name is invalid");

  function isValidAge(age) {
    return age && !isNaN(age) && age >= 18;
  }
  if (!this.isValidAge) alert("Age is invalid");
}

function Automobile(model, year, mileage) {
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  this.owner = null;
  this.isValidYear = isValidYear(year);
  this.isValidMileage = isValidMileage(mileage);
  if (!this.isValidYear) alert("Automobile year is invalid");

  function isValidMileage(mileage) {
    return mileage && !isNaN(mileage) && mileage > 0;
  }
  if (!this.isValidMileage) alert("Automobile mileage is invalid");
  if (!this.model) alert("Automobile model is empty");
  this.carInfo = () => {
    if (this.isValidYear && this.isValidMileage && this.model)
      alert(
        `Car model is ${this.model}; Year of production is: ${this.year}; Mileage is: ${this.mileage}`
      );
  };
  this.updateOwner = (owner) => {
    this.owner = owner;
  };
  if (this.owner && !!this.owner.name) {
    alert(`Car owner is ${this.owner.name}`);
  }
}
function isValidYear(year) {
  return year && !isNaN(year) && year > 0;
}
const name = prompt("Enter a user name:");
const age = prompt("Enter a user age:");
const model = prompt("Enter a automobile model:");
const year = prompt("Enter a automobile year:");
const mileage = prompt("Enter a automobile mileage:");
const owner = new User(name, age);
const ownerCar = new Automobile(model, year, mileage);
owner.info();
ownerCar.carInfo();
ownerCar["newOwner"] = owner;
console.log(ownerCar);
ownerCar.updateOwner();

"use strict";

const form = document.forms["newUser"];
const SUCCESS_CLASSNAME = "success";
const ERROR_CLASSNAME = "error";

function userEnterValidation(highLightElement, isCorrectly) {
  if (isCorrectly) {
    highLightElement.classList.add(SUCCESS_CLASSNAME);
    highLightElement.classList.remove(ERROR_CLASSNAME);
  } else {
    highLightElement.classList.add(ERROR_CLASSNAME);
    highLightElement.classList.remove(SUCCESS_CLASSNAME);
  }
}

document.querySelector("[name=name]").addEventListener("input", function () {
  const capitalLetter = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  userEnterValidation(
    document.getElementById("first-input"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=number]").addEventListener("input", function () {
  const phoneNumber = /^[+][0-9]{12}$/;
  userEnterValidation(
    document.getElementById("second-input"),
    phoneNumber.test(this.value)
  );
});

document.querySelector("[name=email]").addEventListener("input", function () {
  const userEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;
  userEnterValidation(
    document.getElementById("third-input"),
    userEmail.test(this.value)
  );
});

document.querySelector("[name=card]").addEventListener("input", function () {
  const userCard = /^[0-9]{16}$/;
  userEnterValidation(
    document.getElementById("fourth-input"),
    userCard.test(this.value)
  );
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    document.getElementById("first-input").classList.contains("success") &&
    document.getElementById("second-input").classList.contains("success") &&
    document.getElementById("third-input").classList.contains("success") &&
    document.getElementById("fourth-input").classList.contains("success")
  ) {
    alert("You filled out the form correctly!");
  } else {
    alert("You filled out the form INCORRECTLY!");
  }
});

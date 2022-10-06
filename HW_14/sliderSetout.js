"use strict";
const dots = document.querySelectorAll(".dot");
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
const content = document.querySelector(".content");
const img = content.querySelector("img");
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];
img.src = "img/" + images[0];
let i = 0;

const interval = setInterval(() => {
  img.src = "img/" + images[i];
  makeDotActive(i);
  ++i;
  console.log(i);
  if (i === 10) {
    clearInterval(interval);
  }
}, 500);

function currentSlide(i) {
  img.src = "img/" + images[i];
}

function makeDotActive(i) {
  let current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  dots[i].className += " active";
}

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    makeDotActive(i);
  });
}

btnNext.addEventListener("click", function () {
  ++i;
  if (i >= 10) {
    i = 0;
  }
  img.src = "img/" + images[i];
  makeDotActive(i);
});

btnPrev.addEventListener("click", function () {
  --i;
  if (i < 0) {
    i = images.length - 1;
  }
  img.src = "img/" + images[i];
  makeDotActive(i);
});

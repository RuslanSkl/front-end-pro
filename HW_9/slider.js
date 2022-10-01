"use strict";
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");
const content = document.querySelector(".content");
const img = content.querySelector("img");
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
img.src = "img/" + images[0];
let i = 0;
btnNext.addEventListener("click", function () {
  ++i;
  if (i >= images.length - 1) {
    i = 0;
  }
  img.src = "img/" + images[i];
  console.log("User click `Next` button");
});
btnPrev.addEventListener("click", function () {
  --i;
  if (i < 0) {
    i = images.length - 1;
  }
  img.src = "img/" + images[i];
  console.log("User click `Prev` button");
});

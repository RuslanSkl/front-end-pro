"use strict";
const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  const i = Math.floor(Math.random() * 9 + 1);
  document.querySelectorAll("img").forEach((img) => img.remove());
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      `<img src="./img/${i}.jpg" alt="img ${i}" id=img${i}>`
    );
});

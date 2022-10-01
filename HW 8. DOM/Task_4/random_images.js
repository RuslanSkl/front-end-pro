"use strict";
const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  const imgRandom = Math.floor(Math.random() * 9 + 1);
  document.querySelectorAll("img").forEach((img) => img.remove());
  document
    .querySelector("body")
    .insertAdjacentHTML(
      "beforeend",
      `<img src="./img/${imgRandom}.jpg" alt="img ${imgRandom}" id=img${imgRandom}>`
    );
});

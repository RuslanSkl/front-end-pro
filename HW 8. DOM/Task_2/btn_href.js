"use strict";
const firstBtn = document.querySelector(".btn-get");
const secondBtn = document.querySelector(".btn-push");
let userUrl;
firstBtn.addEventListener("click", function () {
  userUrl = prompt ("Please enter a URL:");
});
secondBtn.addEventListener("click", function () {
  document.location.href = userUrl;
});


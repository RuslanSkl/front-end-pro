"use strict";

const select = document.getElementsByClassName("form-select")[0];
const products = document.getElementsByClassName("cards")[0];
const error = "This page is under construction";

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => addProducts(data, products))
  .catch((error) => {
    console.log(error);
  });

fetch("https://fakestoreapi.com/products/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) =>
      select.insertAdjacentHTML("beforeend", `<option>${item}</option>`)
    );
  })
  .then(() => select.addEventListener("change", filterCategories))
  .catch((error) => {
    console.log(error);
  });

function addProducts(data, container) {
  data.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="product" category="${item.category}">
          <div class="products__image">
            <img class="image" src="${item.image}">
          </div>
          <div class="products__description">
            <h5 class="product-title">${item.title}</h5>
            <div>${item.description}</div>
              <div class="products__price">
                <p class="rate">Rate: ${item.rating.rate} of 5 (${item.rating.count} votes)</p>
                <p class="price">${item.price} $</p>
              </div>
          </div>
        </div>`
    );
  });
}

function filterCategories() {
  const productsArr = document.querySelectorAll(".product");
  productsArr.forEach((item) => {
    if (
      select.value !== item.getAttribute("category") &&
      select.value !== "all"
    ) {
      item.classList.add("hide");
    } else {
      item.classList.remove("hide");
    }
  });
}

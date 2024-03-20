"use strict";
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");
const submitButton = document.querySelector(".btn-submit");
const selected = document.getElementById("selected");
const rates = document.querySelectorAll(".btn-rating");

submitButton.addEventListener("click", function () {
  thanksContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});
rates.forEach((rating) => {
  rating.addEventListener("click", function () {
    selected.innerHTML = rating.innerHTML;
  });
});

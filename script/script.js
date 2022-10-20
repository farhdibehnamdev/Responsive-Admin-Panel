"use strict";
const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle-mode");

const switchElement = document.querySelector(".toggle-mode .switch");
let darkMode = false;
const darkModeHandler = function () {
  body.classList.toggle("dark");
  switchElement.classList.toggle("darked");
};

toggleMode.addEventListener("click", () => darkModeHandler());

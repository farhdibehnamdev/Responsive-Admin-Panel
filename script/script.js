"use strict";
const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle-mode");
const switchElement = document.querySelector(".toggle-mode .switch");
const sidebarToggle = document.querySelector(".sidebarToggle");
const sidebar = document.querySelector("nav");
const darkModeHandler = function () {
  body.classList.toggle("dark");
  switchElement.classList.toggle("darked");
};

const sidebarHandler = function () {
  sidebar.classList.toggle("close");
};

toggleMode.addEventListener("click", () => darkModeHandler());
sidebarToggle.addEventListener("click", () => sidebarHandler());

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./src/ts/sidebar.ts ***!
  \***************************/

// Collapse
const collpaseToggle = document.querySelectorAll(".collapse-toggle");
const collapseContent = document.querySelectorAll(".collapse-content");
collpaseToggle.forEach((toggle, index) => {
    toggle.addEventListener("click", () => {
        collapseContent[index].classList.toggle("hidden");
    });
});

/******/ })()
;
//# sourceMappingURL=sidebar.bundle.js.map
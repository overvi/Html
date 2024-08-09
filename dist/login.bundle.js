/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*************************!*\
  !*** ./src/ts/login.ts ***!
  \*************************/

const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.querySelector(".password-input");
console.log(passwordInput, togglePassword);
togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type == "text" ? "password" : "text";
});

/******/ })()
;
//# sourceMappingURL=login.bundle.js.map
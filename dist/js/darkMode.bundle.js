/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/darkMode.ts":
/*!****************************!*\
  !*** ./src/ts/darkMode.ts ***!
  \****************************/
/***/ (() => {

eval("\nconst savedColorMode = localStorage.getItem(\"colorMode\");\nif (savedColorMode) {\n    document.documentElement.setAttribute(\"data-theme\", savedColorMode);\n}\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const lightColorToggle = document.querySelector(\".toggle-color-light\");\n    const darkColorToggle = document.querySelector(\".toggle-color-dark\");\n    if (savedColorMode == \"light\") {\n        lightColorToggle.classList.add(\"bg-primary-400\");\n        darkColorToggle.classList.remove(\"bg-primary-400\");\n    }\n    else {\n        lightColorToggle.classList.remove(\"bg-primary-400\");\n        darkColorToggle.classList.add(\"bg-primary-400\");\n    }\n});\n\n\n//# sourceURL=webpack:///./src/ts/darkMode.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/darkMode.ts"]();
/******/ 	
/******/ })()
;
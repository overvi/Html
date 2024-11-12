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

/***/ "./src/ts/sidebar.ts":
/*!***************************!*\
  !*** ./src/ts/sidebar.ts ***!
  \***************************/
/***/ (() => {

eval("\n// Collapse\nconst collpaseToggle = document.querySelectorAll(\".collapse-toggle\");\nconst collapseContent = document.querySelectorAll(\".collapse-content\");\nconst collapseContentIcon = document.querySelectorAll(\".collapse-content-icon\");\ncollpaseToggle.forEach((toggle, index) => {\n    toggle.addEventListener(\"click\", () => {\n        collapseContent[index].classList.toggle(\"hidden\");\n        collapseContentIcon[index].classList.toggle(\"rotate-180\");\n        collapseContentIcon[index].classList.toggle(\"-translate-y-[1px]\");\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/sidebar.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/sidebar.ts"]();
/******/ 	
/******/ })()
;
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

/***/ "./src/ts/datepicker.ts":
/*!******************************!*\
  !*** ./src/ts/datepicker.ts ***!
  \******************************/
/***/ (() => {

eval("\nconst wrappers = document.querySelectorAll(\".dp-wrapper\");\nwrappers.forEach((container) => {\n    const datepickers = container.querySelectorAll(\".datepicker\");\n    const areAllDatePickersActive = () => {\n        const allActive = Array.from(datepickers).every((dp) => { var _a; return (_a = dp.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains(\"dp-active\"); });\n        if (allActive) {\n            if (container.classList.contains(\"dp-multiple\")) {\n                container.children[0].classList.add(\"!border-e-0\");\n            }\n        }\n    };\n    datepickers.forEach((dp) => {\n        const dateLabel = container.querySelectorAll(`label[for=\"${dp.id}\"]`);\n        if (dateLabel) {\n            dateLabel.forEach((lb) => {\n                lb === null || lb === void 0 ? void 0 : lb.addEventListener(\"click\", () => {\n                    var _a;\n                    datepickers.forEach((dp2) => {\n                        var _a;\n                        if (dp !== dp2 && !dp2.value) {\n                            (_a = dp2.parentElement) === null || _a === void 0 ? void 0 : _a.classList.remove(\"dp-active\");\n                        }\n                    });\n                    dp.showPicker();\n                    (_a = dp.parentElement) === null || _a === void 0 ? void 0 : _a.classList.add(\"dp-active\");\n                    // Check if all date pickers in the container are active\n                    areAllDatePickersActive();\n                });\n                dp.addEventListener(\"change\", (ev) => {\n                    const valueField = lb === null || lb === void 0 ? void 0 : lb.querySelector(\".datepicker-value\");\n                    if (valueField) {\n                        valueField.textContent = dp.value;\n                        valueField.classList.replace(\"text-storm-200\", \"text-black\");\n                    }\n                    // Check again if all date pickers are active after change\n                    areAllDatePickersActive();\n                });\n            });\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/datepicker.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/datepicker.ts"]();
/******/ 	
/******/ })()
;
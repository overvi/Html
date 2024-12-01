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

/***/ "./src/ts/tabs.ts":
/*!************************!*\
  !*** ./src/ts/tabs.ts ***!
  \************************/
/***/ (() => {

eval("\nconst tabs = document.querySelectorAll(\".tab\");\nconst tabContents = document.querySelectorAll(\".tab-content\");\nconst tabsArr = Array.from(tabs);\ntabs.forEach((tab) => {\n    tab.addEventListener(\"click\", function () {\n        const parentTab = tab.closest(\".tab-content\");\n        tabs.forEach((tab2) => {\n            if (!parentTab || parentTab.id !== tab2.getAttribute(\"data-tab\")) {\n                tab2.classList.remove(\"is-active\");\n            }\n        });\n        // Get the data-tab target\n        const target = tab.getAttribute(\"data-tab\");\n        tabContents.forEach((tc) => {\n            if (!parentTab || parentTab.id !== tc.id) {\n                tc.classList.add(\"hidden\");\n            }\n        });\n        // Activate the clicked tab\n        tab.classList.add(\"is-active\");\n        document.getElementById(target).classList.remove(\"hidden\");\n        const targetContent = document.getElementById(target);\n        const childTabs = targetContent.querySelectorAll(\".tab\");\n        if (childTabs.length > 0) {\n            const firstChildTab = childTabs[0];\n            firstChildTab.click(); // Programmatically trigger the click event\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/tabs.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/tabs.ts"]();
/******/ 	
/******/ })()
;
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

/***/ "./src/css/output.css":
/*!****************************!*\
  !*** ./src/css/output.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/output.css?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! @/css/output.css */ \"./src/css/output.css\");\nfunction toggleTheme(activeToggle, inactiveToggle, theme) {\n    inactiveToggle === null || inactiveToggle === void 0 ? void 0 : inactiveToggle.classList.remove(\"bg-primary-400\");\n    activeToggle.classList.add(\"bg-primary-400\");\n    document.documentElement.setAttribute(\"data-theme\", theme);\n    localStorage.setItem(\"colorMode\", theme);\n}\n// Change Theme\nconst lightColorToggle = document.querySelector(\".toggle-color-light\");\nconst darkColorToggle = document.querySelector(\".toggle-color-dark\");\nlightColorToggle === null || lightColorToggle === void 0 ? void 0 : lightColorToggle.addEventListener(\"click\", () => toggleTheme(lightColorToggle, darkColorToggle, \"light\"));\ndarkColorToggle === null || darkColorToggle === void 0 ? void 0 : darkColorToggle.addEventListener(\"click\", () => toggleTheme(darkColorToggle, lightColorToggle, \"dark\"));\n// Popover\nconst popovers = document.querySelectorAll(\".popover\");\nconst popoverToggles = document.querySelectorAll(\".popover-toggle\");\npopoverToggles.forEach((toggle, index) => {\n    toggle.addEventListener(\"click\", (ev) => {\n        if (!ev.target.closest(\".popover-triangle\")) {\n            popovers.forEach((item) => {\n                if (item !== popovers[index]) {\n                    item.classList.add(\"scale-0\");\n                }\n            });\n            popovers[index].classList.toggle(\"scale-0\");\n        }\n    });\n});\nwindow.addEventListener(\"click\", (ev) => {\n    if (!ev.target.closest(\".popover-toggle , .popover-triangle , .popover\")) {\n        popovers.forEach((popover) => {\n            popover.classList.add(\"scale-0\");\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///./src/ts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;
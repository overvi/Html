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

/***/ "./src/ts/modal.ts":
/*!*************************!*\
  !*** ./src/ts/modal.ts ***!
  \*************************/
/***/ (() => {

eval("\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    // Functions to open and close a modal\n    function openModal($el) {\n        $el.classList.add(\"is-active\");\n    }\n    function closeModal($el) {\n        $el.classList.remove(\"is-active\");\n    }\n    function closeAllModals() {\n        const modals = document.querySelectorAll(\".modal\");\n        modals.forEach(($modal) => {\n            closeModal($modal);\n        });\n    }\n    // Add a click event on buttons to open a specific modal\n    const modalTriggers = document.querySelectorAll(\".js-modal-trigger\");\n    modalTriggers.forEach(($trigger) => {\n        const modalId = $trigger.dataset.target;\n        if (modalId) {\n            const $target = document.getElementById(modalId);\n            if ($target) {\n                $trigger.addEventListener(\"click\", () => {\n                    openModal($target);\n                });\n            }\n        }\n    });\n    // Add a click event on various child elements to close the parent modal\n    const modalCloses = document.querySelectorAll(\".modal-background, .close-modal, .modal-close, .modal-card-head .delete, .modal-card-foot .button\");\n    modalCloses.forEach(($close) => {\n        const $target = $close.closest(\".modal\");\n        if ($target) {\n            $close.addEventListener(\"click\", () => {\n                closeModal($target);\n            });\n        }\n    });\n    // Add a keyboard event to close all modals\n    document.addEventListener(\"keydown\", (event) => {\n        if (event.key === \"Escape\") {\n            closeAllModals();\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/modal.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/modal.ts"]();
/******/ 	
/******/ })()
;
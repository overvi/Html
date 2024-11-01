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

/***/ "./src/ts/cart.ts":
/*!************************!*\
  !*** ./src/ts/cart.ts ***!
  \************************/
/***/ (() => {

eval("\nconst minute = document.querySelector(\".min\");\nconst second = document.querySelector(\".sec\");\nclass CountdownTimer {\n    constructor(minutes, displayElement) {\n        this.intervalId = null;\n        this.duration = minutes * 60;\n        this.displayElement = displayElement;\n    }\n    start() {\n        if (this.intervalId)\n            return;\n        this.intervalId = setInterval(() => {\n            if (this.duration <= 0) {\n                this.stop();\n                this.displayElement.textContent = \"Time's up!\";\n            }\n            else {\n                this.displayTime();\n                this.duration--;\n            }\n        }, 1000);\n    }\n    stop() {\n        if (this.intervalId) {\n            clearInterval(this.intervalId);\n            this.intervalId = null;\n        }\n    }\n    displayTime() {\n        const minutes = Math.floor(this.duration / 60);\n        const seconds = this.duration % 60;\n        const formattedTime = `${String(minutes).padStart(2, \"0\")}:${String(seconds).padStart(2, \"0\")}`;\n        const time = formattedTime.split(\":\");\n        minute.innerText = time[1];\n        second.innerText = time[0];\n    }\n}\nconst timerDisplay = document.getElementById(\"timer\");\nconst timer = new CountdownTimer(15, timerDisplay);\ntimer.start();\n\n\n//# sourceURL=webpack:///./src/ts/cart.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/cart.ts"]();
/******/ 	
/******/ })()
;
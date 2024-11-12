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

/***/ "./src/ts/log.ts":
/*!***********************!*\
  !*** ./src/ts/log.ts ***!
  \***********************/
/***/ (() => {

eval("\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const tableBody = document.querySelector(\"#myTable tbody\");\n    const pagination = document.getElementById(\"pagination\");\n    const selectRow = document.getElementById(\"selectRowInpage\");\n    const data = document.querySelectorAll(\"#myTable tbody tr\");\n    const dataArr = Array.from(data);\n    let rowsPerPage = 5;\n    let currentPage = 1;\n    let totalPages = Math.ceil(dataArr.length / rowsPerPage);\n    selectRow.addEventListener(\"change\", (v) => {\n        const target = v.target;\n        rowsPerPage = parseInt(target.value);\n        currentPage = 1;\n        updateTotalPages();\n        displayTable(currentPage);\n    });\n    function updateTotalPages() {\n        totalPages = Math.ceil(data.length / rowsPerPage);\n    }\n    function displayTable(page) {\n        if (!tableBody)\n            return;\n        tableBody.innerHTML = \"\";\n        const start = (page - 1) * rowsPerPage;\n        const end = start + rowsPerPage;\n        const paginatedData = dataArr.slice(start, end);\n        paginatedData.forEach((row) => {\n            document.querySelector(\"#myTable tbody\").appendChild(row);\n        });\n        updatePagination(page);\n    }\n    function updatePagination(page) {\n        if (!pagination)\n            return;\n        pagination.innerHTML = \"\"; // Clear existing pagination\n        // Create previous button\n        const prev = document.querySelector(\".prev-table\");\n        prev.classList.add(\"pagination-item\");\n        if (page === 1)\n            prev.classList.add(\"disabled\");\n        prev.addEventListener(\"click\", () => {\n            if (currentPage > 1) {\n                currentPage--;\n                displayTable(currentPage);\n            }\n        });\n        // Create page numbers\n        for (let i = 1; i <= totalPages; i++) {\n            const li = document.createElement(\"li\");\n            li.innerHTML = `\r\n          <button class=\"${i === page\n                ? \"rounded-full px-3  bg-orange-400 text-white border-0\"\n                : \"rounded-full px-3  border-0 shadow-xl\"} py-0 flex items-center justify-center button\">\r\n            <p class=\"mt-1\">${i}</p>\r\n          </button>\r\n        `;\n            li.classList.add(\"pagination-item\");\n            li.addEventListener(\"click\", () => {\n                currentPage = i;\n                displayTable(currentPage);\n            });\n            pagination.appendChild(li);\n        }\n        const next = document.querySelector(\".next-table\");\n        next.classList.add(\"pagination-item\");\n        if (page === totalPages)\n            next.classList.add(\"disabled\");\n        next.addEventListener(\"click\", () => {\n            if (currentPage < totalPages) {\n                currentPage++;\n                displayTable(currentPage);\n            }\n        });\n    }\n    displayTable(currentPage);\n});\n\n\n//# sourceURL=webpack:///./src/ts/log.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/log.ts"]();
/******/ 	
/******/ })()
;
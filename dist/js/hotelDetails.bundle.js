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

/***/ "./src/ts/hotelDetails.ts":
/*!********************************!*\
  !*** ./src/ts/hotelDetails.ts ***!
  \********************************/
/***/ (() => {

eval("\n// Tables\nconst togglePrices = document.querySelector(\".toggle-more-prices\");\nconst morePrices = document.querySelectorAll(\".more-prices\");\ntogglePrices === null || togglePrices === void 0 ? void 0 : togglePrices.addEventListener(\"click\", () => {\n    morePrices.forEach((item) => {\n        item.classList.toggle(\"hidden\");\n    });\n});\nconst images = [\n    \"../../public/assets/images/espinas-viewer.png\",\n    \"../../public/assets/images/hotel-viewer-1.png\",\n    \"../../public/assets/images/bla.png\",\n];\n// Image Viewer\nconst imageViewer = document.querySelector(\".image-viewer\");\nconst ToggleImageViewer = () => {\n    document.documentElement.classList.toggle(\"overflow-hidden\");\n    imageViewer.classList.toggle(\"hidden\");\n    if (!imageViewer.classList.contains(\"hidden\")) {\n        // Position Image Viewer Aligned With User Scroll Position To Avoid Overflow\n        const scrollTop = window.scrollY;\n        const documentHeight = document.documentElement.scrollHeight;\n        const viewportHeight = window.innerHeight;\n        const scrollPercentage = (scrollTop / (documentHeight - viewportHeight)) * 100;\n        const viewerHeight = imageViewer.offsetHeight;\n        const absoluteTop = (scrollPercentage / 100) * (documentHeight - viewportHeight);\n        const adjustedTop = Math.min(absoluteTop, documentHeight - viewerHeight);\n        imageViewer.style.top = `${adjustedTop}px`;\n        let currentImage = 0;\n        const nextImage = document.querySelector(\".next-img\");\n        const prevImage = document.querySelector(\".prev-img\");\n        const selectedImage = document.querySelector(\".selected-img\");\n        const imageList = document.querySelector(\".viewer-images-list\");\n        const photoIndex = document.querySelector(\".photo-index\");\n        const updateViewer = (index) => {\n            if (index !== undefined) {\n                currentImage = index;\n            }\n            selectedImage.src = images[currentImage];\n            updateImageList();\n            updatePhotoIndex();\n        };\n        const updateImageList = () => {\n            imageList.innerHTML = \"\";\n            images.forEach((img, index) => {\n                const isSelected = index === currentImage;\n                imageList.innerHTML += `\r\n          <li class=\" h-[167px] ${isSelected ? \"border-orange-400  border rounded-2xl p-[3px]\" : \"\"}\">\r\n            <button class=\"img-button\">\r\n              <img width=\"162\" height=\"167\" class=\"h-[160px] object-cover rounded-2xl\" src=\"${img}\" alt=\"\" />\r\n            </button>\r\n          </li>\r\n        `;\n            });\n            attachImageButtonListeners();\n        };\n        const attachImageButtonListeners = () => {\n            const imgButtons = document.querySelectorAll(\".img-button\");\n            imgButtons.forEach((btn, index) => {\n                btn.addEventListener(\"click\", () => {\n                    updateViewer(index);\n                });\n            });\n        };\n        const updatePhotoIndex = () => {\n            if (photoIndex) {\n                photoIndex.textContent = `تصویر ${currentImage + 1} از ${images.length}`;\n            }\n        };\n        nextImage === null || nextImage === void 0 ? void 0 : nextImage.addEventListener(\"click\", () => {\n            currentImage = (currentImage - 1 + images.length) % images.length;\n            updateViewer();\n        });\n        prevImage === null || prevImage === void 0 ? void 0 : prevImage.addEventListener(\"click\", () => {\n            currentImage = (currentImage + 1) % images.length;\n            updateViewer();\n        });\n        updateViewer();\n    }\n};\nconst togglers = document.querySelectorAll(\".viewer-toggler\");\ntogglers.forEach((toggle) => {\n    toggle.addEventListener(\"click\", () => {\n        ToggleImageViewer();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/hotelDetails.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/ts/hotelDetails.ts"]();
/******/ 	
/******/ })()
;
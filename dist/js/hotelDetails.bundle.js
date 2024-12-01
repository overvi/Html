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

/***/ "./src/ts/carousel.ts":
/*!****************************!*\
  !*** ./src/ts/carousel.ts ***!
  \****************************/
/***/ (() => {

eval("\nconst bgImg = document.querySelectorAll(\".carousel-container\");\nbgImg.forEach((container, index) => {\n    const data = JSON.parse(container.getAttribute(\"data-srces\") || \"[]\");\n    let selectedSrc = data.length - 1;\n    const conditions = container.classList.contains(\"big-active-dot\");\n    const buttons = container.querySelector(\".buttons\");\n    data.map((x, index) => {\n        let classNames = \"\";\n        if (index == data.length - 1) {\n            classNames += \"bg-white\";\n            if (conditions) {\n                classNames += \" size-5\";\n            }\n        }\n        buttons.innerHTML += ` \r\n   <button\r\n                   type=\"text\"\r\n                   class=\"p-0 m-0 dot-img ${conditions ? \"mr-3\" : \"mr-2\"}\"\r\n                 >\r\n                   <div  >\r\n                     <span\r\n                     \r\n                       class=\"${classNames} size-3  dot-span block rounded-full border\"\r\n                     ></span>\r\n                   </div>\r\n                 </button>`;\n    });\n    const updateSrc = (index2) => {\n        const images = container.querySelector(\".carousel-img\");\n        images.style.backgroundImage = `url(${data[index2]})`;\n        selectedSrc = index2;\n        const spans = container.querySelectorAll(\".dot-span\");\n        spans.forEach((item) => {\n            item.classList.remove(\"bg-white\", \"size-5\");\n        });\n        spans[selectedSrc].classList.add(\"bg-white\", conditions ? \"size-5\" : \"size-3\");\n    };\n    const prev = container.querySelector(\".prev-img\");\n    const next = container.querySelector(\".next-img\");\n    const dots = container.querySelectorAll(\".dot-img\");\n    next === null || next === void 0 ? void 0 : next.addEventListener(\"click\", () => {\n        if (selectedSrc + 1 == data.length) {\n            updateSrc(selectedSrc);\n        }\n        else {\n            updateSrc(selectedSrc + 1);\n        }\n    });\n    prev === null || prev === void 0 ? void 0 : prev.addEventListener(\"click\", () => {\n        if (selectedSrc - 1 == -1) {\n            updateSrc(selectedSrc);\n        }\n        else {\n            updateSrc(selectedSrc - 1);\n        }\n    });\n    dots.forEach((dot, index) => {\n        dot.addEventListener(\"click\", () => {\n            updateSrc(index);\n        });\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/carousel.ts?");

/***/ }),

/***/ "./src/ts/hotelDetails.ts":
/*!********************************!*\
  !*** ./src/ts/hotelDetails.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./carousel */ \"./src/ts/carousel.ts\");\n// Tables\nconst togglePrices = document.querySelectorAll(\".toggle-more-prices\");\ntogglePrices.forEach((priceToggle) => {\n    priceToggle === null || priceToggle === void 0 ? void 0 : priceToggle.addEventListener(\"click\", () => {\n        var _a;\n        const priceTarget = priceToggle.getAttribute(\"aria-target\");\n        const parsedPriceTarget = priceTarget === null || priceTarget === void 0 ? void 0 : priceTarget.substring(priceTarget.indexOf(\"-\") + 1);\n        const morePrices = document.querySelectorAll(`.${parsedPriceTarget}`);\n        morePrices.forEach((price) => {\n            price.classList.toggle(\"hidden\");\n        });\n        (_a = document.querySelector(\".showMorePriceSvg\")) === null || _a === void 0 ? void 0 : _a.classList.toggle(\"rotate-180\");\n    });\n});\nconst images = [\n    \"../../public/assets/images/espinas-viewer.png\",\n    \"../../public/assets/images/hotel-viewer-1.png\",\n    \"../../public/assets/images/bla.png\",\n];\n// Image Viewer\nconst imageViewer = document.querySelector(\".image-viewer\");\nconst ToggleImageViewer = () => {\n    document.documentElement.classList.toggle(\"overflow-hidden\");\n    imageViewer.classList.toggle(\"hidden\");\n    if (!imageViewer.classList.contains(\"hidden\")) {\n        // Position Image Viewer Aligned With User Scroll Position To Avoid Overflow\n        const scrollTop = window.scrollY;\n        const documentHeight = document.documentElement.scrollHeight;\n        const viewportHeight = window.innerHeight;\n        const scrollPercentage = (scrollTop / (documentHeight - viewportHeight)) * 100;\n        const viewerHeight = imageViewer.offsetHeight;\n        const absoluteTop = (scrollPercentage / 100) * (documentHeight - viewportHeight);\n        const adjustedTop = Math.min(absoluteTop, documentHeight - viewerHeight);\n        imageViewer.style.top = `${adjustedTop}px`;\n        let currentImage = 0;\n        const nextImage = document.querySelector(\".next-img\");\n        const prevImage = document.querySelector(\".prev-img\");\n        const selectedImage = document.querySelector(\".selected-img\");\n        const imageList = document.querySelector(\".viewer-images-list\");\n        const photoIndex = document.querySelector(\".photo-index\");\n        const updateViewer = (index) => {\n            if (index !== undefined) {\n                currentImage = index;\n            }\n            selectedImage.src = images[currentImage];\n            updateImageList();\n            updatePhotoIndex();\n        };\n        const updateImageList = () => {\n            imageList.innerHTML = \"\";\n            images.forEach((img, index) => {\n                const isSelected = index === currentImage;\n                imageList.innerHTML += `\r\n          <li class=\" h-[167px] ${isSelected ? \"border-orange-400  border rounded-2xl p-[3px]\" : \"\"}\">\r\n            <button class=\"img-button\">\r\n              <img width=\"162\" height=\"167\" class=\"h-[160px] object-cover rounded-2xl\" src=\"${img}\" alt=\"\" />\r\n            </button>\r\n          </li>\r\n        `;\n            });\n            attachImageButtonListeners();\n        };\n        const attachImageButtonListeners = () => {\n            const imgButtons = document.querySelectorAll(\".img-button\");\n            imgButtons.forEach((btn, index) => {\n                btn.addEventListener(\"click\", () => {\n                    updateViewer(index);\n                });\n            });\n        };\n        const updatePhotoIndex = () => {\n            if (photoIndex) {\n                photoIndex.textContent = `تصویر ${currentImage + 1} از ${images.length}`;\n            }\n        };\n        nextImage === null || nextImage === void 0 ? void 0 : nextImage.addEventListener(\"click\", () => {\n            currentImage = (currentImage - 1 + images.length) % images.length;\n            updateViewer();\n        });\n        prevImage === null || prevImage === void 0 ? void 0 : prevImage.addEventListener(\"click\", () => {\n            currentImage = (currentImage + 1) % images.length;\n            updateViewer();\n        });\n        updateViewer();\n    }\n};\nconst togglers = document.querySelectorAll(\".viewer-toggler\");\ntogglers.forEach((toggle) => {\n    toggle.addEventListener(\"click\", () => {\n        ToggleImageViewer();\n    });\n});\n\n\n//# sourceURL=webpack:///./src/ts/hotelDetails.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/hotelDetails.ts");
/******/ 	
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*************************!*\
  !*** ./src/ts/modal.ts ***!
  \*************************/

document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add("is-active");
    }
    function closeModal($el) {
        $el.classList.remove("is-active");
    }
    function closeAllModals() {
        const modals = document.querySelectorAll(".modal");
        modals.forEach(($modal) => {
            closeModal($modal);
        });
    }
    // Add a click event on buttons to open a specific modal
    const modalTriggers = document.querySelectorAll(".js-modal-trigger");
    modalTriggers.forEach(($trigger) => {
        const modalId = $trigger.dataset.target;
        if (modalId) {
            const $target = document.getElementById(modalId);
            if ($target) {
                $trigger.addEventListener("click", () => {
                    openModal($target);
                });
            }
        }
    });
    // Add a click event on various child elements to close the parent modal
    const modalCloses = document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button");
    modalCloses.forEach(($close) => {
        const $target = $close.closest(".modal");
        if ($target) {
            $close.addEventListener("click", () => {
                closeModal($target);
            });
        }
    });
    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });
});

/******/ })()
;
//# sourceMappingURL=modal.bundle.js.map
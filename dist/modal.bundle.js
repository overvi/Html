(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{function e(e){e.classList.remove("is-active")}document.querySelectorAll(".js-modal-trigger").forEach((e=>{const t=e.dataset.target;if(t){const d=document.getElementById(t);d&&e.addEventListener("click",(()=>{d.classList.add("is-active")}))}})),document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button").forEach((t=>{const d=t.closest(".modal");d&&t.addEventListener("click",(()=>{e(d)}))})),document.addEventListener("keydown",(t=>{"Escape"===t.key&&document.querySelectorAll(".modal").forEach((t=>{e(t)}))}))}))})();
//# sourceMappingURL=modal.bundle.js.map
(()=>{"use strict";const t=document.querySelectorAll(".tab"),e=document.querySelectorAll(".tab-content");t.forEach((s=>{s.addEventListener("click",(function(){t.forEach((t=>{t.classList.remove("is-active")}));const c=s.getAttribute("data-tab");console.log(c),e.forEach((t=>t.classList.add("hidden"))),s.classList.add("is-active"),document.getElementById(c).classList.remove("hidden"),!s.classList.contains("is-active")&&s.classList.add("is-active")}))}))})();
//# sourceMappingURL=tabs.bundle.js.map
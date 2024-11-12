// Collapse

const collpaseToggle = document.querySelectorAll(".collapse-toggle");
const collapseContent = document.querySelectorAll(".collapse-content");
const collapseContentIcon = document.querySelectorAll(".collapse-content-icon");

collpaseToggle.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    collapseContent[index].classList.toggle("hidden");
    collapseContentIcon[index].classList.toggle("rotate-180");
    collapseContentIcon[index].classList.toggle("-translate-y-[1px]");
  });
});

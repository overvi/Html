import "@/css/output.css";

const transitionManager = () => {
  // Create HTML style element with CSS selector that targets all
  // elements and applies CSS to disable transitions
  const style = document.createElement("style");
  const css = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css);

  // Create functions for adding and remove the style element from
  // the page <head> tag
  const enable = () => document.head.removeChild(style);
  const disable = () => document.head.appendChild(style);
  return { enable, disable, style };
};

function toggleTheme(
  activeToggle: HTMLElement,
  inactiveToggle: HTMLElement,
  theme: string
) {
  const transitions = transitionManager();
  transitions.disable();

  inactiveToggle?.classList.remove("bg-primary-400");
  activeToggle.classList.add("bg-primary-400");

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("colorMode", theme);

  window.getComputedStyle(transitions.style).opacity;

  transitions.enable();
}

// Change Theme

const lightColorToggle = document.querySelector(
  ".toggle-color-light"
) as HTMLElement;
const darkColorToggle = document.querySelector(
  ".toggle-color-dark"
) as HTMLElement;

lightColorToggle?.addEventListener("click", () =>
  toggleTheme(lightColorToggle, darkColorToggle, "light")
);
darkColorToggle?.addEventListener("click", () =>
  toggleTheme(darkColorToggle, lightColorToggle, "dark")
);

// Popover

const popovers = document.querySelectorAll(".popover");
const popoverToggles = document.querySelectorAll(".popover-toggle");

popoverToggles.forEach((toggle, index) => {
  toggle.addEventListener("click", (ev) => {
    if (!(ev.target as HTMLElement).closest(".popover-triangle")) {
      popovers.forEach((item) => {
        if (item !== popovers[index]) {
          item.classList.add("scale-0");
        }
      });
      popovers[index].classList.toggle("scale-0");
    }
  });
});

window.addEventListener("click", (ev) => {
  if (
    !(ev.target as HTMLElement).closest(
      ".popover-toggle , .popover-triangle , .popover"
    )
  ) {
    popovers.forEach((popover) => {
      popover.classList.add("scale-0");
    });
  }
});

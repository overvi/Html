import "@/css/output.css";

function toggleTheme(
  activeToggle: HTMLElement,
  inactiveToggle: HTMLElement,
  theme: string
) {
  inactiveToggle?.classList.remove("bg-primary-400");
  activeToggle.classList.add("bg-primary-400");

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("colorMode", theme);
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

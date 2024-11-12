const savedColorMode = localStorage.getItem("colorMode");

if (savedColorMode) {
  document.documentElement.setAttribute("data-theme", savedColorMode);
}

document.addEventListener("DOMContentLoaded", () => {
  const lightColorToggle = document.querySelector(
    ".toggle-color-light"
  ) as HTMLElement;
  const darkColorToggle = document.querySelector(
    ".toggle-color-dark"
  ) as HTMLElement;

  if (savedColorMode == "light") {
    lightColorToggle.classList.add("bg-primary-400");
    darkColorToggle.classList.remove("bg-primary-400");
  } else {
    lightColorToggle.classList.remove("bg-primary-400");
    darkColorToggle.classList.add("bg-primary-400");
  }
});

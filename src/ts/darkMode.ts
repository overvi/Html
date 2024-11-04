const savedColorMode = localStorage.getItem("colorMode");
if (savedColorMode) {
  document.documentElement.setAttribute("data-theme", savedColorMode);
}

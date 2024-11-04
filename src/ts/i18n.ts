const lang = localStorage.getItem("language") || "ir";
const dir = lang == "ir" ? "rtl" : "ltr";
document.documentElement.setAttribute("dir", dir);
document.querySelectorAll('[dir="rtl"], [dir="ltr"]').forEach((element) => {
  element.setAttribute("dir", dir);
});

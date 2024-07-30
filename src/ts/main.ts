import i18next from "i18next";
import en from "../../public/data/translations/English.json";
import ir from "../../public/data/translations/Persian.json";

const langToggle = document.querySelector(".lang-toggle");

i18next.init(
  {
    lng: "ir",
    debug: true,
    resources: {
      en: { translation: en },
      ir: { translation: ir },
    },
  },
  function (err, t) {
    updateContent();
  }
);
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.getAttribute("data-i18n")?.split(";") || [];
    keys.forEach((key) => {
      const [attr, i18nKey] = key.includes("]")
        ? key.split("]")
        : ["innerHTML", key];
      if (attr && i18nKey) {
        if (attr === "innerHTML") {
          element.innerHTML = i18next.t(i18nKey);
        } else {
          element.setAttribute(attr.slice(1), i18next.t(i18nKey));
        }
      }
    });
  });

  const direction = i18next.language === "ir" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);
  document.querySelectorAll('[dir="rtl"], [dir="ltr"]').forEach((element) => {
    element.setAttribute("dir", direction);
  });
}

langToggle?.addEventListener("click", () => {
  i18next.changeLanguage(i18next.language == "en" ? "ir" : "en");
  updateContent();
});

// Change Theme

const colorToggle = document.querySelector(".toggle-color-mode");

colorToggle?.addEventListener("click", () => {
  const colorMode = document.documentElement.getAttribute("data-theme");
  const newColorMode = colorMode === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newColorMode);

  localStorage.setItem("colorMode", newColorMode);
});

const savedColorMode = localStorage.getItem("colorMode");
if (savedColorMode) {
  document.documentElement.setAttribute("data-theme", savedColorMode);
}

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

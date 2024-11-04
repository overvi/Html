import "@/css/output.css";

import i18next from "i18next";
import LocalStorageBackend from "i18next-localstorage-backend";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";

const langToggle = document.querySelector(".lang-toggle");

const lang = localStorage.getItem("language") || "ir";

i18next.use(ChainedBackend).init(
  {
    lng: lang!,
    fallbackLng: "ir",
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        },
        {
          loadPath: "../../public/data/translations/{{lng}}.json",
        },
      ],
    },
  },
  function (err, t) {
    updateContent();
  }
);

export function updateContent() {
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
}

langToggle?.addEventListener("click", () => {
  const newLanguage = i18next.language == "en" ? "ir" : "en";
  console.log(newLanguage);
  i18next.changeLanguage(newLanguage, () => {
    updateContent();
    document.documentElement.setAttribute(
      "dir",
      newLanguage == "ir" ? "rtl" : "ltr"
    );
    document.querySelectorAll('[dir="rtl"], [dir="ltr"]').forEach((element) => {
      element.setAttribute("dir", newLanguage == "ir" ? "rtl" : "ltr");
    });
  });

  localStorage.setItem("language", newLanguage);
});

// Change Theme

const colorToggle = document.querySelector(".toggle-color-mode");

colorToggle?.addEventListener("click", () => {
  const colorMode = document.documentElement.getAttribute("data-theme");
  const newColorMode = colorMode === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newColorMode);
  localStorage.setItem("colorMode", newColorMode);
});

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

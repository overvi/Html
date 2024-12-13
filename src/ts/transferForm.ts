import i18next from "i18next";
import "./i18n";

function updatePassengers() {
  const elements = document.querySelectorAll(".passenger_number");

  elements.forEach((el, index) => {
    el.innerHTML = i18next.t("passengers_plural", { number: index + 1 });
  });
}

i18next.on("initialized", () => {
  updatePassengers();
});
i18next.on("languageChanged", () => {
  updatePassengers();
});

import "./i18n";

import { inputExchange, retranslate } from "./util";

document.addEventListener("DOMContentLoaded", () => {
  const destInput = document.getElementById("destination-input") as HTMLElement;
  const destInputToggle = document.getElementById("destination-input-toggle");

  const destRight = document.getElementById(
    "destination-right"
  ) as HTMLInputElement;
  const destLeft = document.getElementById(
    "destination-left"
  ) as HTMLInputElement;

  destInputToggle?.addEventListener("click", () => {
    inputExchange(destRight, destLeft);
    switch (destRight?.getAttribute("data-i18n")) {
      case "[placeholder]fromHotel":
        destRight.setAttribute("data-i18n", "[placeholder]fromAirport");
        destRight.setAttribute("aria-label", "From Airport");

        retranslate(destInput);
        break;

      case "[placeholder]fromAirport":
        destRight.setAttribute("data-i18n", "[placeholder]fromHotel");
        destRight.setAttribute("aria-label", "From Hotel");
        retranslate(destInput);
        break;
    }
    switch (destLeft?.getAttribute("data-i18n")) {
      case "[placeholder]toHotel":
        destLeft.setAttribute("data-i18n", "[placeholder]toAirport");
        destLeft.setAttribute("aria-label", "To Airport");
        retranslate(destInput);
        break;

      case "[placeholder]toAirport":
        destLeft.setAttribute("data-i18n", "[placeholder]toHotel");
        destLeft.setAttribute("aria-label", "To Hotel");

        retranslate(destInput);
        break;
    }
  });
});

import Pagination from "./pagination";
import { inputExchange } from "./util";

Pagination("#t-all tbody", "#t-all tbody tr", 5, "-all");
Pagination("#t-hotel tbody", "#t-hotel tbody tr", 5, "-hotel");
Pagination("#t-transfer tbody", "#t-transfer tbody tr", 5, "-transfer");

document.addEventListener("DOMContentLoaded", () => {
  const datepickerContainers = document.querySelectorAll(".dp-wrapper");

  datepickerContainers.forEach((dp) => {
    const exchangeDate = dp.querySelector(".exchange-date");
    const datepickers = dp.querySelectorAll(
      ".datepicker"
    ) as NodeListOf<HTMLInputElement>;
    const datePickerValues = dp.querySelectorAll(".datepicker-value");

    const src = datepickers[0];
    const dest = datepickers[1];

    exchangeDate?.addEventListener("click", () => {
      const srcV = src.value;
      const destV = dest.value;

      if (destV && srcV) {
        src.value = destV;
        dest.value = srcV;

        datePickerValues[0].innerHTML = destV;
        datePickerValues[1].innerHTML = srcV;
      }
    });
  });
});

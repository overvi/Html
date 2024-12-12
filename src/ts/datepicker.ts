import Litepicker from "litepicker";
const wrappers = document.querySelectorAll(".dp-wrapper");

const l = localStorage.getItem("language") || "ir";

wrappers.forEach((container) => {
  const datepickers = container.querySelectorAll(
    ".datepicker"
  ) as NodeListOf<HTMLInputElement>;

  datepickers.forEach((dateP, index) => {
    const dateLabel = container.querySelectorAll(`label[for="${dateP.id}"]`);

    dateLabel.forEach((dl) => {
      dl?.addEventListener("click", () => {
        datepickers.forEach((dp2) => {
          if (dateP !== dp2 && !dp2.value) {
            dp2.parentElement?.classList.remove("dp-active");
          }
        });
        dateP.showPicker();
        dateP.parentElement?.classList.add("dp-active");

        areAllDatePickersActive();
      });

      if (dateP.getAttribute("type") !== "time") {
        new Litepicker({
          element: dateP,
          format: "YYYY/MM/DD",

          setup: (picker) => {
            picker.on("selected", (date1, date2) => {
              const valueField = dl.querySelector(
                ".datepicker-value"
              ) as HTMLElement;

              if (valueField) {
                valueField.textContent = dateP.value;
                valueField.classList.replace("text-storm-200", "text-black");
              }

              // Check again if all date pickers are active after change
              areAllDatePickersActive();
            });
          },
        });
      } else {
        dateP.addEventListener("change", () => {
          const valueField = dl.querySelector(
            ".datepicker-value"
          ) as HTMLElement;

          if (valueField) {
            valueField.textContent = dateP.value;
            valueField.classList.replace("text-storm-200", "text-black");
          }

          // Check again if all date pickers are active after change
          areAllDatePickersActive();
        });
      }
    });
  });

  const areAllDatePickersActive = () => {
    const allActive = Array.from(datepickers).every((dp) =>
      dp.parentElement?.classList.contains("dp-active")
    );

    if (allActive) {
      if (container.classList.contains("dp-multiple")) {
        container.children[0].classList.add("!border-e-0");
      }
    }
  };
});

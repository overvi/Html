const wrappers = document.querySelectorAll(".dp-wrapper");

wrappers.forEach((container) => {
  const datepickers = container.querySelectorAll(
    ".datepicker"
  ) as NodeListOf<HTMLInputElement>;

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

  datepickers.forEach((dp) => {
    const dateLabel = container.querySelectorAll(`label[for="${dp.id}"]`);

    if (dateLabel) {
      dateLabel.forEach((lb) => {
        lb?.addEventListener("click", () => {
          datepickers.forEach((dp2) => {
            if (dp !== dp2 && !dp2.value) {
              dp2.parentElement?.classList.remove("dp-active");
            }
          });
          dp.showPicker();
          dp.parentElement?.classList.add("dp-active");

          // Check if all date pickers in the container are active
          areAllDatePickersActive();
        });

        dp.addEventListener("change", (ev) => {
          const valueField = lb?.querySelector(
            ".datepicker-value"
          ) as HTMLElement;

          if (valueField) {
            valueField.textContent = dp.value;
            valueField.classList.replace("text-storm-200", "text-black");
          }

          // Check again if all date pickers are active after change
          areAllDatePickersActive();
        });
      });
    }
  });
});

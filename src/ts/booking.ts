import Stepper from "bs-stepper";

document.addEventListener("DOMContentLoaded", function () {
  const stepperEl = document.querySelector(".bs-stepper")!;
  const interactive = document.querySelector(".stepper-interactive");
  var stepper = new Stepper(stepperEl);

  const next = document.querySelector(".next");
  const prev = document.querySelectorAll(".prev");
  next?.addEventListener("click", () => {
    stepper.next();
  });

  prev.forEach((item) => {
    item?.addEventListener("click", () => {
      stepper.previous();
    });
  });

  stepperEl.addEventListener("show.bs-stepper", function (event: any) {
    if (event.detail.indexStep == 2) {
      interactive?.classList.add("hidden");
    } else {
      interactive?.classList.remove("hidden");
    }
  });
});

import Stepper from "bs-stepper";
import i18next from "i18next";
import "./i18n";

interface StepperEventDetail {
  from: number;
  to: number;
  indexStep: number;
}
interface StepperEvent extends CustomEvent {
  detail: StepperEventDetail;
}

document.addEventListener("DOMContentLoaded", function () {
  const stepperEl = document.querySelector(".bs-stepper")!;
  const interactive = document.querySelector(".stepper-interactive");
  const stepTriggers = document.querySelectorAll(".step-trigger");
  var stepper = new Stepper(stepperEl);

  const next = document.querySelector(".next-step");
  const prev = document.querySelectorAll(".prev");
  const prevMain = document.querySelector(".prev-main") as HTMLButtonElement;
  const nextP = next?.querySelector("p");

  stepperEl.addEventListener("show.bs-stepper", function (ev) {
    const event = ev as StepperEvent;

    if (event.detail.indexStep > 0) {
      prevMain.disabled = false;
    } else {
      prevMain.disabled = true;
    }
    if (event.detail.indexStep == 1) {
      nextP?.setAttribute("data-i18n", "acceptBooking");
      nextP!.innerHTML = i18next.t("acceptBooking");
      next?.classList.replace("gap-7", "gap-2");
      next?.classList.replace("w-[9.812rem]", "w-[11.5rem]");
    } else {
      nextP?.setAttribute("data-i18n", "next");
      nextP!.innerHTML = i18next.t("next");
      next?.classList.replace("gap-2", "gap-7");
      next?.classList.remove("w-[11.5rem]");
      next?.classList.add("w-[9.812rem]");
    }
    if (event.detail.from < event.detail.to) {
      stepTriggers[event.detail.indexStep - 1].parentElement!.classList.add(
        "step-passed"
      );
      stepTriggers[
        event.detail.indexStep - 1
      ].parentElement?.nextElementSibling?.classList.add("line-passed");
    } else {
      stepTriggers[event.detail.indexStep].parentElement!.classList.remove(
        "step-passed"
      );
      stepTriggers[
        event.detail.indexStep
      ].parentElement?.nextElementSibling?.classList.remove("line-passed");
    }
  });

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

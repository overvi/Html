import "./exchangeableInput";

document.addEventListener("DOMContentLoaded", () => {
  // Animations

  const showcase = document.querySelector(".home-showcase");
  const fadeText = document.querySelector(".fadeText") as HTMLDivElement;

  showcase?.addEventListener("mouseover", () => {
    fadeText?.animate(
      [
        {
          opacity: "1",
        },
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      {
        duration: 900,
        iterations: 1,
      }
    );
  });

  showcase?.addEventListener("mouseleave", () => {
    fadeText?.classList.remove("blink");
    fadeText?.animate(
      [
        {
          opacity: fadeText.style.opacity,
        },
        {
          opacity: "1",
        },
      ],
      {
        duration: 900,
        iterations: 1,
      }
    );
  });
});

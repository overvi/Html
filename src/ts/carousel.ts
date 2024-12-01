const bgImg: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".carousel-container"
);

bgImg.forEach((container, index) => {
  const data: string[] = JSON.parse(
    container.getAttribute("data-srces") || "[]"
  );

  let selectedSrc = data.length - 1;

  const conditions = container.classList.contains("big-active-dot");

  const buttons = container.querySelector(".buttons")!;

  data.map((x, index) => {
    let classNames = "";

    if (index == data.length - 1) {
      classNames += "bg-white";
      if (conditions) {
        classNames += " size-5";
      }
    }
    buttons.innerHTML += ` 
   <button
                   type="text"
                   class="p-0 m-0 dot-img ${conditions ? "mr-3" : "mr-2"}"
                 >
                   <div  >
                     <span
                     
                       class="${classNames} size-3  dot-span block rounded-full border"
                     ></span>
                   </div>
                 </button>`;
  });

  const updateSrc = (index2: number) => {
    const images = container.querySelector(".carousel-img")! as HTMLElement;
    images.style.backgroundImage = `url(${data[index2]})`;
    selectedSrc = index2;

    const spans = container.querySelectorAll(".dot-span");

    spans.forEach((item) => {
      item.classList.remove("bg-white", "size-5");
    });
    spans[selectedSrc].classList.add(
      "bg-white",
      conditions ? "size-5" : "size-3"
    );
  };

  const prev = container.querySelector(".prev-img");
  const next = container.querySelector(".next-img");
  const dots = container.querySelectorAll(".dot-img");

  next?.addEventListener("click", () => {
    if (selectedSrc + 1 == data.length) {
      updateSrc(selectedSrc);
    } else {
      updateSrc(selectedSrc + 1);
    }
  });

  prev?.addEventListener("click", () => {
    if (selectedSrc - 1 == -1) {
      updateSrc(selectedSrc);
    } else {
      updateSrc(selectedSrc - 1);
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateSrc(index);
    });
  });
});

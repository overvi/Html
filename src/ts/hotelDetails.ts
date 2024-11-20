// Tables

const togglePrices = document.querySelectorAll(".toggle-more-prices");

togglePrices.forEach((priceToggle) => {
  priceToggle?.addEventListener("click", () => {
    const priceTarget = priceToggle.getAttribute("aria-target");
    const parsedPriceTarget = priceTarget?.substring(
      priceTarget.indexOf("-") + 1
    );

    const morePrices = document.querySelectorAll(`.${parsedPriceTarget}`);

    morePrices.forEach((price) => {
      price.classList.toggle("hidden");
    });

    document.querySelector(".showMorePriceSvg")?.classList.toggle("rotate-180");
  });
});

const images = [
  "../../public/assets/images/espinas-viewer.png",
  "../../public/assets/images/hotel-viewer-1.png",
  "../../public/assets/images/bla.png",
];

// Image Viewer

const imageViewer = document.querySelector(".image-viewer")! as HTMLElement;

const ToggleImageViewer = () => {
  document.documentElement.classList.toggle("overflow-hidden");
  imageViewer.classList.toggle("hidden");

  if (!imageViewer.classList.contains("hidden")) {
    // Position Image Viewer Aligned With User Scroll Position To Avoid Overflow

    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    const viewportHeight = window.innerHeight;

    const scrollPercentage =
      (scrollTop / (documentHeight - viewportHeight)) * 100;

    const viewerHeight = imageViewer.offsetHeight;

    const absoluteTop =
      (scrollPercentage / 100) * (documentHeight - viewportHeight);

    const adjustedTop = Math.min(absoluteTop, documentHeight - viewerHeight);

    imageViewer.style.top = `${adjustedTop}px`;

    let currentImage = 0;
    const nextImage = document.querySelector(".next-img");
    const prevImage = document.querySelector(".prev-img");
    const selectedImage = document.querySelector(
      ".selected-img"
    ) as HTMLImageElement;
    const imageList = document.querySelector(".viewer-images-list")!;
    const photoIndex = document.querySelector(".photo-index");

    const updateViewer = (index?: number) => {
      if (index !== undefined) {
        currentImage = index;
      }
      selectedImage.src = images[currentImage];
      updateImageList();
      updatePhotoIndex();
    };

    const updateImageList = () => {
      imageList.innerHTML = "";
      images.forEach((img, index) => {
        const isSelected = index === currentImage;
        imageList.innerHTML += `
          <li class=" h-[167px] ${
            isSelected ? "border-orange-400  border rounded-2xl p-[3px]" : ""
          }">
            <button class="img-button">
              <img width="162" height="167" class="h-[160px] object-cover rounded-2xl" src="${img}" alt="" />
            </button>
          </li>
        `;
      });
      attachImageButtonListeners();
    };

    const attachImageButtonListeners = () => {
      const imgButtons = document.querySelectorAll(".img-button");
      imgButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          updateViewer(index);
        });
      });
    };

    const updatePhotoIndex = () => {
      if (photoIndex) {
        photoIndex.textContent = `تصویر ${currentImage + 1} از ${
          images.length
        }`;
      }
    };

    nextImage?.addEventListener("click", () => {
      currentImage = (currentImage - 1 + images.length) % images.length;
      updateViewer();
    });

    prevImage?.addEventListener("click", () => {
      currentImage = (currentImage + 1) % images.length;
      updateViewer();
    });

    updateViewer();
  }
};

const togglers = document.querySelectorAll(".viewer-toggler");

togglers.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    ToggleImageViewer();
  });
});

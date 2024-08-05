const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("is-active");
    });

    const target = (tab as HTMLElement).getAttribute("data-tab")!;
    console.log(target);

    tabContents.forEach((tc) => tc.classList.add("hidden"));

    tab.classList.add("is-active");
    document.getElementById(target)!.classList.remove("hidden");

    !tab.classList.contains("is-active") && tab.classList.add("is-active");
  });
});

// Tables

const togglePrices = document.querySelector(".toggle-more-prices");
const morePrices = document.querySelectorAll(".more-prices");

togglePrices?.addEventListener("click", () => {
  morePrices.forEach((item) => {
    item.classList.toggle("hidden");
  });
});

const images = [
  "../../public/assets/images/espinas-viewer.png",
  "../../public/assets/images/hotel-viewer-1.png",
  "../../public/assets/images/bla.png",
];

// Image Viewer

const imageViewer = document.querySelector(".image-viewer")!;

const ToggleImageViewer = () => {
  document.documentElement.classList.toggle("overflow-hidden");
  imageViewer.classList.toggle("hidden");

  if (!imageViewer.classList.contains("hidden")) {
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

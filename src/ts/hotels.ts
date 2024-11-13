import "toolcool-range-slider";
import "mapbox-gl/dist/mapbox-gl.css";
import i18next from "i18next";
import "./i18n";

const mapToggle = document.querySelector(".map-toggle");
const mapContainer = document.querySelector(".map-container");

mapToggle?.addEventListener("click", async () => {
  mapContainer?.classList.toggle("hidden");

  if (!mapContainer?.classList.contains("hidden")) {
    const { default: mapboxgl } = await import("mapbox-gl");

    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2tpbGxzMTAxIiwiYSI6ImNreXczMW8zbTA0bTYyb213NDBhcm85OHcifQ.L4xxw4JR6VWAk7dbteyMcg";

    if (mapboxgl.getRTLTextPluginStatus() !== "loaded") {
      mapboxgl.setRTLTextPlugin(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
        null,
        true
      );
    }

    const mapStyle = "mapbox://styles/mapbox/outdoors-v11";

    const map = new mapboxgl.Map({
      container: "map",
      style: mapStyle,
      center: [51.389, 35.6892],
      zoom: 9,
      attributionControl: false,
    });

    let selectedMarker: any;

    map.on("click", function (e: any) {
      if (selectedMarker) {
        selectedMarker.remove();
      }
      selectedMarker = new mapboxgl.Marker().setLngLat(e.lngLat).addTo(map);
    });

    map.on("render", function () {
      map.resize();
    });
  }

  const mapIcon = document.querySelectorAll(
    ".map-toggle path"
  ) as NodeListOf<SVGPathElement>;
  mapIcon.forEach((path) => {
    path.style.fill == "orange"
      ? (path.style.fill = "gray")
      : (path.style.fill = "orange");
  });
});

const layoutCardToggle = document.querySelector(".layout-cards-toggle");
const layoutCardsLayout = document.querySelector(".layout-cards");

layoutCardToggle?.addEventListener("click", () => {
  layoutCardsLayout?.classList.add("wide");

  const simpleIcon = document.querySelectorAll(
    ".layout-simple-card-toggle path"
  ) as NodeListOf<SVGPathElement>;
  simpleIcon.forEach((path) => {
    path.style.fill = "gray";
  });

  const mapIcon = document.querySelectorAll(
    ".layout-cards-toggle path"
  ) as NodeListOf<SVGPathElement>;
  mapIcon.forEach((path) => {
    path.style.fill = "orange";
  });
});

const layoutSimpleCardsToggle = document.querySelector(
  ".layout-simple-card-toggle"
);

layoutSimpleCardsToggle?.addEventListener("click", () => {
  layoutCardsLayout?.classList.remove("wide");

  const simpleIcon = document.querySelectorAll(
    ".layout-cards-toggle path"
  ) as NodeListOf<SVGPathElement>;
  simpleIcon.forEach((path) => {
    path.style.fill = "gray";
  });

  const mapIcon = document.querySelectorAll(
    ".layout-simple-card-toggle path"
  ) as NodeListOf<SVGPathElement>;
  mapIcon.forEach((path) => {
    path.style.fill = "orange";
  });
});

// Carousel

let selectedSrc = 0;
const bgImg: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".carousel-container"
);

bgImg.forEach((container, index) => {
  const data: string[] = JSON.parse(
    container.getAttribute("data-srces") || "[]"
  );

  const buttons = container.querySelector(".buttons")!;

  data.map((x, index) => {
    buttons.innerHTML += ` 
   <button
                   type="text"
                   class="p-0 m-0 dot-img mr-2"
                 >
                   <div  >
                     <span
                     
                       class="${
                         index == 0 && "bg-white"
                       } size-3 dot-span block rounded-full border"
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
      item.classList.remove("bg-white");
    });
    spans[selectedSrc].classList.add("bg-white");
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

// Base

const moreRoomsPanel = document.querySelectorAll(".more-rooms");
const moreRoomsToggle = document.querySelectorAll(".more-rooms-toggle");

moreRoomsToggle.forEach((item, index) => {
  item?.addEventListener("click", () => {
    moreRoomsPanel[index]?.classList.toggle("!hidden");
  });
});

// Tabs

const tabs = document.querySelectorAll(".tab-items");
const tabContents = document.querySelectorAll(".tab-contents");

tabs.forEach((tab, index) => {
  const toggles = tab.querySelectorAll("button");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const id = toggle.getAttribute("aria-target");

      const target = tabContents[index].querySelector(
        `div[id='${id}']`
      ) as HTMLDivElement;

      const tabContentChilds =
        tabContents[index].querySelectorAll(".tab-content");

      tabContentChilds.forEach((child) => {
        if (child !== target) {
          child.classList.add("hidden");
        }
      });

      toggles.forEach((t) => {
        if (t !== toggle) t.parentElement?.classList.remove("active-tab");
      });

      toggle.parentElement!.classList.add("active-tab");

      target?.classList.contains("hidden") && target.classList.remove("hidden");
    });
  });
});

// Collapse

const collpaseToggleText = document.querySelectorAll(".collapse-toggle-text");
const collapseContentText = document.querySelectorAll(".collapse-content-text");

collpaseToggleText.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    collapseContentText[index].classList.toggle("hidden");

    if (collapseContentText[index].classList.contains("hidden")) {
      toggle.setAttribute("data-i18n", "seeMore");
      toggle.innerHTML = i18next.t("seeMore");
    } else {
      toggle.setAttribute("data-i18n", "seeLess");
      toggle.innerHTML = i18next.t("seeLess");
    }
  });
});

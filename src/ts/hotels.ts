import "toolcool-range-slider";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Map

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

// Layout

const mapToggle = document.querySelector(".map-toggle");
const mapContainer = document.querySelector(".map-container");

mapToggle?.addEventListener("click", () => {
  mapContainer?.classList.toggle("hidden");

  map.resize();

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
  layoutCardsLayout?.classList.remove("hidden");
  layoutCardsLayout?.classList.add("block");

  layoutSimpleCards?.classList.add("hidden");
  layoutSimpleCards?.classList.remove("block");

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
const layoutSimpleCards = document.querySelector(".layout-simple-card");

layoutSimpleCardsToggle?.addEventListener("click", () => {
  layoutSimpleCards?.classList.remove("hidden");
  layoutSimpleCards?.classList.add("grid");

  layoutCardsLayout?.classList.add("hidden");
  layoutCardsLayout?.classList.remove("flex");

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

const moreRoomsPaneel = document.querySelector(".more-rooms");
const moreRoomsToggle = document.querySelector(".more-rooms-toggle");

moreRoomsToggle?.addEventListener("click", () => {
  moreRoomsPaneel?.classList.toggle("hidden");
});
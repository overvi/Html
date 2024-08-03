import "toolcool-range-slider";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Map

if (mapboxgl) {
  console.log(mapboxgl);
}

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

  map.on("render", function () {
    map.resize();
  });

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
  layoutCardsLayout?.classList.add("flex");

  layoutSimpleCards?.classList.add("hidden");
  layoutSimpleCards?.classList.remove("flex");

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

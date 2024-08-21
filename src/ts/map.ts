import "toolcool-range-slider";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
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

export default map;

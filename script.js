import { fruitLocations } from "./fruits.js";

// Create map
const map = L.map("map", {
  crs: L.CRS.Simple
});

// Image/map bounds (CHANGE if needed)
const bounds = [
  [0, 0],
  [100, 100]
];

// Example image overlay
const image = L.imageOverlay("map.png", bounds).addTo(map);

map.fitBounds(bounds);

// Add markers
fruitLocations.forEach(location => {

  const popupContent = `
    <b>Location ${location.id}</b><br>
    All Fruits:<br>
    ${location.fruits.all.join(", ")}
  `;

  L.marker(location.coords)
    .addTo(map)
    .bindPopup(popupContent);
});

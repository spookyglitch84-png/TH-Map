const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

const bounds = [[0,0], [4096,4096]];
const image = L.imageOverlay('worldmap.png', bounds).addTo(map);
map.fitBounds(bounds);

const layers = {
  village: L.layerGroup().addTo(map),
  resource: L.layerGroup().addTo(map),
  creature: L.layerGroup().addTo(map),
  magic: L.layerGroup().addTo(map),
  quest: L.layerGroup().addTo(map)
};

let currentSeason = "spring";

function buildFruitPopup(location) {

  const allFruit = location.fruits.all || [];
  const seasonal = location.fruits[currentSeason] || [];

  const combined = [...allFruit, ...seasonal];

  const list = combined
    .map(f => `<li>${f}</li>`)
    .join("");

  return `
    <b>Fruit Node</b>
    <ul>${list}</ul>
  `;
}

// === Coordinate Capture Tool ===

map.on('click', function (e) {

  if (!e.latlng) return;

  const x = Math.round(e.latlng.lng);
  const y = Math.round(e.latlng.lat);

  const coords = `x: ${x}, y: ${y}`;

  console.log(coords);
  navigator.clipboard.writeText(coords);

  if (window.clickMarker) {
    map.removeLayer(window.clickMarker);
  }

  window.clickMarker = L.circleMarker([y, x], {
    radius: 6
  })
  .addTo(map)
  .bindPopup(coords)
  .openPopup();

});


fruitLocations.forEach(location => {

  L.circleMarker(location.coords, {
    radius: 6,
    fillColor: getSeasonColor(),
    color: "#ffffff",
    weight: 1,
    fillOpacity: 0.9
  })
  .bindPopup(buildFruitPopup(location))
  .addTo(map);

});

function getSeasonColor() {

  const colors = {
    spring: "#ff7eb6",
    summer: "#ffd166",
    fall: "#ff8c42",
    winter: "#7ec8ff"
  };

  return colors[currentSeason];
}



document.querySelectorAll("#sidebar input[type=checkbox]")
  .forEach(box => {
    box.addEventListener("change", function() {
      const category = this.dataset.category;
      if (this.checked) {
        map.addLayer(layers[category]);
      } else {
        map.removeLayer(layers[category]);
      }
    });
  });


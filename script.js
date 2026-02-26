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

fetch("locations.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(loc => {
      const marker = L.marker([loc.y, loc.x])
        .bindPopup(`<h3>${loc.name}</h3><p>${loc.description}</p>`);

      if (layers[loc.category]) {
        marker.addTo(layers[loc.category]);
      }
    });
  });

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

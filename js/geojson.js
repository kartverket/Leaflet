/**
 * GeoJSON
 */
var map = L.map('map').setView([60.143446296158075, 10.25023341178894], 17);

L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo2graatone&zoom={z}&x={x}&y={y}', {
  attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
}).addTo(map);

L.geoJSON({
  "type": "Feature",
  "geometry": {
    "type": "Polygon",
    "coordinates": [[
      [10.248452425003,60.144079215050],
      [10.251156091690,60.143801479989],
      [10.250769853592,60.143010990442],
      [10.247733592990,60.143315437990],
      [10.248452425003,60.144079215050]
    ]]
  }
}).addTo(map);

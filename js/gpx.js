/**
 * GPX
 */
var map = L.map('map');

L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=egk&zoom={z}&x={x}&y={y}', {
  attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
}).addTo(map);

omnivore.gpx('http://www.norgeskart.no/xml/gpx/rallarvegen.gpx').on('ready', function(event) {
  map.fitBounds(event.target.getBounds());
}).addTo(map);

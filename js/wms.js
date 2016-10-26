/**
 * WMS
 */
var map = L.map('map').setView([62.237232894, 9.755859375], 5);
L.tileLayer('http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=egk&zoom={z}&x={x}&y={y}', {
  attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
}).addTo(map);

var wms = L.tileLayer.wms('http://openwms.statkart.no/skwms1/wms.abas?', {
  layers: 'Fylkesgrenser',
  format: 'image/png',
  transparent: true,
  attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
}).addTo(map);

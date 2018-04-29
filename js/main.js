/* =====================
Leaflet Map Configuration
===================== */
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
Basic Change of Slides
===================== */
function changeSildes() {
  var x = document.getElementById("slide1");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
  }
  var y = document.getElementById("slide2");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
  }
}
function backtoHome() {
  var x = document.getElementById("slide2");
  if (x.style.display !== "none") {
    x.style.display = "none";
  } else {
  }
  var y = document.getElementById("slide1");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
  }
}
function seeVideo() {
  var x = document.getElementById("placeholder1");
  x.style.display = "none";
}
function reShow() {
  placeholder1.style.display = "block";
}

"use strict";

function getQueryStringValue(key) {
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var travelID = getQueryStringValue("id");
var travelPlaces = "../json/travelPlaces.json";
var innerdivId = document.getElementById('indexProduct');
fetch(travelPlaces).then(function (reponsive) {
  return reponsive.json();
}).then(function (productId) {
  console.log(productId[travelID]);
  travelProductPage(productId);
})["catch"](function (error) {
  return console.log(error);
});

var travelProductPage = function travelProductPage(reponsive) {
  innerdivId.innerHTML += "<div class = \"currectProduct\"><h1>".concat(reponsive[travelID].name, "</h1><img src= \"").concat(reponsive[travelID].img, "\" class = \"card-img-top embed-responsive-item\"></div>");
};
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
  innerdivId.innerHTML += "<div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-7 col-xl-7\">\n                                            <img  class = \"card-img-top imgClass\" src=\"".concat(reponsive[travelID].img, "\">\n                                        </div>  \n                                        <div class=\"col-lg-4 col-xl-4 edithClass\">                                                                    \n                                            <h1 class = \"card-title\">").concat(reponsive[travelID].name, "</h1>\n                                            <p class= \"card-text\">").concat(reponsive[travelID].description, "</p>\n                                            <i class=\"fas fa-shopping-cart\"></i>\n                                            <i class=\"fas fa-clock\"></i>\n                                            <i class=\"fas fa-lock\"></i>                                                         \n                                        </div>\n                                    </div>\n                            </div>");
};
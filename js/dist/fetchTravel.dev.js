"use strict";

var travelPlaces = "../json/travelPlaces.json";
var travelGrid = document.getElementById('travelGrid');
fetch(travelPlaces).then(function (reponsive) {
  return reponsive.json();
}).then(function (travelApi) {
  console.log(travelApi);
  travelFunction(travelApi);
})["catch"](function (Error) {
  return console.log(Error);
});

var travelFunction = function travelFunction(reponsive) {
  for (var i = 0; i < reponsive.length; i++) {
    travelGrid.innerHTML += "<div class = \"col-lg-6 col-xl-6 gridEdit\">\n                                    <div class = \"card\">\n                                        <div class = \"card__edith\">\n                                            <div class = \"img-square-wrapper\">\n                                                <img class = \"card-img-top\" src = \"".concat(reponsive[i].img, ">\"\n                                            </div>\n                                        </div>\n                                        <div class=\"card-body\">\n                                            <h3 class=\"card-title\">").concat(reponsive[i].name, "</h3>\n                                            <p class=\"card-text\">").concat(reponsive[i].description, "</p>                                            \n                                            <button class = \"btn btn-warning btnEdith\">See More </button>\n                                            <i class=\"fas fa-plane-departure iconCLass\"> </i>\n                                            <i class=\"fas fa-tag iconClassTwo\">500 $</i>\n\n                                        </div>                                      \n                                    </div>\n                                    </div>");
  }
};
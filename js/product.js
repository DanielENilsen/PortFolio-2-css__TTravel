

function getQueryStringValue (key) {
  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var travelID = getQueryStringValue("id");
var travelPlaces = "../json/travelPlaces.json";
var innerdivId = document.getElementById('indexProduct');


fetch(travelPlaces).then(reponsive => reponsive.json()).then(productId =>  {
    console.log(productId[travelID]);
    travelProductPage(productId);
   
}).catch(error => console.log(error))


var travelProductPage = function(reponsive) {
    innerdivId.innerHTML += `<div class = "currectProduct"><h1>${reponsive[travelID].name}</h1><img src= "${reponsive[travelID].img}" class = "card-img-top embed-responsive-item"></div>`;    
}


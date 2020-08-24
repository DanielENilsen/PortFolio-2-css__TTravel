

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
    innerdivId.innerHTML += `<div class="container">
                                    <div class="row">
                                        <div class="col-lg-7 col-xl-7">
                                            <img  class = "card-img-top imgClass" src="${reponsive[travelID].img}">
                                        </div>  
                                        <div class="col-lg-4 col-xl-4 edithClass">                                                                    
                                            <h1 class = "card-title">${reponsive[travelID].name}</h1>
                                            <p class= "card-text">${reponsive[travelID].description}</p>
                                            <i class="fas fa-shopping-cart"></i>
                                            <i class="fas fa-clock"></i>
                                            <i class="fas fa-lock"></i>                                                         
                                        </div>
                                    </div>
                            </div>`;    
}


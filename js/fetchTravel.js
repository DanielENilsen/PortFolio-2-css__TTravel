

var travelPlaces = "../json/travelPlaces.json";
var travelGrid = document.getElementById('travelGrid');

fetch(travelPlaces).then(reponsive => reponsive.json()).then(travelApi => { 
    console.log(travelApi);
    travelFunction(travelApi);

}).catch(Error => console.log(Error));


var travelFunction = function (reponsive) { 
    for(let i = 0 ; i < reponsive.length;i++) {
        travelGrid.innerHTML += `<div class = "col-lg-6 col-xl-6 gridEdit">
                                    <div class = "card">
                                        <div class = "card__edith">
                                            <div class = "img-square-wrapper">
                                                <img class = "card-img-top embed-responsive-item" src = "${reponsive[i].img}">
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">${reponsive[i].name}</h3>
                                            <p class="card-text">${reponsive[i].description}</p>                                            
                                            <button onclick = "location.href = '../page/product.html?id=${reponsive[i].id}'" class = "btn btn-warning btnEdith">See More</button>                            
                                        </div>                                      
                                    </div>
                                    </div>`;
    }    
}
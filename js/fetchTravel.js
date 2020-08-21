

var travelPlaces = "../json/travelPlaces.json";
var travelGrid = document.getElementById('travelGrid');

fetch(travelPlaces).then(reponsive => reponsive.json()).then(travelApi => { 
    console.log(travelApi);
    travelFunction(travelApi);

}).catch(Error => console.log(Error));


var travelFunction = function (reponsive) { 
    for(let i = 0 ; i < reponsive.length;i++) {
        travelGrid.innerHTML += `<div class = "col-lg-10 col-xl-6 gridEdit">
                                    <div class = "card">
                                        <div class = "card__edith">
                                            <div class = "img-square-wrapper">
                                                <img class = "card-img-top" src = "${reponsive[i].img}>"
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <h4 class="card-title">Card title</h4>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <button>See More </button>
                                        </div>
                                      
                                    </div>
                                    </div>`;
                                
    }    
}
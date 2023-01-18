

function UI() {

}

UI.prototype.addCarToUI = function (newCar) {


    const carList = document.getElementById("cars");

    carList.innerHTML += `
        <tr>
                 <td><img src="${newCar.url}" class="img-fluid img-thumbnail" alt="..."></td>
                 <td>${newCar.title}</td>
                 <td>${newCar.price}</td>
                 <td><a class="btn btn-danger" id="delete-car">Aracı Sil</a></td>
        </tr> 
    `


}


/*     <tr>
            <td style="width:35% ;"><img src="https://www.technopat.net/sosyal/eklenti/images-1-jpeg.704685/" class="img-fluid img-thumbnail" alt="..."></td>
            <td></td>
            <td></td>
            <td><button class="btn btn-danger" id="delete-car">Aracı Sil</button></td>
        </tr>
 */

UI.prototype.clearInputs = function (element1, element2, element3) {

    element1.value = "";
    element2.value = "";
    element3.value = "";
}


UI.prototype.displayMessages=function(message,type){

    const cardBody=document.querySelectorAll(".card-body")[0];

    // Alert Divini oluşturma

    const div = document.createElement("div");

    div.className=`alert alert-${type}`;

    div.textContent=message;


    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },3000);

}



UI.prototype.loadAllCars=function(cars){
  
    cars.forEach(car => {
        this.addCarToUI(car);
    });
    
}

UI.prototype.deleteCarFromUI=function(element){

    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllCarsFromUI=function(){

    const carList= document.getElementById("cars");

    while(carList.firstElementChild !=null){
        carList.firstElementChild.remove();
    }
}
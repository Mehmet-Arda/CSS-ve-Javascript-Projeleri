

const form = document.getElementById("car-form");

const titleElement = document.querySelector("#title");

const priceElement = document.querySelector("#price");

const urlElement = document.querySelector("#url");

const cardBody = document.querySelectorAll(".card-body")[1];

const clear = document.getElementById("clear-cars");





//UI Objesini Başlatma

const ui = new UI();

const storage = new Storage();



//Tüm Eventleri Yükleme


eventListeners();


function eventListeners() {

    form.addEventListener("submit", addCar);

    document.addEventListener("DOMContentLoaded", function () {
        let cars = storage.getCarsFromStorage();

        ui.loadAllCars(cars);
    });

    cardBody.addEventListener("click", deleteCar);

    clear.addEventListener("click", clearAllCars);

}

function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        //Hata

        ui.displayMessages("Tüm alanları doldurun...", "danger");

        e.preventDefault();

    }
    else {
        //Yeni Araç

        const newCar = new Car(title, price, url);

        ui.addCarToUI(newCar); //Arayüze araç ekleme

        ui.clearInputs(titleElement, priceElement, urlElement); //Input temizleme

        storage.addCarToStorage(newCar);

        ui.displayMessages("Araç başarılı bir şekilde eklendi...", "success");
        e.preventDefault();
    }

}

function deleteCar(e) {

    if (e.target.id === "delete-car") {

        if (confirm("Aracı silmek istediğinize emin misiniz?")) {
            ui.deleteCarFromUI(e.target);
            ui.displayMessages("Silme işlemi başarıyla gerçekleştirildi...", "success");
            storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        }
    }


}

function clearAllCars() {

    if (confirm("Tüm araçları silmek istediğinize emin misiniz?")) {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }


}


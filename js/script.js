let buttonPopup = document.querySelector(".interested-button-search");
let popupForm = document.querySelector(".hotel-search-form");
let inputArrival = document.querySelector(".form-arrival-date");
let inputDeparture = document.querySelector(".form-departure-date");
let popupSubmitButton = document.querySelector(".button-find");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonPopup.preventDefault();

buttonPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupForm.classList.toggle("visually-hidden");
    if (!popupForm.classList.contains("modal-show")) {
        popupForm.classList.add("modal-show");
    }   else {
        popupForm.classList.remove("modal-show");
    }
    if (popupForm.classList.contains("modal-error")) {
        popupForm.classList.remove("modal-error");
    }
});

popupSubmitButton.addEventListener("click", function(evt) {
    if (inputArrival.value == "" || inputDeparture.value == "") {
        evt.preventDefault();
        popupForm.classList.add("modal-error");
    }  else {
        evt.preventDefault();
        console.log("Записываем данные");
        if (isStorageSupport) {
            localStorage.setItem("arrivalDate", inputArrival.value);
            localStorage.setItem("departureDate", inputDeparture.value);
        }
    }
});

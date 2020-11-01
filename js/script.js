var buttonPopup = document.querySelector(".interested-button-search");
var popupForm = document.querySelector(".hotel-search-form");
var inputArrival = document.querySelector(".form-arrival-date");
var inputDeparture = document.querySelector(".form-departure-date");
var popupSubmitButton = document.querySelector(".button-find");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

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

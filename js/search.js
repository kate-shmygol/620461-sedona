// Форма поиска
var open = document.querySelector(".search-button-open");
var popup = document.querySelector(".modal-search");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

// Карта
var mapLink = document.querySelector(".map-link-popup");
var mapPopup = document.querySelector(".modal-map");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});


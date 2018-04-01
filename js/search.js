var open = document.querySelector(".search-button-open");
var popup = document.querySelector(".modal-search");

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

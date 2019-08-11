var chart = document.querySelector(".catalog__price");
var modalShow = document.querySelector(".modal");

chart.addEventListener("click", function (evt) {

  evt.preventDefault();
  console.log ("нажали на корзинку");

  modalShow.classList.add("modal-show");

});

var modalPush = querySelector(".modal-overlay");
var modalPush = querySelector(".modal__button");
var modalClose = querySelector(".modal-show");

modalPush.addEventListener("click", funtion() {

  modalClose.classList.remove("modal-show");

});


var order = document.querySelector('.product-week__button');
var modalShow = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var charts = document.querySelectorAll('.catalog__price');

order.addEventListener('click', function (evt) {

  evt.preventDefault();
  console.log('нажали на корзинку');

  modalShow.classList.add('modal-show');
});



overlay.addEventListener('click', function (evt) {

  evt.preventDefault();
  console.log('нажали на корзинку');

  modalShow.classList.remove('modal-show');
});


charts.forEach((chart) => {

  chart.addEventListener('click', function (evt) {

    modalShow.classList.add('modal-show');

  });
});

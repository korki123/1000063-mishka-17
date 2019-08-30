
var order = document.querySelector('.product-week__button');
var modalShow = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var charts = document.querySelectorAll('.catalog__price');

var mobileClose = document.querySelector('.site-menu__toggle--icon-close')

// ====================== показать модалку. главная

order.addEventListener('click', function (evt) {

  evt.preventDefault();

  modalShow.classList.add('modal-show');
});

// ====================== закрыть модалку

overlay.addEventListener('click', function (evt) {

  evt.preventDefault();

  modalShow.classList.remove('modal-show');
});

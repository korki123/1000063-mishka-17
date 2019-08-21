
var modalShow = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var charts = document.querySelectorAll('.catalog__price');

var mobileClose = document.querySelector('.site-menu__toggle--icon-close')

// ====================== закрыть модалку

overlay.addEventListener('click', function (evt) {

  evt.preventDefault();
  console.log('нажали на корзинку');

  modalShow.classList.remove('modal-show');
});

// ====================== показать модалку. каталог (работает)



charts.forEach((chart) => {
  chart.addEventListener('click', function (etv) {

    etv.preventDefault();

    modalShow.classList.add('modal-show');

  });
});

//  {
//  chart.addEventListener("click", function (evt) {
//    evt.preventDefault();
//    console.log ("нажали на корзинку");
//  }
// }





// ====================== мобильное меню. каталог (работает)


var navToggle  = document.querySelector('.site-menu__toggle--icon-close');
var navigation = document.querySelector('.nav');

  navToggle.addEventListener('click', function (etv) {

    etv.preventDefault();

    navToggle.classList.toggle('site-menu__toggle--icon-hamburger');

    navigation.classList.toggle('nav-close');
  });

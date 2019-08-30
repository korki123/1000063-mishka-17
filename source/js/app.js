
var order = document.querySelector('.product-week__button');
var modalShow = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var charts = document.querySelectorAll('.catalog__price');

var mobileClose = document.querySelector('.site-menu__toggle--icon-close')

// ====================== показать модалку. главная

order.addEventListener('click', function (evt) {

  evt.preventDefault();
  console.log('нажали на корзинку');

  modalShow.classList.add('modal-show');
});

// ====================== закрыть модалку

overlay.addEventListener('click', function (evt) {

  evt.preventDefault();
  console.log('нажали на корзинку');

  modalShow.classList.remove('modal-show');
});

// ====================== показать модалку. каталог (не работает)

// charts.forEach((chart) => {
//
//   chart.addEventListener('click', function (evt) {
//
//     modalShow.classList.add('modal-show');
//
//   });
// });


// ====================== мобильное меню. (работает)


// var navToggle  = document.querySelector('.site-menu__toggle--icon-close');
// var navigation = document.querySelector('.nav');
//
//   navToggle.addEventListener('click', function (etv) {
//
//     etv.preventDefault();
//
//     navToggle.classList.toggle('site-menu__toggle--icon-hamburger');
//
//     navigation.classList.toggle('nav-close');
//   });


// var navToggle = document.querySelector('.site-menu__toggle--icon-hamburger');
// var navigation = document.querySelector('.nav-close');
//
//  navToggle.addEventListener('click', function(etv) {
//    etv.preventDefault();
//
//    navToggle.classList.toggle('site-menu__toggle--icon-close');
//
//    navigation.classList.toggle('nav');
//  });

 // ====================== Поведение навигации без/с js.  (работает)

// var navClose  = document.querySelector('.site-menu__toggle--icon-close');
// var navHamburger = document.querySelector('.site-menu__toggle--icon-hamburger');
// var navigation = document.querySelector('.nav');
//
//   document.addEventListener('DOMContentLoaded', function(etv) {
//
//     etv.preventDefault();
//
//     navClose.classList.add('site-menu__toggle--icon-hamburger');
//
//     navigation.classList.toggle('nav-close');
//   });

  // ========================================================================================


  // navHamburger.addEventListener('click', function(etv) {
  //
  //   etv.preventDefault();
  //
  //   navClose.classList.remove('site-menu__toggle--icon-hamburger');
  //
  // })
  //
  //

  // var navToggleScript = document.querySelector('js__toggle--icon-hamburger');
  // var navigationScript = document.querySelector('.js-nav-close');
  //
  //
  // navToggleScript.addEventListener('.site-menu__toggle--icon-hamburger');
  // navigationScript.addEventListener('.nav-close');
  //
  // navToggleScript.addEventListener('click', function (etv) {
  //
  //   etv.preventDefault ();
  //
  //   navToggleScript.classList.toggle('site-menu__toggle--icon-close');
  //   navigationScript.classList.toggle('js-nav');
  // });

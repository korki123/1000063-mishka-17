// ====================== Поведение навигации без/с js.  (работает)

var navClose  = document.querySelector('.site-menu__toggle--icon-close');
var navHamburger = document.querySelector('.site-menu__toggle--icon-hamburger');
var navigation = document.querySelector('.nav');

 document.addEventListener('DOMContentLoaded', function(etv) {

   etv.preventDefault();

   navClose.classList.add('site-menu__toggle--icon-hamburger');

   navigation.classList.toggle('nav-close');
 });



// var close  = document.querySelector('.js__toggle--icon-close');
var open = document.querySelector('.site-menu__toggle--icon-close');
var mobileNav = document.querySelector('.nav');

  open.addEventListener('click', function(etv) {

    etv.preventDefault();

    open.classList.toggle('js__toggle--icon-close');
    mobileNav.classList.toggle('js-nav');
  })

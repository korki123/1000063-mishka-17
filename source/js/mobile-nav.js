// var close  = document.querySelector('.js__toggle--icon-close');
var open = document.querySelector('.site-menu__toggle--icon-close');
var mobileNav = document.querySelector('.nav');

  open.addEventListener('click', function(etv) {

    etv.preventDefault();

    open.classList.toggle('js__toggle--icon-close');
    mobileNav.classList.toggle('js-nav');
  })

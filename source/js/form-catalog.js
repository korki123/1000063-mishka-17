var navToggle = document.querySelector('.site-menu__toggle--icon-hamburger');
var navigation = document.querySelector('.nav-close');

navToggle.addEventListener('click', function(etv) {
  etv.preventDefault();

  navToggle.classList.toggle('site-menu__toggle--icon-close');

  navigation.classList.toggle('nav');
});

// @@include('_vendors.js');

/*burger & navigation*/
let mobileMenu = document.querySelector('.main-header__burger'),
  mapStatic = document.querySelector('.form__map-img');

mobileMenu.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.main-header__burger').classList.toggle('active');
  document.querySelector('.main-header').classList.toggle('active');
  document.querySelector('.main-header__navigation').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
});
if (mapStatic) {
  mapStatic.classList.remove('form__map--no-js');
}

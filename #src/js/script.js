// @@include('_vendors.js');

/*burger & navigation*/
document.querySelector('.main-header__burger').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.main-header__burger').classList.toggle('active');
  document.querySelector('.main-header').classList.toggle('active');
  document.querySelector('.main-header__navigation').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
});

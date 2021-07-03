const burger = document.querySelector('.header__hamburger');
const fixedMenu = document.querySelector('#hamburger-menu');
const close = document.querySelector ('.burger__close')

burger.addEventListener('click', function (e) {
    e.preventDefault();
    fixedMenu.classList.add('burger__visible');
})

close.addEventListener('click', function (e) {
    e.preventDefault();
    fixedMenu.classList.remove('burger__visible');
})
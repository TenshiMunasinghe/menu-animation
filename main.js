var burger = document.querySelector('.burger');
var button = document.querySelector('.nav-btn');
var menu = document.querySelector('.menu');
button.addEventListener('click', function () {
    burger.classList.toggle('clicked');
    menu.classList.toggle('clicked');
    button.classList.toggle('clicked');
});

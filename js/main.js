const button = document.querySelector('.button');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.close-button');
button.addEventListener('click', () => {
    button.classList.add('button-hide');
    overlay.classList.add('open');
    menu.classList.add('open-menu');
});
closeButton.addEventListener('click', () => {
    button.classList.remove('button-hide');
    overlay.classList.remove('open');
    menu.classList.remove('open-menu');
});
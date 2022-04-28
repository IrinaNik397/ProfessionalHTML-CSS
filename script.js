'use strict'

let brand__dark = document.querySelector(.brand__dark);
let header__right-bars = document.querySelector('.header__right-bars');
let menu__close = document.querySelector('.menu__close');

function toggleMenu() {
    brand__dark.classList.toggle('hidden');
}

header__right-bars.addEventListener('click', toggleMenu);
menu__close.addEventListener('click', toggleMenu);
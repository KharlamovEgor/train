'use strict'

const menu = document.querySelector('.menu-block');
const wrapper = document.querySelector('.wrapper');
const menuToggles = document.querySelectorAll('.menu-toggle');
menuToggles.forEach(selector => {
    selector.addEventListener('click', function () {
        menu.classList.toggle('is-open');
        wrapper.classList.toggle('is-open');
    });
});

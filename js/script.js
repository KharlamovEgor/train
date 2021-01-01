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

const heads = document.querySelectorAll('.dropdown__head');
document.querySelectorAll('.dropdown__drawer').forEach(item => item.style.height = '0px');

heads.forEach(item => {
    item.addEventListener('click', function () {
        const drawer = this.nextElementSibling;
        drawer.closest('.dropdown').classList.toggle('is-open');
        if (!(drawer.style.height == '0px')) {
            drawer.style.height = 0;
            console.log(drawer.style.height);
        } else {
            console.log('rhz')
            drawer.style.height = drawer.scrollHeight + 'px';
        }

    })
})
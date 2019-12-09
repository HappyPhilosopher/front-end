'use strict';
const navToggle = document.querySelector('.header__nav--toggle');
const btnToggle = document.querySelector('#btn-toggle');

btnToggle.addEventListener('click', function() {
  navToggle.classList.toggle('header__nav--extend');
});

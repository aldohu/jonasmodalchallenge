'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const hideMe = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(element => {
  element.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', function () {
  hideMe();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    // Do something when the "Esc" button is pressed
    hideMe();
  }
});

overlay.addEventListener('click', function () {
  hideMe();
});

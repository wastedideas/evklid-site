document.addEventListener('DOMContentLoaded', function() {
  // Открытие меню при нажатие на значок бургера.
  document.querySelector('#header_burger').addEventListener('click', function() {
    document.querySelector('#header__menu').classList.toggle('is-active');
    document.querySelector('#header__menu__close-button').classList.toggle('close-active');
  });
  // Закрытие меню при нажатии на крестик.
  document.querySelector('#header__menu__close-button').addEventListener('click', function() {
    document.querySelector('#header__menu').classList.toggle('is-active');
    document.querySelector('#header__menu__close-button').classList.toggle('close-active');
  });
});

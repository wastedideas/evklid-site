const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  mousewheel: true,
  ForceToAxis: true,
  observeSlideChildren: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  }
});

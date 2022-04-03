const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  effect: 'fade',
  mousewheel: true,
  observeSlideChildren: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  on: {
    slideChange: function() {
      setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = false;
      }, 500);
    },
    reachBeginning: function() {
      setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = true;
      }, 650);
    },
    reachEnd: function() {
      setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = true;
      }, 650);
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-how-we-work__step-list-link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.section-how-we-work__consultation').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });
});

// Подсветка текущего таба:
var menuItems = document.getElementsByClassName("section-how-we-work__step-list-link");
  for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener("click", function() {
            var x = document.getElementsByClassName("section-how-we-work__step-list-link");
            Array.prototype.forEach.call(x, function(el) {
            el.classList.remove("section-how-we-work__step-list-link_active");
});
           this.classList.add('section-how-we-work__step-list-link_active');
         });
  }

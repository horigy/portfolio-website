(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
      // var footer = document.querySelector('.footer');
      // var toTop = coords+scrolled
      

      if (scrolled > coords) {
        goTopBtn.classList.add('upscroll-show');
        // console.log(footer.getBoundingClientRect());
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('upscroll-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.upscroll');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
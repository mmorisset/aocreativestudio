require('owl.carousel');

(function(){
  "use strict";
  $(function ($) {

    $(".fullscreen-carousel .no-nav").each(function() {
      generateCarousel($(this), 1, false);
    });

    $(".fullscreen-carousel.with-nav").each(function() {
      generateCarousel($(this), 1, true);
    });

    generateCarousel($("#thumb-carousel"), 2, true);

    function generateCarousel(element, items, navigation) {
      element.owlCarousel({
        items: items,
        touchDrag: true,
        mouseDrag: true,
        loop: true,
        responsiveRefreshRate: 1,
        nav: navigation,
        navText: ['','']
      });
    };
  });
})();










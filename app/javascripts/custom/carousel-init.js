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

    $("#thumb-carousel").owlCarousel({
      touchDrag: true,
      mouseDrag: true,
      nav: true,
      loop: true,
      responsiveRefreshRate: 1,
      navText: ['',''],
      responsive : {
        0: {
          items : 1,
        },
        480: {
          items : 1,
        },
        768: {
          items : 2,
        },
        800: {
          items: 2,
        },
        980: {
          items: 2,
        },
        1024: {
          items: 2,
        }
      }
    });




    $("#partners-carousel").owlCarousel({
      touchDrag: true,
      mouseDrag: true,
      nav: false,
      loop: true,
      responsiveRefreshRate: 1,
      navText: ['',''],
      autoplay: true,
      autoplayTimeout: 3000,
      responsive : {
        0: {
          items : 1,
        },
        480: {
          items : 2,
        },
        768: {
          items : 2,
        },
        800: {
          items: 3,
        },
        980: {
          items: 4,
        },
        1024: {
          items: 4,
        }
      }
    });

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










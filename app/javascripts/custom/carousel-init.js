
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

   




    $("#testimonial-carousel").owlCarousel({
        navigation : false,
        pagination: true,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,1],
        itemsDesktopSmall: [1440,1],
        itemsTablet:[1024,1],
        itemsTabletSmall: [600,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: true,
      });


    

    $("#team-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 1,
        touchDrag: true,
        navigationText: false,
        mouseDrag: true,
        itemsDesktop: [3000,3],
        itemsDesktopSmall: [1440,3],
        itemsTablet:[1024,3],
        itemsTabletSmall: [640,1],
        itemsMobile: [360,1],
        autoPlay: false,
        autoHeight: false,
      });

    
    $("#thumb-carousel").owlCarousel({
        navigation : true,
        pagination: false,
        responsive: true,
        items: 2,
        touchDrag: true,
        mouseDrag: true,
        itemsDesktop: [3000,8],
        itemsDesktopSmall: [1440,2],
        itemsTablet:[800,2],
        itemsTabletSmall: [600,2],
        itemsMobile: [360,1],
        navigationText: false,
        autoPlay: true
      });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  


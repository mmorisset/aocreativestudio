(function(){
  "use strict";

  $(function ($) {
    var vWidth = $(window).width();

    $('#toggle-menu').click(function(){
      $(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');
      var mastnav = $('.mastnav');
      if (mastnav.hasClass('visible')) {
        mastnav.slideUp('easeInOutQuad').removeClass('visible');
        $('#triangles.changeable').removeClass('below');
        $('#triangles.changeable').addClass('above');
        $('.masthead').addClass('sticky');
      } else {
        mastnav.slideDown(mastnavSlidedDown).addClass('visible');
        $('.masthead').removeClass('sticky');

      }
    });

    function mastnavSlidedUp () {

    }

    function mastnavSlidedDown () {
      $('#triangles.changeable').removeClass('above');
      $('#triangles.changeable').addClass('below');
    }
  });
})();

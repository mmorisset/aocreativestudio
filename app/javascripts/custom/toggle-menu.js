


/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

  var vWidth = $(window).width();

  $('#toggle-menu').click(function(){

    $(this).toggleClass('toggle-menu-visible').toggleClass('toggle-menu-hidden');
    var hidden = $('.mastnav');
    if (hidden.hasClass('visible')){
        hidden.slideUp('easeInOutQuad').removeClass('visible');
        $('.masthead').addClass('sticky');
    } else {
        hidden.slideDown().addClass('visible');
        $('.masthead').removeClass('sticky');
    }
    });


});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends



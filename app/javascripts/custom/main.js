require('javascripts/libs/classie.js');
require('javascripts/libs/device.min.js');
require('javascripts/libs/equalheights.js');
require('javascripts/libs/jquery.bxslider.min.js');
require('javascripts/libs/jquery.easing.1.3.js');
require('javascripts/libs/jquery.mb.YTPlayer.js');
require('javascripts/libs/jquery.slimmenu.min.js');
require('javascripts/libs/jquery.touchSwipe.js');
require('javascripts/libs/jquery.tweet.js');
require('javascripts/libs/jquery.visible.js');
require('javascripts/libs/modernizr.js');
require('javascripts/libs/nova.parallax.js');
require('javascripts/libs/okvideo.js');
require('javascripts/libs/owl.carousel.js');
require('javascripts/libs/pace.min.js');
require('javascripts/libs/retina.js');
require('javascripts/libs/smooth-scroll.js');
require('javascripts/libs/wow.js');

// require('javascripts/custom/bgvimeo-init.js');
// require('javascripts/custom/bgyoutube-init.js');
require('javascripts/custom/carousel-init.js');
require('javascripts/custom/equalheights-init.js');
require('javascripts/custom/form-validation.js');
require('javascripts/custom/fullscreen-carousel-init.js');

require('javascripts/custom/main.js');
require('javascripts/custom/parallax-init.js');
require('javascripts/custom/service-slider-init.js');
require('javascripts/custom/toggle-menu.js');
require('javascripts/custom/twitter-init.js');
require('javascripts/custom/wall.js');
require('javascripts/custom/isotope-init.js');




(function(){
  "use strict";

  $(function ($) {
    //Detecting viewport dimension
    var vH = $(window).height();
    var vW = $(window).width();

    //Adjusting Intro Components Spacing based on detected screen resolution
    $('.fullheight, .intro').css('height',vH);
    $('.halfheight').css('height',vH/2);
    $('.quartheight').css('height',vH/4);

    //Equi-heigh Divs
    $(document).ready(function() {
      if(vW > 1000) {
        var maxHeight = -1;

        $('.equal-height-one').each(function() {
          maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        $('.equal-height-one').each(function() {
          $(this).height(maxHeight);
        });
      }
    });

    //Mobile Menu (multi level)
    $('ul.slimmenu').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
    });

    //Navigation Sub Menu Triggering
    $('.trigger-sub-nav').click(function(){
        $('.sub-nav').slideUp('fast');
        $('.trigger-sub-nav').find('.main-nav').removeClass('nav-highlight');
        $(this).find('.main-nav').addClass('nav-highlight');
        $(this).find('.sub-nav').slideDown('slow');
    })

    $('.news-block').hover(function() {
        $(this).addClass('show-img');
        $(this).find('.news-block-inner').addClass('overlay-on');
    }, function() {
        $(this).removeClass('show-img');
        $('.news-block-inner').removeClass('overlay-on');
    });

  });

})();










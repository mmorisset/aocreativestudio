require('imagesloaded');

(function() {
  "use strict";

  var CONTAINER_ELEMENT = '#works-container';

  var utils = require('javascripts/custom/utils.js');
  var isotopeLayout = require('isotope-layout');
  var isotope;

  $(document).on('click', '.works-filter li a', filterClicked);

  utils.whenPageReadyIfExists('#works-container', function() {
    $(window).on('resize', windowResized);
    var $container = $('.works-container');

    $container.imagesLoaded( function(){
      isotope = new isotopeLayout( '#works-container', {
        itemSelector: '.works-item'
      });
    });
  });


  function filterClicked(e) {
    $('.works-filter li a').removeClass('active');
    $(e.currentTarget).addClass('active');

    var selector = $(this).attr('data-filter');
    isotope.arrange({ filter: selector });
    return false;
  }

  function windowResized(e) {
    isotope.arrange({ itemSelector: '.works-item' });
  }

})();

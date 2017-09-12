require('imagesloaded');

(function() {
  "use strict";

  var CONTAINER_ELEMENT = '#projects-container';

  var utils = require('javascripts/custom/utils.js');
  var isotopeLayout = require('isotope-layout');
  var isotope;

  $(document).on('click', '.projects-filters li a', filterClicked);

  utils.whenPageReadyIfExists('#projects-container', function() {
    $(window).on('resize', windowResized);
    var $container = $('.projects-container');

    $container.imagesLoaded( function(){
      isotope = new isotopeLayout( '#projects-container', {
        itemSelector: '.project-item'
      });
    });
  });


  function filterClicked(e) {
    $('.projects-filter li a').removeClass('active');
    $(e.currentTarget).addClass('active');

    var selector = $(this).attr('data-filter');
    isotope.arrange({ filter: selector });
    return false;
  }

  function windowResized(e) {
    isotope.arrange({ itemSelector: '.project-item' });
  }

})();

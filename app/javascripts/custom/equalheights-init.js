/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

$(window).on('load', function(){

        var widthofscreen = jQuery(window).width();

        	if (widthofscreen > 990) {
				//EqualHeights triggering via JS for viewports > 990px
			    $('.equal-height').setAllToMaxHeight();
			    $('.about-block').setAllToMaxHeight();
			    $('.contact-block').setAllToMaxHeight();
			    $('.project-info-half').setAllToMaxHeight();
        	}

	   		else {
	   			//If EqualHeights are not being triggered, then Height is not fixed value. So we are removing '.valign' (vertical align) on all COL-* Elements (Bootstrap Columns) when viewed on viewports width < 990px
				$( "*[class^='col-md-']").find('.valign').removeClass('valign');
			}


    });




});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends

















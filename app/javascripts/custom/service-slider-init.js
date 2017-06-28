
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

$('.bxslider').bxSlider({
  pagerCustom: '.bxpager'
});

$('.service-block a').click(function(){
	$('.service-block a').css('opacity','0.3');
	$(this).css('opacity','1');
})
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	






  


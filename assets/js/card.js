!(function($) {
  "use strict";

  	var cardHeight = document.getElementById('cardy').clientHeight;
	var h = window.innerHeight;
	var width = $(window).width();
	
	$( window ).resize(function() {
		var cardHeight = document.getElementById('cardy').clientHeight;
		var h = window.innerHeight;
		var width = $(window).width();
		var marginTop = ((h-cardHeight)/2)
		if(h>cardHeight & width>992) {
			$(".card-container").css("margin-top", Math.max(marginTop, "60"));
		}
	});

  $(document).ready(function() {	
	$(document.getElementById('cardy')).addClass('animate-opacity');
	if (h>cardHeight & width>992) {
		var marginTop = ((h-cardHeight)/2)
		$(".card-container").css("margin-top", Math.max(marginTop, "60"));
	} 
  });
  
  
    // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

})(jQuery);
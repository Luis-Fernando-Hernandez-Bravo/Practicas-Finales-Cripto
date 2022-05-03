	  $(document).ready(function(){
	    $('.parallax').parallax();
	    $('.sidenav').sidenav();
	    $('.collapsible').collapsible();
	    $('.materialboxed').materialbox();
	    $(".reference").click(function(e) {
		  e.preventDefault();
		    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 400);
		});
      $("#download-button").click(function(e) {
      e.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top}, 400);
    });
      $('.slider').slider({
                full_width: true,
        interval: 8000 // default - interval: 6000
      });
  });
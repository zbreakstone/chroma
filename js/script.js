// This is the main javascript file for the Singolo Project

$(document).ready(function(){
	// Show all
	$("#all").click(function(){
		$('li[data-portfolio-project="web"]').removeClass("dim");
		$('li[data-portfolio-project="graphic"]').removeClass("dim");
		$('li[data-portfolio-project="art"]').removeClass("dim");
	});
	// Show all with data-portfolio-project="web", hide others.
	$("#web").click(function(){
		$('li[data-portfolio-project="web"]').removeClass("dim");
		$('li[data-portfolio-project="graphic"]').addClass("dim");
		$('li[data-portfolio-project="art"]').addClass("dim");
	});
	// Show all with data-portfolio-project="graphic", hide others.
	$("#graphic").click(function(){
		$('li[data-portfolio-project="graphic"]').removeClass("dim");
		$('li[data-portfolio-project="web"]').addClass("dim");
		$('li[data-portfolio-project="art"]').addClass("dim");
	});
	// Show all with data-portfolio-project="art", hide others.
	$("#art").click(function(){
		$('li[data-portfolio-project="art"]').removeClass("dim");
		$('li[data-portfolio-project="web"]').addClass("dim");
		$('li[data-portfolio-project="graphic"]').addClass("dim");
	});
});


$(document).ready(function(e) {
            
	$('.top-section nav > ul > li > a, .footer-section nav > ul > li > a, h2.down > a').bind('click', function(e) {
	    e.preventDefault();
	    $('html,body').animate({scrollTop: $(this.hash).offset().top - 0}, 1000);                                                         
	});

});
$(document).ready(function(){
	console.log(':)');

	if ($(window).width() < 600) {
		$('.nav').addClass('nav-new')
	}

	if ($(window).width() > 600) {
		$('.nav').removeClass('nav-new')
	}


	if ($(window).width() < 600) {
		$('.me').addClass('hide')
	}

	if ($(window).width() > 600) {
		$('.me').removeClass('hide')
	}

});
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function(){
	console.log(':)');

	if ($(window).width() < 900) {
		$('.footer').removeClass('b-top')
	}

	if ($(window).width() > 900) {
		$('.footer').addClass('b-top')
	}

});
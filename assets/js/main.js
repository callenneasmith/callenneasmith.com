$(document).ready(function(){

$('.btn-about').click(function(){
    $('.projects').addClass('hide');
    $('.about').removeClass('hide');
  });

$('.btn-close').click(function(){
    $('.projects').removeClass('hide');
    $('.about').addClass('hide');
  });

$(function() {
    $( ".imgprofile").draggable();
  	});

$(".btn-more").click(function () {
  	$(this).toggleClass('active');
  	$(this).next('.caption-slide').slideToggle();
  	// console.log('clickbuttonevent');
});


});
$(document).ready(function(){

$('.tog-about').click(function(){
    $('.projects').addClass('hide');
    $('.about').removeClass('hide');
    $('.tog-projects').removeClass('hide');
    $('.tog-about').addClass('hide');
  });

$('.tog-projects').click(function(){
    $('.projects').removeClass('hide');
    $('.about').addClass('hide');
    $('.tog-projects').addClass('hide');
    $('.tog-about').removeClass('hide');
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
$(document).ready(function(){

$('.btn-about').click(function(){
    $('.projects').addClass('hide');
    $('.about').removeClass('hide');
  });

$('.btn-close').click(function(){
    $('.projects').removeClass('hide');
    $('.about').addClass('hide');
  });


});
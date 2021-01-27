$(document).ready(function(){

$('.callme').click(function(){
    $('.js').removeClass('hide');
    $('.callme').addClass('hide');
    $('.contact').removeClass('hide');
  });

$('.js').click(function(){
    $('.js').addClass('hide');
    $('.callme').removeClass('hide');
    $('.contact').addClass('hide');
  });



$('.gal').click(function(){
    $('.js2').removeClass('hide');
    $('.gal').addClass('hide');
    $('.gallery').removeClass('hide');
  });

$('.js2').click(function(){
    $('.js2').addClass('hide');
    $('.gal').removeClass('hide');
    $('.gallery').addClass('hide');
  });

});
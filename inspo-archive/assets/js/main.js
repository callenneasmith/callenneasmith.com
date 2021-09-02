$(document).ready(function(){
  console.log(':)');

 $('.btn-ty').click(function(){
    $('.link1').addClass('hide')
    $('.link1.ty').removeClass('hide')
  });

 $('.btn-pro').click(function(){
    $('.link1').addClass('hide')
    $('.link1.pro').removeClass('hide')
  });

 $('.btn-app').click(function(){
    $('.link1').addClass('hide')
    $('.link1.app').removeClass('hide')
  });

 $('.btn-tut').click(function(){
    $('.link1').addClass('hide')
    $('.link1.tut').removeClass('hide')
  });

 $('.btn-res').click(function(){
    $('.link1.ty').removeClass('hide')
    $('.link1.pro').removeClass('hide')
    $('.link1.app').removeClass('hide')
    $('.link1.tut').removeClass('hide')
  });



 $('.btn-au').click(function(){
    $('.link').addClass('hide')
    $('.link.au').removeClass('hide')
  });

 $('.btn-int').click(function(){
    $('.link').addClass('hide')
    $('.link.int').removeClass('hide')
  });

 $('.btn-res2').click(function(){
    $('.link.au').removeClass('hide')
    $('.link.int').removeClass('hide')
  });

});
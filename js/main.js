//GLOBAL VARS
// DON'T TOUCH THESE
var index = 1;
var wi = $(window).width();
var images = new Array(
  "assets/imgs/fish/fish-img/angel1.png",
  "assets/imgs/fish/fish-img/angel2.png",
  "assets/imgs/fish/fish-img/gold.png",
  "assets/imgs/fish/fish-img/spade.png",
  "assets/imgs/fish/fish-img/tuna.png"
);
var desc = new Array(
  "assets/imgs/fish/fish-desc/desktop/angel1-text.png",
  "assets/imgs/fish/fish-desc/desktop/angel2-text.png",
  "assets/imgs/fish/fish-desc/desktop/gold-text.png",
  "assets/imgs/fish/fish-desc/desktop/spade-text.png",
  "assets/imgs/fish/fish-desc/desktop/tuna-text.png"
);
var descmobile = new Array(
  "assets/imgs/fish/fish-desc/mobile/angel1-text-mob.png",
  "assets/imgs/fish/fish-desc/mobile/angel2-text-mob.png",
  "assets/imgs/fish/fish-desc/mobile/gold-text-mob.png",
  "assets/imgs/fish/fish-desc/mobile/spade-text-mob.png",
  "assets/imgs/fish/fish-desc/mobile/tuna-text-mob.png"
);

// EVERYTHING IS IN THIS FUNCTION
$(document).ready(function () {
  $(window).resize(function () {
    var wi = $(window).width();
  });

  // FISH IMG LOOP
  function fishImgArray() {
    $("#fishImgsArray").fadeOut("fast", function () {
      $(this).attr("src", images[index]);

      $(this).fadeIn("fast", function () {
        if (index == images.length - 1) {
          index = 0;
        } else {
          index++;
        }
      });
    });
  }

  // DESKTOP SLIDERS
  const desktop = window.matchMedia("(min-width: 1000px)");
  if (desktop.matches) {
    // MAPMOON
    // OPENS
    $(".left__mapmoon").click(function () {
      $("#mapmoon").animate({ right: 0 });
      //
      $("#bedford-pizzeria").animate({ right: -wi });
      $("#love-project").animate({ right: -wi });
      $("#ban-bomb").animate({ right: -wi });
      $("#final-hope-medical").animate({ right: -wi });
      //
    });
    // CLOSES
    $("#mapmoon-close").click(function () {
      $("#mapmoon").animate({ right: -wi });
      //
    });


    // BEDFORD
    // OPENS
    $(".left__bedford-pizzeria").click(function () {
      $("#bedford-pizzeria").animate({ right: 0 });
      //
      $("#mapmoon").animate({ right: -wi });
      $("#love-project").animate({ right: -wi });
      $("#ban-bomb").animate({ right: -wi });
      $("#final-hope-medical").animate({ right: -wi });
      //
    });
    // CLOSES
    $("#bedford-pizzeria-close").click(function () {
      $("#bedford-pizzeria").animate({ right: -wi });
      //
    });

    // LOVE PROJECT
    // OPENS
    $(".left__love-project").click(function () {
      $("#love-project").animate({ right: 0 });
      //
      $("#bedford-pizzeria").animate({ right: -wi });
      $("#mapmoon").animate({ right: -wi });
      $("#ban-bomb").animate({ right: -wi });
      $("#final-hope-medical").animate({ right: -wi });
      //
    });
    // CLOSES
    $("#love-project-close").click(function () {
      $("#love-project").animate({ right: -wi });
      //
    });

    // BAN THE BOMB
    // OPENS
    $(".left__ban-bomb").click(function () {
      $("#ban-bomb").animate({ right: 0 });
      //
      $("#bedford-pizzeria").animate({ right: -wi });
      $("#love-project").animate({ right: -wi });
      $("#mapmoon").animate({ right: -wi });
      $("#final-hope-medical").animate({ right: -wi });
      //
    });
    // CLOSES
    $("#ban-bomb").click(function () {
      $("#ban-bomb").animate({ right: -wi });
      //
    });

    // FINAL HOPE MEDICAL
    // OPENS
    $(".left__final-hope-medical").click(function () {
      $("#final-hope-medical").animate({ right: 0 });
      //
      $("#bedford-pizzeria").animate({ right: -wi });
      $("#love-project").animate({ right: -wi });
      $("#ban-bomb").animate({ right: -wi });
      $("#mapmoon").animate({ right: -wi });
      //
    });
    // CLOSES
    $("#final-hope-medical").click(function () {
      $("#final-hope-medical").animate({ right: -wi });
      //
    });

    function fishDescArray() {
      $("#fishDescArray").fadeOut("fast", function () {
        $(this).attr("src", desc[index]);

        $(this).fadeIn("fast", function () {
          if (index == desc.length - 1) {
            index = 0;
          } else {
            index++;
          }
        });
      });
    }
  }

  // PHONE SLIDERS
  const phone = window.matchMedia("(max-width: 1000px)");
  if (phone.matches) {
    $(".left__mapmoon").click(function () {
      $("#mapmoon").animate({ right: 0, width: wi });
    });
    $("#mapmoon-close").click(function () {
      $("#mapmoon").animate({ right: -wi, width: wi });
    });


    $(".left__bedford-pizzeria").click(function () {
      $("#bedford-pizzeria").animate({ right: 0, width: wi });
    });
    $("#bedford-pizzeria-close").click(function () {
      $("#bedford-pizzeria").animate({ right: -wi, width: wi });
    });


    $(".left__love-project").click(function () {
      $("#love-project").animate({ right: 0, width: wi });
    });
    $("#love-project-close").click(function () {
      $("#love-project").animate({ right: -wi, width: wi });
    });


    $(".left__ban-bomb").click(function () {
      $("#ban-bomb").animate({ right: 0, width: wi });
    });
    $("#ban-bomb-close").click(function () {
      $("#ban-bomb").animate({ right: -wi, width: wi });
    });


    $(".left__final-hope-medical").click(function () {
      $("#final-hope-medical").animate({ right: 0, width: wi });
    });
    $("#final-hope-medical-close").click(function () {
      $("#final-hope-medical").animate({ right: -wi, width: wi });
    });


    $(".left__menu").click(function (e) {
      $(".right__contact").toggle();
      $(".left__menu").toggle();
      $(".left__menu-x").toggle();
      e.preventDefault();
    });
    $(".left__menu-x").click(function (e) {
      $(".right__contact").toggle();
      $(".left__menu").toggle();
      $(".left__menu-x").toggle();
    });

    function fishDescArrayMobile() {
      $("#fishDescArrayMobile").fadeOut("fast", function () {
        $(this).attr("src", descmobile[index]);

        $(this).fadeIn("fast", function () {
          if (index == descmobile.length - 1) {
            index = 0;
          } else {
            index++;
          }
        });
      });
    }
  }

  // SET INTERVALS TO 5 SECS, MOBILE, DESKTOP
  setInterval(fishImgArray, 5000);
  setInterval(fishDescArray, 5000);
  setInterval(fishDescArrayMobile, 5000);
});

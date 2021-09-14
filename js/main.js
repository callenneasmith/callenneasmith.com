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

$(".left").attr("draggable", false);
$(".right").attr("draggable", false);
$("wrapper").attr("draggable", false);
$("*").attr("draggable", false);

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
    $(function () {
      $(".showSingle").click(function () {
        $(".targetDiv").animate({ right: -wi });
        $("#div" + $(this).attr("target")).animate({ right: 0 });
      });

      $(".left__slider-header").click(function () {
        $(".targetDiv").animate({ right: -wi });
      });
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
    $(function () {
      $(".showSingle").click(function () {
        $(".targetDiv").animate({ right: -wi, width: wi });
        $("#div" + $(this).attr("target")).animate({ right: 0, width: wi });
      });

      $(".left__slider-header").click(function () {
        $(".targetDiv").animate({ right: -wi, width: wi });
      });
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
